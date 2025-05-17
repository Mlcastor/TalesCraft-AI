import { logger } from "./logger";
import { RateLimiterMemory } from "rate-limiter-flexible";

/* ---------------------------------------------------------------------------
 * Better Auth Rate-Limiter Wrapper
 * ---------------------------------------------------------------------------
 * Uses Better Auth's built-in rate-limiter plugin when available. In local
 * development (or CI) where the package may not yet be installed, it falls
 * back to the previous in-memory implementation so the app still runs.
 * ------------------------------------------------------------------------- */

export interface RateLimitOptions {
  /** Maximum number of allowed calls inside the window */
  limit: number;
  /** Window size in ms */
  windowMs: number;
}

/*
 * Attempt to resolve the Better Auth rate-limiter plugin **dynamically** so the
 * build doesn't fail when the package is absent. If it can't be loaded we
 * transparently fall back to `rate-limiter-flexible` (memory) which is
 * installed as a normal dependency. This gives us production-grade limiting
 * without requiring the proprietary plugin while still allowing teams that do
 * have the plugin to benefit from it automatically.
 */

let BetterAuthRateLimiter: any | null = null;

function tryLoadBetterAuth(): any | null {
  try {
    // Use eval'd require so bundlers can't statically analyse the string.
    const dynamicRequire = (0, eval)("require") as typeof require;
    return dynamicRequire("@better-auth/rate-limiter").RateLimiter;
  } catch (_err) {
    return null;
  }
}

BetterAuthRateLimiter = tryLoadBetterAuth();

if (!BetterAuthRateLimiter) {
  // Fallback wrapper around rate-limiter-flexible's in-memory implementation
  class FlexibleMemoryLimiter {
    private limiter: RateLimiterMemory;

    constructor({ windowMs, max }: { windowMs: number; max: number }) {
      this.limiter = new RateLimiterMemory({
        points: max,
        duration: Math.ceil(windowMs / 1000), // library expects seconds
      });
    }

    async consume(key: string) {
      await this.limiter.consume(key);
    }

    reset(key: string) {
      this.limiter.delete(key);
    }
  }

  BetterAuthRateLimiter = FlexibleMemoryLimiter;

  logger.info(
    "Using rate-limiter-flexible in-memory fallback for request limiting",
    { context: "rate-limit" }
  );
}

/* ------------------------------ FALLBACK STORE ---------------------------- */
interface Bucket {
  count: number;
  reset: number; // epoch ms
}

const _memoryStore: Map<string, Bucket> =
  (global as any).__MEMORY_RATE_LIMIT__ || new Map<string, Bucket>();
if (!(global as any).__MEMORY_RATE_LIMIT__) {
  (global as any).__MEMORY_RATE_LIMIT__ = _memoryStore;
}

/* --------------------------- INTERNAL HELPERS ---------------------------- */
function memoryAllow(key: string, opts: RateLimitOptions): boolean {
  const now = Date.now();
  let bucket = _memoryStore.get(key);
  if (!bucket || bucket.reset < now) {
    bucket = { count: 0, reset: now + opts.windowMs };
  }
  bucket.count += 1;
  _memoryStore.set(key, bucket);
  const allowed = bucket.count <= opts.limit;
  if (!allowed) {
    logger.warn(`Rate-limit exceeded (memory) for key ${key}`, {
      context: "rate-limit",
    });
  }
  return allowed;
}

/* ----------------------- PUBLIC WRAPPER FUNCTIONS ------------------------ */

/**
 * Consume 1 point from the bucket identified by `key`.
 * Returns `true` if the request is still under the limit.
 */
export async function allowRequest(
  key: string,
  opts: RateLimitOptions
): Promise<boolean> {
  if (BetterAuthRateLimiter) {
    // One limiter instance per unique rule (limit+window)
    const ruleId = `${opts.limit}:${opts.windowMs}`;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const limiterMap: Map<string, any> =
      (global as any).__BETTER_AUTH_LIMITERS__ || new Map();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (!(global as any).__BETTER_AUTH_LIMITERS__) {
      (global as any).__BETTER_AUTH_LIMITERS__ = limiterMap;
    }

    let limiter = limiterMap.get(ruleId);
    if (!limiter) {
      limiter = new BetterAuthRateLimiter({
        windowMs: opts.windowMs,
        max: opts.limit,
      });
      limiterMap.set(ruleId, limiter);
    }

    try {
      await limiter.consume(key);
      return true;
    } catch (err) {
      logger.warn(`Rate-limit exceeded (BetterAuth) for key ${key}`, {
        context: "rate-limit",
      });
      return false;
    }
  }

  // Fallback
  return memoryAllow(key, opts);
}

export async function resetKey(key: string): Promise<void> {
  if (BetterAuthRateLimiter) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const limiterMap: Map<string, any> = (global as any)
      .__BETTER_AUTH_LIMITERS__;
    if (limiterMap) {
      limiterMap.forEach((limiter) => limiter.reset(key));
    }
  } else {
    _memoryStore.delete(key);
  }
}
