
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Character
 * 
 */
export type Character = $Result.DefaultSelection<Prisma.$CharacterPayload>
/**
 * Model GameSession
 * 
 */
export type GameSession = $Result.DefaultSelection<Prisma.$GameSessionPayload>
/**
 * Model GameState
 * 
 */
export type GameState = $Result.DefaultSelection<Prisma.$GameStatePayload>
/**
 * Model NPCTemplate
 * 
 */
export type NPCTemplate = $Result.DefaultSelection<Prisma.$NPCTemplatePayload>
/**
 * Model NPCState
 * 
 */
export type NPCState = $Result.DefaultSelection<Prisma.$NPCStatePayload>
/**
 * Model LoreCategory
 * 
 */
export type LoreCategory = $Result.DefaultSelection<Prisma.$LoreCategoryPayload>
/**
 * Model WorldLore
 * 
 */
export type WorldLore = $Result.DefaultSelection<Prisma.$WorldLorePayload>
/**
 * Model Decision
 * 
 */
export type Decision = $Result.DefaultSelection<Prisma.$DecisionPayload>
/**
 * Model AIContextHistory
 * 
 */
export type AIContextHistory = $Result.DefaultSelection<Prisma.$AIContextHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.character`: Exposes CRUD operations for the **Character** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characters
    * const characters = await prisma.character.findMany()
    * ```
    */
  get character(): Prisma.CharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameSession`: Exposes CRUD operations for the **GameSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameSessions
    * const gameSessions = await prisma.gameSession.findMany()
    * ```
    */
  get gameSession(): Prisma.GameSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameState`: Exposes CRUD operations for the **GameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameStates
    * const gameStates = await prisma.gameState.findMany()
    * ```
    */
  get gameState(): Prisma.GameStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nPCTemplate`: Exposes CRUD operations for the **NPCTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NPCTemplates
    * const nPCTemplates = await prisma.nPCTemplate.findMany()
    * ```
    */
  get nPCTemplate(): Prisma.NPCTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nPCState`: Exposes CRUD operations for the **NPCState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NPCStates
    * const nPCStates = await prisma.nPCState.findMany()
    * ```
    */
  get nPCState(): Prisma.NPCStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loreCategory`: Exposes CRUD operations for the **LoreCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoreCategories
    * const loreCategories = await prisma.loreCategory.findMany()
    * ```
    */
  get loreCategory(): Prisma.LoreCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worldLore`: Exposes CRUD operations for the **WorldLore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorldLores
    * const worldLores = await prisma.worldLore.findMany()
    * ```
    */
  get worldLore(): Prisma.WorldLoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.decision`: Exposes CRUD operations for the **Decision** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Decisions
    * const decisions = await prisma.decision.findMany()
    * ```
    */
  get decision(): Prisma.DecisionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIContextHistory`: Exposes CRUD operations for the **AIContextHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIContextHistories
    * const aIContextHistories = await prisma.aIContextHistory.findMany()
    * ```
    */
  get aIContextHistory(): Prisma.AIContextHistoryDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Character: 'Character',
    GameSession: 'GameSession',
    GameState: 'GameState',
    NPCTemplate: 'NPCTemplate',
    NPCState: 'NPCState',
    LoreCategory: 'LoreCategory',
    WorldLore: 'WorldLore',
    Decision: 'Decision',
    AIContextHistory: 'AIContextHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "character" | "gameSession" | "gameState" | "nPCTemplate" | "nPCState" | "loreCategory" | "worldLore" | "decision" | "aIContextHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Character: {
        payload: Prisma.$CharacterPayload<ExtArgs>
        fields: Prisma.CharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findFirst: {
            args: Prisma.CharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          findMany: {
            args: Prisma.CharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          create: {
            args: Prisma.CharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          createMany: {
            args: Prisma.CharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          delete: {
            args: Prisma.CharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          update: {
            args: Prisma.CharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          deleteMany: {
            args: Prisma.CharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>[]
          }
          upsert: {
            args: Prisma.CharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterPayload>
          }
          aggregate: {
            args: Prisma.CharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacter>
          }
          groupBy: {
            args: Prisma.CharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterCountAggregateOutputType> | number
          }
        }
      }
      GameSession: {
        payload: Prisma.$GameSessionPayload<ExtArgs>
        fields: Prisma.GameSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findFirst: {
            args: Prisma.GameSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          findMany: {
            args: Prisma.GameSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          create: {
            args: Prisma.GameSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          createMany: {
            args: Prisma.GameSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          delete: {
            args: Prisma.GameSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          update: {
            args: Prisma.GameSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          deleteMany: {
            args: Prisma.GameSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>[]
          }
          upsert: {
            args: Prisma.GameSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameSessionPayload>
          }
          aggregate: {
            args: Prisma.GameSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameSession>
          }
          groupBy: {
            args: Prisma.GameSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameSessionCountArgs<ExtArgs>
            result: $Utils.Optional<GameSessionCountAggregateOutputType> | number
          }
        }
      }
      GameState: {
        payload: Prisma.$GameStatePayload<ExtArgs>
        fields: Prisma.GameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          findFirst: {
            args: Prisma.GameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          findMany: {
            args: Prisma.GameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>[]
          }
          create: {
            args: Prisma.GameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          createMany: {
            args: Prisma.GameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>[]
          }
          delete: {
            args: Prisma.GameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          update: {
            args: Prisma.GameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          deleteMany: {
            args: Prisma.GameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>[]
          }
          upsert: {
            args: Prisma.GameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameStatePayload>
          }
          aggregate: {
            args: Prisma.GameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameState>
          }
          groupBy: {
            args: Prisma.GameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameStateCountArgs<ExtArgs>
            result: $Utils.Optional<GameStateCountAggregateOutputType> | number
          }
        }
      }
      NPCTemplate: {
        payload: Prisma.$NPCTemplatePayload<ExtArgs>
        fields: Prisma.NPCTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NPCTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NPCTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>
          }
          findFirst: {
            args: Prisma.NPCTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NPCTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>
          }
          findMany: {
            args: Prisma.NPCTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>[]
          }
          create: {
            args: Prisma.NPCTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>
          }
          createMany: {
            args: Prisma.NPCTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NPCTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>[]
          }
          delete: {
            args: Prisma.NPCTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>
          }
          update: {
            args: Prisma.NPCTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>
          }
          deleteMany: {
            args: Prisma.NPCTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NPCTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NPCTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>[]
          }
          upsert: {
            args: Prisma.NPCTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCTemplatePayload>
          }
          aggregate: {
            args: Prisma.NPCTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNPCTemplate>
          }
          groupBy: {
            args: Prisma.NPCTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NPCTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NPCTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<NPCTemplateCountAggregateOutputType> | number
          }
        }
      }
      NPCState: {
        payload: Prisma.$NPCStatePayload<ExtArgs>
        fields: Prisma.NPCStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NPCStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NPCStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>
          }
          findFirst: {
            args: Prisma.NPCStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NPCStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>
          }
          findMany: {
            args: Prisma.NPCStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>[]
          }
          create: {
            args: Prisma.NPCStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>
          }
          createMany: {
            args: Prisma.NPCStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NPCStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>[]
          }
          delete: {
            args: Prisma.NPCStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>
          }
          update: {
            args: Prisma.NPCStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>
          }
          deleteMany: {
            args: Prisma.NPCStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NPCStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NPCStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>[]
          }
          upsert: {
            args: Prisma.NPCStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCStatePayload>
          }
          aggregate: {
            args: Prisma.NPCStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNPCState>
          }
          groupBy: {
            args: Prisma.NPCStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<NPCStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.NPCStateCountArgs<ExtArgs>
            result: $Utils.Optional<NPCStateCountAggregateOutputType> | number
          }
        }
      }
      LoreCategory: {
        payload: Prisma.$LoreCategoryPayload<ExtArgs>
        fields: Prisma.LoreCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoreCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoreCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>
          }
          findFirst: {
            args: Prisma.LoreCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoreCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>
          }
          findMany: {
            args: Prisma.LoreCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>[]
          }
          create: {
            args: Prisma.LoreCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>
          }
          createMany: {
            args: Prisma.LoreCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoreCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>[]
          }
          delete: {
            args: Prisma.LoreCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>
          }
          update: {
            args: Prisma.LoreCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>
          }
          deleteMany: {
            args: Prisma.LoreCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoreCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoreCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>[]
          }
          upsert: {
            args: Prisma.LoreCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreCategoryPayload>
          }
          aggregate: {
            args: Prisma.LoreCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoreCategory>
          }
          groupBy: {
            args: Prisma.LoreCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoreCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoreCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<LoreCategoryCountAggregateOutputType> | number
          }
        }
      }
      WorldLore: {
        payload: Prisma.$WorldLorePayload<ExtArgs>
        fields: Prisma.WorldLoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldLoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldLoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>
          }
          findFirst: {
            args: Prisma.WorldLoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldLoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>
          }
          findMany: {
            args: Prisma.WorldLoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>[]
          }
          create: {
            args: Prisma.WorldLoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>
          }
          createMany: {
            args: Prisma.WorldLoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorldLoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>[]
          }
          delete: {
            args: Prisma.WorldLoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>
          }
          update: {
            args: Prisma.WorldLoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>
          }
          deleteMany: {
            args: Prisma.WorldLoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorldLoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorldLoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>[]
          }
          upsert: {
            args: Prisma.WorldLoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldLorePayload>
          }
          aggregate: {
            args: Prisma.WorldLoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorldLore>
          }
          groupBy: {
            args: Prisma.WorldLoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorldLoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldLoreCountArgs<ExtArgs>
            result: $Utils.Optional<WorldLoreCountAggregateOutputType> | number
          }
        }
      }
      Decision: {
        payload: Prisma.$DecisionPayload<ExtArgs>
        fields: Prisma.DecisionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DecisionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DecisionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findFirst: {
            args: Prisma.DecisionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DecisionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          findMany: {
            args: Prisma.DecisionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          create: {
            args: Prisma.DecisionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          createMany: {
            args: Prisma.DecisionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DecisionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          delete: {
            args: Prisma.DecisionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          update: {
            args: Prisma.DecisionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          deleteMany: {
            args: Prisma.DecisionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DecisionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DecisionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>[]
          }
          upsert: {
            args: Prisma.DecisionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DecisionPayload>
          }
          aggregate: {
            args: Prisma.DecisionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDecision>
          }
          groupBy: {
            args: Prisma.DecisionGroupByArgs<ExtArgs>
            result: $Utils.Optional<DecisionGroupByOutputType>[]
          }
          count: {
            args: Prisma.DecisionCountArgs<ExtArgs>
            result: $Utils.Optional<DecisionCountAggregateOutputType> | number
          }
        }
      }
      AIContextHistory: {
        payload: Prisma.$AIContextHistoryPayload<ExtArgs>
        fields: Prisma.AIContextHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIContextHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIContextHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>
          }
          findFirst: {
            args: Prisma.AIContextHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIContextHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>
          }
          findMany: {
            args: Prisma.AIContextHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>[]
          }
          create: {
            args: Prisma.AIContextHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>
          }
          createMany: {
            args: Prisma.AIContextHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIContextHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>[]
          }
          delete: {
            args: Prisma.AIContextHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>
          }
          update: {
            args: Prisma.AIContextHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AIContextHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIContextHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIContextHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>[]
          }
          upsert: {
            args: Prisma.AIContextHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIContextHistoryPayload>
          }
          aggregate: {
            args: Prisma.AIContextHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIContextHistory>
          }
          groupBy: {
            args: Prisma.AIContextHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIContextHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIContextHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AIContextHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    character?: CharacterOmit
    gameSession?: GameSessionOmit
    gameState?: GameStateOmit
    nPCTemplate?: NPCTemplateOmit
    nPCState?: NPCStateOmit
    loreCategory?: LoreCategoryOmit
    worldLore?: WorldLoreOmit
    decision?: DecisionOmit
    aIContextHistory?: AIContextHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    characters: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | UserCountOutputTypeCountCharactersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
  }


  /**
   * Count Type CharacterCountOutputType
   */

  export type CharacterCountOutputType = {
    gameSessions: number
    gameStates: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSessions?: boolean | CharacterCountOutputTypeCountGameSessionsArgs
    gameStates?: boolean | CharacterCountOutputTypeCountGameStatesArgs
  }

  // Custom InputTypes
  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterCountOutputType
     */
    select?: CharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountGameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
  }

  /**
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
  }


  /**
   * Count Type GameSessionCountOutputType
   */

  export type GameSessionCountOutputType = {
    gameStates: number
  }

  export type GameSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameStates?: boolean | GameSessionCountOutputTypeCountGameStatesArgs
  }

  // Custom InputTypes
  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSessionCountOutputType
     */
    select?: GameSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameSessionCountOutputType without action
   */
  export type GameSessionCountOutputTypeCountGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
  }


  /**
   * Count Type GameStateCountOutputType
   */

  export type GameStateCountOutputType = {
    npcStates: number
    decisions: number
    aiContextHistory: number
  }

  export type GameStateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npcStates?: boolean | GameStateCountOutputTypeCountNpcStatesArgs
    decisions?: boolean | GameStateCountOutputTypeCountDecisionsArgs
    aiContextHistory?: boolean | GameStateCountOutputTypeCountAiContextHistoryArgs
  }

  // Custom InputTypes
  /**
   * GameStateCountOutputType without action
   */
  export type GameStateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameStateCountOutputType
     */
    select?: GameStateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameStateCountOutputType without action
   */
  export type GameStateCountOutputTypeCountNpcStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPCStateWhereInput
  }

  /**
   * GameStateCountOutputType without action
   */
  export type GameStateCountOutputTypeCountDecisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
  }

  /**
   * GameStateCountOutputType without action
   */
  export type GameStateCountOutputTypeCountAiContextHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIContextHistoryWhereInput
  }


  /**
   * Count Type NPCTemplateCountOutputType
   */

  export type NPCTemplateCountOutputType = {
    npcStates: number
  }

  export type NPCTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npcStates?: boolean | NPCTemplateCountOutputTypeCountNpcStatesArgs
  }

  // Custom InputTypes
  /**
   * NPCTemplateCountOutputType without action
   */
  export type NPCTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplateCountOutputType
     */
    select?: NPCTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NPCTemplateCountOutputType without action
   */
  export type NPCTemplateCountOutputTypeCountNpcStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPCStateWhereInput
  }


  /**
   * Count Type LoreCategoryCountOutputType
   */

  export type LoreCategoryCountOutputType = {
    subcategories: number
    worldLore: number
  }

  export type LoreCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcategories?: boolean | LoreCategoryCountOutputTypeCountSubcategoriesArgs
    worldLore?: boolean | LoreCategoryCountOutputTypeCountWorldLoreArgs
  }

  // Custom InputTypes
  /**
   * LoreCategoryCountOutputType without action
   */
  export type LoreCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategoryCountOutputType
     */
    select?: LoreCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LoreCategoryCountOutputType without action
   */
  export type LoreCategoryCountOutputTypeCountSubcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreCategoryWhereInput
  }

  /**
   * LoreCategoryCountOutputType without action
   */
  export type LoreCategoryCountOutputTypeCountWorldLoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldLoreWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    createdAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    createdAt: number
    lastLogin: number
    isActive: number
    preferences: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
    preferences?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    createdAt: Date
    lastLogin: Date | null
    isActive: boolean
    preferences: JsonValue
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
    characters?: boolean | User$charactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "createdAt" | "lastLogin" | "isActive" | "preferences", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characters?: boolean | User$charactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      characters: Prisma.$CharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      createdAt: Date
      lastLogin: Date | null
      isActive: boolean
      preferences: Prisma.JsonValue
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characters<T extends User$charactersArgs<ExtArgs> = {}>(args?: Subset<T, User$charactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly preferences: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.characters
   */
  export type User$charactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    cursor?: CharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Character
   */

  export type AggregateCharacter = {
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  export type CharacterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    backstory: string | null
    appearanceDescription: string | null
    createdAt: Date | null
    lastPlayedAt: Date | null
    isActive: boolean | null
  }

  export type CharacterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    backstory: string | null
    appearanceDescription: string | null
    createdAt: Date | null
    lastPlayedAt: Date | null
    isActive: boolean | null
  }

  export type CharacterCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    backstory: number
    appearanceDescription: number
    personalityTraits: number
    createdAt: number
    lastPlayedAt: number
    isActive: number
    _all: number
  }


  export type CharacterMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    backstory?: true
    appearanceDescription?: true
    createdAt?: true
    lastPlayedAt?: true
    isActive?: true
  }

  export type CharacterMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    backstory?: true
    appearanceDescription?: true
    createdAt?: true
    lastPlayedAt?: true
    isActive?: true
  }

  export type CharacterCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    backstory?: true
    appearanceDescription?: true
    personalityTraits?: true
    createdAt?: true
    lastPlayedAt?: true
    isActive?: true
    _all?: true
  }

  export type CharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Character to aggregate.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characters
    **/
    _count?: true | CharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterMaxAggregateInputType
  }

  export type GetCharacterAggregateType<T extends CharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacter[P]>
      : GetScalarType<T[P], AggregateCharacter[P]>
  }




  export type CharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWhereInput
    orderBy?: CharacterOrderByWithAggregationInput | CharacterOrderByWithAggregationInput[]
    by: CharacterScalarFieldEnum[] | CharacterScalarFieldEnum
    having?: CharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterCountAggregateInputType | true
    _min?: CharacterMinAggregateInputType
    _max?: CharacterMaxAggregateInputType
  }

  export type CharacterGroupByOutputType = {
    id: string
    userId: string
    name: string
    backstory: string | null
    appearanceDescription: string | null
    personalityTraits: JsonValue
    createdAt: Date
    lastPlayedAt: Date | null
    isActive: boolean
    _count: CharacterCountAggregateOutputType | null
    _min: CharacterMinAggregateOutputType | null
    _max: CharacterMaxAggregateOutputType | null
  }

  type GetCharacterGroupByPayload<T extends CharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterGroupByOutputType[P]>
        }
      >
    >


  export type CharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    backstory?: boolean
    appearanceDescription?: boolean
    personalityTraits?: boolean
    createdAt?: boolean
    lastPlayedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    gameSessions?: boolean | Character$gameSessionsArgs<ExtArgs>
    gameStates?: boolean | Character$gameStatesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    backstory?: boolean
    appearanceDescription?: boolean
    personalityTraits?: boolean
    createdAt?: boolean
    lastPlayedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    backstory?: boolean
    appearanceDescription?: boolean
    personalityTraits?: boolean
    createdAt?: boolean
    lastPlayedAt?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["character"]>

  export type CharacterSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    backstory?: boolean
    appearanceDescription?: boolean
    personalityTraits?: boolean
    createdAt?: boolean
    lastPlayedAt?: boolean
    isActive?: boolean
  }

  export type CharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "backstory" | "appearanceDescription" | "personalityTraits" | "createdAt" | "lastPlayedAt" | "isActive", ExtArgs["result"]["character"]>
  export type CharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    gameSessions?: boolean | Character$gameSessionsArgs<ExtArgs>
    gameStates?: boolean | Character$gameStatesArgs<ExtArgs>
    _count?: boolean | CharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Character"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      gameSessions: Prisma.$GameSessionPayload<ExtArgs>[]
      gameStates: Prisma.$GameStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      backstory: string | null
      appearanceDescription: string | null
      personalityTraits: Prisma.JsonValue
      createdAt: Date
      lastPlayedAt: Date | null
      isActive: boolean
    }, ExtArgs["result"]["character"]>
    composites: {}
  }

  type CharacterGetPayload<S extends boolean | null | undefined | CharacterDefaultArgs> = $Result.GetResult<Prisma.$CharacterPayload, S>

  type CharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterCountAggregateInputType | true
    }

  export interface CharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Character'], meta: { name: 'Character' } }
    /**
     * Find zero or one Character that matches the filter.
     * @param {CharacterFindUniqueArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterFindUniqueArgs>(args: SelectSubset<T, CharacterFindUniqueArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Character that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterFindUniqueOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterFindFirstArgs>(args?: SelectSubset<T, CharacterFindFirstArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Character that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindFirstOrThrowArgs} args - Arguments to find a Character
     * @example
     * // Get one Character
     * const character = await prisma.character.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Characters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characters
     * const characters = await prisma.character.findMany()
     * 
     * // Get first 10 Characters
     * const characters = await prisma.character.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWithIdOnly = await prisma.character.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterFindManyArgs>(args?: SelectSubset<T, CharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Character.
     * @param {CharacterCreateArgs} args - Arguments to create a Character.
     * @example
     * // Create one Character
     * const Character = await prisma.character.create({
     *   data: {
     *     // ... data to create a Character
     *   }
     * })
     * 
     */
    create<T extends CharacterCreateArgs>(args: SelectSubset<T, CharacterCreateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Characters.
     * @param {CharacterCreateManyArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterCreateManyArgs>(args?: SelectSubset<T, CharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characters and returns the data saved in the database.
     * @param {CharacterCreateManyAndReturnArgs} args - Arguments to create many Characters.
     * @example
     * // Create many Characters
     * const character = await prisma.character.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Character.
     * @param {CharacterDeleteArgs} args - Arguments to delete one Character.
     * @example
     * // Delete one Character
     * const Character = await prisma.character.delete({
     *   where: {
     *     // ... filter to delete one Character
     *   }
     * })
     * 
     */
    delete<T extends CharacterDeleteArgs>(args: SelectSubset<T, CharacterDeleteArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Character.
     * @param {CharacterUpdateArgs} args - Arguments to update one Character.
     * @example
     * // Update one Character
     * const character = await prisma.character.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterUpdateArgs>(args: SelectSubset<T, CharacterUpdateArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Characters.
     * @param {CharacterDeleteManyArgs} args - Arguments to filter Characters to delete.
     * @example
     * // Delete a few Characters
     * const { count } = await prisma.character.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterDeleteManyArgs>(args?: SelectSubset<T, CharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterUpdateManyArgs>(args: SelectSubset<T, CharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characters and returns the data updated in the database.
     * @param {CharacterUpdateManyAndReturnArgs} args - Arguments to update many Characters.
     * @example
     * // Update many Characters
     * const character = await prisma.character.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Characters and only return the `id`
     * const characterWithIdOnly = await prisma.character.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Character.
     * @param {CharacterUpsertArgs} args - Arguments to update or create a Character.
     * @example
     * // Update or create a Character
     * const character = await prisma.character.upsert({
     *   create: {
     *     // ... data to create a Character
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Character we want to update
     *   }
     * })
     */
    upsert<T extends CharacterUpsertArgs>(args: SelectSubset<T, CharacterUpsertArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Characters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterCountArgs} args - Arguments to filter Characters to count.
     * @example
     * // Count the number of Characters
     * const count = await prisma.character.count({
     *   where: {
     *     // ... the filter for the Characters we want to count
     *   }
     * })
    **/
    count<T extends CharacterCountArgs>(
      args?: Subset<T, CharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterAggregateArgs>(args: Subset<T, CharacterAggregateArgs>): Prisma.PrismaPromise<GetCharacterAggregateType<T>>

    /**
     * Group by Character.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterGroupByArgs['orderBy'] }
        : { orderBy?: CharacterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Character model
   */
  readonly fields: CharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Character.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameSessions<T extends Character$gameSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Character$gameSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStates<T extends Character$gameStatesArgs<ExtArgs> = {}>(args?: Subset<T, Character$gameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Character model
   */
  interface CharacterFieldRefs {
    readonly id: FieldRef<"Character", 'String'>
    readonly userId: FieldRef<"Character", 'String'>
    readonly name: FieldRef<"Character", 'String'>
    readonly backstory: FieldRef<"Character", 'String'>
    readonly appearanceDescription: FieldRef<"Character", 'String'>
    readonly personalityTraits: FieldRef<"Character", 'Json'>
    readonly createdAt: FieldRef<"Character", 'DateTime'>
    readonly lastPlayedAt: FieldRef<"Character", 'DateTime'>
    readonly isActive: FieldRef<"Character", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Character findUnique
   */
  export type CharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findUniqueOrThrow
   */
  export type CharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character findFirst
   */
  export type CharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findFirstOrThrow
   */
  export type CharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Character to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characters.
     */
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character findMany
   */
  export type CharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter, which Characters to fetch.
     */
    where?: CharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characters to fetch.
     */
    orderBy?: CharacterOrderByWithRelationInput | CharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characters.
     */
    cursor?: CharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characters.
     */
    skip?: number
    distinct?: CharacterScalarFieldEnum | CharacterScalarFieldEnum[]
  }

  /**
   * Character create
   */
  export type CharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a Character.
     */
    data: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
  }

  /**
   * Character createMany
   */
  export type CharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Character createManyAndReturn
   */
  export type CharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to create many Characters.
     */
    data: CharacterCreateManyInput | CharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character update
   */
  export type CharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a Character.
     */
    data: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
    /**
     * Choose, which Character to update.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character updateMany
   */
  export type CharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
  }

  /**
   * Character updateManyAndReturn
   */
  export type CharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * The data used to update Characters.
     */
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyInput>
    /**
     * Filter which Characters to update
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Character upsert
   */
  export type CharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the Character to update in case it exists.
     */
    where: CharacterWhereUniqueInput
    /**
     * In case the Character found by the `where` argument doesn't exist, create a new Character with this data.
     */
    create: XOR<CharacterCreateInput, CharacterUncheckedCreateInput>
    /**
     * In case the Character was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterUpdateInput, CharacterUncheckedUpdateInput>
  }

  /**
   * Character delete
   */
  export type CharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
    /**
     * Filter which Character to delete.
     */
    where: CharacterWhereUniqueInput
  }

  /**
   * Character deleteMany
   */
  export type CharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characters to delete
     */
    where?: CharacterWhereInput
    /**
     * Limit how many Characters to delete.
     */
    limit?: number
  }

  /**
   * Character.gameSessions
   */
  export type Character$gameSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    cursor?: GameSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * Character.gameStates
   */
  export type Character$gameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    cursor?: GameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * Character without action
   */
  export type CharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Character
     */
    select?: CharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Character
     */
    omit?: CharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterInclude<ExtArgs> | null
  }


  /**
   * Model GameSession
   */

  export type AggregateGameSession = {
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  export type GameSessionAvgAggregateOutputType = {
    durationSeconds: number | null
  }

  export type GameSessionSumAggregateOutputType = {
    durationSeconds: number | null
  }

  export type GameSessionMinAggregateOutputType = {
    id: string | null
    characterId: string | null
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
  }

  export type GameSessionMaxAggregateOutputType = {
    id: string | null
    characterId: string | null
    startedAt: Date | null
    endedAt: Date | null
    durationSeconds: number | null
  }

  export type GameSessionCountAggregateOutputType = {
    id: number
    characterId: number
    startedAt: number
    endedAt: number
    durationSeconds: number
    sessionData: number
    _all: number
  }


  export type GameSessionAvgAggregateInputType = {
    durationSeconds?: true
  }

  export type GameSessionSumAggregateInputType = {
    durationSeconds?: true
  }

  export type GameSessionMinAggregateInputType = {
    id?: true
    characterId?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
  }

  export type GameSessionMaxAggregateInputType = {
    id?: true
    characterId?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
  }

  export type GameSessionCountAggregateInputType = {
    id?: true
    characterId?: true
    startedAt?: true
    endedAt?: true
    durationSeconds?: true
    sessionData?: true
    _all?: true
  }

  export type GameSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSession to aggregate.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameSessions
    **/
    _count?: true | GameSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameSessionMaxAggregateInputType
  }

  export type GetGameSessionAggregateType<T extends GameSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateGameSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameSession[P]>
      : GetScalarType<T[P], AggregateGameSession[P]>
  }




  export type GameSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameSessionWhereInput
    orderBy?: GameSessionOrderByWithAggregationInput | GameSessionOrderByWithAggregationInput[]
    by: GameSessionScalarFieldEnum[] | GameSessionScalarFieldEnum
    having?: GameSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameSessionCountAggregateInputType | true
    _avg?: GameSessionAvgAggregateInputType
    _sum?: GameSessionSumAggregateInputType
    _min?: GameSessionMinAggregateInputType
    _max?: GameSessionMaxAggregateInputType
  }

  export type GameSessionGroupByOutputType = {
    id: string
    characterId: string
    startedAt: Date
    endedAt: Date | null
    durationSeconds: number | null
    sessionData: JsonValue
    _count: GameSessionCountAggregateOutputType | null
    _avg: GameSessionAvgAggregateOutputType | null
    _sum: GameSessionSumAggregateOutputType | null
    _min: GameSessionMinAggregateOutputType | null
    _max: GameSessionMaxAggregateOutputType | null
  }

  type GetGameSessionGroupByPayload<T extends GameSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
            : GetScalarType<T[P], GameSessionGroupByOutputType[P]>
        }
      >
    >


  export type GameSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    sessionData?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    gameStates?: boolean | GameSession$gameStatesArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    sessionData?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    sessionData?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameSession"]>

  export type GameSessionSelectScalar = {
    id?: boolean
    characterId?: boolean
    startedAt?: boolean
    endedAt?: boolean
    durationSeconds?: boolean
    sessionData?: boolean
  }

  export type GameSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "startedAt" | "endedAt" | "durationSeconds" | "sessionData", ExtArgs["result"]["gameSession"]>
  export type GameSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    gameStates?: boolean | GameSession$gameStatesArgs<ExtArgs>
    _count?: boolean | GameSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type GameSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $GameSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameSession"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      gameStates: Prisma.$GameStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      characterId: string
      startedAt: Date
      endedAt: Date | null
      durationSeconds: number | null
      sessionData: Prisma.JsonValue
    }, ExtArgs["result"]["gameSession"]>
    composites: {}
  }

  type GameSessionGetPayload<S extends boolean | null | undefined | GameSessionDefaultArgs> = $Result.GetResult<Prisma.$GameSessionPayload, S>

  type GameSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameSessionCountAggregateInputType | true
    }

  export interface GameSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameSession'], meta: { name: 'GameSession' } }
    /**
     * Find zero or one GameSession that matches the filter.
     * @param {GameSessionFindUniqueArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameSessionFindUniqueArgs>(args: SelectSubset<T, GameSessionFindUniqueArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameSessionFindUniqueOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, GameSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameSessionFindFirstArgs>(args?: SelectSubset<T, GameSessionFindFirstArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindFirstOrThrowArgs} args - Arguments to find a GameSession
     * @example
     * // Get one GameSession
     * const gameSession = await prisma.gameSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, GameSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameSessions
     * const gameSessions = await prisma.gameSession.findMany()
     * 
     * // Get first 10 GameSessions
     * const gameSessions = await prisma.gameSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameSessionFindManyArgs>(args?: SelectSubset<T, GameSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameSession.
     * @param {GameSessionCreateArgs} args - Arguments to create a GameSession.
     * @example
     * // Create one GameSession
     * const GameSession = await prisma.gameSession.create({
     *   data: {
     *     // ... data to create a GameSession
     *   }
     * })
     * 
     */
    create<T extends GameSessionCreateArgs>(args: SelectSubset<T, GameSessionCreateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameSessions.
     * @param {GameSessionCreateManyArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameSessionCreateManyArgs>(args?: SelectSubset<T, GameSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameSessions and returns the data saved in the database.
     * @param {GameSessionCreateManyAndReturnArgs} args - Arguments to create many GameSessions.
     * @example
     * // Create many GameSessions
     * const gameSession = await prisma.gameSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameSessions and only return the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, GameSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameSession.
     * @param {GameSessionDeleteArgs} args - Arguments to delete one GameSession.
     * @example
     * // Delete one GameSession
     * const GameSession = await prisma.gameSession.delete({
     *   where: {
     *     // ... filter to delete one GameSession
     *   }
     * })
     * 
     */
    delete<T extends GameSessionDeleteArgs>(args: SelectSubset<T, GameSessionDeleteArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameSession.
     * @param {GameSessionUpdateArgs} args - Arguments to update one GameSession.
     * @example
     * // Update one GameSession
     * const gameSession = await prisma.gameSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameSessionUpdateArgs>(args: SelectSubset<T, GameSessionUpdateArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameSessions.
     * @param {GameSessionDeleteManyArgs} args - Arguments to filter GameSessions to delete.
     * @example
     * // Delete a few GameSessions
     * const { count } = await prisma.gameSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameSessionDeleteManyArgs>(args?: SelectSubset<T, GameSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameSessionUpdateManyArgs>(args: SelectSubset<T, GameSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameSessions and returns the data updated in the database.
     * @param {GameSessionUpdateManyAndReturnArgs} args - Arguments to update many GameSessions.
     * @example
     * // Update many GameSessions
     * const gameSession = await prisma.gameSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameSessions and only return the `id`
     * const gameSessionWithIdOnly = await prisma.gameSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, GameSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameSession.
     * @param {GameSessionUpsertArgs} args - Arguments to update or create a GameSession.
     * @example
     * // Update or create a GameSession
     * const gameSession = await prisma.gameSession.upsert({
     *   create: {
     *     // ... data to create a GameSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameSession we want to update
     *   }
     * })
     */
    upsert<T extends GameSessionUpsertArgs>(args: SelectSubset<T, GameSessionUpsertArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionCountArgs} args - Arguments to filter GameSessions to count.
     * @example
     * // Count the number of GameSessions
     * const count = await prisma.gameSession.count({
     *   where: {
     *     // ... the filter for the GameSessions we want to count
     *   }
     * })
    **/
    count<T extends GameSessionCountArgs>(
      args?: Subset<T, GameSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameSessionAggregateArgs>(args: Subset<T, GameSessionAggregateArgs>): Prisma.PrismaPromise<GetGameSessionAggregateType<T>>

    /**
     * Group by GameSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameSessionGroupByArgs['orderBy'] }
        : { orderBy?: GameSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameSession model
   */
  readonly fields: GameSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gameStates<T extends GameSession$gameStatesArgs<ExtArgs> = {}>(args?: Subset<T, GameSession$gameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameSession model
   */
  interface GameSessionFieldRefs {
    readonly id: FieldRef<"GameSession", 'String'>
    readonly characterId: FieldRef<"GameSession", 'String'>
    readonly startedAt: FieldRef<"GameSession", 'DateTime'>
    readonly endedAt: FieldRef<"GameSession", 'DateTime'>
    readonly durationSeconds: FieldRef<"GameSession", 'Int'>
    readonly sessionData: FieldRef<"GameSession", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * GameSession findUnique
   */
  export type GameSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findUniqueOrThrow
   */
  export type GameSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession findFirst
   */
  export type GameSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findFirstOrThrow
   */
  export type GameSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSession to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameSessions.
     */
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession findMany
   */
  export type GameSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter, which GameSessions to fetch.
     */
    where?: GameSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameSessions to fetch.
     */
    orderBy?: GameSessionOrderByWithRelationInput | GameSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameSessions.
     */
    cursor?: GameSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameSessions.
     */
    skip?: number
    distinct?: GameSessionScalarFieldEnum | GameSessionScalarFieldEnum[]
  }

  /**
   * GameSession create
   */
  export type GameSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a GameSession.
     */
    data: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
  }

  /**
   * GameSession createMany
   */
  export type GameSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameSession createManyAndReturn
   */
  export type GameSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * The data used to create many GameSessions.
     */
    data: GameSessionCreateManyInput | GameSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSession update
   */
  export type GameSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a GameSession.
     */
    data: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
    /**
     * Choose, which GameSession to update.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession updateMany
   */
  export type GameSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
    /**
     * Limit how many GameSessions to update.
     */
    limit?: number
  }

  /**
   * GameSession updateManyAndReturn
   */
  export type GameSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * The data used to update GameSessions.
     */
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyInput>
    /**
     * Filter which GameSessions to update
     */
    where?: GameSessionWhereInput
    /**
     * Limit how many GameSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameSession upsert
   */
  export type GameSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the GameSession to update in case it exists.
     */
    where: GameSessionWhereUniqueInput
    /**
     * In case the GameSession found by the `where` argument doesn't exist, create a new GameSession with this data.
     */
    create: XOR<GameSessionCreateInput, GameSessionUncheckedCreateInput>
    /**
     * In case the GameSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameSessionUpdateInput, GameSessionUncheckedUpdateInput>
  }

  /**
   * GameSession delete
   */
  export type GameSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
    /**
     * Filter which GameSession to delete.
     */
    where: GameSessionWhereUniqueInput
  }

  /**
   * GameSession deleteMany
   */
  export type GameSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameSessions to delete
     */
    where?: GameSessionWhereInput
    /**
     * Limit how many GameSessions to delete.
     */
    limit?: number
  }

  /**
   * GameSession.gameStates
   */
  export type GameSession$gameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    cursor?: GameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameSession without action
   */
  export type GameSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameSession
     */
    select?: GameSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameSession
     */
    omit?: GameSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameSessionInclude<ExtArgs> | null
  }


  /**
   * Model GameState
   */

  export type AggregateGameState = {
    _count: GameStateCountAggregateOutputType | null
    _min: GameStateMinAggregateOutputType | null
    _max: GameStateMaxAggregateOutputType | null
  }

  export type GameStateMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    characterId: string | null
    savePointName: string | null
    currentLocation: string | null
    saveTimestamp: Date | null
    narrativeContext: string | null
    isAutosave: boolean | null
    isCompleted: boolean | null
  }

  export type GameStateMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    characterId: string | null
    savePointName: string | null
    currentLocation: string | null
    saveTimestamp: Date | null
    narrativeContext: string | null
    isAutosave: boolean | null
    isCompleted: boolean | null
  }

  export type GameStateCountAggregateOutputType = {
    id: number
    sessionId: number
    characterId: number
    savePointName: number
    currentLocation: number
    saveTimestamp: number
    narrativeContext: number
    aiContext: number
    characterState: number
    worldState: number
    isAutosave: number
    isCompleted: number
    _all: number
  }


  export type GameStateMinAggregateInputType = {
    id?: true
    sessionId?: true
    characterId?: true
    savePointName?: true
    currentLocation?: true
    saveTimestamp?: true
    narrativeContext?: true
    isAutosave?: true
    isCompleted?: true
  }

  export type GameStateMaxAggregateInputType = {
    id?: true
    sessionId?: true
    characterId?: true
    savePointName?: true
    currentLocation?: true
    saveTimestamp?: true
    narrativeContext?: true
    isAutosave?: true
    isCompleted?: true
  }

  export type GameStateCountAggregateInputType = {
    id?: true
    sessionId?: true
    characterId?: true
    savePointName?: true
    currentLocation?: true
    saveTimestamp?: true
    narrativeContext?: true
    aiContext?: true
    characterState?: true
    worldState?: true
    isAutosave?: true
    isCompleted?: true
    _all?: true
  }

  export type GameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameState to aggregate.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameStates
    **/
    _count?: true | GameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameStateMaxAggregateInputType
  }

  export type GetGameStateAggregateType<T extends GameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameState[P]>
      : GetScalarType<T[P], AggregateGameState[P]>
  }




  export type GameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
    orderBy?: GameStateOrderByWithAggregationInput | GameStateOrderByWithAggregationInput[]
    by: GameStateScalarFieldEnum[] | GameStateScalarFieldEnum
    having?: GameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameStateCountAggregateInputType | true
    _min?: GameStateMinAggregateInputType
    _max?: GameStateMaxAggregateInputType
  }

  export type GameStateGroupByOutputType = {
    id: string
    sessionId: string
    characterId: string
    savePointName: string | null
    currentLocation: string
    saveTimestamp: Date
    narrativeContext: string | null
    aiContext: JsonValue
    characterState: JsonValue
    worldState: JsonValue
    isAutosave: boolean
    isCompleted: boolean
    _count: GameStateCountAggregateOutputType | null
    _min: GameStateMinAggregateOutputType | null
    _max: GameStateMaxAggregateOutputType | null
  }

  type GetGameStateGroupByPayload<T extends GameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameStateGroupByOutputType[P]>
            : GetScalarType<T[P], GameStateGroupByOutputType[P]>
        }
      >
    >


  export type GameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    savePointName?: boolean
    currentLocation?: boolean
    saveTimestamp?: boolean
    narrativeContext?: boolean
    aiContext?: boolean
    characterState?: boolean
    worldState?: boolean
    isAutosave?: boolean
    isCompleted?: boolean
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    npcStates?: boolean | GameState$npcStatesArgs<ExtArgs>
    decisions?: boolean | GameState$decisionsArgs<ExtArgs>
    aiContextHistory?: boolean | GameState$aiContextHistoryArgs<ExtArgs>
    _count?: boolean | GameStateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    savePointName?: boolean
    currentLocation?: boolean
    saveTimestamp?: boolean
    narrativeContext?: boolean
    aiContext?: boolean
    characterState?: boolean
    worldState?: boolean
    isAutosave?: boolean
    isCompleted?: boolean
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    savePointName?: boolean
    currentLocation?: boolean
    saveTimestamp?: boolean
    narrativeContext?: boolean
    aiContext?: boolean
    characterState?: boolean
    worldState?: boolean
    isAutosave?: boolean
    isCompleted?: boolean
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectScalar = {
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    savePointName?: boolean
    currentLocation?: boolean
    saveTimestamp?: boolean
    narrativeContext?: boolean
    aiContext?: boolean
    characterState?: boolean
    worldState?: boolean
    isAutosave?: boolean
    isCompleted?: boolean
  }

  export type GameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "characterId" | "savePointName" | "currentLocation" | "saveTimestamp" | "narrativeContext" | "aiContext" | "characterState" | "worldState" | "isAutosave" | "isCompleted", ExtArgs["result"]["gameState"]>
  export type GameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    npcStates?: boolean | GameState$npcStatesArgs<ExtArgs>
    decisions?: boolean | GameState$decisionsArgs<ExtArgs>
    aiContextHistory?: boolean | GameState$aiContextHistoryArgs<ExtArgs>
    _count?: boolean | GameStateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }
  export type GameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
  }

  export type $GameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameState"
    objects: {
      session: Prisma.$GameSessionPayload<ExtArgs>
      character: Prisma.$CharacterPayload<ExtArgs>
      npcStates: Prisma.$NPCStatePayload<ExtArgs>[]
      decisions: Prisma.$DecisionPayload<ExtArgs>[]
      aiContextHistory: Prisma.$AIContextHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      characterId: string
      savePointName: string | null
      currentLocation: string
      saveTimestamp: Date
      narrativeContext: string | null
      aiContext: Prisma.JsonValue
      characterState: Prisma.JsonValue
      worldState: Prisma.JsonValue
      isAutosave: boolean
      isCompleted: boolean
    }, ExtArgs["result"]["gameState"]>
    composites: {}
  }

  type GameStateGetPayload<S extends boolean | null | undefined | GameStateDefaultArgs> = $Result.GetResult<Prisma.$GameStatePayload, S>

  type GameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameStateCountAggregateInputType | true
    }

  export interface GameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameState'], meta: { name: 'GameState' } }
    /**
     * Find zero or one GameState that matches the filter.
     * @param {GameStateFindUniqueArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameStateFindUniqueArgs>(args: SelectSubset<T, GameStateFindUniqueArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameStateFindUniqueOrThrowArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, GameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateFindFirstArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameStateFindFirstArgs>(args?: SelectSubset<T, GameStateFindFirstArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateFindFirstOrThrowArgs} args - Arguments to find a GameState
     * @example
     * // Get one GameState
     * const gameState = await prisma.gameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, GameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameStates
     * const gameStates = await prisma.gameState.findMany()
     * 
     * // Get first 10 GameStates
     * const gameStates = await prisma.gameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameStateWithIdOnly = await prisma.gameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameStateFindManyArgs>(args?: SelectSubset<T, GameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameState.
     * @param {GameStateCreateArgs} args - Arguments to create a GameState.
     * @example
     * // Create one GameState
     * const GameState = await prisma.gameState.create({
     *   data: {
     *     // ... data to create a GameState
     *   }
     * })
     * 
     */
    create<T extends GameStateCreateArgs>(args: SelectSubset<T, GameStateCreateArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameStates.
     * @param {GameStateCreateManyArgs} args - Arguments to create many GameStates.
     * @example
     * // Create many GameStates
     * const gameState = await prisma.gameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameStateCreateManyArgs>(args?: SelectSubset<T, GameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameStates and returns the data saved in the database.
     * @param {GameStateCreateManyAndReturnArgs} args - Arguments to create many GameStates.
     * @example
     * // Create many GameStates
     * const gameState = await prisma.gameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameStates and only return the `id`
     * const gameStateWithIdOnly = await prisma.gameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, GameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameState.
     * @param {GameStateDeleteArgs} args - Arguments to delete one GameState.
     * @example
     * // Delete one GameState
     * const GameState = await prisma.gameState.delete({
     *   where: {
     *     // ... filter to delete one GameState
     *   }
     * })
     * 
     */
    delete<T extends GameStateDeleteArgs>(args: SelectSubset<T, GameStateDeleteArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameState.
     * @param {GameStateUpdateArgs} args - Arguments to update one GameState.
     * @example
     * // Update one GameState
     * const gameState = await prisma.gameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameStateUpdateArgs>(args: SelectSubset<T, GameStateUpdateArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameStates.
     * @param {GameStateDeleteManyArgs} args - Arguments to filter GameStates to delete.
     * @example
     * // Delete a few GameStates
     * const { count } = await prisma.gameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameStateDeleteManyArgs>(args?: SelectSubset<T, GameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameStates
     * const gameState = await prisma.gameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameStateUpdateManyArgs>(args: SelectSubset<T, GameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameStates and returns the data updated in the database.
     * @param {GameStateUpdateManyAndReturnArgs} args - Arguments to update many GameStates.
     * @example
     * // Update many GameStates
     * const gameState = await prisma.gameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameStates and only return the `id`
     * const gameStateWithIdOnly = await prisma.gameState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, GameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameState.
     * @param {GameStateUpsertArgs} args - Arguments to update or create a GameState.
     * @example
     * // Update or create a GameState
     * const gameState = await prisma.gameState.upsert({
     *   create: {
     *     // ... data to create a GameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameState we want to update
     *   }
     * })
     */
    upsert<T extends GameStateUpsertArgs>(args: SelectSubset<T, GameStateUpsertArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateCountArgs} args - Arguments to filter GameStates to count.
     * @example
     * // Count the number of GameStates
     * const count = await prisma.gameState.count({
     *   where: {
     *     // ... the filter for the GameStates we want to count
     *   }
     * })
    **/
    count<T extends GameStateCountArgs>(
      args?: Subset<T, GameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameStateAggregateArgs>(args: Subset<T, GameStateAggregateArgs>): Prisma.PrismaPromise<GetGameStateAggregateType<T>>

    /**
     * Group by GameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameStateGroupByArgs['orderBy'] }
        : { orderBy?: GameStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameState model
   */
  readonly fields: GameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends GameSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameSessionDefaultArgs<ExtArgs>>): Prisma__GameSessionClient<$Result.GetResult<Prisma.$GameSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    npcStates<T extends GameState$npcStatesArgs<ExtArgs> = {}>(args?: Subset<T, GameState$npcStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decisions<T extends GameState$decisionsArgs<ExtArgs> = {}>(args?: Subset<T, GameState$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiContextHistory<T extends GameState$aiContextHistoryArgs<ExtArgs> = {}>(args?: Subset<T, GameState$aiContextHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameState model
   */
  interface GameStateFieldRefs {
    readonly id: FieldRef<"GameState", 'String'>
    readonly sessionId: FieldRef<"GameState", 'String'>
    readonly characterId: FieldRef<"GameState", 'String'>
    readonly savePointName: FieldRef<"GameState", 'String'>
    readonly currentLocation: FieldRef<"GameState", 'String'>
    readonly saveTimestamp: FieldRef<"GameState", 'DateTime'>
    readonly narrativeContext: FieldRef<"GameState", 'String'>
    readonly aiContext: FieldRef<"GameState", 'Json'>
    readonly characterState: FieldRef<"GameState", 'Json'>
    readonly worldState: FieldRef<"GameState", 'Json'>
    readonly isAutosave: FieldRef<"GameState", 'Boolean'>
    readonly isCompleted: FieldRef<"GameState", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * GameState findUnique
   */
  export type GameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState findUniqueOrThrow
   */
  export type GameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState findFirst
   */
  export type GameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameStates.
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameStates.
     */
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameState findFirstOrThrow
   */
  export type GameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameState to fetch.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameStates.
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameStates.
     */
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameState findMany
   */
  export type GameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter, which GameStates to fetch.
     */
    where?: GameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameStates to fetch.
     */
    orderBy?: GameStateOrderByWithRelationInput | GameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameStates.
     */
    cursor?: GameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameStates.
     */
    skip?: number
    distinct?: GameStateScalarFieldEnum | GameStateScalarFieldEnum[]
  }

  /**
   * GameState create
   */
  export type GameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a GameState.
     */
    data: XOR<GameStateCreateInput, GameStateUncheckedCreateInput>
  }

  /**
   * GameState createMany
   */
  export type GameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameStates.
     */
    data: GameStateCreateManyInput | GameStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameState createManyAndReturn
   */
  export type GameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * The data used to create many GameStates.
     */
    data: GameStateCreateManyInput | GameStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameState update
   */
  export type GameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a GameState.
     */
    data: XOR<GameStateUpdateInput, GameStateUncheckedUpdateInput>
    /**
     * Choose, which GameState to update.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState updateMany
   */
  export type GameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameStates.
     */
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyInput>
    /**
     * Filter which GameStates to update
     */
    where?: GameStateWhereInput
    /**
     * Limit how many GameStates to update.
     */
    limit?: number
  }

  /**
   * GameState updateManyAndReturn
   */
  export type GameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * The data used to update GameStates.
     */
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyInput>
    /**
     * Filter which GameStates to update
     */
    where?: GameStateWhereInput
    /**
     * Limit how many GameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GameState upsert
   */
  export type GameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the GameState to update in case it exists.
     */
    where: GameStateWhereUniqueInput
    /**
     * In case the GameState found by the `where` argument doesn't exist, create a new GameState with this data.
     */
    create: XOR<GameStateCreateInput, GameStateUncheckedCreateInput>
    /**
     * In case the GameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameStateUpdateInput, GameStateUncheckedUpdateInput>
  }

  /**
   * GameState delete
   */
  export type GameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
    /**
     * Filter which GameState to delete.
     */
    where: GameStateWhereUniqueInput
  }

  /**
   * GameState deleteMany
   */
  export type GameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameStates to delete
     */
    where?: GameStateWhereInput
    /**
     * Limit how many GameStates to delete.
     */
    limit?: number
  }

  /**
   * GameState.npcStates
   */
  export type GameState$npcStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    where?: NPCStateWhereInput
    orderBy?: NPCStateOrderByWithRelationInput | NPCStateOrderByWithRelationInput[]
    cursor?: NPCStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NPCStateScalarFieldEnum | NPCStateScalarFieldEnum[]
  }

  /**
   * GameState.decisions
   */
  export type GameState$decisionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    cursor?: DecisionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * GameState.aiContextHistory
   */
  export type GameState$aiContextHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    where?: AIContextHistoryWhereInput
    orderBy?: AIContextHistoryOrderByWithRelationInput | AIContextHistoryOrderByWithRelationInput[]
    cursor?: AIContextHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIContextHistoryScalarFieldEnum | AIContextHistoryScalarFieldEnum[]
  }

  /**
   * GameState without action
   */
  export type GameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameState
     */
    select?: GameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameState
     */
    omit?: GameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameStateInclude<ExtArgs> | null
  }


  /**
   * Model NPCTemplate
   */

  export type AggregateNPCTemplate = {
    _count: NPCTemplateCountAggregateOutputType | null
    _min: NPCTemplateMinAggregateOutputType | null
    _max: NPCTemplateMaxAggregateOutputType | null
  }

  export type NPCTemplateMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    appearanceDescription: string | null
    isUnique: boolean | null
  }

  export type NPCTemplateMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    appearanceDescription: string | null
    isUnique: boolean | null
  }

  export type NPCTemplateCountAggregateOutputType = {
    id: number
    code: number
    name: number
    personalityTraits: number
    defaultDialogue: number
    appearanceDescription: number
    isUnique: number
    _all: number
  }


  export type NPCTemplateMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    appearanceDescription?: true
    isUnique?: true
  }

  export type NPCTemplateMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    appearanceDescription?: true
    isUnique?: true
  }

  export type NPCTemplateCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    personalityTraits?: true
    defaultDialogue?: true
    appearanceDescription?: true
    isUnique?: true
    _all?: true
  }

  export type NPCTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPCTemplate to aggregate.
     */
    where?: NPCTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCTemplates to fetch.
     */
    orderBy?: NPCTemplateOrderByWithRelationInput | NPCTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NPCTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NPCTemplates
    **/
    _count?: true | NPCTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NPCTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NPCTemplateMaxAggregateInputType
  }

  export type GetNPCTemplateAggregateType<T extends NPCTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateNPCTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNPCTemplate[P]>
      : GetScalarType<T[P], AggregateNPCTemplate[P]>
  }




  export type NPCTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPCTemplateWhereInput
    orderBy?: NPCTemplateOrderByWithAggregationInput | NPCTemplateOrderByWithAggregationInput[]
    by: NPCTemplateScalarFieldEnum[] | NPCTemplateScalarFieldEnum
    having?: NPCTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NPCTemplateCountAggregateInputType | true
    _min?: NPCTemplateMinAggregateInputType
    _max?: NPCTemplateMaxAggregateInputType
  }

  export type NPCTemplateGroupByOutputType = {
    id: string
    code: string
    name: string
    personalityTraits: JsonValue
    defaultDialogue: JsonValue
    appearanceDescription: string | null
    isUnique: boolean
    _count: NPCTemplateCountAggregateOutputType | null
    _min: NPCTemplateMinAggregateOutputType | null
    _max: NPCTemplateMaxAggregateOutputType | null
  }

  type GetNPCTemplateGroupByPayload<T extends NPCTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NPCTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NPCTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NPCTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], NPCTemplateGroupByOutputType[P]>
        }
      >
    >


  export type NPCTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    personalityTraits?: boolean
    defaultDialogue?: boolean
    appearanceDescription?: boolean
    isUnique?: boolean
    npcStates?: boolean | NPCTemplate$npcStatesArgs<ExtArgs>
    _count?: boolean | NPCTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nPCTemplate"]>

  export type NPCTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    personalityTraits?: boolean
    defaultDialogue?: boolean
    appearanceDescription?: boolean
    isUnique?: boolean
  }, ExtArgs["result"]["nPCTemplate"]>

  export type NPCTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    personalityTraits?: boolean
    defaultDialogue?: boolean
    appearanceDescription?: boolean
    isUnique?: boolean
  }, ExtArgs["result"]["nPCTemplate"]>

  export type NPCTemplateSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    personalityTraits?: boolean
    defaultDialogue?: boolean
    appearanceDescription?: boolean
    isUnique?: boolean
  }

  export type NPCTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "personalityTraits" | "defaultDialogue" | "appearanceDescription" | "isUnique", ExtArgs["result"]["nPCTemplate"]>
  export type NPCTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npcStates?: boolean | NPCTemplate$npcStatesArgs<ExtArgs>
    _count?: boolean | NPCTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NPCTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NPCTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NPCTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NPCTemplate"
    objects: {
      npcStates: Prisma.$NPCStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      personalityTraits: Prisma.JsonValue
      defaultDialogue: Prisma.JsonValue
      appearanceDescription: string | null
      isUnique: boolean
    }, ExtArgs["result"]["nPCTemplate"]>
    composites: {}
  }

  type NPCTemplateGetPayload<S extends boolean | null | undefined | NPCTemplateDefaultArgs> = $Result.GetResult<Prisma.$NPCTemplatePayload, S>

  type NPCTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NPCTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NPCTemplateCountAggregateInputType | true
    }

  export interface NPCTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NPCTemplate'], meta: { name: 'NPCTemplate' } }
    /**
     * Find zero or one NPCTemplate that matches the filter.
     * @param {NPCTemplateFindUniqueArgs} args - Arguments to find a NPCTemplate
     * @example
     * // Get one NPCTemplate
     * const nPCTemplate = await prisma.nPCTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NPCTemplateFindUniqueArgs>(args: SelectSubset<T, NPCTemplateFindUniqueArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NPCTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NPCTemplateFindUniqueOrThrowArgs} args - Arguments to find a NPCTemplate
     * @example
     * // Get one NPCTemplate
     * const nPCTemplate = await prisma.nPCTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NPCTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, NPCTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPCTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateFindFirstArgs} args - Arguments to find a NPCTemplate
     * @example
     * // Get one NPCTemplate
     * const nPCTemplate = await prisma.nPCTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NPCTemplateFindFirstArgs>(args?: SelectSubset<T, NPCTemplateFindFirstArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPCTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateFindFirstOrThrowArgs} args - Arguments to find a NPCTemplate
     * @example
     * // Get one NPCTemplate
     * const nPCTemplate = await prisma.nPCTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NPCTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, NPCTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NPCTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NPCTemplates
     * const nPCTemplates = await prisma.nPCTemplate.findMany()
     * 
     * // Get first 10 NPCTemplates
     * const nPCTemplates = await prisma.nPCTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nPCTemplateWithIdOnly = await prisma.nPCTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NPCTemplateFindManyArgs>(args?: SelectSubset<T, NPCTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NPCTemplate.
     * @param {NPCTemplateCreateArgs} args - Arguments to create a NPCTemplate.
     * @example
     * // Create one NPCTemplate
     * const NPCTemplate = await prisma.nPCTemplate.create({
     *   data: {
     *     // ... data to create a NPCTemplate
     *   }
     * })
     * 
     */
    create<T extends NPCTemplateCreateArgs>(args: SelectSubset<T, NPCTemplateCreateArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NPCTemplates.
     * @param {NPCTemplateCreateManyArgs} args - Arguments to create many NPCTemplates.
     * @example
     * // Create many NPCTemplates
     * const nPCTemplate = await prisma.nPCTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NPCTemplateCreateManyArgs>(args?: SelectSubset<T, NPCTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NPCTemplates and returns the data saved in the database.
     * @param {NPCTemplateCreateManyAndReturnArgs} args - Arguments to create many NPCTemplates.
     * @example
     * // Create many NPCTemplates
     * const nPCTemplate = await prisma.nPCTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NPCTemplates and only return the `id`
     * const nPCTemplateWithIdOnly = await prisma.nPCTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NPCTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, NPCTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NPCTemplate.
     * @param {NPCTemplateDeleteArgs} args - Arguments to delete one NPCTemplate.
     * @example
     * // Delete one NPCTemplate
     * const NPCTemplate = await prisma.nPCTemplate.delete({
     *   where: {
     *     // ... filter to delete one NPCTemplate
     *   }
     * })
     * 
     */
    delete<T extends NPCTemplateDeleteArgs>(args: SelectSubset<T, NPCTemplateDeleteArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NPCTemplate.
     * @param {NPCTemplateUpdateArgs} args - Arguments to update one NPCTemplate.
     * @example
     * // Update one NPCTemplate
     * const nPCTemplate = await prisma.nPCTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NPCTemplateUpdateArgs>(args: SelectSubset<T, NPCTemplateUpdateArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NPCTemplates.
     * @param {NPCTemplateDeleteManyArgs} args - Arguments to filter NPCTemplates to delete.
     * @example
     * // Delete a few NPCTemplates
     * const { count } = await prisma.nPCTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NPCTemplateDeleteManyArgs>(args?: SelectSubset<T, NPCTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPCTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NPCTemplates
     * const nPCTemplate = await prisma.nPCTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NPCTemplateUpdateManyArgs>(args: SelectSubset<T, NPCTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPCTemplates and returns the data updated in the database.
     * @param {NPCTemplateUpdateManyAndReturnArgs} args - Arguments to update many NPCTemplates.
     * @example
     * // Update many NPCTemplates
     * const nPCTemplate = await prisma.nPCTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NPCTemplates and only return the `id`
     * const nPCTemplateWithIdOnly = await prisma.nPCTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NPCTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, NPCTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NPCTemplate.
     * @param {NPCTemplateUpsertArgs} args - Arguments to update or create a NPCTemplate.
     * @example
     * // Update or create a NPCTemplate
     * const nPCTemplate = await prisma.nPCTemplate.upsert({
     *   create: {
     *     // ... data to create a NPCTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NPCTemplate we want to update
     *   }
     * })
     */
    upsert<T extends NPCTemplateUpsertArgs>(args: SelectSubset<T, NPCTemplateUpsertArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NPCTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateCountArgs} args - Arguments to filter NPCTemplates to count.
     * @example
     * // Count the number of NPCTemplates
     * const count = await prisma.nPCTemplate.count({
     *   where: {
     *     // ... the filter for the NPCTemplates we want to count
     *   }
     * })
    **/
    count<T extends NPCTemplateCountArgs>(
      args?: Subset<T, NPCTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NPCTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NPCTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NPCTemplateAggregateArgs>(args: Subset<T, NPCTemplateAggregateArgs>): Prisma.PrismaPromise<GetNPCTemplateAggregateType<T>>

    /**
     * Group by NPCTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NPCTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NPCTemplateGroupByArgs['orderBy'] }
        : { orderBy?: NPCTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NPCTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNPCTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NPCTemplate model
   */
  readonly fields: NPCTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NPCTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NPCTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    npcStates<T extends NPCTemplate$npcStatesArgs<ExtArgs> = {}>(args?: Subset<T, NPCTemplate$npcStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NPCTemplate model
   */
  interface NPCTemplateFieldRefs {
    readonly id: FieldRef<"NPCTemplate", 'String'>
    readonly code: FieldRef<"NPCTemplate", 'String'>
    readonly name: FieldRef<"NPCTemplate", 'String'>
    readonly personalityTraits: FieldRef<"NPCTemplate", 'Json'>
    readonly defaultDialogue: FieldRef<"NPCTemplate", 'Json'>
    readonly appearanceDescription: FieldRef<"NPCTemplate", 'String'>
    readonly isUnique: FieldRef<"NPCTemplate", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * NPCTemplate findUnique
   */
  export type NPCTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NPCTemplate to fetch.
     */
    where: NPCTemplateWhereUniqueInput
  }

  /**
   * NPCTemplate findUniqueOrThrow
   */
  export type NPCTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NPCTemplate to fetch.
     */
    where: NPCTemplateWhereUniqueInput
  }

  /**
   * NPCTemplate findFirst
   */
  export type NPCTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NPCTemplate to fetch.
     */
    where?: NPCTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCTemplates to fetch.
     */
    orderBy?: NPCTemplateOrderByWithRelationInput | NPCTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPCTemplates.
     */
    cursor?: NPCTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPCTemplates.
     */
    distinct?: NPCTemplateScalarFieldEnum | NPCTemplateScalarFieldEnum[]
  }

  /**
   * NPCTemplate findFirstOrThrow
   */
  export type NPCTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NPCTemplate to fetch.
     */
    where?: NPCTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCTemplates to fetch.
     */
    orderBy?: NPCTemplateOrderByWithRelationInput | NPCTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPCTemplates.
     */
    cursor?: NPCTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPCTemplates.
     */
    distinct?: NPCTemplateScalarFieldEnum | NPCTemplateScalarFieldEnum[]
  }

  /**
   * NPCTemplate findMany
   */
  export type NPCTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * Filter, which NPCTemplates to fetch.
     */
    where?: NPCTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCTemplates to fetch.
     */
    orderBy?: NPCTemplateOrderByWithRelationInput | NPCTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NPCTemplates.
     */
    cursor?: NPCTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCTemplates.
     */
    skip?: number
    distinct?: NPCTemplateScalarFieldEnum | NPCTemplateScalarFieldEnum[]
  }

  /**
   * NPCTemplate create
   */
  export type NPCTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a NPCTemplate.
     */
    data: XOR<NPCTemplateCreateInput, NPCTemplateUncheckedCreateInput>
  }

  /**
   * NPCTemplate createMany
   */
  export type NPCTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NPCTemplates.
     */
    data: NPCTemplateCreateManyInput | NPCTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPCTemplate createManyAndReturn
   */
  export type NPCTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many NPCTemplates.
     */
    data: NPCTemplateCreateManyInput | NPCTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPCTemplate update
   */
  export type NPCTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a NPCTemplate.
     */
    data: XOR<NPCTemplateUpdateInput, NPCTemplateUncheckedUpdateInput>
    /**
     * Choose, which NPCTemplate to update.
     */
    where: NPCTemplateWhereUniqueInput
  }

  /**
   * NPCTemplate updateMany
   */
  export type NPCTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NPCTemplates.
     */
    data: XOR<NPCTemplateUpdateManyMutationInput, NPCTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NPCTemplates to update
     */
    where?: NPCTemplateWhereInput
    /**
     * Limit how many NPCTemplates to update.
     */
    limit?: number
  }

  /**
   * NPCTemplate updateManyAndReturn
   */
  export type NPCTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * The data used to update NPCTemplates.
     */
    data: XOR<NPCTemplateUpdateManyMutationInput, NPCTemplateUncheckedUpdateManyInput>
    /**
     * Filter which NPCTemplates to update
     */
    where?: NPCTemplateWhereInput
    /**
     * Limit how many NPCTemplates to update.
     */
    limit?: number
  }

  /**
   * NPCTemplate upsert
   */
  export type NPCTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the NPCTemplate to update in case it exists.
     */
    where: NPCTemplateWhereUniqueInput
    /**
     * In case the NPCTemplate found by the `where` argument doesn't exist, create a new NPCTemplate with this data.
     */
    create: XOR<NPCTemplateCreateInput, NPCTemplateUncheckedCreateInput>
    /**
     * In case the NPCTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NPCTemplateUpdateInput, NPCTemplateUncheckedUpdateInput>
  }

  /**
   * NPCTemplate delete
   */
  export type NPCTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
    /**
     * Filter which NPCTemplate to delete.
     */
    where: NPCTemplateWhereUniqueInput
  }

  /**
   * NPCTemplate deleteMany
   */
  export type NPCTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPCTemplates to delete
     */
    where?: NPCTemplateWhereInput
    /**
     * Limit how many NPCTemplates to delete.
     */
    limit?: number
  }

  /**
   * NPCTemplate.npcStates
   */
  export type NPCTemplate$npcStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    where?: NPCStateWhereInput
    orderBy?: NPCStateOrderByWithRelationInput | NPCStateOrderByWithRelationInput[]
    cursor?: NPCStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NPCStateScalarFieldEnum | NPCStateScalarFieldEnum[]
  }

  /**
   * NPCTemplate without action
   */
  export type NPCTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCTemplate
     */
    select?: NPCTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCTemplate
     */
    omit?: NPCTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCTemplateInclude<ExtArgs> | null
  }


  /**
   * Model NPCState
   */

  export type AggregateNPCState = {
    _count: NPCStateCountAggregateOutputType | null
    _avg: NPCStateAvgAggregateOutputType | null
    _sum: NPCStateSumAggregateOutputType | null
    _min: NPCStateMinAggregateOutputType | null
    _max: NPCStateMaxAggregateOutputType | null
  }

  export type NPCStateAvgAggregateOutputType = {
    relationshipWithPlayer: number | null
  }

  export type NPCStateSumAggregateOutputType = {
    relationshipWithPlayer: number | null
  }

  export type NPCStateMinAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    npcTemplateId: string | null
    currentLocation: string | null
    relationshipWithPlayer: number | null
  }

  export type NPCStateMaxAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    npcTemplateId: string | null
    currentLocation: string | null
    relationshipWithPlayer: number | null
  }

  export type NPCStateCountAggregateOutputType = {
    id: number
    gameStateId: number
    npcTemplateId: number
    currentLocation: number
    relationshipWithPlayer: number
    dialogueHistory: number
    instanceProperties: number
    _all: number
  }


  export type NPCStateAvgAggregateInputType = {
    relationshipWithPlayer?: true
  }

  export type NPCStateSumAggregateInputType = {
    relationshipWithPlayer?: true
  }

  export type NPCStateMinAggregateInputType = {
    id?: true
    gameStateId?: true
    npcTemplateId?: true
    currentLocation?: true
    relationshipWithPlayer?: true
  }

  export type NPCStateMaxAggregateInputType = {
    id?: true
    gameStateId?: true
    npcTemplateId?: true
    currentLocation?: true
    relationshipWithPlayer?: true
  }

  export type NPCStateCountAggregateInputType = {
    id?: true
    gameStateId?: true
    npcTemplateId?: true
    currentLocation?: true
    relationshipWithPlayer?: true
    dialogueHistory?: true
    instanceProperties?: true
    _all?: true
  }

  export type NPCStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPCState to aggregate.
     */
    where?: NPCStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCStates to fetch.
     */
    orderBy?: NPCStateOrderByWithRelationInput | NPCStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NPCStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NPCStates
    **/
    _count?: true | NPCStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NPCStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NPCStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NPCStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NPCStateMaxAggregateInputType
  }

  export type GetNPCStateAggregateType<T extends NPCStateAggregateArgs> = {
        [P in keyof T & keyof AggregateNPCState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNPCState[P]>
      : GetScalarType<T[P], AggregateNPCState[P]>
  }




  export type NPCStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPCStateWhereInput
    orderBy?: NPCStateOrderByWithAggregationInput | NPCStateOrderByWithAggregationInput[]
    by: NPCStateScalarFieldEnum[] | NPCStateScalarFieldEnum
    having?: NPCStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NPCStateCountAggregateInputType | true
    _avg?: NPCStateAvgAggregateInputType
    _sum?: NPCStateSumAggregateInputType
    _min?: NPCStateMinAggregateInputType
    _max?: NPCStateMaxAggregateInputType
  }

  export type NPCStateGroupByOutputType = {
    id: string
    gameStateId: string
    npcTemplateId: string
    currentLocation: string | null
    relationshipWithPlayer: number
    dialogueHistory: JsonValue
    instanceProperties: JsonValue
    _count: NPCStateCountAggregateOutputType | null
    _avg: NPCStateAvgAggregateOutputType | null
    _sum: NPCStateSumAggregateOutputType | null
    _min: NPCStateMinAggregateOutputType | null
    _max: NPCStateMaxAggregateOutputType | null
  }

  type GetNPCStateGroupByPayload<T extends NPCStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NPCStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NPCStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NPCStateGroupByOutputType[P]>
            : GetScalarType<T[P], NPCStateGroupByOutputType[P]>
        }
      >
    >


  export type NPCStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    npcTemplateId?: boolean
    currentLocation?: boolean
    relationshipWithPlayer?: boolean
    dialogueHistory?: boolean
    instanceProperties?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
    npcTemplate?: boolean | NPCTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nPCState"]>

  export type NPCStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    npcTemplateId?: boolean
    currentLocation?: boolean
    relationshipWithPlayer?: boolean
    dialogueHistory?: boolean
    instanceProperties?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
    npcTemplate?: boolean | NPCTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nPCState"]>

  export type NPCStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    npcTemplateId?: boolean
    currentLocation?: boolean
    relationshipWithPlayer?: boolean
    dialogueHistory?: boolean
    instanceProperties?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
    npcTemplate?: boolean | NPCTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nPCState"]>

  export type NPCStateSelectScalar = {
    id?: boolean
    gameStateId?: boolean
    npcTemplateId?: boolean
    currentLocation?: boolean
    relationshipWithPlayer?: boolean
    dialogueHistory?: boolean
    instanceProperties?: boolean
  }

  export type NPCStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameStateId" | "npcTemplateId" | "currentLocation" | "relationshipWithPlayer" | "dialogueHistory" | "instanceProperties", ExtArgs["result"]["nPCState"]>
  export type NPCStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
    npcTemplate?: boolean | NPCTemplateDefaultArgs<ExtArgs>
  }
  export type NPCStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
    npcTemplate?: boolean | NPCTemplateDefaultArgs<ExtArgs>
  }
  export type NPCStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
    npcTemplate?: boolean | NPCTemplateDefaultArgs<ExtArgs>
  }

  export type $NPCStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NPCState"
    objects: {
      gameState: Prisma.$GameStatePayload<ExtArgs>
      npcTemplate: Prisma.$NPCTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameStateId: string
      npcTemplateId: string
      currentLocation: string | null
      relationshipWithPlayer: number
      dialogueHistory: Prisma.JsonValue
      instanceProperties: Prisma.JsonValue
    }, ExtArgs["result"]["nPCState"]>
    composites: {}
  }

  type NPCStateGetPayload<S extends boolean | null | undefined | NPCStateDefaultArgs> = $Result.GetResult<Prisma.$NPCStatePayload, S>

  type NPCStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NPCStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NPCStateCountAggregateInputType | true
    }

  export interface NPCStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NPCState'], meta: { name: 'NPCState' } }
    /**
     * Find zero or one NPCState that matches the filter.
     * @param {NPCStateFindUniqueArgs} args - Arguments to find a NPCState
     * @example
     * // Get one NPCState
     * const nPCState = await prisma.nPCState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NPCStateFindUniqueArgs>(args: SelectSubset<T, NPCStateFindUniqueArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NPCState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NPCStateFindUniqueOrThrowArgs} args - Arguments to find a NPCState
     * @example
     * // Get one NPCState
     * const nPCState = await prisma.nPCState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NPCStateFindUniqueOrThrowArgs>(args: SelectSubset<T, NPCStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPCState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateFindFirstArgs} args - Arguments to find a NPCState
     * @example
     * // Get one NPCState
     * const nPCState = await prisma.nPCState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NPCStateFindFirstArgs>(args?: SelectSubset<T, NPCStateFindFirstArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPCState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateFindFirstOrThrowArgs} args - Arguments to find a NPCState
     * @example
     * // Get one NPCState
     * const nPCState = await prisma.nPCState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NPCStateFindFirstOrThrowArgs>(args?: SelectSubset<T, NPCStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NPCStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NPCStates
     * const nPCStates = await prisma.nPCState.findMany()
     * 
     * // Get first 10 NPCStates
     * const nPCStates = await prisma.nPCState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nPCStateWithIdOnly = await prisma.nPCState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NPCStateFindManyArgs>(args?: SelectSubset<T, NPCStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NPCState.
     * @param {NPCStateCreateArgs} args - Arguments to create a NPCState.
     * @example
     * // Create one NPCState
     * const NPCState = await prisma.nPCState.create({
     *   data: {
     *     // ... data to create a NPCState
     *   }
     * })
     * 
     */
    create<T extends NPCStateCreateArgs>(args: SelectSubset<T, NPCStateCreateArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NPCStates.
     * @param {NPCStateCreateManyArgs} args - Arguments to create many NPCStates.
     * @example
     * // Create many NPCStates
     * const nPCState = await prisma.nPCState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NPCStateCreateManyArgs>(args?: SelectSubset<T, NPCStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NPCStates and returns the data saved in the database.
     * @param {NPCStateCreateManyAndReturnArgs} args - Arguments to create many NPCStates.
     * @example
     * // Create many NPCStates
     * const nPCState = await prisma.nPCState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NPCStates and only return the `id`
     * const nPCStateWithIdOnly = await prisma.nPCState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NPCStateCreateManyAndReturnArgs>(args?: SelectSubset<T, NPCStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NPCState.
     * @param {NPCStateDeleteArgs} args - Arguments to delete one NPCState.
     * @example
     * // Delete one NPCState
     * const NPCState = await prisma.nPCState.delete({
     *   where: {
     *     // ... filter to delete one NPCState
     *   }
     * })
     * 
     */
    delete<T extends NPCStateDeleteArgs>(args: SelectSubset<T, NPCStateDeleteArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NPCState.
     * @param {NPCStateUpdateArgs} args - Arguments to update one NPCState.
     * @example
     * // Update one NPCState
     * const nPCState = await prisma.nPCState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NPCStateUpdateArgs>(args: SelectSubset<T, NPCStateUpdateArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NPCStates.
     * @param {NPCStateDeleteManyArgs} args - Arguments to filter NPCStates to delete.
     * @example
     * // Delete a few NPCStates
     * const { count } = await prisma.nPCState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NPCStateDeleteManyArgs>(args?: SelectSubset<T, NPCStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPCStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NPCStates
     * const nPCState = await prisma.nPCState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NPCStateUpdateManyArgs>(args: SelectSubset<T, NPCStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPCStates and returns the data updated in the database.
     * @param {NPCStateUpdateManyAndReturnArgs} args - Arguments to update many NPCStates.
     * @example
     * // Update many NPCStates
     * const nPCState = await prisma.nPCState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NPCStates and only return the `id`
     * const nPCStateWithIdOnly = await prisma.nPCState.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NPCStateUpdateManyAndReturnArgs>(args: SelectSubset<T, NPCStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NPCState.
     * @param {NPCStateUpsertArgs} args - Arguments to update or create a NPCState.
     * @example
     * // Update or create a NPCState
     * const nPCState = await prisma.nPCState.upsert({
     *   create: {
     *     // ... data to create a NPCState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NPCState we want to update
     *   }
     * })
     */
    upsert<T extends NPCStateUpsertArgs>(args: SelectSubset<T, NPCStateUpsertArgs<ExtArgs>>): Prisma__NPCStateClient<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NPCStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateCountArgs} args - Arguments to filter NPCStates to count.
     * @example
     * // Count the number of NPCStates
     * const count = await prisma.nPCState.count({
     *   where: {
     *     // ... the filter for the NPCStates we want to count
     *   }
     * })
    **/
    count<T extends NPCStateCountArgs>(
      args?: Subset<T, NPCStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NPCStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NPCState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NPCStateAggregateArgs>(args: Subset<T, NPCStateAggregateArgs>): Prisma.PrismaPromise<GetNPCStateAggregateType<T>>

    /**
     * Group by NPCState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NPCStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NPCStateGroupByArgs['orderBy'] }
        : { orderBy?: NPCStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NPCStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNPCStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NPCState model
   */
  readonly fields: NPCStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NPCState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NPCStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameState<T extends GameStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameStateDefaultArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    npcTemplate<T extends NPCTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NPCTemplateDefaultArgs<ExtArgs>>): Prisma__NPCTemplateClient<$Result.GetResult<Prisma.$NPCTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NPCState model
   */
  interface NPCStateFieldRefs {
    readonly id: FieldRef<"NPCState", 'String'>
    readonly gameStateId: FieldRef<"NPCState", 'String'>
    readonly npcTemplateId: FieldRef<"NPCState", 'String'>
    readonly currentLocation: FieldRef<"NPCState", 'String'>
    readonly relationshipWithPlayer: FieldRef<"NPCState", 'Int'>
    readonly dialogueHistory: FieldRef<"NPCState", 'Json'>
    readonly instanceProperties: FieldRef<"NPCState", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * NPCState findUnique
   */
  export type NPCStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * Filter, which NPCState to fetch.
     */
    where: NPCStateWhereUniqueInput
  }

  /**
   * NPCState findUniqueOrThrow
   */
  export type NPCStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * Filter, which NPCState to fetch.
     */
    where: NPCStateWhereUniqueInput
  }

  /**
   * NPCState findFirst
   */
  export type NPCStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * Filter, which NPCState to fetch.
     */
    where?: NPCStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCStates to fetch.
     */
    orderBy?: NPCStateOrderByWithRelationInput | NPCStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPCStates.
     */
    cursor?: NPCStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPCStates.
     */
    distinct?: NPCStateScalarFieldEnum | NPCStateScalarFieldEnum[]
  }

  /**
   * NPCState findFirstOrThrow
   */
  export type NPCStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * Filter, which NPCState to fetch.
     */
    where?: NPCStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCStates to fetch.
     */
    orderBy?: NPCStateOrderByWithRelationInput | NPCStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPCStates.
     */
    cursor?: NPCStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPCStates.
     */
    distinct?: NPCStateScalarFieldEnum | NPCStateScalarFieldEnum[]
  }

  /**
   * NPCState findMany
   */
  export type NPCStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * Filter, which NPCStates to fetch.
     */
    where?: NPCStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCStates to fetch.
     */
    orderBy?: NPCStateOrderByWithRelationInput | NPCStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NPCStates.
     */
    cursor?: NPCStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCStates.
     */
    skip?: number
    distinct?: NPCStateScalarFieldEnum | NPCStateScalarFieldEnum[]
  }

  /**
   * NPCState create
   */
  export type NPCStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * The data needed to create a NPCState.
     */
    data: XOR<NPCStateCreateInput, NPCStateUncheckedCreateInput>
  }

  /**
   * NPCState createMany
   */
  export type NPCStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NPCStates.
     */
    data: NPCStateCreateManyInput | NPCStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPCState createManyAndReturn
   */
  export type NPCStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * The data used to create many NPCStates.
     */
    data: NPCStateCreateManyInput | NPCStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NPCState update
   */
  export type NPCStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * The data needed to update a NPCState.
     */
    data: XOR<NPCStateUpdateInput, NPCStateUncheckedUpdateInput>
    /**
     * Choose, which NPCState to update.
     */
    where: NPCStateWhereUniqueInput
  }

  /**
   * NPCState updateMany
   */
  export type NPCStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NPCStates.
     */
    data: XOR<NPCStateUpdateManyMutationInput, NPCStateUncheckedUpdateManyInput>
    /**
     * Filter which NPCStates to update
     */
    where?: NPCStateWhereInput
    /**
     * Limit how many NPCStates to update.
     */
    limit?: number
  }

  /**
   * NPCState updateManyAndReturn
   */
  export type NPCStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * The data used to update NPCStates.
     */
    data: XOR<NPCStateUpdateManyMutationInput, NPCStateUncheckedUpdateManyInput>
    /**
     * Filter which NPCStates to update
     */
    where?: NPCStateWhereInput
    /**
     * Limit how many NPCStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NPCState upsert
   */
  export type NPCStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * The filter to search for the NPCState to update in case it exists.
     */
    where: NPCStateWhereUniqueInput
    /**
     * In case the NPCState found by the `where` argument doesn't exist, create a new NPCState with this data.
     */
    create: XOR<NPCStateCreateInput, NPCStateUncheckedCreateInput>
    /**
     * In case the NPCState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NPCStateUpdateInput, NPCStateUncheckedUpdateInput>
  }

  /**
   * NPCState delete
   */
  export type NPCStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
    /**
     * Filter which NPCState to delete.
     */
    where: NPCStateWhereUniqueInput
  }

  /**
   * NPCState deleteMany
   */
  export type NPCStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPCStates to delete
     */
    where?: NPCStateWhereInput
    /**
     * Limit how many NPCStates to delete.
     */
    limit?: number
  }

  /**
   * NPCState without action
   */
  export type NPCStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCState
     */
    select?: NPCStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPCState
     */
    omit?: NPCStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCStateInclude<ExtArgs> | null
  }


  /**
   * Model LoreCategory
   */

  export type AggregateLoreCategory = {
    _count: LoreCategoryCountAggregateOutputType | null
    _min: LoreCategoryMinAggregateOutputType | null
    _max: LoreCategoryMaxAggregateOutputType | null
  }

  export type LoreCategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentCategoryId: string | null
  }

  export type LoreCategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    parentCategoryId: string | null
  }

  export type LoreCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    parentCategoryId: number
    _all: number
  }


  export type LoreCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentCategoryId?: true
  }

  export type LoreCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentCategoryId?: true
  }

  export type LoreCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    parentCategoryId?: true
    _all?: true
  }

  export type LoreCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoreCategory to aggregate.
     */
    where?: LoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreCategories to fetch.
     */
    orderBy?: LoreCategoryOrderByWithRelationInput | LoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoreCategories
    **/
    _count?: true | LoreCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoreCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoreCategoryMaxAggregateInputType
  }

  export type GetLoreCategoryAggregateType<T extends LoreCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLoreCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoreCategory[P]>
      : GetScalarType<T[P], AggregateLoreCategory[P]>
  }




  export type LoreCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreCategoryWhereInput
    orderBy?: LoreCategoryOrderByWithAggregationInput | LoreCategoryOrderByWithAggregationInput[]
    by: LoreCategoryScalarFieldEnum[] | LoreCategoryScalarFieldEnum
    having?: LoreCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoreCategoryCountAggregateInputType | true
    _min?: LoreCategoryMinAggregateInputType
    _max?: LoreCategoryMaxAggregateInputType
  }

  export type LoreCategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    parentCategoryId: string | null
    _count: LoreCategoryCountAggregateOutputType | null
    _min: LoreCategoryMinAggregateOutputType | null
    _max: LoreCategoryMaxAggregateOutputType | null
  }

  type GetLoreCategoryGroupByPayload<T extends LoreCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoreCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoreCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoreCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], LoreCategoryGroupByOutputType[P]>
        }
      >
    >


  export type LoreCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentCategoryId?: boolean
    parentCategory?: boolean | LoreCategory$parentCategoryArgs<ExtArgs>
    subcategories?: boolean | LoreCategory$subcategoriesArgs<ExtArgs>
    worldLore?: boolean | LoreCategory$worldLoreArgs<ExtArgs>
    _count?: boolean | LoreCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreCategory"]>

  export type LoreCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentCategoryId?: boolean
    parentCategory?: boolean | LoreCategory$parentCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["loreCategory"]>

  export type LoreCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    parentCategoryId?: boolean
    parentCategory?: boolean | LoreCategory$parentCategoryArgs<ExtArgs>
  }, ExtArgs["result"]["loreCategory"]>

  export type LoreCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    parentCategoryId?: boolean
  }

  export type LoreCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "parentCategoryId", ExtArgs["result"]["loreCategory"]>
  export type LoreCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | LoreCategory$parentCategoryArgs<ExtArgs>
    subcategories?: boolean | LoreCategory$subcategoriesArgs<ExtArgs>
    worldLore?: boolean | LoreCategory$worldLoreArgs<ExtArgs>
    _count?: boolean | LoreCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LoreCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | LoreCategory$parentCategoryArgs<ExtArgs>
  }
  export type LoreCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parentCategory?: boolean | LoreCategory$parentCategoryArgs<ExtArgs>
  }

  export type $LoreCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoreCategory"
    objects: {
      parentCategory: Prisma.$LoreCategoryPayload<ExtArgs> | null
      subcategories: Prisma.$LoreCategoryPayload<ExtArgs>[]
      worldLore: Prisma.$WorldLorePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      parentCategoryId: string | null
    }, ExtArgs["result"]["loreCategory"]>
    composites: {}
  }

  type LoreCategoryGetPayload<S extends boolean | null | undefined | LoreCategoryDefaultArgs> = $Result.GetResult<Prisma.$LoreCategoryPayload, S>

  type LoreCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoreCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoreCategoryCountAggregateInputType | true
    }

  export interface LoreCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoreCategory'], meta: { name: 'LoreCategory' } }
    /**
     * Find zero or one LoreCategory that matches the filter.
     * @param {LoreCategoryFindUniqueArgs} args - Arguments to find a LoreCategory
     * @example
     * // Get one LoreCategory
     * const loreCategory = await prisma.loreCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoreCategoryFindUniqueArgs>(args: SelectSubset<T, LoreCategoryFindUniqueArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoreCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoreCategoryFindUniqueOrThrowArgs} args - Arguments to find a LoreCategory
     * @example
     * // Get one LoreCategory
     * const loreCategory = await prisma.loreCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoreCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LoreCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoreCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryFindFirstArgs} args - Arguments to find a LoreCategory
     * @example
     * // Get one LoreCategory
     * const loreCategory = await prisma.loreCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoreCategoryFindFirstArgs>(args?: SelectSubset<T, LoreCategoryFindFirstArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoreCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryFindFirstOrThrowArgs} args - Arguments to find a LoreCategory
     * @example
     * // Get one LoreCategory
     * const loreCategory = await prisma.loreCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoreCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LoreCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoreCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoreCategories
     * const loreCategories = await prisma.loreCategory.findMany()
     * 
     * // Get first 10 LoreCategories
     * const loreCategories = await prisma.loreCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loreCategoryWithIdOnly = await prisma.loreCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoreCategoryFindManyArgs>(args?: SelectSubset<T, LoreCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoreCategory.
     * @param {LoreCategoryCreateArgs} args - Arguments to create a LoreCategory.
     * @example
     * // Create one LoreCategory
     * const LoreCategory = await prisma.loreCategory.create({
     *   data: {
     *     // ... data to create a LoreCategory
     *   }
     * })
     * 
     */
    create<T extends LoreCategoryCreateArgs>(args: SelectSubset<T, LoreCategoryCreateArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoreCategories.
     * @param {LoreCategoryCreateManyArgs} args - Arguments to create many LoreCategories.
     * @example
     * // Create many LoreCategories
     * const loreCategory = await prisma.loreCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoreCategoryCreateManyArgs>(args?: SelectSubset<T, LoreCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoreCategories and returns the data saved in the database.
     * @param {LoreCategoryCreateManyAndReturnArgs} args - Arguments to create many LoreCategories.
     * @example
     * // Create many LoreCategories
     * const loreCategory = await prisma.loreCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoreCategories and only return the `id`
     * const loreCategoryWithIdOnly = await prisma.loreCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoreCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LoreCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoreCategory.
     * @param {LoreCategoryDeleteArgs} args - Arguments to delete one LoreCategory.
     * @example
     * // Delete one LoreCategory
     * const LoreCategory = await prisma.loreCategory.delete({
     *   where: {
     *     // ... filter to delete one LoreCategory
     *   }
     * })
     * 
     */
    delete<T extends LoreCategoryDeleteArgs>(args: SelectSubset<T, LoreCategoryDeleteArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoreCategory.
     * @param {LoreCategoryUpdateArgs} args - Arguments to update one LoreCategory.
     * @example
     * // Update one LoreCategory
     * const loreCategory = await prisma.loreCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoreCategoryUpdateArgs>(args: SelectSubset<T, LoreCategoryUpdateArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoreCategories.
     * @param {LoreCategoryDeleteManyArgs} args - Arguments to filter LoreCategories to delete.
     * @example
     * // Delete a few LoreCategories
     * const { count } = await prisma.loreCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoreCategoryDeleteManyArgs>(args?: SelectSubset<T, LoreCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoreCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoreCategories
     * const loreCategory = await prisma.loreCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoreCategoryUpdateManyArgs>(args: SelectSubset<T, LoreCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoreCategories and returns the data updated in the database.
     * @param {LoreCategoryUpdateManyAndReturnArgs} args - Arguments to update many LoreCategories.
     * @example
     * // Update many LoreCategories
     * const loreCategory = await prisma.loreCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoreCategories and only return the `id`
     * const loreCategoryWithIdOnly = await prisma.loreCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LoreCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LoreCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoreCategory.
     * @param {LoreCategoryUpsertArgs} args - Arguments to update or create a LoreCategory.
     * @example
     * // Update or create a LoreCategory
     * const loreCategory = await prisma.loreCategory.upsert({
     *   create: {
     *     // ... data to create a LoreCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoreCategory we want to update
     *   }
     * })
     */
    upsert<T extends LoreCategoryUpsertArgs>(args: SelectSubset<T, LoreCategoryUpsertArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoreCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryCountArgs} args - Arguments to filter LoreCategories to count.
     * @example
     * // Count the number of LoreCategories
     * const count = await prisma.loreCategory.count({
     *   where: {
     *     // ... the filter for the LoreCategories we want to count
     *   }
     * })
    **/
    count<T extends LoreCategoryCountArgs>(
      args?: Subset<T, LoreCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoreCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoreCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LoreCategoryAggregateArgs>(args: Subset<T, LoreCategoryAggregateArgs>): Prisma.PrismaPromise<GetLoreCategoryAggregateType<T>>

    /**
     * Group by LoreCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LoreCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoreCategoryGroupByArgs['orderBy'] }
        : { orderBy?: LoreCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LoreCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoreCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoreCategory model
   */
  readonly fields: LoreCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoreCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoreCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    parentCategory<T extends LoreCategory$parentCategoryArgs<ExtArgs> = {}>(args?: Subset<T, LoreCategory$parentCategoryArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subcategories<T extends LoreCategory$subcategoriesArgs<ExtArgs> = {}>(args?: Subset<T, LoreCategory$subcategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    worldLore<T extends LoreCategory$worldLoreArgs<ExtArgs> = {}>(args?: Subset<T, LoreCategory$worldLoreArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LoreCategory model
   */
  interface LoreCategoryFieldRefs {
    readonly id: FieldRef<"LoreCategory", 'String'>
    readonly name: FieldRef<"LoreCategory", 'String'>
    readonly description: FieldRef<"LoreCategory", 'String'>
    readonly parentCategoryId: FieldRef<"LoreCategory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LoreCategory findUnique
   */
  export type LoreCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoreCategory to fetch.
     */
    where: LoreCategoryWhereUniqueInput
  }

  /**
   * LoreCategory findUniqueOrThrow
   */
  export type LoreCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoreCategory to fetch.
     */
    where: LoreCategoryWhereUniqueInput
  }

  /**
   * LoreCategory findFirst
   */
  export type LoreCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoreCategory to fetch.
     */
    where?: LoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreCategories to fetch.
     */
    orderBy?: LoreCategoryOrderByWithRelationInput | LoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoreCategories.
     */
    cursor?: LoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreCategories.
     */
    distinct?: LoreCategoryScalarFieldEnum | LoreCategoryScalarFieldEnum[]
  }

  /**
   * LoreCategory findFirstOrThrow
   */
  export type LoreCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoreCategory to fetch.
     */
    where?: LoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreCategories to fetch.
     */
    orderBy?: LoreCategoryOrderByWithRelationInput | LoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoreCategories.
     */
    cursor?: LoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreCategories.
     */
    distinct?: LoreCategoryScalarFieldEnum | LoreCategoryScalarFieldEnum[]
  }

  /**
   * LoreCategory findMany
   */
  export type LoreCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * Filter, which LoreCategories to fetch.
     */
    where?: LoreCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreCategories to fetch.
     */
    orderBy?: LoreCategoryOrderByWithRelationInput | LoreCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoreCategories.
     */
    cursor?: LoreCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreCategories.
     */
    skip?: number
    distinct?: LoreCategoryScalarFieldEnum | LoreCategoryScalarFieldEnum[]
  }

  /**
   * LoreCategory create
   */
  export type LoreCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LoreCategory.
     */
    data: XOR<LoreCategoryCreateInput, LoreCategoryUncheckedCreateInput>
  }

  /**
   * LoreCategory createMany
   */
  export type LoreCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoreCategories.
     */
    data: LoreCategoryCreateManyInput | LoreCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoreCategory createManyAndReturn
   */
  export type LoreCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many LoreCategories.
     */
    data: LoreCategoryCreateManyInput | LoreCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoreCategory update
   */
  export type LoreCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LoreCategory.
     */
    data: XOR<LoreCategoryUpdateInput, LoreCategoryUncheckedUpdateInput>
    /**
     * Choose, which LoreCategory to update.
     */
    where: LoreCategoryWhereUniqueInput
  }

  /**
   * LoreCategory updateMany
   */
  export type LoreCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoreCategories.
     */
    data: XOR<LoreCategoryUpdateManyMutationInput, LoreCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LoreCategories to update
     */
    where?: LoreCategoryWhereInput
    /**
     * Limit how many LoreCategories to update.
     */
    limit?: number
  }

  /**
   * LoreCategory updateManyAndReturn
   */
  export type LoreCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * The data used to update LoreCategories.
     */
    data: XOR<LoreCategoryUpdateManyMutationInput, LoreCategoryUncheckedUpdateManyInput>
    /**
     * Filter which LoreCategories to update
     */
    where?: LoreCategoryWhereInput
    /**
     * Limit how many LoreCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoreCategory upsert
   */
  export type LoreCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LoreCategory to update in case it exists.
     */
    where: LoreCategoryWhereUniqueInput
    /**
     * In case the LoreCategory found by the `where` argument doesn't exist, create a new LoreCategory with this data.
     */
    create: XOR<LoreCategoryCreateInput, LoreCategoryUncheckedCreateInput>
    /**
     * In case the LoreCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoreCategoryUpdateInput, LoreCategoryUncheckedUpdateInput>
  }

  /**
   * LoreCategory delete
   */
  export type LoreCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    /**
     * Filter which LoreCategory to delete.
     */
    where: LoreCategoryWhereUniqueInput
  }

  /**
   * LoreCategory deleteMany
   */
  export type LoreCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoreCategories to delete
     */
    where?: LoreCategoryWhereInput
    /**
     * Limit how many LoreCategories to delete.
     */
    limit?: number
  }

  /**
   * LoreCategory.parentCategory
   */
  export type LoreCategory$parentCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    where?: LoreCategoryWhereInput
  }

  /**
   * LoreCategory.subcategories
   */
  export type LoreCategory$subcategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    where?: LoreCategoryWhereInput
    orderBy?: LoreCategoryOrderByWithRelationInput | LoreCategoryOrderByWithRelationInput[]
    cursor?: LoreCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoreCategoryScalarFieldEnum | LoreCategoryScalarFieldEnum[]
  }

  /**
   * LoreCategory.worldLore
   */
  export type LoreCategory$worldLoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    where?: WorldLoreWhereInput
    orderBy?: WorldLoreOrderByWithRelationInput | WorldLoreOrderByWithRelationInput[]
    cursor?: WorldLoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorldLoreScalarFieldEnum | WorldLoreScalarFieldEnum[]
  }

  /**
   * LoreCategory without action
   */
  export type LoreCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
  }


  /**
   * Model WorldLore
   */

  export type AggregateWorldLore = {
    _count: WorldLoreCountAggregateOutputType | null
    _min: WorldLoreMinAggregateOutputType | null
    _max: WorldLoreMaxAggregateOutputType | null
  }

  export type WorldLoreMinAggregateOutputType = {
    id: string | null
    categoryId: string | null
    title: string | null
    content: string | null
    isDiscoverable: boolean | null
  }

  export type WorldLoreMaxAggregateOutputType = {
    id: string | null
    categoryId: string | null
    title: string | null
    content: string | null
    isDiscoverable: boolean | null
  }

  export type WorldLoreCountAggregateOutputType = {
    id: number
    categoryId: number
    title: number
    content: number
    isDiscoverable: number
    discoveryConditions: number
    keywords: number
    _all: number
  }


  export type WorldLoreMinAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    content?: true
    isDiscoverable?: true
  }

  export type WorldLoreMaxAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    content?: true
    isDiscoverable?: true
  }

  export type WorldLoreCountAggregateInputType = {
    id?: true
    categoryId?: true
    title?: true
    content?: true
    isDiscoverable?: true
    discoveryConditions?: true
    keywords?: true
    _all?: true
  }

  export type WorldLoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldLore to aggregate.
     */
    where?: WorldLoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldLores to fetch.
     */
    orderBy?: WorldLoreOrderByWithRelationInput | WorldLoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldLoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldLores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldLores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorldLores
    **/
    _count?: true | WorldLoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldLoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldLoreMaxAggregateInputType
  }

  export type GetWorldLoreAggregateType<T extends WorldLoreAggregateArgs> = {
        [P in keyof T & keyof AggregateWorldLore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorldLore[P]>
      : GetScalarType<T[P], AggregateWorldLore[P]>
  }




  export type WorldLoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldLoreWhereInput
    orderBy?: WorldLoreOrderByWithAggregationInput | WorldLoreOrderByWithAggregationInput[]
    by: WorldLoreScalarFieldEnum[] | WorldLoreScalarFieldEnum
    having?: WorldLoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldLoreCountAggregateInputType | true
    _min?: WorldLoreMinAggregateInputType
    _max?: WorldLoreMaxAggregateInputType
  }

  export type WorldLoreGroupByOutputType = {
    id: string
    categoryId: string | null
    title: string
    content: string
    isDiscoverable: boolean
    discoveryConditions: JsonValue
    keywords: string[]
    _count: WorldLoreCountAggregateOutputType | null
    _min: WorldLoreMinAggregateOutputType | null
    _max: WorldLoreMaxAggregateOutputType | null
  }

  type GetWorldLoreGroupByPayload<T extends WorldLoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldLoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldLoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldLoreGroupByOutputType[P]>
            : GetScalarType<T[P], WorldLoreGroupByOutputType[P]>
        }
      >
    >


  export type WorldLoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    isDiscoverable?: boolean
    discoveryConditions?: boolean
    keywords?: boolean
    category?: boolean | WorldLore$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["worldLore"]>

  export type WorldLoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    isDiscoverable?: boolean
    discoveryConditions?: boolean
    keywords?: boolean
    category?: boolean | WorldLore$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["worldLore"]>

  export type WorldLoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    isDiscoverable?: boolean
    discoveryConditions?: boolean
    keywords?: boolean
    category?: boolean | WorldLore$categoryArgs<ExtArgs>
  }, ExtArgs["result"]["worldLore"]>

  export type WorldLoreSelectScalar = {
    id?: boolean
    categoryId?: boolean
    title?: boolean
    content?: boolean
    isDiscoverable?: boolean
    discoveryConditions?: boolean
    keywords?: boolean
  }

  export type WorldLoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryId" | "title" | "content" | "isDiscoverable" | "discoveryConditions" | "keywords", ExtArgs["result"]["worldLore"]>
  export type WorldLoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | WorldLore$categoryArgs<ExtArgs>
  }
  export type WorldLoreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | WorldLore$categoryArgs<ExtArgs>
  }
  export type WorldLoreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | WorldLore$categoryArgs<ExtArgs>
  }

  export type $WorldLorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorldLore"
    objects: {
      category: Prisma.$LoreCategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      categoryId: string | null
      title: string
      content: string
      isDiscoverable: boolean
      discoveryConditions: Prisma.JsonValue
      keywords: string[]
    }, ExtArgs["result"]["worldLore"]>
    composites: {}
  }

  type WorldLoreGetPayload<S extends boolean | null | undefined | WorldLoreDefaultArgs> = $Result.GetResult<Prisma.$WorldLorePayload, S>

  type WorldLoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorldLoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorldLoreCountAggregateInputType | true
    }

  export interface WorldLoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorldLore'], meta: { name: 'WorldLore' } }
    /**
     * Find zero or one WorldLore that matches the filter.
     * @param {WorldLoreFindUniqueArgs} args - Arguments to find a WorldLore
     * @example
     * // Get one WorldLore
     * const worldLore = await prisma.worldLore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldLoreFindUniqueArgs>(args: SelectSubset<T, WorldLoreFindUniqueArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorldLore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldLoreFindUniqueOrThrowArgs} args - Arguments to find a WorldLore
     * @example
     * // Get one WorldLore
     * const worldLore = await prisma.worldLore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldLoreFindUniqueOrThrowArgs>(args: SelectSubset<T, WorldLoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorldLore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreFindFirstArgs} args - Arguments to find a WorldLore
     * @example
     * // Get one WorldLore
     * const worldLore = await prisma.worldLore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldLoreFindFirstArgs>(args?: SelectSubset<T, WorldLoreFindFirstArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorldLore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreFindFirstOrThrowArgs} args - Arguments to find a WorldLore
     * @example
     * // Get one WorldLore
     * const worldLore = await prisma.worldLore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldLoreFindFirstOrThrowArgs>(args?: SelectSubset<T, WorldLoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorldLores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorldLores
     * const worldLores = await prisma.worldLore.findMany()
     * 
     * // Get first 10 WorldLores
     * const worldLores = await prisma.worldLore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldLoreWithIdOnly = await prisma.worldLore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorldLoreFindManyArgs>(args?: SelectSubset<T, WorldLoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorldLore.
     * @param {WorldLoreCreateArgs} args - Arguments to create a WorldLore.
     * @example
     * // Create one WorldLore
     * const WorldLore = await prisma.worldLore.create({
     *   data: {
     *     // ... data to create a WorldLore
     *   }
     * })
     * 
     */
    create<T extends WorldLoreCreateArgs>(args: SelectSubset<T, WorldLoreCreateArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorldLores.
     * @param {WorldLoreCreateManyArgs} args - Arguments to create many WorldLores.
     * @example
     * // Create many WorldLores
     * const worldLore = await prisma.worldLore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorldLoreCreateManyArgs>(args?: SelectSubset<T, WorldLoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorldLores and returns the data saved in the database.
     * @param {WorldLoreCreateManyAndReturnArgs} args - Arguments to create many WorldLores.
     * @example
     * // Create many WorldLores
     * const worldLore = await prisma.worldLore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorldLores and only return the `id`
     * const worldLoreWithIdOnly = await prisma.worldLore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorldLoreCreateManyAndReturnArgs>(args?: SelectSubset<T, WorldLoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorldLore.
     * @param {WorldLoreDeleteArgs} args - Arguments to delete one WorldLore.
     * @example
     * // Delete one WorldLore
     * const WorldLore = await prisma.worldLore.delete({
     *   where: {
     *     // ... filter to delete one WorldLore
     *   }
     * })
     * 
     */
    delete<T extends WorldLoreDeleteArgs>(args: SelectSubset<T, WorldLoreDeleteArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorldLore.
     * @param {WorldLoreUpdateArgs} args - Arguments to update one WorldLore.
     * @example
     * // Update one WorldLore
     * const worldLore = await prisma.worldLore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorldLoreUpdateArgs>(args: SelectSubset<T, WorldLoreUpdateArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorldLores.
     * @param {WorldLoreDeleteManyArgs} args - Arguments to filter WorldLores to delete.
     * @example
     * // Delete a few WorldLores
     * const { count } = await prisma.worldLore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorldLoreDeleteManyArgs>(args?: SelectSubset<T, WorldLoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldLores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorldLores
     * const worldLore = await prisma.worldLore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorldLoreUpdateManyArgs>(args: SelectSubset<T, WorldLoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorldLores and returns the data updated in the database.
     * @param {WorldLoreUpdateManyAndReturnArgs} args - Arguments to update many WorldLores.
     * @example
     * // Update many WorldLores
     * const worldLore = await prisma.worldLore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorldLores and only return the `id`
     * const worldLoreWithIdOnly = await prisma.worldLore.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorldLoreUpdateManyAndReturnArgs>(args: SelectSubset<T, WorldLoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorldLore.
     * @param {WorldLoreUpsertArgs} args - Arguments to update or create a WorldLore.
     * @example
     * // Update or create a WorldLore
     * const worldLore = await prisma.worldLore.upsert({
     *   create: {
     *     // ... data to create a WorldLore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorldLore we want to update
     *   }
     * })
     */
    upsert<T extends WorldLoreUpsertArgs>(args: SelectSubset<T, WorldLoreUpsertArgs<ExtArgs>>): Prisma__WorldLoreClient<$Result.GetResult<Prisma.$WorldLorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorldLores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreCountArgs} args - Arguments to filter WorldLores to count.
     * @example
     * // Count the number of WorldLores
     * const count = await prisma.worldLore.count({
     *   where: {
     *     // ... the filter for the WorldLores we want to count
     *   }
     * })
    **/
    count<T extends WorldLoreCountArgs>(
      args?: Subset<T, WorldLoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldLoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorldLore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorldLoreAggregateArgs>(args: Subset<T, WorldLoreAggregateArgs>): Prisma.PrismaPromise<GetWorldLoreAggregateType<T>>

    /**
     * Group by WorldLore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldLoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorldLoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldLoreGroupByArgs['orderBy'] }
        : { orderBy?: WorldLoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorldLoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldLoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorldLore model
   */
  readonly fields: WorldLoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorldLore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldLoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends WorldLore$categoryArgs<ExtArgs> = {}>(args?: Subset<T, WorldLore$categoryArgs<ExtArgs>>): Prisma__LoreCategoryClient<$Result.GetResult<Prisma.$LoreCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorldLore model
   */
  interface WorldLoreFieldRefs {
    readonly id: FieldRef<"WorldLore", 'String'>
    readonly categoryId: FieldRef<"WorldLore", 'String'>
    readonly title: FieldRef<"WorldLore", 'String'>
    readonly content: FieldRef<"WorldLore", 'String'>
    readonly isDiscoverable: FieldRef<"WorldLore", 'Boolean'>
    readonly discoveryConditions: FieldRef<"WorldLore", 'Json'>
    readonly keywords: FieldRef<"WorldLore", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * WorldLore findUnique
   */
  export type WorldLoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * Filter, which WorldLore to fetch.
     */
    where: WorldLoreWhereUniqueInput
  }

  /**
   * WorldLore findUniqueOrThrow
   */
  export type WorldLoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * Filter, which WorldLore to fetch.
     */
    where: WorldLoreWhereUniqueInput
  }

  /**
   * WorldLore findFirst
   */
  export type WorldLoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * Filter, which WorldLore to fetch.
     */
    where?: WorldLoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldLores to fetch.
     */
    orderBy?: WorldLoreOrderByWithRelationInput | WorldLoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldLores.
     */
    cursor?: WorldLoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldLores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldLores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldLores.
     */
    distinct?: WorldLoreScalarFieldEnum | WorldLoreScalarFieldEnum[]
  }

  /**
   * WorldLore findFirstOrThrow
   */
  export type WorldLoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * Filter, which WorldLore to fetch.
     */
    where?: WorldLoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldLores to fetch.
     */
    orderBy?: WorldLoreOrderByWithRelationInput | WorldLoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorldLores.
     */
    cursor?: WorldLoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldLores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldLores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorldLores.
     */
    distinct?: WorldLoreScalarFieldEnum | WorldLoreScalarFieldEnum[]
  }

  /**
   * WorldLore findMany
   */
  export type WorldLoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * Filter, which WorldLores to fetch.
     */
    where?: WorldLoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorldLores to fetch.
     */
    orderBy?: WorldLoreOrderByWithRelationInput | WorldLoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorldLores.
     */
    cursor?: WorldLoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorldLores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorldLores.
     */
    skip?: number
    distinct?: WorldLoreScalarFieldEnum | WorldLoreScalarFieldEnum[]
  }

  /**
   * WorldLore create
   */
  export type WorldLoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * The data needed to create a WorldLore.
     */
    data: XOR<WorldLoreCreateInput, WorldLoreUncheckedCreateInput>
  }

  /**
   * WorldLore createMany
   */
  export type WorldLoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorldLores.
     */
    data: WorldLoreCreateManyInput | WorldLoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorldLore createManyAndReturn
   */
  export type WorldLoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * The data used to create many WorldLores.
     */
    data: WorldLoreCreateManyInput | WorldLoreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorldLore update
   */
  export type WorldLoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * The data needed to update a WorldLore.
     */
    data: XOR<WorldLoreUpdateInput, WorldLoreUncheckedUpdateInput>
    /**
     * Choose, which WorldLore to update.
     */
    where: WorldLoreWhereUniqueInput
  }

  /**
   * WorldLore updateMany
   */
  export type WorldLoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorldLores.
     */
    data: XOR<WorldLoreUpdateManyMutationInput, WorldLoreUncheckedUpdateManyInput>
    /**
     * Filter which WorldLores to update
     */
    where?: WorldLoreWhereInput
    /**
     * Limit how many WorldLores to update.
     */
    limit?: number
  }

  /**
   * WorldLore updateManyAndReturn
   */
  export type WorldLoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * The data used to update WorldLores.
     */
    data: XOR<WorldLoreUpdateManyMutationInput, WorldLoreUncheckedUpdateManyInput>
    /**
     * Filter which WorldLores to update
     */
    where?: WorldLoreWhereInput
    /**
     * Limit how many WorldLores to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorldLore upsert
   */
  export type WorldLoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * The filter to search for the WorldLore to update in case it exists.
     */
    where: WorldLoreWhereUniqueInput
    /**
     * In case the WorldLore found by the `where` argument doesn't exist, create a new WorldLore with this data.
     */
    create: XOR<WorldLoreCreateInput, WorldLoreUncheckedCreateInput>
    /**
     * In case the WorldLore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldLoreUpdateInput, WorldLoreUncheckedUpdateInput>
  }

  /**
   * WorldLore delete
   */
  export type WorldLoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
    /**
     * Filter which WorldLore to delete.
     */
    where: WorldLoreWhereUniqueInput
  }

  /**
   * WorldLore deleteMany
   */
  export type WorldLoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorldLores to delete
     */
    where?: WorldLoreWhereInput
    /**
     * Limit how many WorldLores to delete.
     */
    limit?: number
  }

  /**
   * WorldLore.category
   */
  export type WorldLore$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreCategory
     */
    select?: LoreCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreCategory
     */
    omit?: LoreCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreCategoryInclude<ExtArgs> | null
    where?: LoreCategoryWhereInput
  }

  /**
   * WorldLore without action
   */
  export type WorldLoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldLore
     */
    select?: WorldLoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorldLore
     */
    omit?: WorldLoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldLoreInclude<ExtArgs> | null
  }


  /**
   * Model Decision
   */

  export type AggregateDecision = {
    _count: DecisionCountAggregateOutputType | null
    _avg: DecisionAvgAggregateOutputType | null
    _sum: DecisionSumAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  export type DecisionAvgAggregateOutputType = {
    playerChoice: number | null
  }

  export type DecisionSumAggregateOutputType = {
    playerChoice: number | null
  }

  export type DecisionMinAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    decisionPointId: string | null
    decisionContext: string | null
    playerChoice: number | null
    timestamp: Date | null
    location: string | null
  }

  export type DecisionMaxAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    decisionPointId: string | null
    decisionContext: string | null
    playerChoice: number | null
    timestamp: Date | null
    location: string | null
  }

  export type DecisionCountAggregateOutputType = {
    id: number
    gameStateId: number
    decisionPointId: number
    decisionContext: number
    optionsPresented: number
    playerChoice: number
    timestamp: number
    location: number
    relatedNpcIds: number
    consequences: number
    _all: number
  }


  export type DecisionAvgAggregateInputType = {
    playerChoice?: true
  }

  export type DecisionSumAggregateInputType = {
    playerChoice?: true
  }

  export type DecisionMinAggregateInputType = {
    id?: true
    gameStateId?: true
    decisionPointId?: true
    decisionContext?: true
    playerChoice?: true
    timestamp?: true
    location?: true
  }

  export type DecisionMaxAggregateInputType = {
    id?: true
    gameStateId?: true
    decisionPointId?: true
    decisionContext?: true
    playerChoice?: true
    timestamp?: true
    location?: true
  }

  export type DecisionCountAggregateInputType = {
    id?: true
    gameStateId?: true
    decisionPointId?: true
    decisionContext?: true
    optionsPresented?: true
    playerChoice?: true
    timestamp?: true
    location?: true
    relatedNpcIds?: true
    consequences?: true
    _all?: true
  }

  export type DecisionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decision to aggregate.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Decisions
    **/
    _count?: true | DecisionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DecisionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DecisionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DecisionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DecisionMaxAggregateInputType
  }

  export type GetDecisionAggregateType<T extends DecisionAggregateArgs> = {
        [P in keyof T & keyof AggregateDecision]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDecision[P]>
      : GetScalarType<T[P], AggregateDecision[P]>
  }




  export type DecisionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DecisionWhereInput
    orderBy?: DecisionOrderByWithAggregationInput | DecisionOrderByWithAggregationInput[]
    by: DecisionScalarFieldEnum[] | DecisionScalarFieldEnum
    having?: DecisionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DecisionCountAggregateInputType | true
    _avg?: DecisionAvgAggregateInputType
    _sum?: DecisionSumAggregateInputType
    _min?: DecisionMinAggregateInputType
    _max?: DecisionMaxAggregateInputType
  }

  export type DecisionGroupByOutputType = {
    id: string
    gameStateId: string
    decisionPointId: string
    decisionContext: string | null
    optionsPresented: JsonValue
    playerChoice: number
    timestamp: Date
    location: string | null
    relatedNpcIds: string[]
    consequences: JsonValue
    _count: DecisionCountAggregateOutputType | null
    _avg: DecisionAvgAggregateOutputType | null
    _sum: DecisionSumAggregateOutputType | null
    _min: DecisionMinAggregateOutputType | null
    _max: DecisionMaxAggregateOutputType | null
  }

  type GetDecisionGroupByPayload<T extends DecisionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DecisionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DecisionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DecisionGroupByOutputType[P]>
            : GetScalarType<T[P], DecisionGroupByOutputType[P]>
        }
      >
    >


  export type DecisionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    decisionPointId?: boolean
    decisionContext?: boolean
    optionsPresented?: boolean
    playerChoice?: boolean
    timestamp?: boolean
    location?: boolean
    relatedNpcIds?: boolean
    consequences?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    decisionPointId?: boolean
    decisionContext?: boolean
    optionsPresented?: boolean
    playerChoice?: boolean
    timestamp?: boolean
    location?: boolean
    relatedNpcIds?: boolean
    consequences?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    decisionPointId?: boolean
    decisionContext?: boolean
    optionsPresented?: boolean
    playerChoice?: boolean
    timestamp?: boolean
    location?: boolean
    relatedNpcIds?: boolean
    consequences?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["decision"]>

  export type DecisionSelectScalar = {
    id?: boolean
    gameStateId?: boolean
    decisionPointId?: boolean
    decisionContext?: boolean
    optionsPresented?: boolean
    playerChoice?: boolean
    timestamp?: boolean
    location?: boolean
    relatedNpcIds?: boolean
    consequences?: boolean
  }

  export type DecisionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameStateId" | "decisionPointId" | "decisionContext" | "optionsPresented" | "playerChoice" | "timestamp" | "location" | "relatedNpcIds" | "consequences", ExtArgs["result"]["decision"]>
  export type DecisionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }
  export type DecisionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }
  export type DecisionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }

  export type $DecisionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Decision"
    objects: {
      gameState: Prisma.$GameStatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameStateId: string
      decisionPointId: string
      decisionContext: string | null
      optionsPresented: Prisma.JsonValue
      playerChoice: number
      timestamp: Date
      location: string | null
      relatedNpcIds: string[]
      consequences: Prisma.JsonValue
    }, ExtArgs["result"]["decision"]>
    composites: {}
  }

  type DecisionGetPayload<S extends boolean | null | undefined | DecisionDefaultArgs> = $Result.GetResult<Prisma.$DecisionPayload, S>

  type DecisionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DecisionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DecisionCountAggregateInputType | true
    }

  export interface DecisionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Decision'], meta: { name: 'Decision' } }
    /**
     * Find zero or one Decision that matches the filter.
     * @param {DecisionFindUniqueArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DecisionFindUniqueArgs>(args: SelectSubset<T, DecisionFindUniqueArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Decision that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DecisionFindUniqueOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DecisionFindUniqueOrThrowArgs>(args: SelectSubset<T, DecisionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decision that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DecisionFindFirstArgs>(args?: SelectSubset<T, DecisionFindFirstArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Decision that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindFirstOrThrowArgs} args - Arguments to find a Decision
     * @example
     * // Get one Decision
     * const decision = await prisma.decision.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DecisionFindFirstOrThrowArgs>(args?: SelectSubset<T, DecisionFindFirstOrThrowArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Decisions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Decisions
     * const decisions = await prisma.decision.findMany()
     * 
     * // Get first 10 Decisions
     * const decisions = await prisma.decision.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const decisionWithIdOnly = await prisma.decision.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DecisionFindManyArgs>(args?: SelectSubset<T, DecisionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Decision.
     * @param {DecisionCreateArgs} args - Arguments to create a Decision.
     * @example
     * // Create one Decision
     * const Decision = await prisma.decision.create({
     *   data: {
     *     // ... data to create a Decision
     *   }
     * })
     * 
     */
    create<T extends DecisionCreateArgs>(args: SelectSubset<T, DecisionCreateArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Decisions.
     * @param {DecisionCreateManyArgs} args - Arguments to create many Decisions.
     * @example
     * // Create many Decisions
     * const decision = await prisma.decision.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DecisionCreateManyArgs>(args?: SelectSubset<T, DecisionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Decisions and returns the data saved in the database.
     * @param {DecisionCreateManyAndReturnArgs} args - Arguments to create many Decisions.
     * @example
     * // Create many Decisions
     * const decision = await prisma.decision.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Decisions and only return the `id`
     * const decisionWithIdOnly = await prisma.decision.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DecisionCreateManyAndReturnArgs>(args?: SelectSubset<T, DecisionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Decision.
     * @param {DecisionDeleteArgs} args - Arguments to delete one Decision.
     * @example
     * // Delete one Decision
     * const Decision = await prisma.decision.delete({
     *   where: {
     *     // ... filter to delete one Decision
     *   }
     * })
     * 
     */
    delete<T extends DecisionDeleteArgs>(args: SelectSubset<T, DecisionDeleteArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Decision.
     * @param {DecisionUpdateArgs} args - Arguments to update one Decision.
     * @example
     * // Update one Decision
     * const decision = await prisma.decision.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DecisionUpdateArgs>(args: SelectSubset<T, DecisionUpdateArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Decisions.
     * @param {DecisionDeleteManyArgs} args - Arguments to filter Decisions to delete.
     * @example
     * // Delete a few Decisions
     * const { count } = await prisma.decision.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DecisionDeleteManyArgs>(args?: SelectSubset<T, DecisionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DecisionUpdateManyArgs>(args: SelectSubset<T, DecisionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Decisions and returns the data updated in the database.
     * @param {DecisionUpdateManyAndReturnArgs} args - Arguments to update many Decisions.
     * @example
     * // Update many Decisions
     * const decision = await prisma.decision.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Decisions and only return the `id`
     * const decisionWithIdOnly = await prisma.decision.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DecisionUpdateManyAndReturnArgs>(args: SelectSubset<T, DecisionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Decision.
     * @param {DecisionUpsertArgs} args - Arguments to update or create a Decision.
     * @example
     * // Update or create a Decision
     * const decision = await prisma.decision.upsert({
     *   create: {
     *     // ... data to create a Decision
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Decision we want to update
     *   }
     * })
     */
    upsert<T extends DecisionUpsertArgs>(args: SelectSubset<T, DecisionUpsertArgs<ExtArgs>>): Prisma__DecisionClient<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Decisions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionCountArgs} args - Arguments to filter Decisions to count.
     * @example
     * // Count the number of Decisions
     * const count = await prisma.decision.count({
     *   where: {
     *     // ... the filter for the Decisions we want to count
     *   }
     * })
    **/
    count<T extends DecisionCountArgs>(
      args?: Subset<T, DecisionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DecisionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DecisionAggregateArgs>(args: Subset<T, DecisionAggregateArgs>): Prisma.PrismaPromise<GetDecisionAggregateType<T>>

    /**
     * Group by Decision.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DecisionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DecisionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DecisionGroupByArgs['orderBy'] }
        : { orderBy?: DecisionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DecisionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDecisionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Decision model
   */
  readonly fields: DecisionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Decision.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DecisionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameState<T extends GameStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameStateDefaultArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Decision model
   */
  interface DecisionFieldRefs {
    readonly id: FieldRef<"Decision", 'String'>
    readonly gameStateId: FieldRef<"Decision", 'String'>
    readonly decisionPointId: FieldRef<"Decision", 'String'>
    readonly decisionContext: FieldRef<"Decision", 'String'>
    readonly optionsPresented: FieldRef<"Decision", 'Json'>
    readonly playerChoice: FieldRef<"Decision", 'Int'>
    readonly timestamp: FieldRef<"Decision", 'DateTime'>
    readonly location: FieldRef<"Decision", 'String'>
    readonly relatedNpcIds: FieldRef<"Decision", 'String[]'>
    readonly consequences: FieldRef<"Decision", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Decision findUnique
   */
  export type DecisionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision findUniqueOrThrow
   */
  export type DecisionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision findFirst
   */
  export type DecisionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision findFirstOrThrow
   */
  export type DecisionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decision to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Decisions.
     */
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision findMany
   */
  export type DecisionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter, which Decisions to fetch.
     */
    where?: DecisionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Decisions to fetch.
     */
    orderBy?: DecisionOrderByWithRelationInput | DecisionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Decisions.
     */
    cursor?: DecisionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Decisions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Decisions.
     */
    skip?: number
    distinct?: DecisionScalarFieldEnum | DecisionScalarFieldEnum[]
  }

  /**
   * Decision create
   */
  export type DecisionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to create a Decision.
     */
    data: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
  }

  /**
   * Decision createMany
   */
  export type DecisionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Decision createManyAndReturn
   */
  export type DecisionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * The data used to create many Decisions.
     */
    data: DecisionCreateManyInput | DecisionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decision update
   */
  export type DecisionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The data needed to update a Decision.
     */
    data: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
    /**
     * Choose, which Decision to update.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision updateMany
   */
  export type DecisionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to update.
     */
    limit?: number
  }

  /**
   * Decision updateManyAndReturn
   */
  export type DecisionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * The data used to update Decisions.
     */
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyInput>
    /**
     * Filter which Decisions to update
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Decision upsert
   */
  export type DecisionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * The filter to search for the Decision to update in case it exists.
     */
    where: DecisionWhereUniqueInput
    /**
     * In case the Decision found by the `where` argument doesn't exist, create a new Decision with this data.
     */
    create: XOR<DecisionCreateInput, DecisionUncheckedCreateInput>
    /**
     * In case the Decision was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DecisionUpdateInput, DecisionUncheckedUpdateInput>
  }

  /**
   * Decision delete
   */
  export type DecisionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
    /**
     * Filter which Decision to delete.
     */
    where: DecisionWhereUniqueInput
  }

  /**
   * Decision deleteMany
   */
  export type DecisionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Decisions to delete
     */
    where?: DecisionWhereInput
    /**
     * Limit how many Decisions to delete.
     */
    limit?: number
  }

  /**
   * Decision without action
   */
  export type DecisionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Decision
     */
    select?: DecisionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Decision
     */
    omit?: DecisionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DecisionInclude<ExtArgs> | null
  }


  /**
   * Model AIContextHistory
   */

  export type AggregateAIContextHistory = {
    _count: AIContextHistoryCountAggregateOutputType | null
    _avg: AIContextHistoryAvgAggregateOutputType | null
    _sum: AIContextHistorySumAggregateOutputType | null
    _min: AIContextHistoryMinAggregateOutputType | null
    _max: AIContextHistoryMaxAggregateOutputType | null
  }

  export type AIContextHistoryAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    relevanceScore: number | null
  }

  export type AIContextHistorySumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    relevanceScore: number | null
  }

  export type AIContextHistoryMinAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    contextType: string | null
    promptTokens: number | null
    completionTokens: number | null
    promptText: string | null
    completionText: string | null
    timestamp: Date | null
    relevanceScore: number | null
  }

  export type AIContextHistoryMaxAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    contextType: string | null
    promptTokens: number | null
    completionTokens: number | null
    promptText: string | null
    completionText: string | null
    timestamp: Date | null
    relevanceScore: number | null
  }

  export type AIContextHistoryCountAggregateOutputType = {
    id: number
    gameStateId: number
    contextType: number
    promptTokens: number
    completionTokens: number
    promptText: number
    completionText: number
    timestamp: number
    relevanceScore: number
    _all: number
  }


  export type AIContextHistoryAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    relevanceScore?: true
  }

  export type AIContextHistorySumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    relevanceScore?: true
  }

  export type AIContextHistoryMinAggregateInputType = {
    id?: true
    gameStateId?: true
    contextType?: true
    promptTokens?: true
    completionTokens?: true
    promptText?: true
    completionText?: true
    timestamp?: true
    relevanceScore?: true
  }

  export type AIContextHistoryMaxAggregateInputType = {
    id?: true
    gameStateId?: true
    contextType?: true
    promptTokens?: true
    completionTokens?: true
    promptText?: true
    completionText?: true
    timestamp?: true
    relevanceScore?: true
  }

  export type AIContextHistoryCountAggregateInputType = {
    id?: true
    gameStateId?: true
    contextType?: true
    promptTokens?: true
    completionTokens?: true
    promptText?: true
    completionText?: true
    timestamp?: true
    relevanceScore?: true
    _all?: true
  }

  export type AIContextHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIContextHistory to aggregate.
     */
    where?: AIContextHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContextHistories to fetch.
     */
    orderBy?: AIContextHistoryOrderByWithRelationInput | AIContextHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIContextHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContextHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContextHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIContextHistories
    **/
    _count?: true | AIContextHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIContextHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIContextHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIContextHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIContextHistoryMaxAggregateInputType
  }

  export type GetAIContextHistoryAggregateType<T extends AIContextHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAIContextHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIContextHistory[P]>
      : GetScalarType<T[P], AggregateAIContextHistory[P]>
  }




  export type AIContextHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIContextHistoryWhereInput
    orderBy?: AIContextHistoryOrderByWithAggregationInput | AIContextHistoryOrderByWithAggregationInput[]
    by: AIContextHistoryScalarFieldEnum[] | AIContextHistoryScalarFieldEnum
    having?: AIContextHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIContextHistoryCountAggregateInputType | true
    _avg?: AIContextHistoryAvgAggregateInputType
    _sum?: AIContextHistorySumAggregateInputType
    _min?: AIContextHistoryMinAggregateInputType
    _max?: AIContextHistoryMaxAggregateInputType
  }

  export type AIContextHistoryGroupByOutputType = {
    id: string
    gameStateId: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText: string | null
    completionText: string | null
    timestamp: Date
    relevanceScore: number | null
    _count: AIContextHistoryCountAggregateOutputType | null
    _avg: AIContextHistoryAvgAggregateOutputType | null
    _sum: AIContextHistorySumAggregateOutputType | null
    _min: AIContextHistoryMinAggregateOutputType | null
    _max: AIContextHistoryMaxAggregateOutputType | null
  }

  type GetAIContextHistoryGroupByPayload<T extends AIContextHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIContextHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIContextHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIContextHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AIContextHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AIContextHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    contextType?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    promptText?: boolean
    completionText?: boolean
    timestamp?: boolean
    relevanceScore?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContextHistory"]>

  export type AIContextHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    contextType?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    promptText?: boolean
    completionText?: boolean
    timestamp?: boolean
    relevanceScore?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContextHistory"]>

  export type AIContextHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    contextType?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    promptText?: boolean
    completionText?: boolean
    timestamp?: boolean
    relevanceScore?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIContextHistory"]>

  export type AIContextHistorySelectScalar = {
    id?: boolean
    gameStateId?: boolean
    contextType?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    promptText?: boolean
    completionText?: boolean
    timestamp?: boolean
    relevanceScore?: boolean
  }

  export type AIContextHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameStateId" | "contextType" | "promptTokens" | "completionTokens" | "promptText" | "completionText" | "timestamp" | "relevanceScore", ExtArgs["result"]["aIContextHistory"]>
  export type AIContextHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }
  export type AIContextHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }
  export type AIContextHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }

  export type $AIContextHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIContextHistory"
    objects: {
      gameState: Prisma.$GameStatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameStateId: string
      contextType: string
      promptTokens: number
      completionTokens: number
      promptText: string | null
      completionText: string | null
      timestamp: Date
      relevanceScore: number | null
    }, ExtArgs["result"]["aIContextHistory"]>
    composites: {}
  }

  type AIContextHistoryGetPayload<S extends boolean | null | undefined | AIContextHistoryDefaultArgs> = $Result.GetResult<Prisma.$AIContextHistoryPayload, S>

  type AIContextHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIContextHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIContextHistoryCountAggregateInputType | true
    }

  export interface AIContextHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIContextHistory'], meta: { name: 'AIContextHistory' } }
    /**
     * Find zero or one AIContextHistory that matches the filter.
     * @param {AIContextHistoryFindUniqueArgs} args - Arguments to find a AIContextHistory
     * @example
     * // Get one AIContextHistory
     * const aIContextHistory = await prisma.aIContextHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIContextHistoryFindUniqueArgs>(args: SelectSubset<T, AIContextHistoryFindUniqueArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIContextHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIContextHistoryFindUniqueOrThrowArgs} args - Arguments to find a AIContextHistory
     * @example
     * // Get one AIContextHistory
     * const aIContextHistory = await prisma.aIContextHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIContextHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AIContextHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIContextHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryFindFirstArgs} args - Arguments to find a AIContextHistory
     * @example
     * // Get one AIContextHistory
     * const aIContextHistory = await prisma.aIContextHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIContextHistoryFindFirstArgs>(args?: SelectSubset<T, AIContextHistoryFindFirstArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIContextHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryFindFirstOrThrowArgs} args - Arguments to find a AIContextHistory
     * @example
     * // Get one AIContextHistory
     * const aIContextHistory = await prisma.aIContextHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIContextHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AIContextHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIContextHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIContextHistories
     * const aIContextHistories = await prisma.aIContextHistory.findMany()
     * 
     * // Get first 10 AIContextHistories
     * const aIContextHistories = await prisma.aIContextHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIContextHistoryWithIdOnly = await prisma.aIContextHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIContextHistoryFindManyArgs>(args?: SelectSubset<T, AIContextHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIContextHistory.
     * @param {AIContextHistoryCreateArgs} args - Arguments to create a AIContextHistory.
     * @example
     * // Create one AIContextHistory
     * const AIContextHistory = await prisma.aIContextHistory.create({
     *   data: {
     *     // ... data to create a AIContextHistory
     *   }
     * })
     * 
     */
    create<T extends AIContextHistoryCreateArgs>(args: SelectSubset<T, AIContextHistoryCreateArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIContextHistories.
     * @param {AIContextHistoryCreateManyArgs} args - Arguments to create many AIContextHistories.
     * @example
     * // Create many AIContextHistories
     * const aIContextHistory = await prisma.aIContextHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIContextHistoryCreateManyArgs>(args?: SelectSubset<T, AIContextHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIContextHistories and returns the data saved in the database.
     * @param {AIContextHistoryCreateManyAndReturnArgs} args - Arguments to create many AIContextHistories.
     * @example
     * // Create many AIContextHistories
     * const aIContextHistory = await prisma.aIContextHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIContextHistories and only return the `id`
     * const aIContextHistoryWithIdOnly = await prisma.aIContextHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIContextHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AIContextHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIContextHistory.
     * @param {AIContextHistoryDeleteArgs} args - Arguments to delete one AIContextHistory.
     * @example
     * // Delete one AIContextHistory
     * const AIContextHistory = await prisma.aIContextHistory.delete({
     *   where: {
     *     // ... filter to delete one AIContextHistory
     *   }
     * })
     * 
     */
    delete<T extends AIContextHistoryDeleteArgs>(args: SelectSubset<T, AIContextHistoryDeleteArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIContextHistory.
     * @param {AIContextHistoryUpdateArgs} args - Arguments to update one AIContextHistory.
     * @example
     * // Update one AIContextHistory
     * const aIContextHistory = await prisma.aIContextHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIContextHistoryUpdateArgs>(args: SelectSubset<T, AIContextHistoryUpdateArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIContextHistories.
     * @param {AIContextHistoryDeleteManyArgs} args - Arguments to filter AIContextHistories to delete.
     * @example
     * // Delete a few AIContextHistories
     * const { count } = await prisma.aIContextHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIContextHistoryDeleteManyArgs>(args?: SelectSubset<T, AIContextHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIContextHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIContextHistories
     * const aIContextHistory = await prisma.aIContextHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIContextHistoryUpdateManyArgs>(args: SelectSubset<T, AIContextHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIContextHistories and returns the data updated in the database.
     * @param {AIContextHistoryUpdateManyAndReturnArgs} args - Arguments to update many AIContextHistories.
     * @example
     * // Update many AIContextHistories
     * const aIContextHistory = await prisma.aIContextHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIContextHistories and only return the `id`
     * const aIContextHistoryWithIdOnly = await prisma.aIContextHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIContextHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, AIContextHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIContextHistory.
     * @param {AIContextHistoryUpsertArgs} args - Arguments to update or create a AIContextHistory.
     * @example
     * // Update or create a AIContextHistory
     * const aIContextHistory = await prisma.aIContextHistory.upsert({
     *   create: {
     *     // ... data to create a AIContextHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIContextHistory we want to update
     *   }
     * })
     */
    upsert<T extends AIContextHistoryUpsertArgs>(args: SelectSubset<T, AIContextHistoryUpsertArgs<ExtArgs>>): Prisma__AIContextHistoryClient<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIContextHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryCountArgs} args - Arguments to filter AIContextHistories to count.
     * @example
     * // Count the number of AIContextHistories
     * const count = await prisma.aIContextHistory.count({
     *   where: {
     *     // ... the filter for the AIContextHistories we want to count
     *   }
     * })
    **/
    count<T extends AIContextHistoryCountArgs>(
      args?: Subset<T, AIContextHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIContextHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIContextHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIContextHistoryAggregateArgs>(args: Subset<T, AIContextHistoryAggregateArgs>): Prisma.PrismaPromise<GetAIContextHistoryAggregateType<T>>

    /**
     * Group by AIContextHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIContextHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIContextHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIContextHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AIContextHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIContextHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIContextHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIContextHistory model
   */
  readonly fields: AIContextHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIContextHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIContextHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gameState<T extends GameStateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameStateDefaultArgs<ExtArgs>>): Prisma__GameStateClient<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIContextHistory model
   */
  interface AIContextHistoryFieldRefs {
    readonly id: FieldRef<"AIContextHistory", 'String'>
    readonly gameStateId: FieldRef<"AIContextHistory", 'String'>
    readonly contextType: FieldRef<"AIContextHistory", 'String'>
    readonly promptTokens: FieldRef<"AIContextHistory", 'Int'>
    readonly completionTokens: FieldRef<"AIContextHistory", 'Int'>
    readonly promptText: FieldRef<"AIContextHistory", 'String'>
    readonly completionText: FieldRef<"AIContextHistory", 'String'>
    readonly timestamp: FieldRef<"AIContextHistory", 'DateTime'>
    readonly relevanceScore: FieldRef<"AIContextHistory", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * AIContextHistory findUnique
   */
  export type AIContextHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AIContextHistory to fetch.
     */
    where: AIContextHistoryWhereUniqueInput
  }

  /**
   * AIContextHistory findUniqueOrThrow
   */
  export type AIContextHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AIContextHistory to fetch.
     */
    where: AIContextHistoryWhereUniqueInput
  }

  /**
   * AIContextHistory findFirst
   */
  export type AIContextHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AIContextHistory to fetch.
     */
    where?: AIContextHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContextHistories to fetch.
     */
    orderBy?: AIContextHistoryOrderByWithRelationInput | AIContextHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIContextHistories.
     */
    cursor?: AIContextHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContextHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContextHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContextHistories.
     */
    distinct?: AIContextHistoryScalarFieldEnum | AIContextHistoryScalarFieldEnum[]
  }

  /**
   * AIContextHistory findFirstOrThrow
   */
  export type AIContextHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AIContextHistory to fetch.
     */
    where?: AIContextHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContextHistories to fetch.
     */
    orderBy?: AIContextHistoryOrderByWithRelationInput | AIContextHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIContextHistories.
     */
    cursor?: AIContextHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContextHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContextHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIContextHistories.
     */
    distinct?: AIContextHistoryScalarFieldEnum | AIContextHistoryScalarFieldEnum[]
  }

  /**
   * AIContextHistory findMany
   */
  export type AIContextHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AIContextHistories to fetch.
     */
    where?: AIContextHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIContextHistories to fetch.
     */
    orderBy?: AIContextHistoryOrderByWithRelationInput | AIContextHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIContextHistories.
     */
    cursor?: AIContextHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIContextHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIContextHistories.
     */
    skip?: number
    distinct?: AIContextHistoryScalarFieldEnum | AIContextHistoryScalarFieldEnum[]
  }

  /**
   * AIContextHistory create
   */
  export type AIContextHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AIContextHistory.
     */
    data: XOR<AIContextHistoryCreateInput, AIContextHistoryUncheckedCreateInput>
  }

  /**
   * AIContextHistory createMany
   */
  export type AIContextHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIContextHistories.
     */
    data: AIContextHistoryCreateManyInput | AIContextHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIContextHistory createManyAndReturn
   */
  export type AIContextHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many AIContextHistories.
     */
    data: AIContextHistoryCreateManyInput | AIContextHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIContextHistory update
   */
  export type AIContextHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AIContextHistory.
     */
    data: XOR<AIContextHistoryUpdateInput, AIContextHistoryUncheckedUpdateInput>
    /**
     * Choose, which AIContextHistory to update.
     */
    where: AIContextHistoryWhereUniqueInput
  }

  /**
   * AIContextHistory updateMany
   */
  export type AIContextHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIContextHistories.
     */
    data: XOR<AIContextHistoryUpdateManyMutationInput, AIContextHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AIContextHistories to update
     */
    where?: AIContextHistoryWhereInput
    /**
     * Limit how many AIContextHistories to update.
     */
    limit?: number
  }

  /**
   * AIContextHistory updateManyAndReturn
   */
  export type AIContextHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * The data used to update AIContextHistories.
     */
    data: XOR<AIContextHistoryUpdateManyMutationInput, AIContextHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AIContextHistories to update
     */
    where?: AIContextHistoryWhereInput
    /**
     * Limit how many AIContextHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIContextHistory upsert
   */
  export type AIContextHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AIContextHistory to update in case it exists.
     */
    where: AIContextHistoryWhereUniqueInput
    /**
     * In case the AIContextHistory found by the `where` argument doesn't exist, create a new AIContextHistory with this data.
     */
    create: XOR<AIContextHistoryCreateInput, AIContextHistoryUncheckedCreateInput>
    /**
     * In case the AIContextHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIContextHistoryUpdateInput, AIContextHistoryUncheckedUpdateInput>
  }

  /**
   * AIContextHistory delete
   */
  export type AIContextHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
    /**
     * Filter which AIContextHistory to delete.
     */
    where: AIContextHistoryWhereUniqueInput
  }

  /**
   * AIContextHistory deleteMany
   */
  export type AIContextHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIContextHistories to delete
     */
    where?: AIContextHistoryWhereInput
    /**
     * Limit how many AIContextHistories to delete.
     */
    limit?: number
  }

  /**
   * AIContextHistory without action
   */
  export type AIContextHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIContextHistory
     */
    select?: AIContextHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIContextHistory
     */
    omit?: AIContextHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIContextHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    isActive: 'isActive',
    preferences: 'preferences'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CharacterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    backstory: 'backstory',
    appearanceDescription: 'appearanceDescription',
    personalityTraits: 'personalityTraits',
    createdAt: 'createdAt',
    lastPlayedAt: 'lastPlayedAt',
    isActive: 'isActive'
  };

  export type CharacterScalarFieldEnum = (typeof CharacterScalarFieldEnum)[keyof typeof CharacterScalarFieldEnum]


  export const GameSessionScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    startedAt: 'startedAt',
    endedAt: 'endedAt',
    durationSeconds: 'durationSeconds',
    sessionData: 'sessionData'
  };

  export type GameSessionScalarFieldEnum = (typeof GameSessionScalarFieldEnum)[keyof typeof GameSessionScalarFieldEnum]


  export const GameStateScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    characterId: 'characterId',
    savePointName: 'savePointName',
    currentLocation: 'currentLocation',
    saveTimestamp: 'saveTimestamp',
    narrativeContext: 'narrativeContext',
    aiContext: 'aiContext',
    characterState: 'characterState',
    worldState: 'worldState',
    isAutosave: 'isAutosave',
    isCompleted: 'isCompleted'
  };

  export type GameStateScalarFieldEnum = (typeof GameStateScalarFieldEnum)[keyof typeof GameStateScalarFieldEnum]


  export const NPCTemplateScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    personalityTraits: 'personalityTraits',
    defaultDialogue: 'defaultDialogue',
    appearanceDescription: 'appearanceDescription',
    isUnique: 'isUnique'
  };

  export type NPCTemplateScalarFieldEnum = (typeof NPCTemplateScalarFieldEnum)[keyof typeof NPCTemplateScalarFieldEnum]


  export const NPCStateScalarFieldEnum: {
    id: 'id',
    gameStateId: 'gameStateId',
    npcTemplateId: 'npcTemplateId',
    currentLocation: 'currentLocation',
    relationshipWithPlayer: 'relationshipWithPlayer',
    dialogueHistory: 'dialogueHistory',
    instanceProperties: 'instanceProperties'
  };

  export type NPCStateScalarFieldEnum = (typeof NPCStateScalarFieldEnum)[keyof typeof NPCStateScalarFieldEnum]


  export const LoreCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    parentCategoryId: 'parentCategoryId'
  };

  export type LoreCategoryScalarFieldEnum = (typeof LoreCategoryScalarFieldEnum)[keyof typeof LoreCategoryScalarFieldEnum]


  export const WorldLoreScalarFieldEnum: {
    id: 'id',
    categoryId: 'categoryId',
    title: 'title',
    content: 'content',
    isDiscoverable: 'isDiscoverable',
    discoveryConditions: 'discoveryConditions',
    keywords: 'keywords'
  };

  export type WorldLoreScalarFieldEnum = (typeof WorldLoreScalarFieldEnum)[keyof typeof WorldLoreScalarFieldEnum]


  export const DecisionScalarFieldEnum: {
    id: 'id',
    gameStateId: 'gameStateId',
    decisionPointId: 'decisionPointId',
    decisionContext: 'decisionContext',
    optionsPresented: 'optionsPresented',
    playerChoice: 'playerChoice',
    timestamp: 'timestamp',
    location: 'location',
    relatedNpcIds: 'relatedNpcIds',
    consequences: 'consequences'
  };

  export type DecisionScalarFieldEnum = (typeof DecisionScalarFieldEnum)[keyof typeof DecisionScalarFieldEnum]


  export const AIContextHistoryScalarFieldEnum: {
    id: 'id',
    gameStateId: 'gameStateId',
    contextType: 'contextType',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    promptText: 'promptText',
    completionText: 'completionText',
    timestamp: 'timestamp',
    relevanceScore: 'relevanceScore'
  };

  export type AIContextHistoryScalarFieldEnum = (typeof AIContextHistoryScalarFieldEnum)[keyof typeof AIContextHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    preferences?: JsonFilter<"User">
    characters?: CharacterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    preferences?: SortOrder
    characters?: CharacterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    preferences?: JsonFilter<"User">
    characters?: CharacterListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    preferences?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    preferences?: JsonWithAggregatesFilter<"User">
  }

  export type CharacterWhereInput = {
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    id?: StringFilter<"Character"> | string
    userId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    backstory?: StringNullableFilter<"Character"> | string | null
    appearanceDescription?: StringNullableFilter<"Character"> | string | null
    personalityTraits?: JsonFilter<"Character">
    createdAt?: DateTimeFilter<"Character"> | Date | string
    lastPlayedAt?: DateTimeNullableFilter<"Character"> | Date | string | null
    isActive?: BoolFilter<"Character"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gameSessions?: GameSessionListRelationFilter
    gameStates?: GameStateListRelationFilter
  }

  export type CharacterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrderInput | SortOrder
    appearanceDescription?: SortOrderInput | SortOrder
    personalityTraits?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
    gameSessions?: GameSessionOrderByRelationAggregateInput
    gameStates?: GameStateOrderByRelationAggregateInput
  }

  export type CharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: CharacterUserIdNameCompoundUniqueInput
    AND?: CharacterWhereInput | CharacterWhereInput[]
    OR?: CharacterWhereInput[]
    NOT?: CharacterWhereInput | CharacterWhereInput[]
    userId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    backstory?: StringNullableFilter<"Character"> | string | null
    appearanceDescription?: StringNullableFilter<"Character"> | string | null
    personalityTraits?: JsonFilter<"Character">
    createdAt?: DateTimeFilter<"Character"> | Date | string
    lastPlayedAt?: DateTimeNullableFilter<"Character"> | Date | string | null
    isActive?: BoolFilter<"Character"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    gameSessions?: GameSessionListRelationFilter
    gameStates?: GameStateListRelationFilter
  }, "id" | "userId_name">

  export type CharacterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrderInput | SortOrder
    appearanceDescription?: SortOrderInput | SortOrder
    personalityTraits?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: CharacterCountOrderByAggregateInput
    _max?: CharacterMaxOrderByAggregateInput
    _min?: CharacterMinOrderByAggregateInput
  }

  export type CharacterScalarWhereWithAggregatesInput = {
    AND?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    OR?: CharacterScalarWhereWithAggregatesInput[]
    NOT?: CharacterScalarWhereWithAggregatesInput | CharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Character"> | string
    userId?: StringWithAggregatesFilter<"Character"> | string
    name?: StringWithAggregatesFilter<"Character"> | string
    backstory?: StringNullableWithAggregatesFilter<"Character"> | string | null
    appearanceDescription?: StringNullableWithAggregatesFilter<"Character"> | string | null
    personalityTraits?: JsonWithAggregatesFilter<"Character">
    createdAt?: DateTimeWithAggregatesFilter<"Character"> | Date | string
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"Character"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Character"> | boolean
  }

  export type GameSessionWhereInput = {
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    id?: StringFilter<"GameSession"> | string
    characterId?: StringFilter<"GameSession"> | string
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    durationSeconds?: IntNullableFilter<"GameSession"> | number | null
    sessionData?: JsonFilter<"GameSession">
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    gameStates?: GameStateListRelationFilter
  }

  export type GameSessionOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    sessionData?: SortOrder
    character?: CharacterOrderByWithRelationInput
    gameStates?: GameStateOrderByRelationAggregateInput
  }

  export type GameSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameSessionWhereInput | GameSessionWhereInput[]
    OR?: GameSessionWhereInput[]
    NOT?: GameSessionWhereInput | GameSessionWhereInput[]
    characterId?: StringFilter<"GameSession"> | string
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    durationSeconds?: IntNullableFilter<"GameSession"> | number | null
    sessionData?: JsonFilter<"GameSession">
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    gameStates?: GameStateListRelationFilter
  }, "id">

  export type GameSessionOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    durationSeconds?: SortOrderInput | SortOrder
    sessionData?: SortOrder
    _count?: GameSessionCountOrderByAggregateInput
    _avg?: GameSessionAvgOrderByAggregateInput
    _max?: GameSessionMaxOrderByAggregateInput
    _min?: GameSessionMinOrderByAggregateInput
    _sum?: GameSessionSumOrderByAggregateInput
  }

  export type GameSessionScalarWhereWithAggregatesInput = {
    AND?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    OR?: GameSessionScalarWhereWithAggregatesInput[]
    NOT?: GameSessionScalarWhereWithAggregatesInput | GameSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameSession"> | string
    characterId?: StringWithAggregatesFilter<"GameSession"> | string
    startedAt?: DateTimeWithAggregatesFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"GameSession"> | Date | string | null
    durationSeconds?: IntNullableWithAggregatesFilter<"GameSession"> | number | null
    sessionData?: JsonWithAggregatesFilter<"GameSession">
  }

  export type GameStateWhereInput = {
    AND?: GameStateWhereInput | GameStateWhereInput[]
    OR?: GameStateWhereInput[]
    NOT?: GameStateWhereInput | GameStateWhereInput[]
    id?: StringFilter<"GameState"> | string
    sessionId?: StringFilter<"GameState"> | string
    characterId?: StringFilter<"GameState"> | string
    savePointName?: StringNullableFilter<"GameState"> | string | null
    currentLocation?: StringFilter<"GameState"> | string
    saveTimestamp?: DateTimeFilter<"GameState"> | Date | string
    narrativeContext?: StringNullableFilter<"GameState"> | string | null
    aiContext?: JsonFilter<"GameState">
    characterState?: JsonFilter<"GameState">
    worldState?: JsonFilter<"GameState">
    isAutosave?: BoolFilter<"GameState"> | boolean
    isCompleted?: BoolFilter<"GameState"> | boolean
    session?: XOR<GameSessionScalarRelationFilter, GameSessionWhereInput>
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    npcStates?: NPCStateListRelationFilter
    decisions?: DecisionListRelationFilter
    aiContextHistory?: AIContextHistoryListRelationFilter
  }

  export type GameStateOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    savePointName?: SortOrderInput | SortOrder
    currentLocation?: SortOrder
    saveTimestamp?: SortOrder
    narrativeContext?: SortOrderInput | SortOrder
    aiContext?: SortOrder
    characterState?: SortOrder
    worldState?: SortOrder
    isAutosave?: SortOrder
    isCompleted?: SortOrder
    session?: GameSessionOrderByWithRelationInput
    character?: CharacterOrderByWithRelationInput
    npcStates?: NPCStateOrderByRelationAggregateInput
    decisions?: DecisionOrderByRelationAggregateInput
    aiContextHistory?: AIContextHistoryOrderByRelationAggregateInput
  }

  export type GameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameStateWhereInput | GameStateWhereInput[]
    OR?: GameStateWhereInput[]
    NOT?: GameStateWhereInput | GameStateWhereInput[]
    sessionId?: StringFilter<"GameState"> | string
    characterId?: StringFilter<"GameState"> | string
    savePointName?: StringNullableFilter<"GameState"> | string | null
    currentLocation?: StringFilter<"GameState"> | string
    saveTimestamp?: DateTimeFilter<"GameState"> | Date | string
    narrativeContext?: StringNullableFilter<"GameState"> | string | null
    aiContext?: JsonFilter<"GameState">
    characterState?: JsonFilter<"GameState">
    worldState?: JsonFilter<"GameState">
    isAutosave?: BoolFilter<"GameState"> | boolean
    isCompleted?: BoolFilter<"GameState"> | boolean
    session?: XOR<GameSessionScalarRelationFilter, GameSessionWhereInput>
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    npcStates?: NPCStateListRelationFilter
    decisions?: DecisionListRelationFilter
    aiContextHistory?: AIContextHistoryListRelationFilter
  }, "id">

  export type GameStateOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    savePointName?: SortOrderInput | SortOrder
    currentLocation?: SortOrder
    saveTimestamp?: SortOrder
    narrativeContext?: SortOrderInput | SortOrder
    aiContext?: SortOrder
    characterState?: SortOrder
    worldState?: SortOrder
    isAutosave?: SortOrder
    isCompleted?: SortOrder
    _count?: GameStateCountOrderByAggregateInput
    _max?: GameStateMaxOrderByAggregateInput
    _min?: GameStateMinOrderByAggregateInput
  }

  export type GameStateScalarWhereWithAggregatesInput = {
    AND?: GameStateScalarWhereWithAggregatesInput | GameStateScalarWhereWithAggregatesInput[]
    OR?: GameStateScalarWhereWithAggregatesInput[]
    NOT?: GameStateScalarWhereWithAggregatesInput | GameStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameState"> | string
    sessionId?: StringWithAggregatesFilter<"GameState"> | string
    characterId?: StringWithAggregatesFilter<"GameState"> | string
    savePointName?: StringNullableWithAggregatesFilter<"GameState"> | string | null
    currentLocation?: StringWithAggregatesFilter<"GameState"> | string
    saveTimestamp?: DateTimeWithAggregatesFilter<"GameState"> | Date | string
    narrativeContext?: StringNullableWithAggregatesFilter<"GameState"> | string | null
    aiContext?: JsonWithAggregatesFilter<"GameState">
    characterState?: JsonWithAggregatesFilter<"GameState">
    worldState?: JsonWithAggregatesFilter<"GameState">
    isAutosave?: BoolWithAggregatesFilter<"GameState"> | boolean
    isCompleted?: BoolWithAggregatesFilter<"GameState"> | boolean
  }

  export type NPCTemplateWhereInput = {
    AND?: NPCTemplateWhereInput | NPCTemplateWhereInput[]
    OR?: NPCTemplateWhereInput[]
    NOT?: NPCTemplateWhereInput | NPCTemplateWhereInput[]
    id?: StringFilter<"NPCTemplate"> | string
    code?: StringFilter<"NPCTemplate"> | string
    name?: StringFilter<"NPCTemplate"> | string
    personalityTraits?: JsonFilter<"NPCTemplate">
    defaultDialogue?: JsonFilter<"NPCTemplate">
    appearanceDescription?: StringNullableFilter<"NPCTemplate"> | string | null
    isUnique?: BoolFilter<"NPCTemplate"> | boolean
    npcStates?: NPCStateListRelationFilter
  }

  export type NPCTemplateOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    personalityTraits?: SortOrder
    defaultDialogue?: SortOrder
    appearanceDescription?: SortOrderInput | SortOrder
    isUnique?: SortOrder
    npcStates?: NPCStateOrderByRelationAggregateInput
  }

  export type NPCTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: NPCTemplateWhereInput | NPCTemplateWhereInput[]
    OR?: NPCTemplateWhereInput[]
    NOT?: NPCTemplateWhereInput | NPCTemplateWhereInput[]
    name?: StringFilter<"NPCTemplate"> | string
    personalityTraits?: JsonFilter<"NPCTemplate">
    defaultDialogue?: JsonFilter<"NPCTemplate">
    appearanceDescription?: StringNullableFilter<"NPCTemplate"> | string | null
    isUnique?: BoolFilter<"NPCTemplate"> | boolean
    npcStates?: NPCStateListRelationFilter
  }, "id" | "code">

  export type NPCTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    personalityTraits?: SortOrder
    defaultDialogue?: SortOrder
    appearanceDescription?: SortOrderInput | SortOrder
    isUnique?: SortOrder
    _count?: NPCTemplateCountOrderByAggregateInput
    _max?: NPCTemplateMaxOrderByAggregateInput
    _min?: NPCTemplateMinOrderByAggregateInput
  }

  export type NPCTemplateScalarWhereWithAggregatesInput = {
    AND?: NPCTemplateScalarWhereWithAggregatesInput | NPCTemplateScalarWhereWithAggregatesInput[]
    OR?: NPCTemplateScalarWhereWithAggregatesInput[]
    NOT?: NPCTemplateScalarWhereWithAggregatesInput | NPCTemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NPCTemplate"> | string
    code?: StringWithAggregatesFilter<"NPCTemplate"> | string
    name?: StringWithAggregatesFilter<"NPCTemplate"> | string
    personalityTraits?: JsonWithAggregatesFilter<"NPCTemplate">
    defaultDialogue?: JsonWithAggregatesFilter<"NPCTemplate">
    appearanceDescription?: StringNullableWithAggregatesFilter<"NPCTemplate"> | string | null
    isUnique?: BoolWithAggregatesFilter<"NPCTemplate"> | boolean
  }

  export type NPCStateWhereInput = {
    AND?: NPCStateWhereInput | NPCStateWhereInput[]
    OR?: NPCStateWhereInput[]
    NOT?: NPCStateWhereInput | NPCStateWhereInput[]
    id?: StringFilter<"NPCState"> | string
    gameStateId?: StringFilter<"NPCState"> | string
    npcTemplateId?: StringFilter<"NPCState"> | string
    currentLocation?: StringNullableFilter<"NPCState"> | string | null
    relationshipWithPlayer?: IntFilter<"NPCState"> | number
    dialogueHistory?: JsonFilter<"NPCState">
    instanceProperties?: JsonFilter<"NPCState">
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
    npcTemplate?: XOR<NPCTemplateScalarRelationFilter, NPCTemplateWhereInput>
  }

  export type NPCStateOrderByWithRelationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    npcTemplateId?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    relationshipWithPlayer?: SortOrder
    dialogueHistory?: SortOrder
    instanceProperties?: SortOrder
    gameState?: GameStateOrderByWithRelationInput
    npcTemplate?: NPCTemplateOrderByWithRelationInput
  }

  export type NPCStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    gameStateId_npcTemplateId?: NPCStateGameStateIdNpcTemplateIdCompoundUniqueInput
    AND?: NPCStateWhereInput | NPCStateWhereInput[]
    OR?: NPCStateWhereInput[]
    NOT?: NPCStateWhereInput | NPCStateWhereInput[]
    gameStateId?: StringFilter<"NPCState"> | string
    npcTemplateId?: StringFilter<"NPCState"> | string
    currentLocation?: StringNullableFilter<"NPCState"> | string | null
    relationshipWithPlayer?: IntFilter<"NPCState"> | number
    dialogueHistory?: JsonFilter<"NPCState">
    instanceProperties?: JsonFilter<"NPCState">
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
    npcTemplate?: XOR<NPCTemplateScalarRelationFilter, NPCTemplateWhereInput>
  }, "id" | "gameStateId_npcTemplateId">

  export type NPCStateOrderByWithAggregationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    npcTemplateId?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    relationshipWithPlayer?: SortOrder
    dialogueHistory?: SortOrder
    instanceProperties?: SortOrder
    _count?: NPCStateCountOrderByAggregateInput
    _avg?: NPCStateAvgOrderByAggregateInput
    _max?: NPCStateMaxOrderByAggregateInput
    _min?: NPCStateMinOrderByAggregateInput
    _sum?: NPCStateSumOrderByAggregateInput
  }

  export type NPCStateScalarWhereWithAggregatesInput = {
    AND?: NPCStateScalarWhereWithAggregatesInput | NPCStateScalarWhereWithAggregatesInput[]
    OR?: NPCStateScalarWhereWithAggregatesInput[]
    NOT?: NPCStateScalarWhereWithAggregatesInput | NPCStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NPCState"> | string
    gameStateId?: StringWithAggregatesFilter<"NPCState"> | string
    npcTemplateId?: StringWithAggregatesFilter<"NPCState"> | string
    currentLocation?: StringNullableWithAggregatesFilter<"NPCState"> | string | null
    relationshipWithPlayer?: IntWithAggregatesFilter<"NPCState"> | number
    dialogueHistory?: JsonWithAggregatesFilter<"NPCState">
    instanceProperties?: JsonWithAggregatesFilter<"NPCState">
  }

  export type LoreCategoryWhereInput = {
    AND?: LoreCategoryWhereInput | LoreCategoryWhereInput[]
    OR?: LoreCategoryWhereInput[]
    NOT?: LoreCategoryWhereInput | LoreCategoryWhereInput[]
    id?: StringFilter<"LoreCategory"> | string
    name?: StringFilter<"LoreCategory"> | string
    description?: StringNullableFilter<"LoreCategory"> | string | null
    parentCategoryId?: StringNullableFilter<"LoreCategory"> | string | null
    parentCategory?: XOR<LoreCategoryNullableScalarRelationFilter, LoreCategoryWhereInput> | null
    subcategories?: LoreCategoryListRelationFilter
    worldLore?: WorldLoreListRelationFilter
  }

  export type LoreCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentCategoryId?: SortOrderInput | SortOrder
    parentCategory?: LoreCategoryOrderByWithRelationInput
    subcategories?: LoreCategoryOrderByRelationAggregateInput
    worldLore?: WorldLoreOrderByRelationAggregateInput
  }

  export type LoreCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: LoreCategoryWhereInput | LoreCategoryWhereInput[]
    OR?: LoreCategoryWhereInput[]
    NOT?: LoreCategoryWhereInput | LoreCategoryWhereInput[]
    description?: StringNullableFilter<"LoreCategory"> | string | null
    parentCategoryId?: StringNullableFilter<"LoreCategory"> | string | null
    parentCategory?: XOR<LoreCategoryNullableScalarRelationFilter, LoreCategoryWhereInput> | null
    subcategories?: LoreCategoryListRelationFilter
    worldLore?: WorldLoreListRelationFilter
  }, "id" | "name">

  export type LoreCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    parentCategoryId?: SortOrderInput | SortOrder
    _count?: LoreCategoryCountOrderByAggregateInput
    _max?: LoreCategoryMaxOrderByAggregateInput
    _min?: LoreCategoryMinOrderByAggregateInput
  }

  export type LoreCategoryScalarWhereWithAggregatesInput = {
    AND?: LoreCategoryScalarWhereWithAggregatesInput | LoreCategoryScalarWhereWithAggregatesInput[]
    OR?: LoreCategoryScalarWhereWithAggregatesInput[]
    NOT?: LoreCategoryScalarWhereWithAggregatesInput | LoreCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoreCategory"> | string
    name?: StringWithAggregatesFilter<"LoreCategory"> | string
    description?: StringNullableWithAggregatesFilter<"LoreCategory"> | string | null
    parentCategoryId?: StringNullableWithAggregatesFilter<"LoreCategory"> | string | null
  }

  export type WorldLoreWhereInput = {
    AND?: WorldLoreWhereInput | WorldLoreWhereInput[]
    OR?: WorldLoreWhereInput[]
    NOT?: WorldLoreWhereInput | WorldLoreWhereInput[]
    id?: StringFilter<"WorldLore"> | string
    categoryId?: StringNullableFilter<"WorldLore"> | string | null
    title?: StringFilter<"WorldLore"> | string
    content?: StringFilter<"WorldLore"> | string
    isDiscoverable?: BoolFilter<"WorldLore"> | boolean
    discoveryConditions?: JsonFilter<"WorldLore">
    keywords?: StringNullableListFilter<"WorldLore">
    category?: XOR<LoreCategoryNullableScalarRelationFilter, LoreCategoryWhereInput> | null
  }

  export type WorldLoreOrderByWithRelationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    isDiscoverable?: SortOrder
    discoveryConditions?: SortOrder
    keywords?: SortOrder
    category?: LoreCategoryOrderByWithRelationInput
  }

  export type WorldLoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldLoreWhereInput | WorldLoreWhereInput[]
    OR?: WorldLoreWhereInput[]
    NOT?: WorldLoreWhereInput | WorldLoreWhereInput[]
    categoryId?: StringNullableFilter<"WorldLore"> | string | null
    title?: StringFilter<"WorldLore"> | string
    content?: StringFilter<"WorldLore"> | string
    isDiscoverable?: BoolFilter<"WorldLore"> | boolean
    discoveryConditions?: JsonFilter<"WorldLore">
    keywords?: StringNullableListFilter<"WorldLore">
    category?: XOR<LoreCategoryNullableScalarRelationFilter, LoreCategoryWhereInput> | null
  }, "id">

  export type WorldLoreOrderByWithAggregationInput = {
    id?: SortOrder
    categoryId?: SortOrderInput | SortOrder
    title?: SortOrder
    content?: SortOrder
    isDiscoverable?: SortOrder
    discoveryConditions?: SortOrder
    keywords?: SortOrder
    _count?: WorldLoreCountOrderByAggregateInput
    _max?: WorldLoreMaxOrderByAggregateInput
    _min?: WorldLoreMinOrderByAggregateInput
  }

  export type WorldLoreScalarWhereWithAggregatesInput = {
    AND?: WorldLoreScalarWhereWithAggregatesInput | WorldLoreScalarWhereWithAggregatesInput[]
    OR?: WorldLoreScalarWhereWithAggregatesInput[]
    NOT?: WorldLoreScalarWhereWithAggregatesInput | WorldLoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorldLore"> | string
    categoryId?: StringNullableWithAggregatesFilter<"WorldLore"> | string | null
    title?: StringWithAggregatesFilter<"WorldLore"> | string
    content?: StringWithAggregatesFilter<"WorldLore"> | string
    isDiscoverable?: BoolWithAggregatesFilter<"WorldLore"> | boolean
    discoveryConditions?: JsonWithAggregatesFilter<"WorldLore">
    keywords?: StringNullableListFilter<"WorldLore">
  }

  export type DecisionWhereInput = {
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    id?: StringFilter<"Decision"> | string
    gameStateId?: StringFilter<"Decision"> | string
    decisionPointId?: StringFilter<"Decision"> | string
    decisionContext?: StringNullableFilter<"Decision"> | string | null
    optionsPresented?: JsonFilter<"Decision">
    playerChoice?: IntFilter<"Decision"> | number
    timestamp?: DateTimeFilter<"Decision"> | Date | string
    location?: StringNullableFilter<"Decision"> | string | null
    relatedNpcIds?: StringNullableListFilter<"Decision">
    consequences?: JsonFilter<"Decision">
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
  }

  export type DecisionOrderByWithRelationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    decisionPointId?: SortOrder
    decisionContext?: SortOrderInput | SortOrder
    optionsPresented?: SortOrder
    playerChoice?: SortOrder
    timestamp?: SortOrder
    location?: SortOrderInput | SortOrder
    relatedNpcIds?: SortOrder
    consequences?: SortOrder
    gameState?: GameStateOrderByWithRelationInput
  }

  export type DecisionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DecisionWhereInput | DecisionWhereInput[]
    OR?: DecisionWhereInput[]
    NOT?: DecisionWhereInput | DecisionWhereInput[]
    gameStateId?: StringFilter<"Decision"> | string
    decisionPointId?: StringFilter<"Decision"> | string
    decisionContext?: StringNullableFilter<"Decision"> | string | null
    optionsPresented?: JsonFilter<"Decision">
    playerChoice?: IntFilter<"Decision"> | number
    timestamp?: DateTimeFilter<"Decision"> | Date | string
    location?: StringNullableFilter<"Decision"> | string | null
    relatedNpcIds?: StringNullableListFilter<"Decision">
    consequences?: JsonFilter<"Decision">
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
  }, "id">

  export type DecisionOrderByWithAggregationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    decisionPointId?: SortOrder
    decisionContext?: SortOrderInput | SortOrder
    optionsPresented?: SortOrder
    playerChoice?: SortOrder
    timestamp?: SortOrder
    location?: SortOrderInput | SortOrder
    relatedNpcIds?: SortOrder
    consequences?: SortOrder
    _count?: DecisionCountOrderByAggregateInput
    _avg?: DecisionAvgOrderByAggregateInput
    _max?: DecisionMaxOrderByAggregateInput
    _min?: DecisionMinOrderByAggregateInput
    _sum?: DecisionSumOrderByAggregateInput
  }

  export type DecisionScalarWhereWithAggregatesInput = {
    AND?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    OR?: DecisionScalarWhereWithAggregatesInput[]
    NOT?: DecisionScalarWhereWithAggregatesInput | DecisionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Decision"> | string
    gameStateId?: StringWithAggregatesFilter<"Decision"> | string
    decisionPointId?: StringWithAggregatesFilter<"Decision"> | string
    decisionContext?: StringNullableWithAggregatesFilter<"Decision"> | string | null
    optionsPresented?: JsonWithAggregatesFilter<"Decision">
    playerChoice?: IntWithAggregatesFilter<"Decision"> | number
    timestamp?: DateTimeWithAggregatesFilter<"Decision"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Decision"> | string | null
    relatedNpcIds?: StringNullableListFilter<"Decision">
    consequences?: JsonWithAggregatesFilter<"Decision">
  }

  export type AIContextHistoryWhereInput = {
    AND?: AIContextHistoryWhereInput | AIContextHistoryWhereInput[]
    OR?: AIContextHistoryWhereInput[]
    NOT?: AIContextHistoryWhereInput | AIContextHistoryWhereInput[]
    id?: StringFilter<"AIContextHistory"> | string
    gameStateId?: StringFilter<"AIContextHistory"> | string
    contextType?: StringFilter<"AIContextHistory"> | string
    promptTokens?: IntFilter<"AIContextHistory"> | number
    completionTokens?: IntFilter<"AIContextHistory"> | number
    promptText?: StringNullableFilter<"AIContextHistory"> | string | null
    completionText?: StringNullableFilter<"AIContextHistory"> | string | null
    timestamp?: DateTimeFilter<"AIContextHistory"> | Date | string
    relevanceScore?: FloatNullableFilter<"AIContextHistory"> | number | null
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
  }

  export type AIContextHistoryOrderByWithRelationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    contextType?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    promptText?: SortOrderInput | SortOrder
    completionText?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    relevanceScore?: SortOrderInput | SortOrder
    gameState?: GameStateOrderByWithRelationInput
  }

  export type AIContextHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIContextHistoryWhereInput | AIContextHistoryWhereInput[]
    OR?: AIContextHistoryWhereInput[]
    NOT?: AIContextHistoryWhereInput | AIContextHistoryWhereInput[]
    gameStateId?: StringFilter<"AIContextHistory"> | string
    contextType?: StringFilter<"AIContextHistory"> | string
    promptTokens?: IntFilter<"AIContextHistory"> | number
    completionTokens?: IntFilter<"AIContextHistory"> | number
    promptText?: StringNullableFilter<"AIContextHistory"> | string | null
    completionText?: StringNullableFilter<"AIContextHistory"> | string | null
    timestamp?: DateTimeFilter<"AIContextHistory"> | Date | string
    relevanceScore?: FloatNullableFilter<"AIContextHistory"> | number | null
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
  }, "id">

  export type AIContextHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    contextType?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    promptText?: SortOrderInput | SortOrder
    completionText?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    relevanceScore?: SortOrderInput | SortOrder
    _count?: AIContextHistoryCountOrderByAggregateInput
    _avg?: AIContextHistoryAvgOrderByAggregateInput
    _max?: AIContextHistoryMaxOrderByAggregateInput
    _min?: AIContextHistoryMinOrderByAggregateInput
    _sum?: AIContextHistorySumOrderByAggregateInput
  }

  export type AIContextHistoryScalarWhereWithAggregatesInput = {
    AND?: AIContextHistoryScalarWhereWithAggregatesInput | AIContextHistoryScalarWhereWithAggregatesInput[]
    OR?: AIContextHistoryScalarWhereWithAggregatesInput[]
    NOT?: AIContextHistoryScalarWhereWithAggregatesInput | AIContextHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIContextHistory"> | string
    gameStateId?: StringWithAggregatesFilter<"AIContextHistory"> | string
    contextType?: StringWithAggregatesFilter<"AIContextHistory"> | string
    promptTokens?: IntWithAggregatesFilter<"AIContextHistory"> | number
    completionTokens?: IntWithAggregatesFilter<"AIContextHistory"> | number
    promptText?: StringNullableWithAggregatesFilter<"AIContextHistory"> | string | null
    completionText?: StringNullableWithAggregatesFilter<"AIContextHistory"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"AIContextHistory"> | Date | string
    relevanceScore?: FloatNullableWithAggregatesFilter<"AIContextHistory"> | number | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    characters?: CharacterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    characters?: CharacterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    characters?: CharacterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    characters?: CharacterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type CharacterCreateInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutCharactersInput
    gameSessions?: GameSessionCreateNestedManyWithoutCharacterInput
    gameStates?: GameStateCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCharacterInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    gameSessions?: GameSessionUpdateManyWithoutCharacterNestedInput
    gameStates?: GameStateUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCharacterNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterCreateManyInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
  }

  export type CharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CharacterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionCreateInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    character: CharacterCreateNestedOneWithoutGameSessionsInput
    gameStates?: GameStateCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUncheckedCreateInput = {
    id?: string
    characterId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    gameStates?: GameStateUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    character?: CharacterUpdateOneRequiredWithoutGameSessionsNestedInput
    gameStates?: GameStateUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    gameStates?: GameStateUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionCreateManyInput = {
    id?: string
    characterId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type GameSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type GameSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateInput = {
    id?: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    session: GameSessionCreateNestedOneWithoutGameStatesInput
    character: CharacterCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateInput = {
    id?: string
    sessionId: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    npcStates?: NPCStateUncheckedCreateNestedManyWithoutGameStateInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    session?: GameSessionUpdateOneRequiredWithoutGameStatesNestedInput
    character?: CharacterUpdateOneRequiredWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUncheckedUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateCreateManyInput = {
    id?: string
    sessionId: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
  }

  export type GameStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NPCTemplateCreateInput = {
    id?: string
    code: string
    name: string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: string | null
    isUnique?: boolean
    npcStates?: NPCStateCreateNestedManyWithoutNpcTemplateInput
  }

  export type NPCTemplateUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: string | null
    isUnique?: boolean
    npcStates?: NPCStateUncheckedCreateNestedManyWithoutNpcTemplateInput
  }

  export type NPCTemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUpdateManyWithoutNpcTemplateNestedInput
  }

  export type NPCTemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isUnique?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUncheckedUpdateManyWithoutNpcTemplateNestedInput
  }

  export type NPCTemplateCreateManyInput = {
    id?: string
    code: string
    name: string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: string | null
    isUnique?: boolean
  }

  export type NPCTemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isUnique?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NPCTemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isUnique?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NPCStateCreateInput = {
    id?: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
    gameState: GameStateCreateNestedOneWithoutNpcStatesInput
    npcTemplate: NPCTemplateCreateNestedOneWithoutNpcStatesInput
  }

  export type NPCStateUncheckedCreateInput = {
    id?: string
    gameStateId: string
    npcTemplateId: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
    gameState?: GameStateUpdateOneRequiredWithoutNpcStatesNestedInput
    npcTemplate?: NPCTemplateUpdateOneRequiredWithoutNpcStatesNestedInput
  }

  export type NPCStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    npcTemplateId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateCreateManyInput = {
    id?: string
    gameStateId: string
    npcTemplateId: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    npcTemplateId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type LoreCategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    parentCategory?: LoreCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: LoreCategoryCreateNestedManyWithoutParentCategoryInput
    worldLore?: WorldLoreCreateNestedManyWithoutCategoryInput
  }

  export type LoreCategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    parentCategoryId?: string | null
    subcategories?: LoreCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    worldLore?: WorldLoreUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type LoreCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategory?: LoreCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: LoreCategoryUpdateManyWithoutParentCategoryNestedInput
    worldLore?: WorldLoreUpdateManyWithoutCategoryNestedInput
  }

  export type LoreCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: LoreCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    worldLore?: WorldLoreUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type LoreCategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    parentCategoryId?: string | null
  }

  export type LoreCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoreCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldLoreCreateInput = {
    id?: string
    title: string
    content: string
    isDiscoverable?: boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreCreatekeywordsInput | string[]
    category?: LoreCategoryCreateNestedOneWithoutWorldLoreInput
  }

  export type WorldLoreUncheckedCreateInput = {
    id?: string
    categoryId?: string | null
    title: string
    content: string
    isDiscoverable?: boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreCreatekeywordsInput | string[]
  }

  export type WorldLoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
    category?: LoreCategoryUpdateOneWithoutWorldLoreNestedInput
  }

  export type WorldLoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
  }

  export type WorldLoreCreateManyInput = {
    id?: string
    categoryId?: string | null
    title: string
    content: string
    isDiscoverable?: boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreCreatekeywordsInput | string[]
  }

  export type WorldLoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
  }

  export type WorldLoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
  }

  export type DecisionCreateInput = {
    id?: string
    decisionPointId: string
    decisionContext?: string | null
    optionsPresented: JsonNullValueInput | InputJsonValue
    playerChoice: number
    timestamp?: Date | string
    location?: string | null
    relatedNpcIds?: DecisionCreaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
    gameState: GameStateCreateNestedOneWithoutDecisionsInput
  }

  export type DecisionUncheckedCreateInput = {
    id?: string
    gameStateId: string
    decisionPointId: string
    decisionContext?: string | null
    optionsPresented: JsonNullValueInput | InputJsonValue
    playerChoice: number
    timestamp?: Date | string
    location?: string | null
    relatedNpcIds?: DecisionCreaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
    gameState?: GameStateUpdateOneRequiredWithoutDecisionsNestedInput
  }

  export type DecisionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionCreateManyInput = {
    id?: string
    gameStateId: string
    decisionPointId: string
    decisionContext?: string | null
    optionsPresented: JsonNullValueInput | InputJsonValue
    playerChoice: number
    timestamp?: Date | string
    location?: string | null
    relatedNpcIds?: DecisionCreaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type AIContextHistoryCreateInput = {
    id?: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText?: string | null
    completionText?: string | null
    timestamp?: Date | string
    relevanceScore?: number | null
    gameState: GameStateCreateNestedOneWithoutAiContextHistoryInput
  }

  export type AIContextHistoryUncheckedCreateInput = {
    id?: string
    gameStateId: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText?: string | null
    completionText?: string | null
    timestamp?: Date | string
    relevanceScore?: number | null
  }

  export type AIContextHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
    gameState?: GameStateUpdateOneRequiredWithoutAiContextHistoryNestedInput
  }

  export type AIContextHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AIContextHistoryCreateManyInput = {
    id?: string
    gameStateId: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText?: string | null
    completionText?: string | null
    timestamp?: Date | string
    relevanceScore?: number | null
  }

  export type AIContextHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AIContextHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type CharacterListRelationFilter = {
    every?: CharacterWhereInput
    some?: CharacterWhereInput
    none?: CharacterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    preferences?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type GameSessionListRelationFilter = {
    every?: GameSessionWhereInput
    some?: GameSessionWhereInput
    none?: GameSessionWhereInput
  }

  export type GameStateListRelationFilter = {
    every?: GameStateWhereInput
    some?: GameStateWhereInput
    none?: GameStateWhereInput
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type CharacterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrder
    appearanceDescription?: SortOrder
    personalityTraits?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrder
    isActive?: SortOrder
  }

  export type CharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrder
    appearanceDescription?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrder
    isActive?: SortOrder
  }

  export type CharacterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrder
    appearanceDescription?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrder
    isActive?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type GameSessionCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
    sessionData?: SortOrder
  }

  export type GameSessionAvgOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type GameSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type GameSessionMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    startedAt?: SortOrder
    endedAt?: SortOrder
    durationSeconds?: SortOrder
  }

  export type GameSessionSumOrderByAggregateInput = {
    durationSeconds?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GameSessionScalarRelationFilter = {
    is?: GameSessionWhereInput
    isNot?: GameSessionWhereInput
  }

  export type NPCStateListRelationFilter = {
    every?: NPCStateWhereInput
    some?: NPCStateWhereInput
    none?: NPCStateWhereInput
  }

  export type DecisionListRelationFilter = {
    every?: DecisionWhereInput
    some?: DecisionWhereInput
    none?: DecisionWhereInput
  }

  export type AIContextHistoryListRelationFilter = {
    every?: AIContextHistoryWhereInput
    some?: AIContextHistoryWhereInput
    none?: AIContextHistoryWhereInput
  }

  export type NPCStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DecisionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIContextHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameStateCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    savePointName?: SortOrder
    currentLocation?: SortOrder
    saveTimestamp?: SortOrder
    narrativeContext?: SortOrder
    aiContext?: SortOrder
    characterState?: SortOrder
    worldState?: SortOrder
    isAutosave?: SortOrder
    isCompleted?: SortOrder
  }

  export type GameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    savePointName?: SortOrder
    currentLocation?: SortOrder
    saveTimestamp?: SortOrder
    narrativeContext?: SortOrder
    isAutosave?: SortOrder
    isCompleted?: SortOrder
  }

  export type GameStateMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    savePointName?: SortOrder
    currentLocation?: SortOrder
    saveTimestamp?: SortOrder
    narrativeContext?: SortOrder
    isAutosave?: SortOrder
    isCompleted?: SortOrder
  }

  export type NPCTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    personalityTraits?: SortOrder
    defaultDialogue?: SortOrder
    appearanceDescription?: SortOrder
    isUnique?: SortOrder
  }

  export type NPCTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    appearanceDescription?: SortOrder
    isUnique?: SortOrder
  }

  export type NPCTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    appearanceDescription?: SortOrder
    isUnique?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type GameStateScalarRelationFilter = {
    is?: GameStateWhereInput
    isNot?: GameStateWhereInput
  }

  export type NPCTemplateScalarRelationFilter = {
    is?: NPCTemplateWhereInput
    isNot?: NPCTemplateWhereInput
  }

  export type NPCStateGameStateIdNpcTemplateIdCompoundUniqueInput = {
    gameStateId: string
    npcTemplateId: string
  }

  export type NPCStateCountOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    npcTemplateId?: SortOrder
    currentLocation?: SortOrder
    relationshipWithPlayer?: SortOrder
    dialogueHistory?: SortOrder
    instanceProperties?: SortOrder
  }

  export type NPCStateAvgOrderByAggregateInput = {
    relationshipWithPlayer?: SortOrder
  }

  export type NPCStateMaxOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    npcTemplateId?: SortOrder
    currentLocation?: SortOrder
    relationshipWithPlayer?: SortOrder
  }

  export type NPCStateMinOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    npcTemplateId?: SortOrder
    currentLocation?: SortOrder
    relationshipWithPlayer?: SortOrder
  }

  export type NPCStateSumOrderByAggregateInput = {
    relationshipWithPlayer?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type LoreCategoryNullableScalarRelationFilter = {
    is?: LoreCategoryWhereInput | null
    isNot?: LoreCategoryWhereInput | null
  }

  export type LoreCategoryListRelationFilter = {
    every?: LoreCategoryWhereInput
    some?: LoreCategoryWhereInput
    none?: LoreCategoryWhereInput
  }

  export type WorldLoreListRelationFilter = {
    every?: WorldLoreWhereInput
    some?: WorldLoreWhereInput
    none?: WorldLoreWhereInput
  }

  export type LoreCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldLoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoreCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentCategoryId?: SortOrder
  }

  export type LoreCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentCategoryId?: SortOrder
  }

  export type LoreCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    parentCategoryId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type WorldLoreCountOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isDiscoverable?: SortOrder
    discoveryConditions?: SortOrder
    keywords?: SortOrder
  }

  export type WorldLoreMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isDiscoverable?: SortOrder
  }

  export type WorldLoreMinOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    isDiscoverable?: SortOrder
  }

  export type DecisionCountOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    decisionPointId?: SortOrder
    decisionContext?: SortOrder
    optionsPresented?: SortOrder
    playerChoice?: SortOrder
    timestamp?: SortOrder
    location?: SortOrder
    relatedNpcIds?: SortOrder
    consequences?: SortOrder
  }

  export type DecisionAvgOrderByAggregateInput = {
    playerChoice?: SortOrder
  }

  export type DecisionMaxOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    decisionPointId?: SortOrder
    decisionContext?: SortOrder
    playerChoice?: SortOrder
    timestamp?: SortOrder
    location?: SortOrder
  }

  export type DecisionMinOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    decisionPointId?: SortOrder
    decisionContext?: SortOrder
    playerChoice?: SortOrder
    timestamp?: SortOrder
    location?: SortOrder
  }

  export type DecisionSumOrderByAggregateInput = {
    playerChoice?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AIContextHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    contextType?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    promptText?: SortOrder
    completionText?: SortOrder
    timestamp?: SortOrder
    relevanceScore?: SortOrder
  }

  export type AIContextHistoryAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    relevanceScore?: SortOrder
  }

  export type AIContextHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    contextType?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    promptText?: SortOrder
    completionText?: SortOrder
    timestamp?: SortOrder
    relevanceScore?: SortOrder
  }

  export type AIContextHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    contextType?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    promptText?: SortOrder
    completionText?: SortOrder
    timestamp?: SortOrder
    relevanceScore?: SortOrder
  }

  export type AIContextHistorySumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    relevanceScore?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CharacterCreateNestedManyWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type CharacterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CharacterUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutUserInput | CharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutUserInput | CharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutUserInput | CharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type CharacterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput> | CharacterCreateWithoutUserInput[] | CharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CharacterCreateOrConnectWithoutUserInput | CharacterCreateOrConnectWithoutUserInput[]
    upsert?: CharacterUpsertWithWhereUniqueWithoutUserInput | CharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CharacterCreateManyUserInputEnvelope
    set?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    disconnect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    delete?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    connect?: CharacterWhereUniqueInput | CharacterWhereUniqueInput[]
    update?: CharacterUpdateWithWhereUniqueWithoutUserInput | CharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CharacterUpdateManyWithWhereWithoutUserInput | CharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCharactersInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    connect?: UserWhereUniqueInput
  }

  export type GameSessionCreateNestedManyWithoutCharacterInput = {
    create?: XOR<GameSessionCreateWithoutCharacterInput, GameSessionUncheckedCreateWithoutCharacterInput> | GameSessionCreateWithoutCharacterInput[] | GameSessionUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCharacterInput | GameSessionCreateOrConnectWithoutCharacterInput[]
    createMany?: GameSessionCreateManyCharacterInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameStateCreateNestedManyWithoutCharacterInput = {
    create?: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput> | GameStateCreateWithoutCharacterInput[] | GameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCharacterInput | GameStateCreateOrConnectWithoutCharacterInput[]
    createMany?: GameStateCreateManyCharacterInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameSessionUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<GameSessionCreateWithoutCharacterInput, GameSessionUncheckedCreateWithoutCharacterInput> | GameSessionCreateWithoutCharacterInput[] | GameSessionUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCharacterInput | GameSessionCreateOrConnectWithoutCharacterInput[]
    createMany?: GameSessionCreateManyCharacterInputEnvelope
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput> | GameStateCreateWithoutCharacterInput[] | GameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCharacterInput | GameStateCreateOrConnectWithoutCharacterInput[]
    createMany?: GameStateCreateManyCharacterInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutCharactersNestedInput = {
    create?: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCharactersInput
    upsert?: UserUpsertWithoutCharactersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCharactersInput, UserUpdateWithoutCharactersInput>, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type GameSessionUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<GameSessionCreateWithoutCharacterInput, GameSessionUncheckedCreateWithoutCharacterInput> | GameSessionCreateWithoutCharacterInput[] | GameSessionUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCharacterInput | GameSessionCreateOrConnectWithoutCharacterInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutCharacterInput | GameSessionUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: GameSessionCreateManyCharacterInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutCharacterInput | GameSessionUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutCharacterInput | GameSessionUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameStateUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput> | GameStateCreateWithoutCharacterInput[] | GameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCharacterInput | GameStateCreateOrConnectWithoutCharacterInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutCharacterInput | GameStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: GameStateCreateManyCharacterInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutCharacterInput | GameStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutCharacterInput | GameStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameSessionUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<GameSessionCreateWithoutCharacterInput, GameSessionUncheckedCreateWithoutCharacterInput> | GameSessionCreateWithoutCharacterInput[] | GameSessionUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameSessionCreateOrConnectWithoutCharacterInput | GameSessionCreateOrConnectWithoutCharacterInput[]
    upsert?: GameSessionUpsertWithWhereUniqueWithoutCharacterInput | GameSessionUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: GameSessionCreateManyCharacterInputEnvelope
    set?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    disconnect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    delete?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    connect?: GameSessionWhereUniqueInput | GameSessionWhereUniqueInput[]
    update?: GameSessionUpdateWithWhereUniqueWithoutCharacterInput | GameSessionUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: GameSessionUpdateManyWithWhereWithoutCharacterInput | GameSessionUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput> | GameStateCreateWithoutCharacterInput[] | GameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutCharacterInput | GameStateCreateOrConnectWithoutCharacterInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutCharacterInput | GameStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: GameStateCreateManyCharacterInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutCharacterInput | GameStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutCharacterInput | GameStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutGameSessionsInput = {
    create?: XOR<CharacterCreateWithoutGameSessionsInput, CharacterUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutGameSessionsInput
    connect?: CharacterWhereUniqueInput
  }

  export type GameStateCreateNestedManyWithoutSessionInput = {
    create?: XOR<GameStateCreateWithoutSessionInput, GameStateUncheckedCreateWithoutSessionInput> | GameStateCreateWithoutSessionInput[] | GameStateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutSessionInput | GameStateCreateOrConnectWithoutSessionInput[]
    createMany?: GameStateCreateManySessionInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<GameStateCreateWithoutSessionInput, GameStateUncheckedCreateWithoutSessionInput> | GameStateCreateWithoutSessionInput[] | GameStateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutSessionInput | GameStateCreateOrConnectWithoutSessionInput[]
    createMany?: GameStateCreateManySessionInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CharacterUpdateOneRequiredWithoutGameSessionsNestedInput = {
    create?: XOR<CharacterCreateWithoutGameSessionsInput, CharacterUncheckedCreateWithoutGameSessionsInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutGameSessionsInput
    upsert?: CharacterUpsertWithoutGameSessionsInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutGameSessionsInput, CharacterUpdateWithoutGameSessionsInput>, CharacterUncheckedUpdateWithoutGameSessionsInput>
  }

  export type GameStateUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GameStateCreateWithoutSessionInput, GameStateUncheckedCreateWithoutSessionInput> | GameStateCreateWithoutSessionInput[] | GameStateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutSessionInput | GameStateCreateOrConnectWithoutSessionInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutSessionInput | GameStateUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GameStateCreateManySessionInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutSessionInput | GameStateUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutSessionInput | GameStateUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<GameStateCreateWithoutSessionInput, GameStateUncheckedCreateWithoutSessionInput> | GameStateCreateWithoutSessionInput[] | GameStateUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutSessionInput | GameStateCreateOrConnectWithoutSessionInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutSessionInput | GameStateUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: GameStateCreateManySessionInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutSessionInput | GameStateUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutSessionInput | GameStateUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type GameSessionCreateNestedOneWithoutGameStatesInput = {
    create?: XOR<GameSessionCreateWithoutGameStatesInput, GameSessionUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutGameStatesInput
    connect?: GameSessionWhereUniqueInput
  }

  export type CharacterCreateNestedOneWithoutGameStatesInput = {
    create?: XOR<CharacterCreateWithoutGameStatesInput, CharacterUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutGameStatesInput
    connect?: CharacterWhereUniqueInput
  }

  export type NPCStateCreateNestedManyWithoutGameStateInput = {
    create?: XOR<NPCStateCreateWithoutGameStateInput, NPCStateUncheckedCreateWithoutGameStateInput> | NPCStateCreateWithoutGameStateInput[] | NPCStateUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutGameStateInput | NPCStateCreateOrConnectWithoutGameStateInput[]
    createMany?: NPCStateCreateManyGameStateInputEnvelope
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
  }

  export type DecisionCreateNestedManyWithoutGameStateInput = {
    create?: XOR<DecisionCreateWithoutGameStateInput, DecisionUncheckedCreateWithoutGameStateInput> | DecisionCreateWithoutGameStateInput[] | DecisionUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutGameStateInput | DecisionCreateOrConnectWithoutGameStateInput[]
    createMany?: DecisionCreateManyGameStateInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type AIContextHistoryCreateNestedManyWithoutGameStateInput = {
    create?: XOR<AIContextHistoryCreateWithoutGameStateInput, AIContextHistoryUncheckedCreateWithoutGameStateInput> | AIContextHistoryCreateWithoutGameStateInput[] | AIContextHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: AIContextHistoryCreateOrConnectWithoutGameStateInput | AIContextHistoryCreateOrConnectWithoutGameStateInput[]
    createMany?: AIContextHistoryCreateManyGameStateInputEnvelope
    connect?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
  }

  export type NPCStateUncheckedCreateNestedManyWithoutGameStateInput = {
    create?: XOR<NPCStateCreateWithoutGameStateInput, NPCStateUncheckedCreateWithoutGameStateInput> | NPCStateCreateWithoutGameStateInput[] | NPCStateUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutGameStateInput | NPCStateCreateOrConnectWithoutGameStateInput[]
    createMany?: NPCStateCreateManyGameStateInputEnvelope
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
  }

  export type DecisionUncheckedCreateNestedManyWithoutGameStateInput = {
    create?: XOR<DecisionCreateWithoutGameStateInput, DecisionUncheckedCreateWithoutGameStateInput> | DecisionCreateWithoutGameStateInput[] | DecisionUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutGameStateInput | DecisionCreateOrConnectWithoutGameStateInput[]
    createMany?: DecisionCreateManyGameStateInputEnvelope
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
  }

  export type AIContextHistoryUncheckedCreateNestedManyWithoutGameStateInput = {
    create?: XOR<AIContextHistoryCreateWithoutGameStateInput, AIContextHistoryUncheckedCreateWithoutGameStateInput> | AIContextHistoryCreateWithoutGameStateInput[] | AIContextHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: AIContextHistoryCreateOrConnectWithoutGameStateInput | AIContextHistoryCreateOrConnectWithoutGameStateInput[]
    createMany?: AIContextHistoryCreateManyGameStateInputEnvelope
    connect?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
  }

  export type GameSessionUpdateOneRequiredWithoutGameStatesNestedInput = {
    create?: XOR<GameSessionCreateWithoutGameStatesInput, GameSessionUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: GameSessionCreateOrConnectWithoutGameStatesInput
    upsert?: GameSessionUpsertWithoutGameStatesInput
    connect?: GameSessionWhereUniqueInput
    update?: XOR<XOR<GameSessionUpdateToOneWithWhereWithoutGameStatesInput, GameSessionUpdateWithoutGameStatesInput>, GameSessionUncheckedUpdateWithoutGameStatesInput>
  }

  export type CharacterUpdateOneRequiredWithoutGameStatesNestedInput = {
    create?: XOR<CharacterCreateWithoutGameStatesInput, CharacterUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutGameStatesInput
    upsert?: CharacterUpsertWithoutGameStatesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutGameStatesInput, CharacterUpdateWithoutGameStatesInput>, CharacterUncheckedUpdateWithoutGameStatesInput>
  }

  export type NPCStateUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<NPCStateCreateWithoutGameStateInput, NPCStateUncheckedCreateWithoutGameStateInput> | NPCStateCreateWithoutGameStateInput[] | NPCStateUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutGameStateInput | NPCStateCreateOrConnectWithoutGameStateInput[]
    upsert?: NPCStateUpsertWithWhereUniqueWithoutGameStateInput | NPCStateUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: NPCStateCreateManyGameStateInputEnvelope
    set?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    disconnect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    delete?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    update?: NPCStateUpdateWithWhereUniqueWithoutGameStateInput | NPCStateUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: NPCStateUpdateManyWithWhereWithoutGameStateInput | NPCStateUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: NPCStateScalarWhereInput | NPCStateScalarWhereInput[]
  }

  export type DecisionUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<DecisionCreateWithoutGameStateInput, DecisionUncheckedCreateWithoutGameStateInput> | DecisionCreateWithoutGameStateInput[] | DecisionUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutGameStateInput | DecisionCreateOrConnectWithoutGameStateInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutGameStateInput | DecisionUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: DecisionCreateManyGameStateInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutGameStateInput | DecisionUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutGameStateInput | DecisionUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type AIContextHistoryUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<AIContextHistoryCreateWithoutGameStateInput, AIContextHistoryUncheckedCreateWithoutGameStateInput> | AIContextHistoryCreateWithoutGameStateInput[] | AIContextHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: AIContextHistoryCreateOrConnectWithoutGameStateInput | AIContextHistoryCreateOrConnectWithoutGameStateInput[]
    upsert?: AIContextHistoryUpsertWithWhereUniqueWithoutGameStateInput | AIContextHistoryUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: AIContextHistoryCreateManyGameStateInputEnvelope
    set?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    disconnect?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    delete?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    connect?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    update?: AIContextHistoryUpdateWithWhereUniqueWithoutGameStateInput | AIContextHistoryUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: AIContextHistoryUpdateManyWithWhereWithoutGameStateInput | AIContextHistoryUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: AIContextHistoryScalarWhereInput | AIContextHistoryScalarWhereInput[]
  }

  export type NPCStateUncheckedUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<NPCStateCreateWithoutGameStateInput, NPCStateUncheckedCreateWithoutGameStateInput> | NPCStateCreateWithoutGameStateInput[] | NPCStateUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutGameStateInput | NPCStateCreateOrConnectWithoutGameStateInput[]
    upsert?: NPCStateUpsertWithWhereUniqueWithoutGameStateInput | NPCStateUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: NPCStateCreateManyGameStateInputEnvelope
    set?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    disconnect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    delete?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    update?: NPCStateUpdateWithWhereUniqueWithoutGameStateInput | NPCStateUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: NPCStateUpdateManyWithWhereWithoutGameStateInput | NPCStateUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: NPCStateScalarWhereInput | NPCStateScalarWhereInput[]
  }

  export type DecisionUncheckedUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<DecisionCreateWithoutGameStateInput, DecisionUncheckedCreateWithoutGameStateInput> | DecisionCreateWithoutGameStateInput[] | DecisionUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: DecisionCreateOrConnectWithoutGameStateInput | DecisionCreateOrConnectWithoutGameStateInput[]
    upsert?: DecisionUpsertWithWhereUniqueWithoutGameStateInput | DecisionUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: DecisionCreateManyGameStateInputEnvelope
    set?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    disconnect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    delete?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    connect?: DecisionWhereUniqueInput | DecisionWhereUniqueInput[]
    update?: DecisionUpdateWithWhereUniqueWithoutGameStateInput | DecisionUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: DecisionUpdateManyWithWhereWithoutGameStateInput | DecisionUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
  }

  export type AIContextHistoryUncheckedUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<AIContextHistoryCreateWithoutGameStateInput, AIContextHistoryUncheckedCreateWithoutGameStateInput> | AIContextHistoryCreateWithoutGameStateInput[] | AIContextHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: AIContextHistoryCreateOrConnectWithoutGameStateInput | AIContextHistoryCreateOrConnectWithoutGameStateInput[]
    upsert?: AIContextHistoryUpsertWithWhereUniqueWithoutGameStateInput | AIContextHistoryUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: AIContextHistoryCreateManyGameStateInputEnvelope
    set?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    disconnect?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    delete?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    connect?: AIContextHistoryWhereUniqueInput | AIContextHistoryWhereUniqueInput[]
    update?: AIContextHistoryUpdateWithWhereUniqueWithoutGameStateInput | AIContextHistoryUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: AIContextHistoryUpdateManyWithWhereWithoutGameStateInput | AIContextHistoryUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: AIContextHistoryScalarWhereInput | AIContextHistoryScalarWhereInput[]
  }

  export type NPCStateCreateNestedManyWithoutNpcTemplateInput = {
    create?: XOR<NPCStateCreateWithoutNpcTemplateInput, NPCStateUncheckedCreateWithoutNpcTemplateInput> | NPCStateCreateWithoutNpcTemplateInput[] | NPCStateUncheckedCreateWithoutNpcTemplateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutNpcTemplateInput | NPCStateCreateOrConnectWithoutNpcTemplateInput[]
    createMany?: NPCStateCreateManyNpcTemplateInputEnvelope
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
  }

  export type NPCStateUncheckedCreateNestedManyWithoutNpcTemplateInput = {
    create?: XOR<NPCStateCreateWithoutNpcTemplateInput, NPCStateUncheckedCreateWithoutNpcTemplateInput> | NPCStateCreateWithoutNpcTemplateInput[] | NPCStateUncheckedCreateWithoutNpcTemplateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutNpcTemplateInput | NPCStateCreateOrConnectWithoutNpcTemplateInput[]
    createMany?: NPCStateCreateManyNpcTemplateInputEnvelope
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
  }

  export type NPCStateUpdateManyWithoutNpcTemplateNestedInput = {
    create?: XOR<NPCStateCreateWithoutNpcTemplateInput, NPCStateUncheckedCreateWithoutNpcTemplateInput> | NPCStateCreateWithoutNpcTemplateInput[] | NPCStateUncheckedCreateWithoutNpcTemplateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutNpcTemplateInput | NPCStateCreateOrConnectWithoutNpcTemplateInput[]
    upsert?: NPCStateUpsertWithWhereUniqueWithoutNpcTemplateInput | NPCStateUpsertWithWhereUniqueWithoutNpcTemplateInput[]
    createMany?: NPCStateCreateManyNpcTemplateInputEnvelope
    set?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    disconnect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    delete?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    update?: NPCStateUpdateWithWhereUniqueWithoutNpcTemplateInput | NPCStateUpdateWithWhereUniqueWithoutNpcTemplateInput[]
    updateMany?: NPCStateUpdateManyWithWhereWithoutNpcTemplateInput | NPCStateUpdateManyWithWhereWithoutNpcTemplateInput[]
    deleteMany?: NPCStateScalarWhereInput | NPCStateScalarWhereInput[]
  }

  export type NPCStateUncheckedUpdateManyWithoutNpcTemplateNestedInput = {
    create?: XOR<NPCStateCreateWithoutNpcTemplateInput, NPCStateUncheckedCreateWithoutNpcTemplateInput> | NPCStateCreateWithoutNpcTemplateInput[] | NPCStateUncheckedCreateWithoutNpcTemplateInput[]
    connectOrCreate?: NPCStateCreateOrConnectWithoutNpcTemplateInput | NPCStateCreateOrConnectWithoutNpcTemplateInput[]
    upsert?: NPCStateUpsertWithWhereUniqueWithoutNpcTemplateInput | NPCStateUpsertWithWhereUniqueWithoutNpcTemplateInput[]
    createMany?: NPCStateCreateManyNpcTemplateInputEnvelope
    set?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    disconnect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    delete?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    connect?: NPCStateWhereUniqueInput | NPCStateWhereUniqueInput[]
    update?: NPCStateUpdateWithWhereUniqueWithoutNpcTemplateInput | NPCStateUpdateWithWhereUniqueWithoutNpcTemplateInput[]
    updateMany?: NPCStateUpdateManyWithWhereWithoutNpcTemplateInput | NPCStateUpdateManyWithWhereWithoutNpcTemplateInput[]
    deleteMany?: NPCStateScalarWhereInput | NPCStateScalarWhereInput[]
  }

  export type GameStateCreateNestedOneWithoutNpcStatesInput = {
    create?: XOR<GameStateCreateWithoutNpcStatesInput, GameStateUncheckedCreateWithoutNpcStatesInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutNpcStatesInput
    connect?: GameStateWhereUniqueInput
  }

  export type NPCTemplateCreateNestedOneWithoutNpcStatesInput = {
    create?: XOR<NPCTemplateCreateWithoutNpcStatesInput, NPCTemplateUncheckedCreateWithoutNpcStatesInput>
    connectOrCreate?: NPCTemplateCreateOrConnectWithoutNpcStatesInput
    connect?: NPCTemplateWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameStateUpdateOneRequiredWithoutNpcStatesNestedInput = {
    create?: XOR<GameStateCreateWithoutNpcStatesInput, GameStateUncheckedCreateWithoutNpcStatesInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutNpcStatesInput
    upsert?: GameStateUpsertWithoutNpcStatesInput
    connect?: GameStateWhereUniqueInput
    update?: XOR<XOR<GameStateUpdateToOneWithWhereWithoutNpcStatesInput, GameStateUpdateWithoutNpcStatesInput>, GameStateUncheckedUpdateWithoutNpcStatesInput>
  }

  export type NPCTemplateUpdateOneRequiredWithoutNpcStatesNestedInput = {
    create?: XOR<NPCTemplateCreateWithoutNpcStatesInput, NPCTemplateUncheckedCreateWithoutNpcStatesInput>
    connectOrCreate?: NPCTemplateCreateOrConnectWithoutNpcStatesInput
    upsert?: NPCTemplateUpsertWithoutNpcStatesInput
    connect?: NPCTemplateWhereUniqueInput
    update?: XOR<XOR<NPCTemplateUpdateToOneWithWhereWithoutNpcStatesInput, NPCTemplateUpdateWithoutNpcStatesInput>, NPCTemplateUncheckedUpdateWithoutNpcStatesInput>
  }

  export type LoreCategoryCreateNestedOneWithoutSubcategoriesInput = {
    create?: XOR<LoreCategoryCreateWithoutSubcategoriesInput, LoreCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutSubcategoriesInput
    connect?: LoreCategoryWhereUniqueInput
  }

  export type LoreCategoryCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<LoreCategoryCreateWithoutParentCategoryInput, LoreCategoryUncheckedCreateWithoutParentCategoryInput> | LoreCategoryCreateWithoutParentCategoryInput[] | LoreCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutParentCategoryInput | LoreCategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: LoreCategoryCreateManyParentCategoryInputEnvelope
    connect?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
  }

  export type WorldLoreCreateNestedManyWithoutCategoryInput = {
    create?: XOR<WorldLoreCreateWithoutCategoryInput, WorldLoreUncheckedCreateWithoutCategoryInput> | WorldLoreCreateWithoutCategoryInput[] | WorldLoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WorldLoreCreateOrConnectWithoutCategoryInput | WorldLoreCreateOrConnectWithoutCategoryInput[]
    createMany?: WorldLoreCreateManyCategoryInputEnvelope
    connect?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
  }

  export type LoreCategoryUncheckedCreateNestedManyWithoutParentCategoryInput = {
    create?: XOR<LoreCategoryCreateWithoutParentCategoryInput, LoreCategoryUncheckedCreateWithoutParentCategoryInput> | LoreCategoryCreateWithoutParentCategoryInput[] | LoreCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutParentCategoryInput | LoreCategoryCreateOrConnectWithoutParentCategoryInput[]
    createMany?: LoreCategoryCreateManyParentCategoryInputEnvelope
    connect?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
  }

  export type WorldLoreUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<WorldLoreCreateWithoutCategoryInput, WorldLoreUncheckedCreateWithoutCategoryInput> | WorldLoreCreateWithoutCategoryInput[] | WorldLoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WorldLoreCreateOrConnectWithoutCategoryInput | WorldLoreCreateOrConnectWithoutCategoryInput[]
    createMany?: WorldLoreCreateManyCategoryInputEnvelope
    connect?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
  }

  export type LoreCategoryUpdateOneWithoutSubcategoriesNestedInput = {
    create?: XOR<LoreCategoryCreateWithoutSubcategoriesInput, LoreCategoryUncheckedCreateWithoutSubcategoriesInput>
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutSubcategoriesInput
    upsert?: LoreCategoryUpsertWithoutSubcategoriesInput
    disconnect?: LoreCategoryWhereInput | boolean
    delete?: LoreCategoryWhereInput | boolean
    connect?: LoreCategoryWhereUniqueInput
    update?: XOR<XOR<LoreCategoryUpdateToOneWithWhereWithoutSubcategoriesInput, LoreCategoryUpdateWithoutSubcategoriesInput>, LoreCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type LoreCategoryUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<LoreCategoryCreateWithoutParentCategoryInput, LoreCategoryUncheckedCreateWithoutParentCategoryInput> | LoreCategoryCreateWithoutParentCategoryInput[] | LoreCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutParentCategoryInput | LoreCategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: LoreCategoryUpsertWithWhereUniqueWithoutParentCategoryInput | LoreCategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: LoreCategoryCreateManyParentCategoryInputEnvelope
    set?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    disconnect?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    delete?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    connect?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    update?: LoreCategoryUpdateWithWhereUniqueWithoutParentCategoryInput | LoreCategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: LoreCategoryUpdateManyWithWhereWithoutParentCategoryInput | LoreCategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: LoreCategoryScalarWhereInput | LoreCategoryScalarWhereInput[]
  }

  export type WorldLoreUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<WorldLoreCreateWithoutCategoryInput, WorldLoreUncheckedCreateWithoutCategoryInput> | WorldLoreCreateWithoutCategoryInput[] | WorldLoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WorldLoreCreateOrConnectWithoutCategoryInput | WorldLoreCreateOrConnectWithoutCategoryInput[]
    upsert?: WorldLoreUpsertWithWhereUniqueWithoutCategoryInput | WorldLoreUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: WorldLoreCreateManyCategoryInputEnvelope
    set?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    disconnect?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    delete?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    connect?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    update?: WorldLoreUpdateWithWhereUniqueWithoutCategoryInput | WorldLoreUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: WorldLoreUpdateManyWithWhereWithoutCategoryInput | WorldLoreUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: WorldLoreScalarWhereInput | WorldLoreScalarWhereInput[]
  }

  export type LoreCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput = {
    create?: XOR<LoreCategoryCreateWithoutParentCategoryInput, LoreCategoryUncheckedCreateWithoutParentCategoryInput> | LoreCategoryCreateWithoutParentCategoryInput[] | LoreCategoryUncheckedCreateWithoutParentCategoryInput[]
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutParentCategoryInput | LoreCategoryCreateOrConnectWithoutParentCategoryInput[]
    upsert?: LoreCategoryUpsertWithWhereUniqueWithoutParentCategoryInput | LoreCategoryUpsertWithWhereUniqueWithoutParentCategoryInput[]
    createMany?: LoreCategoryCreateManyParentCategoryInputEnvelope
    set?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    disconnect?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    delete?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    connect?: LoreCategoryWhereUniqueInput | LoreCategoryWhereUniqueInput[]
    update?: LoreCategoryUpdateWithWhereUniqueWithoutParentCategoryInput | LoreCategoryUpdateWithWhereUniqueWithoutParentCategoryInput[]
    updateMany?: LoreCategoryUpdateManyWithWhereWithoutParentCategoryInput | LoreCategoryUpdateManyWithWhereWithoutParentCategoryInput[]
    deleteMany?: LoreCategoryScalarWhereInput | LoreCategoryScalarWhereInput[]
  }

  export type WorldLoreUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<WorldLoreCreateWithoutCategoryInput, WorldLoreUncheckedCreateWithoutCategoryInput> | WorldLoreCreateWithoutCategoryInput[] | WorldLoreUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: WorldLoreCreateOrConnectWithoutCategoryInput | WorldLoreCreateOrConnectWithoutCategoryInput[]
    upsert?: WorldLoreUpsertWithWhereUniqueWithoutCategoryInput | WorldLoreUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: WorldLoreCreateManyCategoryInputEnvelope
    set?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    disconnect?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    delete?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    connect?: WorldLoreWhereUniqueInput | WorldLoreWhereUniqueInput[]
    update?: WorldLoreUpdateWithWhereUniqueWithoutCategoryInput | WorldLoreUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: WorldLoreUpdateManyWithWhereWithoutCategoryInput | WorldLoreUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: WorldLoreScalarWhereInput | WorldLoreScalarWhereInput[]
  }

  export type WorldLoreCreatekeywordsInput = {
    set: string[]
  }

  export type LoreCategoryCreateNestedOneWithoutWorldLoreInput = {
    create?: XOR<LoreCategoryCreateWithoutWorldLoreInput, LoreCategoryUncheckedCreateWithoutWorldLoreInput>
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutWorldLoreInput
    connect?: LoreCategoryWhereUniqueInput
  }

  export type WorldLoreUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type LoreCategoryUpdateOneWithoutWorldLoreNestedInput = {
    create?: XOR<LoreCategoryCreateWithoutWorldLoreInput, LoreCategoryUncheckedCreateWithoutWorldLoreInput>
    connectOrCreate?: LoreCategoryCreateOrConnectWithoutWorldLoreInput
    upsert?: LoreCategoryUpsertWithoutWorldLoreInput
    disconnect?: LoreCategoryWhereInput | boolean
    delete?: LoreCategoryWhereInput | boolean
    connect?: LoreCategoryWhereUniqueInput
    update?: XOR<XOR<LoreCategoryUpdateToOneWithWhereWithoutWorldLoreInput, LoreCategoryUpdateWithoutWorldLoreInput>, LoreCategoryUncheckedUpdateWithoutWorldLoreInput>
  }

  export type DecisionCreaterelatedNpcIdsInput = {
    set: string[]
  }

  export type GameStateCreateNestedOneWithoutDecisionsInput = {
    create?: XOR<GameStateCreateWithoutDecisionsInput, GameStateUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutDecisionsInput
    connect?: GameStateWhereUniqueInput
  }

  export type DecisionUpdaterelatedNpcIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type GameStateUpdateOneRequiredWithoutDecisionsNestedInput = {
    create?: XOR<GameStateCreateWithoutDecisionsInput, GameStateUncheckedCreateWithoutDecisionsInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutDecisionsInput
    upsert?: GameStateUpsertWithoutDecisionsInput
    connect?: GameStateWhereUniqueInput
    update?: XOR<XOR<GameStateUpdateToOneWithWhereWithoutDecisionsInput, GameStateUpdateWithoutDecisionsInput>, GameStateUncheckedUpdateWithoutDecisionsInput>
  }

  export type GameStateCreateNestedOneWithoutAiContextHistoryInput = {
    create?: XOR<GameStateCreateWithoutAiContextHistoryInput, GameStateUncheckedCreateWithoutAiContextHistoryInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutAiContextHistoryInput
    connect?: GameStateWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameStateUpdateOneRequiredWithoutAiContextHistoryNestedInput = {
    create?: XOR<GameStateCreateWithoutAiContextHistoryInput, GameStateUncheckedCreateWithoutAiContextHistoryInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutAiContextHistoryInput
    upsert?: GameStateUpsertWithoutAiContextHistoryInput
    connect?: GameStateWhereUniqueInput
    update?: XOR<XOR<GameStateUpdateToOneWithWhereWithoutAiContextHistoryInput, GameStateUpdateWithoutAiContextHistoryInput>, GameStateUncheckedUpdateWithoutAiContextHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CharacterCreateWithoutUserInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    gameSessions?: GameSessionCreateNestedManyWithoutCharacterInput
    gameStates?: GameStateCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCharacterInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutUserInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterCreateManyUserInputEnvelope = {
    data: CharacterCreateManyUserInput | CharacterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithWhereUniqueWithoutUserInput = {
    where: CharacterWhereUniqueInput
    update: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
    create: XOR<CharacterCreateWithoutUserInput, CharacterUncheckedCreateWithoutUserInput>
  }

  export type CharacterUpdateWithWhereUniqueWithoutUserInput = {
    where: CharacterWhereUniqueInput
    data: XOR<CharacterUpdateWithoutUserInput, CharacterUncheckedUpdateWithoutUserInput>
  }

  export type CharacterUpdateManyWithWhereWithoutUserInput = {
    where: CharacterScalarWhereInput
    data: XOR<CharacterUpdateManyMutationInput, CharacterUncheckedUpdateManyWithoutUserInput>
  }

  export type CharacterScalarWhereInput = {
    AND?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    OR?: CharacterScalarWhereInput[]
    NOT?: CharacterScalarWhereInput | CharacterScalarWhereInput[]
    id?: StringFilter<"Character"> | string
    userId?: StringFilter<"Character"> | string
    name?: StringFilter<"Character"> | string
    backstory?: StringNullableFilter<"Character"> | string | null
    appearanceDescription?: StringNullableFilter<"Character"> | string | null
    personalityTraits?: JsonFilter<"Character">
    createdAt?: DateTimeFilter<"Character"> | Date | string
    lastPlayedAt?: DateTimeNullableFilter<"Character"> | Date | string | null
    isActive?: BoolFilter<"Character"> | boolean
  }

  export type UserCreateWithoutCharactersInput = {
    id?: string
    email: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedCreateWithoutCharactersInput = {
    id?: string
    email: string
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type UserCreateOrConnectWithoutCharactersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
  }

  export type GameSessionCreateWithoutCharacterInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    gameStates?: GameStateCreateNestedManyWithoutSessionInput
  }

  export type GameSessionUncheckedCreateWithoutCharacterInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    gameStates?: GameStateUncheckedCreateNestedManyWithoutSessionInput
  }

  export type GameSessionCreateOrConnectWithoutCharacterInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutCharacterInput, GameSessionUncheckedCreateWithoutCharacterInput>
  }

  export type GameSessionCreateManyCharacterInputEnvelope = {
    data: GameSessionCreateManyCharacterInput | GameSessionCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type GameStateCreateWithoutCharacterInput = {
    id?: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    session: GameSessionCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutCharacterInput = {
    id?: string
    sessionId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    npcStates?: NPCStateUncheckedCreateNestedManyWithoutGameStateInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutCharacterInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput>
  }

  export type GameStateCreateManyCharacterInputEnvelope = {
    data: GameStateCreateManyCharacterInput | GameStateCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCharactersInput = {
    update: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
    create: XOR<UserCreateWithoutCharactersInput, UserUncheckedCreateWithoutCharactersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCharactersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCharactersInput, UserUncheckedUpdateWithoutCharactersInput>
  }

  export type UserUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateWithoutCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
  }

  export type GameSessionUpsertWithWhereUniqueWithoutCharacterInput = {
    where: GameSessionWhereUniqueInput
    update: XOR<GameSessionUpdateWithoutCharacterInput, GameSessionUncheckedUpdateWithoutCharacterInput>
    create: XOR<GameSessionCreateWithoutCharacterInput, GameSessionUncheckedCreateWithoutCharacterInput>
  }

  export type GameSessionUpdateWithWhereUniqueWithoutCharacterInput = {
    where: GameSessionWhereUniqueInput
    data: XOR<GameSessionUpdateWithoutCharacterInput, GameSessionUncheckedUpdateWithoutCharacterInput>
  }

  export type GameSessionUpdateManyWithWhereWithoutCharacterInput = {
    where: GameSessionScalarWhereInput
    data: XOR<GameSessionUpdateManyMutationInput, GameSessionUncheckedUpdateManyWithoutCharacterInput>
  }

  export type GameSessionScalarWhereInput = {
    AND?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    OR?: GameSessionScalarWhereInput[]
    NOT?: GameSessionScalarWhereInput | GameSessionScalarWhereInput[]
    id?: StringFilter<"GameSession"> | string
    characterId?: StringFilter<"GameSession"> | string
    startedAt?: DateTimeFilter<"GameSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"GameSession"> | Date | string | null
    durationSeconds?: IntNullableFilter<"GameSession"> | number | null
    sessionData?: JsonFilter<"GameSession">
  }

  export type GameStateUpsertWithWhereUniqueWithoutCharacterInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutCharacterInput, GameStateUncheckedUpdateWithoutCharacterInput>
    create: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutCharacterInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutCharacterInput, GameStateUncheckedUpdateWithoutCharacterInput>
  }

  export type GameStateUpdateManyWithWhereWithoutCharacterInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutCharacterInput>
  }

  export type GameStateScalarWhereInput = {
    AND?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
    OR?: GameStateScalarWhereInput[]
    NOT?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
    id?: StringFilter<"GameState"> | string
    sessionId?: StringFilter<"GameState"> | string
    characterId?: StringFilter<"GameState"> | string
    savePointName?: StringNullableFilter<"GameState"> | string | null
    currentLocation?: StringFilter<"GameState"> | string
    saveTimestamp?: DateTimeFilter<"GameState"> | Date | string
    narrativeContext?: StringNullableFilter<"GameState"> | string | null
    aiContext?: JsonFilter<"GameState">
    characterState?: JsonFilter<"GameState">
    worldState?: JsonFilter<"GameState">
    isAutosave?: BoolFilter<"GameState"> | boolean
    isCompleted?: BoolFilter<"GameState"> | boolean
  }

  export type CharacterCreateWithoutGameSessionsInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutCharactersInput
    gameStates?: GameStateCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutGameSessionsInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    gameStates?: GameStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutGameSessionsInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutGameSessionsInput, CharacterUncheckedCreateWithoutGameSessionsInput>
  }

  export type GameStateCreateWithoutSessionInput = {
    id?: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    character: CharacterCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutSessionInput = {
    id?: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    npcStates?: NPCStateUncheckedCreateNestedManyWithoutGameStateInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutSessionInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutSessionInput, GameStateUncheckedCreateWithoutSessionInput>
  }

  export type GameStateCreateManySessionInputEnvelope = {
    data: GameStateCreateManySessionInput | GameStateCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type CharacterUpsertWithoutGameSessionsInput = {
    update: XOR<CharacterUpdateWithoutGameSessionsInput, CharacterUncheckedUpdateWithoutGameSessionsInput>
    create: XOR<CharacterCreateWithoutGameSessionsInput, CharacterUncheckedCreateWithoutGameSessionsInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutGameSessionsInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutGameSessionsInput, CharacterUncheckedUpdateWithoutGameSessionsInput>
  }

  export type CharacterUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    gameStates?: GameStateUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutGameSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameStates?: GameStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type GameStateUpsertWithWhereUniqueWithoutSessionInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutSessionInput, GameStateUncheckedUpdateWithoutSessionInput>
    create: XOR<GameStateCreateWithoutSessionInput, GameStateUncheckedCreateWithoutSessionInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutSessionInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutSessionInput, GameStateUncheckedUpdateWithoutSessionInput>
  }

  export type GameStateUpdateManyWithWhereWithoutSessionInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutSessionInput>
  }

  export type GameSessionCreateWithoutGameStatesInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    character: CharacterCreateNestedOneWithoutGameSessionsInput
  }

  export type GameSessionUncheckedCreateWithoutGameStatesInput = {
    id?: string
    characterId: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type GameSessionCreateOrConnectWithoutGameStatesInput = {
    where: GameSessionWhereUniqueInput
    create: XOR<GameSessionCreateWithoutGameStatesInput, GameSessionUncheckedCreateWithoutGameStatesInput>
  }

  export type CharacterCreateWithoutGameStatesInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutCharactersInput
    gameSessions?: GameSessionCreateNestedManyWithoutCharacterInput
  }

  export type CharacterUncheckedCreateWithoutGameStatesInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    gameSessions?: GameSessionUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutGameStatesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutGameStatesInput, CharacterUncheckedCreateWithoutGameStatesInput>
  }

  export type NPCStateCreateWithoutGameStateInput = {
    id?: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
    npcTemplate: NPCTemplateCreateNestedOneWithoutNpcStatesInput
  }

  export type NPCStateUncheckedCreateWithoutGameStateInput = {
    id?: string
    npcTemplateId: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateCreateOrConnectWithoutGameStateInput = {
    where: NPCStateWhereUniqueInput
    create: XOR<NPCStateCreateWithoutGameStateInput, NPCStateUncheckedCreateWithoutGameStateInput>
  }

  export type NPCStateCreateManyGameStateInputEnvelope = {
    data: NPCStateCreateManyGameStateInput | NPCStateCreateManyGameStateInput[]
    skipDuplicates?: boolean
  }

  export type DecisionCreateWithoutGameStateInput = {
    id?: string
    decisionPointId: string
    decisionContext?: string | null
    optionsPresented: JsonNullValueInput | InputJsonValue
    playerChoice: number
    timestamp?: Date | string
    location?: string | null
    relatedNpcIds?: DecisionCreaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUncheckedCreateWithoutGameStateInput = {
    id?: string
    decisionPointId: string
    decisionContext?: string | null
    optionsPresented: JsonNullValueInput | InputJsonValue
    playerChoice: number
    timestamp?: Date | string
    location?: string | null
    relatedNpcIds?: DecisionCreaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionCreateOrConnectWithoutGameStateInput = {
    where: DecisionWhereUniqueInput
    create: XOR<DecisionCreateWithoutGameStateInput, DecisionUncheckedCreateWithoutGameStateInput>
  }

  export type DecisionCreateManyGameStateInputEnvelope = {
    data: DecisionCreateManyGameStateInput | DecisionCreateManyGameStateInput[]
    skipDuplicates?: boolean
  }

  export type AIContextHistoryCreateWithoutGameStateInput = {
    id?: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText?: string | null
    completionText?: string | null
    timestamp?: Date | string
    relevanceScore?: number | null
  }

  export type AIContextHistoryUncheckedCreateWithoutGameStateInput = {
    id?: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText?: string | null
    completionText?: string | null
    timestamp?: Date | string
    relevanceScore?: number | null
  }

  export type AIContextHistoryCreateOrConnectWithoutGameStateInput = {
    where: AIContextHistoryWhereUniqueInput
    create: XOR<AIContextHistoryCreateWithoutGameStateInput, AIContextHistoryUncheckedCreateWithoutGameStateInput>
  }

  export type AIContextHistoryCreateManyGameStateInputEnvelope = {
    data: AIContextHistoryCreateManyGameStateInput | AIContextHistoryCreateManyGameStateInput[]
    skipDuplicates?: boolean
  }

  export type GameSessionUpsertWithoutGameStatesInput = {
    update: XOR<GameSessionUpdateWithoutGameStatesInput, GameSessionUncheckedUpdateWithoutGameStatesInput>
    create: XOR<GameSessionCreateWithoutGameStatesInput, GameSessionUncheckedCreateWithoutGameStatesInput>
    where?: GameSessionWhereInput
  }

  export type GameSessionUpdateToOneWithWhereWithoutGameStatesInput = {
    where?: GameSessionWhereInput
    data: XOR<GameSessionUpdateWithoutGameStatesInput, GameSessionUncheckedUpdateWithoutGameStatesInput>
  }

  export type GameSessionUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    character?: CharacterUpdateOneRequiredWithoutGameSessionsNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type CharacterUpsertWithoutGameStatesInput = {
    update: XOR<CharacterUpdateWithoutGameStatesInput, CharacterUncheckedUpdateWithoutGameStatesInput>
    create: XOR<CharacterCreateWithoutGameStatesInput, CharacterUncheckedCreateWithoutGameStatesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutGameStatesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutGameStatesInput, CharacterUncheckedUpdateWithoutGameStatesInput>
  }

  export type CharacterUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCharactersNestedInput
    gameSessions?: GameSessionUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type NPCStateUpsertWithWhereUniqueWithoutGameStateInput = {
    where: NPCStateWhereUniqueInput
    update: XOR<NPCStateUpdateWithoutGameStateInput, NPCStateUncheckedUpdateWithoutGameStateInput>
    create: XOR<NPCStateCreateWithoutGameStateInput, NPCStateUncheckedCreateWithoutGameStateInput>
  }

  export type NPCStateUpdateWithWhereUniqueWithoutGameStateInput = {
    where: NPCStateWhereUniqueInput
    data: XOR<NPCStateUpdateWithoutGameStateInput, NPCStateUncheckedUpdateWithoutGameStateInput>
  }

  export type NPCStateUpdateManyWithWhereWithoutGameStateInput = {
    where: NPCStateScalarWhereInput
    data: XOR<NPCStateUpdateManyMutationInput, NPCStateUncheckedUpdateManyWithoutGameStateInput>
  }

  export type NPCStateScalarWhereInput = {
    AND?: NPCStateScalarWhereInput | NPCStateScalarWhereInput[]
    OR?: NPCStateScalarWhereInput[]
    NOT?: NPCStateScalarWhereInput | NPCStateScalarWhereInput[]
    id?: StringFilter<"NPCState"> | string
    gameStateId?: StringFilter<"NPCState"> | string
    npcTemplateId?: StringFilter<"NPCState"> | string
    currentLocation?: StringNullableFilter<"NPCState"> | string | null
    relationshipWithPlayer?: IntFilter<"NPCState"> | number
    dialogueHistory?: JsonFilter<"NPCState">
    instanceProperties?: JsonFilter<"NPCState">
  }

  export type DecisionUpsertWithWhereUniqueWithoutGameStateInput = {
    where: DecisionWhereUniqueInput
    update: XOR<DecisionUpdateWithoutGameStateInput, DecisionUncheckedUpdateWithoutGameStateInput>
    create: XOR<DecisionCreateWithoutGameStateInput, DecisionUncheckedCreateWithoutGameStateInput>
  }

  export type DecisionUpdateWithWhereUniqueWithoutGameStateInput = {
    where: DecisionWhereUniqueInput
    data: XOR<DecisionUpdateWithoutGameStateInput, DecisionUncheckedUpdateWithoutGameStateInput>
  }

  export type DecisionUpdateManyWithWhereWithoutGameStateInput = {
    where: DecisionScalarWhereInput
    data: XOR<DecisionUpdateManyMutationInput, DecisionUncheckedUpdateManyWithoutGameStateInput>
  }

  export type DecisionScalarWhereInput = {
    AND?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    OR?: DecisionScalarWhereInput[]
    NOT?: DecisionScalarWhereInput | DecisionScalarWhereInput[]
    id?: StringFilter<"Decision"> | string
    gameStateId?: StringFilter<"Decision"> | string
    decisionPointId?: StringFilter<"Decision"> | string
    decisionContext?: StringNullableFilter<"Decision"> | string | null
    optionsPresented?: JsonFilter<"Decision">
    playerChoice?: IntFilter<"Decision"> | number
    timestamp?: DateTimeFilter<"Decision"> | Date | string
    location?: StringNullableFilter<"Decision"> | string | null
    relatedNpcIds?: StringNullableListFilter<"Decision">
    consequences?: JsonFilter<"Decision">
  }

  export type AIContextHistoryUpsertWithWhereUniqueWithoutGameStateInput = {
    where: AIContextHistoryWhereUniqueInput
    update: XOR<AIContextHistoryUpdateWithoutGameStateInput, AIContextHistoryUncheckedUpdateWithoutGameStateInput>
    create: XOR<AIContextHistoryCreateWithoutGameStateInput, AIContextHistoryUncheckedCreateWithoutGameStateInput>
  }

  export type AIContextHistoryUpdateWithWhereUniqueWithoutGameStateInput = {
    where: AIContextHistoryWhereUniqueInput
    data: XOR<AIContextHistoryUpdateWithoutGameStateInput, AIContextHistoryUncheckedUpdateWithoutGameStateInput>
  }

  export type AIContextHistoryUpdateManyWithWhereWithoutGameStateInput = {
    where: AIContextHistoryScalarWhereInput
    data: XOR<AIContextHistoryUpdateManyMutationInput, AIContextHistoryUncheckedUpdateManyWithoutGameStateInput>
  }

  export type AIContextHistoryScalarWhereInput = {
    AND?: AIContextHistoryScalarWhereInput | AIContextHistoryScalarWhereInput[]
    OR?: AIContextHistoryScalarWhereInput[]
    NOT?: AIContextHistoryScalarWhereInput | AIContextHistoryScalarWhereInput[]
    id?: StringFilter<"AIContextHistory"> | string
    gameStateId?: StringFilter<"AIContextHistory"> | string
    contextType?: StringFilter<"AIContextHistory"> | string
    promptTokens?: IntFilter<"AIContextHistory"> | number
    completionTokens?: IntFilter<"AIContextHistory"> | number
    promptText?: StringNullableFilter<"AIContextHistory"> | string | null
    completionText?: StringNullableFilter<"AIContextHistory"> | string | null
    timestamp?: DateTimeFilter<"AIContextHistory"> | Date | string
    relevanceScore?: FloatNullableFilter<"AIContextHistory"> | number | null
  }

  export type NPCStateCreateWithoutNpcTemplateInput = {
    id?: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
    gameState: GameStateCreateNestedOneWithoutNpcStatesInput
  }

  export type NPCStateUncheckedCreateWithoutNpcTemplateInput = {
    id?: string
    gameStateId: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateCreateOrConnectWithoutNpcTemplateInput = {
    where: NPCStateWhereUniqueInput
    create: XOR<NPCStateCreateWithoutNpcTemplateInput, NPCStateUncheckedCreateWithoutNpcTemplateInput>
  }

  export type NPCStateCreateManyNpcTemplateInputEnvelope = {
    data: NPCStateCreateManyNpcTemplateInput | NPCStateCreateManyNpcTemplateInput[]
    skipDuplicates?: boolean
  }

  export type NPCStateUpsertWithWhereUniqueWithoutNpcTemplateInput = {
    where: NPCStateWhereUniqueInput
    update: XOR<NPCStateUpdateWithoutNpcTemplateInput, NPCStateUncheckedUpdateWithoutNpcTemplateInput>
    create: XOR<NPCStateCreateWithoutNpcTemplateInput, NPCStateUncheckedCreateWithoutNpcTemplateInput>
  }

  export type NPCStateUpdateWithWhereUniqueWithoutNpcTemplateInput = {
    where: NPCStateWhereUniqueInput
    data: XOR<NPCStateUpdateWithoutNpcTemplateInput, NPCStateUncheckedUpdateWithoutNpcTemplateInput>
  }

  export type NPCStateUpdateManyWithWhereWithoutNpcTemplateInput = {
    where: NPCStateScalarWhereInput
    data: XOR<NPCStateUpdateManyMutationInput, NPCStateUncheckedUpdateManyWithoutNpcTemplateInput>
  }

  export type GameStateCreateWithoutNpcStatesInput = {
    id?: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    session: GameSessionCreateNestedOneWithoutGameStatesInput
    character: CharacterCreateNestedOneWithoutGameStatesInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutNpcStatesInput = {
    id?: string
    sessionId: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    decisions?: DecisionUncheckedCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutNpcStatesInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutNpcStatesInput, GameStateUncheckedCreateWithoutNpcStatesInput>
  }

  export type NPCTemplateCreateWithoutNpcStatesInput = {
    id?: string
    code: string
    name: string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: string | null
    isUnique?: boolean
  }

  export type NPCTemplateUncheckedCreateWithoutNpcStatesInput = {
    id?: string
    code: string
    name: string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: string | null
    isUnique?: boolean
  }

  export type NPCTemplateCreateOrConnectWithoutNpcStatesInput = {
    where: NPCTemplateWhereUniqueInput
    create: XOR<NPCTemplateCreateWithoutNpcStatesInput, NPCTemplateUncheckedCreateWithoutNpcStatesInput>
  }

  export type GameStateUpsertWithoutNpcStatesInput = {
    update: XOR<GameStateUpdateWithoutNpcStatesInput, GameStateUncheckedUpdateWithoutNpcStatesInput>
    create: XOR<GameStateCreateWithoutNpcStatesInput, GameStateUncheckedCreateWithoutNpcStatesInput>
    where?: GameStateWhereInput
  }

  export type GameStateUpdateToOneWithWhereWithoutNpcStatesInput = {
    where?: GameStateWhereInput
    data: XOR<GameStateUpdateWithoutNpcStatesInput, GameStateUncheckedUpdateWithoutNpcStatesInput>
  }

  export type GameStateUpdateWithoutNpcStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    session?: GameSessionUpdateOneRequiredWithoutGameStatesNestedInput
    character?: CharacterUpdateOneRequiredWithoutGameStatesNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutNpcStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    decisions?: DecisionUncheckedUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type NPCTemplateUpsertWithoutNpcStatesInput = {
    update: XOR<NPCTemplateUpdateWithoutNpcStatesInput, NPCTemplateUncheckedUpdateWithoutNpcStatesInput>
    create: XOR<NPCTemplateCreateWithoutNpcStatesInput, NPCTemplateUncheckedCreateWithoutNpcStatesInput>
    where?: NPCTemplateWhereInput
  }

  export type NPCTemplateUpdateToOneWithWhereWithoutNpcStatesInput = {
    where?: NPCTemplateWhereInput
    data: XOR<NPCTemplateUpdateWithoutNpcStatesInput, NPCTemplateUncheckedUpdateWithoutNpcStatesInput>
  }

  export type NPCTemplateUpdateWithoutNpcStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isUnique?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NPCTemplateUncheckedUpdateWithoutNpcStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    personalityTraits?: JsonNullValueInput | InputJsonValue
    defaultDialogue?: JsonNullValueInput | InputJsonValue
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    isUnique?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LoreCategoryCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    description?: string | null
    parentCategory?: LoreCategoryCreateNestedOneWithoutSubcategoriesInput
    worldLore?: WorldLoreCreateNestedManyWithoutCategoryInput
  }

  export type LoreCategoryUncheckedCreateWithoutSubcategoriesInput = {
    id?: string
    name: string
    description?: string | null
    parentCategoryId?: string | null
    worldLore?: WorldLoreUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type LoreCategoryCreateOrConnectWithoutSubcategoriesInput = {
    where: LoreCategoryWhereUniqueInput
    create: XOR<LoreCategoryCreateWithoutSubcategoriesInput, LoreCategoryUncheckedCreateWithoutSubcategoriesInput>
  }

  export type LoreCategoryCreateWithoutParentCategoryInput = {
    id?: string
    name: string
    description?: string | null
    subcategories?: LoreCategoryCreateNestedManyWithoutParentCategoryInput
    worldLore?: WorldLoreCreateNestedManyWithoutCategoryInput
  }

  export type LoreCategoryUncheckedCreateWithoutParentCategoryInput = {
    id?: string
    name: string
    description?: string | null
    subcategories?: LoreCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
    worldLore?: WorldLoreUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type LoreCategoryCreateOrConnectWithoutParentCategoryInput = {
    where: LoreCategoryWhereUniqueInput
    create: XOR<LoreCategoryCreateWithoutParentCategoryInput, LoreCategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type LoreCategoryCreateManyParentCategoryInputEnvelope = {
    data: LoreCategoryCreateManyParentCategoryInput | LoreCategoryCreateManyParentCategoryInput[]
    skipDuplicates?: boolean
  }

  export type WorldLoreCreateWithoutCategoryInput = {
    id?: string
    title: string
    content: string
    isDiscoverable?: boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreCreatekeywordsInput | string[]
  }

  export type WorldLoreUncheckedCreateWithoutCategoryInput = {
    id?: string
    title: string
    content: string
    isDiscoverable?: boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreCreatekeywordsInput | string[]
  }

  export type WorldLoreCreateOrConnectWithoutCategoryInput = {
    where: WorldLoreWhereUniqueInput
    create: XOR<WorldLoreCreateWithoutCategoryInput, WorldLoreUncheckedCreateWithoutCategoryInput>
  }

  export type WorldLoreCreateManyCategoryInputEnvelope = {
    data: WorldLoreCreateManyCategoryInput | WorldLoreCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type LoreCategoryUpsertWithoutSubcategoriesInput = {
    update: XOR<LoreCategoryUpdateWithoutSubcategoriesInput, LoreCategoryUncheckedUpdateWithoutSubcategoriesInput>
    create: XOR<LoreCategoryCreateWithoutSubcategoriesInput, LoreCategoryUncheckedCreateWithoutSubcategoriesInput>
    where?: LoreCategoryWhereInput
  }

  export type LoreCategoryUpdateToOneWithWhereWithoutSubcategoriesInput = {
    where?: LoreCategoryWhereInput
    data: XOR<LoreCategoryUpdateWithoutSubcategoriesInput, LoreCategoryUncheckedUpdateWithoutSubcategoriesInput>
  }

  export type LoreCategoryUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategory?: LoreCategoryUpdateOneWithoutSubcategoriesNestedInput
    worldLore?: WorldLoreUpdateManyWithoutCategoryNestedInput
  }

  export type LoreCategoryUncheckedUpdateWithoutSubcategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    worldLore?: WorldLoreUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type LoreCategoryUpsertWithWhereUniqueWithoutParentCategoryInput = {
    where: LoreCategoryWhereUniqueInput
    update: XOR<LoreCategoryUpdateWithoutParentCategoryInput, LoreCategoryUncheckedUpdateWithoutParentCategoryInput>
    create: XOR<LoreCategoryCreateWithoutParentCategoryInput, LoreCategoryUncheckedCreateWithoutParentCategoryInput>
  }

  export type LoreCategoryUpdateWithWhereUniqueWithoutParentCategoryInput = {
    where: LoreCategoryWhereUniqueInput
    data: XOR<LoreCategoryUpdateWithoutParentCategoryInput, LoreCategoryUncheckedUpdateWithoutParentCategoryInput>
  }

  export type LoreCategoryUpdateManyWithWhereWithoutParentCategoryInput = {
    where: LoreCategoryScalarWhereInput
    data: XOR<LoreCategoryUpdateManyMutationInput, LoreCategoryUncheckedUpdateManyWithoutParentCategoryInput>
  }

  export type LoreCategoryScalarWhereInput = {
    AND?: LoreCategoryScalarWhereInput | LoreCategoryScalarWhereInput[]
    OR?: LoreCategoryScalarWhereInput[]
    NOT?: LoreCategoryScalarWhereInput | LoreCategoryScalarWhereInput[]
    id?: StringFilter<"LoreCategory"> | string
    name?: StringFilter<"LoreCategory"> | string
    description?: StringNullableFilter<"LoreCategory"> | string | null
    parentCategoryId?: StringNullableFilter<"LoreCategory"> | string | null
  }

  export type WorldLoreUpsertWithWhereUniqueWithoutCategoryInput = {
    where: WorldLoreWhereUniqueInput
    update: XOR<WorldLoreUpdateWithoutCategoryInput, WorldLoreUncheckedUpdateWithoutCategoryInput>
    create: XOR<WorldLoreCreateWithoutCategoryInput, WorldLoreUncheckedCreateWithoutCategoryInput>
  }

  export type WorldLoreUpdateWithWhereUniqueWithoutCategoryInput = {
    where: WorldLoreWhereUniqueInput
    data: XOR<WorldLoreUpdateWithoutCategoryInput, WorldLoreUncheckedUpdateWithoutCategoryInput>
  }

  export type WorldLoreUpdateManyWithWhereWithoutCategoryInput = {
    where: WorldLoreScalarWhereInput
    data: XOR<WorldLoreUpdateManyMutationInput, WorldLoreUncheckedUpdateManyWithoutCategoryInput>
  }

  export type WorldLoreScalarWhereInput = {
    AND?: WorldLoreScalarWhereInput | WorldLoreScalarWhereInput[]
    OR?: WorldLoreScalarWhereInput[]
    NOT?: WorldLoreScalarWhereInput | WorldLoreScalarWhereInput[]
    id?: StringFilter<"WorldLore"> | string
    categoryId?: StringNullableFilter<"WorldLore"> | string | null
    title?: StringFilter<"WorldLore"> | string
    content?: StringFilter<"WorldLore"> | string
    isDiscoverable?: BoolFilter<"WorldLore"> | boolean
    discoveryConditions?: JsonFilter<"WorldLore">
    keywords?: StringNullableListFilter<"WorldLore">
  }

  export type LoreCategoryCreateWithoutWorldLoreInput = {
    id?: string
    name: string
    description?: string | null
    parentCategory?: LoreCategoryCreateNestedOneWithoutSubcategoriesInput
    subcategories?: LoreCategoryCreateNestedManyWithoutParentCategoryInput
  }

  export type LoreCategoryUncheckedCreateWithoutWorldLoreInput = {
    id?: string
    name: string
    description?: string | null
    parentCategoryId?: string | null
    subcategories?: LoreCategoryUncheckedCreateNestedManyWithoutParentCategoryInput
  }

  export type LoreCategoryCreateOrConnectWithoutWorldLoreInput = {
    where: LoreCategoryWhereUniqueInput
    create: XOR<LoreCategoryCreateWithoutWorldLoreInput, LoreCategoryUncheckedCreateWithoutWorldLoreInput>
  }

  export type LoreCategoryUpsertWithoutWorldLoreInput = {
    update: XOR<LoreCategoryUpdateWithoutWorldLoreInput, LoreCategoryUncheckedUpdateWithoutWorldLoreInput>
    create: XOR<LoreCategoryCreateWithoutWorldLoreInput, LoreCategoryUncheckedCreateWithoutWorldLoreInput>
    where?: LoreCategoryWhereInput
  }

  export type LoreCategoryUpdateToOneWithWhereWithoutWorldLoreInput = {
    where?: LoreCategoryWhereInput
    data: XOR<LoreCategoryUpdateWithoutWorldLoreInput, LoreCategoryUncheckedUpdateWithoutWorldLoreInput>
  }

  export type LoreCategoryUpdateWithoutWorldLoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategory?: LoreCategoryUpdateOneWithoutSubcategoriesNestedInput
    subcategories?: LoreCategoryUpdateManyWithoutParentCategoryNestedInput
  }

  export type LoreCategoryUncheckedUpdateWithoutWorldLoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parentCategoryId?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: LoreCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
  }

  export type GameStateCreateWithoutDecisionsInput = {
    id?: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    session: GameSessionCreateNestedOneWithoutGameStatesInput
    character: CharacterCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutDecisionsInput = {
    id?: string
    sessionId: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    npcStates?: NPCStateUncheckedCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutDecisionsInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutDecisionsInput, GameStateUncheckedCreateWithoutDecisionsInput>
  }

  export type GameStateUpsertWithoutDecisionsInput = {
    update: XOR<GameStateUpdateWithoutDecisionsInput, GameStateUncheckedUpdateWithoutDecisionsInput>
    create: XOR<GameStateCreateWithoutDecisionsInput, GameStateUncheckedCreateWithoutDecisionsInput>
    where?: GameStateWhereInput
  }

  export type GameStateUpdateToOneWithWhereWithoutDecisionsInput = {
    where?: GameStateWhereInput
    data: XOR<GameStateUpdateWithoutDecisionsInput, GameStateUncheckedUpdateWithoutDecisionsInput>
  }

  export type GameStateUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    session?: GameSessionUpdateOneRequiredWithoutGameStatesNestedInput
    character?: CharacterUpdateOneRequiredWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUncheckedUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateCreateWithoutAiContextHistoryInput = {
    id?: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    session: GameSessionCreateNestedOneWithoutGameStatesInput
    character: CharacterCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutAiContextHistoryInput = {
    id?: string
    sessionId: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
    npcStates?: NPCStateUncheckedCreateNestedManyWithoutGameStateInput
    decisions?: DecisionUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutAiContextHistoryInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutAiContextHistoryInput, GameStateUncheckedCreateWithoutAiContextHistoryInput>
  }

  export type GameStateUpsertWithoutAiContextHistoryInput = {
    update: XOR<GameStateUpdateWithoutAiContextHistoryInput, GameStateUncheckedUpdateWithoutAiContextHistoryInput>
    create: XOR<GameStateCreateWithoutAiContextHistoryInput, GameStateUncheckedCreateWithoutAiContextHistoryInput>
    where?: GameStateWhereInput
  }

  export type GameStateUpdateToOneWithWhereWithoutAiContextHistoryInput = {
    where?: GameStateWhereInput
    data: XOR<GameStateUpdateWithoutAiContextHistoryInput, GameStateUncheckedUpdateWithoutAiContextHistoryInput>
  }

  export type GameStateUpdateWithoutAiContextHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    session?: GameSessionUpdateOneRequiredWithoutGameStatesNestedInput
    character?: CharacterUpdateOneRequiredWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutAiContextHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUncheckedUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type CharacterCreateManyUserInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
  }

  export type CharacterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUpdateManyWithoutCharacterNestedInput
    gameStates?: GameStateUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    gameSessions?: GameSessionUncheckedUpdateManyWithoutCharacterNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type CharacterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameSessionCreateManyCharacterInput = {
    id?: string
    startedAt?: Date | string
    endedAt?: Date | string | null
    durationSeconds?: number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type GameStateCreateManyCharacterInput = {
    id?: string
    sessionId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
  }

  export type GameSessionUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    gameStates?: GameStateUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
    gameStates?: GameStateUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type GameSessionUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    durationSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    sessionData?: JsonNullValueInput | InputJsonValue
  }

  export type GameStateUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    session?: GameSessionUpdateOneRequiredWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUncheckedUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameStateCreateManySessionInput = {
    id?: string
    characterId: string
    savePointName?: string | null
    currentLocation: string
    saveTimestamp?: Date | string
    narrativeContext?: string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    isAutosave?: boolean
    isCompleted?: boolean
  }

  export type GameStateUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    character?: CharacterUpdateOneRequiredWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    npcStates?: NPCStateUncheckedUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUncheckedUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    savePointName?: NullableStringFieldUpdateOperationsInput | string | null
    currentLocation?: StringFieldUpdateOperationsInput | string
    saveTimestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    narrativeContext?: NullableStringFieldUpdateOperationsInput | string | null
    aiContext?: JsonNullValueInput | InputJsonValue
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    isAutosave?: BoolFieldUpdateOperationsInput | boolean
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NPCStateCreateManyGameStateInput = {
    id?: string
    npcTemplateId: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionCreateManyGameStateInput = {
    id?: string
    decisionPointId: string
    decisionContext?: string | null
    optionsPresented: JsonNullValueInput | InputJsonValue
    playerChoice: number
    timestamp?: Date | string
    location?: string | null
    relatedNpcIds?: DecisionCreaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type AIContextHistoryCreateManyGameStateInput = {
    id?: string
    contextType: string
    promptTokens: number
    completionTokens: number
    promptText?: string | null
    completionText?: string | null
    timestamp?: Date | string
    relevanceScore?: number | null
  }

  export type NPCStateUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
    npcTemplate?: NPCTemplateUpdateOneRequiredWithoutNpcStatesNestedInput
  }

  export type NPCStateUncheckedUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    npcTemplateId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateUncheckedUpdateManyWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    npcTemplateId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUncheckedUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type DecisionUncheckedUpdateManyWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    decisionPointId?: StringFieldUpdateOperationsInput | string
    decisionContext?: NullableStringFieldUpdateOperationsInput | string | null
    optionsPresented?: JsonNullValueInput | InputJsonValue
    playerChoice?: IntFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    relatedNpcIds?: DecisionUpdaterelatedNpcIdsInput | string[]
    consequences?: JsonNullValueInput | InputJsonValue
  }

  export type AIContextHistoryUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AIContextHistoryUncheckedUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AIContextHistoryUncheckedUpdateManyWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contextType?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    promptText?: NullableStringFieldUpdateOperationsInput | string | null
    completionText?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    relevanceScore?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NPCStateCreateManyNpcTemplateInput = {
    id?: string
    gameStateId: string
    currentLocation?: string | null
    relationshipWithPlayer?: number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateUpdateWithoutNpcTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
    gameState?: GameStateUpdateOneRequiredWithoutNpcStatesNestedInput
  }

  export type NPCStateUncheckedUpdateWithoutNpcTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type NPCStateUncheckedUpdateManyWithoutNpcTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    relationshipWithPlayer?: IntFieldUpdateOperationsInput | number
    dialogueHistory?: JsonNullValueInput | InputJsonValue
    instanceProperties?: JsonNullValueInput | InputJsonValue
  }

  export type LoreCategoryCreateManyParentCategoryInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type WorldLoreCreateManyCategoryInput = {
    id?: string
    title: string
    content: string
    isDiscoverable?: boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreCreatekeywordsInput | string[]
  }

  export type LoreCategoryUpdateWithoutParentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: LoreCategoryUpdateManyWithoutParentCategoryNestedInput
    worldLore?: WorldLoreUpdateManyWithoutCategoryNestedInput
  }

  export type LoreCategoryUncheckedUpdateWithoutParentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    subcategories?: LoreCategoryUncheckedUpdateManyWithoutParentCategoryNestedInput
    worldLore?: WorldLoreUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type LoreCategoryUncheckedUpdateManyWithoutParentCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WorldLoreUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
  }

  export type WorldLoreUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
  }

  export type WorldLoreUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isDiscoverable?: BoolFieldUpdateOperationsInput | boolean
    discoveryConditions?: JsonNullValueInput | InputJsonValue
    keywords?: WorldLoreUpdatekeywordsInput | string[]
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}