import { Resend } from "resend";
import { logger } from "@/lib/utils/logger";

const resendApiKey = process.env.RESEND_API_KEY;

// Only throw during development or at runtime, not during production build
if (!resendApiKey && process.env.NODE_ENV !== "production") {
  throw new Error(
    "RESEND_API_KEY environment variable must be defined – obtain it from the Resend dashboard and restart."
  );
}

// Create a placeholder Resend instance for build-time
const resend = resendApiKey
  ? new Resend(resendApiKey)
  : {
      // Mock implementation for build time
      emails: {
        send: async () => ({
          id: "build-time-mock",
          data: null,
        }),
      },
    };

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

function createHtmlTemplate(
  heading: string,
  message: string,
  ctaLabel: string,
  ctaLink: string
) {
  return `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:0 auto;padding:24px">
      <h2>${heading}</h2>
      <p>${message}</p>
      <p style="text-align:center;margin:32px 0">
        <a href="${ctaLink}" style="background:#2563eb;color:#fff;padding:12px 24px;border-radius:6px;text-decoration:none">${ctaLabel}</a>
      </p>
      <p style="font-size:12px;color:#6b7280">If you did not request this, you can safely ignore this email.</p>
    </div>
  `;
}

export async function sendVerificationEmail(to: string, token: string) {
  // Ensure API key is available at runtime
  ensureApiKey();

  const verifyUrl = `${APP_URL}/verify-email?token=${token}`;
  const subject = "Verify your email";
  const html = createHtmlTemplate(
    "Welcome!",
    "Please confirm your email address to activate your account.",
    "Verify Email",
    verifyUrl
  );

  try {
    await resend.emails.send({ from: FROM_EMAIL, to, subject, html });
    logger.info("Verification email sent", {
      context: "email",
      metadata: { to },
    });
  } catch (error) {
    logger.error("Error sending verification email", {
      context: "email",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

export async function sendPasswordResetEmail(to: string, token: string) {
  // Ensure API key is available at runtime
  ensureApiKey();

  const resetUrl = `${APP_URL}/reset-password?token=${token}`;
  const subject = "Reset your password";
  const html = createHtmlTemplate(
    "Password reset requested",
    "Click the button below to set a new password. This link is valid for 24 hours.",
    "Reset Password",
    resetUrl
  );

  try {
    await resend.emails.send({ from: FROM_EMAIL, to, subject, html });
    logger.info("Password reset email sent", {
      context: "email",
      metadata: { to },
    });
  } catch (error) {
    logger.error("Error sending reset email", {
      context: "email",
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

// We'll check at runtime if needed
function ensureApiKey() {
  if (!resendApiKey && typeof window !== "undefined") {
    throw new Error(
      "RESEND_API_KEY environment variable must be defined for sending emails."
    );
  }
}

// Sender must be a verified domain or address in Resend.
const FROM_EMAIL =
  process.env.EMAIL_FROM || "noreply@" + (process.env.DOMAIN || "example.com");
