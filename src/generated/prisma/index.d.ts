
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
 * Model UserProfile
 * 
 */
export type UserProfile = $Result.DefaultSelection<Prisma.$UserProfilePayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model MVPCharacter
 * 
 */
export type MVPCharacter = $Result.DefaultSelection<Prisma.$MVPCharacterPayload>
/**
 * Model MVPWorld
 * 
 */
export type MVPWorld = $Result.DefaultSelection<Prisma.$MVPWorldPayload>
/**
 * Model MVPCharacterWorldState
 * 
 */
export type MVPCharacterWorldState = $Result.DefaultSelection<Prisma.$MVPCharacterWorldStatePayload>
/**
 * Model MVPLocation
 * 
 */
export type MVPLocation = $Result.DefaultSelection<Prisma.$MVPLocationPayload>
/**
 * Model MVPLoreFragment
 * 
 */
export type MVPLoreFragment = $Result.DefaultSelection<Prisma.$MVPLoreFragmentPayload>
/**
 * Model MVPEvent
 * 
 */
export type MVPEvent = $Result.DefaultSelection<Prisma.$MVPEventPayload>
/**
 * Model SimplifiedGameState
 * 
 */
export type SimplifiedGameState = $Result.DefaultSelection<Prisma.$SimplifiedGameStatePayload>

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
   * `prisma.userProfile`: Exposes CRUD operations for the **UserProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProfiles
    * const userProfiles = await prisma.userProfile.findMany()
    * ```
    */
  get userProfile(): Prisma.UserProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mVPCharacter`: Exposes CRUD operations for the **MVPCharacter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MVPCharacters
    * const mVPCharacters = await prisma.mVPCharacter.findMany()
    * ```
    */
  get mVPCharacter(): Prisma.MVPCharacterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mVPWorld`: Exposes CRUD operations for the **MVPWorld** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MVPWorlds
    * const mVPWorlds = await prisma.mVPWorld.findMany()
    * ```
    */
  get mVPWorld(): Prisma.MVPWorldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mVPCharacterWorldState`: Exposes CRUD operations for the **MVPCharacterWorldState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MVPCharacterWorldStates
    * const mVPCharacterWorldStates = await prisma.mVPCharacterWorldState.findMany()
    * ```
    */
  get mVPCharacterWorldState(): Prisma.MVPCharacterWorldStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mVPLocation`: Exposes CRUD operations for the **MVPLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MVPLocations
    * const mVPLocations = await prisma.mVPLocation.findMany()
    * ```
    */
  get mVPLocation(): Prisma.MVPLocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mVPLoreFragment`: Exposes CRUD operations for the **MVPLoreFragment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MVPLoreFragments
    * const mVPLoreFragments = await prisma.mVPLoreFragment.findMany()
    * ```
    */
  get mVPLoreFragment(): Prisma.MVPLoreFragmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mVPEvent`: Exposes CRUD operations for the **MVPEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MVPEvents
    * const mVPEvents = await prisma.mVPEvent.findMany()
    * ```
    */
  get mVPEvent(): Prisma.MVPEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.simplifiedGameState`: Exposes CRUD operations for the **SimplifiedGameState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SimplifiedGameStates
    * const simplifiedGameStates = await prisma.simplifiedGameState.findMany()
    * ```
    */
  get simplifiedGameState(): Prisma.SimplifiedGameStateDelegate<ExtArgs, ClientOptions>;
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
    UserProfile: 'UserProfile',
    Session: 'Session',
    MVPCharacter: 'MVPCharacter',
    MVPWorld: 'MVPWorld',
    MVPCharacterWorldState: 'MVPCharacterWorldState',
    MVPLocation: 'MVPLocation',
    MVPLoreFragment: 'MVPLoreFragment',
    MVPEvent: 'MVPEvent',
    SimplifiedGameState: 'SimplifiedGameState'
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
      modelProps: "user" | "userProfile" | "session" | "mVPCharacter" | "mVPWorld" | "mVPCharacterWorldState" | "mVPLocation" | "mVPLoreFragment" | "mVPEvent" | "simplifiedGameState"
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
      UserProfile: {
        payload: Prisma.$UserProfilePayload<ExtArgs>
        fields: Prisma.UserProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findFirst: {
            args: Prisma.UserProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          findMany: {
            args: Prisma.UserProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          create: {
            args: Prisma.UserProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          createMany: {
            args: Prisma.UserProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          delete: {
            args: Prisma.UserProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          update: {
            args: Prisma.UserProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          deleteMany: {
            args: Prisma.UserProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>[]
          }
          upsert: {
            args: Prisma.UserProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProfilePayload>
          }
          aggregate: {
            args: Prisma.UserProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProfile>
          }
          groupBy: {
            args: Prisma.UserProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProfileCountArgs<ExtArgs>
            result: $Utils.Optional<UserProfileCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      MVPCharacter: {
        payload: Prisma.$MVPCharacterPayload<ExtArgs>
        fields: Prisma.MVPCharacterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MVPCharacterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MVPCharacterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>
          }
          findFirst: {
            args: Prisma.MVPCharacterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MVPCharacterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>
          }
          findMany: {
            args: Prisma.MVPCharacterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>[]
          }
          create: {
            args: Prisma.MVPCharacterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>
          }
          createMany: {
            args: Prisma.MVPCharacterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MVPCharacterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>[]
          }
          delete: {
            args: Prisma.MVPCharacterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>
          }
          update: {
            args: Prisma.MVPCharacterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>
          }
          deleteMany: {
            args: Prisma.MVPCharacterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MVPCharacterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MVPCharacterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>[]
          }
          upsert: {
            args: Prisma.MVPCharacterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterPayload>
          }
          aggregate: {
            args: Prisma.MVPCharacterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMVPCharacter>
          }
          groupBy: {
            args: Prisma.MVPCharacterGroupByArgs<ExtArgs>
            result: $Utils.Optional<MVPCharacterGroupByOutputType>[]
          }
          count: {
            args: Prisma.MVPCharacterCountArgs<ExtArgs>
            result: $Utils.Optional<MVPCharacterCountAggregateOutputType> | number
          }
        }
      }
      MVPWorld: {
        payload: Prisma.$MVPWorldPayload<ExtArgs>
        fields: Prisma.MVPWorldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MVPWorldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MVPWorldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>
          }
          findFirst: {
            args: Prisma.MVPWorldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MVPWorldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>
          }
          findMany: {
            args: Prisma.MVPWorldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>[]
          }
          create: {
            args: Prisma.MVPWorldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>
          }
          createMany: {
            args: Prisma.MVPWorldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MVPWorldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>[]
          }
          delete: {
            args: Prisma.MVPWorldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>
          }
          update: {
            args: Prisma.MVPWorldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>
          }
          deleteMany: {
            args: Prisma.MVPWorldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MVPWorldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MVPWorldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>[]
          }
          upsert: {
            args: Prisma.MVPWorldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPWorldPayload>
          }
          aggregate: {
            args: Prisma.MVPWorldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMVPWorld>
          }
          groupBy: {
            args: Prisma.MVPWorldGroupByArgs<ExtArgs>
            result: $Utils.Optional<MVPWorldGroupByOutputType>[]
          }
          count: {
            args: Prisma.MVPWorldCountArgs<ExtArgs>
            result: $Utils.Optional<MVPWorldCountAggregateOutputType> | number
          }
        }
      }
      MVPCharacterWorldState: {
        payload: Prisma.$MVPCharacterWorldStatePayload<ExtArgs>
        fields: Prisma.MVPCharacterWorldStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MVPCharacterWorldStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MVPCharacterWorldStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>
          }
          findFirst: {
            args: Prisma.MVPCharacterWorldStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MVPCharacterWorldStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>
          }
          findMany: {
            args: Prisma.MVPCharacterWorldStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>[]
          }
          create: {
            args: Prisma.MVPCharacterWorldStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>
          }
          createMany: {
            args: Prisma.MVPCharacterWorldStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MVPCharacterWorldStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>[]
          }
          delete: {
            args: Prisma.MVPCharacterWorldStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>
          }
          update: {
            args: Prisma.MVPCharacterWorldStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>
          }
          deleteMany: {
            args: Prisma.MVPCharacterWorldStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MVPCharacterWorldStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MVPCharacterWorldStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>[]
          }
          upsert: {
            args: Prisma.MVPCharacterWorldStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPCharacterWorldStatePayload>
          }
          aggregate: {
            args: Prisma.MVPCharacterWorldStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMVPCharacterWorldState>
          }
          groupBy: {
            args: Prisma.MVPCharacterWorldStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<MVPCharacterWorldStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.MVPCharacterWorldStateCountArgs<ExtArgs>
            result: $Utils.Optional<MVPCharacterWorldStateCountAggregateOutputType> | number
          }
        }
      }
      MVPLocation: {
        payload: Prisma.$MVPLocationPayload<ExtArgs>
        fields: Prisma.MVPLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MVPLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MVPLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>
          }
          findFirst: {
            args: Prisma.MVPLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MVPLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>
          }
          findMany: {
            args: Prisma.MVPLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>[]
          }
          create: {
            args: Prisma.MVPLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>
          }
          createMany: {
            args: Prisma.MVPLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MVPLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>[]
          }
          delete: {
            args: Prisma.MVPLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>
          }
          update: {
            args: Prisma.MVPLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>
          }
          deleteMany: {
            args: Prisma.MVPLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MVPLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MVPLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>[]
          }
          upsert: {
            args: Prisma.MVPLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLocationPayload>
          }
          aggregate: {
            args: Prisma.MVPLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMVPLocation>
          }
          groupBy: {
            args: Prisma.MVPLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MVPLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MVPLocationCountArgs<ExtArgs>
            result: $Utils.Optional<MVPLocationCountAggregateOutputType> | number
          }
        }
      }
      MVPLoreFragment: {
        payload: Prisma.$MVPLoreFragmentPayload<ExtArgs>
        fields: Prisma.MVPLoreFragmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MVPLoreFragmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MVPLoreFragmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>
          }
          findFirst: {
            args: Prisma.MVPLoreFragmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MVPLoreFragmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>
          }
          findMany: {
            args: Prisma.MVPLoreFragmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>[]
          }
          create: {
            args: Prisma.MVPLoreFragmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>
          }
          createMany: {
            args: Prisma.MVPLoreFragmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MVPLoreFragmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>[]
          }
          delete: {
            args: Prisma.MVPLoreFragmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>
          }
          update: {
            args: Prisma.MVPLoreFragmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>
          }
          deleteMany: {
            args: Prisma.MVPLoreFragmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MVPLoreFragmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MVPLoreFragmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>[]
          }
          upsert: {
            args: Prisma.MVPLoreFragmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPLoreFragmentPayload>
          }
          aggregate: {
            args: Prisma.MVPLoreFragmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMVPLoreFragment>
          }
          groupBy: {
            args: Prisma.MVPLoreFragmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<MVPLoreFragmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.MVPLoreFragmentCountArgs<ExtArgs>
            result: $Utils.Optional<MVPLoreFragmentCountAggregateOutputType> | number
          }
        }
      }
      MVPEvent: {
        payload: Prisma.$MVPEventPayload<ExtArgs>
        fields: Prisma.MVPEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MVPEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MVPEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>
          }
          findFirst: {
            args: Prisma.MVPEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MVPEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>
          }
          findMany: {
            args: Prisma.MVPEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>[]
          }
          create: {
            args: Prisma.MVPEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>
          }
          createMany: {
            args: Prisma.MVPEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MVPEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>[]
          }
          delete: {
            args: Prisma.MVPEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>
          }
          update: {
            args: Prisma.MVPEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>
          }
          deleteMany: {
            args: Prisma.MVPEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MVPEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MVPEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>[]
          }
          upsert: {
            args: Prisma.MVPEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MVPEventPayload>
          }
          aggregate: {
            args: Prisma.MVPEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMVPEvent>
          }
          groupBy: {
            args: Prisma.MVPEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MVPEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MVPEventCountArgs<ExtArgs>
            result: $Utils.Optional<MVPEventCountAggregateOutputType> | number
          }
        }
      }
      SimplifiedGameState: {
        payload: Prisma.$SimplifiedGameStatePayload<ExtArgs>
        fields: Prisma.SimplifiedGameStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SimplifiedGameStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SimplifiedGameStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>
          }
          findFirst: {
            args: Prisma.SimplifiedGameStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SimplifiedGameStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>
          }
          findMany: {
            args: Prisma.SimplifiedGameStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>[]
          }
          create: {
            args: Prisma.SimplifiedGameStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>
          }
          createMany: {
            args: Prisma.SimplifiedGameStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SimplifiedGameStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>[]
          }
          delete: {
            args: Prisma.SimplifiedGameStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>
          }
          update: {
            args: Prisma.SimplifiedGameStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>
          }
          deleteMany: {
            args: Prisma.SimplifiedGameStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SimplifiedGameStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SimplifiedGameStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>[]
          }
          upsert: {
            args: Prisma.SimplifiedGameStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SimplifiedGameStatePayload>
          }
          aggregate: {
            args: Prisma.SimplifiedGameStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSimplifiedGameState>
          }
          groupBy: {
            args: Prisma.SimplifiedGameStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SimplifiedGameStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SimplifiedGameStateCountArgs<ExtArgs>
            result: $Utils.Optional<SimplifiedGameStateCountAggregateOutputType> | number
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
    userProfile?: UserProfileOmit
    session?: SessionOmit
    mVPCharacter?: MVPCharacterOmit
    mVPWorld?: MVPWorldOmit
    mVPCharacterWorldState?: MVPCharacterWorldStateOmit
    mVPLocation?: MVPLocationOmit
    mVPLoreFragment?: MVPLoreFragmentOmit
    mVPEvent?: MVPEventOmit
    simplifiedGameState?: SimplifiedGameStateOmit
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
    sessions: number
    mvpCharacters: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    mvpCharacters?: boolean | UserCountOutputTypeCountMvpCharactersArgs
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
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMvpCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPCharacterWhereInput
  }


  /**
   * Count Type MVPCharacterCountOutputType
   */

  export type MVPCharacterCountOutputType = {
    mvpCharacterWorldStates: number
    simplifiedGameStates: number
  }

  export type MVPCharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mvpCharacterWorldStates?: boolean | MVPCharacterCountOutputTypeCountMvpCharacterWorldStatesArgs
    simplifiedGameStates?: boolean | MVPCharacterCountOutputTypeCountSimplifiedGameStatesArgs
  }

  // Custom InputTypes
  /**
   * MVPCharacterCountOutputType without action
   */
  export type MVPCharacterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterCountOutputType
     */
    select?: MVPCharacterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MVPCharacterCountOutputType without action
   */
  export type MVPCharacterCountOutputTypeCountMvpCharacterWorldStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPCharacterWorldStateWhereInput
  }

  /**
   * MVPCharacterCountOutputType without action
   */
  export type MVPCharacterCountOutputTypeCountSimplifiedGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimplifiedGameStateWhereInput
  }


  /**
   * Count Type MVPWorldCountOutputType
   */

  export type MVPWorldCountOutputType = {
    mvpLocations: number
    mvpLoreFragments: number
    mvpCharacterWorldStates: number
    simplifiedGameStates: number
    MVPEvent: number
  }

  export type MVPWorldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mvpLocations?: boolean | MVPWorldCountOutputTypeCountMvpLocationsArgs
    mvpLoreFragments?: boolean | MVPWorldCountOutputTypeCountMvpLoreFragmentsArgs
    mvpCharacterWorldStates?: boolean | MVPWorldCountOutputTypeCountMvpCharacterWorldStatesArgs
    simplifiedGameStates?: boolean | MVPWorldCountOutputTypeCountSimplifiedGameStatesArgs
    MVPEvent?: boolean | MVPWorldCountOutputTypeCountMVPEventArgs
  }

  // Custom InputTypes
  /**
   * MVPWorldCountOutputType without action
   */
  export type MVPWorldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorldCountOutputType
     */
    select?: MVPWorldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MVPWorldCountOutputType without action
   */
  export type MVPWorldCountOutputTypeCountMvpLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPLocationWhereInput
  }

  /**
   * MVPWorldCountOutputType without action
   */
  export type MVPWorldCountOutputTypeCountMvpLoreFragmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPLoreFragmentWhereInput
  }

  /**
   * MVPWorldCountOutputType without action
   */
  export type MVPWorldCountOutputTypeCountMvpCharacterWorldStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPCharacterWorldStateWhereInput
  }

  /**
   * MVPWorldCountOutputType without action
   */
  export type MVPWorldCountOutputTypeCountSimplifiedGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimplifiedGameStateWhereInput
  }

  /**
   * MVPWorldCountOutputType without action
   */
  export type MVPWorldCountOutputTypeCountMVPEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPEventWhereInput
  }


  /**
   * Count Type MVPLocationCountOutputType
   */

  export type MVPLocationCountOutputType = {
    MVPEvent: number
  }

  export type MVPLocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    MVPEvent?: boolean | MVPLocationCountOutputTypeCountMVPEventArgs
  }

  // Custom InputTypes
  /**
   * MVPLocationCountOutputType without action
   */
  export type MVPLocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocationCountOutputType
     */
    select?: MVPLocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MVPLocationCountOutputType without action
   */
  export type MVPLocationCountOutputTypeCountMVPEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPEventWhereInput
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
    password: string | null
    name: string | null
    createdAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
    emailVerified: boolean | null
    verificationToken: string | null
    verificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    lastLogin: Date | null
    isActive: boolean | null
    emailVerified: boolean | null
    verificationToken: string | null
    verificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    lastLogin: number
    isActive: number
    preferences: number
    emailVerified: number
    verificationToken: number
    verificationTokenExpires: number
    resetPasswordToken: number
    resetPasswordExpires: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
    emailVerified?: true
    verificationToken?: true
    verificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
    emailVerified?: true
    verificationToken?: true
    verificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    lastLogin?: true
    isActive?: true
    preferences?: true
    emailVerified?: true
    verificationToken?: true
    verificationTokenExpires?: true
    resetPasswordToken?: true
    resetPasswordExpires?: true
    role?: true
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
    password: string | null
    name: string | null
    createdAt: Date
    lastLogin: Date | null
    isActive: boolean
    preferences: JsonValue
    emailVerified: boolean
    verificationToken: string | null
    verificationTokenExpires: Date | null
    resetPasswordToken: string | null
    resetPasswordExpires: Date | null
    role: string
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
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    role?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    mvpCharacters?: boolean | User$mvpCharactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    lastLogin?: boolean
    isActive?: boolean
    preferences?: boolean
    emailVerified?: boolean
    verificationToken?: boolean
    verificationTokenExpires?: boolean
    resetPasswordToken?: boolean
    resetPasswordExpires?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "lastLogin" | "isActive" | "preferences" | "emailVerified" | "verificationToken" | "verificationTokenExpires" | "resetPasswordToken" | "resetPasswordExpires" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    mvpCharacters?: boolean | User$mvpCharactersArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      profile: Prisma.$UserProfilePayload<ExtArgs> | null
      mvpCharacters: Prisma.$MVPCharacterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string | null
      createdAt: Date
      lastLogin: Date | null
      isActive: boolean
      preferences: Prisma.JsonValue
      emailVerified: boolean
      verificationToken: string | null
      verificationTokenExpires: Date | null
      resetPasswordToken: string | null
      resetPasswordExpires: Date | null
      role: string
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
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mvpCharacters<T extends User$mvpCharactersArgs<ExtArgs> = {}>(args?: Subset<T, User$mvpCharactersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly preferences: FieldRef<"User", 'Json'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly verificationToken: FieldRef<"User", 'String'>
    readonly verificationTokenExpires: FieldRef<"User", 'DateTime'>
    readonly resetPasswordToken: FieldRef<"User", 'String'>
    readonly resetPasswordExpires: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String'>
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
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    where?: UserProfileWhereInput
  }

  /**
   * User.mvpCharacters
   */
  export type User$mvpCharactersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    where?: MVPCharacterWhereInput
    orderBy?: MVPCharacterOrderByWithRelationInput | MVPCharacterOrderByWithRelationInput[]
    cursor?: MVPCharacterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPCharacterScalarFieldEnum | MVPCharacterScalarFieldEnum[]
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
   * Model UserProfile
   */

  export type AggregateUserProfile = {
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  export type UserProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    avatarUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    avatarUrl: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    avatarUrl: number
    bio: number
    preferences: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    avatarUrl?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    avatarUrl?: true
    bio?: true
    preferences?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfile to aggregate.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProfiles
    **/
    _count?: true | UserProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProfileMaxAggregateInputType
  }

  export type GetUserProfileAggregateType<T extends UserProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProfile[P]>
      : GetScalarType<T[P], AggregateUserProfile[P]>
  }




  export type UserProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProfileWhereInput
    orderBy?: UserProfileOrderByWithAggregationInput | UserProfileOrderByWithAggregationInput[]
    by: UserProfileScalarFieldEnum[] | UserProfileScalarFieldEnum
    having?: UserProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProfileCountAggregateInputType | true
    _min?: UserProfileMinAggregateInputType
    _max?: UserProfileMaxAggregateInputType
  }

  export type UserProfileGroupByOutputType = {
    id: string
    userId: string
    name: string
    avatarUrl: string | null
    bio: string | null
    preferences: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: UserProfileCountAggregateOutputType | null
    _min: UserProfileMinAggregateOutputType | null
    _max: UserProfileMaxAggregateOutputType | null
  }

  type GetUserProfileGroupByPayload<T extends UserProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
            : GetScalarType<T[P], UserProfileGroupByOutputType[P]>
        }
      >
    >


  export type UserProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProfile"]>

  export type UserProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    avatarUrl?: boolean
    bio?: boolean
    preferences?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "avatarUrl" | "bio" | "preferences" | "createdAt" | "updatedAt", ExtArgs["result"]["userProfile"]>
  export type UserProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      avatarUrl: string | null
      bio: string | null
      preferences: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userProfile"]>
    composites: {}
  }

  type UserProfileGetPayload<S extends boolean | null | undefined | UserProfileDefaultArgs> = $Result.GetResult<Prisma.$UserProfilePayload, S>

  type UserProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProfileCountAggregateInputType | true
    }

  export interface UserProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProfile'], meta: { name: 'UserProfile' } }
    /**
     * Find zero or one UserProfile that matches the filter.
     * @param {UserProfileFindUniqueArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProfileFindUniqueArgs>(args: SelectSubset<T, UserProfileFindUniqueArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProfileFindUniqueOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProfileFindFirstArgs>(args?: SelectSubset<T, UserProfileFindFirstArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindFirstOrThrowArgs} args - Arguments to find a UserProfile
     * @example
     * // Get one UserProfile
     * const userProfile = await prisma.userProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProfiles
     * const userProfiles = await prisma.userProfile.findMany()
     * 
     * // Get first 10 UserProfiles
     * const userProfiles = await prisma.userProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProfileFindManyArgs>(args?: SelectSubset<T, UserProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProfile.
     * @param {UserProfileCreateArgs} args - Arguments to create a UserProfile.
     * @example
     * // Create one UserProfile
     * const UserProfile = await prisma.userProfile.create({
     *   data: {
     *     // ... data to create a UserProfile
     *   }
     * })
     * 
     */
    create<T extends UserProfileCreateArgs>(args: SelectSubset<T, UserProfileCreateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProfiles.
     * @param {UserProfileCreateManyArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProfileCreateManyArgs>(args?: SelectSubset<T, UserProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProfiles and returns the data saved in the database.
     * @param {UserProfileCreateManyAndReturnArgs} args - Arguments to create many UserProfiles.
     * @example
     * // Create many UserProfiles
     * const userProfile = await prisma.userProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProfile.
     * @param {UserProfileDeleteArgs} args - Arguments to delete one UserProfile.
     * @example
     * // Delete one UserProfile
     * const UserProfile = await prisma.userProfile.delete({
     *   where: {
     *     // ... filter to delete one UserProfile
     *   }
     * })
     * 
     */
    delete<T extends UserProfileDeleteArgs>(args: SelectSubset<T, UserProfileDeleteArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProfile.
     * @param {UserProfileUpdateArgs} args - Arguments to update one UserProfile.
     * @example
     * // Update one UserProfile
     * const userProfile = await prisma.userProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProfileUpdateArgs>(args: SelectSubset<T, UserProfileUpdateArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProfiles.
     * @param {UserProfileDeleteManyArgs} args - Arguments to filter UserProfiles to delete.
     * @example
     * // Delete a few UserProfiles
     * const { count } = await prisma.userProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProfileDeleteManyArgs>(args?: SelectSubset<T, UserProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProfileUpdateManyArgs>(args: SelectSubset<T, UserProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProfiles and returns the data updated in the database.
     * @param {UserProfileUpdateManyAndReturnArgs} args - Arguments to update many UserProfiles.
     * @example
     * // Update many UserProfiles
     * const userProfile = await prisma.userProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProfiles and only return the `id`
     * const userProfileWithIdOnly = await prisma.userProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProfile.
     * @param {UserProfileUpsertArgs} args - Arguments to update or create a UserProfile.
     * @example
     * // Update or create a UserProfile
     * const userProfile = await prisma.userProfile.upsert({
     *   create: {
     *     // ... data to create a UserProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProfile we want to update
     *   }
     * })
     */
    upsert<T extends UserProfileUpsertArgs>(args: SelectSubset<T, UserProfileUpsertArgs<ExtArgs>>): Prisma__UserProfileClient<$Result.GetResult<Prisma.$UserProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileCountArgs} args - Arguments to filter UserProfiles to count.
     * @example
     * // Count the number of UserProfiles
     * const count = await prisma.userProfile.count({
     *   where: {
     *     // ... the filter for the UserProfiles we want to count
     *   }
     * })
    **/
    count<T extends UserProfileCountArgs>(
      args?: Subset<T, UserProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProfileAggregateArgs>(args: Subset<T, UserProfileAggregateArgs>): Prisma.PrismaPromise<GetUserProfileAggregateType<T>>

    /**
     * Group by UserProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProfileGroupByArgs} args - Group by arguments.
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
      T extends UserProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProfileGroupByArgs['orderBy'] }
        : { orderBy?: UserProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProfile model
   */
  readonly fields: UserProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProfile model
   */
  interface UserProfileFieldRefs {
    readonly id: FieldRef<"UserProfile", 'String'>
    readonly userId: FieldRef<"UserProfile", 'String'>
    readonly name: FieldRef<"UserProfile", 'String'>
    readonly avatarUrl: FieldRef<"UserProfile", 'String'>
    readonly bio: FieldRef<"UserProfile", 'String'>
    readonly preferences: FieldRef<"UserProfile", 'Json'>
    readonly createdAt: FieldRef<"UserProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"UserProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserProfile findUnique
   */
  export type UserProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findUniqueOrThrow
   */
  export type UserProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile findFirst
   */
  export type UserProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findFirstOrThrow
   */
  export type UserProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfile to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProfiles.
     */
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile findMany
   */
  export type UserProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter, which UserProfiles to fetch.
     */
    where?: UserProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProfiles to fetch.
     */
    orderBy?: UserProfileOrderByWithRelationInput | UserProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProfiles.
     */
    cursor?: UserProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProfiles.
     */
    skip?: number
    distinct?: UserProfileScalarFieldEnum | UserProfileScalarFieldEnum[]
  }

  /**
   * UserProfile create
   */
  export type UserProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProfile.
     */
    data: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
  }

  /**
   * UserProfile createMany
   */
  export type UserProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProfile createManyAndReturn
   */
  export type UserProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to create many UserProfiles.
     */
    data: UserProfileCreateManyInput | UserProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile update
   */
  export type UserProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProfile.
     */
    data: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
    /**
     * Choose, which UserProfile to update.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile updateMany
   */
  export type UserProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
  }

  /**
   * UserProfile updateManyAndReturn
   */
  export type UserProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * The data used to update UserProfiles.
     */
    data: XOR<UserProfileUpdateManyMutationInput, UserProfileUncheckedUpdateManyInput>
    /**
     * Filter which UserProfiles to update
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProfile upsert
   */
  export type UserProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProfile to update in case it exists.
     */
    where: UserProfileWhereUniqueInput
    /**
     * In case the UserProfile found by the `where` argument doesn't exist, create a new UserProfile with this data.
     */
    create: XOR<UserProfileCreateInput, UserProfileUncheckedCreateInput>
    /**
     * In case the UserProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProfileUpdateInput, UserProfileUncheckedUpdateInput>
  }

  /**
   * UserProfile delete
   */
  export type UserProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
    /**
     * Filter which UserProfile to delete.
     */
    where: UserProfileWhereUniqueInput
  }

  /**
   * UserProfile deleteMany
   */
  export type UserProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProfiles to delete
     */
    where?: UserProfileWhereInput
    /**
     * Limit how many UserProfiles to delete.
     */
    limit?: number
  }

  /**
   * UserProfile without action
   */
  export type UserProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProfile
     */
    select?: UserProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProfile
     */
    omit?: UserProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProfileInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires: Date | null
    userAgent: string | null
    ip: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastActive: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expires: Date | null
    userAgent: string | null
    ip: string | null
    createdAt: Date | null
    updatedAt: Date | null
    lastActive: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expires: number
    userAgent: number
    ip: number
    createdAt: number
    updatedAt: number
    lastActive: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    userAgent?: true
    ip?: true
    createdAt?: true
    updatedAt?: true
    lastActive?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    userAgent?: true
    ip?: true
    createdAt?: true
    updatedAt?: true
    lastActive?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expires?: true
    userAgent?: true
    ip?: true
    createdAt?: true
    updatedAt?: true
    lastActive?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string | null
    expires: Date
    userAgent: string | null
    ip: string | null
    createdAt: Date
    updatedAt: Date
    lastActive: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    userAgent?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    userAgent?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    userAgent?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expires?: boolean
    userAgent?: boolean
    ip?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    lastActive?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expires" | "userAgent" | "ip" | "createdAt" | "updatedAt" | "lastActive", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string | null
      expires: Date
      userAgent: string | null
      ip: string | null
      createdAt: Date
      updatedAt: Date
      lastActive: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly ip: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly lastActive: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model MVPCharacter
   */

  export type AggregateMVPCharacter = {
    _count: MVPCharacterCountAggregateOutputType | null
    _min: MVPCharacterMinAggregateOutputType | null
    _max: MVPCharacterMaxAggregateOutputType | null
  }

  export type MVPCharacterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    backstory: string | null
    appearanceDescription: string | null
    createdAt: Date | null
    lastPlayedAt: Date | null
    isActive: boolean | null
  }

  export type MVPCharacterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    backstory: string | null
    appearanceDescription: string | null
    createdAt: Date | null
    lastPlayedAt: Date | null
    isActive: boolean | null
  }

  export type MVPCharacterCountAggregateOutputType = {
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


  export type MVPCharacterMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    backstory?: true
    appearanceDescription?: true
    createdAt?: true
    lastPlayedAt?: true
    isActive?: true
  }

  export type MVPCharacterMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    backstory?: true
    appearanceDescription?: true
    createdAt?: true
    lastPlayedAt?: true
    isActive?: true
  }

  export type MVPCharacterCountAggregateInputType = {
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

  export type MVPCharacterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPCharacter to aggregate.
     */
    where?: MVPCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacters to fetch.
     */
    orderBy?: MVPCharacterOrderByWithRelationInput | MVPCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MVPCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MVPCharacters
    **/
    _count?: true | MVPCharacterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MVPCharacterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MVPCharacterMaxAggregateInputType
  }

  export type GetMVPCharacterAggregateType<T extends MVPCharacterAggregateArgs> = {
        [P in keyof T & keyof AggregateMVPCharacter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMVPCharacter[P]>
      : GetScalarType<T[P], AggregateMVPCharacter[P]>
  }




  export type MVPCharacterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPCharacterWhereInput
    orderBy?: MVPCharacterOrderByWithAggregationInput | MVPCharacterOrderByWithAggregationInput[]
    by: MVPCharacterScalarFieldEnum[] | MVPCharacterScalarFieldEnum
    having?: MVPCharacterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MVPCharacterCountAggregateInputType | true
    _min?: MVPCharacterMinAggregateInputType
    _max?: MVPCharacterMaxAggregateInputType
  }

  export type MVPCharacterGroupByOutputType = {
    id: string
    userId: string
    name: string
    backstory: string | null
    appearanceDescription: string | null
    personalityTraits: JsonValue
    createdAt: Date
    lastPlayedAt: Date | null
    isActive: boolean
    _count: MVPCharacterCountAggregateOutputType | null
    _min: MVPCharacterMinAggregateOutputType | null
    _max: MVPCharacterMaxAggregateOutputType | null
  }

  type GetMVPCharacterGroupByPayload<T extends MVPCharacterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MVPCharacterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MVPCharacterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MVPCharacterGroupByOutputType[P]>
            : GetScalarType<T[P], MVPCharacterGroupByOutputType[P]>
        }
      >
    >


  export type MVPCharacterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    mvpCharacterWorldStates?: boolean | MVPCharacter$mvpCharacterWorldStatesArgs<ExtArgs>
    simplifiedGameStates?: boolean | MVPCharacter$simplifiedGameStatesArgs<ExtArgs>
    _count?: boolean | MVPCharacterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPCharacter"]>

  export type MVPCharacterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["mVPCharacter"]>

  export type MVPCharacterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
  }, ExtArgs["result"]["mVPCharacter"]>

  export type MVPCharacterSelectScalar = {
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

  export type MVPCharacterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "backstory" | "appearanceDescription" | "personalityTraits" | "createdAt" | "lastPlayedAt" | "isActive", ExtArgs["result"]["mVPCharacter"]>
  export type MVPCharacterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    mvpCharacterWorldStates?: boolean | MVPCharacter$mvpCharacterWorldStatesArgs<ExtArgs>
    simplifiedGameStates?: boolean | MVPCharacter$simplifiedGameStatesArgs<ExtArgs>
    _count?: boolean | MVPCharacterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MVPCharacterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MVPCharacterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MVPCharacterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MVPCharacter"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      mvpCharacterWorldStates: Prisma.$MVPCharacterWorldStatePayload<ExtArgs>[]
      simplifiedGameStates: Prisma.$SimplifiedGameStatePayload<ExtArgs>[]
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
    }, ExtArgs["result"]["mVPCharacter"]>
    composites: {}
  }

  type MVPCharacterGetPayload<S extends boolean | null | undefined | MVPCharacterDefaultArgs> = $Result.GetResult<Prisma.$MVPCharacterPayload, S>

  type MVPCharacterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MVPCharacterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MVPCharacterCountAggregateInputType | true
    }

  export interface MVPCharacterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MVPCharacter'], meta: { name: 'MVPCharacter' } }
    /**
     * Find zero or one MVPCharacter that matches the filter.
     * @param {MVPCharacterFindUniqueArgs} args - Arguments to find a MVPCharacter
     * @example
     * // Get one MVPCharacter
     * const mVPCharacter = await prisma.mVPCharacter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MVPCharacterFindUniqueArgs>(args: SelectSubset<T, MVPCharacterFindUniqueArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MVPCharacter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MVPCharacterFindUniqueOrThrowArgs} args - Arguments to find a MVPCharacter
     * @example
     * // Get one MVPCharacter
     * const mVPCharacter = await prisma.mVPCharacter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MVPCharacterFindUniqueOrThrowArgs>(args: SelectSubset<T, MVPCharacterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPCharacter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterFindFirstArgs} args - Arguments to find a MVPCharacter
     * @example
     * // Get one MVPCharacter
     * const mVPCharacter = await prisma.mVPCharacter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MVPCharacterFindFirstArgs>(args?: SelectSubset<T, MVPCharacterFindFirstArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPCharacter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterFindFirstOrThrowArgs} args - Arguments to find a MVPCharacter
     * @example
     * // Get one MVPCharacter
     * const mVPCharacter = await prisma.mVPCharacter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MVPCharacterFindFirstOrThrowArgs>(args?: SelectSubset<T, MVPCharacterFindFirstOrThrowArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MVPCharacters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MVPCharacters
     * const mVPCharacters = await prisma.mVPCharacter.findMany()
     * 
     * // Get first 10 MVPCharacters
     * const mVPCharacters = await prisma.mVPCharacter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mVPCharacterWithIdOnly = await prisma.mVPCharacter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MVPCharacterFindManyArgs>(args?: SelectSubset<T, MVPCharacterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MVPCharacter.
     * @param {MVPCharacterCreateArgs} args - Arguments to create a MVPCharacter.
     * @example
     * // Create one MVPCharacter
     * const MVPCharacter = await prisma.mVPCharacter.create({
     *   data: {
     *     // ... data to create a MVPCharacter
     *   }
     * })
     * 
     */
    create<T extends MVPCharacterCreateArgs>(args: SelectSubset<T, MVPCharacterCreateArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MVPCharacters.
     * @param {MVPCharacterCreateManyArgs} args - Arguments to create many MVPCharacters.
     * @example
     * // Create many MVPCharacters
     * const mVPCharacter = await prisma.mVPCharacter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MVPCharacterCreateManyArgs>(args?: SelectSubset<T, MVPCharacterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MVPCharacters and returns the data saved in the database.
     * @param {MVPCharacterCreateManyAndReturnArgs} args - Arguments to create many MVPCharacters.
     * @example
     * // Create many MVPCharacters
     * const mVPCharacter = await prisma.mVPCharacter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MVPCharacters and only return the `id`
     * const mVPCharacterWithIdOnly = await prisma.mVPCharacter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MVPCharacterCreateManyAndReturnArgs>(args?: SelectSubset<T, MVPCharacterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MVPCharacter.
     * @param {MVPCharacterDeleteArgs} args - Arguments to delete one MVPCharacter.
     * @example
     * // Delete one MVPCharacter
     * const MVPCharacter = await prisma.mVPCharacter.delete({
     *   where: {
     *     // ... filter to delete one MVPCharacter
     *   }
     * })
     * 
     */
    delete<T extends MVPCharacterDeleteArgs>(args: SelectSubset<T, MVPCharacterDeleteArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MVPCharacter.
     * @param {MVPCharacterUpdateArgs} args - Arguments to update one MVPCharacter.
     * @example
     * // Update one MVPCharacter
     * const mVPCharacter = await prisma.mVPCharacter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MVPCharacterUpdateArgs>(args: SelectSubset<T, MVPCharacterUpdateArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MVPCharacters.
     * @param {MVPCharacterDeleteManyArgs} args - Arguments to filter MVPCharacters to delete.
     * @example
     * // Delete a few MVPCharacters
     * const { count } = await prisma.mVPCharacter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MVPCharacterDeleteManyArgs>(args?: SelectSubset<T, MVPCharacterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MVPCharacters
     * const mVPCharacter = await prisma.mVPCharacter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MVPCharacterUpdateManyArgs>(args: SelectSubset<T, MVPCharacterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPCharacters and returns the data updated in the database.
     * @param {MVPCharacterUpdateManyAndReturnArgs} args - Arguments to update many MVPCharacters.
     * @example
     * // Update many MVPCharacters
     * const mVPCharacter = await prisma.mVPCharacter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MVPCharacters and only return the `id`
     * const mVPCharacterWithIdOnly = await prisma.mVPCharacter.updateManyAndReturn({
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
    updateManyAndReturn<T extends MVPCharacterUpdateManyAndReturnArgs>(args: SelectSubset<T, MVPCharacterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MVPCharacter.
     * @param {MVPCharacterUpsertArgs} args - Arguments to update or create a MVPCharacter.
     * @example
     * // Update or create a MVPCharacter
     * const mVPCharacter = await prisma.mVPCharacter.upsert({
     *   create: {
     *     // ... data to create a MVPCharacter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MVPCharacter we want to update
     *   }
     * })
     */
    upsert<T extends MVPCharacterUpsertArgs>(args: SelectSubset<T, MVPCharacterUpsertArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MVPCharacters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterCountArgs} args - Arguments to filter MVPCharacters to count.
     * @example
     * // Count the number of MVPCharacters
     * const count = await prisma.mVPCharacter.count({
     *   where: {
     *     // ... the filter for the MVPCharacters we want to count
     *   }
     * })
    **/
    count<T extends MVPCharacterCountArgs>(
      args?: Subset<T, MVPCharacterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MVPCharacterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MVPCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MVPCharacterAggregateArgs>(args: Subset<T, MVPCharacterAggregateArgs>): Prisma.PrismaPromise<GetMVPCharacterAggregateType<T>>

    /**
     * Group by MVPCharacter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterGroupByArgs} args - Group by arguments.
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
      T extends MVPCharacterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MVPCharacterGroupByArgs['orderBy'] }
        : { orderBy?: MVPCharacterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MVPCharacterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMVPCharacterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MVPCharacter model
   */
  readonly fields: MVPCharacterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MVPCharacter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MVPCharacterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mvpCharacterWorldStates<T extends MVPCharacter$mvpCharacterWorldStatesArgs<ExtArgs> = {}>(args?: Subset<T, MVPCharacter$mvpCharacterWorldStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    simplifiedGameStates<T extends MVPCharacter$simplifiedGameStatesArgs<ExtArgs> = {}>(args?: Subset<T, MVPCharacter$simplifiedGameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MVPCharacter model
   */
  interface MVPCharacterFieldRefs {
    readonly id: FieldRef<"MVPCharacter", 'String'>
    readonly userId: FieldRef<"MVPCharacter", 'String'>
    readonly name: FieldRef<"MVPCharacter", 'String'>
    readonly backstory: FieldRef<"MVPCharacter", 'String'>
    readonly appearanceDescription: FieldRef<"MVPCharacter", 'String'>
    readonly personalityTraits: FieldRef<"MVPCharacter", 'Json'>
    readonly createdAt: FieldRef<"MVPCharacter", 'DateTime'>
    readonly lastPlayedAt: FieldRef<"MVPCharacter", 'DateTime'>
    readonly isActive: FieldRef<"MVPCharacter", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MVPCharacter findUnique
   */
  export type MVPCharacterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacter to fetch.
     */
    where: MVPCharacterWhereUniqueInput
  }

  /**
   * MVPCharacter findUniqueOrThrow
   */
  export type MVPCharacterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacter to fetch.
     */
    where: MVPCharacterWhereUniqueInput
  }

  /**
   * MVPCharacter findFirst
   */
  export type MVPCharacterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacter to fetch.
     */
    where?: MVPCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacters to fetch.
     */
    orderBy?: MVPCharacterOrderByWithRelationInput | MVPCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPCharacters.
     */
    cursor?: MVPCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPCharacters.
     */
    distinct?: MVPCharacterScalarFieldEnum | MVPCharacterScalarFieldEnum[]
  }

  /**
   * MVPCharacter findFirstOrThrow
   */
  export type MVPCharacterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacter to fetch.
     */
    where?: MVPCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacters to fetch.
     */
    orderBy?: MVPCharacterOrderByWithRelationInput | MVPCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPCharacters.
     */
    cursor?: MVPCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPCharacters.
     */
    distinct?: MVPCharacterScalarFieldEnum | MVPCharacterScalarFieldEnum[]
  }

  /**
   * MVPCharacter findMany
   */
  export type MVPCharacterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacters to fetch.
     */
    where?: MVPCharacterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacters to fetch.
     */
    orderBy?: MVPCharacterOrderByWithRelationInput | MVPCharacterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MVPCharacters.
     */
    cursor?: MVPCharacterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacters.
     */
    skip?: number
    distinct?: MVPCharacterScalarFieldEnum | MVPCharacterScalarFieldEnum[]
  }

  /**
   * MVPCharacter create
   */
  export type MVPCharacterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * The data needed to create a MVPCharacter.
     */
    data: XOR<MVPCharacterCreateInput, MVPCharacterUncheckedCreateInput>
  }

  /**
   * MVPCharacter createMany
   */
  export type MVPCharacterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MVPCharacters.
     */
    data: MVPCharacterCreateManyInput | MVPCharacterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPCharacter createManyAndReturn
   */
  export type MVPCharacterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * The data used to create many MVPCharacters.
     */
    data: MVPCharacterCreateManyInput | MVPCharacterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPCharacter update
   */
  export type MVPCharacterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * The data needed to update a MVPCharacter.
     */
    data: XOR<MVPCharacterUpdateInput, MVPCharacterUncheckedUpdateInput>
    /**
     * Choose, which MVPCharacter to update.
     */
    where: MVPCharacterWhereUniqueInput
  }

  /**
   * MVPCharacter updateMany
   */
  export type MVPCharacterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MVPCharacters.
     */
    data: XOR<MVPCharacterUpdateManyMutationInput, MVPCharacterUncheckedUpdateManyInput>
    /**
     * Filter which MVPCharacters to update
     */
    where?: MVPCharacterWhereInput
    /**
     * Limit how many MVPCharacters to update.
     */
    limit?: number
  }

  /**
   * MVPCharacter updateManyAndReturn
   */
  export type MVPCharacterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * The data used to update MVPCharacters.
     */
    data: XOR<MVPCharacterUpdateManyMutationInput, MVPCharacterUncheckedUpdateManyInput>
    /**
     * Filter which MVPCharacters to update
     */
    where?: MVPCharacterWhereInput
    /**
     * Limit how many MVPCharacters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPCharacter upsert
   */
  export type MVPCharacterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * The filter to search for the MVPCharacter to update in case it exists.
     */
    where: MVPCharacterWhereUniqueInput
    /**
     * In case the MVPCharacter found by the `where` argument doesn't exist, create a new MVPCharacter with this data.
     */
    create: XOR<MVPCharacterCreateInput, MVPCharacterUncheckedCreateInput>
    /**
     * In case the MVPCharacter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MVPCharacterUpdateInput, MVPCharacterUncheckedUpdateInput>
  }

  /**
   * MVPCharacter delete
   */
  export type MVPCharacterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
    /**
     * Filter which MVPCharacter to delete.
     */
    where: MVPCharacterWhereUniqueInput
  }

  /**
   * MVPCharacter deleteMany
   */
  export type MVPCharacterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPCharacters to delete
     */
    where?: MVPCharacterWhereInput
    /**
     * Limit how many MVPCharacters to delete.
     */
    limit?: number
  }

  /**
   * MVPCharacter.mvpCharacterWorldStates
   */
  export type MVPCharacter$mvpCharacterWorldStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    where?: MVPCharacterWorldStateWhereInput
    orderBy?: MVPCharacterWorldStateOrderByWithRelationInput | MVPCharacterWorldStateOrderByWithRelationInput[]
    cursor?: MVPCharacterWorldStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPCharacterWorldStateScalarFieldEnum | MVPCharacterWorldStateScalarFieldEnum[]
  }

  /**
   * MVPCharacter.simplifiedGameStates
   */
  export type MVPCharacter$simplifiedGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    where?: SimplifiedGameStateWhereInput
    orderBy?: SimplifiedGameStateOrderByWithRelationInput | SimplifiedGameStateOrderByWithRelationInput[]
    cursor?: SimplifiedGameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimplifiedGameStateScalarFieldEnum | SimplifiedGameStateScalarFieldEnum[]
  }

  /**
   * MVPCharacter without action
   */
  export type MVPCharacterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacter
     */
    select?: MVPCharacterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacter
     */
    omit?: MVPCharacterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterInclude<ExtArgs> | null
  }


  /**
   * Model MVPWorld
   */

  export type AggregateMVPWorld = {
    _count: MVPWorldCountAggregateOutputType | null
    _min: MVPWorldMinAggregateOutputType | null
    _max: MVPWorldMaxAggregateOutputType | null
  }

  export type MVPWorldMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    thumbnailUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MVPWorldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    thumbnailUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type MVPWorldCountAggregateOutputType = {
    id: number
    name: number
    description: number
    thumbnailUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type MVPWorldMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    thumbnailUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type MVPWorldMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    thumbnailUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type MVPWorldCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    thumbnailUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type MVPWorldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPWorld to aggregate.
     */
    where?: MVPWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPWorlds to fetch.
     */
    orderBy?: MVPWorldOrderByWithRelationInput | MVPWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MVPWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MVPWorlds
    **/
    _count?: true | MVPWorldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MVPWorldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MVPWorldMaxAggregateInputType
  }

  export type GetMVPWorldAggregateType<T extends MVPWorldAggregateArgs> = {
        [P in keyof T & keyof AggregateMVPWorld]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMVPWorld[P]>
      : GetScalarType<T[P], AggregateMVPWorld[P]>
  }




  export type MVPWorldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPWorldWhereInput
    orderBy?: MVPWorldOrderByWithAggregationInput | MVPWorldOrderByWithAggregationInput[]
    by: MVPWorldScalarFieldEnum[] | MVPWorldScalarFieldEnum
    having?: MVPWorldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MVPWorldCountAggregateInputType | true
    _min?: MVPWorldMinAggregateInputType
    _max?: MVPWorldMaxAggregateInputType
  }

  export type MVPWorldGroupByOutputType = {
    id: string
    name: string
    description: string | null
    thumbnailUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: MVPWorldCountAggregateOutputType | null
    _min: MVPWorldMinAggregateOutputType | null
    _max: MVPWorldMaxAggregateOutputType | null
  }

  type GetMVPWorldGroupByPayload<T extends MVPWorldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MVPWorldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MVPWorldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MVPWorldGroupByOutputType[P]>
            : GetScalarType<T[P], MVPWorldGroupByOutputType[P]>
        }
      >
    >


  export type MVPWorldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    mvpLocations?: boolean | MVPWorld$mvpLocationsArgs<ExtArgs>
    mvpLoreFragments?: boolean | MVPWorld$mvpLoreFragmentsArgs<ExtArgs>
    mvpCharacterWorldStates?: boolean | MVPWorld$mvpCharacterWorldStatesArgs<ExtArgs>
    simplifiedGameStates?: boolean | MVPWorld$simplifiedGameStatesArgs<ExtArgs>
    MVPEvent?: boolean | MVPWorld$MVPEventArgs<ExtArgs>
    _count?: boolean | MVPWorldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPWorld"]>

  export type MVPWorldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mVPWorld"]>

  export type MVPWorldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["mVPWorld"]>

  export type MVPWorldSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type MVPWorldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "thumbnailUrl" | "isActive" | "createdAt", ExtArgs["result"]["mVPWorld"]>
  export type MVPWorldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mvpLocations?: boolean | MVPWorld$mvpLocationsArgs<ExtArgs>
    mvpLoreFragments?: boolean | MVPWorld$mvpLoreFragmentsArgs<ExtArgs>
    mvpCharacterWorldStates?: boolean | MVPWorld$mvpCharacterWorldStatesArgs<ExtArgs>
    simplifiedGameStates?: boolean | MVPWorld$simplifiedGameStatesArgs<ExtArgs>
    MVPEvent?: boolean | MVPWorld$MVPEventArgs<ExtArgs>
    _count?: boolean | MVPWorldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MVPWorldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MVPWorldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MVPWorldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MVPWorld"
    objects: {
      mvpLocations: Prisma.$MVPLocationPayload<ExtArgs>[]
      mvpLoreFragments: Prisma.$MVPLoreFragmentPayload<ExtArgs>[]
      mvpCharacterWorldStates: Prisma.$MVPCharacterWorldStatePayload<ExtArgs>[]
      simplifiedGameStates: Prisma.$SimplifiedGameStatePayload<ExtArgs>[]
      MVPEvent: Prisma.$MVPEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      thumbnailUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["mVPWorld"]>
    composites: {}
  }

  type MVPWorldGetPayload<S extends boolean | null | undefined | MVPWorldDefaultArgs> = $Result.GetResult<Prisma.$MVPWorldPayload, S>

  type MVPWorldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MVPWorldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MVPWorldCountAggregateInputType | true
    }

  export interface MVPWorldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MVPWorld'], meta: { name: 'MVPWorld' } }
    /**
     * Find zero or one MVPWorld that matches the filter.
     * @param {MVPWorldFindUniqueArgs} args - Arguments to find a MVPWorld
     * @example
     * // Get one MVPWorld
     * const mVPWorld = await prisma.mVPWorld.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MVPWorldFindUniqueArgs>(args: SelectSubset<T, MVPWorldFindUniqueArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MVPWorld that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MVPWorldFindUniqueOrThrowArgs} args - Arguments to find a MVPWorld
     * @example
     * // Get one MVPWorld
     * const mVPWorld = await prisma.mVPWorld.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MVPWorldFindUniqueOrThrowArgs>(args: SelectSubset<T, MVPWorldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPWorld that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldFindFirstArgs} args - Arguments to find a MVPWorld
     * @example
     * // Get one MVPWorld
     * const mVPWorld = await prisma.mVPWorld.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MVPWorldFindFirstArgs>(args?: SelectSubset<T, MVPWorldFindFirstArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPWorld that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldFindFirstOrThrowArgs} args - Arguments to find a MVPWorld
     * @example
     * // Get one MVPWorld
     * const mVPWorld = await prisma.mVPWorld.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MVPWorldFindFirstOrThrowArgs>(args?: SelectSubset<T, MVPWorldFindFirstOrThrowArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MVPWorlds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MVPWorlds
     * const mVPWorlds = await prisma.mVPWorld.findMany()
     * 
     * // Get first 10 MVPWorlds
     * const mVPWorlds = await prisma.mVPWorld.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mVPWorldWithIdOnly = await prisma.mVPWorld.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MVPWorldFindManyArgs>(args?: SelectSubset<T, MVPWorldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MVPWorld.
     * @param {MVPWorldCreateArgs} args - Arguments to create a MVPWorld.
     * @example
     * // Create one MVPWorld
     * const MVPWorld = await prisma.mVPWorld.create({
     *   data: {
     *     // ... data to create a MVPWorld
     *   }
     * })
     * 
     */
    create<T extends MVPWorldCreateArgs>(args: SelectSubset<T, MVPWorldCreateArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MVPWorlds.
     * @param {MVPWorldCreateManyArgs} args - Arguments to create many MVPWorlds.
     * @example
     * // Create many MVPWorlds
     * const mVPWorld = await prisma.mVPWorld.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MVPWorldCreateManyArgs>(args?: SelectSubset<T, MVPWorldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MVPWorlds and returns the data saved in the database.
     * @param {MVPWorldCreateManyAndReturnArgs} args - Arguments to create many MVPWorlds.
     * @example
     * // Create many MVPWorlds
     * const mVPWorld = await prisma.mVPWorld.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MVPWorlds and only return the `id`
     * const mVPWorldWithIdOnly = await prisma.mVPWorld.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MVPWorldCreateManyAndReturnArgs>(args?: SelectSubset<T, MVPWorldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MVPWorld.
     * @param {MVPWorldDeleteArgs} args - Arguments to delete one MVPWorld.
     * @example
     * // Delete one MVPWorld
     * const MVPWorld = await prisma.mVPWorld.delete({
     *   where: {
     *     // ... filter to delete one MVPWorld
     *   }
     * })
     * 
     */
    delete<T extends MVPWorldDeleteArgs>(args: SelectSubset<T, MVPWorldDeleteArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MVPWorld.
     * @param {MVPWorldUpdateArgs} args - Arguments to update one MVPWorld.
     * @example
     * // Update one MVPWorld
     * const mVPWorld = await prisma.mVPWorld.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MVPWorldUpdateArgs>(args: SelectSubset<T, MVPWorldUpdateArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MVPWorlds.
     * @param {MVPWorldDeleteManyArgs} args - Arguments to filter MVPWorlds to delete.
     * @example
     * // Delete a few MVPWorlds
     * const { count } = await prisma.mVPWorld.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MVPWorldDeleteManyArgs>(args?: SelectSubset<T, MVPWorldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPWorlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MVPWorlds
     * const mVPWorld = await prisma.mVPWorld.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MVPWorldUpdateManyArgs>(args: SelectSubset<T, MVPWorldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPWorlds and returns the data updated in the database.
     * @param {MVPWorldUpdateManyAndReturnArgs} args - Arguments to update many MVPWorlds.
     * @example
     * // Update many MVPWorlds
     * const mVPWorld = await prisma.mVPWorld.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MVPWorlds and only return the `id`
     * const mVPWorldWithIdOnly = await prisma.mVPWorld.updateManyAndReturn({
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
    updateManyAndReturn<T extends MVPWorldUpdateManyAndReturnArgs>(args: SelectSubset<T, MVPWorldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MVPWorld.
     * @param {MVPWorldUpsertArgs} args - Arguments to update or create a MVPWorld.
     * @example
     * // Update or create a MVPWorld
     * const mVPWorld = await prisma.mVPWorld.upsert({
     *   create: {
     *     // ... data to create a MVPWorld
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MVPWorld we want to update
     *   }
     * })
     */
    upsert<T extends MVPWorldUpsertArgs>(args: SelectSubset<T, MVPWorldUpsertArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MVPWorlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldCountArgs} args - Arguments to filter MVPWorlds to count.
     * @example
     * // Count the number of MVPWorlds
     * const count = await prisma.mVPWorld.count({
     *   where: {
     *     // ... the filter for the MVPWorlds we want to count
     *   }
     * })
    **/
    count<T extends MVPWorldCountArgs>(
      args?: Subset<T, MVPWorldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MVPWorldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MVPWorld.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MVPWorldAggregateArgs>(args: Subset<T, MVPWorldAggregateArgs>): Prisma.PrismaPromise<GetMVPWorldAggregateType<T>>

    /**
     * Group by MVPWorld.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPWorldGroupByArgs} args - Group by arguments.
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
      T extends MVPWorldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MVPWorldGroupByArgs['orderBy'] }
        : { orderBy?: MVPWorldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MVPWorldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMVPWorldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MVPWorld model
   */
  readonly fields: MVPWorldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MVPWorld.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MVPWorldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mvpLocations<T extends MVPWorld$mvpLocationsArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorld$mvpLocationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mvpLoreFragments<T extends MVPWorld$mvpLoreFragmentsArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorld$mvpLoreFragmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mvpCharacterWorldStates<T extends MVPWorld$mvpCharacterWorldStatesArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorld$mvpCharacterWorldStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    simplifiedGameStates<T extends MVPWorld$simplifiedGameStatesArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorld$simplifiedGameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MVPEvent<T extends MVPWorld$MVPEventArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorld$MVPEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MVPWorld model
   */
  interface MVPWorldFieldRefs {
    readonly id: FieldRef<"MVPWorld", 'String'>
    readonly name: FieldRef<"MVPWorld", 'String'>
    readonly description: FieldRef<"MVPWorld", 'String'>
    readonly thumbnailUrl: FieldRef<"MVPWorld", 'String'>
    readonly isActive: FieldRef<"MVPWorld", 'Boolean'>
    readonly createdAt: FieldRef<"MVPWorld", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MVPWorld findUnique
   */
  export type MVPWorldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * Filter, which MVPWorld to fetch.
     */
    where: MVPWorldWhereUniqueInput
  }

  /**
   * MVPWorld findUniqueOrThrow
   */
  export type MVPWorldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * Filter, which MVPWorld to fetch.
     */
    where: MVPWorldWhereUniqueInput
  }

  /**
   * MVPWorld findFirst
   */
  export type MVPWorldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * Filter, which MVPWorld to fetch.
     */
    where?: MVPWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPWorlds to fetch.
     */
    orderBy?: MVPWorldOrderByWithRelationInput | MVPWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPWorlds.
     */
    cursor?: MVPWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPWorlds.
     */
    distinct?: MVPWorldScalarFieldEnum | MVPWorldScalarFieldEnum[]
  }

  /**
   * MVPWorld findFirstOrThrow
   */
  export type MVPWorldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * Filter, which MVPWorld to fetch.
     */
    where?: MVPWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPWorlds to fetch.
     */
    orderBy?: MVPWorldOrderByWithRelationInput | MVPWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPWorlds.
     */
    cursor?: MVPWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPWorlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPWorlds.
     */
    distinct?: MVPWorldScalarFieldEnum | MVPWorldScalarFieldEnum[]
  }

  /**
   * MVPWorld findMany
   */
  export type MVPWorldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * Filter, which MVPWorlds to fetch.
     */
    where?: MVPWorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPWorlds to fetch.
     */
    orderBy?: MVPWorldOrderByWithRelationInput | MVPWorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MVPWorlds.
     */
    cursor?: MVPWorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPWorlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPWorlds.
     */
    skip?: number
    distinct?: MVPWorldScalarFieldEnum | MVPWorldScalarFieldEnum[]
  }

  /**
   * MVPWorld create
   */
  export type MVPWorldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * The data needed to create a MVPWorld.
     */
    data: XOR<MVPWorldCreateInput, MVPWorldUncheckedCreateInput>
  }

  /**
   * MVPWorld createMany
   */
  export type MVPWorldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MVPWorlds.
     */
    data: MVPWorldCreateManyInput | MVPWorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPWorld createManyAndReturn
   */
  export type MVPWorldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * The data used to create many MVPWorlds.
     */
    data: MVPWorldCreateManyInput | MVPWorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPWorld update
   */
  export type MVPWorldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * The data needed to update a MVPWorld.
     */
    data: XOR<MVPWorldUpdateInput, MVPWorldUncheckedUpdateInput>
    /**
     * Choose, which MVPWorld to update.
     */
    where: MVPWorldWhereUniqueInput
  }

  /**
   * MVPWorld updateMany
   */
  export type MVPWorldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MVPWorlds.
     */
    data: XOR<MVPWorldUpdateManyMutationInput, MVPWorldUncheckedUpdateManyInput>
    /**
     * Filter which MVPWorlds to update
     */
    where?: MVPWorldWhereInput
    /**
     * Limit how many MVPWorlds to update.
     */
    limit?: number
  }

  /**
   * MVPWorld updateManyAndReturn
   */
  export type MVPWorldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * The data used to update MVPWorlds.
     */
    data: XOR<MVPWorldUpdateManyMutationInput, MVPWorldUncheckedUpdateManyInput>
    /**
     * Filter which MVPWorlds to update
     */
    where?: MVPWorldWhereInput
    /**
     * Limit how many MVPWorlds to update.
     */
    limit?: number
  }

  /**
   * MVPWorld upsert
   */
  export type MVPWorldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * The filter to search for the MVPWorld to update in case it exists.
     */
    where: MVPWorldWhereUniqueInput
    /**
     * In case the MVPWorld found by the `where` argument doesn't exist, create a new MVPWorld with this data.
     */
    create: XOR<MVPWorldCreateInput, MVPWorldUncheckedCreateInput>
    /**
     * In case the MVPWorld was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MVPWorldUpdateInput, MVPWorldUncheckedUpdateInput>
  }

  /**
   * MVPWorld delete
   */
  export type MVPWorldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
    /**
     * Filter which MVPWorld to delete.
     */
    where: MVPWorldWhereUniqueInput
  }

  /**
   * MVPWorld deleteMany
   */
  export type MVPWorldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPWorlds to delete
     */
    where?: MVPWorldWhereInput
    /**
     * Limit how many MVPWorlds to delete.
     */
    limit?: number
  }

  /**
   * MVPWorld.mvpLocations
   */
  export type MVPWorld$mvpLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    where?: MVPLocationWhereInput
    orderBy?: MVPLocationOrderByWithRelationInput | MVPLocationOrderByWithRelationInput[]
    cursor?: MVPLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPLocationScalarFieldEnum | MVPLocationScalarFieldEnum[]
  }

  /**
   * MVPWorld.mvpLoreFragments
   */
  export type MVPWorld$mvpLoreFragmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    where?: MVPLoreFragmentWhereInput
    orderBy?: MVPLoreFragmentOrderByWithRelationInput | MVPLoreFragmentOrderByWithRelationInput[]
    cursor?: MVPLoreFragmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPLoreFragmentScalarFieldEnum | MVPLoreFragmentScalarFieldEnum[]
  }

  /**
   * MVPWorld.mvpCharacterWorldStates
   */
  export type MVPWorld$mvpCharacterWorldStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    where?: MVPCharacterWorldStateWhereInput
    orderBy?: MVPCharacterWorldStateOrderByWithRelationInput | MVPCharacterWorldStateOrderByWithRelationInput[]
    cursor?: MVPCharacterWorldStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPCharacterWorldStateScalarFieldEnum | MVPCharacterWorldStateScalarFieldEnum[]
  }

  /**
   * MVPWorld.simplifiedGameStates
   */
  export type MVPWorld$simplifiedGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    where?: SimplifiedGameStateWhereInput
    orderBy?: SimplifiedGameStateOrderByWithRelationInput | SimplifiedGameStateOrderByWithRelationInput[]
    cursor?: SimplifiedGameStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SimplifiedGameStateScalarFieldEnum | SimplifiedGameStateScalarFieldEnum[]
  }

  /**
   * MVPWorld.MVPEvent
   */
  export type MVPWorld$MVPEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    where?: MVPEventWhereInput
    orderBy?: MVPEventOrderByWithRelationInput | MVPEventOrderByWithRelationInput[]
    cursor?: MVPEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPEventScalarFieldEnum | MVPEventScalarFieldEnum[]
  }

  /**
   * MVPWorld without action
   */
  export type MVPWorldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPWorld
     */
    select?: MVPWorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPWorld
     */
    omit?: MVPWorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPWorldInclude<ExtArgs> | null
  }


  /**
   * Model MVPCharacterWorldState
   */

  export type AggregateMVPCharacterWorldState = {
    _count: MVPCharacterWorldStateCountAggregateOutputType | null
    _min: MVPCharacterWorldStateMinAggregateOutputType | null
    _max: MVPCharacterWorldStateMaxAggregateOutputType | null
  }

  export type MVPCharacterWorldStateMinAggregateOutputType = {
    characterId: string | null
    worldId: string | null
    currentLocation: string | null
    lastPlayedAt: Date | null
  }

  export type MVPCharacterWorldStateMaxAggregateOutputType = {
    characterId: string | null
    worldId: string | null
    currentLocation: string | null
    lastPlayedAt: Date | null
  }

  export type MVPCharacterWorldStateCountAggregateOutputType = {
    characterId: number
    worldId: number
    currentLocation: number
    lastPlayedAt: number
    _all: number
  }


  export type MVPCharacterWorldStateMinAggregateInputType = {
    characterId?: true
    worldId?: true
    currentLocation?: true
    lastPlayedAt?: true
  }

  export type MVPCharacterWorldStateMaxAggregateInputType = {
    characterId?: true
    worldId?: true
    currentLocation?: true
    lastPlayedAt?: true
  }

  export type MVPCharacterWorldStateCountAggregateInputType = {
    characterId?: true
    worldId?: true
    currentLocation?: true
    lastPlayedAt?: true
    _all?: true
  }

  export type MVPCharacterWorldStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPCharacterWorldState to aggregate.
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacterWorldStates to fetch.
     */
    orderBy?: MVPCharacterWorldStateOrderByWithRelationInput | MVPCharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MVPCharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacterWorldStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MVPCharacterWorldStates
    **/
    _count?: true | MVPCharacterWorldStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MVPCharacterWorldStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MVPCharacterWorldStateMaxAggregateInputType
  }

  export type GetMVPCharacterWorldStateAggregateType<T extends MVPCharacterWorldStateAggregateArgs> = {
        [P in keyof T & keyof AggregateMVPCharacterWorldState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMVPCharacterWorldState[P]>
      : GetScalarType<T[P], AggregateMVPCharacterWorldState[P]>
  }




  export type MVPCharacterWorldStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPCharacterWorldStateWhereInput
    orderBy?: MVPCharacterWorldStateOrderByWithAggregationInput | MVPCharacterWorldStateOrderByWithAggregationInput[]
    by: MVPCharacterWorldStateScalarFieldEnum[] | MVPCharacterWorldStateScalarFieldEnum
    having?: MVPCharacterWorldStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MVPCharacterWorldStateCountAggregateInputType | true
    _min?: MVPCharacterWorldStateMinAggregateInputType
    _max?: MVPCharacterWorldStateMaxAggregateInputType
  }

  export type MVPCharacterWorldStateGroupByOutputType = {
    characterId: string
    worldId: string
    currentLocation: string | null
    lastPlayedAt: Date | null
    _count: MVPCharacterWorldStateCountAggregateOutputType | null
    _min: MVPCharacterWorldStateMinAggregateOutputType | null
    _max: MVPCharacterWorldStateMaxAggregateOutputType | null
  }

  type GetMVPCharacterWorldStateGroupByPayload<T extends MVPCharacterWorldStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MVPCharacterWorldStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MVPCharacterWorldStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MVPCharacterWorldStateGroupByOutputType[P]>
            : GetScalarType<T[P], MVPCharacterWorldStateGroupByOutputType[P]>
        }
      >
    >


  export type MVPCharacterWorldStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPCharacterWorldState"]>

  export type MVPCharacterWorldStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPCharacterWorldState"]>

  export type MVPCharacterWorldStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPCharacterWorldState"]>

  export type MVPCharacterWorldStateSelectScalar = {
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
  }

  export type MVPCharacterWorldStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"characterId" | "worldId" | "currentLocation" | "lastPlayedAt", ExtArgs["result"]["mVPCharacterWorldState"]>
  export type MVPCharacterWorldStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type MVPCharacterWorldStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type MVPCharacterWorldStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }

  export type $MVPCharacterWorldStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MVPCharacterWorldState"
    objects: {
      character: Prisma.$MVPCharacterPayload<ExtArgs>
      world: Prisma.$MVPWorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      characterId: string
      worldId: string
      currentLocation: string | null
      lastPlayedAt: Date | null
    }, ExtArgs["result"]["mVPCharacterWorldState"]>
    composites: {}
  }

  type MVPCharacterWorldStateGetPayload<S extends boolean | null | undefined | MVPCharacterWorldStateDefaultArgs> = $Result.GetResult<Prisma.$MVPCharacterWorldStatePayload, S>

  type MVPCharacterWorldStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MVPCharacterWorldStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MVPCharacterWorldStateCountAggregateInputType | true
    }

  export interface MVPCharacterWorldStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MVPCharacterWorldState'], meta: { name: 'MVPCharacterWorldState' } }
    /**
     * Find zero or one MVPCharacterWorldState that matches the filter.
     * @param {MVPCharacterWorldStateFindUniqueArgs} args - Arguments to find a MVPCharacterWorldState
     * @example
     * // Get one MVPCharacterWorldState
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MVPCharacterWorldStateFindUniqueArgs>(args: SelectSubset<T, MVPCharacterWorldStateFindUniqueArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MVPCharacterWorldState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MVPCharacterWorldStateFindUniqueOrThrowArgs} args - Arguments to find a MVPCharacterWorldState
     * @example
     * // Get one MVPCharacterWorldState
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MVPCharacterWorldStateFindUniqueOrThrowArgs>(args: SelectSubset<T, MVPCharacterWorldStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPCharacterWorldState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateFindFirstArgs} args - Arguments to find a MVPCharacterWorldState
     * @example
     * // Get one MVPCharacterWorldState
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MVPCharacterWorldStateFindFirstArgs>(args?: SelectSubset<T, MVPCharacterWorldStateFindFirstArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPCharacterWorldState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateFindFirstOrThrowArgs} args - Arguments to find a MVPCharacterWorldState
     * @example
     * // Get one MVPCharacterWorldState
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MVPCharacterWorldStateFindFirstOrThrowArgs>(args?: SelectSubset<T, MVPCharacterWorldStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MVPCharacterWorldStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MVPCharacterWorldStates
     * const mVPCharacterWorldStates = await prisma.mVPCharacterWorldState.findMany()
     * 
     * // Get first 10 MVPCharacterWorldStates
     * const mVPCharacterWorldStates = await prisma.mVPCharacterWorldState.findMany({ take: 10 })
     * 
     * // Only select the `characterId`
     * const mVPCharacterWorldStateWithCharacterIdOnly = await prisma.mVPCharacterWorldState.findMany({ select: { characterId: true } })
     * 
     */
    findMany<T extends MVPCharacterWorldStateFindManyArgs>(args?: SelectSubset<T, MVPCharacterWorldStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MVPCharacterWorldState.
     * @param {MVPCharacterWorldStateCreateArgs} args - Arguments to create a MVPCharacterWorldState.
     * @example
     * // Create one MVPCharacterWorldState
     * const MVPCharacterWorldState = await prisma.mVPCharacterWorldState.create({
     *   data: {
     *     // ... data to create a MVPCharacterWorldState
     *   }
     * })
     * 
     */
    create<T extends MVPCharacterWorldStateCreateArgs>(args: SelectSubset<T, MVPCharacterWorldStateCreateArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MVPCharacterWorldStates.
     * @param {MVPCharacterWorldStateCreateManyArgs} args - Arguments to create many MVPCharacterWorldStates.
     * @example
     * // Create many MVPCharacterWorldStates
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MVPCharacterWorldStateCreateManyArgs>(args?: SelectSubset<T, MVPCharacterWorldStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MVPCharacterWorldStates and returns the data saved in the database.
     * @param {MVPCharacterWorldStateCreateManyAndReturnArgs} args - Arguments to create many MVPCharacterWorldStates.
     * @example
     * // Create many MVPCharacterWorldStates
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MVPCharacterWorldStates and only return the `characterId`
     * const mVPCharacterWorldStateWithCharacterIdOnly = await prisma.mVPCharacterWorldState.createManyAndReturn({
     *   select: { characterId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MVPCharacterWorldStateCreateManyAndReturnArgs>(args?: SelectSubset<T, MVPCharacterWorldStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MVPCharacterWorldState.
     * @param {MVPCharacterWorldStateDeleteArgs} args - Arguments to delete one MVPCharacterWorldState.
     * @example
     * // Delete one MVPCharacterWorldState
     * const MVPCharacterWorldState = await prisma.mVPCharacterWorldState.delete({
     *   where: {
     *     // ... filter to delete one MVPCharacterWorldState
     *   }
     * })
     * 
     */
    delete<T extends MVPCharacterWorldStateDeleteArgs>(args: SelectSubset<T, MVPCharacterWorldStateDeleteArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MVPCharacterWorldState.
     * @param {MVPCharacterWorldStateUpdateArgs} args - Arguments to update one MVPCharacterWorldState.
     * @example
     * // Update one MVPCharacterWorldState
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MVPCharacterWorldStateUpdateArgs>(args: SelectSubset<T, MVPCharacterWorldStateUpdateArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MVPCharacterWorldStates.
     * @param {MVPCharacterWorldStateDeleteManyArgs} args - Arguments to filter MVPCharacterWorldStates to delete.
     * @example
     * // Delete a few MVPCharacterWorldStates
     * const { count } = await prisma.mVPCharacterWorldState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MVPCharacterWorldStateDeleteManyArgs>(args?: SelectSubset<T, MVPCharacterWorldStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPCharacterWorldStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MVPCharacterWorldStates
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MVPCharacterWorldStateUpdateManyArgs>(args: SelectSubset<T, MVPCharacterWorldStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPCharacterWorldStates and returns the data updated in the database.
     * @param {MVPCharacterWorldStateUpdateManyAndReturnArgs} args - Arguments to update many MVPCharacterWorldStates.
     * @example
     * // Update many MVPCharacterWorldStates
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MVPCharacterWorldStates and only return the `characterId`
     * const mVPCharacterWorldStateWithCharacterIdOnly = await prisma.mVPCharacterWorldState.updateManyAndReturn({
     *   select: { characterId: true },
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
    updateManyAndReturn<T extends MVPCharacterWorldStateUpdateManyAndReturnArgs>(args: SelectSubset<T, MVPCharacterWorldStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MVPCharacterWorldState.
     * @param {MVPCharacterWorldStateUpsertArgs} args - Arguments to update or create a MVPCharacterWorldState.
     * @example
     * // Update or create a MVPCharacterWorldState
     * const mVPCharacterWorldState = await prisma.mVPCharacterWorldState.upsert({
     *   create: {
     *     // ... data to create a MVPCharacterWorldState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MVPCharacterWorldState we want to update
     *   }
     * })
     */
    upsert<T extends MVPCharacterWorldStateUpsertArgs>(args: SelectSubset<T, MVPCharacterWorldStateUpsertArgs<ExtArgs>>): Prisma__MVPCharacterWorldStateClient<$Result.GetResult<Prisma.$MVPCharacterWorldStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MVPCharacterWorldStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateCountArgs} args - Arguments to filter MVPCharacterWorldStates to count.
     * @example
     * // Count the number of MVPCharacterWorldStates
     * const count = await prisma.mVPCharacterWorldState.count({
     *   where: {
     *     // ... the filter for the MVPCharacterWorldStates we want to count
     *   }
     * })
    **/
    count<T extends MVPCharacterWorldStateCountArgs>(
      args?: Subset<T, MVPCharacterWorldStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MVPCharacterWorldStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MVPCharacterWorldState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MVPCharacterWorldStateAggregateArgs>(args: Subset<T, MVPCharacterWorldStateAggregateArgs>): Prisma.PrismaPromise<GetMVPCharacterWorldStateAggregateType<T>>

    /**
     * Group by MVPCharacterWorldState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPCharacterWorldStateGroupByArgs} args - Group by arguments.
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
      T extends MVPCharacterWorldStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MVPCharacterWorldStateGroupByArgs['orderBy'] }
        : { orderBy?: MVPCharacterWorldStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MVPCharacterWorldStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMVPCharacterWorldStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MVPCharacterWorldState model
   */
  readonly fields: MVPCharacterWorldStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MVPCharacterWorldState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MVPCharacterWorldStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends MVPCharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPCharacterDefaultArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    world<T extends MVPWorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorldDefaultArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MVPCharacterWorldState model
   */
  interface MVPCharacterWorldStateFieldRefs {
    readonly characterId: FieldRef<"MVPCharacterWorldState", 'String'>
    readonly worldId: FieldRef<"MVPCharacterWorldState", 'String'>
    readonly currentLocation: FieldRef<"MVPCharacterWorldState", 'String'>
    readonly lastPlayedAt: FieldRef<"MVPCharacterWorldState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MVPCharacterWorldState findUnique
   */
  export type MVPCharacterWorldStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacterWorldState to fetch.
     */
    where: MVPCharacterWorldStateWhereUniqueInput
  }

  /**
   * MVPCharacterWorldState findUniqueOrThrow
   */
  export type MVPCharacterWorldStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacterWorldState to fetch.
     */
    where: MVPCharacterWorldStateWhereUniqueInput
  }

  /**
   * MVPCharacterWorldState findFirst
   */
  export type MVPCharacterWorldStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacterWorldState to fetch.
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacterWorldStates to fetch.
     */
    orderBy?: MVPCharacterWorldStateOrderByWithRelationInput | MVPCharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPCharacterWorldStates.
     */
    cursor?: MVPCharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacterWorldStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPCharacterWorldStates.
     */
    distinct?: MVPCharacterWorldStateScalarFieldEnum | MVPCharacterWorldStateScalarFieldEnum[]
  }

  /**
   * MVPCharacterWorldState findFirstOrThrow
   */
  export type MVPCharacterWorldStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacterWorldState to fetch.
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacterWorldStates to fetch.
     */
    orderBy?: MVPCharacterWorldStateOrderByWithRelationInput | MVPCharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPCharacterWorldStates.
     */
    cursor?: MVPCharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacterWorldStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPCharacterWorldStates.
     */
    distinct?: MVPCharacterWorldStateScalarFieldEnum | MVPCharacterWorldStateScalarFieldEnum[]
  }

  /**
   * MVPCharacterWorldState findMany
   */
  export type MVPCharacterWorldStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which MVPCharacterWorldStates to fetch.
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPCharacterWorldStates to fetch.
     */
    orderBy?: MVPCharacterWorldStateOrderByWithRelationInput | MVPCharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MVPCharacterWorldStates.
     */
    cursor?: MVPCharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPCharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPCharacterWorldStates.
     */
    skip?: number
    distinct?: MVPCharacterWorldStateScalarFieldEnum | MVPCharacterWorldStateScalarFieldEnum[]
  }

  /**
   * MVPCharacterWorldState create
   */
  export type MVPCharacterWorldStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * The data needed to create a MVPCharacterWorldState.
     */
    data: XOR<MVPCharacterWorldStateCreateInput, MVPCharacterWorldStateUncheckedCreateInput>
  }

  /**
   * MVPCharacterWorldState createMany
   */
  export type MVPCharacterWorldStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MVPCharacterWorldStates.
     */
    data: MVPCharacterWorldStateCreateManyInput | MVPCharacterWorldStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPCharacterWorldState createManyAndReturn
   */
  export type MVPCharacterWorldStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * The data used to create many MVPCharacterWorldStates.
     */
    data: MVPCharacterWorldStateCreateManyInput | MVPCharacterWorldStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPCharacterWorldState update
   */
  export type MVPCharacterWorldStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * The data needed to update a MVPCharacterWorldState.
     */
    data: XOR<MVPCharacterWorldStateUpdateInput, MVPCharacterWorldStateUncheckedUpdateInput>
    /**
     * Choose, which MVPCharacterWorldState to update.
     */
    where: MVPCharacterWorldStateWhereUniqueInput
  }

  /**
   * MVPCharacterWorldState updateMany
   */
  export type MVPCharacterWorldStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MVPCharacterWorldStates.
     */
    data: XOR<MVPCharacterWorldStateUpdateManyMutationInput, MVPCharacterWorldStateUncheckedUpdateManyInput>
    /**
     * Filter which MVPCharacterWorldStates to update
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * Limit how many MVPCharacterWorldStates to update.
     */
    limit?: number
  }

  /**
   * MVPCharacterWorldState updateManyAndReturn
   */
  export type MVPCharacterWorldStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * The data used to update MVPCharacterWorldStates.
     */
    data: XOR<MVPCharacterWorldStateUpdateManyMutationInput, MVPCharacterWorldStateUncheckedUpdateManyInput>
    /**
     * Filter which MVPCharacterWorldStates to update
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * Limit how many MVPCharacterWorldStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPCharacterWorldState upsert
   */
  export type MVPCharacterWorldStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * The filter to search for the MVPCharacterWorldState to update in case it exists.
     */
    where: MVPCharacterWorldStateWhereUniqueInput
    /**
     * In case the MVPCharacterWorldState found by the `where` argument doesn't exist, create a new MVPCharacterWorldState with this data.
     */
    create: XOR<MVPCharacterWorldStateCreateInput, MVPCharacterWorldStateUncheckedCreateInput>
    /**
     * In case the MVPCharacterWorldState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MVPCharacterWorldStateUpdateInput, MVPCharacterWorldStateUncheckedUpdateInput>
  }

  /**
   * MVPCharacterWorldState delete
   */
  export type MVPCharacterWorldStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter which MVPCharacterWorldState to delete.
     */
    where: MVPCharacterWorldStateWhereUniqueInput
  }

  /**
   * MVPCharacterWorldState deleteMany
   */
  export type MVPCharacterWorldStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPCharacterWorldStates to delete
     */
    where?: MVPCharacterWorldStateWhereInput
    /**
     * Limit how many MVPCharacterWorldStates to delete.
     */
    limit?: number
  }

  /**
   * MVPCharacterWorldState without action
   */
  export type MVPCharacterWorldStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPCharacterWorldState
     */
    select?: MVPCharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPCharacterWorldState
     */
    omit?: MVPCharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPCharacterWorldStateInclude<ExtArgs> | null
  }


  /**
   * Model MVPLocation
   */

  export type AggregateMVPLocation = {
    _count: MVPLocationCountAggregateOutputType | null
    _min: MVPLocationMinAggregateOutputType | null
    _max: MVPLocationMaxAggregateOutputType | null
  }

  export type MVPLocationMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    name: string | null
    description: string | null
    isStartingLocation: boolean | null
    dangerLevel: string | null
    thumbnailUrl: string | null
  }

  export type MVPLocationMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    name: string | null
    description: string | null
    isStartingLocation: boolean | null
    dangerLevel: string | null
    thumbnailUrl: string | null
  }

  export type MVPLocationCountAggregateOutputType = {
    id: number
    worldId: number
    name: number
    description: number
    isStartingLocation: number
    connectedLocationIds: number
    dangerLevel: number
    thumbnailUrl: number
    _all: number
  }


  export type MVPLocationMinAggregateInputType = {
    id?: true
    worldId?: true
    name?: true
    description?: true
    isStartingLocation?: true
    dangerLevel?: true
    thumbnailUrl?: true
  }

  export type MVPLocationMaxAggregateInputType = {
    id?: true
    worldId?: true
    name?: true
    description?: true
    isStartingLocation?: true
    dangerLevel?: true
    thumbnailUrl?: true
  }

  export type MVPLocationCountAggregateInputType = {
    id?: true
    worldId?: true
    name?: true
    description?: true
    isStartingLocation?: true
    connectedLocationIds?: true
    dangerLevel?: true
    thumbnailUrl?: true
    _all?: true
  }

  export type MVPLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPLocation to aggregate.
     */
    where?: MVPLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLocations to fetch.
     */
    orderBy?: MVPLocationOrderByWithRelationInput | MVPLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MVPLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MVPLocations
    **/
    _count?: true | MVPLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MVPLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MVPLocationMaxAggregateInputType
  }

  export type GetMVPLocationAggregateType<T extends MVPLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateMVPLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMVPLocation[P]>
      : GetScalarType<T[P], AggregateMVPLocation[P]>
  }




  export type MVPLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPLocationWhereInput
    orderBy?: MVPLocationOrderByWithAggregationInput | MVPLocationOrderByWithAggregationInput[]
    by: MVPLocationScalarFieldEnum[] | MVPLocationScalarFieldEnum
    having?: MVPLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MVPLocationCountAggregateInputType | true
    _min?: MVPLocationMinAggregateInputType
    _max?: MVPLocationMaxAggregateInputType
  }

  export type MVPLocationGroupByOutputType = {
    id: string
    worldId: string
    name: string
    description: string | null
    isStartingLocation: boolean
    connectedLocationIds: string[]
    dangerLevel: string | null
    thumbnailUrl: string | null
    _count: MVPLocationCountAggregateOutputType | null
    _min: MVPLocationMinAggregateOutputType | null
    _max: MVPLocationMaxAggregateOutputType | null
  }

  type GetMVPLocationGroupByPayload<T extends MVPLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MVPLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MVPLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MVPLocationGroupByOutputType[P]>
            : GetScalarType<T[P], MVPLocationGroupByOutputType[P]>
        }
      >
    >


  export type MVPLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    dangerLevel?: boolean
    thumbnailUrl?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    MVPEvent?: boolean | MVPLocation$MVPEventArgs<ExtArgs>
    _count?: boolean | MVPLocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPLocation"]>

  export type MVPLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    dangerLevel?: boolean
    thumbnailUrl?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPLocation"]>

  export type MVPLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    dangerLevel?: boolean
    thumbnailUrl?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPLocation"]>

  export type MVPLocationSelectScalar = {
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    dangerLevel?: boolean
    thumbnailUrl?: boolean
  }

  export type MVPLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worldId" | "name" | "description" | "isStartingLocation" | "connectedLocationIds" | "dangerLevel" | "thumbnailUrl", ExtArgs["result"]["mVPLocation"]>
  export type MVPLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    MVPEvent?: boolean | MVPLocation$MVPEventArgs<ExtArgs>
    _count?: boolean | MVPLocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MVPLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type MVPLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }

  export type $MVPLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MVPLocation"
    objects: {
      world: Prisma.$MVPWorldPayload<ExtArgs>
      MVPEvent: Prisma.$MVPEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      name: string
      description: string | null
      isStartingLocation: boolean
      connectedLocationIds: string[]
      dangerLevel: string | null
      thumbnailUrl: string | null
    }, ExtArgs["result"]["mVPLocation"]>
    composites: {}
  }

  type MVPLocationGetPayload<S extends boolean | null | undefined | MVPLocationDefaultArgs> = $Result.GetResult<Prisma.$MVPLocationPayload, S>

  type MVPLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MVPLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MVPLocationCountAggregateInputType | true
    }

  export interface MVPLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MVPLocation'], meta: { name: 'MVPLocation' } }
    /**
     * Find zero or one MVPLocation that matches the filter.
     * @param {MVPLocationFindUniqueArgs} args - Arguments to find a MVPLocation
     * @example
     * // Get one MVPLocation
     * const mVPLocation = await prisma.mVPLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MVPLocationFindUniqueArgs>(args: SelectSubset<T, MVPLocationFindUniqueArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MVPLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MVPLocationFindUniqueOrThrowArgs} args - Arguments to find a MVPLocation
     * @example
     * // Get one MVPLocation
     * const mVPLocation = await prisma.mVPLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MVPLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, MVPLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationFindFirstArgs} args - Arguments to find a MVPLocation
     * @example
     * // Get one MVPLocation
     * const mVPLocation = await prisma.mVPLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MVPLocationFindFirstArgs>(args?: SelectSubset<T, MVPLocationFindFirstArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationFindFirstOrThrowArgs} args - Arguments to find a MVPLocation
     * @example
     * // Get one MVPLocation
     * const mVPLocation = await prisma.mVPLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MVPLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, MVPLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MVPLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MVPLocations
     * const mVPLocations = await prisma.mVPLocation.findMany()
     * 
     * // Get first 10 MVPLocations
     * const mVPLocations = await prisma.mVPLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mVPLocationWithIdOnly = await prisma.mVPLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MVPLocationFindManyArgs>(args?: SelectSubset<T, MVPLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MVPLocation.
     * @param {MVPLocationCreateArgs} args - Arguments to create a MVPLocation.
     * @example
     * // Create one MVPLocation
     * const MVPLocation = await prisma.mVPLocation.create({
     *   data: {
     *     // ... data to create a MVPLocation
     *   }
     * })
     * 
     */
    create<T extends MVPLocationCreateArgs>(args: SelectSubset<T, MVPLocationCreateArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MVPLocations.
     * @param {MVPLocationCreateManyArgs} args - Arguments to create many MVPLocations.
     * @example
     * // Create many MVPLocations
     * const mVPLocation = await prisma.mVPLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MVPLocationCreateManyArgs>(args?: SelectSubset<T, MVPLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MVPLocations and returns the data saved in the database.
     * @param {MVPLocationCreateManyAndReturnArgs} args - Arguments to create many MVPLocations.
     * @example
     * // Create many MVPLocations
     * const mVPLocation = await prisma.mVPLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MVPLocations and only return the `id`
     * const mVPLocationWithIdOnly = await prisma.mVPLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MVPLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, MVPLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MVPLocation.
     * @param {MVPLocationDeleteArgs} args - Arguments to delete one MVPLocation.
     * @example
     * // Delete one MVPLocation
     * const MVPLocation = await prisma.mVPLocation.delete({
     *   where: {
     *     // ... filter to delete one MVPLocation
     *   }
     * })
     * 
     */
    delete<T extends MVPLocationDeleteArgs>(args: SelectSubset<T, MVPLocationDeleteArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MVPLocation.
     * @param {MVPLocationUpdateArgs} args - Arguments to update one MVPLocation.
     * @example
     * // Update one MVPLocation
     * const mVPLocation = await prisma.mVPLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MVPLocationUpdateArgs>(args: SelectSubset<T, MVPLocationUpdateArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MVPLocations.
     * @param {MVPLocationDeleteManyArgs} args - Arguments to filter MVPLocations to delete.
     * @example
     * // Delete a few MVPLocations
     * const { count } = await prisma.mVPLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MVPLocationDeleteManyArgs>(args?: SelectSubset<T, MVPLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MVPLocations
     * const mVPLocation = await prisma.mVPLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MVPLocationUpdateManyArgs>(args: SelectSubset<T, MVPLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPLocations and returns the data updated in the database.
     * @param {MVPLocationUpdateManyAndReturnArgs} args - Arguments to update many MVPLocations.
     * @example
     * // Update many MVPLocations
     * const mVPLocation = await prisma.mVPLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MVPLocations and only return the `id`
     * const mVPLocationWithIdOnly = await prisma.mVPLocation.updateManyAndReturn({
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
    updateManyAndReturn<T extends MVPLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, MVPLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MVPLocation.
     * @param {MVPLocationUpsertArgs} args - Arguments to update or create a MVPLocation.
     * @example
     * // Update or create a MVPLocation
     * const mVPLocation = await prisma.mVPLocation.upsert({
     *   create: {
     *     // ... data to create a MVPLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MVPLocation we want to update
     *   }
     * })
     */
    upsert<T extends MVPLocationUpsertArgs>(args: SelectSubset<T, MVPLocationUpsertArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MVPLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationCountArgs} args - Arguments to filter MVPLocations to count.
     * @example
     * // Count the number of MVPLocations
     * const count = await prisma.mVPLocation.count({
     *   where: {
     *     // ... the filter for the MVPLocations we want to count
     *   }
     * })
    **/
    count<T extends MVPLocationCountArgs>(
      args?: Subset<T, MVPLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MVPLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MVPLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MVPLocationAggregateArgs>(args: Subset<T, MVPLocationAggregateArgs>): Prisma.PrismaPromise<GetMVPLocationAggregateType<T>>

    /**
     * Group by MVPLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLocationGroupByArgs} args - Group by arguments.
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
      T extends MVPLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MVPLocationGroupByArgs['orderBy'] }
        : { orderBy?: MVPLocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MVPLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMVPLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MVPLocation model
   */
  readonly fields: MVPLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MVPLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MVPLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends MVPWorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorldDefaultArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    MVPEvent<T extends MVPLocation$MVPEventArgs<ExtArgs> = {}>(args?: Subset<T, MVPLocation$MVPEventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MVPLocation model
   */
  interface MVPLocationFieldRefs {
    readonly id: FieldRef<"MVPLocation", 'String'>
    readonly worldId: FieldRef<"MVPLocation", 'String'>
    readonly name: FieldRef<"MVPLocation", 'String'>
    readonly description: FieldRef<"MVPLocation", 'String'>
    readonly isStartingLocation: FieldRef<"MVPLocation", 'Boolean'>
    readonly connectedLocationIds: FieldRef<"MVPLocation", 'String[]'>
    readonly dangerLevel: FieldRef<"MVPLocation", 'String'>
    readonly thumbnailUrl: FieldRef<"MVPLocation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MVPLocation findUnique
   */
  export type MVPLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * Filter, which MVPLocation to fetch.
     */
    where: MVPLocationWhereUniqueInput
  }

  /**
   * MVPLocation findUniqueOrThrow
   */
  export type MVPLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * Filter, which MVPLocation to fetch.
     */
    where: MVPLocationWhereUniqueInput
  }

  /**
   * MVPLocation findFirst
   */
  export type MVPLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * Filter, which MVPLocation to fetch.
     */
    where?: MVPLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLocations to fetch.
     */
    orderBy?: MVPLocationOrderByWithRelationInput | MVPLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPLocations.
     */
    cursor?: MVPLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPLocations.
     */
    distinct?: MVPLocationScalarFieldEnum | MVPLocationScalarFieldEnum[]
  }

  /**
   * MVPLocation findFirstOrThrow
   */
  export type MVPLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * Filter, which MVPLocation to fetch.
     */
    where?: MVPLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLocations to fetch.
     */
    orderBy?: MVPLocationOrderByWithRelationInput | MVPLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPLocations.
     */
    cursor?: MVPLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPLocations.
     */
    distinct?: MVPLocationScalarFieldEnum | MVPLocationScalarFieldEnum[]
  }

  /**
   * MVPLocation findMany
   */
  export type MVPLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * Filter, which MVPLocations to fetch.
     */
    where?: MVPLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLocations to fetch.
     */
    orderBy?: MVPLocationOrderByWithRelationInput | MVPLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MVPLocations.
     */
    cursor?: MVPLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLocations.
     */
    skip?: number
    distinct?: MVPLocationScalarFieldEnum | MVPLocationScalarFieldEnum[]
  }

  /**
   * MVPLocation create
   */
  export type MVPLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a MVPLocation.
     */
    data: XOR<MVPLocationCreateInput, MVPLocationUncheckedCreateInput>
  }

  /**
   * MVPLocation createMany
   */
  export type MVPLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MVPLocations.
     */
    data: MVPLocationCreateManyInput | MVPLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPLocation createManyAndReturn
   */
  export type MVPLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * The data used to create many MVPLocations.
     */
    data: MVPLocationCreateManyInput | MVPLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPLocation update
   */
  export type MVPLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a MVPLocation.
     */
    data: XOR<MVPLocationUpdateInput, MVPLocationUncheckedUpdateInput>
    /**
     * Choose, which MVPLocation to update.
     */
    where: MVPLocationWhereUniqueInput
  }

  /**
   * MVPLocation updateMany
   */
  export type MVPLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MVPLocations.
     */
    data: XOR<MVPLocationUpdateManyMutationInput, MVPLocationUncheckedUpdateManyInput>
    /**
     * Filter which MVPLocations to update
     */
    where?: MVPLocationWhereInput
    /**
     * Limit how many MVPLocations to update.
     */
    limit?: number
  }

  /**
   * MVPLocation updateManyAndReturn
   */
  export type MVPLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * The data used to update MVPLocations.
     */
    data: XOR<MVPLocationUpdateManyMutationInput, MVPLocationUncheckedUpdateManyInput>
    /**
     * Filter which MVPLocations to update
     */
    where?: MVPLocationWhereInput
    /**
     * Limit how many MVPLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPLocation upsert
   */
  export type MVPLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the MVPLocation to update in case it exists.
     */
    where: MVPLocationWhereUniqueInput
    /**
     * In case the MVPLocation found by the `where` argument doesn't exist, create a new MVPLocation with this data.
     */
    create: XOR<MVPLocationCreateInput, MVPLocationUncheckedCreateInput>
    /**
     * In case the MVPLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MVPLocationUpdateInput, MVPLocationUncheckedUpdateInput>
  }

  /**
   * MVPLocation delete
   */
  export type MVPLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    /**
     * Filter which MVPLocation to delete.
     */
    where: MVPLocationWhereUniqueInput
  }

  /**
   * MVPLocation deleteMany
   */
  export type MVPLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPLocations to delete
     */
    where?: MVPLocationWhereInput
    /**
     * Limit how many MVPLocations to delete.
     */
    limit?: number
  }

  /**
   * MVPLocation.MVPEvent
   */
  export type MVPLocation$MVPEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    where?: MVPEventWhereInput
    orderBy?: MVPEventOrderByWithRelationInput | MVPEventOrderByWithRelationInput[]
    cursor?: MVPEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MVPEventScalarFieldEnum | MVPEventScalarFieldEnum[]
  }

  /**
   * MVPLocation without action
   */
  export type MVPLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
  }


  /**
   * Model MVPLoreFragment
   */

  export type AggregateMVPLoreFragment = {
    _count: MVPLoreFragmentCountAggregateOutputType | null
    _min: MVPLoreFragmentMinAggregateOutputType | null
    _max: MVPLoreFragmentMaxAggregateOutputType | null
  }

  export type MVPLoreFragmentMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    title: string | null
    content: string | null
    type: string | null
    locationId: string | null
    contextId: string | null
    isRevealed: boolean | null
  }

  export type MVPLoreFragmentMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    title: string | null
    content: string | null
    type: string | null
    locationId: string | null
    contextId: string | null
    isRevealed: boolean | null
  }

  export type MVPLoreFragmentCountAggregateOutputType = {
    id: number
    worldId: number
    title: number
    content: number
    type: number
    locationId: number
    contextId: number
    isRevealed: number
    keywords: number
    _all: number
  }


  export type MVPLoreFragmentMinAggregateInputType = {
    id?: true
    worldId?: true
    title?: true
    content?: true
    type?: true
    locationId?: true
    contextId?: true
    isRevealed?: true
  }

  export type MVPLoreFragmentMaxAggregateInputType = {
    id?: true
    worldId?: true
    title?: true
    content?: true
    type?: true
    locationId?: true
    contextId?: true
    isRevealed?: true
  }

  export type MVPLoreFragmentCountAggregateInputType = {
    id?: true
    worldId?: true
    title?: true
    content?: true
    type?: true
    locationId?: true
    contextId?: true
    isRevealed?: true
    keywords?: true
    _all?: true
  }

  export type MVPLoreFragmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPLoreFragment to aggregate.
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLoreFragments to fetch.
     */
    orderBy?: MVPLoreFragmentOrderByWithRelationInput | MVPLoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MVPLoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLoreFragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MVPLoreFragments
    **/
    _count?: true | MVPLoreFragmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MVPLoreFragmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MVPLoreFragmentMaxAggregateInputType
  }

  export type GetMVPLoreFragmentAggregateType<T extends MVPLoreFragmentAggregateArgs> = {
        [P in keyof T & keyof AggregateMVPLoreFragment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMVPLoreFragment[P]>
      : GetScalarType<T[P], AggregateMVPLoreFragment[P]>
  }




  export type MVPLoreFragmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPLoreFragmentWhereInput
    orderBy?: MVPLoreFragmentOrderByWithAggregationInput | MVPLoreFragmentOrderByWithAggregationInput[]
    by: MVPLoreFragmentScalarFieldEnum[] | MVPLoreFragmentScalarFieldEnum
    having?: MVPLoreFragmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MVPLoreFragmentCountAggregateInputType | true
    _min?: MVPLoreFragmentMinAggregateInputType
    _max?: MVPLoreFragmentMaxAggregateInputType
  }

  export type MVPLoreFragmentGroupByOutputType = {
    id: string
    worldId: string
    title: string
    content: string
    type: string | null
    locationId: string | null
    contextId: string | null
    isRevealed: boolean
    keywords: string[]
    _count: MVPLoreFragmentCountAggregateOutputType | null
    _min: MVPLoreFragmentMinAggregateOutputType | null
    _max: MVPLoreFragmentMaxAggregateOutputType | null
  }

  type GetMVPLoreFragmentGroupByPayload<T extends MVPLoreFragmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MVPLoreFragmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MVPLoreFragmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MVPLoreFragmentGroupByOutputType[P]>
            : GetScalarType<T[P], MVPLoreFragmentGroupByOutputType[P]>
        }
      >
    >


  export type MVPLoreFragmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    locationId?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPLoreFragment"]>

  export type MVPLoreFragmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    locationId?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPLoreFragment"]>

  export type MVPLoreFragmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    locationId?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mVPLoreFragment"]>

  export type MVPLoreFragmentSelectScalar = {
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    locationId?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
  }

  export type MVPLoreFragmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worldId" | "title" | "content" | "type" | "locationId" | "contextId" | "isRevealed" | "keywords", ExtArgs["result"]["mVPLoreFragment"]>
  export type MVPLoreFragmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type MVPLoreFragmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type MVPLoreFragmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }

  export type $MVPLoreFragmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MVPLoreFragment"
    objects: {
      world: Prisma.$MVPWorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      title: string
      content: string
      type: string | null
      locationId: string | null
      contextId: string | null
      isRevealed: boolean
      keywords: string[]
    }, ExtArgs["result"]["mVPLoreFragment"]>
    composites: {}
  }

  type MVPLoreFragmentGetPayload<S extends boolean | null | undefined | MVPLoreFragmentDefaultArgs> = $Result.GetResult<Prisma.$MVPLoreFragmentPayload, S>

  type MVPLoreFragmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MVPLoreFragmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MVPLoreFragmentCountAggregateInputType | true
    }

  export interface MVPLoreFragmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MVPLoreFragment'], meta: { name: 'MVPLoreFragment' } }
    /**
     * Find zero or one MVPLoreFragment that matches the filter.
     * @param {MVPLoreFragmentFindUniqueArgs} args - Arguments to find a MVPLoreFragment
     * @example
     * // Get one MVPLoreFragment
     * const mVPLoreFragment = await prisma.mVPLoreFragment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MVPLoreFragmentFindUniqueArgs>(args: SelectSubset<T, MVPLoreFragmentFindUniqueArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MVPLoreFragment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MVPLoreFragmentFindUniqueOrThrowArgs} args - Arguments to find a MVPLoreFragment
     * @example
     * // Get one MVPLoreFragment
     * const mVPLoreFragment = await prisma.mVPLoreFragment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MVPLoreFragmentFindUniqueOrThrowArgs>(args: SelectSubset<T, MVPLoreFragmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPLoreFragment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentFindFirstArgs} args - Arguments to find a MVPLoreFragment
     * @example
     * // Get one MVPLoreFragment
     * const mVPLoreFragment = await prisma.mVPLoreFragment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MVPLoreFragmentFindFirstArgs>(args?: SelectSubset<T, MVPLoreFragmentFindFirstArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPLoreFragment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentFindFirstOrThrowArgs} args - Arguments to find a MVPLoreFragment
     * @example
     * // Get one MVPLoreFragment
     * const mVPLoreFragment = await prisma.mVPLoreFragment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MVPLoreFragmentFindFirstOrThrowArgs>(args?: SelectSubset<T, MVPLoreFragmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MVPLoreFragments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MVPLoreFragments
     * const mVPLoreFragments = await prisma.mVPLoreFragment.findMany()
     * 
     * // Get first 10 MVPLoreFragments
     * const mVPLoreFragments = await prisma.mVPLoreFragment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mVPLoreFragmentWithIdOnly = await prisma.mVPLoreFragment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MVPLoreFragmentFindManyArgs>(args?: SelectSubset<T, MVPLoreFragmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MVPLoreFragment.
     * @param {MVPLoreFragmentCreateArgs} args - Arguments to create a MVPLoreFragment.
     * @example
     * // Create one MVPLoreFragment
     * const MVPLoreFragment = await prisma.mVPLoreFragment.create({
     *   data: {
     *     // ... data to create a MVPLoreFragment
     *   }
     * })
     * 
     */
    create<T extends MVPLoreFragmentCreateArgs>(args: SelectSubset<T, MVPLoreFragmentCreateArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MVPLoreFragments.
     * @param {MVPLoreFragmentCreateManyArgs} args - Arguments to create many MVPLoreFragments.
     * @example
     * // Create many MVPLoreFragments
     * const mVPLoreFragment = await prisma.mVPLoreFragment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MVPLoreFragmentCreateManyArgs>(args?: SelectSubset<T, MVPLoreFragmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MVPLoreFragments and returns the data saved in the database.
     * @param {MVPLoreFragmentCreateManyAndReturnArgs} args - Arguments to create many MVPLoreFragments.
     * @example
     * // Create many MVPLoreFragments
     * const mVPLoreFragment = await prisma.mVPLoreFragment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MVPLoreFragments and only return the `id`
     * const mVPLoreFragmentWithIdOnly = await prisma.mVPLoreFragment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MVPLoreFragmentCreateManyAndReturnArgs>(args?: SelectSubset<T, MVPLoreFragmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MVPLoreFragment.
     * @param {MVPLoreFragmentDeleteArgs} args - Arguments to delete one MVPLoreFragment.
     * @example
     * // Delete one MVPLoreFragment
     * const MVPLoreFragment = await prisma.mVPLoreFragment.delete({
     *   where: {
     *     // ... filter to delete one MVPLoreFragment
     *   }
     * })
     * 
     */
    delete<T extends MVPLoreFragmentDeleteArgs>(args: SelectSubset<T, MVPLoreFragmentDeleteArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MVPLoreFragment.
     * @param {MVPLoreFragmentUpdateArgs} args - Arguments to update one MVPLoreFragment.
     * @example
     * // Update one MVPLoreFragment
     * const mVPLoreFragment = await prisma.mVPLoreFragment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MVPLoreFragmentUpdateArgs>(args: SelectSubset<T, MVPLoreFragmentUpdateArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MVPLoreFragments.
     * @param {MVPLoreFragmentDeleteManyArgs} args - Arguments to filter MVPLoreFragments to delete.
     * @example
     * // Delete a few MVPLoreFragments
     * const { count } = await prisma.mVPLoreFragment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MVPLoreFragmentDeleteManyArgs>(args?: SelectSubset<T, MVPLoreFragmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPLoreFragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MVPLoreFragments
     * const mVPLoreFragment = await prisma.mVPLoreFragment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MVPLoreFragmentUpdateManyArgs>(args: SelectSubset<T, MVPLoreFragmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPLoreFragments and returns the data updated in the database.
     * @param {MVPLoreFragmentUpdateManyAndReturnArgs} args - Arguments to update many MVPLoreFragments.
     * @example
     * // Update many MVPLoreFragments
     * const mVPLoreFragment = await prisma.mVPLoreFragment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MVPLoreFragments and only return the `id`
     * const mVPLoreFragmentWithIdOnly = await prisma.mVPLoreFragment.updateManyAndReturn({
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
    updateManyAndReturn<T extends MVPLoreFragmentUpdateManyAndReturnArgs>(args: SelectSubset<T, MVPLoreFragmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MVPLoreFragment.
     * @param {MVPLoreFragmentUpsertArgs} args - Arguments to update or create a MVPLoreFragment.
     * @example
     * // Update or create a MVPLoreFragment
     * const mVPLoreFragment = await prisma.mVPLoreFragment.upsert({
     *   create: {
     *     // ... data to create a MVPLoreFragment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MVPLoreFragment we want to update
     *   }
     * })
     */
    upsert<T extends MVPLoreFragmentUpsertArgs>(args: SelectSubset<T, MVPLoreFragmentUpsertArgs<ExtArgs>>): Prisma__MVPLoreFragmentClient<$Result.GetResult<Prisma.$MVPLoreFragmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MVPLoreFragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentCountArgs} args - Arguments to filter MVPLoreFragments to count.
     * @example
     * // Count the number of MVPLoreFragments
     * const count = await prisma.mVPLoreFragment.count({
     *   where: {
     *     // ... the filter for the MVPLoreFragments we want to count
     *   }
     * })
    **/
    count<T extends MVPLoreFragmentCountArgs>(
      args?: Subset<T, MVPLoreFragmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MVPLoreFragmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MVPLoreFragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MVPLoreFragmentAggregateArgs>(args: Subset<T, MVPLoreFragmentAggregateArgs>): Prisma.PrismaPromise<GetMVPLoreFragmentAggregateType<T>>

    /**
     * Group by MVPLoreFragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPLoreFragmentGroupByArgs} args - Group by arguments.
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
      T extends MVPLoreFragmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MVPLoreFragmentGroupByArgs['orderBy'] }
        : { orderBy?: MVPLoreFragmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MVPLoreFragmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMVPLoreFragmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MVPLoreFragment model
   */
  readonly fields: MVPLoreFragmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MVPLoreFragment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MVPLoreFragmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends MVPWorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorldDefaultArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MVPLoreFragment model
   */
  interface MVPLoreFragmentFieldRefs {
    readonly id: FieldRef<"MVPLoreFragment", 'String'>
    readonly worldId: FieldRef<"MVPLoreFragment", 'String'>
    readonly title: FieldRef<"MVPLoreFragment", 'String'>
    readonly content: FieldRef<"MVPLoreFragment", 'String'>
    readonly type: FieldRef<"MVPLoreFragment", 'String'>
    readonly locationId: FieldRef<"MVPLoreFragment", 'String'>
    readonly contextId: FieldRef<"MVPLoreFragment", 'String'>
    readonly isRevealed: FieldRef<"MVPLoreFragment", 'Boolean'>
    readonly keywords: FieldRef<"MVPLoreFragment", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * MVPLoreFragment findUnique
   */
  export type MVPLoreFragmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which MVPLoreFragment to fetch.
     */
    where: MVPLoreFragmentWhereUniqueInput
  }

  /**
   * MVPLoreFragment findUniqueOrThrow
   */
  export type MVPLoreFragmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which MVPLoreFragment to fetch.
     */
    where: MVPLoreFragmentWhereUniqueInput
  }

  /**
   * MVPLoreFragment findFirst
   */
  export type MVPLoreFragmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which MVPLoreFragment to fetch.
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLoreFragments to fetch.
     */
    orderBy?: MVPLoreFragmentOrderByWithRelationInput | MVPLoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPLoreFragments.
     */
    cursor?: MVPLoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLoreFragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPLoreFragments.
     */
    distinct?: MVPLoreFragmentScalarFieldEnum | MVPLoreFragmentScalarFieldEnum[]
  }

  /**
   * MVPLoreFragment findFirstOrThrow
   */
  export type MVPLoreFragmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which MVPLoreFragment to fetch.
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLoreFragments to fetch.
     */
    orderBy?: MVPLoreFragmentOrderByWithRelationInput | MVPLoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPLoreFragments.
     */
    cursor?: MVPLoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLoreFragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPLoreFragments.
     */
    distinct?: MVPLoreFragmentScalarFieldEnum | MVPLoreFragmentScalarFieldEnum[]
  }

  /**
   * MVPLoreFragment findMany
   */
  export type MVPLoreFragmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which MVPLoreFragments to fetch.
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPLoreFragments to fetch.
     */
    orderBy?: MVPLoreFragmentOrderByWithRelationInput | MVPLoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MVPLoreFragments.
     */
    cursor?: MVPLoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPLoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPLoreFragments.
     */
    skip?: number
    distinct?: MVPLoreFragmentScalarFieldEnum | MVPLoreFragmentScalarFieldEnum[]
  }

  /**
   * MVPLoreFragment create
   */
  export type MVPLoreFragmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * The data needed to create a MVPLoreFragment.
     */
    data: XOR<MVPLoreFragmentCreateInput, MVPLoreFragmentUncheckedCreateInput>
  }

  /**
   * MVPLoreFragment createMany
   */
  export type MVPLoreFragmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MVPLoreFragments.
     */
    data: MVPLoreFragmentCreateManyInput | MVPLoreFragmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPLoreFragment createManyAndReturn
   */
  export type MVPLoreFragmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * The data used to create many MVPLoreFragments.
     */
    data: MVPLoreFragmentCreateManyInput | MVPLoreFragmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPLoreFragment update
   */
  export type MVPLoreFragmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * The data needed to update a MVPLoreFragment.
     */
    data: XOR<MVPLoreFragmentUpdateInput, MVPLoreFragmentUncheckedUpdateInput>
    /**
     * Choose, which MVPLoreFragment to update.
     */
    where: MVPLoreFragmentWhereUniqueInput
  }

  /**
   * MVPLoreFragment updateMany
   */
  export type MVPLoreFragmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MVPLoreFragments.
     */
    data: XOR<MVPLoreFragmentUpdateManyMutationInput, MVPLoreFragmentUncheckedUpdateManyInput>
    /**
     * Filter which MVPLoreFragments to update
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * Limit how many MVPLoreFragments to update.
     */
    limit?: number
  }

  /**
   * MVPLoreFragment updateManyAndReturn
   */
  export type MVPLoreFragmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * The data used to update MVPLoreFragments.
     */
    data: XOR<MVPLoreFragmentUpdateManyMutationInput, MVPLoreFragmentUncheckedUpdateManyInput>
    /**
     * Filter which MVPLoreFragments to update
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * Limit how many MVPLoreFragments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPLoreFragment upsert
   */
  export type MVPLoreFragmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * The filter to search for the MVPLoreFragment to update in case it exists.
     */
    where: MVPLoreFragmentWhereUniqueInput
    /**
     * In case the MVPLoreFragment found by the `where` argument doesn't exist, create a new MVPLoreFragment with this data.
     */
    create: XOR<MVPLoreFragmentCreateInput, MVPLoreFragmentUncheckedCreateInput>
    /**
     * In case the MVPLoreFragment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MVPLoreFragmentUpdateInput, MVPLoreFragmentUncheckedUpdateInput>
  }

  /**
   * MVPLoreFragment delete
   */
  export type MVPLoreFragmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
    /**
     * Filter which MVPLoreFragment to delete.
     */
    where: MVPLoreFragmentWhereUniqueInput
  }

  /**
   * MVPLoreFragment deleteMany
   */
  export type MVPLoreFragmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPLoreFragments to delete
     */
    where?: MVPLoreFragmentWhereInput
    /**
     * Limit how many MVPLoreFragments to delete.
     */
    limit?: number
  }

  /**
   * MVPLoreFragment without action
   */
  export type MVPLoreFragmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLoreFragment
     */
    select?: MVPLoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLoreFragment
     */
    omit?: MVPLoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLoreFragmentInclude<ExtArgs> | null
  }


  /**
   * Model MVPEvent
   */

  export type AggregateMVPEvent = {
    _count: MVPEventCountAggregateOutputType | null
    _min: MVPEventMinAggregateOutputType | null
    _max: MVPEventMaxAggregateOutputType | null
  }

  export type MVPEventMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    locationId: string | null
    title: string | null
    description: string | null
    eventType: string | null
    isRepeatable: boolean | null
  }

  export type MVPEventMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    locationId: string | null
    title: string | null
    description: string | null
    eventType: string | null
    isRepeatable: boolean | null
  }

  export type MVPEventCountAggregateOutputType = {
    id: number
    worldId: number
    locationId: number
    title: number
    description: number
    eventType: number
    triggerConditions: number
    outcomes: number
    isRepeatable: number
    _all: number
  }


  export type MVPEventMinAggregateInputType = {
    id?: true
    worldId?: true
    locationId?: true
    title?: true
    description?: true
    eventType?: true
    isRepeatable?: true
  }

  export type MVPEventMaxAggregateInputType = {
    id?: true
    worldId?: true
    locationId?: true
    title?: true
    description?: true
    eventType?: true
    isRepeatable?: true
  }

  export type MVPEventCountAggregateInputType = {
    id?: true
    worldId?: true
    locationId?: true
    title?: true
    description?: true
    eventType?: true
    triggerConditions?: true
    outcomes?: true
    isRepeatable?: true
    _all?: true
  }

  export type MVPEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPEvent to aggregate.
     */
    where?: MVPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPEvents to fetch.
     */
    orderBy?: MVPEventOrderByWithRelationInput | MVPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MVPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MVPEvents
    **/
    _count?: true | MVPEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MVPEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MVPEventMaxAggregateInputType
  }

  export type GetMVPEventAggregateType<T extends MVPEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMVPEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMVPEvent[P]>
      : GetScalarType<T[P], AggregateMVPEvent[P]>
  }




  export type MVPEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MVPEventWhereInput
    orderBy?: MVPEventOrderByWithAggregationInput | MVPEventOrderByWithAggregationInput[]
    by: MVPEventScalarFieldEnum[] | MVPEventScalarFieldEnum
    having?: MVPEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MVPEventCountAggregateInputType | true
    _min?: MVPEventMinAggregateInputType
    _max?: MVPEventMaxAggregateInputType
  }

  export type MVPEventGroupByOutputType = {
    id: string
    worldId: string
    locationId: string | null
    title: string
    description: string
    eventType: string
    triggerConditions: JsonValue
    outcomes: JsonValue
    isRepeatable: boolean
    _count: MVPEventCountAggregateOutputType | null
    _min: MVPEventMinAggregateOutputType | null
    _max: MVPEventMaxAggregateOutputType | null
  }

  type GetMVPEventGroupByPayload<T extends MVPEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MVPEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MVPEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MVPEventGroupByOutputType[P]>
            : GetScalarType<T[P], MVPEventGroupByOutputType[P]>
        }
      >
    >


  export type MVPEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    location?: boolean | MVPEvent$locationArgs<ExtArgs>
  }, ExtArgs["result"]["mVPEvent"]>

  export type MVPEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    location?: boolean | MVPEvent$locationArgs<ExtArgs>
  }, ExtArgs["result"]["mVPEvent"]>

  export type MVPEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    location?: boolean | MVPEvent$locationArgs<ExtArgs>
  }, ExtArgs["result"]["mVPEvent"]>

  export type MVPEventSelectScalar = {
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
  }

  export type MVPEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worldId" | "locationId" | "title" | "description" | "eventType" | "triggerConditions" | "outcomes" | "isRepeatable", ExtArgs["result"]["mVPEvent"]>
  export type MVPEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    location?: boolean | MVPEvent$locationArgs<ExtArgs>
  }
  export type MVPEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    location?: boolean | MVPEvent$locationArgs<ExtArgs>
  }
  export type MVPEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
    location?: boolean | MVPEvent$locationArgs<ExtArgs>
  }

  export type $MVPEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MVPEvent"
    objects: {
      world: Prisma.$MVPWorldPayload<ExtArgs>
      location: Prisma.$MVPLocationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      locationId: string | null
      title: string
      description: string
      eventType: string
      triggerConditions: Prisma.JsonValue
      outcomes: Prisma.JsonValue
      isRepeatable: boolean
    }, ExtArgs["result"]["mVPEvent"]>
    composites: {}
  }

  type MVPEventGetPayload<S extends boolean | null | undefined | MVPEventDefaultArgs> = $Result.GetResult<Prisma.$MVPEventPayload, S>

  type MVPEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MVPEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MVPEventCountAggregateInputType | true
    }

  export interface MVPEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MVPEvent'], meta: { name: 'MVPEvent' } }
    /**
     * Find zero or one MVPEvent that matches the filter.
     * @param {MVPEventFindUniqueArgs} args - Arguments to find a MVPEvent
     * @example
     * // Get one MVPEvent
     * const mVPEvent = await prisma.mVPEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MVPEventFindUniqueArgs>(args: SelectSubset<T, MVPEventFindUniqueArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MVPEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MVPEventFindUniqueOrThrowArgs} args - Arguments to find a MVPEvent
     * @example
     * // Get one MVPEvent
     * const mVPEvent = await prisma.mVPEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MVPEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MVPEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventFindFirstArgs} args - Arguments to find a MVPEvent
     * @example
     * // Get one MVPEvent
     * const mVPEvent = await prisma.mVPEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MVPEventFindFirstArgs>(args?: SelectSubset<T, MVPEventFindFirstArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MVPEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventFindFirstOrThrowArgs} args - Arguments to find a MVPEvent
     * @example
     * // Get one MVPEvent
     * const mVPEvent = await prisma.mVPEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MVPEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MVPEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MVPEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MVPEvents
     * const mVPEvents = await prisma.mVPEvent.findMany()
     * 
     * // Get first 10 MVPEvents
     * const mVPEvents = await prisma.mVPEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mVPEventWithIdOnly = await prisma.mVPEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MVPEventFindManyArgs>(args?: SelectSubset<T, MVPEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MVPEvent.
     * @param {MVPEventCreateArgs} args - Arguments to create a MVPEvent.
     * @example
     * // Create one MVPEvent
     * const MVPEvent = await prisma.mVPEvent.create({
     *   data: {
     *     // ... data to create a MVPEvent
     *   }
     * })
     * 
     */
    create<T extends MVPEventCreateArgs>(args: SelectSubset<T, MVPEventCreateArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MVPEvents.
     * @param {MVPEventCreateManyArgs} args - Arguments to create many MVPEvents.
     * @example
     * // Create many MVPEvents
     * const mVPEvent = await prisma.mVPEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MVPEventCreateManyArgs>(args?: SelectSubset<T, MVPEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MVPEvents and returns the data saved in the database.
     * @param {MVPEventCreateManyAndReturnArgs} args - Arguments to create many MVPEvents.
     * @example
     * // Create many MVPEvents
     * const mVPEvent = await prisma.mVPEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MVPEvents and only return the `id`
     * const mVPEventWithIdOnly = await prisma.mVPEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MVPEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MVPEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MVPEvent.
     * @param {MVPEventDeleteArgs} args - Arguments to delete one MVPEvent.
     * @example
     * // Delete one MVPEvent
     * const MVPEvent = await prisma.mVPEvent.delete({
     *   where: {
     *     // ... filter to delete one MVPEvent
     *   }
     * })
     * 
     */
    delete<T extends MVPEventDeleteArgs>(args: SelectSubset<T, MVPEventDeleteArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MVPEvent.
     * @param {MVPEventUpdateArgs} args - Arguments to update one MVPEvent.
     * @example
     * // Update one MVPEvent
     * const mVPEvent = await prisma.mVPEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MVPEventUpdateArgs>(args: SelectSubset<T, MVPEventUpdateArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MVPEvents.
     * @param {MVPEventDeleteManyArgs} args - Arguments to filter MVPEvents to delete.
     * @example
     * // Delete a few MVPEvents
     * const { count } = await prisma.mVPEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MVPEventDeleteManyArgs>(args?: SelectSubset<T, MVPEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MVPEvents
     * const mVPEvent = await prisma.mVPEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MVPEventUpdateManyArgs>(args: SelectSubset<T, MVPEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MVPEvents and returns the data updated in the database.
     * @param {MVPEventUpdateManyAndReturnArgs} args - Arguments to update many MVPEvents.
     * @example
     * // Update many MVPEvents
     * const mVPEvent = await prisma.mVPEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MVPEvents and only return the `id`
     * const mVPEventWithIdOnly = await prisma.mVPEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends MVPEventUpdateManyAndReturnArgs>(args: SelectSubset<T, MVPEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MVPEvent.
     * @param {MVPEventUpsertArgs} args - Arguments to update or create a MVPEvent.
     * @example
     * // Update or create a MVPEvent
     * const mVPEvent = await prisma.mVPEvent.upsert({
     *   create: {
     *     // ... data to create a MVPEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MVPEvent we want to update
     *   }
     * })
     */
    upsert<T extends MVPEventUpsertArgs>(args: SelectSubset<T, MVPEventUpsertArgs<ExtArgs>>): Prisma__MVPEventClient<$Result.GetResult<Prisma.$MVPEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MVPEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventCountArgs} args - Arguments to filter MVPEvents to count.
     * @example
     * // Count the number of MVPEvents
     * const count = await prisma.mVPEvent.count({
     *   where: {
     *     // ... the filter for the MVPEvents we want to count
     *   }
     * })
    **/
    count<T extends MVPEventCountArgs>(
      args?: Subset<T, MVPEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MVPEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MVPEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MVPEventAggregateArgs>(args: Subset<T, MVPEventAggregateArgs>): Prisma.PrismaPromise<GetMVPEventAggregateType<T>>

    /**
     * Group by MVPEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MVPEventGroupByArgs} args - Group by arguments.
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
      T extends MVPEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MVPEventGroupByArgs['orderBy'] }
        : { orderBy?: MVPEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MVPEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMVPEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MVPEvent model
   */
  readonly fields: MVPEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MVPEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MVPEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends MVPWorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorldDefaultArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends MVPEvent$locationArgs<ExtArgs> = {}>(args?: Subset<T, MVPEvent$locationArgs<ExtArgs>>): Prisma__MVPLocationClient<$Result.GetResult<Prisma.$MVPLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MVPEvent model
   */
  interface MVPEventFieldRefs {
    readonly id: FieldRef<"MVPEvent", 'String'>
    readonly worldId: FieldRef<"MVPEvent", 'String'>
    readonly locationId: FieldRef<"MVPEvent", 'String'>
    readonly title: FieldRef<"MVPEvent", 'String'>
    readonly description: FieldRef<"MVPEvent", 'String'>
    readonly eventType: FieldRef<"MVPEvent", 'String'>
    readonly triggerConditions: FieldRef<"MVPEvent", 'Json'>
    readonly outcomes: FieldRef<"MVPEvent", 'Json'>
    readonly isRepeatable: FieldRef<"MVPEvent", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MVPEvent findUnique
   */
  export type MVPEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * Filter, which MVPEvent to fetch.
     */
    where: MVPEventWhereUniqueInput
  }

  /**
   * MVPEvent findUniqueOrThrow
   */
  export type MVPEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * Filter, which MVPEvent to fetch.
     */
    where: MVPEventWhereUniqueInput
  }

  /**
   * MVPEvent findFirst
   */
  export type MVPEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * Filter, which MVPEvent to fetch.
     */
    where?: MVPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPEvents to fetch.
     */
    orderBy?: MVPEventOrderByWithRelationInput | MVPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPEvents.
     */
    cursor?: MVPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPEvents.
     */
    distinct?: MVPEventScalarFieldEnum | MVPEventScalarFieldEnum[]
  }

  /**
   * MVPEvent findFirstOrThrow
   */
  export type MVPEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * Filter, which MVPEvent to fetch.
     */
    where?: MVPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPEvents to fetch.
     */
    orderBy?: MVPEventOrderByWithRelationInput | MVPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MVPEvents.
     */
    cursor?: MVPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MVPEvents.
     */
    distinct?: MVPEventScalarFieldEnum | MVPEventScalarFieldEnum[]
  }

  /**
   * MVPEvent findMany
   */
  export type MVPEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * Filter, which MVPEvents to fetch.
     */
    where?: MVPEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MVPEvents to fetch.
     */
    orderBy?: MVPEventOrderByWithRelationInput | MVPEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MVPEvents.
     */
    cursor?: MVPEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MVPEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MVPEvents.
     */
    skip?: number
    distinct?: MVPEventScalarFieldEnum | MVPEventScalarFieldEnum[]
  }

  /**
   * MVPEvent create
   */
  export type MVPEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MVPEvent.
     */
    data: XOR<MVPEventCreateInput, MVPEventUncheckedCreateInput>
  }

  /**
   * MVPEvent createMany
   */
  export type MVPEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MVPEvents.
     */
    data: MVPEventCreateManyInput | MVPEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MVPEvent createManyAndReturn
   */
  export type MVPEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * The data used to create many MVPEvents.
     */
    data: MVPEventCreateManyInput | MVPEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPEvent update
   */
  export type MVPEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MVPEvent.
     */
    data: XOR<MVPEventUpdateInput, MVPEventUncheckedUpdateInput>
    /**
     * Choose, which MVPEvent to update.
     */
    where: MVPEventWhereUniqueInput
  }

  /**
   * MVPEvent updateMany
   */
  export type MVPEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MVPEvents.
     */
    data: XOR<MVPEventUpdateManyMutationInput, MVPEventUncheckedUpdateManyInput>
    /**
     * Filter which MVPEvents to update
     */
    where?: MVPEventWhereInput
    /**
     * Limit how many MVPEvents to update.
     */
    limit?: number
  }

  /**
   * MVPEvent updateManyAndReturn
   */
  export type MVPEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * The data used to update MVPEvents.
     */
    data: XOR<MVPEventUpdateManyMutationInput, MVPEventUncheckedUpdateManyInput>
    /**
     * Filter which MVPEvents to update
     */
    where?: MVPEventWhereInput
    /**
     * Limit how many MVPEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MVPEvent upsert
   */
  export type MVPEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MVPEvent to update in case it exists.
     */
    where: MVPEventWhereUniqueInput
    /**
     * In case the MVPEvent found by the `where` argument doesn't exist, create a new MVPEvent with this data.
     */
    create: XOR<MVPEventCreateInput, MVPEventUncheckedCreateInput>
    /**
     * In case the MVPEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MVPEventUpdateInput, MVPEventUncheckedUpdateInput>
  }

  /**
   * MVPEvent delete
   */
  export type MVPEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
    /**
     * Filter which MVPEvent to delete.
     */
    where: MVPEventWhereUniqueInput
  }

  /**
   * MVPEvent deleteMany
   */
  export type MVPEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MVPEvents to delete
     */
    where?: MVPEventWhereInput
    /**
     * Limit how many MVPEvents to delete.
     */
    limit?: number
  }

  /**
   * MVPEvent.location
   */
  export type MVPEvent$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPLocation
     */
    select?: MVPLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPLocation
     */
    omit?: MVPLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPLocationInclude<ExtArgs> | null
    where?: MVPLocationWhereInput
  }

  /**
   * MVPEvent without action
   */
  export type MVPEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MVPEvent
     */
    select?: MVPEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MVPEvent
     */
    omit?: MVPEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MVPEventInclude<ExtArgs> | null
  }


  /**
   * Model SimplifiedGameState
   */

  export type AggregateSimplifiedGameState = {
    _count: SimplifiedGameStateCountAggregateOutputType | null
    _avg: SimplifiedGameStateAvgAggregateOutputType | null
    _sum: SimplifiedGameStateSumAggregateOutputType | null
    _min: SimplifiedGameStateMinAggregateOutputType | null
    _max: SimplifiedGameStateMaxAggregateOutputType | null
  }

  export type SimplifiedGameStateAvgAggregateOutputType = {
    turnNumber: number | null
  }

  export type SimplifiedGameStateSumAggregateOutputType = {
    turnNumber: number | null
  }

  export type SimplifiedGameStateMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    characterId: string | null
    worldId: string | null
    turnNumber: number | null
    currentLocationId: string | null
    lastModified: Date | null
    currentObjective: string | null
  }

  export type SimplifiedGameStateMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    characterId: string | null
    worldId: string | null
    turnNumber: number | null
    currentLocationId: string | null
    lastModified: Date | null
    currentObjective: string | null
  }

  export type SimplifiedGameStateCountAggregateOutputType = {
    id: number
    sessionId: number
    characterId: number
    worldId: number
    turnNumber: number
    characterState: number
    worldState: number
    currentLocationId: number
    narrativeLog: number
    currentChoices: number
    lastModified: number
    currentObjective: number
    _all: number
  }


  export type SimplifiedGameStateAvgAggregateInputType = {
    turnNumber?: true
  }

  export type SimplifiedGameStateSumAggregateInputType = {
    turnNumber?: true
  }

  export type SimplifiedGameStateMinAggregateInputType = {
    id?: true
    sessionId?: true
    characterId?: true
    worldId?: true
    turnNumber?: true
    currentLocationId?: true
    lastModified?: true
    currentObjective?: true
  }

  export type SimplifiedGameStateMaxAggregateInputType = {
    id?: true
    sessionId?: true
    characterId?: true
    worldId?: true
    turnNumber?: true
    currentLocationId?: true
    lastModified?: true
    currentObjective?: true
  }

  export type SimplifiedGameStateCountAggregateInputType = {
    id?: true
    sessionId?: true
    characterId?: true
    worldId?: true
    turnNumber?: true
    characterState?: true
    worldState?: true
    currentLocationId?: true
    narrativeLog?: true
    currentChoices?: true
    lastModified?: true
    currentObjective?: true
    _all?: true
  }

  export type SimplifiedGameStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimplifiedGameState to aggregate.
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimplifiedGameStates to fetch.
     */
    orderBy?: SimplifiedGameStateOrderByWithRelationInput | SimplifiedGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SimplifiedGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimplifiedGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimplifiedGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SimplifiedGameStates
    **/
    _count?: true | SimplifiedGameStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SimplifiedGameStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SimplifiedGameStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SimplifiedGameStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SimplifiedGameStateMaxAggregateInputType
  }

  export type GetSimplifiedGameStateAggregateType<T extends SimplifiedGameStateAggregateArgs> = {
        [P in keyof T & keyof AggregateSimplifiedGameState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSimplifiedGameState[P]>
      : GetScalarType<T[P], AggregateSimplifiedGameState[P]>
  }




  export type SimplifiedGameStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SimplifiedGameStateWhereInput
    orderBy?: SimplifiedGameStateOrderByWithAggregationInput | SimplifiedGameStateOrderByWithAggregationInput[]
    by: SimplifiedGameStateScalarFieldEnum[] | SimplifiedGameStateScalarFieldEnum
    having?: SimplifiedGameStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SimplifiedGameStateCountAggregateInputType | true
    _avg?: SimplifiedGameStateAvgAggregateInputType
    _sum?: SimplifiedGameStateSumAggregateInputType
    _min?: SimplifiedGameStateMinAggregateInputType
    _max?: SimplifiedGameStateMaxAggregateInputType
  }

  export type SimplifiedGameStateGroupByOutputType = {
    id: string
    sessionId: string
    characterId: string
    worldId: string
    turnNumber: number
    characterState: JsonValue
    worldState: JsonValue
    currentLocationId: string
    narrativeLog: JsonValue
    currentChoices: JsonValue
    lastModified: Date
    currentObjective: string | null
    _count: SimplifiedGameStateCountAggregateOutputType | null
    _avg: SimplifiedGameStateAvgAggregateOutputType | null
    _sum: SimplifiedGameStateSumAggregateOutputType | null
    _min: SimplifiedGameStateMinAggregateOutputType | null
    _max: SimplifiedGameStateMaxAggregateOutputType | null
  }

  type GetSimplifiedGameStateGroupByPayload<T extends SimplifiedGameStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SimplifiedGameStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SimplifiedGameStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SimplifiedGameStateGroupByOutputType[P]>
            : GetScalarType<T[P], SimplifiedGameStateGroupByOutputType[P]>
        }
      >
    >


  export type SimplifiedGameStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    turnNumber?: boolean
    characterState?: boolean
    worldState?: boolean
    currentLocationId?: boolean
    narrativeLog?: boolean
    currentChoices?: boolean
    lastModified?: boolean
    currentObjective?: boolean
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simplifiedGameState"]>

  export type SimplifiedGameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    turnNumber?: boolean
    characterState?: boolean
    worldState?: boolean
    currentLocationId?: boolean
    narrativeLog?: boolean
    currentChoices?: boolean
    lastModified?: boolean
    currentObjective?: boolean
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simplifiedGameState"]>

  export type SimplifiedGameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    turnNumber?: boolean
    characterState?: boolean
    worldState?: boolean
    currentLocationId?: boolean
    narrativeLog?: boolean
    currentChoices?: boolean
    lastModified?: boolean
    currentObjective?: boolean
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["simplifiedGameState"]>

  export type SimplifiedGameStateSelectScalar = {
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    turnNumber?: boolean
    characterState?: boolean
    worldState?: boolean
    currentLocationId?: boolean
    narrativeLog?: boolean
    currentChoices?: boolean
    lastModified?: boolean
    currentObjective?: boolean
  }

  export type SimplifiedGameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "characterId" | "worldId" | "turnNumber" | "characterState" | "worldState" | "currentLocationId" | "narrativeLog" | "currentChoices" | "lastModified" | "currentObjective", ExtArgs["result"]["simplifiedGameState"]>
  export type SimplifiedGameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type SimplifiedGameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }
  export type SimplifiedGameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | MVPCharacterDefaultArgs<ExtArgs>
    world?: boolean | MVPWorldDefaultArgs<ExtArgs>
  }

  export type $SimplifiedGameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SimplifiedGameState"
    objects: {
      character: Prisma.$MVPCharacterPayload<ExtArgs>
      world: Prisma.$MVPWorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      characterId: string
      worldId: string
      turnNumber: number
      characterState: Prisma.JsonValue
      worldState: Prisma.JsonValue
      currentLocationId: string
      narrativeLog: Prisma.JsonValue
      currentChoices: Prisma.JsonValue
      lastModified: Date
      currentObjective: string | null
    }, ExtArgs["result"]["simplifiedGameState"]>
    composites: {}
  }

  type SimplifiedGameStateGetPayload<S extends boolean | null | undefined | SimplifiedGameStateDefaultArgs> = $Result.GetResult<Prisma.$SimplifiedGameStatePayload, S>

  type SimplifiedGameStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SimplifiedGameStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SimplifiedGameStateCountAggregateInputType | true
    }

  export interface SimplifiedGameStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SimplifiedGameState'], meta: { name: 'SimplifiedGameState' } }
    /**
     * Find zero or one SimplifiedGameState that matches the filter.
     * @param {SimplifiedGameStateFindUniqueArgs} args - Arguments to find a SimplifiedGameState
     * @example
     * // Get one SimplifiedGameState
     * const simplifiedGameState = await prisma.simplifiedGameState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SimplifiedGameStateFindUniqueArgs>(args: SelectSubset<T, SimplifiedGameStateFindUniqueArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SimplifiedGameState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SimplifiedGameStateFindUniqueOrThrowArgs} args - Arguments to find a SimplifiedGameState
     * @example
     * // Get one SimplifiedGameState
     * const simplifiedGameState = await prisma.simplifiedGameState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SimplifiedGameStateFindUniqueOrThrowArgs>(args: SelectSubset<T, SimplifiedGameStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimplifiedGameState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateFindFirstArgs} args - Arguments to find a SimplifiedGameState
     * @example
     * // Get one SimplifiedGameState
     * const simplifiedGameState = await prisma.simplifiedGameState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SimplifiedGameStateFindFirstArgs>(args?: SelectSubset<T, SimplifiedGameStateFindFirstArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SimplifiedGameState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateFindFirstOrThrowArgs} args - Arguments to find a SimplifiedGameState
     * @example
     * // Get one SimplifiedGameState
     * const simplifiedGameState = await prisma.simplifiedGameState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SimplifiedGameStateFindFirstOrThrowArgs>(args?: SelectSubset<T, SimplifiedGameStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SimplifiedGameStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SimplifiedGameStates
     * const simplifiedGameStates = await prisma.simplifiedGameState.findMany()
     * 
     * // Get first 10 SimplifiedGameStates
     * const simplifiedGameStates = await prisma.simplifiedGameState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const simplifiedGameStateWithIdOnly = await prisma.simplifiedGameState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SimplifiedGameStateFindManyArgs>(args?: SelectSubset<T, SimplifiedGameStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SimplifiedGameState.
     * @param {SimplifiedGameStateCreateArgs} args - Arguments to create a SimplifiedGameState.
     * @example
     * // Create one SimplifiedGameState
     * const SimplifiedGameState = await prisma.simplifiedGameState.create({
     *   data: {
     *     // ... data to create a SimplifiedGameState
     *   }
     * })
     * 
     */
    create<T extends SimplifiedGameStateCreateArgs>(args: SelectSubset<T, SimplifiedGameStateCreateArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SimplifiedGameStates.
     * @param {SimplifiedGameStateCreateManyArgs} args - Arguments to create many SimplifiedGameStates.
     * @example
     * // Create many SimplifiedGameStates
     * const simplifiedGameState = await prisma.simplifiedGameState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SimplifiedGameStateCreateManyArgs>(args?: SelectSubset<T, SimplifiedGameStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SimplifiedGameStates and returns the data saved in the database.
     * @param {SimplifiedGameStateCreateManyAndReturnArgs} args - Arguments to create many SimplifiedGameStates.
     * @example
     * // Create many SimplifiedGameStates
     * const simplifiedGameState = await prisma.simplifiedGameState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SimplifiedGameStates and only return the `id`
     * const simplifiedGameStateWithIdOnly = await prisma.simplifiedGameState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SimplifiedGameStateCreateManyAndReturnArgs>(args?: SelectSubset<T, SimplifiedGameStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SimplifiedGameState.
     * @param {SimplifiedGameStateDeleteArgs} args - Arguments to delete one SimplifiedGameState.
     * @example
     * // Delete one SimplifiedGameState
     * const SimplifiedGameState = await prisma.simplifiedGameState.delete({
     *   where: {
     *     // ... filter to delete one SimplifiedGameState
     *   }
     * })
     * 
     */
    delete<T extends SimplifiedGameStateDeleteArgs>(args: SelectSubset<T, SimplifiedGameStateDeleteArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SimplifiedGameState.
     * @param {SimplifiedGameStateUpdateArgs} args - Arguments to update one SimplifiedGameState.
     * @example
     * // Update one SimplifiedGameState
     * const simplifiedGameState = await prisma.simplifiedGameState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SimplifiedGameStateUpdateArgs>(args: SelectSubset<T, SimplifiedGameStateUpdateArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SimplifiedGameStates.
     * @param {SimplifiedGameStateDeleteManyArgs} args - Arguments to filter SimplifiedGameStates to delete.
     * @example
     * // Delete a few SimplifiedGameStates
     * const { count } = await prisma.simplifiedGameState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SimplifiedGameStateDeleteManyArgs>(args?: SelectSubset<T, SimplifiedGameStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimplifiedGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SimplifiedGameStates
     * const simplifiedGameState = await prisma.simplifiedGameState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SimplifiedGameStateUpdateManyArgs>(args: SelectSubset<T, SimplifiedGameStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SimplifiedGameStates and returns the data updated in the database.
     * @param {SimplifiedGameStateUpdateManyAndReturnArgs} args - Arguments to update many SimplifiedGameStates.
     * @example
     * // Update many SimplifiedGameStates
     * const simplifiedGameState = await prisma.simplifiedGameState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SimplifiedGameStates and only return the `id`
     * const simplifiedGameStateWithIdOnly = await prisma.simplifiedGameState.updateManyAndReturn({
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
    updateManyAndReturn<T extends SimplifiedGameStateUpdateManyAndReturnArgs>(args: SelectSubset<T, SimplifiedGameStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SimplifiedGameState.
     * @param {SimplifiedGameStateUpsertArgs} args - Arguments to update or create a SimplifiedGameState.
     * @example
     * // Update or create a SimplifiedGameState
     * const simplifiedGameState = await prisma.simplifiedGameState.upsert({
     *   create: {
     *     // ... data to create a SimplifiedGameState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SimplifiedGameState we want to update
     *   }
     * })
     */
    upsert<T extends SimplifiedGameStateUpsertArgs>(args: SelectSubset<T, SimplifiedGameStateUpsertArgs<ExtArgs>>): Prisma__SimplifiedGameStateClient<$Result.GetResult<Prisma.$SimplifiedGameStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SimplifiedGameStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateCountArgs} args - Arguments to filter SimplifiedGameStates to count.
     * @example
     * // Count the number of SimplifiedGameStates
     * const count = await prisma.simplifiedGameState.count({
     *   where: {
     *     // ... the filter for the SimplifiedGameStates we want to count
     *   }
     * })
    **/
    count<T extends SimplifiedGameStateCountArgs>(
      args?: Subset<T, SimplifiedGameStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SimplifiedGameStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SimplifiedGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SimplifiedGameStateAggregateArgs>(args: Subset<T, SimplifiedGameStateAggregateArgs>): Prisma.PrismaPromise<GetSimplifiedGameStateAggregateType<T>>

    /**
     * Group by SimplifiedGameState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SimplifiedGameStateGroupByArgs} args - Group by arguments.
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
      T extends SimplifiedGameStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SimplifiedGameStateGroupByArgs['orderBy'] }
        : { orderBy?: SimplifiedGameStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SimplifiedGameStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSimplifiedGameStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SimplifiedGameState model
   */
  readonly fields: SimplifiedGameStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SimplifiedGameState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SimplifiedGameStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends MVPCharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPCharacterDefaultArgs<ExtArgs>>): Prisma__MVPCharacterClient<$Result.GetResult<Prisma.$MVPCharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    world<T extends MVPWorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MVPWorldDefaultArgs<ExtArgs>>): Prisma__MVPWorldClient<$Result.GetResult<Prisma.$MVPWorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SimplifiedGameState model
   */
  interface SimplifiedGameStateFieldRefs {
    readonly id: FieldRef<"SimplifiedGameState", 'String'>
    readonly sessionId: FieldRef<"SimplifiedGameState", 'String'>
    readonly characterId: FieldRef<"SimplifiedGameState", 'String'>
    readonly worldId: FieldRef<"SimplifiedGameState", 'String'>
    readonly turnNumber: FieldRef<"SimplifiedGameState", 'Int'>
    readonly characterState: FieldRef<"SimplifiedGameState", 'Json'>
    readonly worldState: FieldRef<"SimplifiedGameState", 'Json'>
    readonly currentLocationId: FieldRef<"SimplifiedGameState", 'String'>
    readonly narrativeLog: FieldRef<"SimplifiedGameState", 'Json'>
    readonly currentChoices: FieldRef<"SimplifiedGameState", 'Json'>
    readonly lastModified: FieldRef<"SimplifiedGameState", 'DateTime'>
    readonly currentObjective: FieldRef<"SimplifiedGameState", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SimplifiedGameState findUnique
   */
  export type SimplifiedGameStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * Filter, which SimplifiedGameState to fetch.
     */
    where: SimplifiedGameStateWhereUniqueInput
  }

  /**
   * SimplifiedGameState findUniqueOrThrow
   */
  export type SimplifiedGameStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * Filter, which SimplifiedGameState to fetch.
     */
    where: SimplifiedGameStateWhereUniqueInput
  }

  /**
   * SimplifiedGameState findFirst
   */
  export type SimplifiedGameStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * Filter, which SimplifiedGameState to fetch.
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimplifiedGameStates to fetch.
     */
    orderBy?: SimplifiedGameStateOrderByWithRelationInput | SimplifiedGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimplifiedGameStates.
     */
    cursor?: SimplifiedGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimplifiedGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimplifiedGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimplifiedGameStates.
     */
    distinct?: SimplifiedGameStateScalarFieldEnum | SimplifiedGameStateScalarFieldEnum[]
  }

  /**
   * SimplifiedGameState findFirstOrThrow
   */
  export type SimplifiedGameStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * Filter, which SimplifiedGameState to fetch.
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimplifiedGameStates to fetch.
     */
    orderBy?: SimplifiedGameStateOrderByWithRelationInput | SimplifiedGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SimplifiedGameStates.
     */
    cursor?: SimplifiedGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimplifiedGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimplifiedGameStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SimplifiedGameStates.
     */
    distinct?: SimplifiedGameStateScalarFieldEnum | SimplifiedGameStateScalarFieldEnum[]
  }

  /**
   * SimplifiedGameState findMany
   */
  export type SimplifiedGameStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * Filter, which SimplifiedGameStates to fetch.
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SimplifiedGameStates to fetch.
     */
    orderBy?: SimplifiedGameStateOrderByWithRelationInput | SimplifiedGameStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SimplifiedGameStates.
     */
    cursor?: SimplifiedGameStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SimplifiedGameStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SimplifiedGameStates.
     */
    skip?: number
    distinct?: SimplifiedGameStateScalarFieldEnum | SimplifiedGameStateScalarFieldEnum[]
  }

  /**
   * SimplifiedGameState create
   */
  export type SimplifiedGameStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * The data needed to create a SimplifiedGameState.
     */
    data: XOR<SimplifiedGameStateCreateInput, SimplifiedGameStateUncheckedCreateInput>
  }

  /**
   * SimplifiedGameState createMany
   */
  export type SimplifiedGameStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SimplifiedGameStates.
     */
    data: SimplifiedGameStateCreateManyInput | SimplifiedGameStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SimplifiedGameState createManyAndReturn
   */
  export type SimplifiedGameStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * The data used to create many SimplifiedGameStates.
     */
    data: SimplifiedGameStateCreateManyInput | SimplifiedGameStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SimplifiedGameState update
   */
  export type SimplifiedGameStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * The data needed to update a SimplifiedGameState.
     */
    data: XOR<SimplifiedGameStateUpdateInput, SimplifiedGameStateUncheckedUpdateInput>
    /**
     * Choose, which SimplifiedGameState to update.
     */
    where: SimplifiedGameStateWhereUniqueInput
  }

  /**
   * SimplifiedGameState updateMany
   */
  export type SimplifiedGameStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SimplifiedGameStates.
     */
    data: XOR<SimplifiedGameStateUpdateManyMutationInput, SimplifiedGameStateUncheckedUpdateManyInput>
    /**
     * Filter which SimplifiedGameStates to update
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * Limit how many SimplifiedGameStates to update.
     */
    limit?: number
  }

  /**
   * SimplifiedGameState updateManyAndReturn
   */
  export type SimplifiedGameStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * The data used to update SimplifiedGameStates.
     */
    data: XOR<SimplifiedGameStateUpdateManyMutationInput, SimplifiedGameStateUncheckedUpdateManyInput>
    /**
     * Filter which SimplifiedGameStates to update
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * Limit how many SimplifiedGameStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SimplifiedGameState upsert
   */
  export type SimplifiedGameStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * The filter to search for the SimplifiedGameState to update in case it exists.
     */
    where: SimplifiedGameStateWhereUniqueInput
    /**
     * In case the SimplifiedGameState found by the `where` argument doesn't exist, create a new SimplifiedGameState with this data.
     */
    create: XOR<SimplifiedGameStateCreateInput, SimplifiedGameStateUncheckedCreateInput>
    /**
     * In case the SimplifiedGameState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SimplifiedGameStateUpdateInput, SimplifiedGameStateUncheckedUpdateInput>
  }

  /**
   * SimplifiedGameState delete
   */
  export type SimplifiedGameStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
    /**
     * Filter which SimplifiedGameState to delete.
     */
    where: SimplifiedGameStateWhereUniqueInput
  }

  /**
   * SimplifiedGameState deleteMany
   */
  export type SimplifiedGameStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SimplifiedGameStates to delete
     */
    where?: SimplifiedGameStateWhereInput
    /**
     * Limit how many SimplifiedGameStates to delete.
     */
    limit?: number
  }

  /**
   * SimplifiedGameState without action
   */
  export type SimplifiedGameStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SimplifiedGameState
     */
    select?: SimplifiedGameStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SimplifiedGameState
     */
    omit?: SimplifiedGameStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SimplifiedGameStateInclude<ExtArgs> | null
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
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    lastLogin: 'lastLogin',
    isActive: 'isActive',
    preferences: 'preferences',
    emailVerified: 'emailVerified',
    verificationToken: 'verificationToken',
    verificationTokenExpires: 'verificationTokenExpires',
    resetPasswordToken: 'resetPasswordToken',
    resetPasswordExpires: 'resetPasswordExpires',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    avatarUrl: 'avatarUrl',
    bio: 'bio',
    preferences: 'preferences',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserProfileScalarFieldEnum = (typeof UserProfileScalarFieldEnum)[keyof typeof UserProfileScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expires: 'expires',
    userAgent: 'userAgent',
    ip: 'ip',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lastActive: 'lastActive'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const MVPCharacterScalarFieldEnum: {
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

  export type MVPCharacterScalarFieldEnum = (typeof MVPCharacterScalarFieldEnum)[keyof typeof MVPCharacterScalarFieldEnum]


  export const MVPWorldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    thumbnailUrl: 'thumbnailUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type MVPWorldScalarFieldEnum = (typeof MVPWorldScalarFieldEnum)[keyof typeof MVPWorldScalarFieldEnum]


  export const MVPCharacterWorldStateScalarFieldEnum: {
    characterId: 'characterId',
    worldId: 'worldId',
    currentLocation: 'currentLocation',
    lastPlayedAt: 'lastPlayedAt'
  };

  export type MVPCharacterWorldStateScalarFieldEnum = (typeof MVPCharacterWorldStateScalarFieldEnum)[keyof typeof MVPCharacterWorldStateScalarFieldEnum]


  export const MVPLocationScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    name: 'name',
    description: 'description',
    isStartingLocation: 'isStartingLocation',
    connectedLocationIds: 'connectedLocationIds',
    dangerLevel: 'dangerLevel',
    thumbnailUrl: 'thumbnailUrl'
  };

  export type MVPLocationScalarFieldEnum = (typeof MVPLocationScalarFieldEnum)[keyof typeof MVPLocationScalarFieldEnum]


  export const MVPLoreFragmentScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    title: 'title',
    content: 'content',
    type: 'type',
    locationId: 'locationId',
    contextId: 'contextId',
    isRevealed: 'isRevealed',
    keywords: 'keywords'
  };

  export type MVPLoreFragmentScalarFieldEnum = (typeof MVPLoreFragmentScalarFieldEnum)[keyof typeof MVPLoreFragmentScalarFieldEnum]


  export const MVPEventScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    locationId: 'locationId',
    title: 'title',
    description: 'description',
    eventType: 'eventType',
    triggerConditions: 'triggerConditions',
    outcomes: 'outcomes',
    isRepeatable: 'isRepeatable'
  };

  export type MVPEventScalarFieldEnum = (typeof MVPEventScalarFieldEnum)[keyof typeof MVPEventScalarFieldEnum]


  export const SimplifiedGameStateScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    characterId: 'characterId',
    worldId: 'worldId',
    turnNumber: 'turnNumber',
    characterState: 'characterState',
    worldState: 'worldState',
    currentLocationId: 'currentLocationId',
    narrativeLog: 'narrativeLog',
    currentChoices: 'currentChoices',
    lastModified: 'lastModified',
    currentObjective: 'currentObjective'
  };

  export type SimplifiedGameStateScalarFieldEnum = (typeof SimplifiedGameStateScalarFieldEnum)[keyof typeof SimplifiedGameStateScalarFieldEnum]


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
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    preferences?: JsonFilter<"User">
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    mvpCharacters?: MVPCharacterListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    preferences?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    role?: SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    profile?: UserProfileOrderByWithRelationInput
    mvpCharacters?: MVPCharacterOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    preferences?: JsonFilter<"User">
    emailVerified?: BoolFilter<"User"> | boolean
    verificationToken?: StringNullableFilter<"User"> | string | null
    verificationTokenExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: StringFilter<"User"> | string
    sessions?: SessionListRelationFilter
    profile?: XOR<UserProfileNullableScalarRelationFilter, UserProfileWhereInput> | null
    mvpCharacters?: MVPCharacterListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    isActive?: SortOrder
    preferences?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrderInput | SortOrder
    verificationTokenExpires?: SortOrderInput | SortOrder
    resetPasswordToken?: SortOrderInput | SortOrder
    resetPasswordExpires?: SortOrderInput | SortOrder
    role?: SortOrder
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
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    preferences?: JsonWithAggregatesFilter<"User">
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    verificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    verificationTokenExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    resetPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetPasswordExpires?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type UserProfileWhereInput = {
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    id?: StringFilter<"UserProfile"> | string
    userId?: StringFilter<"UserProfile"> | string
    name?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    preferences?: JsonFilter<"UserProfile">
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    preferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserProfileWhereInput | UserProfileWhereInput[]
    OR?: UserProfileWhereInput[]
    NOT?: UserProfileWhereInput | UserProfileWhereInput[]
    name?: StringFilter<"UserProfile"> | string
    avatarUrl?: StringNullableFilter<"UserProfile"> | string | null
    bio?: StringNullableFilter<"UserProfile"> | string | null
    preferences?: JsonFilter<"UserProfile">
    createdAt?: DateTimeFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeFilter<"UserProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    preferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserProfileCountOrderByAggregateInput
    _max?: UserProfileMaxOrderByAggregateInput
    _min?: UserProfileMinOrderByAggregateInput
  }

  export type UserProfileScalarWhereWithAggregatesInput = {
    AND?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    OR?: UserProfileScalarWhereWithAggregatesInput[]
    NOT?: UserProfileScalarWhereWithAggregatesInput | UserProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserProfile"> | string
    userId?: StringWithAggregatesFilter<"UserProfile"> | string
    name?: StringWithAggregatesFilter<"UserProfile"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"UserProfile"> | string | null
    preferences?: JsonWithAggregatesFilter<"UserProfile">
    createdAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserProfile"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeFilter<"Session"> | Date | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ip?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    lastActive?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrderInput | SortOrder
    expires?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActive?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ip?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    lastActive?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrderInput | SortOrder
    expires?: SortOrder
    userAgent?: SortOrderInput | SortOrder
    ip?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActive?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    ip?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    lastActive?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type MVPCharacterWhereInput = {
    AND?: MVPCharacterWhereInput | MVPCharacterWhereInput[]
    OR?: MVPCharacterWhereInput[]
    NOT?: MVPCharacterWhereInput | MVPCharacterWhereInput[]
    id?: StringFilter<"MVPCharacter"> | string
    userId?: StringFilter<"MVPCharacter"> | string
    name?: StringFilter<"MVPCharacter"> | string
    backstory?: StringNullableFilter<"MVPCharacter"> | string | null
    appearanceDescription?: StringNullableFilter<"MVPCharacter"> | string | null
    personalityTraits?: JsonFilter<"MVPCharacter">
    createdAt?: DateTimeFilter<"MVPCharacter"> | Date | string
    lastPlayedAt?: DateTimeNullableFilter<"MVPCharacter"> | Date | string | null
    isActive?: BoolFilter<"MVPCharacter"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mvpCharacterWorldStates?: MVPCharacterWorldStateListRelationFilter
    simplifiedGameStates?: SimplifiedGameStateListRelationFilter
  }

  export type MVPCharacterOrderByWithRelationInput = {
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
    mvpCharacterWorldStates?: MVPCharacterWorldStateOrderByRelationAggregateInput
    simplifiedGameStates?: SimplifiedGameStateOrderByRelationAggregateInput
  }

  export type MVPCharacterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: MVPCharacterUserIdNameCompoundUniqueInput
    AND?: MVPCharacterWhereInput | MVPCharacterWhereInput[]
    OR?: MVPCharacterWhereInput[]
    NOT?: MVPCharacterWhereInput | MVPCharacterWhereInput[]
    userId?: StringFilter<"MVPCharacter"> | string
    name?: StringFilter<"MVPCharacter"> | string
    backstory?: StringNullableFilter<"MVPCharacter"> | string | null
    appearanceDescription?: StringNullableFilter<"MVPCharacter"> | string | null
    personalityTraits?: JsonFilter<"MVPCharacter">
    createdAt?: DateTimeFilter<"MVPCharacter"> | Date | string
    lastPlayedAt?: DateTimeNullableFilter<"MVPCharacter"> | Date | string | null
    isActive?: BoolFilter<"MVPCharacter"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    mvpCharacterWorldStates?: MVPCharacterWorldStateListRelationFilter
    simplifiedGameStates?: SimplifiedGameStateListRelationFilter
  }, "id" | "userId_name">

  export type MVPCharacterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrderInput | SortOrder
    appearanceDescription?: SortOrderInput | SortOrder
    personalityTraits?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: MVPCharacterCountOrderByAggregateInput
    _max?: MVPCharacterMaxOrderByAggregateInput
    _min?: MVPCharacterMinOrderByAggregateInput
  }

  export type MVPCharacterScalarWhereWithAggregatesInput = {
    AND?: MVPCharacterScalarWhereWithAggregatesInput | MVPCharacterScalarWhereWithAggregatesInput[]
    OR?: MVPCharacterScalarWhereWithAggregatesInput[]
    NOT?: MVPCharacterScalarWhereWithAggregatesInput | MVPCharacterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MVPCharacter"> | string
    userId?: StringWithAggregatesFilter<"MVPCharacter"> | string
    name?: StringWithAggregatesFilter<"MVPCharacter"> | string
    backstory?: StringNullableWithAggregatesFilter<"MVPCharacter"> | string | null
    appearanceDescription?: StringNullableWithAggregatesFilter<"MVPCharacter"> | string | null
    personalityTraits?: JsonWithAggregatesFilter<"MVPCharacter">
    createdAt?: DateTimeWithAggregatesFilter<"MVPCharacter"> | Date | string
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"MVPCharacter"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"MVPCharacter"> | boolean
  }

  export type MVPWorldWhereInput = {
    AND?: MVPWorldWhereInput | MVPWorldWhereInput[]
    OR?: MVPWorldWhereInput[]
    NOT?: MVPWorldWhereInput | MVPWorldWhereInput[]
    id?: StringFilter<"MVPWorld"> | string
    name?: StringFilter<"MVPWorld"> | string
    description?: StringNullableFilter<"MVPWorld"> | string | null
    thumbnailUrl?: StringNullableFilter<"MVPWorld"> | string | null
    isActive?: BoolFilter<"MVPWorld"> | boolean
    createdAt?: DateTimeFilter<"MVPWorld"> | Date | string
    mvpLocations?: MVPLocationListRelationFilter
    mvpLoreFragments?: MVPLoreFragmentListRelationFilter
    mvpCharacterWorldStates?: MVPCharacterWorldStateListRelationFilter
    simplifiedGameStates?: SimplifiedGameStateListRelationFilter
    MVPEvent?: MVPEventListRelationFilter
  }

  export type MVPWorldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    mvpLocations?: MVPLocationOrderByRelationAggregateInput
    mvpLoreFragments?: MVPLoreFragmentOrderByRelationAggregateInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateOrderByRelationAggregateInput
    simplifiedGameStates?: SimplifiedGameStateOrderByRelationAggregateInput
    MVPEvent?: MVPEventOrderByRelationAggregateInput
  }

  export type MVPWorldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MVPWorldWhereInput | MVPWorldWhereInput[]
    OR?: MVPWorldWhereInput[]
    NOT?: MVPWorldWhereInput | MVPWorldWhereInput[]
    name?: StringFilter<"MVPWorld"> | string
    description?: StringNullableFilter<"MVPWorld"> | string | null
    thumbnailUrl?: StringNullableFilter<"MVPWorld"> | string | null
    isActive?: BoolFilter<"MVPWorld"> | boolean
    createdAt?: DateTimeFilter<"MVPWorld"> | Date | string
    mvpLocations?: MVPLocationListRelationFilter
    mvpLoreFragments?: MVPLoreFragmentListRelationFilter
    mvpCharacterWorldStates?: MVPCharacterWorldStateListRelationFilter
    simplifiedGameStates?: SimplifiedGameStateListRelationFilter
    MVPEvent?: MVPEventListRelationFilter
  }, "id">

  export type MVPWorldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: MVPWorldCountOrderByAggregateInput
    _max?: MVPWorldMaxOrderByAggregateInput
    _min?: MVPWorldMinOrderByAggregateInput
  }

  export type MVPWorldScalarWhereWithAggregatesInput = {
    AND?: MVPWorldScalarWhereWithAggregatesInput | MVPWorldScalarWhereWithAggregatesInput[]
    OR?: MVPWorldScalarWhereWithAggregatesInput[]
    NOT?: MVPWorldScalarWhereWithAggregatesInput | MVPWorldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MVPWorld"> | string
    name?: StringWithAggregatesFilter<"MVPWorld"> | string
    description?: StringNullableWithAggregatesFilter<"MVPWorld"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"MVPWorld"> | string | null
    isActive?: BoolWithAggregatesFilter<"MVPWorld"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"MVPWorld"> | Date | string
  }

  export type MVPCharacterWorldStateWhereInput = {
    AND?: MVPCharacterWorldStateWhereInput | MVPCharacterWorldStateWhereInput[]
    OR?: MVPCharacterWorldStateWhereInput[]
    NOT?: MVPCharacterWorldStateWhereInput | MVPCharacterWorldStateWhereInput[]
    characterId?: StringFilter<"MVPCharacterWorldState"> | string
    worldId?: StringFilter<"MVPCharacterWorldState"> | string
    currentLocation?: StringNullableFilter<"MVPCharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableFilter<"MVPCharacterWorldState"> | Date | string | null
    character?: XOR<MVPCharacterScalarRelationFilter, MVPCharacterWhereInput>
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
  }

  export type MVPCharacterWorldStateOrderByWithRelationInput = {
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    character?: MVPCharacterOrderByWithRelationInput
    world?: MVPWorldOrderByWithRelationInput
  }

  export type MVPCharacterWorldStateWhereUniqueInput = Prisma.AtLeast<{
    characterId_worldId?: MVPCharacterWorldStateCharacterIdWorldIdCompoundUniqueInput
    AND?: MVPCharacterWorldStateWhereInput | MVPCharacterWorldStateWhereInput[]
    OR?: MVPCharacterWorldStateWhereInput[]
    NOT?: MVPCharacterWorldStateWhereInput | MVPCharacterWorldStateWhereInput[]
    characterId?: StringFilter<"MVPCharacterWorldState"> | string
    worldId?: StringFilter<"MVPCharacterWorldState"> | string
    currentLocation?: StringNullableFilter<"MVPCharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableFilter<"MVPCharacterWorldState"> | Date | string | null
    character?: XOR<MVPCharacterScalarRelationFilter, MVPCharacterWhereInput>
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
  }, "characterId_worldId">

  export type MVPCharacterWorldStateOrderByWithAggregationInput = {
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    _count?: MVPCharacterWorldStateCountOrderByAggregateInput
    _max?: MVPCharacterWorldStateMaxOrderByAggregateInput
    _min?: MVPCharacterWorldStateMinOrderByAggregateInput
  }

  export type MVPCharacterWorldStateScalarWhereWithAggregatesInput = {
    AND?: MVPCharacterWorldStateScalarWhereWithAggregatesInput | MVPCharacterWorldStateScalarWhereWithAggregatesInput[]
    OR?: MVPCharacterWorldStateScalarWhereWithAggregatesInput[]
    NOT?: MVPCharacterWorldStateScalarWhereWithAggregatesInput | MVPCharacterWorldStateScalarWhereWithAggregatesInput[]
    characterId?: StringWithAggregatesFilter<"MVPCharacterWorldState"> | string
    worldId?: StringWithAggregatesFilter<"MVPCharacterWorldState"> | string
    currentLocation?: StringNullableWithAggregatesFilter<"MVPCharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"MVPCharacterWorldState"> | Date | string | null
  }

  export type MVPLocationWhereInput = {
    AND?: MVPLocationWhereInput | MVPLocationWhereInput[]
    OR?: MVPLocationWhereInput[]
    NOT?: MVPLocationWhereInput | MVPLocationWhereInput[]
    id?: StringFilter<"MVPLocation"> | string
    worldId?: StringFilter<"MVPLocation"> | string
    name?: StringFilter<"MVPLocation"> | string
    description?: StringNullableFilter<"MVPLocation"> | string | null
    isStartingLocation?: BoolFilter<"MVPLocation"> | boolean
    connectedLocationIds?: StringNullableListFilter<"MVPLocation">
    dangerLevel?: StringNullableFilter<"MVPLocation"> | string | null
    thumbnailUrl?: StringNullableFilter<"MVPLocation"> | string | null
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
    MVPEvent?: MVPEventListRelationFilter
  }

  export type MVPLocationOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isStartingLocation?: SortOrder
    connectedLocationIds?: SortOrder
    dangerLevel?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    world?: MVPWorldOrderByWithRelationInput
    MVPEvent?: MVPEventOrderByRelationAggregateInput
  }

  export type MVPLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    worldId_name?: MVPLocationWorldIdNameCompoundUniqueInput
    AND?: MVPLocationWhereInput | MVPLocationWhereInput[]
    OR?: MVPLocationWhereInput[]
    NOT?: MVPLocationWhereInput | MVPLocationWhereInput[]
    worldId?: StringFilter<"MVPLocation"> | string
    name?: StringFilter<"MVPLocation"> | string
    description?: StringNullableFilter<"MVPLocation"> | string | null
    isStartingLocation?: BoolFilter<"MVPLocation"> | boolean
    connectedLocationIds?: StringNullableListFilter<"MVPLocation">
    dangerLevel?: StringNullableFilter<"MVPLocation"> | string | null
    thumbnailUrl?: StringNullableFilter<"MVPLocation"> | string | null
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
    MVPEvent?: MVPEventListRelationFilter
  }, "id" | "worldId_name">

  export type MVPLocationOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isStartingLocation?: SortOrder
    connectedLocationIds?: SortOrder
    dangerLevel?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    _count?: MVPLocationCountOrderByAggregateInput
    _max?: MVPLocationMaxOrderByAggregateInput
    _min?: MVPLocationMinOrderByAggregateInput
  }

  export type MVPLocationScalarWhereWithAggregatesInput = {
    AND?: MVPLocationScalarWhereWithAggregatesInput | MVPLocationScalarWhereWithAggregatesInput[]
    OR?: MVPLocationScalarWhereWithAggregatesInput[]
    NOT?: MVPLocationScalarWhereWithAggregatesInput | MVPLocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MVPLocation"> | string
    worldId?: StringWithAggregatesFilter<"MVPLocation"> | string
    name?: StringWithAggregatesFilter<"MVPLocation"> | string
    description?: StringNullableWithAggregatesFilter<"MVPLocation"> | string | null
    isStartingLocation?: BoolWithAggregatesFilter<"MVPLocation"> | boolean
    connectedLocationIds?: StringNullableListFilter<"MVPLocation">
    dangerLevel?: StringNullableWithAggregatesFilter<"MVPLocation"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"MVPLocation"> | string | null
  }

  export type MVPLoreFragmentWhereInput = {
    AND?: MVPLoreFragmentWhereInput | MVPLoreFragmentWhereInput[]
    OR?: MVPLoreFragmentWhereInput[]
    NOT?: MVPLoreFragmentWhereInput | MVPLoreFragmentWhereInput[]
    id?: StringFilter<"MVPLoreFragment"> | string
    worldId?: StringFilter<"MVPLoreFragment"> | string
    title?: StringFilter<"MVPLoreFragment"> | string
    content?: StringFilter<"MVPLoreFragment"> | string
    type?: StringNullableFilter<"MVPLoreFragment"> | string | null
    locationId?: StringNullableFilter<"MVPLoreFragment"> | string | null
    contextId?: StringNullableFilter<"MVPLoreFragment"> | string | null
    isRevealed?: BoolFilter<"MVPLoreFragment"> | boolean
    keywords?: StringNullableListFilter<"MVPLoreFragment">
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
  }

  export type MVPLoreFragmentOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    contextId?: SortOrderInput | SortOrder
    isRevealed?: SortOrder
    keywords?: SortOrder
    world?: MVPWorldOrderByWithRelationInput
  }

  export type MVPLoreFragmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MVPLoreFragmentWhereInput | MVPLoreFragmentWhereInput[]
    OR?: MVPLoreFragmentWhereInput[]
    NOT?: MVPLoreFragmentWhereInput | MVPLoreFragmentWhereInput[]
    worldId?: StringFilter<"MVPLoreFragment"> | string
    title?: StringFilter<"MVPLoreFragment"> | string
    content?: StringFilter<"MVPLoreFragment"> | string
    type?: StringNullableFilter<"MVPLoreFragment"> | string | null
    locationId?: StringNullableFilter<"MVPLoreFragment"> | string | null
    contextId?: StringNullableFilter<"MVPLoreFragment"> | string | null
    isRevealed?: BoolFilter<"MVPLoreFragment"> | boolean
    keywords?: StringNullableListFilter<"MVPLoreFragment">
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
  }, "id">

  export type MVPLoreFragmentOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
    contextId?: SortOrderInput | SortOrder
    isRevealed?: SortOrder
    keywords?: SortOrder
    _count?: MVPLoreFragmentCountOrderByAggregateInput
    _max?: MVPLoreFragmentMaxOrderByAggregateInput
    _min?: MVPLoreFragmentMinOrderByAggregateInput
  }

  export type MVPLoreFragmentScalarWhereWithAggregatesInput = {
    AND?: MVPLoreFragmentScalarWhereWithAggregatesInput | MVPLoreFragmentScalarWhereWithAggregatesInput[]
    OR?: MVPLoreFragmentScalarWhereWithAggregatesInput[]
    NOT?: MVPLoreFragmentScalarWhereWithAggregatesInput | MVPLoreFragmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MVPLoreFragment"> | string
    worldId?: StringWithAggregatesFilter<"MVPLoreFragment"> | string
    title?: StringWithAggregatesFilter<"MVPLoreFragment"> | string
    content?: StringWithAggregatesFilter<"MVPLoreFragment"> | string
    type?: StringNullableWithAggregatesFilter<"MVPLoreFragment"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"MVPLoreFragment"> | string | null
    contextId?: StringNullableWithAggregatesFilter<"MVPLoreFragment"> | string | null
    isRevealed?: BoolWithAggregatesFilter<"MVPLoreFragment"> | boolean
    keywords?: StringNullableListFilter<"MVPLoreFragment">
  }

  export type MVPEventWhereInput = {
    AND?: MVPEventWhereInput | MVPEventWhereInput[]
    OR?: MVPEventWhereInput[]
    NOT?: MVPEventWhereInput | MVPEventWhereInput[]
    id?: StringFilter<"MVPEvent"> | string
    worldId?: StringFilter<"MVPEvent"> | string
    locationId?: StringNullableFilter<"MVPEvent"> | string | null
    title?: StringFilter<"MVPEvent"> | string
    description?: StringFilter<"MVPEvent"> | string
    eventType?: StringFilter<"MVPEvent"> | string
    triggerConditions?: JsonFilter<"MVPEvent">
    outcomes?: JsonFilter<"MVPEvent">
    isRepeatable?: BoolFilter<"MVPEvent"> | boolean
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
    location?: XOR<MVPLocationNullableScalarRelationFilter, MVPLocationWhereInput> | null
  }

  export type MVPEventOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    triggerConditions?: SortOrder
    outcomes?: SortOrder
    isRepeatable?: SortOrder
    world?: MVPWorldOrderByWithRelationInput
    location?: MVPLocationOrderByWithRelationInput
  }

  export type MVPEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MVPEventWhereInput | MVPEventWhereInput[]
    OR?: MVPEventWhereInput[]
    NOT?: MVPEventWhereInput | MVPEventWhereInput[]
    worldId?: StringFilter<"MVPEvent"> | string
    locationId?: StringNullableFilter<"MVPEvent"> | string | null
    title?: StringFilter<"MVPEvent"> | string
    description?: StringFilter<"MVPEvent"> | string
    eventType?: StringFilter<"MVPEvent"> | string
    triggerConditions?: JsonFilter<"MVPEvent">
    outcomes?: JsonFilter<"MVPEvent">
    isRepeatable?: BoolFilter<"MVPEvent"> | boolean
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
    location?: XOR<MVPLocationNullableScalarRelationFilter, MVPLocationWhereInput> | null
  }, "id">

  export type MVPEventOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    triggerConditions?: SortOrder
    outcomes?: SortOrder
    isRepeatable?: SortOrder
    _count?: MVPEventCountOrderByAggregateInput
    _max?: MVPEventMaxOrderByAggregateInput
    _min?: MVPEventMinOrderByAggregateInput
  }

  export type MVPEventScalarWhereWithAggregatesInput = {
    AND?: MVPEventScalarWhereWithAggregatesInput | MVPEventScalarWhereWithAggregatesInput[]
    OR?: MVPEventScalarWhereWithAggregatesInput[]
    NOT?: MVPEventScalarWhereWithAggregatesInput | MVPEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MVPEvent"> | string
    worldId?: StringWithAggregatesFilter<"MVPEvent"> | string
    locationId?: StringNullableWithAggregatesFilter<"MVPEvent"> | string | null
    title?: StringWithAggregatesFilter<"MVPEvent"> | string
    description?: StringWithAggregatesFilter<"MVPEvent"> | string
    eventType?: StringWithAggregatesFilter<"MVPEvent"> | string
    triggerConditions?: JsonWithAggregatesFilter<"MVPEvent">
    outcomes?: JsonWithAggregatesFilter<"MVPEvent">
    isRepeatable?: BoolWithAggregatesFilter<"MVPEvent"> | boolean
  }

  export type SimplifiedGameStateWhereInput = {
    AND?: SimplifiedGameStateWhereInput | SimplifiedGameStateWhereInput[]
    OR?: SimplifiedGameStateWhereInput[]
    NOT?: SimplifiedGameStateWhereInput | SimplifiedGameStateWhereInput[]
    id?: StringFilter<"SimplifiedGameState"> | string
    sessionId?: StringFilter<"SimplifiedGameState"> | string
    characterId?: StringFilter<"SimplifiedGameState"> | string
    worldId?: StringFilter<"SimplifiedGameState"> | string
    turnNumber?: IntFilter<"SimplifiedGameState"> | number
    characterState?: JsonFilter<"SimplifiedGameState">
    worldState?: JsonFilter<"SimplifiedGameState">
    currentLocationId?: StringFilter<"SimplifiedGameState"> | string
    narrativeLog?: JsonFilter<"SimplifiedGameState">
    currentChoices?: JsonFilter<"SimplifiedGameState">
    lastModified?: DateTimeFilter<"SimplifiedGameState"> | Date | string
    currentObjective?: StringNullableFilter<"SimplifiedGameState"> | string | null
    character?: XOR<MVPCharacterScalarRelationFilter, MVPCharacterWhereInput>
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
  }

  export type SimplifiedGameStateOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    turnNumber?: SortOrder
    characterState?: SortOrder
    worldState?: SortOrder
    currentLocationId?: SortOrder
    narrativeLog?: SortOrder
    currentChoices?: SortOrder
    lastModified?: SortOrder
    currentObjective?: SortOrderInput | SortOrder
    character?: MVPCharacterOrderByWithRelationInput
    world?: MVPWorldOrderByWithRelationInput
  }

  export type SimplifiedGameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SimplifiedGameStateWhereInput | SimplifiedGameStateWhereInput[]
    OR?: SimplifiedGameStateWhereInput[]
    NOT?: SimplifiedGameStateWhereInput | SimplifiedGameStateWhereInput[]
    sessionId?: StringFilter<"SimplifiedGameState"> | string
    characterId?: StringFilter<"SimplifiedGameState"> | string
    worldId?: StringFilter<"SimplifiedGameState"> | string
    turnNumber?: IntFilter<"SimplifiedGameState"> | number
    characterState?: JsonFilter<"SimplifiedGameState">
    worldState?: JsonFilter<"SimplifiedGameState">
    currentLocationId?: StringFilter<"SimplifiedGameState"> | string
    narrativeLog?: JsonFilter<"SimplifiedGameState">
    currentChoices?: JsonFilter<"SimplifiedGameState">
    lastModified?: DateTimeFilter<"SimplifiedGameState"> | Date | string
    currentObjective?: StringNullableFilter<"SimplifiedGameState"> | string | null
    character?: XOR<MVPCharacterScalarRelationFilter, MVPCharacterWhereInput>
    world?: XOR<MVPWorldScalarRelationFilter, MVPWorldWhereInput>
  }, "id">

  export type SimplifiedGameStateOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    turnNumber?: SortOrder
    characterState?: SortOrder
    worldState?: SortOrder
    currentLocationId?: SortOrder
    narrativeLog?: SortOrder
    currentChoices?: SortOrder
    lastModified?: SortOrder
    currentObjective?: SortOrderInput | SortOrder
    _count?: SimplifiedGameStateCountOrderByAggregateInput
    _avg?: SimplifiedGameStateAvgOrderByAggregateInput
    _max?: SimplifiedGameStateMaxOrderByAggregateInput
    _min?: SimplifiedGameStateMinOrderByAggregateInput
    _sum?: SimplifiedGameStateSumOrderByAggregateInput
  }

  export type SimplifiedGameStateScalarWhereWithAggregatesInput = {
    AND?: SimplifiedGameStateScalarWhereWithAggregatesInput | SimplifiedGameStateScalarWhereWithAggregatesInput[]
    OR?: SimplifiedGameStateScalarWhereWithAggregatesInput[]
    NOT?: SimplifiedGameStateScalarWhereWithAggregatesInput | SimplifiedGameStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SimplifiedGameState"> | string
    sessionId?: StringWithAggregatesFilter<"SimplifiedGameState"> | string
    characterId?: StringWithAggregatesFilter<"SimplifiedGameState"> | string
    worldId?: StringWithAggregatesFilter<"SimplifiedGameState"> | string
    turnNumber?: IntWithAggregatesFilter<"SimplifiedGameState"> | number
    characterState?: JsonWithAggregatesFilter<"SimplifiedGameState">
    worldState?: JsonWithAggregatesFilter<"SimplifiedGameState">
    currentLocationId?: StringWithAggregatesFilter<"SimplifiedGameState"> | string
    narrativeLog?: JsonWithAggregatesFilter<"SimplifiedGameState">
    currentChoices?: JsonWithAggregatesFilter<"SimplifiedGameState">
    lastModified?: DateTimeWithAggregatesFilter<"SimplifiedGameState"> | Date | string
    currentObjective?: StringNullableWithAggregatesFilter<"SimplifiedGameState"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
    mvpCharacters?: MVPCharacterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    mvpCharacters?: MVPCharacterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    mvpCharacters?: MVPCharacterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    mvpCharacters?: MVPCharacterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserProfileCreateInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    bio?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type UserProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    avatarUrl?: string | null
    bio?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type UserProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileCreateManyInput = {
    id?: string
    userId: string
    name: string
    avatarUrl?: string | null
    bio?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token?: string | null
    expires: Date | string
    userAgent?: string | null
    ip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActive?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token?: string | null
    expires: Date | string
    userAgent?: string | null
    ip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActive?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token?: string | null
    expires: Date | string
    userAgent?: string | null
    ip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActive?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MVPCharacterCreateInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutMvpCharactersInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutCharacterInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMvpCharactersNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutCharacterNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutCharacterNestedInput
  }

  export type MVPCharacterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type MVPCharacterCreateManyInput = {
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

  export type MVPCharacterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPCharacterUncheckedUpdateManyInput = {
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

  export type MVPWorldCreateInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationUncheckedCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUncheckedUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type MVPWorldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MVPWorldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MVPCharacterWorldStateCreateInput = {
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
    character: MVPCharacterCreateNestedOneWithoutMvpCharacterWorldStatesInput
    world: MVPWorldCreateNestedOneWithoutMvpCharacterWorldStatesInput
  }

  export type MVPCharacterWorldStateUncheckedCreateInput = {
    characterId: string
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type MVPCharacterWorldStateUpdateInput = {
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    character?: MVPCharacterUpdateOneRequiredWithoutMvpCharacterWorldStatesNestedInput
    world?: MVPWorldUpdateOneRequiredWithoutMvpCharacterWorldStatesNestedInput
  }

  export type MVPCharacterWorldStateUncheckedUpdateInput = {
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MVPCharacterWorldStateCreateManyInput = {
    characterId: string
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type MVPCharacterWorldStateUpdateManyMutationInput = {
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MVPCharacterWorldStateUncheckedUpdateManyInput = {
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MVPLocationCreateInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
    world: MVPWorldCreateNestedOneWithoutMvpLocationsInput
    MVPEvent?: MVPEventCreateNestedManyWithoutLocationInput
  }

  export type MVPLocationUncheckedCreateInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutLocationInput
  }

  export type MVPLocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    world?: MVPWorldUpdateOneRequiredWithoutMvpLocationsNestedInput
    MVPEvent?: MVPEventUpdateManyWithoutLocationNestedInput
  }

  export type MVPLocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type MVPLocationCreateManyInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
  }

  export type MVPLocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MVPLocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MVPLoreFragmentCreateInput = {
    id?: string
    title: string
    content: string
    type?: string | null
    locationId?: string | null
    contextId?: string | null
    isRevealed?: boolean
    keywords?: MVPLoreFragmentCreatekeywordsInput | string[]
    world: MVPWorldCreateNestedOneWithoutMvpLoreFragmentsInput
  }

  export type MVPLoreFragmentUncheckedCreateInput = {
    id?: string
    worldId: string
    title: string
    content: string
    type?: string | null
    locationId?: string | null
    contextId?: string | null
    isRevealed?: boolean
    keywords?: MVPLoreFragmentCreatekeywordsInput | string[]
  }

  export type MVPLoreFragmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
    world?: MVPWorldUpdateOneRequiredWithoutMvpLoreFragmentsNestedInput
  }

  export type MVPLoreFragmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
  }

  export type MVPLoreFragmentCreateManyInput = {
    id?: string
    worldId: string
    title: string
    content: string
    type?: string | null
    locationId?: string | null
    contextId?: string | null
    isRevealed?: boolean
    keywords?: MVPLoreFragmentCreatekeywordsInput | string[]
  }

  export type MVPLoreFragmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
  }

  export type MVPLoreFragmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
  }

  export type MVPEventCreateInput = {
    id?: string
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
    world: MVPWorldCreateNestedOneWithoutMVPEventInput
    location?: MVPLocationCreateNestedOneWithoutMVPEventInput
  }

  export type MVPEventUncheckedCreateInput = {
    id?: string
    worldId: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type MVPEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
    world?: MVPWorldUpdateOneRequiredWithoutMVPEventNestedInput
    location?: MVPLocationUpdateOneWithoutMVPEventNestedInput
  }

  export type MVPEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPEventCreateManyInput = {
    id?: string
    worldId: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type MVPEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SimplifiedGameStateCreateInput = {
    id?: string
    sessionId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
    character: MVPCharacterCreateNestedOneWithoutSimplifiedGameStatesInput
    world: MVPWorldCreateNestedOneWithoutSimplifiedGameStatesInput
  }

  export type SimplifiedGameStateUncheckedCreateInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
  }

  export type SimplifiedGameStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
    character?: MVPCharacterUpdateOneRequiredWithoutSimplifiedGameStatesNestedInput
    world?: MVPWorldUpdateOneRequiredWithoutSimplifiedGameStatesNestedInput
  }

  export type SimplifiedGameStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SimplifiedGameStateCreateManyInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
  }

  export type SimplifiedGameStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SimplifiedGameStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type UserProfileNullableScalarRelationFilter = {
    is?: UserProfileWhereInput | null
    isNot?: UserProfileWhereInput | null
  }

  export type MVPCharacterListRelationFilter = {
    every?: MVPCharacterWhereInput
    some?: MVPCharacterWhereInput
    none?: MVPCharacterWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MVPCharacterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    preferences?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    lastLogin?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    verificationToken?: SortOrder
    verificationTokenExpires?: SortOrder
    resetPasswordToken?: SortOrder
    resetPasswordExpires?: SortOrder
    role?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    preferences?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActive?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActive?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    userAgent?: SortOrder
    ip?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    lastActive?: SortOrder
  }

  export type MVPCharacterWorldStateListRelationFilter = {
    every?: MVPCharacterWorldStateWhereInput
    some?: MVPCharacterWorldStateWhereInput
    none?: MVPCharacterWorldStateWhereInput
  }

  export type SimplifiedGameStateListRelationFilter = {
    every?: SimplifiedGameStateWhereInput
    some?: SimplifiedGameStateWhereInput
    none?: SimplifiedGameStateWhereInput
  }

  export type MVPCharacterWorldStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SimplifiedGameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MVPCharacterUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type MVPCharacterCountOrderByAggregateInput = {
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

  export type MVPCharacterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrder
    appearanceDescription?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrder
    isActive?: SortOrder
  }

  export type MVPCharacterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    backstory?: SortOrder
    appearanceDescription?: SortOrder
    createdAt?: SortOrder
    lastPlayedAt?: SortOrder
    isActive?: SortOrder
  }

  export type MVPLocationListRelationFilter = {
    every?: MVPLocationWhereInput
    some?: MVPLocationWhereInput
    none?: MVPLocationWhereInput
  }

  export type MVPLoreFragmentListRelationFilter = {
    every?: MVPLoreFragmentWhereInput
    some?: MVPLoreFragmentWhereInput
    none?: MVPLoreFragmentWhereInput
  }

  export type MVPEventListRelationFilter = {
    every?: MVPEventWhereInput
    some?: MVPEventWhereInput
    none?: MVPEventWhereInput
  }

  export type MVPLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MVPLoreFragmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MVPEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MVPWorldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MVPWorldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MVPWorldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type MVPCharacterScalarRelationFilter = {
    is?: MVPCharacterWhereInput
    isNot?: MVPCharacterWhereInput
  }

  export type MVPWorldScalarRelationFilter = {
    is?: MVPWorldWhereInput
    isNot?: MVPWorldWhereInput
  }

  export type MVPCharacterWorldStateCharacterIdWorldIdCompoundUniqueInput = {
    characterId: string
    worldId: string
  }

  export type MVPCharacterWorldStateCountOrderByAggregateInput = {
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type MVPCharacterWorldStateMaxOrderByAggregateInput = {
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type MVPCharacterWorldStateMinOrderByAggregateInput = {
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MVPLocationWorldIdNameCompoundUniqueInput = {
    worldId: string
    name: string
  }

  export type MVPLocationCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isStartingLocation?: SortOrder
    connectedLocationIds?: SortOrder
    dangerLevel?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type MVPLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isStartingLocation?: SortOrder
    dangerLevel?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type MVPLocationMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isStartingLocation?: SortOrder
    dangerLevel?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type MVPLoreFragmentCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    locationId?: SortOrder
    contextId?: SortOrder
    isRevealed?: SortOrder
    keywords?: SortOrder
  }

  export type MVPLoreFragmentMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    locationId?: SortOrder
    contextId?: SortOrder
    isRevealed?: SortOrder
  }

  export type MVPLoreFragmentMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    locationId?: SortOrder
    contextId?: SortOrder
    isRevealed?: SortOrder
  }

  export type MVPLocationNullableScalarRelationFilter = {
    is?: MVPLocationWhereInput | null
    isNot?: MVPLocationWhereInput | null
  }

  export type MVPEventCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    triggerConditions?: SortOrder
    outcomes?: SortOrder
    isRepeatable?: SortOrder
  }

  export type MVPEventMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    isRepeatable?: SortOrder
  }

  export type MVPEventMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    isRepeatable?: SortOrder
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

  export type SimplifiedGameStateCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    turnNumber?: SortOrder
    characterState?: SortOrder
    worldState?: SortOrder
    currentLocationId?: SortOrder
    narrativeLog?: SortOrder
    currentChoices?: SortOrder
    lastModified?: SortOrder
    currentObjective?: SortOrder
  }

  export type SimplifiedGameStateAvgOrderByAggregateInput = {
    turnNumber?: SortOrder
  }

  export type SimplifiedGameStateMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    turnNumber?: SortOrder
    currentLocationId?: SortOrder
    lastModified?: SortOrder
    currentObjective?: SortOrder
  }

  export type SimplifiedGameStateMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    turnNumber?: SortOrder
    currentLocationId?: SortOrder
    lastModified?: SortOrder
    currentObjective?: SortOrder
  }

  export type SimplifiedGameStateSumOrderByAggregateInput = {
    turnNumber?: SortOrder
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

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type MVPCharacterCreateNestedManyWithoutUserInput = {
    create?: XOR<MVPCharacterCreateWithoutUserInput, MVPCharacterUncheckedCreateWithoutUserInput> | MVPCharacterCreateWithoutUserInput[] | MVPCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutUserInput | MVPCharacterCreateOrConnectWithoutUserInput[]
    createMany?: MVPCharacterCreateManyUserInputEnvelope
    connect?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type UserProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    connect?: UserProfileWhereUniqueInput
  }

  export type MVPCharacterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MVPCharacterCreateWithoutUserInput, MVPCharacterUncheckedCreateWithoutUserInput> | MVPCharacterCreateWithoutUserInput[] | MVPCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutUserInput | MVPCharacterCreateOrConnectWithoutUserInput[]
    createMany?: MVPCharacterCreateManyUserInputEnvelope
    connect?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type MVPCharacterUpdateManyWithoutUserNestedInput = {
    create?: XOR<MVPCharacterCreateWithoutUserInput, MVPCharacterUncheckedCreateWithoutUserInput> | MVPCharacterCreateWithoutUserInput[] | MVPCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutUserInput | MVPCharacterCreateOrConnectWithoutUserInput[]
    upsert?: MVPCharacterUpsertWithWhereUniqueWithoutUserInput | MVPCharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MVPCharacterCreateManyUserInputEnvelope
    set?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    disconnect?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    delete?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    connect?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    update?: MVPCharacterUpdateWithWhereUniqueWithoutUserInput | MVPCharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MVPCharacterUpdateManyWithWhereWithoutUserInput | MVPCharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MVPCharacterScalarWhereInput | MVPCharacterScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type UserProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserProfileCreateOrConnectWithoutUserInput
    upsert?: UserProfileUpsertWithoutUserInput
    disconnect?: UserProfileWhereInput | boolean
    delete?: UserProfileWhereInput | boolean
    connect?: UserProfileWhereUniqueInput
    update?: XOR<XOR<UserProfileUpdateToOneWithWhereWithoutUserInput, UserProfileUpdateWithoutUserInput>, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type MVPCharacterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MVPCharacterCreateWithoutUserInput, MVPCharacterUncheckedCreateWithoutUserInput> | MVPCharacterCreateWithoutUserInput[] | MVPCharacterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutUserInput | MVPCharacterCreateOrConnectWithoutUserInput[]
    upsert?: MVPCharacterUpsertWithWhereUniqueWithoutUserInput | MVPCharacterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MVPCharacterCreateManyUserInputEnvelope
    set?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    disconnect?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    delete?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    connect?: MVPCharacterWhereUniqueInput | MVPCharacterWhereUniqueInput[]
    update?: MVPCharacterUpdateWithWhereUniqueWithoutUserInput | MVPCharacterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MVPCharacterUpdateManyWithWhereWithoutUserInput | MVPCharacterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MVPCharacterScalarWhereInput | MVPCharacterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutMvpCharactersInput = {
    create?: XOR<UserCreateWithoutMvpCharactersInput, UserUncheckedCreateWithoutMvpCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMvpCharactersInput
    connect?: UserWhereUniqueInput
  }

  export type MVPCharacterWorldStateCreateNestedManyWithoutCharacterInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutCharacterInput, MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput> | MVPCharacterWorldStateCreateWithoutCharacterInput[] | MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput | MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    createMany?: MVPCharacterWorldStateCreateManyCharacterInputEnvelope
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
  }

  export type SimplifiedGameStateCreateNestedManyWithoutCharacterInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutCharacterInput, SimplifiedGameStateUncheckedCreateWithoutCharacterInput> | SimplifiedGameStateCreateWithoutCharacterInput[] | SimplifiedGameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutCharacterInput | SimplifiedGameStateCreateOrConnectWithoutCharacterInput[]
    createMany?: SimplifiedGameStateCreateManyCharacterInputEnvelope
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
  }

  export type MVPCharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutCharacterInput, MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput> | MVPCharacterWorldStateCreateWithoutCharacterInput[] | MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput | MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    createMany?: MVPCharacterWorldStateCreateManyCharacterInputEnvelope
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
  }

  export type SimplifiedGameStateUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutCharacterInput, SimplifiedGameStateUncheckedCreateWithoutCharacterInput> | SimplifiedGameStateCreateWithoutCharacterInput[] | SimplifiedGameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutCharacterInput | SimplifiedGameStateCreateOrConnectWithoutCharacterInput[]
    createMany?: SimplifiedGameStateCreateManyCharacterInputEnvelope
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMvpCharactersNestedInput = {
    create?: XOR<UserCreateWithoutMvpCharactersInput, UserUncheckedCreateWithoutMvpCharactersInput>
    connectOrCreate?: UserCreateOrConnectWithoutMvpCharactersInput
    upsert?: UserUpsertWithoutMvpCharactersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMvpCharactersInput, UserUpdateWithoutMvpCharactersInput>, UserUncheckedUpdateWithoutMvpCharactersInput>
  }

  export type MVPCharacterWorldStateUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutCharacterInput, MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput> | MVPCharacterWorldStateCreateWithoutCharacterInput[] | MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput | MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    upsert?: MVPCharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput | MVPCharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: MVPCharacterWorldStateCreateManyCharacterInputEnvelope
    set?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    disconnect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    delete?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    update?: MVPCharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput | MVPCharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: MVPCharacterWorldStateUpdateManyWithWhereWithoutCharacterInput | MVPCharacterWorldStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: MVPCharacterWorldStateScalarWhereInput | MVPCharacterWorldStateScalarWhereInput[]
  }

  export type SimplifiedGameStateUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutCharacterInput, SimplifiedGameStateUncheckedCreateWithoutCharacterInput> | SimplifiedGameStateCreateWithoutCharacterInput[] | SimplifiedGameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutCharacterInput | SimplifiedGameStateCreateOrConnectWithoutCharacterInput[]
    upsert?: SimplifiedGameStateUpsertWithWhereUniqueWithoutCharacterInput | SimplifiedGameStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: SimplifiedGameStateCreateManyCharacterInputEnvelope
    set?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    disconnect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    delete?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    update?: SimplifiedGameStateUpdateWithWhereUniqueWithoutCharacterInput | SimplifiedGameStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: SimplifiedGameStateUpdateManyWithWhereWithoutCharacterInput | SimplifiedGameStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: SimplifiedGameStateScalarWhereInput | SimplifiedGameStateScalarWhereInput[]
  }

  export type MVPCharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutCharacterInput, MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput> | MVPCharacterWorldStateCreateWithoutCharacterInput[] | MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput | MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    upsert?: MVPCharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput | MVPCharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: MVPCharacterWorldStateCreateManyCharacterInputEnvelope
    set?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    disconnect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    delete?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    update?: MVPCharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput | MVPCharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: MVPCharacterWorldStateUpdateManyWithWhereWithoutCharacterInput | MVPCharacterWorldStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: MVPCharacterWorldStateScalarWhereInput | MVPCharacterWorldStateScalarWhereInput[]
  }

  export type SimplifiedGameStateUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutCharacterInput, SimplifiedGameStateUncheckedCreateWithoutCharacterInput> | SimplifiedGameStateCreateWithoutCharacterInput[] | SimplifiedGameStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutCharacterInput | SimplifiedGameStateCreateOrConnectWithoutCharacterInput[]
    upsert?: SimplifiedGameStateUpsertWithWhereUniqueWithoutCharacterInput | SimplifiedGameStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: SimplifiedGameStateCreateManyCharacterInputEnvelope
    set?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    disconnect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    delete?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    update?: SimplifiedGameStateUpdateWithWhereUniqueWithoutCharacterInput | SimplifiedGameStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: SimplifiedGameStateUpdateManyWithWhereWithoutCharacterInput | SimplifiedGameStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: SimplifiedGameStateScalarWhereInput | SimplifiedGameStateScalarWhereInput[]
  }

  export type MVPLocationCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPLocationCreateWithoutWorldInput, MVPLocationUncheckedCreateWithoutWorldInput> | MVPLocationCreateWithoutWorldInput[] | MVPLocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLocationCreateOrConnectWithoutWorldInput | MVPLocationCreateOrConnectWithoutWorldInput[]
    createMany?: MVPLocationCreateManyWorldInputEnvelope
    connect?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
  }

  export type MVPLoreFragmentCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPLoreFragmentCreateWithoutWorldInput, MVPLoreFragmentUncheckedCreateWithoutWorldInput> | MVPLoreFragmentCreateWithoutWorldInput[] | MVPLoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLoreFragmentCreateOrConnectWithoutWorldInput | MVPLoreFragmentCreateOrConnectWithoutWorldInput[]
    createMany?: MVPLoreFragmentCreateManyWorldInputEnvelope
    connect?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
  }

  export type MVPCharacterWorldStateCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutWorldInput, MVPCharacterWorldStateUncheckedCreateWithoutWorldInput> | MVPCharacterWorldStateCreateWithoutWorldInput[] | MVPCharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutWorldInput | MVPCharacterWorldStateCreateOrConnectWithoutWorldInput[]
    createMany?: MVPCharacterWorldStateCreateManyWorldInputEnvelope
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
  }

  export type SimplifiedGameStateCreateNestedManyWithoutWorldInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutWorldInput, SimplifiedGameStateUncheckedCreateWithoutWorldInput> | SimplifiedGameStateCreateWithoutWorldInput[] | SimplifiedGameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutWorldInput | SimplifiedGameStateCreateOrConnectWithoutWorldInput[]
    createMany?: SimplifiedGameStateCreateManyWorldInputEnvelope
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
  }

  export type MVPEventCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPEventCreateWithoutWorldInput, MVPEventUncheckedCreateWithoutWorldInput> | MVPEventCreateWithoutWorldInput[] | MVPEventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutWorldInput | MVPEventCreateOrConnectWithoutWorldInput[]
    createMany?: MVPEventCreateManyWorldInputEnvelope
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
  }

  export type MVPLocationUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPLocationCreateWithoutWorldInput, MVPLocationUncheckedCreateWithoutWorldInput> | MVPLocationCreateWithoutWorldInput[] | MVPLocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLocationCreateOrConnectWithoutWorldInput | MVPLocationCreateOrConnectWithoutWorldInput[]
    createMany?: MVPLocationCreateManyWorldInputEnvelope
    connect?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
  }

  export type MVPLoreFragmentUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPLoreFragmentCreateWithoutWorldInput, MVPLoreFragmentUncheckedCreateWithoutWorldInput> | MVPLoreFragmentCreateWithoutWorldInput[] | MVPLoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLoreFragmentCreateOrConnectWithoutWorldInput | MVPLoreFragmentCreateOrConnectWithoutWorldInput[]
    createMany?: MVPLoreFragmentCreateManyWorldInputEnvelope
    connect?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
  }

  export type MVPCharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutWorldInput, MVPCharacterWorldStateUncheckedCreateWithoutWorldInput> | MVPCharacterWorldStateCreateWithoutWorldInput[] | MVPCharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutWorldInput | MVPCharacterWorldStateCreateOrConnectWithoutWorldInput[]
    createMany?: MVPCharacterWorldStateCreateManyWorldInputEnvelope
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
  }

  export type SimplifiedGameStateUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutWorldInput, SimplifiedGameStateUncheckedCreateWithoutWorldInput> | SimplifiedGameStateCreateWithoutWorldInput[] | SimplifiedGameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutWorldInput | SimplifiedGameStateCreateOrConnectWithoutWorldInput[]
    createMany?: SimplifiedGameStateCreateManyWorldInputEnvelope
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
  }

  export type MVPEventUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<MVPEventCreateWithoutWorldInput, MVPEventUncheckedCreateWithoutWorldInput> | MVPEventCreateWithoutWorldInput[] | MVPEventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutWorldInput | MVPEventCreateOrConnectWithoutWorldInput[]
    createMany?: MVPEventCreateManyWorldInputEnvelope
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
  }

  export type MVPLocationUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPLocationCreateWithoutWorldInput, MVPLocationUncheckedCreateWithoutWorldInput> | MVPLocationCreateWithoutWorldInput[] | MVPLocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLocationCreateOrConnectWithoutWorldInput | MVPLocationCreateOrConnectWithoutWorldInput[]
    upsert?: MVPLocationUpsertWithWhereUniqueWithoutWorldInput | MVPLocationUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPLocationCreateManyWorldInputEnvelope
    set?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    disconnect?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    delete?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    connect?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    update?: MVPLocationUpdateWithWhereUniqueWithoutWorldInput | MVPLocationUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPLocationUpdateManyWithWhereWithoutWorldInput | MVPLocationUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPLocationScalarWhereInput | MVPLocationScalarWhereInput[]
  }

  export type MVPLoreFragmentUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPLoreFragmentCreateWithoutWorldInput, MVPLoreFragmentUncheckedCreateWithoutWorldInput> | MVPLoreFragmentCreateWithoutWorldInput[] | MVPLoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLoreFragmentCreateOrConnectWithoutWorldInput | MVPLoreFragmentCreateOrConnectWithoutWorldInput[]
    upsert?: MVPLoreFragmentUpsertWithWhereUniqueWithoutWorldInput | MVPLoreFragmentUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPLoreFragmentCreateManyWorldInputEnvelope
    set?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    disconnect?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    delete?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    connect?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    update?: MVPLoreFragmentUpdateWithWhereUniqueWithoutWorldInput | MVPLoreFragmentUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPLoreFragmentUpdateManyWithWhereWithoutWorldInput | MVPLoreFragmentUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPLoreFragmentScalarWhereInput | MVPLoreFragmentScalarWhereInput[]
  }

  export type MVPCharacterWorldStateUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutWorldInput, MVPCharacterWorldStateUncheckedCreateWithoutWorldInput> | MVPCharacterWorldStateCreateWithoutWorldInput[] | MVPCharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutWorldInput | MVPCharacterWorldStateCreateOrConnectWithoutWorldInput[]
    upsert?: MVPCharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput | MVPCharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPCharacterWorldStateCreateManyWorldInputEnvelope
    set?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    disconnect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    delete?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    update?: MVPCharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput | MVPCharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPCharacterWorldStateUpdateManyWithWhereWithoutWorldInput | MVPCharacterWorldStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPCharacterWorldStateScalarWhereInput | MVPCharacterWorldStateScalarWhereInput[]
  }

  export type SimplifiedGameStateUpdateManyWithoutWorldNestedInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutWorldInput, SimplifiedGameStateUncheckedCreateWithoutWorldInput> | SimplifiedGameStateCreateWithoutWorldInput[] | SimplifiedGameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutWorldInput | SimplifiedGameStateCreateOrConnectWithoutWorldInput[]
    upsert?: SimplifiedGameStateUpsertWithWhereUniqueWithoutWorldInput | SimplifiedGameStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: SimplifiedGameStateCreateManyWorldInputEnvelope
    set?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    disconnect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    delete?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    update?: SimplifiedGameStateUpdateWithWhereUniqueWithoutWorldInput | SimplifiedGameStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: SimplifiedGameStateUpdateManyWithWhereWithoutWorldInput | SimplifiedGameStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: SimplifiedGameStateScalarWhereInput | SimplifiedGameStateScalarWhereInput[]
  }

  export type MVPEventUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPEventCreateWithoutWorldInput, MVPEventUncheckedCreateWithoutWorldInput> | MVPEventCreateWithoutWorldInput[] | MVPEventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutWorldInput | MVPEventCreateOrConnectWithoutWorldInput[]
    upsert?: MVPEventUpsertWithWhereUniqueWithoutWorldInput | MVPEventUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPEventCreateManyWorldInputEnvelope
    set?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    disconnect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    delete?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    update?: MVPEventUpdateWithWhereUniqueWithoutWorldInput | MVPEventUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPEventUpdateManyWithWhereWithoutWorldInput | MVPEventUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPEventScalarWhereInput | MVPEventScalarWhereInput[]
  }

  export type MVPLocationUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPLocationCreateWithoutWorldInput, MVPLocationUncheckedCreateWithoutWorldInput> | MVPLocationCreateWithoutWorldInput[] | MVPLocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLocationCreateOrConnectWithoutWorldInput | MVPLocationCreateOrConnectWithoutWorldInput[]
    upsert?: MVPLocationUpsertWithWhereUniqueWithoutWorldInput | MVPLocationUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPLocationCreateManyWorldInputEnvelope
    set?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    disconnect?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    delete?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    connect?: MVPLocationWhereUniqueInput | MVPLocationWhereUniqueInput[]
    update?: MVPLocationUpdateWithWhereUniqueWithoutWorldInput | MVPLocationUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPLocationUpdateManyWithWhereWithoutWorldInput | MVPLocationUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPLocationScalarWhereInput | MVPLocationScalarWhereInput[]
  }

  export type MVPLoreFragmentUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPLoreFragmentCreateWithoutWorldInput, MVPLoreFragmentUncheckedCreateWithoutWorldInput> | MVPLoreFragmentCreateWithoutWorldInput[] | MVPLoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPLoreFragmentCreateOrConnectWithoutWorldInput | MVPLoreFragmentCreateOrConnectWithoutWorldInput[]
    upsert?: MVPLoreFragmentUpsertWithWhereUniqueWithoutWorldInput | MVPLoreFragmentUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPLoreFragmentCreateManyWorldInputEnvelope
    set?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    disconnect?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    delete?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    connect?: MVPLoreFragmentWhereUniqueInput | MVPLoreFragmentWhereUniqueInput[]
    update?: MVPLoreFragmentUpdateWithWhereUniqueWithoutWorldInput | MVPLoreFragmentUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPLoreFragmentUpdateManyWithWhereWithoutWorldInput | MVPLoreFragmentUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPLoreFragmentScalarWhereInput | MVPLoreFragmentScalarWhereInput[]
  }

  export type MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPCharacterWorldStateCreateWithoutWorldInput, MVPCharacterWorldStateUncheckedCreateWithoutWorldInput> | MVPCharacterWorldStateCreateWithoutWorldInput[] | MVPCharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPCharacterWorldStateCreateOrConnectWithoutWorldInput | MVPCharacterWorldStateCreateOrConnectWithoutWorldInput[]
    upsert?: MVPCharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput | MVPCharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPCharacterWorldStateCreateManyWorldInputEnvelope
    set?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    disconnect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    delete?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    connect?: MVPCharacterWorldStateWhereUniqueInput | MVPCharacterWorldStateWhereUniqueInput[]
    update?: MVPCharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput | MVPCharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPCharacterWorldStateUpdateManyWithWhereWithoutWorldInput | MVPCharacterWorldStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPCharacterWorldStateScalarWhereInput | MVPCharacterWorldStateScalarWhereInput[]
  }

  export type SimplifiedGameStateUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<SimplifiedGameStateCreateWithoutWorldInput, SimplifiedGameStateUncheckedCreateWithoutWorldInput> | SimplifiedGameStateCreateWithoutWorldInput[] | SimplifiedGameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: SimplifiedGameStateCreateOrConnectWithoutWorldInput | SimplifiedGameStateCreateOrConnectWithoutWorldInput[]
    upsert?: SimplifiedGameStateUpsertWithWhereUniqueWithoutWorldInput | SimplifiedGameStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: SimplifiedGameStateCreateManyWorldInputEnvelope
    set?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    disconnect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    delete?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    connect?: SimplifiedGameStateWhereUniqueInput | SimplifiedGameStateWhereUniqueInput[]
    update?: SimplifiedGameStateUpdateWithWhereUniqueWithoutWorldInput | SimplifiedGameStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: SimplifiedGameStateUpdateManyWithWhereWithoutWorldInput | SimplifiedGameStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: SimplifiedGameStateScalarWhereInput | SimplifiedGameStateScalarWhereInput[]
  }

  export type MVPEventUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<MVPEventCreateWithoutWorldInput, MVPEventUncheckedCreateWithoutWorldInput> | MVPEventCreateWithoutWorldInput[] | MVPEventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutWorldInput | MVPEventCreateOrConnectWithoutWorldInput[]
    upsert?: MVPEventUpsertWithWhereUniqueWithoutWorldInput | MVPEventUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: MVPEventCreateManyWorldInputEnvelope
    set?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    disconnect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    delete?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    update?: MVPEventUpdateWithWhereUniqueWithoutWorldInput | MVPEventUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: MVPEventUpdateManyWithWhereWithoutWorldInput | MVPEventUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: MVPEventScalarWhereInput | MVPEventScalarWhereInput[]
  }

  export type MVPCharacterCreateNestedOneWithoutMvpCharacterWorldStatesInput = {
    create?: XOR<MVPCharacterCreateWithoutMvpCharacterWorldStatesInput, MVPCharacterUncheckedCreateWithoutMvpCharacterWorldStatesInput>
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutMvpCharacterWorldStatesInput
    connect?: MVPCharacterWhereUniqueInput
  }

  export type MVPWorldCreateNestedOneWithoutMvpCharacterWorldStatesInput = {
    create?: XOR<MVPWorldCreateWithoutMvpCharacterWorldStatesInput, MVPWorldUncheckedCreateWithoutMvpCharacterWorldStatesInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMvpCharacterWorldStatesInput
    connect?: MVPWorldWhereUniqueInput
  }

  export type MVPCharacterUpdateOneRequiredWithoutMvpCharacterWorldStatesNestedInput = {
    create?: XOR<MVPCharacterCreateWithoutMvpCharacterWorldStatesInput, MVPCharacterUncheckedCreateWithoutMvpCharacterWorldStatesInput>
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutMvpCharacterWorldStatesInput
    upsert?: MVPCharacterUpsertWithoutMvpCharacterWorldStatesInput
    connect?: MVPCharacterWhereUniqueInput
    update?: XOR<XOR<MVPCharacterUpdateToOneWithWhereWithoutMvpCharacterWorldStatesInput, MVPCharacterUpdateWithoutMvpCharacterWorldStatesInput>, MVPCharacterUncheckedUpdateWithoutMvpCharacterWorldStatesInput>
  }

  export type MVPWorldUpdateOneRequiredWithoutMvpCharacterWorldStatesNestedInput = {
    create?: XOR<MVPWorldCreateWithoutMvpCharacterWorldStatesInput, MVPWorldUncheckedCreateWithoutMvpCharacterWorldStatesInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMvpCharacterWorldStatesInput
    upsert?: MVPWorldUpsertWithoutMvpCharacterWorldStatesInput
    connect?: MVPWorldWhereUniqueInput
    update?: XOR<XOR<MVPWorldUpdateToOneWithWhereWithoutMvpCharacterWorldStatesInput, MVPWorldUpdateWithoutMvpCharacterWorldStatesInput>, MVPWorldUncheckedUpdateWithoutMvpCharacterWorldStatesInput>
  }

  export type MVPLocationCreateconnectedLocationIdsInput = {
    set: string[]
  }

  export type MVPWorldCreateNestedOneWithoutMvpLocationsInput = {
    create?: XOR<MVPWorldCreateWithoutMvpLocationsInput, MVPWorldUncheckedCreateWithoutMvpLocationsInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMvpLocationsInput
    connect?: MVPWorldWhereUniqueInput
  }

  export type MVPEventCreateNestedManyWithoutLocationInput = {
    create?: XOR<MVPEventCreateWithoutLocationInput, MVPEventUncheckedCreateWithoutLocationInput> | MVPEventCreateWithoutLocationInput[] | MVPEventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutLocationInput | MVPEventCreateOrConnectWithoutLocationInput[]
    createMany?: MVPEventCreateManyLocationInputEnvelope
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
  }

  export type MVPEventUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<MVPEventCreateWithoutLocationInput, MVPEventUncheckedCreateWithoutLocationInput> | MVPEventCreateWithoutLocationInput[] | MVPEventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutLocationInput | MVPEventCreateOrConnectWithoutLocationInput[]
    createMany?: MVPEventCreateManyLocationInputEnvelope
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
  }

  export type MVPLocationUpdateconnectedLocationIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MVPWorldUpdateOneRequiredWithoutMvpLocationsNestedInput = {
    create?: XOR<MVPWorldCreateWithoutMvpLocationsInput, MVPWorldUncheckedCreateWithoutMvpLocationsInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMvpLocationsInput
    upsert?: MVPWorldUpsertWithoutMvpLocationsInput
    connect?: MVPWorldWhereUniqueInput
    update?: XOR<XOR<MVPWorldUpdateToOneWithWhereWithoutMvpLocationsInput, MVPWorldUpdateWithoutMvpLocationsInput>, MVPWorldUncheckedUpdateWithoutMvpLocationsInput>
  }

  export type MVPEventUpdateManyWithoutLocationNestedInput = {
    create?: XOR<MVPEventCreateWithoutLocationInput, MVPEventUncheckedCreateWithoutLocationInput> | MVPEventCreateWithoutLocationInput[] | MVPEventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutLocationInput | MVPEventCreateOrConnectWithoutLocationInput[]
    upsert?: MVPEventUpsertWithWhereUniqueWithoutLocationInput | MVPEventUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: MVPEventCreateManyLocationInputEnvelope
    set?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    disconnect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    delete?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    update?: MVPEventUpdateWithWhereUniqueWithoutLocationInput | MVPEventUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: MVPEventUpdateManyWithWhereWithoutLocationInput | MVPEventUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: MVPEventScalarWhereInput | MVPEventScalarWhereInput[]
  }

  export type MVPEventUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<MVPEventCreateWithoutLocationInput, MVPEventUncheckedCreateWithoutLocationInput> | MVPEventCreateWithoutLocationInput[] | MVPEventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: MVPEventCreateOrConnectWithoutLocationInput | MVPEventCreateOrConnectWithoutLocationInput[]
    upsert?: MVPEventUpsertWithWhereUniqueWithoutLocationInput | MVPEventUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: MVPEventCreateManyLocationInputEnvelope
    set?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    disconnect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    delete?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    connect?: MVPEventWhereUniqueInput | MVPEventWhereUniqueInput[]
    update?: MVPEventUpdateWithWhereUniqueWithoutLocationInput | MVPEventUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: MVPEventUpdateManyWithWhereWithoutLocationInput | MVPEventUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: MVPEventScalarWhereInput | MVPEventScalarWhereInput[]
  }

  export type MVPLoreFragmentCreatekeywordsInput = {
    set: string[]
  }

  export type MVPWorldCreateNestedOneWithoutMvpLoreFragmentsInput = {
    create?: XOR<MVPWorldCreateWithoutMvpLoreFragmentsInput, MVPWorldUncheckedCreateWithoutMvpLoreFragmentsInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMvpLoreFragmentsInput
    connect?: MVPWorldWhereUniqueInput
  }

  export type MVPLoreFragmentUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type MVPWorldUpdateOneRequiredWithoutMvpLoreFragmentsNestedInput = {
    create?: XOR<MVPWorldCreateWithoutMvpLoreFragmentsInput, MVPWorldUncheckedCreateWithoutMvpLoreFragmentsInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMvpLoreFragmentsInput
    upsert?: MVPWorldUpsertWithoutMvpLoreFragmentsInput
    connect?: MVPWorldWhereUniqueInput
    update?: XOR<XOR<MVPWorldUpdateToOneWithWhereWithoutMvpLoreFragmentsInput, MVPWorldUpdateWithoutMvpLoreFragmentsInput>, MVPWorldUncheckedUpdateWithoutMvpLoreFragmentsInput>
  }

  export type MVPWorldCreateNestedOneWithoutMVPEventInput = {
    create?: XOR<MVPWorldCreateWithoutMVPEventInput, MVPWorldUncheckedCreateWithoutMVPEventInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMVPEventInput
    connect?: MVPWorldWhereUniqueInput
  }

  export type MVPLocationCreateNestedOneWithoutMVPEventInput = {
    create?: XOR<MVPLocationCreateWithoutMVPEventInput, MVPLocationUncheckedCreateWithoutMVPEventInput>
    connectOrCreate?: MVPLocationCreateOrConnectWithoutMVPEventInput
    connect?: MVPLocationWhereUniqueInput
  }

  export type MVPWorldUpdateOneRequiredWithoutMVPEventNestedInput = {
    create?: XOR<MVPWorldCreateWithoutMVPEventInput, MVPWorldUncheckedCreateWithoutMVPEventInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutMVPEventInput
    upsert?: MVPWorldUpsertWithoutMVPEventInput
    connect?: MVPWorldWhereUniqueInput
    update?: XOR<XOR<MVPWorldUpdateToOneWithWhereWithoutMVPEventInput, MVPWorldUpdateWithoutMVPEventInput>, MVPWorldUncheckedUpdateWithoutMVPEventInput>
  }

  export type MVPLocationUpdateOneWithoutMVPEventNestedInput = {
    create?: XOR<MVPLocationCreateWithoutMVPEventInput, MVPLocationUncheckedCreateWithoutMVPEventInput>
    connectOrCreate?: MVPLocationCreateOrConnectWithoutMVPEventInput
    upsert?: MVPLocationUpsertWithoutMVPEventInput
    disconnect?: MVPLocationWhereInput | boolean
    delete?: MVPLocationWhereInput | boolean
    connect?: MVPLocationWhereUniqueInput
    update?: XOR<XOR<MVPLocationUpdateToOneWithWhereWithoutMVPEventInput, MVPLocationUpdateWithoutMVPEventInput>, MVPLocationUncheckedUpdateWithoutMVPEventInput>
  }

  export type MVPCharacterCreateNestedOneWithoutSimplifiedGameStatesInput = {
    create?: XOR<MVPCharacterCreateWithoutSimplifiedGameStatesInput, MVPCharacterUncheckedCreateWithoutSimplifiedGameStatesInput>
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutSimplifiedGameStatesInput
    connect?: MVPCharacterWhereUniqueInput
  }

  export type MVPWorldCreateNestedOneWithoutSimplifiedGameStatesInput = {
    create?: XOR<MVPWorldCreateWithoutSimplifiedGameStatesInput, MVPWorldUncheckedCreateWithoutSimplifiedGameStatesInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutSimplifiedGameStatesInput
    connect?: MVPWorldWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MVPCharacterUpdateOneRequiredWithoutSimplifiedGameStatesNestedInput = {
    create?: XOR<MVPCharacterCreateWithoutSimplifiedGameStatesInput, MVPCharacterUncheckedCreateWithoutSimplifiedGameStatesInput>
    connectOrCreate?: MVPCharacterCreateOrConnectWithoutSimplifiedGameStatesInput
    upsert?: MVPCharacterUpsertWithoutSimplifiedGameStatesInput
    connect?: MVPCharacterWhereUniqueInput
    update?: XOR<XOR<MVPCharacterUpdateToOneWithWhereWithoutSimplifiedGameStatesInput, MVPCharacterUpdateWithoutSimplifiedGameStatesInput>, MVPCharacterUncheckedUpdateWithoutSimplifiedGameStatesInput>
  }

  export type MVPWorldUpdateOneRequiredWithoutSimplifiedGameStatesNestedInput = {
    create?: XOR<MVPWorldCreateWithoutSimplifiedGameStatesInput, MVPWorldUncheckedCreateWithoutSimplifiedGameStatesInput>
    connectOrCreate?: MVPWorldCreateOrConnectWithoutSimplifiedGameStatesInput
    upsert?: MVPWorldUpsertWithoutSimplifiedGameStatesInput
    connect?: MVPWorldWhereUniqueInput
    update?: XOR<XOR<MVPWorldUpdateToOneWithWhereWithoutSimplifiedGameStatesInput, MVPWorldUpdateWithoutSimplifiedGameStatesInput>, MVPWorldUncheckedUpdateWithoutSimplifiedGameStatesInput>
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

  export type SessionCreateWithoutUserInput = {
    id?: string
    token?: string | null
    expires: Date | string
    userAgent?: string | null
    ip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActive?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token?: string | null
    expires: Date | string
    userAgent?: string | null
    ip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActive?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProfileCreateWithoutUserInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    bio?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    avatarUrl?: string | null
    bio?: string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProfileCreateOrConnectWithoutUserInput = {
    where: UserProfileWhereUniqueInput
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
  }

  export type MVPCharacterCreateWithoutUserInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutCharacterInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterCreateOrConnectWithoutUserInput = {
    where: MVPCharacterWhereUniqueInput
    create: XOR<MVPCharacterCreateWithoutUserInput, MVPCharacterUncheckedCreateWithoutUserInput>
  }

  export type MVPCharacterCreateManyUserInputEnvelope = {
    data: MVPCharacterCreateManyUserInput | MVPCharacterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringNullableFilter<"Session"> | string | null
    expires?: DateTimeFilter<"Session"> | Date | string
    userAgent?: StringNullableFilter<"Session"> | string | null
    ip?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    lastActive?: DateTimeFilter<"Session"> | Date | string
  }

  export type UserProfileUpsertWithoutUserInput = {
    update: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
    create: XOR<UserProfileCreateWithoutUserInput, UserProfileUncheckedCreateWithoutUserInput>
    where?: UserProfileWhereInput
  }

  export type UserProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: UserProfileWhereInput
    data: XOR<UserProfileUpdateWithoutUserInput, UserProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MVPCharacterUpsertWithWhereUniqueWithoutUserInput = {
    where: MVPCharacterWhereUniqueInput
    update: XOR<MVPCharacterUpdateWithoutUserInput, MVPCharacterUncheckedUpdateWithoutUserInput>
    create: XOR<MVPCharacterCreateWithoutUserInput, MVPCharacterUncheckedCreateWithoutUserInput>
  }

  export type MVPCharacterUpdateWithWhereUniqueWithoutUserInput = {
    where: MVPCharacterWhereUniqueInput
    data: XOR<MVPCharacterUpdateWithoutUserInput, MVPCharacterUncheckedUpdateWithoutUserInput>
  }

  export type MVPCharacterUpdateManyWithWhereWithoutUserInput = {
    where: MVPCharacterScalarWhereInput
    data: XOR<MVPCharacterUpdateManyMutationInput, MVPCharacterUncheckedUpdateManyWithoutUserInput>
  }

  export type MVPCharacterScalarWhereInput = {
    AND?: MVPCharacterScalarWhereInput | MVPCharacterScalarWhereInput[]
    OR?: MVPCharacterScalarWhereInput[]
    NOT?: MVPCharacterScalarWhereInput | MVPCharacterScalarWhereInput[]
    id?: StringFilter<"MVPCharacter"> | string
    userId?: StringFilter<"MVPCharacter"> | string
    name?: StringFilter<"MVPCharacter"> | string
    backstory?: StringNullableFilter<"MVPCharacter"> | string | null
    appearanceDescription?: StringNullableFilter<"MVPCharacter"> | string | null
    personalityTraits?: JsonFilter<"MVPCharacter">
    createdAt?: DateTimeFilter<"MVPCharacter"> | Date | string
    lastPlayedAt?: DateTimeNullableFilter<"MVPCharacter"> | Date | string | null
    isActive?: BoolFilter<"MVPCharacter"> | boolean
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    mvpCharacters?: MVPCharacterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    mvpCharacters?: MVPCharacterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    mvpCharacters?: MVPCharacterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    mvpCharacters?: MVPCharacterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    profile?: UserProfileCreateNestedOneWithoutUserInput
    mvpCharacters?: MVPCharacterCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
    mvpCharacters?: MVPCharacterUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    profile?: UserProfileUpdateOneWithoutUserNestedInput
    mvpCharacters?: MVPCharacterUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
    mvpCharacters?: MVPCharacterUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMvpCharactersInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: UserProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMvpCharactersInput = {
    id?: string
    email: string
    password?: string | null
    name?: string | null
    createdAt?: Date | string
    lastLogin?: Date | string | null
    isActive?: boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: boolean
    verificationToken?: string | null
    verificationTokenExpires?: Date | string | null
    resetPasswordToken?: string | null
    resetPasswordExpires?: Date | string | null
    role?: string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: UserProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMvpCharactersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMvpCharactersInput, UserUncheckedCreateWithoutMvpCharactersInput>
  }

  export type MVPCharacterWorldStateCreateWithoutCharacterInput = {
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
    world: MVPWorldCreateNestedOneWithoutMvpCharacterWorldStatesInput
  }

  export type MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput = {
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type MVPCharacterWorldStateCreateOrConnectWithoutCharacterInput = {
    where: MVPCharacterWorldStateWhereUniqueInput
    create: XOR<MVPCharacterWorldStateCreateWithoutCharacterInput, MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput>
  }

  export type MVPCharacterWorldStateCreateManyCharacterInputEnvelope = {
    data: MVPCharacterWorldStateCreateManyCharacterInput | MVPCharacterWorldStateCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type SimplifiedGameStateCreateWithoutCharacterInput = {
    id?: string
    sessionId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
    world: MVPWorldCreateNestedOneWithoutSimplifiedGameStatesInput
  }

  export type SimplifiedGameStateUncheckedCreateWithoutCharacterInput = {
    id?: string
    sessionId: string
    worldId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
  }

  export type SimplifiedGameStateCreateOrConnectWithoutCharacterInput = {
    where: SimplifiedGameStateWhereUniqueInput
    create: XOR<SimplifiedGameStateCreateWithoutCharacterInput, SimplifiedGameStateUncheckedCreateWithoutCharacterInput>
  }

  export type SimplifiedGameStateCreateManyCharacterInputEnvelope = {
    data: SimplifiedGameStateCreateManyCharacterInput | SimplifiedGameStateCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMvpCharactersInput = {
    update: XOR<UserUpdateWithoutMvpCharactersInput, UserUncheckedUpdateWithoutMvpCharactersInput>
    create: XOR<UserCreateWithoutMvpCharactersInput, UserUncheckedCreateWithoutMvpCharactersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMvpCharactersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMvpCharactersInput, UserUncheckedUpdateWithoutMvpCharactersInput>
  }

  export type UserUpdateWithoutMvpCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: UserProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMvpCharactersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    preferences?: JsonNullValueInput | InputJsonValue
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    verificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    verificationTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    resetPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetPasswordExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: StringFieldUpdateOperationsInput | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: UserProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type MVPCharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput = {
    where: MVPCharacterWorldStateWhereUniqueInput
    update: XOR<MVPCharacterWorldStateUpdateWithoutCharacterInput, MVPCharacterWorldStateUncheckedUpdateWithoutCharacterInput>
    create: XOR<MVPCharacterWorldStateCreateWithoutCharacterInput, MVPCharacterWorldStateUncheckedCreateWithoutCharacterInput>
  }

  export type MVPCharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput = {
    where: MVPCharacterWorldStateWhereUniqueInput
    data: XOR<MVPCharacterWorldStateUpdateWithoutCharacterInput, MVPCharacterWorldStateUncheckedUpdateWithoutCharacterInput>
  }

  export type MVPCharacterWorldStateUpdateManyWithWhereWithoutCharacterInput = {
    where: MVPCharacterWorldStateScalarWhereInput
    data: XOR<MVPCharacterWorldStateUpdateManyMutationInput, MVPCharacterWorldStateUncheckedUpdateManyWithoutCharacterInput>
  }

  export type MVPCharacterWorldStateScalarWhereInput = {
    AND?: MVPCharacterWorldStateScalarWhereInput | MVPCharacterWorldStateScalarWhereInput[]
    OR?: MVPCharacterWorldStateScalarWhereInput[]
    NOT?: MVPCharacterWorldStateScalarWhereInput | MVPCharacterWorldStateScalarWhereInput[]
    characterId?: StringFilter<"MVPCharacterWorldState"> | string
    worldId?: StringFilter<"MVPCharacterWorldState"> | string
    currentLocation?: StringNullableFilter<"MVPCharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableFilter<"MVPCharacterWorldState"> | Date | string | null
  }

  export type SimplifiedGameStateUpsertWithWhereUniqueWithoutCharacterInput = {
    where: SimplifiedGameStateWhereUniqueInput
    update: XOR<SimplifiedGameStateUpdateWithoutCharacterInput, SimplifiedGameStateUncheckedUpdateWithoutCharacterInput>
    create: XOR<SimplifiedGameStateCreateWithoutCharacterInput, SimplifiedGameStateUncheckedCreateWithoutCharacterInput>
  }

  export type SimplifiedGameStateUpdateWithWhereUniqueWithoutCharacterInput = {
    where: SimplifiedGameStateWhereUniqueInput
    data: XOR<SimplifiedGameStateUpdateWithoutCharacterInput, SimplifiedGameStateUncheckedUpdateWithoutCharacterInput>
  }

  export type SimplifiedGameStateUpdateManyWithWhereWithoutCharacterInput = {
    where: SimplifiedGameStateScalarWhereInput
    data: XOR<SimplifiedGameStateUpdateManyMutationInput, SimplifiedGameStateUncheckedUpdateManyWithoutCharacterInput>
  }

  export type SimplifiedGameStateScalarWhereInput = {
    AND?: SimplifiedGameStateScalarWhereInput | SimplifiedGameStateScalarWhereInput[]
    OR?: SimplifiedGameStateScalarWhereInput[]
    NOT?: SimplifiedGameStateScalarWhereInput | SimplifiedGameStateScalarWhereInput[]
    id?: StringFilter<"SimplifiedGameState"> | string
    sessionId?: StringFilter<"SimplifiedGameState"> | string
    characterId?: StringFilter<"SimplifiedGameState"> | string
    worldId?: StringFilter<"SimplifiedGameState"> | string
    turnNumber?: IntFilter<"SimplifiedGameState"> | number
    characterState?: JsonFilter<"SimplifiedGameState">
    worldState?: JsonFilter<"SimplifiedGameState">
    currentLocationId?: StringFilter<"SimplifiedGameState"> | string
    narrativeLog?: JsonFilter<"SimplifiedGameState">
    currentChoices?: JsonFilter<"SimplifiedGameState">
    lastModified?: DateTimeFilter<"SimplifiedGameState"> | Date | string
    currentObjective?: StringNullableFilter<"SimplifiedGameState"> | string | null
  }

  export type MVPLocationCreateWithoutWorldInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
    MVPEvent?: MVPEventCreateNestedManyWithoutLocationInput
  }

  export type MVPLocationUncheckedCreateWithoutWorldInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutLocationInput
  }

  export type MVPLocationCreateOrConnectWithoutWorldInput = {
    where: MVPLocationWhereUniqueInput
    create: XOR<MVPLocationCreateWithoutWorldInput, MVPLocationUncheckedCreateWithoutWorldInput>
  }

  export type MVPLocationCreateManyWorldInputEnvelope = {
    data: MVPLocationCreateManyWorldInput | MVPLocationCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type MVPLoreFragmentCreateWithoutWorldInput = {
    id?: string
    title: string
    content: string
    type?: string | null
    locationId?: string | null
    contextId?: string | null
    isRevealed?: boolean
    keywords?: MVPLoreFragmentCreatekeywordsInput | string[]
  }

  export type MVPLoreFragmentUncheckedCreateWithoutWorldInput = {
    id?: string
    title: string
    content: string
    type?: string | null
    locationId?: string | null
    contextId?: string | null
    isRevealed?: boolean
    keywords?: MVPLoreFragmentCreatekeywordsInput | string[]
  }

  export type MVPLoreFragmentCreateOrConnectWithoutWorldInput = {
    where: MVPLoreFragmentWhereUniqueInput
    create: XOR<MVPLoreFragmentCreateWithoutWorldInput, MVPLoreFragmentUncheckedCreateWithoutWorldInput>
  }

  export type MVPLoreFragmentCreateManyWorldInputEnvelope = {
    data: MVPLoreFragmentCreateManyWorldInput | MVPLoreFragmentCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type MVPCharacterWorldStateCreateWithoutWorldInput = {
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
    character: MVPCharacterCreateNestedOneWithoutMvpCharacterWorldStatesInput
  }

  export type MVPCharacterWorldStateUncheckedCreateWithoutWorldInput = {
    characterId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type MVPCharacterWorldStateCreateOrConnectWithoutWorldInput = {
    where: MVPCharacterWorldStateWhereUniqueInput
    create: XOR<MVPCharacterWorldStateCreateWithoutWorldInput, MVPCharacterWorldStateUncheckedCreateWithoutWorldInput>
  }

  export type MVPCharacterWorldStateCreateManyWorldInputEnvelope = {
    data: MVPCharacterWorldStateCreateManyWorldInput | MVPCharacterWorldStateCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type SimplifiedGameStateCreateWithoutWorldInput = {
    id?: string
    sessionId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
    character: MVPCharacterCreateNestedOneWithoutSimplifiedGameStatesInput
  }

  export type SimplifiedGameStateUncheckedCreateWithoutWorldInput = {
    id?: string
    sessionId: string
    characterId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
  }

  export type SimplifiedGameStateCreateOrConnectWithoutWorldInput = {
    where: SimplifiedGameStateWhereUniqueInput
    create: XOR<SimplifiedGameStateCreateWithoutWorldInput, SimplifiedGameStateUncheckedCreateWithoutWorldInput>
  }

  export type SimplifiedGameStateCreateManyWorldInputEnvelope = {
    data: SimplifiedGameStateCreateManyWorldInput | SimplifiedGameStateCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type MVPEventCreateWithoutWorldInput = {
    id?: string
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
    location?: MVPLocationCreateNestedOneWithoutMVPEventInput
  }

  export type MVPEventUncheckedCreateWithoutWorldInput = {
    id?: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type MVPEventCreateOrConnectWithoutWorldInput = {
    where: MVPEventWhereUniqueInput
    create: XOR<MVPEventCreateWithoutWorldInput, MVPEventUncheckedCreateWithoutWorldInput>
  }

  export type MVPEventCreateManyWorldInputEnvelope = {
    data: MVPEventCreateManyWorldInput | MVPEventCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type MVPLocationUpsertWithWhereUniqueWithoutWorldInput = {
    where: MVPLocationWhereUniqueInput
    update: XOR<MVPLocationUpdateWithoutWorldInput, MVPLocationUncheckedUpdateWithoutWorldInput>
    create: XOR<MVPLocationCreateWithoutWorldInput, MVPLocationUncheckedCreateWithoutWorldInput>
  }

  export type MVPLocationUpdateWithWhereUniqueWithoutWorldInput = {
    where: MVPLocationWhereUniqueInput
    data: XOR<MVPLocationUpdateWithoutWorldInput, MVPLocationUncheckedUpdateWithoutWorldInput>
  }

  export type MVPLocationUpdateManyWithWhereWithoutWorldInput = {
    where: MVPLocationScalarWhereInput
    data: XOR<MVPLocationUpdateManyMutationInput, MVPLocationUncheckedUpdateManyWithoutWorldInput>
  }

  export type MVPLocationScalarWhereInput = {
    AND?: MVPLocationScalarWhereInput | MVPLocationScalarWhereInput[]
    OR?: MVPLocationScalarWhereInput[]
    NOT?: MVPLocationScalarWhereInput | MVPLocationScalarWhereInput[]
    id?: StringFilter<"MVPLocation"> | string
    worldId?: StringFilter<"MVPLocation"> | string
    name?: StringFilter<"MVPLocation"> | string
    description?: StringNullableFilter<"MVPLocation"> | string | null
    isStartingLocation?: BoolFilter<"MVPLocation"> | boolean
    connectedLocationIds?: StringNullableListFilter<"MVPLocation">
    dangerLevel?: StringNullableFilter<"MVPLocation"> | string | null
    thumbnailUrl?: StringNullableFilter<"MVPLocation"> | string | null
  }

  export type MVPLoreFragmentUpsertWithWhereUniqueWithoutWorldInput = {
    where: MVPLoreFragmentWhereUniqueInput
    update: XOR<MVPLoreFragmentUpdateWithoutWorldInput, MVPLoreFragmentUncheckedUpdateWithoutWorldInput>
    create: XOR<MVPLoreFragmentCreateWithoutWorldInput, MVPLoreFragmentUncheckedCreateWithoutWorldInput>
  }

  export type MVPLoreFragmentUpdateWithWhereUniqueWithoutWorldInput = {
    where: MVPLoreFragmentWhereUniqueInput
    data: XOR<MVPLoreFragmentUpdateWithoutWorldInput, MVPLoreFragmentUncheckedUpdateWithoutWorldInput>
  }

  export type MVPLoreFragmentUpdateManyWithWhereWithoutWorldInput = {
    where: MVPLoreFragmentScalarWhereInput
    data: XOR<MVPLoreFragmentUpdateManyMutationInput, MVPLoreFragmentUncheckedUpdateManyWithoutWorldInput>
  }

  export type MVPLoreFragmentScalarWhereInput = {
    AND?: MVPLoreFragmentScalarWhereInput | MVPLoreFragmentScalarWhereInput[]
    OR?: MVPLoreFragmentScalarWhereInput[]
    NOT?: MVPLoreFragmentScalarWhereInput | MVPLoreFragmentScalarWhereInput[]
    id?: StringFilter<"MVPLoreFragment"> | string
    worldId?: StringFilter<"MVPLoreFragment"> | string
    title?: StringFilter<"MVPLoreFragment"> | string
    content?: StringFilter<"MVPLoreFragment"> | string
    type?: StringNullableFilter<"MVPLoreFragment"> | string | null
    locationId?: StringNullableFilter<"MVPLoreFragment"> | string | null
    contextId?: StringNullableFilter<"MVPLoreFragment"> | string | null
    isRevealed?: BoolFilter<"MVPLoreFragment"> | boolean
    keywords?: StringNullableListFilter<"MVPLoreFragment">
  }

  export type MVPCharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput = {
    where: MVPCharacterWorldStateWhereUniqueInput
    update: XOR<MVPCharacterWorldStateUpdateWithoutWorldInput, MVPCharacterWorldStateUncheckedUpdateWithoutWorldInput>
    create: XOR<MVPCharacterWorldStateCreateWithoutWorldInput, MVPCharacterWorldStateUncheckedCreateWithoutWorldInput>
  }

  export type MVPCharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput = {
    where: MVPCharacterWorldStateWhereUniqueInput
    data: XOR<MVPCharacterWorldStateUpdateWithoutWorldInput, MVPCharacterWorldStateUncheckedUpdateWithoutWorldInput>
  }

  export type MVPCharacterWorldStateUpdateManyWithWhereWithoutWorldInput = {
    where: MVPCharacterWorldStateScalarWhereInput
    data: XOR<MVPCharacterWorldStateUpdateManyMutationInput, MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldInput>
  }

  export type SimplifiedGameStateUpsertWithWhereUniqueWithoutWorldInput = {
    where: SimplifiedGameStateWhereUniqueInput
    update: XOR<SimplifiedGameStateUpdateWithoutWorldInput, SimplifiedGameStateUncheckedUpdateWithoutWorldInput>
    create: XOR<SimplifiedGameStateCreateWithoutWorldInput, SimplifiedGameStateUncheckedCreateWithoutWorldInput>
  }

  export type SimplifiedGameStateUpdateWithWhereUniqueWithoutWorldInput = {
    where: SimplifiedGameStateWhereUniqueInput
    data: XOR<SimplifiedGameStateUpdateWithoutWorldInput, SimplifiedGameStateUncheckedUpdateWithoutWorldInput>
  }

  export type SimplifiedGameStateUpdateManyWithWhereWithoutWorldInput = {
    where: SimplifiedGameStateScalarWhereInput
    data: XOR<SimplifiedGameStateUpdateManyMutationInput, SimplifiedGameStateUncheckedUpdateManyWithoutWorldInput>
  }

  export type MVPEventUpsertWithWhereUniqueWithoutWorldInput = {
    where: MVPEventWhereUniqueInput
    update: XOR<MVPEventUpdateWithoutWorldInput, MVPEventUncheckedUpdateWithoutWorldInput>
    create: XOR<MVPEventCreateWithoutWorldInput, MVPEventUncheckedCreateWithoutWorldInput>
  }

  export type MVPEventUpdateWithWhereUniqueWithoutWorldInput = {
    where: MVPEventWhereUniqueInput
    data: XOR<MVPEventUpdateWithoutWorldInput, MVPEventUncheckedUpdateWithoutWorldInput>
  }

  export type MVPEventUpdateManyWithWhereWithoutWorldInput = {
    where: MVPEventScalarWhereInput
    data: XOR<MVPEventUpdateManyMutationInput, MVPEventUncheckedUpdateManyWithoutWorldInput>
  }

  export type MVPEventScalarWhereInput = {
    AND?: MVPEventScalarWhereInput | MVPEventScalarWhereInput[]
    OR?: MVPEventScalarWhereInput[]
    NOT?: MVPEventScalarWhereInput | MVPEventScalarWhereInput[]
    id?: StringFilter<"MVPEvent"> | string
    worldId?: StringFilter<"MVPEvent"> | string
    locationId?: StringNullableFilter<"MVPEvent"> | string | null
    title?: StringFilter<"MVPEvent"> | string
    description?: StringFilter<"MVPEvent"> | string
    eventType?: StringFilter<"MVPEvent"> | string
    triggerConditions?: JsonFilter<"MVPEvent">
    outcomes?: JsonFilter<"MVPEvent">
    isRepeatable?: BoolFilter<"MVPEvent"> | boolean
  }

  export type MVPCharacterCreateWithoutMvpCharacterWorldStatesInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutMvpCharactersInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterUncheckedCreateWithoutMvpCharacterWorldStatesInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterCreateOrConnectWithoutMvpCharacterWorldStatesInput = {
    where: MVPCharacterWhereUniqueInput
    create: XOR<MVPCharacterCreateWithoutMvpCharacterWorldStatesInput, MVPCharacterUncheckedCreateWithoutMvpCharacterWorldStatesInput>
  }

  export type MVPWorldCreateWithoutMvpCharacterWorldStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUncheckedCreateWithoutMvpCharacterWorldStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationUncheckedCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldCreateOrConnectWithoutMvpCharacterWorldStatesInput = {
    where: MVPWorldWhereUniqueInput
    create: XOR<MVPWorldCreateWithoutMvpCharacterWorldStatesInput, MVPWorldUncheckedCreateWithoutMvpCharacterWorldStatesInput>
  }

  export type MVPCharacterUpsertWithoutMvpCharacterWorldStatesInput = {
    update: XOR<MVPCharacterUpdateWithoutMvpCharacterWorldStatesInput, MVPCharacterUncheckedUpdateWithoutMvpCharacterWorldStatesInput>
    create: XOR<MVPCharacterCreateWithoutMvpCharacterWorldStatesInput, MVPCharacterUncheckedCreateWithoutMvpCharacterWorldStatesInput>
    where?: MVPCharacterWhereInput
  }

  export type MVPCharacterUpdateToOneWithWhereWithoutMvpCharacterWorldStatesInput = {
    where?: MVPCharacterWhereInput
    data: XOR<MVPCharacterUpdateWithoutMvpCharacterWorldStatesInput, MVPCharacterUncheckedUpdateWithoutMvpCharacterWorldStatesInput>
  }

  export type MVPCharacterUpdateWithoutMvpCharacterWorldStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMvpCharactersNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutCharacterNestedInput
  }

  export type MVPCharacterUncheckedUpdateWithoutMvpCharacterWorldStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type MVPWorldUpsertWithoutMvpCharacterWorldStatesInput = {
    update: XOR<MVPWorldUpdateWithoutMvpCharacterWorldStatesInput, MVPWorldUncheckedUpdateWithoutMvpCharacterWorldStatesInput>
    create: XOR<MVPWorldCreateWithoutMvpCharacterWorldStatesInput, MVPWorldUncheckedCreateWithoutMvpCharacterWorldStatesInput>
    where?: MVPWorldWhereInput
  }

  export type MVPWorldUpdateToOneWithWhereWithoutMvpCharacterWorldStatesInput = {
    where?: MVPWorldWhereInput
    data: XOR<MVPWorldUpdateWithoutMvpCharacterWorldStatesInput, MVPWorldUncheckedUpdateWithoutMvpCharacterWorldStatesInput>
  }

  export type MVPWorldUpdateWithoutMvpCharacterWorldStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldUncheckedUpdateWithoutMvpCharacterWorldStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUncheckedUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldCreateWithoutMvpLocationsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLoreFragments?: MVPLoreFragmentCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUncheckedCreateWithoutMvpLocationsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLoreFragments?: MVPLoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldCreateOrConnectWithoutMvpLocationsInput = {
    where: MVPWorldWhereUniqueInput
    create: XOR<MVPWorldCreateWithoutMvpLocationsInput, MVPWorldUncheckedCreateWithoutMvpLocationsInput>
  }

  export type MVPEventCreateWithoutLocationInput = {
    id?: string
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
    world: MVPWorldCreateNestedOneWithoutMVPEventInput
  }

  export type MVPEventUncheckedCreateWithoutLocationInput = {
    id?: string
    worldId: string
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type MVPEventCreateOrConnectWithoutLocationInput = {
    where: MVPEventWhereUniqueInput
    create: XOR<MVPEventCreateWithoutLocationInput, MVPEventUncheckedCreateWithoutLocationInput>
  }

  export type MVPEventCreateManyLocationInputEnvelope = {
    data: MVPEventCreateManyLocationInput | MVPEventCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type MVPWorldUpsertWithoutMvpLocationsInput = {
    update: XOR<MVPWorldUpdateWithoutMvpLocationsInput, MVPWorldUncheckedUpdateWithoutMvpLocationsInput>
    create: XOR<MVPWorldCreateWithoutMvpLocationsInput, MVPWorldUncheckedCreateWithoutMvpLocationsInput>
    where?: MVPWorldWhereInput
  }

  export type MVPWorldUpdateToOneWithWhereWithoutMvpLocationsInput = {
    where?: MVPWorldWhereInput
    data: XOR<MVPWorldUpdateWithoutMvpLocationsInput, MVPWorldUncheckedUpdateWithoutMvpLocationsInput>
  }

  export type MVPWorldUpdateWithoutMvpLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLoreFragments?: MVPLoreFragmentUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldUncheckedUpdateWithoutMvpLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLoreFragments?: MVPLoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type MVPEventUpsertWithWhereUniqueWithoutLocationInput = {
    where: MVPEventWhereUniqueInput
    update: XOR<MVPEventUpdateWithoutLocationInput, MVPEventUncheckedUpdateWithoutLocationInput>
    create: XOR<MVPEventCreateWithoutLocationInput, MVPEventUncheckedCreateWithoutLocationInput>
  }

  export type MVPEventUpdateWithWhereUniqueWithoutLocationInput = {
    where: MVPEventWhereUniqueInput
    data: XOR<MVPEventUpdateWithoutLocationInput, MVPEventUncheckedUpdateWithoutLocationInput>
  }

  export type MVPEventUpdateManyWithWhereWithoutLocationInput = {
    where: MVPEventScalarWhereInput
    data: XOR<MVPEventUpdateManyMutationInput, MVPEventUncheckedUpdateManyWithoutLocationInput>
  }

  export type MVPWorldCreateWithoutMvpLoreFragmentsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUncheckedCreateWithoutMvpLoreFragmentsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationUncheckedCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldCreateOrConnectWithoutMvpLoreFragmentsInput = {
    where: MVPWorldWhereUniqueInput
    create: XOR<MVPWorldCreateWithoutMvpLoreFragmentsInput, MVPWorldUncheckedCreateWithoutMvpLoreFragmentsInput>
  }

  export type MVPWorldUpsertWithoutMvpLoreFragmentsInput = {
    update: XOR<MVPWorldUpdateWithoutMvpLoreFragmentsInput, MVPWorldUncheckedUpdateWithoutMvpLoreFragmentsInput>
    create: XOR<MVPWorldCreateWithoutMvpLoreFragmentsInput, MVPWorldUncheckedCreateWithoutMvpLoreFragmentsInput>
    where?: MVPWorldWhereInput
  }

  export type MVPWorldUpdateToOneWithWhereWithoutMvpLoreFragmentsInput = {
    where?: MVPWorldWhereInput
    data: XOR<MVPWorldUpdateWithoutMvpLoreFragmentsInput, MVPWorldUncheckedUpdateWithoutMvpLoreFragmentsInput>
  }

  export type MVPWorldUpdateWithoutMvpLoreFragmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldUncheckedUpdateWithoutMvpLoreFragmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUncheckedUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldCreateWithoutMVPEventInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUncheckedCreateWithoutMVPEventInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationUncheckedCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldCreateOrConnectWithoutMVPEventInput = {
    where: MVPWorldWhereUniqueInput
    create: XOR<MVPWorldCreateWithoutMVPEventInput, MVPWorldUncheckedCreateWithoutMVPEventInput>
  }

  export type MVPLocationCreateWithoutMVPEventInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
    world: MVPWorldCreateNestedOneWithoutMvpLocationsInput
  }

  export type MVPLocationUncheckedCreateWithoutMVPEventInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
  }

  export type MVPLocationCreateOrConnectWithoutMVPEventInput = {
    where: MVPLocationWhereUniqueInput
    create: XOR<MVPLocationCreateWithoutMVPEventInput, MVPLocationUncheckedCreateWithoutMVPEventInput>
  }

  export type MVPWorldUpsertWithoutMVPEventInput = {
    update: XOR<MVPWorldUpdateWithoutMVPEventInput, MVPWorldUncheckedUpdateWithoutMVPEventInput>
    create: XOR<MVPWorldCreateWithoutMVPEventInput, MVPWorldUncheckedCreateWithoutMVPEventInput>
    where?: MVPWorldWhereInput
  }

  export type MVPWorldUpdateToOneWithWhereWithoutMVPEventInput = {
    where?: MVPWorldWhereInput
    data: XOR<MVPWorldUpdateWithoutMVPEventInput, MVPWorldUncheckedUpdateWithoutMVPEventInput>
  }

  export type MVPWorldUpdateWithoutMVPEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldUncheckedUpdateWithoutMVPEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUncheckedUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type MVPLocationUpsertWithoutMVPEventInput = {
    update: XOR<MVPLocationUpdateWithoutMVPEventInput, MVPLocationUncheckedUpdateWithoutMVPEventInput>
    create: XOR<MVPLocationCreateWithoutMVPEventInput, MVPLocationUncheckedCreateWithoutMVPEventInput>
    where?: MVPLocationWhereInput
  }

  export type MVPLocationUpdateToOneWithWhereWithoutMVPEventInput = {
    where?: MVPLocationWhereInput
    data: XOR<MVPLocationUpdateWithoutMVPEventInput, MVPLocationUncheckedUpdateWithoutMVPEventInput>
  }

  export type MVPLocationUpdateWithoutMVPEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    world?: MVPWorldUpdateOneRequiredWithoutMvpLocationsNestedInput
  }

  export type MVPLocationUncheckedUpdateWithoutMVPEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MVPCharacterCreateWithoutSimplifiedGameStatesInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    user: UserCreateNestedOneWithoutMvpCharactersInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterUncheckedCreateWithoutSimplifiedGameStatesInput = {
    id?: string
    userId: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type MVPCharacterCreateOrConnectWithoutSimplifiedGameStatesInput = {
    where: MVPCharacterWhereUniqueInput
    create: XOR<MVPCharacterCreateWithoutSimplifiedGameStatesInput, MVPCharacterUncheckedCreateWithoutSimplifiedGameStatesInput>
  }

  export type MVPWorldCreateWithoutSimplifiedGameStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldUncheckedCreateWithoutSimplifiedGameStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mvpLocations?: MVPLocationUncheckedCreateNestedManyWithoutWorldInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    MVPEvent?: MVPEventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type MVPWorldCreateOrConnectWithoutSimplifiedGameStatesInput = {
    where: MVPWorldWhereUniqueInput
    create: XOR<MVPWorldCreateWithoutSimplifiedGameStatesInput, MVPWorldUncheckedCreateWithoutSimplifiedGameStatesInput>
  }

  export type MVPCharacterUpsertWithoutSimplifiedGameStatesInput = {
    update: XOR<MVPCharacterUpdateWithoutSimplifiedGameStatesInput, MVPCharacterUncheckedUpdateWithoutSimplifiedGameStatesInput>
    create: XOR<MVPCharacterCreateWithoutSimplifiedGameStatesInput, MVPCharacterUncheckedCreateWithoutSimplifiedGameStatesInput>
    where?: MVPCharacterWhereInput
  }

  export type MVPCharacterUpdateToOneWithWhereWithoutSimplifiedGameStatesInput = {
    where?: MVPCharacterWhereInput
    data: XOR<MVPCharacterUpdateWithoutSimplifiedGameStatesInput, MVPCharacterUncheckedUpdateWithoutSimplifiedGameStatesInput>
  }

  export type MVPCharacterUpdateWithoutSimplifiedGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutMvpCharactersNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutCharacterNestedInput
  }

  export type MVPCharacterUncheckedUpdateWithoutSimplifiedGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type MVPWorldUpsertWithoutSimplifiedGameStatesInput = {
    update: XOR<MVPWorldUpdateWithoutSimplifiedGameStatesInput, MVPWorldUncheckedUpdateWithoutSimplifiedGameStatesInput>
    create: XOR<MVPWorldCreateWithoutSimplifiedGameStatesInput, MVPWorldUncheckedCreateWithoutSimplifiedGameStatesInput>
    where?: MVPWorldWhereInput
  }

  export type MVPWorldUpdateToOneWithWhereWithoutSimplifiedGameStatesInput = {
    where?: MVPWorldWhereInput
    data: XOR<MVPWorldUpdateWithoutSimplifiedGameStatesInput, MVPWorldUncheckedUpdateWithoutSimplifiedGameStatesInput>
  }

  export type MVPWorldUpdateWithoutSimplifiedGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUpdateManyWithoutWorldNestedInput
  }

  export type MVPWorldUncheckedUpdateWithoutSimplifiedGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpLocations?: MVPLocationUncheckedUpdateManyWithoutWorldNestedInput
    mvpLoreFragments?: MVPLoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token?: string | null
    expires: Date | string
    userAgent?: string | null
    ip?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    lastActive?: Date | string
  }

  export type MVPCharacterCreateManyUserInput = {
    id?: string
    name: string
    backstory?: string | null
    appearanceDescription?: string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    lastPlayedAt?: Date | string | null
    isActive?: boolean
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastActive?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MVPCharacterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUpdateManyWithoutCharacterNestedInput
    simplifiedGameStates?: SimplifiedGameStateUpdateManyWithoutCharacterNestedInput
  }

  export type MVPCharacterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    mvpCharacterWorldStates?: MVPCharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
    simplifiedGameStates?: SimplifiedGameStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type MVPCharacterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    backstory?: NullableStringFieldUpdateOperationsInput | string | null
    appearanceDescription?: NullableStringFieldUpdateOperationsInput | string | null
    personalityTraits?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPCharacterWorldStateCreateManyCharacterInput = {
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type SimplifiedGameStateCreateManyCharacterInput = {
    id?: string
    sessionId: string
    worldId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
  }

  export type MVPCharacterWorldStateUpdateWithoutCharacterInput = {
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    world?: MVPWorldUpdateOneRequiredWithoutMvpCharacterWorldStatesNestedInput
  }

  export type MVPCharacterWorldStateUncheckedUpdateWithoutCharacterInput = {
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MVPCharacterWorldStateUncheckedUpdateManyWithoutCharacterInput = {
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimplifiedGameStateUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
    world?: MVPWorldUpdateOneRequiredWithoutSimplifiedGameStatesNestedInput
  }

  export type SimplifiedGameStateUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SimplifiedGameStateUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MVPLocationCreateManyWorldInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: MVPLocationCreateconnectedLocationIdsInput | string[]
    dangerLevel?: string | null
    thumbnailUrl?: string | null
  }

  export type MVPLoreFragmentCreateManyWorldInput = {
    id?: string
    title: string
    content: string
    type?: string | null
    locationId?: string | null
    contextId?: string | null
    isRevealed?: boolean
    keywords?: MVPLoreFragmentCreatekeywordsInput | string[]
  }

  export type MVPCharacterWorldStateCreateManyWorldInput = {
    characterId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type SimplifiedGameStateCreateManyWorldInput = {
    id?: string
    sessionId: string
    characterId: string
    turnNumber: number
    characterState: JsonNullValueInput | InputJsonValue
    worldState: JsonNullValueInput | InputJsonValue
    currentLocationId: string
    narrativeLog: JsonNullValueInput | InputJsonValue
    currentChoices: JsonNullValueInput | InputJsonValue
    lastModified: Date | string
    currentObjective?: string | null
  }

  export type MVPEventCreateManyWorldInput = {
    id?: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type MVPLocationUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    MVPEvent?: MVPEventUpdateManyWithoutLocationNestedInput
  }

  export type MVPLocationUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    MVPEvent?: MVPEventUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type MVPLocationUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: MVPLocationUpdateconnectedLocationIdsInput | string[]
    dangerLevel?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MVPLoreFragmentUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
  }

  export type MVPLoreFragmentUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
  }

  export type MVPLoreFragmentUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: MVPLoreFragmentUpdatekeywordsInput | string[]
  }

  export type MVPCharacterWorldStateUpdateWithoutWorldInput = {
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    character?: MVPCharacterUpdateOneRequiredWithoutMvpCharacterWorldStatesNestedInput
  }

  export type MVPCharacterWorldStateUncheckedUpdateWithoutWorldInput = {
    characterId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MVPCharacterWorldStateUncheckedUpdateManyWithoutWorldInput = {
    characterId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SimplifiedGameStateUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
    character?: MVPCharacterUpdateOneRequiredWithoutSimplifiedGameStatesNestedInput
  }

  export type SimplifiedGameStateUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SimplifiedGameStateUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    turnNumber?: IntFieldUpdateOperationsInput | number
    characterState?: JsonNullValueInput | InputJsonValue
    worldState?: JsonNullValueInput | InputJsonValue
    currentLocationId?: StringFieldUpdateOperationsInput | string
    narrativeLog?: JsonNullValueInput | InputJsonValue
    currentChoices?: JsonNullValueInput | InputJsonValue
    lastModified?: DateTimeFieldUpdateOperationsInput | Date | string
    currentObjective?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MVPEventUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
    location?: MVPLocationUpdateOneWithoutMVPEventNestedInput
  }

  export type MVPEventUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPEventUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPEventCreateManyLocationInput = {
    id?: string
    worldId: string
    title: string
    description: string
    eventType: string
    triggerConditions: JsonNullValueInput | InputJsonValue
    outcomes: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type MVPEventUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
    world?: MVPWorldUpdateOneRequiredWithoutMVPEventNestedInput
  }

  export type MVPEventUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MVPEventUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
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