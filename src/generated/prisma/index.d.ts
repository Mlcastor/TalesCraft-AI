
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
 * Model World
 * 
 */
export type World = $Result.DefaultSelection<Prisma.$WorldPayload>
/**
 * Model CharacterWorldState
 * 
 */
export type CharacterWorldState = $Result.DefaultSelection<Prisma.$CharacterWorldStatePayload>
/**
 * Model Location
 * 
 */
export type Location = $Result.DefaultSelection<Prisma.$LocationPayload>
/**
 * Model LoreFragment
 * 
 */
export type LoreFragment = $Result.DefaultSelection<Prisma.$LoreFragmentPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
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
 * Model NarrativeHistory
 * 
 */
export type NarrativeHistory = $Result.DefaultSelection<Prisma.$NarrativeHistoryPayload>

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
   * `prisma.world`: Exposes CRUD operations for the **World** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worlds
    * const worlds = await prisma.world.findMany()
    * ```
    */
  get world(): Prisma.WorldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.characterWorldState`: Exposes CRUD operations for the **CharacterWorldState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterWorldStates
    * const characterWorldStates = await prisma.characterWorldState.findMany()
    * ```
    */
  get characterWorldState(): Prisma.CharacterWorldStateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.location`: Exposes CRUD operations for the **Location** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.location.findMany()
    * ```
    */
  get location(): Prisma.LocationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.loreFragment`: Exposes CRUD operations for the **LoreFragment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LoreFragments
    * const loreFragments = await prisma.loreFragment.findMany()
    * ```
    */
  get loreFragment(): Prisma.LoreFragmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

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

  /**
   * `prisma.narrativeHistory`: Exposes CRUD operations for the **NarrativeHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NarrativeHistories
    * const narrativeHistories = await prisma.narrativeHistory.findMany()
    * ```
    */
  get narrativeHistory(): Prisma.NarrativeHistoryDelegate<ExtArgs, ClientOptions>;
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
    World: 'World',
    CharacterWorldState: 'CharacterWorldState',
    Location: 'Location',
    LoreFragment: 'LoreFragment',
    Event: 'Event',
    GameSession: 'GameSession',
    GameState: 'GameState',
    NPCTemplate: 'NPCTemplate',
    NPCState: 'NPCState',
    Decision: 'Decision',
    AIContextHistory: 'AIContextHistory',
    NarrativeHistory: 'NarrativeHistory'
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
      modelProps: "user" | "character" | "world" | "characterWorldState" | "location" | "loreFragment" | "event" | "gameSession" | "gameState" | "nPCTemplate" | "nPCState" | "decision" | "aIContextHistory" | "narrativeHistory"
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
      World: {
        payload: Prisma.$WorldPayload<ExtArgs>
        fields: Prisma.WorldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findFirst: {
            args: Prisma.WorldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          findMany: {
            args: Prisma.WorldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          create: {
            args: Prisma.WorldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          createMany: {
            args: Prisma.WorldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          delete: {
            args: Prisma.WorldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          update: {
            args: Prisma.WorldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          deleteMany: {
            args: Prisma.WorldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>[]
          }
          upsert: {
            args: Prisma.WorldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorldPayload>
          }
          aggregate: {
            args: Prisma.WorldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorld>
          }
          groupBy: {
            args: Prisma.WorldGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorldGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorldCountArgs<ExtArgs>
            result: $Utils.Optional<WorldCountAggregateOutputType> | number
          }
        }
      }
      CharacterWorldState: {
        payload: Prisma.$CharacterWorldStatePayload<ExtArgs>
        fields: Prisma.CharacterWorldStateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterWorldStateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterWorldStateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>
          }
          findFirst: {
            args: Prisma.CharacterWorldStateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterWorldStateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>
          }
          findMany: {
            args: Prisma.CharacterWorldStateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>[]
          }
          create: {
            args: Prisma.CharacterWorldStateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>
          }
          createMany: {
            args: Prisma.CharacterWorldStateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacterWorldStateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>[]
          }
          delete: {
            args: Prisma.CharacterWorldStateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>
          }
          update: {
            args: Prisma.CharacterWorldStateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>
          }
          deleteMany: {
            args: Prisma.CharacterWorldStateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterWorldStateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CharacterWorldStateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>[]
          }
          upsert: {
            args: Prisma.CharacterWorldStateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacterWorldStatePayload>
          }
          aggregate: {
            args: Prisma.CharacterWorldStateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacterWorldState>
          }
          groupBy: {
            args: Prisma.CharacterWorldStateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacterWorldStateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterWorldStateCountArgs<ExtArgs>
            result: $Utils.Optional<CharacterWorldStateCountAggregateOutputType> | number
          }
        }
      }
      Location: {
        payload: Prisma.$LocationPayload<ExtArgs>
        fields: Prisma.LocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findFirst: {
            args: Prisma.LocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          findMany: {
            args: Prisma.LocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          create: {
            args: Prisma.LocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          createMany: {
            args: Prisma.LocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          delete: {
            args: Prisma.LocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          update: {
            args: Prisma.LocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          deleteMany: {
            args: Prisma.LocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>[]
          }
          upsert: {
            args: Prisma.LocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocationPayload>
          }
          aggregate: {
            args: Prisma.LocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocation>
          }
          groupBy: {
            args: Prisma.LocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocationCountArgs<ExtArgs>
            result: $Utils.Optional<LocationCountAggregateOutputType> | number
          }
        }
      }
      LoreFragment: {
        payload: Prisma.$LoreFragmentPayload<ExtArgs>
        fields: Prisma.LoreFragmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LoreFragmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LoreFragmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>
          }
          findFirst: {
            args: Prisma.LoreFragmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LoreFragmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>
          }
          findMany: {
            args: Prisma.LoreFragmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>[]
          }
          create: {
            args: Prisma.LoreFragmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>
          }
          createMany: {
            args: Prisma.LoreFragmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LoreFragmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>[]
          }
          delete: {
            args: Prisma.LoreFragmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>
          }
          update: {
            args: Prisma.LoreFragmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>
          }
          deleteMany: {
            args: Prisma.LoreFragmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LoreFragmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LoreFragmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>[]
          }
          upsert: {
            args: Prisma.LoreFragmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LoreFragmentPayload>
          }
          aggregate: {
            args: Prisma.LoreFragmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLoreFragment>
          }
          groupBy: {
            args: Prisma.LoreFragmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<LoreFragmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.LoreFragmentCountArgs<ExtArgs>
            result: $Utils.Optional<LoreFragmentCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
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
      NarrativeHistory: {
        payload: Prisma.$NarrativeHistoryPayload<ExtArgs>
        fields: Prisma.NarrativeHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NarrativeHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NarrativeHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>
          }
          findFirst: {
            args: Prisma.NarrativeHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NarrativeHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>
          }
          findMany: {
            args: Prisma.NarrativeHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>[]
          }
          create: {
            args: Prisma.NarrativeHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>
          }
          createMany: {
            args: Prisma.NarrativeHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NarrativeHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>[]
          }
          delete: {
            args: Prisma.NarrativeHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>
          }
          update: {
            args: Prisma.NarrativeHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>
          }
          deleteMany: {
            args: Prisma.NarrativeHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NarrativeHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NarrativeHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>[]
          }
          upsert: {
            args: Prisma.NarrativeHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NarrativeHistoryPayload>
          }
          aggregate: {
            args: Prisma.NarrativeHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNarrativeHistory>
          }
          groupBy: {
            args: Prisma.NarrativeHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<NarrativeHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.NarrativeHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<NarrativeHistoryCountAggregateOutputType> | number
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
    world?: WorldOmit
    characterWorldState?: CharacterWorldStateOmit
    location?: LocationOmit
    loreFragment?: LoreFragmentOmit
    event?: EventOmit
    gameSession?: GameSessionOmit
    gameState?: GameStateOmit
    nPCTemplate?: NPCTemplateOmit
    nPCState?: NPCStateOmit
    decision?: DecisionOmit
    aIContextHistory?: AIContextHistoryOmit
    narrativeHistory?: NarrativeHistoryOmit
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
    characterWorldStates: number
  }

  export type CharacterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameSessions?: boolean | CharacterCountOutputTypeCountGameSessionsArgs
    gameStates?: boolean | CharacterCountOutputTypeCountGameStatesArgs
    characterWorldStates?: boolean | CharacterCountOutputTypeCountCharacterWorldStatesArgs
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
   * CharacterCountOutputType without action
   */
  export type CharacterCountOutputTypeCountCharacterWorldStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWorldStateWhereInput
  }


  /**
   * Count Type WorldCountOutputType
   */

  export type WorldCountOutputType = {
    characterStates: number
    gameStates: number
    locations: number
    loreFragments: number
    events: number
  }

  export type WorldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterStates?: boolean | WorldCountOutputTypeCountCharacterStatesArgs
    gameStates?: boolean | WorldCountOutputTypeCountGameStatesArgs
    locations?: boolean | WorldCountOutputTypeCountLocationsArgs
    loreFragments?: boolean | WorldCountOutputTypeCountLoreFragmentsArgs
    events?: boolean | WorldCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorldCountOutputType
     */
    select?: WorldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountCharacterStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWorldStateWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameStateWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountLoreFragmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreFragmentWhereInput
  }

  /**
   * WorldCountOutputType without action
   */
  export type WorldCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }


  /**
   * Count Type LocationCountOutputType
   */

  export type LocationCountOutputType = {
    events: number
    gameStates: number
  }

  export type LocationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | LocationCountOutputTypeCountEventsArgs
    gameStates?: boolean | LocationCountOutputTypeCountGameStatesArgs
  }

  // Custom InputTypes
  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocationCountOutputType
     */
    select?: LocationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * LocationCountOutputType without action
   */
  export type LocationCountOutputTypeCountGameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    narrativeHistory: number
  }

  export type GameStateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    npcStates?: boolean | GameStateCountOutputTypeCountNpcStatesArgs
    decisions?: boolean | GameStateCountOutputTypeCountDecisionsArgs
    aiContextHistory?: boolean | GameStateCountOutputTypeCountAiContextHistoryArgs
    narrativeHistory?: boolean | GameStateCountOutputTypeCountNarrativeHistoryArgs
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
   * GameStateCountOutputType without action
   */
  export type GameStateCountOutputTypeCountNarrativeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NarrativeHistoryWhereInput
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
    characterWorldStates?: boolean | Character$characterWorldStatesArgs<ExtArgs>
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
    characterWorldStates?: boolean | Character$characterWorldStatesArgs<ExtArgs>
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
      characterWorldStates: Prisma.$CharacterWorldStatePayload<ExtArgs>[]
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
    characterWorldStates<T extends Character$characterWorldStatesArgs<ExtArgs> = {}>(args?: Subset<T, Character$characterWorldStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Character.characterWorldStates
   */
  export type Character$characterWorldStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    where?: CharacterWorldStateWhereInput
    orderBy?: CharacterWorldStateOrderByWithRelationInput | CharacterWorldStateOrderByWithRelationInput[]
    cursor?: CharacterWorldStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterWorldStateScalarFieldEnum | CharacterWorldStateScalarFieldEnum[]
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
   * Model World
   */

  export type AggregateWorld = {
    _count: WorldCountAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  export type WorldMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    thumbnailUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WorldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    thumbnailUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type WorldCountAggregateOutputType = {
    id: number
    name: number
    description: number
    thumbnailUrl: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type WorldMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    thumbnailUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type WorldMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    thumbnailUrl?: true
    isActive?: true
    createdAt?: true
  }

  export type WorldCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    thumbnailUrl?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type WorldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which World to aggregate.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worlds
    **/
    _count?: true | WorldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorldMaxAggregateInputType
  }

  export type GetWorldAggregateType<T extends WorldAggregateArgs> = {
        [P in keyof T & keyof AggregateWorld]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorld[P]>
      : GetScalarType<T[P], AggregateWorld[P]>
  }




  export type WorldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorldWhereInput
    orderBy?: WorldOrderByWithAggregationInput | WorldOrderByWithAggregationInput[]
    by: WorldScalarFieldEnum[] | WorldScalarFieldEnum
    having?: WorldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorldCountAggregateInputType | true
    _min?: WorldMinAggregateInputType
    _max?: WorldMaxAggregateInputType
  }

  export type WorldGroupByOutputType = {
    id: string
    name: string
    description: string | null
    thumbnailUrl: string | null
    isActive: boolean
    createdAt: Date
    _count: WorldCountAggregateOutputType | null
    _min: WorldMinAggregateOutputType | null
    _max: WorldMaxAggregateOutputType | null
  }

  type GetWorldGroupByPayload<T extends WorldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorldGroupByOutputType[P]>
            : GetScalarType<T[P], WorldGroupByOutputType[P]>
        }
      >
    >


  export type WorldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    characterStates?: boolean | World$characterStatesArgs<ExtArgs>
    gameStates?: boolean | World$gameStatesArgs<ExtArgs>
    locations?: boolean | World$locationsArgs<ExtArgs>
    loreFragments?: boolean | World$loreFragmentsArgs<ExtArgs>
    events?: boolean | World$eventsArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["world"]>

  export type WorldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["world"]>

  export type WorldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["world"]>

  export type WorldSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    thumbnailUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type WorldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "thumbnailUrl" | "isActive" | "createdAt", ExtArgs["result"]["world"]>
  export type WorldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    characterStates?: boolean | World$characterStatesArgs<ExtArgs>
    gameStates?: boolean | World$gameStatesArgs<ExtArgs>
    locations?: boolean | World$locationsArgs<ExtArgs>
    loreFragments?: boolean | World$loreFragmentsArgs<ExtArgs>
    events?: boolean | World$eventsArgs<ExtArgs>
    _count?: boolean | WorldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "World"
    objects: {
      characterStates: Prisma.$CharacterWorldStatePayload<ExtArgs>[]
      gameStates: Prisma.$GameStatePayload<ExtArgs>[]
      locations: Prisma.$LocationPayload<ExtArgs>[]
      loreFragments: Prisma.$LoreFragmentPayload<ExtArgs>[]
      events: Prisma.$EventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      thumbnailUrl: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["world"]>
    composites: {}
  }

  type WorldGetPayload<S extends boolean | null | undefined | WorldDefaultArgs> = $Result.GetResult<Prisma.$WorldPayload, S>

  type WorldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorldCountAggregateInputType | true
    }

  export interface WorldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['World'], meta: { name: 'World' } }
    /**
     * Find zero or one World that matches the filter.
     * @param {WorldFindUniqueArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorldFindUniqueArgs>(args: SelectSubset<T, WorldFindUniqueArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one World that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorldFindUniqueOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorldFindUniqueOrThrowArgs>(args: SelectSubset<T, WorldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first World that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorldFindFirstArgs>(args?: SelectSubset<T, WorldFindFirstArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first World that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindFirstOrThrowArgs} args - Arguments to find a World
     * @example
     * // Get one World
     * const world = await prisma.world.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorldFindFirstOrThrowArgs>(args?: SelectSubset<T, WorldFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Worlds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worlds
     * const worlds = await prisma.world.findMany()
     * 
     * // Get first 10 Worlds
     * const worlds = await prisma.world.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worldWithIdOnly = await prisma.world.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorldFindManyArgs>(args?: SelectSubset<T, WorldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a World.
     * @param {WorldCreateArgs} args - Arguments to create a World.
     * @example
     * // Create one World
     * const World = await prisma.world.create({
     *   data: {
     *     // ... data to create a World
     *   }
     * })
     * 
     */
    create<T extends WorldCreateArgs>(args: SelectSubset<T, WorldCreateArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Worlds.
     * @param {WorldCreateManyArgs} args - Arguments to create many Worlds.
     * @example
     * // Create many Worlds
     * const world = await prisma.world.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorldCreateManyArgs>(args?: SelectSubset<T, WorldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worlds and returns the data saved in the database.
     * @param {WorldCreateManyAndReturnArgs} args - Arguments to create many Worlds.
     * @example
     * // Create many Worlds
     * const world = await prisma.world.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worlds and only return the `id`
     * const worldWithIdOnly = await prisma.world.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorldCreateManyAndReturnArgs>(args?: SelectSubset<T, WorldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a World.
     * @param {WorldDeleteArgs} args - Arguments to delete one World.
     * @example
     * // Delete one World
     * const World = await prisma.world.delete({
     *   where: {
     *     // ... filter to delete one World
     *   }
     * })
     * 
     */
    delete<T extends WorldDeleteArgs>(args: SelectSubset<T, WorldDeleteArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one World.
     * @param {WorldUpdateArgs} args - Arguments to update one World.
     * @example
     * // Update one World
     * const world = await prisma.world.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorldUpdateArgs>(args: SelectSubset<T, WorldUpdateArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Worlds.
     * @param {WorldDeleteManyArgs} args - Arguments to filter Worlds to delete.
     * @example
     * // Delete a few Worlds
     * const { count } = await prisma.world.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorldDeleteManyArgs>(args?: SelectSubset<T, WorldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorldUpdateManyArgs>(args: SelectSubset<T, WorldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worlds and returns the data updated in the database.
     * @param {WorldUpdateManyAndReturnArgs} args - Arguments to update many Worlds.
     * @example
     * // Update many Worlds
     * const world = await prisma.world.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worlds and only return the `id`
     * const worldWithIdOnly = await prisma.world.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorldUpdateManyAndReturnArgs>(args: SelectSubset<T, WorldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one World.
     * @param {WorldUpsertArgs} args - Arguments to update or create a World.
     * @example
     * // Update or create a World
     * const world = await prisma.world.upsert({
     *   create: {
     *     // ... data to create a World
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the World we want to update
     *   }
     * })
     */
    upsert<T extends WorldUpsertArgs>(args: SelectSubset<T, WorldUpsertArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Worlds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldCountArgs} args - Arguments to filter Worlds to count.
     * @example
     * // Count the number of Worlds
     * const count = await prisma.world.count({
     *   where: {
     *     // ... the filter for the Worlds we want to count
     *   }
     * })
    **/
    count<T extends WorldCountArgs>(
      args?: Subset<T, WorldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorldAggregateArgs>(args: Subset<T, WorldAggregateArgs>): Prisma.PrismaPromise<GetWorldAggregateType<T>>

    /**
     * Group by World.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorldGroupByArgs} args - Group by arguments.
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
      T extends WorldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorldGroupByArgs['orderBy'] }
        : { orderBy?: WorldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the World model
   */
  readonly fields: WorldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for World.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    characterStates<T extends World$characterStatesArgs<ExtArgs> = {}>(args?: Subset<T, World$characterStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStates<T extends World$gameStatesArgs<ExtArgs> = {}>(args?: Subset<T, World$gameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    locations<T extends World$locationsArgs<ExtArgs> = {}>(args?: Subset<T, World$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    loreFragments<T extends World$loreFragmentsArgs<ExtArgs> = {}>(args?: Subset<T, World$loreFragmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends World$eventsArgs<ExtArgs> = {}>(args?: Subset<T, World$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the World model
   */
  interface WorldFieldRefs {
    readonly id: FieldRef<"World", 'String'>
    readonly name: FieldRef<"World", 'String'>
    readonly description: FieldRef<"World", 'String'>
    readonly thumbnailUrl: FieldRef<"World", 'String'>
    readonly isActive: FieldRef<"World", 'Boolean'>
    readonly createdAt: FieldRef<"World", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * World findUnique
   */
  export type WorldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World findUniqueOrThrow
   */
  export type WorldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World findFirst
   */
  export type WorldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World findFirstOrThrow
   */
  export type WorldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which World to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worlds.
     */
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World findMany
   */
  export type WorldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter, which Worlds to fetch.
     */
    where?: WorldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worlds to fetch.
     */
    orderBy?: WorldOrderByWithRelationInput | WorldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worlds.
     */
    cursor?: WorldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worlds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worlds.
     */
    skip?: number
    distinct?: WorldScalarFieldEnum | WorldScalarFieldEnum[]
  }

  /**
   * World create
   */
  export type WorldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to create a World.
     */
    data: XOR<WorldCreateInput, WorldUncheckedCreateInput>
  }

  /**
   * World createMany
   */
  export type WorldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * World createManyAndReturn
   */
  export type WorldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * The data used to create many Worlds.
     */
    data: WorldCreateManyInput | WorldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * World update
   */
  export type WorldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The data needed to update a World.
     */
    data: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
    /**
     * Choose, which World to update.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World updateMany
   */
  export type WorldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to update.
     */
    limit?: number
  }

  /**
   * World updateManyAndReturn
   */
  export type WorldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * The data used to update Worlds.
     */
    data: XOR<WorldUpdateManyMutationInput, WorldUncheckedUpdateManyInput>
    /**
     * Filter which Worlds to update
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to update.
     */
    limit?: number
  }

  /**
   * World upsert
   */
  export type WorldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * The filter to search for the World to update in case it exists.
     */
    where: WorldWhereUniqueInput
    /**
     * In case the World found by the `where` argument doesn't exist, create a new World with this data.
     */
    create: XOR<WorldCreateInput, WorldUncheckedCreateInput>
    /**
     * In case the World was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorldUpdateInput, WorldUncheckedUpdateInput>
  }

  /**
   * World delete
   */
  export type WorldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    /**
     * Filter which World to delete.
     */
    where: WorldWhereUniqueInput
  }

  /**
   * World deleteMany
   */
  export type WorldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worlds to delete
     */
    where?: WorldWhereInput
    /**
     * Limit how many Worlds to delete.
     */
    limit?: number
  }

  /**
   * World.characterStates
   */
  export type World$characterStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    where?: CharacterWorldStateWhereInput
    orderBy?: CharacterWorldStateOrderByWithRelationInput | CharacterWorldStateOrderByWithRelationInput[]
    cursor?: CharacterWorldStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacterWorldStateScalarFieldEnum | CharacterWorldStateScalarFieldEnum[]
  }

  /**
   * World.gameStates
   */
  export type World$gameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * World.locations
   */
  export type World$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    cursor?: LocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * World.loreFragments
   */
  export type World$loreFragmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    where?: LoreFragmentWhereInput
    orderBy?: LoreFragmentOrderByWithRelationInput | LoreFragmentOrderByWithRelationInput[]
    cursor?: LoreFragmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LoreFragmentScalarFieldEnum | LoreFragmentScalarFieldEnum[]
  }

  /**
   * World.events
   */
  export type World$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * World without action
   */
  export type WorldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
  }


  /**
   * Model CharacterWorldState
   */

  export type AggregateCharacterWorldState = {
    _count: CharacterWorldStateCountAggregateOutputType | null
    _min: CharacterWorldStateMinAggregateOutputType | null
    _max: CharacterWorldStateMaxAggregateOutputType | null
  }

  export type CharacterWorldStateMinAggregateOutputType = {
    id: string | null
    characterId: string | null
    worldId: string | null
    currentLocation: string | null
    lastPlayedAt: Date | null
  }

  export type CharacterWorldStateMaxAggregateOutputType = {
    id: string | null
    characterId: string | null
    worldId: string | null
    currentLocation: string | null
    lastPlayedAt: Date | null
  }

  export type CharacterWorldStateCountAggregateOutputType = {
    id: number
    characterId: number
    worldId: number
    currentLocation: number
    lastPlayedAt: number
    _all: number
  }


  export type CharacterWorldStateMinAggregateInputType = {
    id?: true
    characterId?: true
    worldId?: true
    currentLocation?: true
    lastPlayedAt?: true
  }

  export type CharacterWorldStateMaxAggregateInputType = {
    id?: true
    characterId?: true
    worldId?: true
    currentLocation?: true
    lastPlayedAt?: true
  }

  export type CharacterWorldStateCountAggregateInputType = {
    id?: true
    characterId?: true
    worldId?: true
    currentLocation?: true
    lastPlayedAt?: true
    _all?: true
  }

  export type CharacterWorldStateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterWorldState to aggregate.
     */
    where?: CharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterWorldStates to fetch.
     */
    orderBy?: CharacterWorldStateOrderByWithRelationInput | CharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterWorldStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterWorldStates
    **/
    _count?: true | CharacterWorldStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterWorldStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterWorldStateMaxAggregateInputType
  }

  export type GetCharacterWorldStateAggregateType<T extends CharacterWorldStateAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterWorldState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterWorldState[P]>
      : GetScalarType<T[P], AggregateCharacterWorldState[P]>
  }




  export type CharacterWorldStateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterWorldStateWhereInput
    orderBy?: CharacterWorldStateOrderByWithAggregationInput | CharacterWorldStateOrderByWithAggregationInput[]
    by: CharacterWorldStateScalarFieldEnum[] | CharacterWorldStateScalarFieldEnum
    having?: CharacterWorldStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterWorldStateCountAggregateInputType | true
    _min?: CharacterWorldStateMinAggregateInputType
    _max?: CharacterWorldStateMaxAggregateInputType
  }

  export type CharacterWorldStateGroupByOutputType = {
    id: string
    characterId: string
    worldId: string
    currentLocation: string | null
    lastPlayedAt: Date | null
    _count: CharacterWorldStateCountAggregateOutputType | null
    _min: CharacterWorldStateMinAggregateOutputType | null
    _max: CharacterWorldStateMaxAggregateOutputType | null
  }

  type GetCharacterWorldStateGroupByPayload<T extends CharacterWorldStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterWorldStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterWorldStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterWorldStateGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterWorldStateGroupByOutputType[P]>
        }
      >
    >


  export type CharacterWorldStateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterWorldState"]>

  export type CharacterWorldStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterWorldState"]>

  export type CharacterWorldStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characterWorldState"]>

  export type CharacterWorldStateSelectScalar = {
    id?: boolean
    characterId?: boolean
    worldId?: boolean
    currentLocation?: boolean
    lastPlayedAt?: boolean
  }

  export type CharacterWorldStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "characterId" | "worldId" | "currentLocation" | "lastPlayedAt", ExtArgs["result"]["characterWorldState"]>
  export type CharacterWorldStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type CharacterWorldStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type CharacterWorldStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $CharacterWorldStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterWorldState"
    objects: {
      character: Prisma.$CharacterPayload<ExtArgs>
      world: Prisma.$WorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      characterId: string
      worldId: string
      currentLocation: string | null
      lastPlayedAt: Date | null
    }, ExtArgs["result"]["characterWorldState"]>
    composites: {}
  }

  type CharacterWorldStateGetPayload<S extends boolean | null | undefined | CharacterWorldStateDefaultArgs> = $Result.GetResult<Prisma.$CharacterWorldStatePayload, S>

  type CharacterWorldStateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CharacterWorldStateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CharacterWorldStateCountAggregateInputType | true
    }

  export interface CharacterWorldStateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterWorldState'], meta: { name: 'CharacterWorldState' } }
    /**
     * Find zero or one CharacterWorldState that matches the filter.
     * @param {CharacterWorldStateFindUniqueArgs} args - Arguments to find a CharacterWorldState
     * @example
     * // Get one CharacterWorldState
     * const characterWorldState = await prisma.characterWorldState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacterWorldStateFindUniqueArgs>(args: SelectSubset<T, CharacterWorldStateFindUniqueArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CharacterWorldState that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CharacterWorldStateFindUniqueOrThrowArgs} args - Arguments to find a CharacterWorldState
     * @example
     * // Get one CharacterWorldState
     * const characterWorldState = await prisma.characterWorldState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacterWorldStateFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacterWorldStateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterWorldState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateFindFirstArgs} args - Arguments to find a CharacterWorldState
     * @example
     * // Get one CharacterWorldState
     * const characterWorldState = await prisma.characterWorldState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacterWorldStateFindFirstArgs>(args?: SelectSubset<T, CharacterWorldStateFindFirstArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CharacterWorldState that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateFindFirstOrThrowArgs} args - Arguments to find a CharacterWorldState
     * @example
     * // Get one CharacterWorldState
     * const characterWorldState = await prisma.characterWorldState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacterWorldStateFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacterWorldStateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CharacterWorldStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterWorldStates
     * const characterWorldStates = await prisma.characterWorldState.findMany()
     * 
     * // Get first 10 CharacterWorldStates
     * const characterWorldStates = await prisma.characterWorldState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterWorldStateWithIdOnly = await prisma.characterWorldState.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacterWorldStateFindManyArgs>(args?: SelectSubset<T, CharacterWorldStateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CharacterWorldState.
     * @param {CharacterWorldStateCreateArgs} args - Arguments to create a CharacterWorldState.
     * @example
     * // Create one CharacterWorldState
     * const CharacterWorldState = await prisma.characterWorldState.create({
     *   data: {
     *     // ... data to create a CharacterWorldState
     *   }
     * })
     * 
     */
    create<T extends CharacterWorldStateCreateArgs>(args: SelectSubset<T, CharacterWorldStateCreateArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CharacterWorldStates.
     * @param {CharacterWorldStateCreateManyArgs} args - Arguments to create many CharacterWorldStates.
     * @example
     * // Create many CharacterWorldStates
     * const characterWorldState = await prisma.characterWorldState.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacterWorldStateCreateManyArgs>(args?: SelectSubset<T, CharacterWorldStateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CharacterWorldStates and returns the data saved in the database.
     * @param {CharacterWorldStateCreateManyAndReturnArgs} args - Arguments to create many CharacterWorldStates.
     * @example
     * // Create many CharacterWorldStates
     * const characterWorldState = await prisma.characterWorldState.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CharacterWorldStates and only return the `id`
     * const characterWorldStateWithIdOnly = await prisma.characterWorldState.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacterWorldStateCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacterWorldStateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CharacterWorldState.
     * @param {CharacterWorldStateDeleteArgs} args - Arguments to delete one CharacterWorldState.
     * @example
     * // Delete one CharacterWorldState
     * const CharacterWorldState = await prisma.characterWorldState.delete({
     *   where: {
     *     // ... filter to delete one CharacterWorldState
     *   }
     * })
     * 
     */
    delete<T extends CharacterWorldStateDeleteArgs>(args: SelectSubset<T, CharacterWorldStateDeleteArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CharacterWorldState.
     * @param {CharacterWorldStateUpdateArgs} args - Arguments to update one CharacterWorldState.
     * @example
     * // Update one CharacterWorldState
     * const characterWorldState = await prisma.characterWorldState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacterWorldStateUpdateArgs>(args: SelectSubset<T, CharacterWorldStateUpdateArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CharacterWorldStates.
     * @param {CharacterWorldStateDeleteManyArgs} args - Arguments to filter CharacterWorldStates to delete.
     * @example
     * // Delete a few CharacterWorldStates
     * const { count } = await prisma.characterWorldState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacterWorldStateDeleteManyArgs>(args?: SelectSubset<T, CharacterWorldStateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterWorldStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterWorldStates
     * const characterWorldState = await prisma.characterWorldState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacterWorldStateUpdateManyArgs>(args: SelectSubset<T, CharacterWorldStateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterWorldStates and returns the data updated in the database.
     * @param {CharacterWorldStateUpdateManyAndReturnArgs} args - Arguments to update many CharacterWorldStates.
     * @example
     * // Update many CharacterWorldStates
     * const characterWorldState = await prisma.characterWorldState.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CharacterWorldStates and only return the `id`
     * const characterWorldStateWithIdOnly = await prisma.characterWorldState.updateManyAndReturn({
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
    updateManyAndReturn<T extends CharacterWorldStateUpdateManyAndReturnArgs>(args: SelectSubset<T, CharacterWorldStateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CharacterWorldState.
     * @param {CharacterWorldStateUpsertArgs} args - Arguments to update or create a CharacterWorldState.
     * @example
     * // Update or create a CharacterWorldState
     * const characterWorldState = await prisma.characterWorldState.upsert({
     *   create: {
     *     // ... data to create a CharacterWorldState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterWorldState we want to update
     *   }
     * })
     */
    upsert<T extends CharacterWorldStateUpsertArgs>(args: SelectSubset<T, CharacterWorldStateUpsertArgs<ExtArgs>>): Prisma__CharacterWorldStateClient<$Result.GetResult<Prisma.$CharacterWorldStatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CharacterWorldStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateCountArgs} args - Arguments to filter CharacterWorldStates to count.
     * @example
     * // Count the number of CharacterWorldStates
     * const count = await prisma.characterWorldState.count({
     *   where: {
     *     // ... the filter for the CharacterWorldStates we want to count
     *   }
     * })
    **/
    count<T extends CharacterWorldStateCountArgs>(
      args?: Subset<T, CharacterWorldStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterWorldStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterWorldState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterWorldStateAggregateArgs>(args: Subset<T, CharacterWorldStateAggregateArgs>): Prisma.PrismaPromise<GetCharacterWorldStateAggregateType<T>>

    /**
     * Group by CharacterWorldState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterWorldStateGroupByArgs} args - Group by arguments.
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
      T extends CharacterWorldStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterWorldStateGroupByArgs['orderBy'] }
        : { orderBy?: CharacterWorldStateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterWorldStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterWorldStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterWorldState model
   */
  readonly fields: CharacterWorldStateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterWorldState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterWorldStateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    character<T extends CharacterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacterDefaultArgs<ExtArgs>>): Prisma__CharacterClient<$Result.GetResult<Prisma.$CharacterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CharacterWorldState model
   */
  interface CharacterWorldStateFieldRefs {
    readonly id: FieldRef<"CharacterWorldState", 'String'>
    readonly characterId: FieldRef<"CharacterWorldState", 'String'>
    readonly worldId: FieldRef<"CharacterWorldState", 'String'>
    readonly currentLocation: FieldRef<"CharacterWorldState", 'String'>
    readonly lastPlayedAt: FieldRef<"CharacterWorldState", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CharacterWorldState findUnique
   */
  export type CharacterWorldStateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which CharacterWorldState to fetch.
     */
    where: CharacterWorldStateWhereUniqueInput
  }

  /**
   * CharacterWorldState findUniqueOrThrow
   */
  export type CharacterWorldStateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which CharacterWorldState to fetch.
     */
    where: CharacterWorldStateWhereUniqueInput
  }

  /**
   * CharacterWorldState findFirst
   */
  export type CharacterWorldStateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which CharacterWorldState to fetch.
     */
    where?: CharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterWorldStates to fetch.
     */
    orderBy?: CharacterWorldStateOrderByWithRelationInput | CharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterWorldStates.
     */
    cursor?: CharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterWorldStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterWorldStates.
     */
    distinct?: CharacterWorldStateScalarFieldEnum | CharacterWorldStateScalarFieldEnum[]
  }

  /**
   * CharacterWorldState findFirstOrThrow
   */
  export type CharacterWorldStateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which CharacterWorldState to fetch.
     */
    where?: CharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterWorldStates to fetch.
     */
    orderBy?: CharacterWorldStateOrderByWithRelationInput | CharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterWorldStates.
     */
    cursor?: CharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterWorldStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterWorldStates.
     */
    distinct?: CharacterWorldStateScalarFieldEnum | CharacterWorldStateScalarFieldEnum[]
  }

  /**
   * CharacterWorldState findMany
   */
  export type CharacterWorldStateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter, which CharacterWorldStates to fetch.
     */
    where?: CharacterWorldStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterWorldStates to fetch.
     */
    orderBy?: CharacterWorldStateOrderByWithRelationInput | CharacterWorldStateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterWorldStates.
     */
    cursor?: CharacterWorldStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterWorldStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterWorldStates.
     */
    skip?: number
    distinct?: CharacterWorldStateScalarFieldEnum | CharacterWorldStateScalarFieldEnum[]
  }

  /**
   * CharacterWorldState create
   */
  export type CharacterWorldStateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * The data needed to create a CharacterWorldState.
     */
    data: XOR<CharacterWorldStateCreateInput, CharacterWorldStateUncheckedCreateInput>
  }

  /**
   * CharacterWorldState createMany
   */
  export type CharacterWorldStateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterWorldStates.
     */
    data: CharacterWorldStateCreateManyInput | CharacterWorldStateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterWorldState createManyAndReturn
   */
  export type CharacterWorldStateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * The data used to create many CharacterWorldStates.
     */
    data: CharacterWorldStateCreateManyInput | CharacterWorldStateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterWorldState update
   */
  export type CharacterWorldStateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * The data needed to update a CharacterWorldState.
     */
    data: XOR<CharacterWorldStateUpdateInput, CharacterWorldStateUncheckedUpdateInput>
    /**
     * Choose, which CharacterWorldState to update.
     */
    where: CharacterWorldStateWhereUniqueInput
  }

  /**
   * CharacterWorldState updateMany
   */
  export type CharacterWorldStateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterWorldStates.
     */
    data: XOR<CharacterWorldStateUpdateManyMutationInput, CharacterWorldStateUncheckedUpdateManyInput>
    /**
     * Filter which CharacterWorldStates to update
     */
    where?: CharacterWorldStateWhereInput
    /**
     * Limit how many CharacterWorldStates to update.
     */
    limit?: number
  }

  /**
   * CharacterWorldState updateManyAndReturn
   */
  export type CharacterWorldStateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * The data used to update CharacterWorldStates.
     */
    data: XOR<CharacterWorldStateUpdateManyMutationInput, CharacterWorldStateUncheckedUpdateManyInput>
    /**
     * Filter which CharacterWorldStates to update
     */
    where?: CharacterWorldStateWhereInput
    /**
     * Limit how many CharacterWorldStates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CharacterWorldState upsert
   */
  export type CharacterWorldStateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * The filter to search for the CharacterWorldState to update in case it exists.
     */
    where: CharacterWorldStateWhereUniqueInput
    /**
     * In case the CharacterWorldState found by the `where` argument doesn't exist, create a new CharacterWorldState with this data.
     */
    create: XOR<CharacterWorldStateCreateInput, CharacterWorldStateUncheckedCreateInput>
    /**
     * In case the CharacterWorldState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterWorldStateUpdateInput, CharacterWorldStateUncheckedUpdateInput>
  }

  /**
   * CharacterWorldState delete
   */
  export type CharacterWorldStateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
    /**
     * Filter which CharacterWorldState to delete.
     */
    where: CharacterWorldStateWhereUniqueInput
  }

  /**
   * CharacterWorldState deleteMany
   */
  export type CharacterWorldStateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterWorldStates to delete
     */
    where?: CharacterWorldStateWhereInput
    /**
     * Limit how many CharacterWorldStates to delete.
     */
    limit?: number
  }

  /**
   * CharacterWorldState without action
   */
  export type CharacterWorldStateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterWorldState
     */
    select?: CharacterWorldStateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CharacterWorldState
     */
    omit?: CharacterWorldStateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacterWorldStateInclude<ExtArgs> | null
  }


  /**
   * Model Location
   */

  export type AggregateLocation = {
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  export type LocationMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    name: string | null
    description: string | null
    isStartingLocation: boolean | null
    thumbnailUrl: string | null
  }

  export type LocationMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    name: string | null
    description: string | null
    isStartingLocation: boolean | null
    thumbnailUrl: string | null
  }

  export type LocationCountAggregateOutputType = {
    id: number
    worldId: number
    name: number
    description: number
    isStartingLocation: number
    connectedLocationIds: number
    thumbnailUrl: number
    _all: number
  }


  export type LocationMinAggregateInputType = {
    id?: true
    worldId?: true
    name?: true
    description?: true
    isStartingLocation?: true
    thumbnailUrl?: true
  }

  export type LocationMaxAggregateInputType = {
    id?: true
    worldId?: true
    name?: true
    description?: true
    isStartingLocation?: true
    thumbnailUrl?: true
  }

  export type LocationCountAggregateInputType = {
    id?: true
    worldId?: true
    name?: true
    description?: true
    isStartingLocation?: true
    connectedLocationIds?: true
    thumbnailUrl?: true
    _all?: true
  }

  export type LocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Location to aggregate.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Locations
    **/
    _count?: true | LocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationMaxAggregateInputType
  }

  export type GetLocationAggregateType<T extends LocationAggregateArgs> = {
        [P in keyof T & keyof AggregateLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocation[P]>
      : GetScalarType<T[P], AggregateLocation[P]>
  }




  export type LocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocationWhereInput
    orderBy?: LocationOrderByWithAggregationInput | LocationOrderByWithAggregationInput[]
    by: LocationScalarFieldEnum[] | LocationScalarFieldEnum
    having?: LocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationCountAggregateInputType | true
    _min?: LocationMinAggregateInputType
    _max?: LocationMaxAggregateInputType
  }

  export type LocationGroupByOutputType = {
    id: string
    worldId: string
    name: string
    description: string | null
    isStartingLocation: boolean
    connectedLocationIds: string[]
    thumbnailUrl: string | null
    _count: LocationCountAggregateOutputType | null
    _min: LocationMinAggregateOutputType | null
    _max: LocationMaxAggregateOutputType | null
  }

  type GetLocationGroupByPayload<T extends LocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationGroupByOutputType[P]>
            : GetScalarType<T[P], LocationGroupByOutputType[P]>
        }
      >
    >


  export type LocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    thumbnailUrl?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    events?: boolean | Location$eventsArgs<ExtArgs>
    gameStates?: boolean | Location$gameStatesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    thumbnailUrl?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    thumbnailUrl?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["location"]>

  export type LocationSelectScalar = {
    id?: boolean
    worldId?: boolean
    name?: boolean
    description?: boolean
    isStartingLocation?: boolean
    connectedLocationIds?: boolean
    thumbnailUrl?: boolean
  }

  export type LocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worldId" | "name" | "description" | "isStartingLocation" | "connectedLocationIds" | "thumbnailUrl", ExtArgs["result"]["location"]>
  export type LocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    events?: boolean | Location$eventsArgs<ExtArgs>
    gameStates?: boolean | Location$gameStatesArgs<ExtArgs>
    _count?: boolean | LocationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type LocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $LocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Location"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
      events: Prisma.$EventPayload<ExtArgs>[]
      gameStates: Prisma.$GameStatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      name: string
      description: string | null
      isStartingLocation: boolean
      connectedLocationIds: string[]
      thumbnailUrl: string | null
    }, ExtArgs["result"]["location"]>
    composites: {}
  }

  type LocationGetPayload<S extends boolean | null | undefined | LocationDefaultArgs> = $Result.GetResult<Prisma.$LocationPayload, S>

  type LocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationCountAggregateInputType | true
    }

  export interface LocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Location'], meta: { name: 'Location' } }
    /**
     * Find zero or one Location that matches the filter.
     * @param {LocationFindUniqueArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocationFindUniqueArgs>(args: SelectSubset<T, LocationFindUniqueArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Location that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocationFindUniqueOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocationFindUniqueOrThrowArgs>(args: SelectSubset<T, LocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocationFindFirstArgs>(args?: SelectSubset<T, LocationFindFirstArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Location that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindFirstOrThrowArgs} args - Arguments to find a Location
     * @example
     * // Get one Location
     * const location = await prisma.location.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocationFindFirstOrThrowArgs>(args?: SelectSubset<T, LocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.location.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.location.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationWithIdOnly = await prisma.location.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocationFindManyArgs>(args?: SelectSubset<T, LocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Location.
     * @param {LocationCreateArgs} args - Arguments to create a Location.
     * @example
     * // Create one Location
     * const Location = await prisma.location.create({
     *   data: {
     *     // ... data to create a Location
     *   }
     * })
     * 
     */
    create<T extends LocationCreateArgs>(args: SelectSubset<T, LocationCreateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {LocationCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocationCreateManyArgs>(args?: SelectSubset<T, LocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {LocationCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const location = await prisma.location.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocationCreateManyAndReturnArgs>(args?: SelectSubset<T, LocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Location.
     * @param {LocationDeleteArgs} args - Arguments to delete one Location.
     * @example
     * // Delete one Location
     * const Location = await prisma.location.delete({
     *   where: {
     *     // ... filter to delete one Location
     *   }
     * })
     * 
     */
    delete<T extends LocationDeleteArgs>(args: SelectSubset<T, LocationDeleteArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Location.
     * @param {LocationUpdateArgs} args - Arguments to update one Location.
     * @example
     * // Update one Location
     * const location = await prisma.location.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocationUpdateArgs>(args: SelectSubset<T, LocationUpdateArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {LocationDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.location.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocationDeleteManyArgs>(args?: SelectSubset<T, LocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocationUpdateManyArgs>(args: SelectSubset<T, LocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {LocationUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const location = await prisma.location.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationWithIdOnly = await prisma.location.updateManyAndReturn({
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
    updateManyAndReturn<T extends LocationUpdateManyAndReturnArgs>(args: SelectSubset<T, LocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Location.
     * @param {LocationUpsertArgs} args - Arguments to update or create a Location.
     * @example
     * // Update or create a Location
     * const location = await prisma.location.upsert({
     *   create: {
     *     // ... data to create a Location
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Location we want to update
     *   }
     * })
     */
    upsert<T extends LocationUpsertArgs>(args: SelectSubset<T, LocationUpsertArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.location.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends LocationCountArgs>(
      args?: Subset<T, LocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LocationAggregateArgs>(args: Subset<T, LocationAggregateArgs>): Prisma.PrismaPromise<GetLocationAggregateType<T>>

    /**
     * Group by Location.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationGroupByArgs} args - Group by arguments.
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
      T extends LocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocationGroupByArgs['orderBy'] }
        : { orderBy?: LocationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Location model
   */
  readonly fields: LocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Location.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Location$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Location$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gameStates<T extends Location$gameStatesArgs<ExtArgs> = {}>(args?: Subset<T, Location$gameStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Location model
   */
  interface LocationFieldRefs {
    readonly id: FieldRef<"Location", 'String'>
    readonly worldId: FieldRef<"Location", 'String'>
    readonly name: FieldRef<"Location", 'String'>
    readonly description: FieldRef<"Location", 'String'>
    readonly isStartingLocation: FieldRef<"Location", 'Boolean'>
    readonly connectedLocationIds: FieldRef<"Location", 'String[]'>
    readonly thumbnailUrl: FieldRef<"Location", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Location findUnique
   */
  export type LocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findUniqueOrThrow
   */
  export type LocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location findFirst
   */
  export type LocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findFirstOrThrow
   */
  export type LocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Location to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Locations.
     */
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location findMany
   */
  export type LocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter, which Locations to fetch.
     */
    where?: LocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Locations to fetch.
     */
    orderBy?: LocationOrderByWithRelationInput | LocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Locations.
     */
    cursor?: LocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Locations.
     */
    skip?: number
    distinct?: LocationScalarFieldEnum | LocationScalarFieldEnum[]
  }

  /**
   * Location create
   */
  export type LocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to create a Location.
     */
    data: XOR<LocationCreateInput, LocationUncheckedCreateInput>
  }

  /**
   * Location createMany
   */
  export type LocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Location createManyAndReturn
   */
  export type LocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to create many Locations.
     */
    data: LocationCreateManyInput | LocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location update
   */
  export type LocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The data needed to update a Location.
     */
    data: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
    /**
     * Choose, which Location to update.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location updateMany
   */
  export type LocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
  }

  /**
   * Location updateManyAndReturn
   */
  export type LocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * The data used to update Locations.
     */
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyInput>
    /**
     * Filter which Locations to update
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Location upsert
   */
  export type LocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * The filter to search for the Location to update in case it exists.
     */
    where: LocationWhereUniqueInput
    /**
     * In case the Location found by the `where` argument doesn't exist, create a new Location with this data.
     */
    create: XOR<LocationCreateInput, LocationUncheckedCreateInput>
    /**
     * In case the Location was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocationUpdateInput, LocationUncheckedUpdateInput>
  }

  /**
   * Location delete
   */
  export type LocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    /**
     * Filter which Location to delete.
     */
    where: LocationWhereUniqueInput
  }

  /**
   * Location deleteMany
   */
  export type LocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Locations to delete
     */
    where?: LocationWhereInput
    /**
     * Limit how many Locations to delete.
     */
    limit?: number
  }

  /**
   * Location.events
   */
  export type Location$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Location.gameStates
   */
  export type Location$gameStatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Location without action
   */
  export type LocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
  }


  /**
   * Model LoreFragment
   */

  export type AggregateLoreFragment = {
    _count: LoreFragmentCountAggregateOutputType | null
    _min: LoreFragmentMinAggregateOutputType | null
    _max: LoreFragmentMaxAggregateOutputType | null
  }

  export type LoreFragmentMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    title: string | null
    content: string | null
    type: string | null
    contextId: string | null
    isRevealed: boolean | null
  }

  export type LoreFragmentMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    title: string | null
    content: string | null
    type: string | null
    contextId: string | null
    isRevealed: boolean | null
  }

  export type LoreFragmentCountAggregateOutputType = {
    id: number
    worldId: number
    title: number
    content: number
    type: number
    contextId: number
    isRevealed: number
    keywords: number
    _all: number
  }


  export type LoreFragmentMinAggregateInputType = {
    id?: true
    worldId?: true
    title?: true
    content?: true
    type?: true
    contextId?: true
    isRevealed?: true
  }

  export type LoreFragmentMaxAggregateInputType = {
    id?: true
    worldId?: true
    title?: true
    content?: true
    type?: true
    contextId?: true
    isRevealed?: true
  }

  export type LoreFragmentCountAggregateInputType = {
    id?: true
    worldId?: true
    title?: true
    content?: true
    type?: true
    contextId?: true
    isRevealed?: true
    keywords?: true
    _all?: true
  }

  export type LoreFragmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoreFragment to aggregate.
     */
    where?: LoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreFragments to fetch.
     */
    orderBy?: LoreFragmentOrderByWithRelationInput | LoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreFragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LoreFragments
    **/
    _count?: true | LoreFragmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LoreFragmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LoreFragmentMaxAggregateInputType
  }

  export type GetLoreFragmentAggregateType<T extends LoreFragmentAggregateArgs> = {
        [P in keyof T & keyof AggregateLoreFragment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLoreFragment[P]>
      : GetScalarType<T[P], AggregateLoreFragment[P]>
  }




  export type LoreFragmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LoreFragmentWhereInput
    orderBy?: LoreFragmentOrderByWithAggregationInput | LoreFragmentOrderByWithAggregationInput[]
    by: LoreFragmentScalarFieldEnum[] | LoreFragmentScalarFieldEnum
    having?: LoreFragmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LoreFragmentCountAggregateInputType | true
    _min?: LoreFragmentMinAggregateInputType
    _max?: LoreFragmentMaxAggregateInputType
  }

  export type LoreFragmentGroupByOutputType = {
    id: string
    worldId: string
    title: string
    content: string
    type: string
    contextId: string | null
    isRevealed: boolean
    keywords: string[]
    _count: LoreFragmentCountAggregateOutputType | null
    _min: LoreFragmentMinAggregateOutputType | null
    _max: LoreFragmentMaxAggregateOutputType | null
  }

  type GetLoreFragmentGroupByPayload<T extends LoreFragmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LoreFragmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LoreFragmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LoreFragmentGroupByOutputType[P]>
            : GetScalarType<T[P], LoreFragmentGroupByOutputType[P]>
        }
      >
    >


  export type LoreFragmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreFragment"]>

  export type LoreFragmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreFragment"]>

  export type LoreFragmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["loreFragment"]>

  export type LoreFragmentSelectScalar = {
    id?: boolean
    worldId?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    contextId?: boolean
    isRevealed?: boolean
    keywords?: boolean
  }

  export type LoreFragmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worldId" | "title" | "content" | "type" | "contextId" | "isRevealed" | "keywords", ExtArgs["result"]["loreFragment"]>
  export type LoreFragmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type LoreFragmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }
  export type LoreFragmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
  }

  export type $LoreFragmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LoreFragment"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      worldId: string
      title: string
      content: string
      type: string
      contextId: string | null
      isRevealed: boolean
      keywords: string[]
    }, ExtArgs["result"]["loreFragment"]>
    composites: {}
  }

  type LoreFragmentGetPayload<S extends boolean | null | undefined | LoreFragmentDefaultArgs> = $Result.GetResult<Prisma.$LoreFragmentPayload, S>

  type LoreFragmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LoreFragmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LoreFragmentCountAggregateInputType | true
    }

  export interface LoreFragmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LoreFragment'], meta: { name: 'LoreFragment' } }
    /**
     * Find zero or one LoreFragment that matches the filter.
     * @param {LoreFragmentFindUniqueArgs} args - Arguments to find a LoreFragment
     * @example
     * // Get one LoreFragment
     * const loreFragment = await prisma.loreFragment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LoreFragmentFindUniqueArgs>(args: SelectSubset<T, LoreFragmentFindUniqueArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LoreFragment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LoreFragmentFindUniqueOrThrowArgs} args - Arguments to find a LoreFragment
     * @example
     * // Get one LoreFragment
     * const loreFragment = await prisma.loreFragment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LoreFragmentFindUniqueOrThrowArgs>(args: SelectSubset<T, LoreFragmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoreFragment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentFindFirstArgs} args - Arguments to find a LoreFragment
     * @example
     * // Get one LoreFragment
     * const loreFragment = await prisma.loreFragment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LoreFragmentFindFirstArgs>(args?: SelectSubset<T, LoreFragmentFindFirstArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LoreFragment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentFindFirstOrThrowArgs} args - Arguments to find a LoreFragment
     * @example
     * // Get one LoreFragment
     * const loreFragment = await prisma.loreFragment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LoreFragmentFindFirstOrThrowArgs>(args?: SelectSubset<T, LoreFragmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LoreFragments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LoreFragments
     * const loreFragments = await prisma.loreFragment.findMany()
     * 
     * // Get first 10 LoreFragments
     * const loreFragments = await prisma.loreFragment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const loreFragmentWithIdOnly = await prisma.loreFragment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LoreFragmentFindManyArgs>(args?: SelectSubset<T, LoreFragmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LoreFragment.
     * @param {LoreFragmentCreateArgs} args - Arguments to create a LoreFragment.
     * @example
     * // Create one LoreFragment
     * const LoreFragment = await prisma.loreFragment.create({
     *   data: {
     *     // ... data to create a LoreFragment
     *   }
     * })
     * 
     */
    create<T extends LoreFragmentCreateArgs>(args: SelectSubset<T, LoreFragmentCreateArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LoreFragments.
     * @param {LoreFragmentCreateManyArgs} args - Arguments to create many LoreFragments.
     * @example
     * // Create many LoreFragments
     * const loreFragment = await prisma.loreFragment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LoreFragmentCreateManyArgs>(args?: SelectSubset<T, LoreFragmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LoreFragments and returns the data saved in the database.
     * @param {LoreFragmentCreateManyAndReturnArgs} args - Arguments to create many LoreFragments.
     * @example
     * // Create many LoreFragments
     * const loreFragment = await prisma.loreFragment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LoreFragments and only return the `id`
     * const loreFragmentWithIdOnly = await prisma.loreFragment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LoreFragmentCreateManyAndReturnArgs>(args?: SelectSubset<T, LoreFragmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LoreFragment.
     * @param {LoreFragmentDeleteArgs} args - Arguments to delete one LoreFragment.
     * @example
     * // Delete one LoreFragment
     * const LoreFragment = await prisma.loreFragment.delete({
     *   where: {
     *     // ... filter to delete one LoreFragment
     *   }
     * })
     * 
     */
    delete<T extends LoreFragmentDeleteArgs>(args: SelectSubset<T, LoreFragmentDeleteArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LoreFragment.
     * @param {LoreFragmentUpdateArgs} args - Arguments to update one LoreFragment.
     * @example
     * // Update one LoreFragment
     * const loreFragment = await prisma.loreFragment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LoreFragmentUpdateArgs>(args: SelectSubset<T, LoreFragmentUpdateArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LoreFragments.
     * @param {LoreFragmentDeleteManyArgs} args - Arguments to filter LoreFragments to delete.
     * @example
     * // Delete a few LoreFragments
     * const { count } = await prisma.loreFragment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LoreFragmentDeleteManyArgs>(args?: SelectSubset<T, LoreFragmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoreFragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LoreFragments
     * const loreFragment = await prisma.loreFragment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LoreFragmentUpdateManyArgs>(args: SelectSubset<T, LoreFragmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LoreFragments and returns the data updated in the database.
     * @param {LoreFragmentUpdateManyAndReturnArgs} args - Arguments to update many LoreFragments.
     * @example
     * // Update many LoreFragments
     * const loreFragment = await prisma.loreFragment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LoreFragments and only return the `id`
     * const loreFragmentWithIdOnly = await prisma.loreFragment.updateManyAndReturn({
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
    updateManyAndReturn<T extends LoreFragmentUpdateManyAndReturnArgs>(args: SelectSubset<T, LoreFragmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LoreFragment.
     * @param {LoreFragmentUpsertArgs} args - Arguments to update or create a LoreFragment.
     * @example
     * // Update or create a LoreFragment
     * const loreFragment = await prisma.loreFragment.upsert({
     *   create: {
     *     // ... data to create a LoreFragment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LoreFragment we want to update
     *   }
     * })
     */
    upsert<T extends LoreFragmentUpsertArgs>(args: SelectSubset<T, LoreFragmentUpsertArgs<ExtArgs>>): Prisma__LoreFragmentClient<$Result.GetResult<Prisma.$LoreFragmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LoreFragments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentCountArgs} args - Arguments to filter LoreFragments to count.
     * @example
     * // Count the number of LoreFragments
     * const count = await prisma.loreFragment.count({
     *   where: {
     *     // ... the filter for the LoreFragments we want to count
     *   }
     * })
    **/
    count<T extends LoreFragmentCountArgs>(
      args?: Subset<T, LoreFragmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LoreFragmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LoreFragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LoreFragmentAggregateArgs>(args: Subset<T, LoreFragmentAggregateArgs>): Prisma.PrismaPromise<GetLoreFragmentAggregateType<T>>

    /**
     * Group by LoreFragment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LoreFragmentGroupByArgs} args - Group by arguments.
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
      T extends LoreFragmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LoreFragmentGroupByArgs['orderBy'] }
        : { orderBy?: LoreFragmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LoreFragmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLoreFragmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LoreFragment model
   */
  readonly fields: LoreFragmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LoreFragment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LoreFragmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LoreFragment model
   */
  interface LoreFragmentFieldRefs {
    readonly id: FieldRef<"LoreFragment", 'String'>
    readonly worldId: FieldRef<"LoreFragment", 'String'>
    readonly title: FieldRef<"LoreFragment", 'String'>
    readonly content: FieldRef<"LoreFragment", 'String'>
    readonly type: FieldRef<"LoreFragment", 'String'>
    readonly contextId: FieldRef<"LoreFragment", 'String'>
    readonly isRevealed: FieldRef<"LoreFragment", 'Boolean'>
    readonly keywords: FieldRef<"LoreFragment", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * LoreFragment findUnique
   */
  export type LoreFragmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which LoreFragment to fetch.
     */
    where: LoreFragmentWhereUniqueInput
  }

  /**
   * LoreFragment findUniqueOrThrow
   */
  export type LoreFragmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which LoreFragment to fetch.
     */
    where: LoreFragmentWhereUniqueInput
  }

  /**
   * LoreFragment findFirst
   */
  export type LoreFragmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which LoreFragment to fetch.
     */
    where?: LoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreFragments to fetch.
     */
    orderBy?: LoreFragmentOrderByWithRelationInput | LoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoreFragments.
     */
    cursor?: LoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreFragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreFragments.
     */
    distinct?: LoreFragmentScalarFieldEnum | LoreFragmentScalarFieldEnum[]
  }

  /**
   * LoreFragment findFirstOrThrow
   */
  export type LoreFragmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which LoreFragment to fetch.
     */
    where?: LoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreFragments to fetch.
     */
    orderBy?: LoreFragmentOrderByWithRelationInput | LoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LoreFragments.
     */
    cursor?: LoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreFragments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LoreFragments.
     */
    distinct?: LoreFragmentScalarFieldEnum | LoreFragmentScalarFieldEnum[]
  }

  /**
   * LoreFragment findMany
   */
  export type LoreFragmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * Filter, which LoreFragments to fetch.
     */
    where?: LoreFragmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LoreFragments to fetch.
     */
    orderBy?: LoreFragmentOrderByWithRelationInput | LoreFragmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LoreFragments.
     */
    cursor?: LoreFragmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LoreFragments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LoreFragments.
     */
    skip?: number
    distinct?: LoreFragmentScalarFieldEnum | LoreFragmentScalarFieldEnum[]
  }

  /**
   * LoreFragment create
   */
  export type LoreFragmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * The data needed to create a LoreFragment.
     */
    data: XOR<LoreFragmentCreateInput, LoreFragmentUncheckedCreateInput>
  }

  /**
   * LoreFragment createMany
   */
  export type LoreFragmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LoreFragments.
     */
    data: LoreFragmentCreateManyInput | LoreFragmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LoreFragment createManyAndReturn
   */
  export type LoreFragmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * The data used to create many LoreFragments.
     */
    data: LoreFragmentCreateManyInput | LoreFragmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoreFragment update
   */
  export type LoreFragmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * The data needed to update a LoreFragment.
     */
    data: XOR<LoreFragmentUpdateInput, LoreFragmentUncheckedUpdateInput>
    /**
     * Choose, which LoreFragment to update.
     */
    where: LoreFragmentWhereUniqueInput
  }

  /**
   * LoreFragment updateMany
   */
  export type LoreFragmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LoreFragments.
     */
    data: XOR<LoreFragmentUpdateManyMutationInput, LoreFragmentUncheckedUpdateManyInput>
    /**
     * Filter which LoreFragments to update
     */
    where?: LoreFragmentWhereInput
    /**
     * Limit how many LoreFragments to update.
     */
    limit?: number
  }

  /**
   * LoreFragment updateManyAndReturn
   */
  export type LoreFragmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * The data used to update LoreFragments.
     */
    data: XOR<LoreFragmentUpdateManyMutationInput, LoreFragmentUncheckedUpdateManyInput>
    /**
     * Filter which LoreFragments to update
     */
    where?: LoreFragmentWhereInput
    /**
     * Limit how many LoreFragments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LoreFragment upsert
   */
  export type LoreFragmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * The filter to search for the LoreFragment to update in case it exists.
     */
    where: LoreFragmentWhereUniqueInput
    /**
     * In case the LoreFragment found by the `where` argument doesn't exist, create a new LoreFragment with this data.
     */
    create: XOR<LoreFragmentCreateInput, LoreFragmentUncheckedCreateInput>
    /**
     * In case the LoreFragment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LoreFragmentUpdateInput, LoreFragmentUncheckedUpdateInput>
  }

  /**
   * LoreFragment delete
   */
  export type LoreFragmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
    /**
     * Filter which LoreFragment to delete.
     */
    where: LoreFragmentWhereUniqueInput
  }

  /**
   * LoreFragment deleteMany
   */
  export type LoreFragmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LoreFragments to delete
     */
    where?: LoreFragmentWhereInput
    /**
     * Limit how many LoreFragments to delete.
     */
    limit?: number
  }

  /**
   * LoreFragment without action
   */
  export type LoreFragmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LoreFragment
     */
    select?: LoreFragmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LoreFragment
     */
    omit?: LoreFragmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LoreFragmentInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    worldId: string | null
    locationId: string | null
    title: string | null
    description: string | null
    eventType: string | null
    isRepeatable: boolean | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    worldId: string | null
    locationId: string | null
    title: string | null
    description: string | null
    eventType: string | null
    isRepeatable: boolean | null
  }

  export type EventCountAggregateOutputType = {
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


  export type EventMinAggregateInputType = {
    id?: true
    worldId?: true
    locationId?: true
    title?: true
    description?: true
    eventType?: true
    isRepeatable?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    worldId?: true
    locationId?: true
    title?: true
    description?: true
    eventType?: true
    isRepeatable?: true
  }

  export type EventCountAggregateInputType = {
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

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    worldId: string
    locationId: string | null
    title: string
    description: string
    eventType: string
    triggerConditions: JsonValue
    outcomes: JsonValue
    isRepeatable: boolean
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    location?: boolean | Event$locationArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    location?: boolean | Event$locationArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    worldId?: boolean
    locationId?: boolean
    title?: boolean
    description?: boolean
    eventType?: boolean
    triggerConditions?: boolean
    outcomes?: boolean
    isRepeatable?: boolean
    world?: boolean | WorldDefaultArgs<ExtArgs>
    location?: boolean | Event$locationArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
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

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "worldId" | "locationId" | "title" | "description" | "eventType" | "triggerConditions" | "outcomes" | "isRepeatable", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    location?: boolean | Event$locationArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    location?: boolean | Event$locationArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    world?: boolean | WorldDefaultArgs<ExtArgs>
    location?: boolean | Event$locationArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      world: Prisma.$WorldPayload<ExtArgs>
      location: Prisma.$LocationPayload<ExtArgs> | null
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
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    world<T extends WorldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorldDefaultArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    location<T extends Event$locationArgs<ExtArgs> = {}>(args?: Subset<T, Event$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly worldId: FieldRef<"Event", 'String'>
    readonly locationId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly eventType: FieldRef<"Event", 'String'>
    readonly triggerConditions: FieldRef<"Event", 'Json'>
    readonly outcomes: FieldRef<"Event", 'Json'>
    readonly isRepeatable: FieldRef<"Event", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.location
   */
  export type Event$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
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
    worldId: string | null
    locationId: string | null
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
    worldId: string | null
    locationId: string | null
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
    worldId: number
    locationId: number
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
    worldId?: true
    locationId?: true
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
    worldId?: true
    locationId?: true
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
    worldId?: true
    locationId?: true
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
    worldId: string | null
    locationId: string | null
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
    worldId?: boolean
    locationId?: boolean
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
    world?: boolean | GameState$worldArgs<ExtArgs>
    location?: boolean | GameState$locationArgs<ExtArgs>
    npcStates?: boolean | GameState$npcStatesArgs<ExtArgs>
    decisions?: boolean | GameState$decisionsArgs<ExtArgs>
    aiContextHistory?: boolean | GameState$aiContextHistoryArgs<ExtArgs>
    narrativeHistory?: boolean | GameState$narrativeHistoryArgs<ExtArgs>
    _count?: boolean | GameStateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    locationId?: boolean
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
    world?: boolean | GameState$worldArgs<ExtArgs>
    location?: boolean | GameState$locationArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    locationId?: boolean
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
    world?: boolean | GameState$worldArgs<ExtArgs>
    location?: boolean | GameState$locationArgs<ExtArgs>
  }, ExtArgs["result"]["gameState"]>

  export type GameStateSelectScalar = {
    id?: boolean
    sessionId?: boolean
    characterId?: boolean
    worldId?: boolean
    locationId?: boolean
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

  export type GameStateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "characterId" | "worldId" | "locationId" | "savePointName" | "currentLocation" | "saveTimestamp" | "narrativeContext" | "aiContext" | "characterState" | "worldState" | "isAutosave" | "isCompleted", ExtArgs["result"]["gameState"]>
  export type GameStateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | GameState$worldArgs<ExtArgs>
    location?: boolean | GameState$locationArgs<ExtArgs>
    npcStates?: boolean | GameState$npcStatesArgs<ExtArgs>
    decisions?: boolean | GameState$decisionsArgs<ExtArgs>
    aiContextHistory?: boolean | GameState$aiContextHistoryArgs<ExtArgs>
    narrativeHistory?: boolean | GameState$narrativeHistoryArgs<ExtArgs>
    _count?: boolean | GameStateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameStateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | GameState$worldArgs<ExtArgs>
    location?: boolean | GameState$locationArgs<ExtArgs>
  }
  export type GameStateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | GameSessionDefaultArgs<ExtArgs>
    character?: boolean | CharacterDefaultArgs<ExtArgs>
    world?: boolean | GameState$worldArgs<ExtArgs>
    location?: boolean | GameState$locationArgs<ExtArgs>
  }

  export type $GameStatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameState"
    objects: {
      session: Prisma.$GameSessionPayload<ExtArgs>
      character: Prisma.$CharacterPayload<ExtArgs>
      world: Prisma.$WorldPayload<ExtArgs> | null
      location: Prisma.$LocationPayload<ExtArgs> | null
      npcStates: Prisma.$NPCStatePayload<ExtArgs>[]
      decisions: Prisma.$DecisionPayload<ExtArgs>[]
      aiContextHistory: Prisma.$AIContextHistoryPayload<ExtArgs>[]
      narrativeHistory: Prisma.$NarrativeHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      characterId: string
      worldId: string | null
      locationId: string | null
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
    world<T extends GameState$worldArgs<ExtArgs> = {}>(args?: Subset<T, GameState$worldArgs<ExtArgs>>): Prisma__WorldClient<$Result.GetResult<Prisma.$WorldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    location<T extends GameState$locationArgs<ExtArgs> = {}>(args?: Subset<T, GameState$locationArgs<ExtArgs>>): Prisma__LocationClient<$Result.GetResult<Prisma.$LocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    npcStates<T extends GameState$npcStatesArgs<ExtArgs> = {}>(args?: Subset<T, GameState$npcStatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCStatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    decisions<T extends GameState$decisionsArgs<ExtArgs> = {}>(args?: Subset<T, GameState$decisionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DecisionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiContextHistory<T extends GameState$aiContextHistoryArgs<ExtArgs> = {}>(args?: Subset<T, GameState$aiContextHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIContextHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    narrativeHistory<T extends GameState$narrativeHistoryArgs<ExtArgs> = {}>(args?: Subset<T, GameState$narrativeHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly worldId: FieldRef<"GameState", 'String'>
    readonly locationId: FieldRef<"GameState", 'String'>
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
   * GameState.world
   */
  export type GameState$worldArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the World
     */
    select?: WorldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the World
     */
    omit?: WorldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorldInclude<ExtArgs> | null
    where?: WorldWhereInput
  }

  /**
   * GameState.location
   */
  export type GameState$locationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Location
     */
    select?: LocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Location
     */
    omit?: LocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocationInclude<ExtArgs> | null
    where?: LocationWhereInput
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
   * GameState.narrativeHistory
   */
  export type GameState$narrativeHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    where?: NarrativeHistoryWhereInput
    orderBy?: NarrativeHistoryOrderByWithRelationInput | NarrativeHistoryOrderByWithRelationInput[]
    cursor?: NarrativeHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NarrativeHistoryScalarFieldEnum | NarrativeHistoryScalarFieldEnum[]
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
   * Model NarrativeHistory
   */

  export type AggregateNarrativeHistory = {
    _count: NarrativeHistoryCountAggregateOutputType | null
    _min: NarrativeHistoryMinAggregateOutputType | null
    _max: NarrativeHistoryMaxAggregateOutputType | null
  }

  export type NarrativeHistoryMinAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    type: string | null
    content: string | null
    timestamp: Date | null
  }

  export type NarrativeHistoryMaxAggregateOutputType = {
    id: string | null
    gameStateId: string | null
    type: string | null
    content: string | null
    timestamp: Date | null
  }

  export type NarrativeHistoryCountAggregateOutputType = {
    id: number
    gameStateId: number
    type: number
    content: number
    timestamp: number
    _all: number
  }


  export type NarrativeHistoryMinAggregateInputType = {
    id?: true
    gameStateId?: true
    type?: true
    content?: true
    timestamp?: true
  }

  export type NarrativeHistoryMaxAggregateInputType = {
    id?: true
    gameStateId?: true
    type?: true
    content?: true
    timestamp?: true
  }

  export type NarrativeHistoryCountAggregateInputType = {
    id?: true
    gameStateId?: true
    type?: true
    content?: true
    timestamp?: true
    _all?: true
  }

  export type NarrativeHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NarrativeHistory to aggregate.
     */
    where?: NarrativeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeHistories to fetch.
     */
    orderBy?: NarrativeHistoryOrderByWithRelationInput | NarrativeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NarrativeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NarrativeHistories
    **/
    _count?: true | NarrativeHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NarrativeHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NarrativeHistoryMaxAggregateInputType
  }

  export type GetNarrativeHistoryAggregateType<T extends NarrativeHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateNarrativeHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNarrativeHistory[P]>
      : GetScalarType<T[P], AggregateNarrativeHistory[P]>
  }




  export type NarrativeHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NarrativeHistoryWhereInput
    orderBy?: NarrativeHistoryOrderByWithAggregationInput | NarrativeHistoryOrderByWithAggregationInput[]
    by: NarrativeHistoryScalarFieldEnum[] | NarrativeHistoryScalarFieldEnum
    having?: NarrativeHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NarrativeHistoryCountAggregateInputType | true
    _min?: NarrativeHistoryMinAggregateInputType
    _max?: NarrativeHistoryMaxAggregateInputType
  }

  export type NarrativeHistoryGroupByOutputType = {
    id: string
    gameStateId: string
    type: string
    content: string
    timestamp: Date
    _count: NarrativeHistoryCountAggregateOutputType | null
    _min: NarrativeHistoryMinAggregateOutputType | null
    _max: NarrativeHistoryMaxAggregateOutputType | null
  }

  type GetNarrativeHistoryGroupByPayload<T extends NarrativeHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NarrativeHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NarrativeHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NarrativeHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], NarrativeHistoryGroupByOutputType[P]>
        }
      >
    >


  export type NarrativeHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narrativeHistory"]>

  export type NarrativeHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narrativeHistory"]>

  export type NarrativeHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameStateId?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["narrativeHistory"]>

  export type NarrativeHistorySelectScalar = {
    id?: boolean
    gameStateId?: boolean
    type?: boolean
    content?: boolean
    timestamp?: boolean
  }

  export type NarrativeHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameStateId" | "type" | "content" | "timestamp", ExtArgs["result"]["narrativeHistory"]>
  export type NarrativeHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }
  export type NarrativeHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }
  export type NarrativeHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gameState?: boolean | GameStateDefaultArgs<ExtArgs>
  }

  export type $NarrativeHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NarrativeHistory"
    objects: {
      gameState: Prisma.$GameStatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gameStateId: string
      type: string
      content: string
      timestamp: Date
    }, ExtArgs["result"]["narrativeHistory"]>
    composites: {}
  }

  type NarrativeHistoryGetPayload<S extends boolean | null | undefined | NarrativeHistoryDefaultArgs> = $Result.GetResult<Prisma.$NarrativeHistoryPayload, S>

  type NarrativeHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NarrativeHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NarrativeHistoryCountAggregateInputType | true
    }

  export interface NarrativeHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NarrativeHistory'], meta: { name: 'NarrativeHistory' } }
    /**
     * Find zero or one NarrativeHistory that matches the filter.
     * @param {NarrativeHistoryFindUniqueArgs} args - Arguments to find a NarrativeHistory
     * @example
     * // Get one NarrativeHistory
     * const narrativeHistory = await prisma.narrativeHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NarrativeHistoryFindUniqueArgs>(args: SelectSubset<T, NarrativeHistoryFindUniqueArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NarrativeHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NarrativeHistoryFindUniqueOrThrowArgs} args - Arguments to find a NarrativeHistory
     * @example
     * // Get one NarrativeHistory
     * const narrativeHistory = await prisma.narrativeHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NarrativeHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, NarrativeHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NarrativeHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryFindFirstArgs} args - Arguments to find a NarrativeHistory
     * @example
     * // Get one NarrativeHistory
     * const narrativeHistory = await prisma.narrativeHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NarrativeHistoryFindFirstArgs>(args?: SelectSubset<T, NarrativeHistoryFindFirstArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NarrativeHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryFindFirstOrThrowArgs} args - Arguments to find a NarrativeHistory
     * @example
     * // Get one NarrativeHistory
     * const narrativeHistory = await prisma.narrativeHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NarrativeHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, NarrativeHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NarrativeHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NarrativeHistories
     * const narrativeHistories = await prisma.narrativeHistory.findMany()
     * 
     * // Get first 10 NarrativeHistories
     * const narrativeHistories = await prisma.narrativeHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const narrativeHistoryWithIdOnly = await prisma.narrativeHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NarrativeHistoryFindManyArgs>(args?: SelectSubset<T, NarrativeHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NarrativeHistory.
     * @param {NarrativeHistoryCreateArgs} args - Arguments to create a NarrativeHistory.
     * @example
     * // Create one NarrativeHistory
     * const NarrativeHistory = await prisma.narrativeHistory.create({
     *   data: {
     *     // ... data to create a NarrativeHistory
     *   }
     * })
     * 
     */
    create<T extends NarrativeHistoryCreateArgs>(args: SelectSubset<T, NarrativeHistoryCreateArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NarrativeHistories.
     * @param {NarrativeHistoryCreateManyArgs} args - Arguments to create many NarrativeHistories.
     * @example
     * // Create many NarrativeHistories
     * const narrativeHistory = await prisma.narrativeHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NarrativeHistoryCreateManyArgs>(args?: SelectSubset<T, NarrativeHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NarrativeHistories and returns the data saved in the database.
     * @param {NarrativeHistoryCreateManyAndReturnArgs} args - Arguments to create many NarrativeHistories.
     * @example
     * // Create many NarrativeHistories
     * const narrativeHistory = await prisma.narrativeHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NarrativeHistories and only return the `id`
     * const narrativeHistoryWithIdOnly = await prisma.narrativeHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NarrativeHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, NarrativeHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NarrativeHistory.
     * @param {NarrativeHistoryDeleteArgs} args - Arguments to delete one NarrativeHistory.
     * @example
     * // Delete one NarrativeHistory
     * const NarrativeHistory = await prisma.narrativeHistory.delete({
     *   where: {
     *     // ... filter to delete one NarrativeHistory
     *   }
     * })
     * 
     */
    delete<T extends NarrativeHistoryDeleteArgs>(args: SelectSubset<T, NarrativeHistoryDeleteArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NarrativeHistory.
     * @param {NarrativeHistoryUpdateArgs} args - Arguments to update one NarrativeHistory.
     * @example
     * // Update one NarrativeHistory
     * const narrativeHistory = await prisma.narrativeHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NarrativeHistoryUpdateArgs>(args: SelectSubset<T, NarrativeHistoryUpdateArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NarrativeHistories.
     * @param {NarrativeHistoryDeleteManyArgs} args - Arguments to filter NarrativeHistories to delete.
     * @example
     * // Delete a few NarrativeHistories
     * const { count } = await prisma.narrativeHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NarrativeHistoryDeleteManyArgs>(args?: SelectSubset<T, NarrativeHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NarrativeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NarrativeHistories
     * const narrativeHistory = await prisma.narrativeHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NarrativeHistoryUpdateManyArgs>(args: SelectSubset<T, NarrativeHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NarrativeHistories and returns the data updated in the database.
     * @param {NarrativeHistoryUpdateManyAndReturnArgs} args - Arguments to update many NarrativeHistories.
     * @example
     * // Update many NarrativeHistories
     * const narrativeHistory = await prisma.narrativeHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NarrativeHistories and only return the `id`
     * const narrativeHistoryWithIdOnly = await prisma.narrativeHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends NarrativeHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, NarrativeHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NarrativeHistory.
     * @param {NarrativeHistoryUpsertArgs} args - Arguments to update or create a NarrativeHistory.
     * @example
     * // Update or create a NarrativeHistory
     * const narrativeHistory = await prisma.narrativeHistory.upsert({
     *   create: {
     *     // ... data to create a NarrativeHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NarrativeHistory we want to update
     *   }
     * })
     */
    upsert<T extends NarrativeHistoryUpsertArgs>(args: SelectSubset<T, NarrativeHistoryUpsertArgs<ExtArgs>>): Prisma__NarrativeHistoryClient<$Result.GetResult<Prisma.$NarrativeHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NarrativeHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryCountArgs} args - Arguments to filter NarrativeHistories to count.
     * @example
     * // Count the number of NarrativeHistories
     * const count = await prisma.narrativeHistory.count({
     *   where: {
     *     // ... the filter for the NarrativeHistories we want to count
     *   }
     * })
    **/
    count<T extends NarrativeHistoryCountArgs>(
      args?: Subset<T, NarrativeHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NarrativeHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NarrativeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NarrativeHistoryAggregateArgs>(args: Subset<T, NarrativeHistoryAggregateArgs>): Prisma.PrismaPromise<GetNarrativeHistoryAggregateType<T>>

    /**
     * Group by NarrativeHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NarrativeHistoryGroupByArgs} args - Group by arguments.
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
      T extends NarrativeHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NarrativeHistoryGroupByArgs['orderBy'] }
        : { orderBy?: NarrativeHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NarrativeHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNarrativeHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NarrativeHistory model
   */
  readonly fields: NarrativeHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NarrativeHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NarrativeHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the NarrativeHistory model
   */
  interface NarrativeHistoryFieldRefs {
    readonly id: FieldRef<"NarrativeHistory", 'String'>
    readonly gameStateId: FieldRef<"NarrativeHistory", 'String'>
    readonly type: FieldRef<"NarrativeHistory", 'String'>
    readonly content: FieldRef<"NarrativeHistory", 'String'>
    readonly timestamp: FieldRef<"NarrativeHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NarrativeHistory findUnique
   */
  export type NarrativeHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeHistory to fetch.
     */
    where: NarrativeHistoryWhereUniqueInput
  }

  /**
   * NarrativeHistory findUniqueOrThrow
   */
  export type NarrativeHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeHistory to fetch.
     */
    where: NarrativeHistoryWhereUniqueInput
  }

  /**
   * NarrativeHistory findFirst
   */
  export type NarrativeHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeHistory to fetch.
     */
    where?: NarrativeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeHistories to fetch.
     */
    orderBy?: NarrativeHistoryOrderByWithRelationInput | NarrativeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NarrativeHistories.
     */
    cursor?: NarrativeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NarrativeHistories.
     */
    distinct?: NarrativeHistoryScalarFieldEnum | NarrativeHistoryScalarFieldEnum[]
  }

  /**
   * NarrativeHistory findFirstOrThrow
   */
  export type NarrativeHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeHistory to fetch.
     */
    where?: NarrativeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeHistories to fetch.
     */
    orderBy?: NarrativeHistoryOrderByWithRelationInput | NarrativeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NarrativeHistories.
     */
    cursor?: NarrativeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NarrativeHistories.
     */
    distinct?: NarrativeHistoryScalarFieldEnum | NarrativeHistoryScalarFieldEnum[]
  }

  /**
   * NarrativeHistory findMany
   */
  export type NarrativeHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * Filter, which NarrativeHistories to fetch.
     */
    where?: NarrativeHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NarrativeHistories to fetch.
     */
    orderBy?: NarrativeHistoryOrderByWithRelationInput | NarrativeHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NarrativeHistories.
     */
    cursor?: NarrativeHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NarrativeHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NarrativeHistories.
     */
    skip?: number
    distinct?: NarrativeHistoryScalarFieldEnum | NarrativeHistoryScalarFieldEnum[]
  }

  /**
   * NarrativeHistory create
   */
  export type NarrativeHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a NarrativeHistory.
     */
    data: XOR<NarrativeHistoryCreateInput, NarrativeHistoryUncheckedCreateInput>
  }

  /**
   * NarrativeHistory createMany
   */
  export type NarrativeHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NarrativeHistories.
     */
    data: NarrativeHistoryCreateManyInput | NarrativeHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NarrativeHistory createManyAndReturn
   */
  export type NarrativeHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many NarrativeHistories.
     */
    data: NarrativeHistoryCreateManyInput | NarrativeHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NarrativeHistory update
   */
  export type NarrativeHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a NarrativeHistory.
     */
    data: XOR<NarrativeHistoryUpdateInput, NarrativeHistoryUncheckedUpdateInput>
    /**
     * Choose, which NarrativeHistory to update.
     */
    where: NarrativeHistoryWhereUniqueInput
  }

  /**
   * NarrativeHistory updateMany
   */
  export type NarrativeHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NarrativeHistories.
     */
    data: XOR<NarrativeHistoryUpdateManyMutationInput, NarrativeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NarrativeHistories to update
     */
    where?: NarrativeHistoryWhereInput
    /**
     * Limit how many NarrativeHistories to update.
     */
    limit?: number
  }

  /**
   * NarrativeHistory updateManyAndReturn
   */
  export type NarrativeHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * The data used to update NarrativeHistories.
     */
    data: XOR<NarrativeHistoryUpdateManyMutationInput, NarrativeHistoryUncheckedUpdateManyInput>
    /**
     * Filter which NarrativeHistories to update
     */
    where?: NarrativeHistoryWhereInput
    /**
     * Limit how many NarrativeHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NarrativeHistory upsert
   */
  export type NarrativeHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the NarrativeHistory to update in case it exists.
     */
    where: NarrativeHistoryWhereUniqueInput
    /**
     * In case the NarrativeHistory found by the `where` argument doesn't exist, create a new NarrativeHistory with this data.
     */
    create: XOR<NarrativeHistoryCreateInput, NarrativeHistoryUncheckedCreateInput>
    /**
     * In case the NarrativeHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NarrativeHistoryUpdateInput, NarrativeHistoryUncheckedUpdateInput>
  }

  /**
   * NarrativeHistory delete
   */
  export type NarrativeHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
    /**
     * Filter which NarrativeHistory to delete.
     */
    where: NarrativeHistoryWhereUniqueInput
  }

  /**
   * NarrativeHistory deleteMany
   */
  export type NarrativeHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NarrativeHistories to delete
     */
    where?: NarrativeHistoryWhereInput
    /**
     * Limit how many NarrativeHistories to delete.
     */
    limit?: number
  }

  /**
   * NarrativeHistory without action
   */
  export type NarrativeHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NarrativeHistory
     */
    select?: NarrativeHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the NarrativeHistory
     */
    omit?: NarrativeHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NarrativeHistoryInclude<ExtArgs> | null
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


  export const WorldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    thumbnailUrl: 'thumbnailUrl',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type WorldScalarFieldEnum = (typeof WorldScalarFieldEnum)[keyof typeof WorldScalarFieldEnum]


  export const CharacterWorldStateScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    worldId: 'worldId',
    currentLocation: 'currentLocation',
    lastPlayedAt: 'lastPlayedAt'
  };

  export type CharacterWorldStateScalarFieldEnum = (typeof CharacterWorldStateScalarFieldEnum)[keyof typeof CharacterWorldStateScalarFieldEnum]


  export const LocationScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    name: 'name',
    description: 'description',
    isStartingLocation: 'isStartingLocation',
    connectedLocationIds: 'connectedLocationIds',
    thumbnailUrl: 'thumbnailUrl'
  };

  export type LocationScalarFieldEnum = (typeof LocationScalarFieldEnum)[keyof typeof LocationScalarFieldEnum]


  export const LoreFragmentScalarFieldEnum: {
    id: 'id',
    worldId: 'worldId',
    title: 'title',
    content: 'content',
    type: 'type',
    contextId: 'contextId',
    isRevealed: 'isRevealed',
    keywords: 'keywords'
  };

  export type LoreFragmentScalarFieldEnum = (typeof LoreFragmentScalarFieldEnum)[keyof typeof LoreFragmentScalarFieldEnum]


  export const EventScalarFieldEnum: {
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

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


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
    worldId: 'worldId',
    locationId: 'locationId',
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


  export const NarrativeHistoryScalarFieldEnum: {
    id: 'id',
    gameStateId: 'gameStateId',
    type: 'type',
    content: 'content',
    timestamp: 'timestamp'
  };

  export type NarrativeHistoryScalarFieldEnum = (typeof NarrativeHistoryScalarFieldEnum)[keyof typeof NarrativeHistoryScalarFieldEnum]


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
    characterWorldStates?: CharacterWorldStateListRelationFilter
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
    characterWorldStates?: CharacterWorldStateOrderByRelationAggregateInput
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
    characterWorldStates?: CharacterWorldStateListRelationFilter
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

  export type WorldWhereInput = {
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    id?: StringFilter<"World"> | string
    name?: StringFilter<"World"> | string
    description?: StringNullableFilter<"World"> | string | null
    thumbnailUrl?: StringNullableFilter<"World"> | string | null
    isActive?: BoolFilter<"World"> | boolean
    createdAt?: DateTimeFilter<"World"> | Date | string
    characterStates?: CharacterWorldStateListRelationFilter
    gameStates?: GameStateListRelationFilter
    locations?: LocationListRelationFilter
    loreFragments?: LoreFragmentListRelationFilter
    events?: EventListRelationFilter
  }

  export type WorldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    characterStates?: CharacterWorldStateOrderByRelationAggregateInput
    gameStates?: GameStateOrderByRelationAggregateInput
    locations?: LocationOrderByRelationAggregateInput
    loreFragments?: LoreFragmentOrderByRelationAggregateInput
    events?: EventOrderByRelationAggregateInput
  }

  export type WorldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorldWhereInput | WorldWhereInput[]
    OR?: WorldWhereInput[]
    NOT?: WorldWhereInput | WorldWhereInput[]
    name?: StringFilter<"World"> | string
    description?: StringNullableFilter<"World"> | string | null
    thumbnailUrl?: StringNullableFilter<"World"> | string | null
    isActive?: BoolFilter<"World"> | boolean
    createdAt?: DateTimeFilter<"World"> | Date | string
    characterStates?: CharacterWorldStateListRelationFilter
    gameStates?: GameStateListRelationFilter
    locations?: LocationListRelationFilter
    loreFragments?: LoreFragmentListRelationFilter
    events?: EventListRelationFilter
  }, "id">

  export type WorldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: WorldCountOrderByAggregateInput
    _max?: WorldMaxOrderByAggregateInput
    _min?: WorldMinOrderByAggregateInput
  }

  export type WorldScalarWhereWithAggregatesInput = {
    AND?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    OR?: WorldScalarWhereWithAggregatesInput[]
    NOT?: WorldScalarWhereWithAggregatesInput | WorldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"World"> | string
    name?: StringWithAggregatesFilter<"World"> | string
    description?: StringNullableWithAggregatesFilter<"World"> | string | null
    thumbnailUrl?: StringNullableWithAggregatesFilter<"World"> | string | null
    isActive?: BoolWithAggregatesFilter<"World"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"World"> | Date | string
  }

  export type CharacterWorldStateWhereInput = {
    AND?: CharacterWorldStateWhereInput | CharacterWorldStateWhereInput[]
    OR?: CharacterWorldStateWhereInput[]
    NOT?: CharacterWorldStateWhereInput | CharacterWorldStateWhereInput[]
    id?: StringFilter<"CharacterWorldState"> | string
    characterId?: StringFilter<"CharacterWorldState"> | string
    worldId?: StringFilter<"CharacterWorldState"> | string
    currentLocation?: StringNullableFilter<"CharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableFilter<"CharacterWorldState"> | Date | string | null
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }

  export type CharacterWorldStateOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    character?: CharacterOrderByWithRelationInput
    world?: WorldOrderByWithRelationInput
  }

  export type CharacterWorldStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    characterId_worldId?: CharacterWorldStateCharacterIdWorldIdCompoundUniqueInput
    AND?: CharacterWorldStateWhereInput | CharacterWorldStateWhereInput[]
    OR?: CharacterWorldStateWhereInput[]
    NOT?: CharacterWorldStateWhereInput | CharacterWorldStateWhereInput[]
    characterId?: StringFilter<"CharacterWorldState"> | string
    worldId?: StringFilter<"CharacterWorldState"> | string
    currentLocation?: StringNullableFilter<"CharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableFilter<"CharacterWorldState"> | Date | string | null
    character?: XOR<CharacterScalarRelationFilter, CharacterWhereInput>
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }, "id" | "characterId_worldId">

  export type CharacterWorldStateOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrderInput | SortOrder
    lastPlayedAt?: SortOrderInput | SortOrder
    _count?: CharacterWorldStateCountOrderByAggregateInput
    _max?: CharacterWorldStateMaxOrderByAggregateInput
    _min?: CharacterWorldStateMinOrderByAggregateInput
  }

  export type CharacterWorldStateScalarWhereWithAggregatesInput = {
    AND?: CharacterWorldStateScalarWhereWithAggregatesInput | CharacterWorldStateScalarWhereWithAggregatesInput[]
    OR?: CharacterWorldStateScalarWhereWithAggregatesInput[]
    NOT?: CharacterWorldStateScalarWhereWithAggregatesInput | CharacterWorldStateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CharacterWorldState"> | string
    characterId?: StringWithAggregatesFilter<"CharacterWorldState"> | string
    worldId?: StringWithAggregatesFilter<"CharacterWorldState"> | string
    currentLocation?: StringNullableWithAggregatesFilter<"CharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableWithAggregatesFilter<"CharacterWorldState"> | Date | string | null
  }

  export type LocationWhereInput = {
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    id?: StringFilter<"Location"> | string
    worldId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    description?: StringNullableFilter<"Location"> | string | null
    isStartingLocation?: BoolFilter<"Location"> | boolean
    connectedLocationIds?: StringNullableListFilter<"Location">
    thumbnailUrl?: StringNullableFilter<"Location"> | string | null
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    events?: EventListRelationFilter
    gameStates?: GameStateListRelationFilter
  }

  export type LocationOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isStartingLocation?: SortOrder
    connectedLocationIds?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    world?: WorldOrderByWithRelationInput
    events?: EventOrderByRelationAggregateInput
    gameStates?: GameStateOrderByRelationAggregateInput
  }

  export type LocationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    worldId_name?: LocationWorldIdNameCompoundUniqueInput
    AND?: LocationWhereInput | LocationWhereInput[]
    OR?: LocationWhereInput[]
    NOT?: LocationWhereInput | LocationWhereInput[]
    worldId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    description?: StringNullableFilter<"Location"> | string | null
    isStartingLocation?: BoolFilter<"Location"> | boolean
    connectedLocationIds?: StringNullableListFilter<"Location">
    thumbnailUrl?: StringNullableFilter<"Location"> | string | null
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    events?: EventListRelationFilter
    gameStates?: GameStateListRelationFilter
  }, "id" | "worldId_name">

  export type LocationOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isStartingLocation?: SortOrder
    connectedLocationIds?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    _count?: LocationCountOrderByAggregateInput
    _max?: LocationMaxOrderByAggregateInput
    _min?: LocationMinOrderByAggregateInput
  }

  export type LocationScalarWhereWithAggregatesInput = {
    AND?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    OR?: LocationScalarWhereWithAggregatesInput[]
    NOT?: LocationScalarWhereWithAggregatesInput | LocationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Location"> | string
    worldId?: StringWithAggregatesFilter<"Location"> | string
    name?: StringWithAggregatesFilter<"Location"> | string
    description?: StringNullableWithAggregatesFilter<"Location"> | string | null
    isStartingLocation?: BoolWithAggregatesFilter<"Location"> | boolean
    connectedLocationIds?: StringNullableListFilter<"Location">
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Location"> | string | null
  }

  export type LoreFragmentWhereInput = {
    AND?: LoreFragmentWhereInput | LoreFragmentWhereInput[]
    OR?: LoreFragmentWhereInput[]
    NOT?: LoreFragmentWhereInput | LoreFragmentWhereInput[]
    id?: StringFilter<"LoreFragment"> | string
    worldId?: StringFilter<"LoreFragment"> | string
    title?: StringFilter<"LoreFragment"> | string
    content?: StringFilter<"LoreFragment"> | string
    type?: StringFilter<"LoreFragment"> | string
    contextId?: StringNullableFilter<"LoreFragment"> | string | null
    isRevealed?: BoolFilter<"LoreFragment"> | boolean
    keywords?: StringNullableListFilter<"LoreFragment">
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }

  export type LoreFragmentOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    contextId?: SortOrderInput | SortOrder
    isRevealed?: SortOrder
    keywords?: SortOrder
    world?: WorldOrderByWithRelationInput
  }

  export type LoreFragmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LoreFragmentWhereInput | LoreFragmentWhereInput[]
    OR?: LoreFragmentWhereInput[]
    NOT?: LoreFragmentWhereInput | LoreFragmentWhereInput[]
    worldId?: StringFilter<"LoreFragment"> | string
    title?: StringFilter<"LoreFragment"> | string
    content?: StringFilter<"LoreFragment"> | string
    type?: StringFilter<"LoreFragment"> | string
    contextId?: StringNullableFilter<"LoreFragment"> | string | null
    isRevealed?: BoolFilter<"LoreFragment"> | boolean
    keywords?: StringNullableListFilter<"LoreFragment">
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
  }, "id">

  export type LoreFragmentOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    contextId?: SortOrderInput | SortOrder
    isRevealed?: SortOrder
    keywords?: SortOrder
    _count?: LoreFragmentCountOrderByAggregateInput
    _max?: LoreFragmentMaxOrderByAggregateInput
    _min?: LoreFragmentMinOrderByAggregateInput
  }

  export type LoreFragmentScalarWhereWithAggregatesInput = {
    AND?: LoreFragmentScalarWhereWithAggregatesInput | LoreFragmentScalarWhereWithAggregatesInput[]
    OR?: LoreFragmentScalarWhereWithAggregatesInput[]
    NOT?: LoreFragmentScalarWhereWithAggregatesInput | LoreFragmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LoreFragment"> | string
    worldId?: StringWithAggregatesFilter<"LoreFragment"> | string
    title?: StringWithAggregatesFilter<"LoreFragment"> | string
    content?: StringWithAggregatesFilter<"LoreFragment"> | string
    type?: StringWithAggregatesFilter<"LoreFragment"> | string
    contextId?: StringNullableWithAggregatesFilter<"LoreFragment"> | string | null
    isRevealed?: BoolWithAggregatesFilter<"LoreFragment"> | boolean
    keywords?: StringNullableListFilter<"LoreFragment">
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    worldId?: StringFilter<"Event"> | string
    locationId?: StringNullableFilter<"Event"> | string | null
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    eventType?: StringFilter<"Event"> | string
    triggerConditions?: JsonFilter<"Event">
    outcomes?: JsonFilter<"Event">
    isRepeatable?: BoolFilter<"Event"> | boolean
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    triggerConditions?: SortOrder
    outcomes?: SortOrder
    isRepeatable?: SortOrder
    world?: WorldOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    worldId?: StringFilter<"Event"> | string
    locationId?: StringNullableFilter<"Event"> | string | null
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    eventType?: StringFilter<"Event"> | string
    triggerConditions?: JsonFilter<"Event">
    outcomes?: JsonFilter<"Event">
    isRepeatable?: BoolFilter<"Event"> | boolean
    world?: XOR<WorldScalarRelationFilter, WorldWhereInput>
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    triggerConditions?: SortOrder
    outcomes?: SortOrder
    isRepeatable?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    worldId?: StringWithAggregatesFilter<"Event"> | string
    locationId?: StringNullableWithAggregatesFilter<"Event"> | string | null
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    eventType?: StringWithAggregatesFilter<"Event"> | string
    triggerConditions?: JsonWithAggregatesFilter<"Event">
    outcomes?: JsonWithAggregatesFilter<"Event">
    isRepeatable?: BoolWithAggregatesFilter<"Event"> | boolean
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
    worldId?: StringNullableFilter<"GameState"> | string | null
    locationId?: StringNullableFilter<"GameState"> | string | null
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
    world?: XOR<WorldNullableScalarRelationFilter, WorldWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    npcStates?: NPCStateListRelationFilter
    decisions?: DecisionListRelationFilter
    aiContextHistory?: AIContextHistoryListRelationFilter
    narrativeHistory?: NarrativeHistoryListRelationFilter
  }

  export type GameStateOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
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
    world?: WorldOrderByWithRelationInput
    location?: LocationOrderByWithRelationInput
    npcStates?: NPCStateOrderByRelationAggregateInput
    decisions?: DecisionOrderByRelationAggregateInput
    aiContextHistory?: AIContextHistoryOrderByRelationAggregateInput
    narrativeHistory?: NarrativeHistoryOrderByRelationAggregateInput
  }

  export type GameStateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameStateWhereInput | GameStateWhereInput[]
    OR?: GameStateWhereInput[]
    NOT?: GameStateWhereInput | GameStateWhereInput[]
    sessionId?: StringFilter<"GameState"> | string
    characterId?: StringFilter<"GameState"> | string
    worldId?: StringNullableFilter<"GameState"> | string | null
    locationId?: StringNullableFilter<"GameState"> | string | null
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
    world?: XOR<WorldNullableScalarRelationFilter, WorldWhereInput> | null
    location?: XOR<LocationNullableScalarRelationFilter, LocationWhereInput> | null
    npcStates?: NPCStateListRelationFilter
    decisions?: DecisionListRelationFilter
    aiContextHistory?: AIContextHistoryListRelationFilter
    narrativeHistory?: NarrativeHistoryListRelationFilter
  }, "id">

  export type GameStateOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrderInput | SortOrder
    locationId?: SortOrderInput | SortOrder
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
    worldId?: StringNullableWithAggregatesFilter<"GameState"> | string | null
    locationId?: StringNullableWithAggregatesFilter<"GameState"> | string | null
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

  export type NarrativeHistoryWhereInput = {
    AND?: NarrativeHistoryWhereInput | NarrativeHistoryWhereInput[]
    OR?: NarrativeHistoryWhereInput[]
    NOT?: NarrativeHistoryWhereInput | NarrativeHistoryWhereInput[]
    id?: StringFilter<"NarrativeHistory"> | string
    gameStateId?: StringFilter<"NarrativeHistory"> | string
    type?: StringFilter<"NarrativeHistory"> | string
    content?: StringFilter<"NarrativeHistory"> | string
    timestamp?: DateTimeFilter<"NarrativeHistory"> | Date | string
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
  }

  export type NarrativeHistoryOrderByWithRelationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    gameState?: GameStateOrderByWithRelationInput
  }

  export type NarrativeHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NarrativeHistoryWhereInput | NarrativeHistoryWhereInput[]
    OR?: NarrativeHistoryWhereInput[]
    NOT?: NarrativeHistoryWhereInput | NarrativeHistoryWhereInput[]
    gameStateId?: StringFilter<"NarrativeHistory"> | string
    type?: StringFilter<"NarrativeHistory"> | string
    content?: StringFilter<"NarrativeHistory"> | string
    timestamp?: DateTimeFilter<"NarrativeHistory"> | Date | string
    gameState?: XOR<GameStateScalarRelationFilter, GameStateWhereInput>
  }, "id">

  export type NarrativeHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
    _count?: NarrativeHistoryCountOrderByAggregateInput
    _max?: NarrativeHistoryMaxOrderByAggregateInput
    _min?: NarrativeHistoryMinOrderByAggregateInput
  }

  export type NarrativeHistoryScalarWhereWithAggregatesInput = {
    AND?: NarrativeHistoryScalarWhereWithAggregatesInput | NarrativeHistoryScalarWhereWithAggregatesInput[]
    OR?: NarrativeHistoryScalarWhereWithAggregatesInput[]
    NOT?: NarrativeHistoryScalarWhereWithAggregatesInput | NarrativeHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NarrativeHistory"> | string
    gameStateId?: StringWithAggregatesFilter<"NarrativeHistory"> | string
    type?: StringWithAggregatesFilter<"NarrativeHistory"> | string
    content?: StringWithAggregatesFilter<"NarrativeHistory"> | string
    timestamp?: DateTimeWithAggregatesFilter<"NarrativeHistory"> | Date | string
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
    characterWorldStates?: CharacterWorldStateCreateNestedManyWithoutCharacterInput
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
    characterWorldStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
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
    characterWorldStates?: CharacterWorldStateUpdateManyWithoutCharacterNestedInput
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
    characterWorldStates?: CharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
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

  export type WorldCreateInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateCreateNestedManyWithoutWorldInput
    gameStates?: GameStateCreateNestedManyWithoutWorldInput
    locations?: LocationCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentCreateNestedManyWithoutWorldInput
    events?: EventCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutWorldInput
    locations?: LocationUncheckedCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    events?: EventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUpdateManyWithoutWorldNestedInput
    locations?: LocationUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUpdateManyWithoutWorldNestedInput
    events?: EventUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutWorldNestedInput
    locations?: LocationUncheckedUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    events?: EventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type WorldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CharacterWorldStateCreateInput = {
    id?: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
    character: CharacterCreateNestedOneWithoutCharacterWorldStatesInput
    world: WorldCreateNestedOneWithoutCharacterStatesInput
  }

  export type CharacterWorldStateUncheckedCreateInput = {
    id?: string
    characterId: string
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type CharacterWorldStateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    character?: CharacterUpdateOneRequiredWithoutCharacterWorldStatesNestedInput
    world?: WorldUpdateOneRequiredWithoutCharacterStatesNestedInput
  }

  export type CharacterWorldStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CharacterWorldStateCreateManyInput = {
    id?: string
    characterId: string
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type CharacterWorldStateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CharacterWorldStateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LocationCreateInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    world: WorldCreateNestedOneWithoutLocationsInput
    events?: EventCreateNestedManyWithoutLocationInput
    gameStates?: GameStateCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    world?: WorldUpdateOneRequiredWithoutLocationsNestedInput
    events?: EventUpdateManyWithoutLocationNestedInput
    gameStates?: GameStateUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationCreateManyInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
  }

  export type LocationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LocationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoreFragmentCreateInput = {
    id?: string
    title: string
    content: string
    type: string
    contextId?: string | null
    isRevealed?: boolean
    keywords?: LoreFragmentCreatekeywordsInput | string[]
    world: WorldCreateNestedOneWithoutLoreFragmentsInput
  }

  export type LoreFragmentUncheckedCreateInput = {
    id?: string
    worldId: string
    title: string
    content: string
    type: string
    contextId?: string | null
    isRevealed?: boolean
    keywords?: LoreFragmentCreatekeywordsInput | string[]
  }

  export type LoreFragmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
    world?: WorldUpdateOneRequiredWithoutLoreFragmentsNestedInput
  }

  export type LoreFragmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
  }

  export type LoreFragmentCreateManyInput = {
    id?: string
    worldId: string
    title: string
    content: string
    type: string
    contextId?: string | null
    isRevealed?: boolean
    keywords?: LoreFragmentCreatekeywordsInput | string[]
  }

  export type LoreFragmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
  }

  export type LoreFragmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
    world: WorldCreateNestedOneWithoutEventsInput
    location?: LocationCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    worldId: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
    world?: WorldUpdateOneRequiredWithoutEventsNestedInput
    location?: LocationUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
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

  export type EventCreateManyInput = {
    id?: string
    worldId: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUncheckedUpdateManyInput = {
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateCreateManyInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type NarrativeHistoryCreateInput = {
    id?: string
    type: string
    content: string
    timestamp?: Date | string
    gameState: GameStateCreateNestedOneWithoutNarrativeHistoryInput
  }

  export type NarrativeHistoryUncheckedCreateInput = {
    id?: string
    gameStateId: string
    type: string
    content: string
    timestamp?: Date | string
  }

  export type NarrativeHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    gameState?: GameStateUpdateOneRequiredWithoutNarrativeHistoryNestedInput
  }

  export type NarrativeHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrativeHistoryCreateManyInput = {
    id?: string
    gameStateId: string
    type: string
    content: string
    timestamp?: Date | string
  }

  export type NarrativeHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrativeHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gameStateId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type CharacterWorldStateListRelationFilter = {
    every?: CharacterWorldStateWhereInput
    some?: CharacterWorldStateWhereInput
    none?: CharacterWorldStateWhereInput
  }

  export type GameSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacterWorldStateOrderByRelationAggregateInput = {
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

  export type LocationListRelationFilter = {
    every?: LocationWhereInput
    some?: LocationWhereInput
    none?: LocationWhereInput
  }

  export type LoreFragmentListRelationFilter = {
    every?: LoreFragmentWhereInput
    some?: LoreFragmentWhereInput
    none?: LoreFragmentWhereInput
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type LocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LoreFragmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WorldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type WorldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    thumbnailUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type CharacterScalarRelationFilter = {
    is?: CharacterWhereInput
    isNot?: CharacterWhereInput
  }

  export type WorldScalarRelationFilter = {
    is?: WorldWhereInput
    isNot?: WorldWhereInput
  }

  export type CharacterWorldStateCharacterIdWorldIdCompoundUniqueInput = {
    characterId: string
    worldId: string
  }

  export type CharacterWorldStateCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type CharacterWorldStateMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    currentLocation?: SortOrder
    lastPlayedAt?: SortOrder
  }

  export type CharacterWorldStateMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type LocationWorldIdNameCompoundUniqueInput = {
    worldId: string
    name: string
  }

  export type LocationCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isStartingLocation?: SortOrder
    connectedLocationIds?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type LocationMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isStartingLocation?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type LocationMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isStartingLocation?: SortOrder
    thumbnailUrl?: SortOrder
  }

  export type LoreFragmentCountOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    contextId?: SortOrder
    isRevealed?: SortOrder
    keywords?: SortOrder
  }

  export type LoreFragmentMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    contextId?: SortOrder
    isRevealed?: SortOrder
  }

  export type LoreFragmentMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    contextId?: SortOrder
    isRevealed?: SortOrder
  }

  export type LocationNullableScalarRelationFilter = {
    is?: LocationWhereInput | null
    isNot?: LocationWhereInput | null
  }

  export type EventCountOrderByAggregateInput = {
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

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    isRepeatable?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    eventType?: SortOrder
    isRepeatable?: SortOrder
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

  export type WorldNullableScalarRelationFilter = {
    is?: WorldWhereInput | null
    isNot?: WorldWhereInput | null
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

  export type NarrativeHistoryListRelationFilter = {
    every?: NarrativeHistoryWhereInput
    some?: NarrativeHistoryWhereInput
    none?: NarrativeHistoryWhereInput
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

  export type NarrativeHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GameStateCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    characterId?: SortOrder
    worldId?: SortOrder
    locationId?: SortOrder
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
    worldId?: SortOrder
    locationId?: SortOrder
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
    worldId?: SortOrder
    locationId?: SortOrder
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

  export type NarrativeHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type NarrativeHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
  }

  export type NarrativeHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    gameStateId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    timestamp?: SortOrder
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

  export type CharacterWorldStateCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterWorldStateCreateWithoutCharacterInput, CharacterWorldStateUncheckedCreateWithoutCharacterInput> | CharacterWorldStateCreateWithoutCharacterInput[] | CharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutCharacterInput | CharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterWorldStateCreateManyCharacterInputEnvelope
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
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

  export type CharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput = {
    create?: XOR<CharacterWorldStateCreateWithoutCharacterInput, CharacterWorldStateUncheckedCreateWithoutCharacterInput> | CharacterWorldStateCreateWithoutCharacterInput[] | CharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutCharacterInput | CharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    createMany?: CharacterWorldStateCreateManyCharacterInputEnvelope
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
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

  export type CharacterWorldStateUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterWorldStateCreateWithoutCharacterInput, CharacterWorldStateUncheckedCreateWithoutCharacterInput> | CharacterWorldStateCreateWithoutCharacterInput[] | CharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutCharacterInput | CharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput | CharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterWorldStateCreateManyCharacterInputEnvelope
    set?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    disconnect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    delete?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    update?: CharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput | CharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterWorldStateUpdateManyWithWhereWithoutCharacterInput | CharacterWorldStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterWorldStateScalarWhereInput | CharacterWorldStateScalarWhereInput[]
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

  export type CharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput = {
    create?: XOR<CharacterWorldStateCreateWithoutCharacterInput, CharacterWorldStateUncheckedCreateWithoutCharacterInput> | CharacterWorldStateCreateWithoutCharacterInput[] | CharacterWorldStateUncheckedCreateWithoutCharacterInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutCharacterInput | CharacterWorldStateCreateOrConnectWithoutCharacterInput[]
    upsert?: CharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput | CharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput[]
    createMany?: CharacterWorldStateCreateManyCharacterInputEnvelope
    set?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    disconnect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    delete?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    update?: CharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput | CharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput[]
    updateMany?: CharacterWorldStateUpdateManyWithWhereWithoutCharacterInput | CharacterWorldStateUpdateManyWithWhereWithoutCharacterInput[]
    deleteMany?: CharacterWorldStateScalarWhereInput | CharacterWorldStateScalarWhereInput[]
  }

  export type CharacterWorldStateCreateNestedManyWithoutWorldInput = {
    create?: XOR<CharacterWorldStateCreateWithoutWorldInput, CharacterWorldStateUncheckedCreateWithoutWorldInput> | CharacterWorldStateCreateWithoutWorldInput[] | CharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutWorldInput | CharacterWorldStateCreateOrConnectWithoutWorldInput[]
    createMany?: CharacterWorldStateCreateManyWorldInputEnvelope
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
  }

  export type GameStateCreateNestedManyWithoutWorldInput = {
    create?: XOR<GameStateCreateWithoutWorldInput, GameStateUncheckedCreateWithoutWorldInput> | GameStateCreateWithoutWorldInput[] | GameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutWorldInput | GameStateCreateOrConnectWithoutWorldInput[]
    createMany?: GameStateCreateManyWorldInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type LocationCreateNestedManyWithoutWorldInput = {
    create?: XOR<LocationCreateWithoutWorldInput, LocationUncheckedCreateWithoutWorldInput> | LocationCreateWithoutWorldInput[] | LocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutWorldInput | LocationCreateOrConnectWithoutWorldInput[]
    createMany?: LocationCreateManyWorldInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LoreFragmentCreateNestedManyWithoutWorldInput = {
    create?: XOR<LoreFragmentCreateWithoutWorldInput, LoreFragmentUncheckedCreateWithoutWorldInput> | LoreFragmentCreateWithoutWorldInput[] | LoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LoreFragmentCreateOrConnectWithoutWorldInput | LoreFragmentCreateOrConnectWithoutWorldInput[]
    createMany?: LoreFragmentCreateManyWorldInputEnvelope
    connect?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
  }

  export type EventCreateNestedManyWithoutWorldInput = {
    create?: XOR<EventCreateWithoutWorldInput, EventUncheckedCreateWithoutWorldInput> | EventCreateWithoutWorldInput[] | EventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EventCreateOrConnectWithoutWorldInput | EventCreateOrConnectWithoutWorldInput[]
    createMany?: EventCreateManyWorldInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type CharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<CharacterWorldStateCreateWithoutWorldInput, CharacterWorldStateUncheckedCreateWithoutWorldInput> | CharacterWorldStateCreateWithoutWorldInput[] | CharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutWorldInput | CharacterWorldStateCreateOrConnectWithoutWorldInput[]
    createMany?: CharacterWorldStateCreateManyWorldInputEnvelope
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<GameStateCreateWithoutWorldInput, GameStateUncheckedCreateWithoutWorldInput> | GameStateCreateWithoutWorldInput[] | GameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutWorldInput | GameStateCreateOrConnectWithoutWorldInput[]
    createMany?: GameStateCreateManyWorldInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type LocationUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<LocationCreateWithoutWorldInput, LocationUncheckedCreateWithoutWorldInput> | LocationCreateWithoutWorldInput[] | LocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutWorldInput | LocationCreateOrConnectWithoutWorldInput[]
    createMany?: LocationCreateManyWorldInputEnvelope
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
  }

  export type LoreFragmentUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<LoreFragmentCreateWithoutWorldInput, LoreFragmentUncheckedCreateWithoutWorldInput> | LoreFragmentCreateWithoutWorldInput[] | LoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LoreFragmentCreateOrConnectWithoutWorldInput | LoreFragmentCreateOrConnectWithoutWorldInput[]
    createMany?: LoreFragmentCreateManyWorldInputEnvelope
    connect?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutWorldInput = {
    create?: XOR<EventCreateWithoutWorldInput, EventUncheckedCreateWithoutWorldInput> | EventCreateWithoutWorldInput[] | EventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EventCreateOrConnectWithoutWorldInput | EventCreateOrConnectWithoutWorldInput[]
    createMany?: EventCreateManyWorldInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type CharacterWorldStateUpdateManyWithoutWorldNestedInput = {
    create?: XOR<CharacterWorldStateCreateWithoutWorldInput, CharacterWorldStateUncheckedCreateWithoutWorldInput> | CharacterWorldStateCreateWithoutWorldInput[] | CharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutWorldInput | CharacterWorldStateCreateOrConnectWithoutWorldInput[]
    upsert?: CharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput | CharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: CharacterWorldStateCreateManyWorldInputEnvelope
    set?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    disconnect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    delete?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    update?: CharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput | CharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: CharacterWorldStateUpdateManyWithWhereWithoutWorldInput | CharacterWorldStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: CharacterWorldStateScalarWhereInput | CharacterWorldStateScalarWhereInput[]
  }

  export type GameStateUpdateManyWithoutWorldNestedInput = {
    create?: XOR<GameStateCreateWithoutWorldInput, GameStateUncheckedCreateWithoutWorldInput> | GameStateCreateWithoutWorldInput[] | GameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutWorldInput | GameStateCreateOrConnectWithoutWorldInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutWorldInput | GameStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: GameStateCreateManyWorldInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutWorldInput | GameStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutWorldInput | GameStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type LocationUpdateManyWithoutWorldNestedInput = {
    create?: XOR<LocationCreateWithoutWorldInput, LocationUncheckedCreateWithoutWorldInput> | LocationCreateWithoutWorldInput[] | LocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutWorldInput | LocationCreateOrConnectWithoutWorldInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutWorldInput | LocationUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: LocationCreateManyWorldInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutWorldInput | LocationUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutWorldInput | LocationUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LoreFragmentUpdateManyWithoutWorldNestedInput = {
    create?: XOR<LoreFragmentCreateWithoutWorldInput, LoreFragmentUncheckedCreateWithoutWorldInput> | LoreFragmentCreateWithoutWorldInput[] | LoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LoreFragmentCreateOrConnectWithoutWorldInput | LoreFragmentCreateOrConnectWithoutWorldInput[]
    upsert?: LoreFragmentUpsertWithWhereUniqueWithoutWorldInput | LoreFragmentUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: LoreFragmentCreateManyWorldInputEnvelope
    set?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    disconnect?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    delete?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    connect?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    update?: LoreFragmentUpdateWithWhereUniqueWithoutWorldInput | LoreFragmentUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: LoreFragmentUpdateManyWithWhereWithoutWorldInput | LoreFragmentUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: LoreFragmentScalarWhereInput | LoreFragmentScalarWhereInput[]
  }

  export type EventUpdateManyWithoutWorldNestedInput = {
    create?: XOR<EventCreateWithoutWorldInput, EventUncheckedCreateWithoutWorldInput> | EventCreateWithoutWorldInput[] | EventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EventCreateOrConnectWithoutWorldInput | EventCreateOrConnectWithoutWorldInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutWorldInput | EventUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: EventCreateManyWorldInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutWorldInput | EventUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: EventUpdateManyWithWhereWithoutWorldInput | EventUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<CharacterWorldStateCreateWithoutWorldInput, CharacterWorldStateUncheckedCreateWithoutWorldInput> | CharacterWorldStateCreateWithoutWorldInput[] | CharacterWorldStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: CharacterWorldStateCreateOrConnectWithoutWorldInput | CharacterWorldStateCreateOrConnectWithoutWorldInput[]
    upsert?: CharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput | CharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: CharacterWorldStateCreateManyWorldInputEnvelope
    set?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    disconnect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    delete?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    connect?: CharacterWorldStateWhereUniqueInput | CharacterWorldStateWhereUniqueInput[]
    update?: CharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput | CharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: CharacterWorldStateUpdateManyWithWhereWithoutWorldInput | CharacterWorldStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: CharacterWorldStateScalarWhereInput | CharacterWorldStateScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<GameStateCreateWithoutWorldInput, GameStateUncheckedCreateWithoutWorldInput> | GameStateCreateWithoutWorldInput[] | GameStateUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutWorldInput | GameStateCreateOrConnectWithoutWorldInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutWorldInput | GameStateUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: GameStateCreateManyWorldInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutWorldInput | GameStateUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutWorldInput | GameStateUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type LocationUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<LocationCreateWithoutWorldInput, LocationUncheckedCreateWithoutWorldInput> | LocationCreateWithoutWorldInput[] | LocationUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LocationCreateOrConnectWithoutWorldInput | LocationCreateOrConnectWithoutWorldInput[]
    upsert?: LocationUpsertWithWhereUniqueWithoutWorldInput | LocationUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: LocationCreateManyWorldInputEnvelope
    set?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    disconnect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    delete?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    connect?: LocationWhereUniqueInput | LocationWhereUniqueInput[]
    update?: LocationUpdateWithWhereUniqueWithoutWorldInput | LocationUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: LocationUpdateManyWithWhereWithoutWorldInput | LocationUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: LocationScalarWhereInput | LocationScalarWhereInput[]
  }

  export type LoreFragmentUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<LoreFragmentCreateWithoutWorldInput, LoreFragmentUncheckedCreateWithoutWorldInput> | LoreFragmentCreateWithoutWorldInput[] | LoreFragmentUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: LoreFragmentCreateOrConnectWithoutWorldInput | LoreFragmentCreateOrConnectWithoutWorldInput[]
    upsert?: LoreFragmentUpsertWithWhereUniqueWithoutWorldInput | LoreFragmentUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: LoreFragmentCreateManyWorldInputEnvelope
    set?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    disconnect?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    delete?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    connect?: LoreFragmentWhereUniqueInput | LoreFragmentWhereUniqueInput[]
    update?: LoreFragmentUpdateWithWhereUniqueWithoutWorldInput | LoreFragmentUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: LoreFragmentUpdateManyWithWhereWithoutWorldInput | LoreFragmentUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: LoreFragmentScalarWhereInput | LoreFragmentScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutWorldNestedInput = {
    create?: XOR<EventCreateWithoutWorldInput, EventUncheckedCreateWithoutWorldInput> | EventCreateWithoutWorldInput[] | EventUncheckedCreateWithoutWorldInput[]
    connectOrCreate?: EventCreateOrConnectWithoutWorldInput | EventCreateOrConnectWithoutWorldInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutWorldInput | EventUpsertWithWhereUniqueWithoutWorldInput[]
    createMany?: EventCreateManyWorldInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutWorldInput | EventUpdateWithWhereUniqueWithoutWorldInput[]
    updateMany?: EventUpdateManyWithWhereWithoutWorldInput | EventUpdateManyWithWhereWithoutWorldInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type CharacterCreateNestedOneWithoutCharacterWorldStatesInput = {
    create?: XOR<CharacterCreateWithoutCharacterWorldStatesInput, CharacterUncheckedCreateWithoutCharacterWorldStatesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterWorldStatesInput
    connect?: CharacterWhereUniqueInput
  }

  export type WorldCreateNestedOneWithoutCharacterStatesInput = {
    create?: XOR<WorldCreateWithoutCharacterStatesInput, WorldUncheckedCreateWithoutCharacterStatesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutCharacterStatesInput
    connect?: WorldWhereUniqueInput
  }

  export type CharacterUpdateOneRequiredWithoutCharacterWorldStatesNestedInput = {
    create?: XOR<CharacterCreateWithoutCharacterWorldStatesInput, CharacterUncheckedCreateWithoutCharacterWorldStatesInput>
    connectOrCreate?: CharacterCreateOrConnectWithoutCharacterWorldStatesInput
    upsert?: CharacterUpsertWithoutCharacterWorldStatesInput
    connect?: CharacterWhereUniqueInput
    update?: XOR<XOR<CharacterUpdateToOneWithWhereWithoutCharacterWorldStatesInput, CharacterUpdateWithoutCharacterWorldStatesInput>, CharacterUncheckedUpdateWithoutCharacterWorldStatesInput>
  }

  export type WorldUpdateOneRequiredWithoutCharacterStatesNestedInput = {
    create?: XOR<WorldCreateWithoutCharacterStatesInput, WorldUncheckedCreateWithoutCharacterStatesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutCharacterStatesInput
    upsert?: WorldUpsertWithoutCharacterStatesInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutCharacterStatesInput, WorldUpdateWithoutCharacterStatesInput>, WorldUncheckedUpdateWithoutCharacterStatesInput>
  }

  export type LocationCreateconnectedLocationIdsInput = {
    set: string[]
  }

  export type WorldCreateNestedOneWithoutLocationsInput = {
    create?: XOR<WorldCreateWithoutLocationsInput, WorldUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutLocationsInput
    connect?: WorldWhereUniqueInput
  }

  export type EventCreateNestedManyWithoutLocationInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GameStateCreateNestedManyWithoutLocationInput = {
    create?: XOR<GameStateCreateWithoutLocationInput, GameStateUncheckedCreateWithoutLocationInput> | GameStateCreateWithoutLocationInput[] | GameStateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutLocationInput | GameStateCreateOrConnectWithoutLocationInput[]
    createMany?: GameStateCreateManyLocationInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type GameStateUncheckedCreateNestedManyWithoutLocationInput = {
    create?: XOR<GameStateCreateWithoutLocationInput, GameStateUncheckedCreateWithoutLocationInput> | GameStateCreateWithoutLocationInput[] | GameStateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutLocationInput | GameStateCreateOrConnectWithoutLocationInput[]
    createMany?: GameStateCreateManyLocationInputEnvelope
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
  }

  export type LocationUpdateconnectedLocationIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorldUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<WorldCreateWithoutLocationsInput, WorldUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutLocationsInput
    upsert?: WorldUpsertWithoutLocationsInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutLocationsInput, WorldUpdateWithoutLocationsInput>, WorldUncheckedUpdateWithoutLocationsInput>
  }

  export type EventUpdateManyWithoutLocationNestedInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLocationInput | EventUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLocationInput | EventUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLocationInput | EventUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GameStateUpdateManyWithoutLocationNestedInput = {
    create?: XOR<GameStateCreateWithoutLocationInput, GameStateUncheckedCreateWithoutLocationInput> | GameStateCreateWithoutLocationInput[] | GameStateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutLocationInput | GameStateCreateOrConnectWithoutLocationInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutLocationInput | GameStateUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: GameStateCreateManyLocationInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutLocationInput | GameStateUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutLocationInput | GameStateUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput> | EventCreateWithoutLocationInput[] | EventUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: EventCreateOrConnectWithoutLocationInput | EventCreateOrConnectWithoutLocationInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutLocationInput | EventUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: EventCreateManyLocationInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutLocationInput | EventUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: EventUpdateManyWithWhereWithoutLocationInput | EventUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type GameStateUncheckedUpdateManyWithoutLocationNestedInput = {
    create?: XOR<GameStateCreateWithoutLocationInput, GameStateUncheckedCreateWithoutLocationInput> | GameStateCreateWithoutLocationInput[] | GameStateUncheckedCreateWithoutLocationInput[]
    connectOrCreate?: GameStateCreateOrConnectWithoutLocationInput | GameStateCreateOrConnectWithoutLocationInput[]
    upsert?: GameStateUpsertWithWhereUniqueWithoutLocationInput | GameStateUpsertWithWhereUniqueWithoutLocationInput[]
    createMany?: GameStateCreateManyLocationInputEnvelope
    set?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    disconnect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    delete?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    connect?: GameStateWhereUniqueInput | GameStateWhereUniqueInput[]
    update?: GameStateUpdateWithWhereUniqueWithoutLocationInput | GameStateUpdateWithWhereUniqueWithoutLocationInput[]
    updateMany?: GameStateUpdateManyWithWhereWithoutLocationInput | GameStateUpdateManyWithWhereWithoutLocationInput[]
    deleteMany?: GameStateScalarWhereInput | GameStateScalarWhereInput[]
  }

  export type LoreFragmentCreatekeywordsInput = {
    set: string[]
  }

  export type WorldCreateNestedOneWithoutLoreFragmentsInput = {
    create?: XOR<WorldCreateWithoutLoreFragmentsInput, WorldUncheckedCreateWithoutLoreFragmentsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutLoreFragmentsInput
    connect?: WorldWhereUniqueInput
  }

  export type LoreFragmentUpdatekeywordsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type WorldUpdateOneRequiredWithoutLoreFragmentsNestedInput = {
    create?: XOR<WorldCreateWithoutLoreFragmentsInput, WorldUncheckedCreateWithoutLoreFragmentsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutLoreFragmentsInput
    upsert?: WorldUpsertWithoutLoreFragmentsInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutLoreFragmentsInput, WorldUpdateWithoutLoreFragmentsInput>, WorldUncheckedUpdateWithoutLoreFragmentsInput>
  }

  export type WorldCreateNestedOneWithoutEventsInput = {
    create?: XOR<WorldCreateWithoutEventsInput, WorldUncheckedCreateWithoutEventsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutEventsInput
    connect?: WorldWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutEventsInput = {
    create?: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventsInput
    connect?: LocationWhereUniqueInput
  }

  export type WorldUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<WorldCreateWithoutEventsInput, WorldUncheckedCreateWithoutEventsInput>
    connectOrCreate?: WorldCreateOrConnectWithoutEventsInput
    upsert?: WorldUpsertWithoutEventsInput
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutEventsInput, WorldUpdateWithoutEventsInput>, WorldUncheckedUpdateWithoutEventsInput>
  }

  export type LocationUpdateOneWithoutEventsNestedInput = {
    create?: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LocationCreateOrConnectWithoutEventsInput
    upsert?: LocationUpsertWithoutEventsInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutEventsInput, LocationUpdateWithoutEventsInput>, LocationUncheckedUpdateWithoutEventsInput>
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

  export type WorldCreateNestedOneWithoutGameStatesInput = {
    create?: XOR<WorldCreateWithoutGameStatesInput, WorldUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutGameStatesInput
    connect?: WorldWhereUniqueInput
  }

  export type LocationCreateNestedOneWithoutGameStatesInput = {
    create?: XOR<LocationCreateWithoutGameStatesInput, LocationUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGameStatesInput
    connect?: LocationWhereUniqueInput
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

  export type NarrativeHistoryCreateNestedManyWithoutGameStateInput = {
    create?: XOR<NarrativeHistoryCreateWithoutGameStateInput, NarrativeHistoryUncheckedCreateWithoutGameStateInput> | NarrativeHistoryCreateWithoutGameStateInput[] | NarrativeHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NarrativeHistoryCreateOrConnectWithoutGameStateInput | NarrativeHistoryCreateOrConnectWithoutGameStateInput[]
    createMany?: NarrativeHistoryCreateManyGameStateInputEnvelope
    connect?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
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

  export type NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput = {
    create?: XOR<NarrativeHistoryCreateWithoutGameStateInput, NarrativeHistoryUncheckedCreateWithoutGameStateInput> | NarrativeHistoryCreateWithoutGameStateInput[] | NarrativeHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NarrativeHistoryCreateOrConnectWithoutGameStateInput | NarrativeHistoryCreateOrConnectWithoutGameStateInput[]
    createMany?: NarrativeHistoryCreateManyGameStateInputEnvelope
    connect?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
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

  export type WorldUpdateOneWithoutGameStatesNestedInput = {
    create?: XOR<WorldCreateWithoutGameStatesInput, WorldUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: WorldCreateOrConnectWithoutGameStatesInput
    upsert?: WorldUpsertWithoutGameStatesInput
    disconnect?: WorldWhereInput | boolean
    delete?: WorldWhereInput | boolean
    connect?: WorldWhereUniqueInput
    update?: XOR<XOR<WorldUpdateToOneWithWhereWithoutGameStatesInput, WorldUpdateWithoutGameStatesInput>, WorldUncheckedUpdateWithoutGameStatesInput>
  }

  export type LocationUpdateOneWithoutGameStatesNestedInput = {
    create?: XOR<LocationCreateWithoutGameStatesInput, LocationUncheckedCreateWithoutGameStatesInput>
    connectOrCreate?: LocationCreateOrConnectWithoutGameStatesInput
    upsert?: LocationUpsertWithoutGameStatesInput
    disconnect?: LocationWhereInput | boolean
    delete?: LocationWhereInput | boolean
    connect?: LocationWhereUniqueInput
    update?: XOR<XOR<LocationUpdateToOneWithWhereWithoutGameStatesInput, LocationUpdateWithoutGameStatesInput>, LocationUncheckedUpdateWithoutGameStatesInput>
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

  export type NarrativeHistoryUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<NarrativeHistoryCreateWithoutGameStateInput, NarrativeHistoryUncheckedCreateWithoutGameStateInput> | NarrativeHistoryCreateWithoutGameStateInput[] | NarrativeHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NarrativeHistoryCreateOrConnectWithoutGameStateInput | NarrativeHistoryCreateOrConnectWithoutGameStateInput[]
    upsert?: NarrativeHistoryUpsertWithWhereUniqueWithoutGameStateInput | NarrativeHistoryUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: NarrativeHistoryCreateManyGameStateInputEnvelope
    set?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    disconnect?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    delete?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    connect?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    update?: NarrativeHistoryUpdateWithWhereUniqueWithoutGameStateInput | NarrativeHistoryUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: NarrativeHistoryUpdateManyWithWhereWithoutGameStateInput | NarrativeHistoryUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: NarrativeHistoryScalarWhereInput | NarrativeHistoryScalarWhereInput[]
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

  export type NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput = {
    create?: XOR<NarrativeHistoryCreateWithoutGameStateInput, NarrativeHistoryUncheckedCreateWithoutGameStateInput> | NarrativeHistoryCreateWithoutGameStateInput[] | NarrativeHistoryUncheckedCreateWithoutGameStateInput[]
    connectOrCreate?: NarrativeHistoryCreateOrConnectWithoutGameStateInput | NarrativeHistoryCreateOrConnectWithoutGameStateInput[]
    upsert?: NarrativeHistoryUpsertWithWhereUniqueWithoutGameStateInput | NarrativeHistoryUpsertWithWhereUniqueWithoutGameStateInput[]
    createMany?: NarrativeHistoryCreateManyGameStateInputEnvelope
    set?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    disconnect?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    delete?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    connect?: NarrativeHistoryWhereUniqueInput | NarrativeHistoryWhereUniqueInput[]
    update?: NarrativeHistoryUpdateWithWhereUniqueWithoutGameStateInput | NarrativeHistoryUpdateWithWhereUniqueWithoutGameStateInput[]
    updateMany?: NarrativeHistoryUpdateManyWithWhereWithoutGameStateInput | NarrativeHistoryUpdateManyWithWhereWithoutGameStateInput[]
    deleteMany?: NarrativeHistoryScalarWhereInput | NarrativeHistoryScalarWhereInput[]
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

  export type GameStateCreateNestedOneWithoutNarrativeHistoryInput = {
    create?: XOR<GameStateCreateWithoutNarrativeHistoryInput, GameStateUncheckedCreateWithoutNarrativeHistoryInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutNarrativeHistoryInput
    connect?: GameStateWhereUniqueInput
  }

  export type GameStateUpdateOneRequiredWithoutNarrativeHistoryNestedInput = {
    create?: XOR<GameStateCreateWithoutNarrativeHistoryInput, GameStateUncheckedCreateWithoutNarrativeHistoryInput>
    connectOrCreate?: GameStateCreateOrConnectWithoutNarrativeHistoryInput
    upsert?: GameStateUpsertWithoutNarrativeHistoryInput
    connect?: GameStateWhereUniqueInput
    update?: XOR<XOR<GameStateUpdateToOneWithWhereWithoutNarrativeHistoryInput, GameStateUpdateWithoutNarrativeHistoryInput>, GameStateUncheckedUpdateWithoutNarrativeHistoryInput>
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
    characterWorldStates?: CharacterWorldStateCreateNestedManyWithoutCharacterInput
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
    characterWorldStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutCharacterInput = {
    id?: string
    sessionId: string
    worldId?: string | null
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutCharacterInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutCharacterInput, GameStateUncheckedCreateWithoutCharacterInput>
  }

  export type GameStateCreateManyCharacterInputEnvelope = {
    data: GameStateCreateManyCharacterInput | GameStateCreateManyCharacterInput[]
    skipDuplicates?: boolean
  }

  export type CharacterWorldStateCreateWithoutCharacterInput = {
    id?: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
    world: WorldCreateNestedOneWithoutCharacterStatesInput
  }

  export type CharacterWorldStateUncheckedCreateWithoutCharacterInput = {
    id?: string
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type CharacterWorldStateCreateOrConnectWithoutCharacterInput = {
    where: CharacterWorldStateWhereUniqueInput
    create: XOR<CharacterWorldStateCreateWithoutCharacterInput, CharacterWorldStateUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterWorldStateCreateManyCharacterInputEnvelope = {
    data: CharacterWorldStateCreateManyCharacterInput | CharacterWorldStateCreateManyCharacterInput[]
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
    worldId?: StringNullableFilter<"GameState"> | string | null
    locationId?: StringNullableFilter<"GameState"> | string | null
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

  export type CharacterWorldStateUpsertWithWhereUniqueWithoutCharacterInput = {
    where: CharacterWorldStateWhereUniqueInput
    update: XOR<CharacterWorldStateUpdateWithoutCharacterInput, CharacterWorldStateUncheckedUpdateWithoutCharacterInput>
    create: XOR<CharacterWorldStateCreateWithoutCharacterInput, CharacterWorldStateUncheckedCreateWithoutCharacterInput>
  }

  export type CharacterWorldStateUpdateWithWhereUniqueWithoutCharacterInput = {
    where: CharacterWorldStateWhereUniqueInput
    data: XOR<CharacterWorldStateUpdateWithoutCharacterInput, CharacterWorldStateUncheckedUpdateWithoutCharacterInput>
  }

  export type CharacterWorldStateUpdateManyWithWhereWithoutCharacterInput = {
    where: CharacterWorldStateScalarWhereInput
    data: XOR<CharacterWorldStateUpdateManyMutationInput, CharacterWorldStateUncheckedUpdateManyWithoutCharacterInput>
  }

  export type CharacterWorldStateScalarWhereInput = {
    AND?: CharacterWorldStateScalarWhereInput | CharacterWorldStateScalarWhereInput[]
    OR?: CharacterWorldStateScalarWhereInput[]
    NOT?: CharacterWorldStateScalarWhereInput | CharacterWorldStateScalarWhereInput[]
    id?: StringFilter<"CharacterWorldState"> | string
    characterId?: StringFilter<"CharacterWorldState"> | string
    worldId?: StringFilter<"CharacterWorldState"> | string
    currentLocation?: StringNullableFilter<"CharacterWorldState"> | string | null
    lastPlayedAt?: DateTimeNullableFilter<"CharacterWorldState"> | Date | string | null
  }

  export type CharacterWorldStateCreateWithoutWorldInput = {
    id?: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
    character: CharacterCreateNestedOneWithoutCharacterWorldStatesInput
  }

  export type CharacterWorldStateUncheckedCreateWithoutWorldInput = {
    id?: string
    characterId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type CharacterWorldStateCreateOrConnectWithoutWorldInput = {
    where: CharacterWorldStateWhereUniqueInput
    create: XOR<CharacterWorldStateCreateWithoutWorldInput, CharacterWorldStateUncheckedCreateWithoutWorldInput>
  }

  export type CharacterWorldStateCreateManyWorldInputEnvelope = {
    data: CharacterWorldStateCreateManyWorldInput | CharacterWorldStateCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type GameStateCreateWithoutWorldInput = {
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
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutWorldInput = {
    id?: string
    sessionId: string
    characterId: string
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutWorldInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutWorldInput, GameStateUncheckedCreateWithoutWorldInput>
  }

  export type GameStateCreateManyWorldInputEnvelope = {
    data: GameStateCreateManyWorldInput | GameStateCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type LocationCreateWithoutWorldInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    events?: EventCreateNestedManyWithoutLocationInput
    gameStates?: GameStateCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutWorldInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutWorldInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutWorldInput, LocationUncheckedCreateWithoutWorldInput>
  }

  export type LocationCreateManyWorldInputEnvelope = {
    data: LocationCreateManyWorldInput | LocationCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type LoreFragmentCreateWithoutWorldInput = {
    id?: string
    title: string
    content: string
    type: string
    contextId?: string | null
    isRevealed?: boolean
    keywords?: LoreFragmentCreatekeywordsInput | string[]
  }

  export type LoreFragmentUncheckedCreateWithoutWorldInput = {
    id?: string
    title: string
    content: string
    type: string
    contextId?: string | null
    isRevealed?: boolean
    keywords?: LoreFragmentCreatekeywordsInput | string[]
  }

  export type LoreFragmentCreateOrConnectWithoutWorldInput = {
    where: LoreFragmentWhereUniqueInput
    create: XOR<LoreFragmentCreateWithoutWorldInput, LoreFragmentUncheckedCreateWithoutWorldInput>
  }

  export type LoreFragmentCreateManyWorldInputEnvelope = {
    data: LoreFragmentCreateManyWorldInput | LoreFragmentCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutWorldInput = {
    id?: string
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
    location?: LocationCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutWorldInput = {
    id?: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type EventCreateOrConnectWithoutWorldInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutWorldInput, EventUncheckedCreateWithoutWorldInput>
  }

  export type EventCreateManyWorldInputEnvelope = {
    data: EventCreateManyWorldInput | EventCreateManyWorldInput[]
    skipDuplicates?: boolean
  }

  export type CharacterWorldStateUpsertWithWhereUniqueWithoutWorldInput = {
    where: CharacterWorldStateWhereUniqueInput
    update: XOR<CharacterWorldStateUpdateWithoutWorldInput, CharacterWorldStateUncheckedUpdateWithoutWorldInput>
    create: XOR<CharacterWorldStateCreateWithoutWorldInput, CharacterWorldStateUncheckedCreateWithoutWorldInput>
  }

  export type CharacterWorldStateUpdateWithWhereUniqueWithoutWorldInput = {
    where: CharacterWorldStateWhereUniqueInput
    data: XOR<CharacterWorldStateUpdateWithoutWorldInput, CharacterWorldStateUncheckedUpdateWithoutWorldInput>
  }

  export type CharacterWorldStateUpdateManyWithWhereWithoutWorldInput = {
    where: CharacterWorldStateScalarWhereInput
    data: XOR<CharacterWorldStateUpdateManyMutationInput, CharacterWorldStateUncheckedUpdateManyWithoutWorldInput>
  }

  export type GameStateUpsertWithWhereUniqueWithoutWorldInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutWorldInput, GameStateUncheckedUpdateWithoutWorldInput>
    create: XOR<GameStateCreateWithoutWorldInput, GameStateUncheckedCreateWithoutWorldInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutWorldInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutWorldInput, GameStateUncheckedUpdateWithoutWorldInput>
  }

  export type GameStateUpdateManyWithWhereWithoutWorldInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutWorldInput>
  }

  export type LocationUpsertWithWhereUniqueWithoutWorldInput = {
    where: LocationWhereUniqueInput
    update: XOR<LocationUpdateWithoutWorldInput, LocationUncheckedUpdateWithoutWorldInput>
    create: XOR<LocationCreateWithoutWorldInput, LocationUncheckedCreateWithoutWorldInput>
  }

  export type LocationUpdateWithWhereUniqueWithoutWorldInput = {
    where: LocationWhereUniqueInput
    data: XOR<LocationUpdateWithoutWorldInput, LocationUncheckedUpdateWithoutWorldInput>
  }

  export type LocationUpdateManyWithWhereWithoutWorldInput = {
    where: LocationScalarWhereInput
    data: XOR<LocationUpdateManyMutationInput, LocationUncheckedUpdateManyWithoutWorldInput>
  }

  export type LocationScalarWhereInput = {
    AND?: LocationScalarWhereInput | LocationScalarWhereInput[]
    OR?: LocationScalarWhereInput[]
    NOT?: LocationScalarWhereInput | LocationScalarWhereInput[]
    id?: StringFilter<"Location"> | string
    worldId?: StringFilter<"Location"> | string
    name?: StringFilter<"Location"> | string
    description?: StringNullableFilter<"Location"> | string | null
    isStartingLocation?: BoolFilter<"Location"> | boolean
    connectedLocationIds?: StringNullableListFilter<"Location">
    thumbnailUrl?: StringNullableFilter<"Location"> | string | null
  }

  export type LoreFragmentUpsertWithWhereUniqueWithoutWorldInput = {
    where: LoreFragmentWhereUniqueInput
    update: XOR<LoreFragmentUpdateWithoutWorldInput, LoreFragmentUncheckedUpdateWithoutWorldInput>
    create: XOR<LoreFragmentCreateWithoutWorldInput, LoreFragmentUncheckedCreateWithoutWorldInput>
  }

  export type LoreFragmentUpdateWithWhereUniqueWithoutWorldInput = {
    where: LoreFragmentWhereUniqueInput
    data: XOR<LoreFragmentUpdateWithoutWorldInput, LoreFragmentUncheckedUpdateWithoutWorldInput>
  }

  export type LoreFragmentUpdateManyWithWhereWithoutWorldInput = {
    where: LoreFragmentScalarWhereInput
    data: XOR<LoreFragmentUpdateManyMutationInput, LoreFragmentUncheckedUpdateManyWithoutWorldInput>
  }

  export type LoreFragmentScalarWhereInput = {
    AND?: LoreFragmentScalarWhereInput | LoreFragmentScalarWhereInput[]
    OR?: LoreFragmentScalarWhereInput[]
    NOT?: LoreFragmentScalarWhereInput | LoreFragmentScalarWhereInput[]
    id?: StringFilter<"LoreFragment"> | string
    worldId?: StringFilter<"LoreFragment"> | string
    title?: StringFilter<"LoreFragment"> | string
    content?: StringFilter<"LoreFragment"> | string
    type?: StringFilter<"LoreFragment"> | string
    contextId?: StringNullableFilter<"LoreFragment"> | string | null
    isRevealed?: BoolFilter<"LoreFragment"> | boolean
    keywords?: StringNullableListFilter<"LoreFragment">
  }

  export type EventUpsertWithWhereUniqueWithoutWorldInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutWorldInput, EventUncheckedUpdateWithoutWorldInput>
    create: XOR<EventCreateWithoutWorldInput, EventUncheckedCreateWithoutWorldInput>
  }

  export type EventUpdateWithWhereUniqueWithoutWorldInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutWorldInput, EventUncheckedUpdateWithoutWorldInput>
  }

  export type EventUpdateManyWithWhereWithoutWorldInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutWorldInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    worldId?: StringFilter<"Event"> | string
    locationId?: StringNullableFilter<"Event"> | string | null
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    eventType?: StringFilter<"Event"> | string
    triggerConditions?: JsonFilter<"Event">
    outcomes?: JsonFilter<"Event">
    isRepeatable?: BoolFilter<"Event"> | boolean
  }

  export type CharacterCreateWithoutCharacterWorldStatesInput = {
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

  export type CharacterUncheckedCreateWithoutCharacterWorldStatesInput = {
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

  export type CharacterCreateOrConnectWithoutCharacterWorldStatesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutCharacterWorldStatesInput, CharacterUncheckedCreateWithoutCharacterWorldStatesInput>
  }

  export type WorldCreateWithoutCharacterStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    gameStates?: GameStateCreateNestedManyWithoutWorldInput
    locations?: LocationCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentCreateNestedManyWithoutWorldInput
    events?: EventCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutCharacterStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    gameStates?: GameStateUncheckedCreateNestedManyWithoutWorldInput
    locations?: LocationUncheckedCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    events?: EventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutCharacterStatesInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutCharacterStatesInput, WorldUncheckedCreateWithoutCharacterStatesInput>
  }

  export type CharacterUpsertWithoutCharacterWorldStatesInput = {
    update: XOR<CharacterUpdateWithoutCharacterWorldStatesInput, CharacterUncheckedUpdateWithoutCharacterWorldStatesInput>
    create: XOR<CharacterCreateWithoutCharacterWorldStatesInput, CharacterUncheckedCreateWithoutCharacterWorldStatesInput>
    where?: CharacterWhereInput
  }

  export type CharacterUpdateToOneWithWhereWithoutCharacterWorldStatesInput = {
    where?: CharacterWhereInput
    data: XOR<CharacterUpdateWithoutCharacterWorldStatesInput, CharacterUncheckedUpdateWithoutCharacterWorldStatesInput>
  }

  export type CharacterUpdateWithoutCharacterWorldStatesInput = {
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

  export type CharacterUncheckedUpdateWithoutCharacterWorldStatesInput = {
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

  export type WorldUpsertWithoutCharacterStatesInput = {
    update: XOR<WorldUpdateWithoutCharacterStatesInput, WorldUncheckedUpdateWithoutCharacterStatesInput>
    create: XOR<WorldCreateWithoutCharacterStatesInput, WorldUncheckedCreateWithoutCharacterStatesInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutCharacterStatesInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutCharacterStatesInput, WorldUncheckedUpdateWithoutCharacterStatesInput>
  }

  export type WorldUpdateWithoutCharacterStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameStates?: GameStateUpdateManyWithoutWorldNestedInput
    locations?: LocationUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUpdateManyWithoutWorldNestedInput
    events?: EventUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutCharacterStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gameStates?: GameStateUncheckedUpdateManyWithoutWorldNestedInput
    locations?: LocationUncheckedUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    events?: EventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateWithoutLocationsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateCreateNestedManyWithoutWorldInput
    gameStates?: GameStateCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentCreateNestedManyWithoutWorldInput
    events?: EventCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutLocationsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    events?: EventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutLocationsInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutLocationsInput, WorldUncheckedCreateWithoutLocationsInput>
  }

  export type EventCreateWithoutLocationInput = {
    id?: string
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
    world: WorldCreateNestedOneWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutLocationInput = {
    id?: string
    worldId: string
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type EventCreateOrConnectWithoutLocationInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput>
  }

  export type EventCreateManyLocationInputEnvelope = {
    data: EventCreateManyLocationInput | EventCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type GameStateCreateWithoutLocationInput = {
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutLocationInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
  }

  export type GameStateCreateOrConnectWithoutLocationInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutLocationInput, GameStateUncheckedCreateWithoutLocationInput>
  }

  export type GameStateCreateManyLocationInputEnvelope = {
    data: GameStateCreateManyLocationInput | GameStateCreateManyLocationInput[]
    skipDuplicates?: boolean
  }

  export type WorldUpsertWithoutLocationsInput = {
    update: XOR<WorldUpdateWithoutLocationsInput, WorldUncheckedUpdateWithoutLocationsInput>
    create: XOR<WorldCreateWithoutLocationsInput, WorldUncheckedCreateWithoutLocationsInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutLocationsInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutLocationsInput, WorldUncheckedUpdateWithoutLocationsInput>
  }

  export type WorldUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUpdateManyWithoutWorldNestedInput
    events?: EventUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutLocationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    events?: EventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type EventUpsertWithWhereUniqueWithoutLocationInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutLocationInput, EventUncheckedUpdateWithoutLocationInput>
    create: XOR<EventCreateWithoutLocationInput, EventUncheckedCreateWithoutLocationInput>
  }

  export type EventUpdateWithWhereUniqueWithoutLocationInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutLocationInput, EventUncheckedUpdateWithoutLocationInput>
  }

  export type EventUpdateManyWithWhereWithoutLocationInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutLocationInput>
  }

  export type GameStateUpsertWithWhereUniqueWithoutLocationInput = {
    where: GameStateWhereUniqueInput
    update: XOR<GameStateUpdateWithoutLocationInput, GameStateUncheckedUpdateWithoutLocationInput>
    create: XOR<GameStateCreateWithoutLocationInput, GameStateUncheckedCreateWithoutLocationInput>
  }

  export type GameStateUpdateWithWhereUniqueWithoutLocationInput = {
    where: GameStateWhereUniqueInput
    data: XOR<GameStateUpdateWithoutLocationInput, GameStateUncheckedUpdateWithoutLocationInput>
  }

  export type GameStateUpdateManyWithWhereWithoutLocationInput = {
    where: GameStateScalarWhereInput
    data: XOR<GameStateUpdateManyMutationInput, GameStateUncheckedUpdateManyWithoutLocationInput>
  }

  export type WorldCreateWithoutLoreFragmentsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateCreateNestedManyWithoutWorldInput
    gameStates?: GameStateCreateNestedManyWithoutWorldInput
    locations?: LocationCreateNestedManyWithoutWorldInput
    events?: EventCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutLoreFragmentsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutWorldInput
    locations?: LocationUncheckedCreateNestedManyWithoutWorldInput
    events?: EventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutLoreFragmentsInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutLoreFragmentsInput, WorldUncheckedCreateWithoutLoreFragmentsInput>
  }

  export type WorldUpsertWithoutLoreFragmentsInput = {
    update: XOR<WorldUpdateWithoutLoreFragmentsInput, WorldUncheckedUpdateWithoutLoreFragmentsInput>
    create: XOR<WorldCreateWithoutLoreFragmentsInput, WorldUncheckedCreateWithoutLoreFragmentsInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutLoreFragmentsInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutLoreFragmentsInput, WorldUncheckedUpdateWithoutLoreFragmentsInput>
  }

  export type WorldUpdateWithoutLoreFragmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUpdateManyWithoutWorldNestedInput
    locations?: LocationUpdateManyWithoutWorldNestedInput
    events?: EventUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutLoreFragmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutWorldNestedInput
    locations?: LocationUncheckedUpdateManyWithoutWorldNestedInput
    events?: EventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type WorldCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateCreateNestedManyWithoutWorldInput
    gameStates?: GameStateCreateNestedManyWithoutWorldInput
    locations?: LocationCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    gameStates?: GameStateUncheckedCreateNestedManyWithoutWorldInput
    locations?: LocationUncheckedCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutEventsInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutEventsInput, WorldUncheckedCreateWithoutEventsInput>
  }

  export type LocationCreateWithoutEventsInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    world: WorldCreateNestedOneWithoutLocationsInput
    gameStates?: GameStateCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutEventsInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    gameStates?: GameStateUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutEventsInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
  }

  export type WorldUpsertWithoutEventsInput = {
    update: XOR<WorldUpdateWithoutEventsInput, WorldUncheckedUpdateWithoutEventsInput>
    create: XOR<WorldCreateWithoutEventsInput, WorldUncheckedCreateWithoutEventsInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutEventsInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutEventsInput, WorldUncheckedUpdateWithoutEventsInput>
  }

  export type WorldUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUpdateManyWithoutWorldNestedInput
    locations?: LocationUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutWorldNestedInput
    locations?: LocationUncheckedUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type LocationUpsertWithoutEventsInput = {
    update: XOR<LocationUpdateWithoutEventsInput, LocationUncheckedUpdateWithoutEventsInput>
    create: XOR<LocationCreateWithoutEventsInput, LocationUncheckedCreateWithoutEventsInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutEventsInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutEventsInput, LocationUncheckedUpdateWithoutEventsInput>
  }

  export type LocationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    world?: WorldUpdateOneRequiredWithoutLocationsNestedInput
    gameStates?: GameStateUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    gameStates?: GameStateUncheckedUpdateManyWithoutLocationNestedInput
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
    characterWorldStates?: CharacterWorldStateCreateNestedManyWithoutCharacterInput
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
    characterWorldStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutSessionInput = {
    id?: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
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
    characterWorldStates?: CharacterWorldStateUpdateManyWithoutCharacterNestedInput
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
    characterWorldStates?: CharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
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
    characterWorldStates?: CharacterWorldStateCreateNestedManyWithoutCharacterInput
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
    characterWorldStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutCharacterInput
  }

  export type CharacterCreateOrConnectWithoutGameStatesInput = {
    where: CharacterWhereUniqueInput
    create: XOR<CharacterCreateWithoutGameStatesInput, CharacterUncheckedCreateWithoutGameStatesInput>
  }

  export type WorldCreateWithoutGameStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateCreateNestedManyWithoutWorldInput
    locations?: LocationCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentCreateNestedManyWithoutWorldInput
    events?: EventCreateNestedManyWithoutWorldInput
  }

  export type WorldUncheckedCreateWithoutGameStatesInput = {
    id?: string
    name: string
    description?: string | null
    thumbnailUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    characterStates?: CharacterWorldStateUncheckedCreateNestedManyWithoutWorldInput
    locations?: LocationUncheckedCreateNestedManyWithoutWorldInput
    loreFragments?: LoreFragmentUncheckedCreateNestedManyWithoutWorldInput
    events?: EventUncheckedCreateNestedManyWithoutWorldInput
  }

  export type WorldCreateOrConnectWithoutGameStatesInput = {
    where: WorldWhereUniqueInput
    create: XOR<WorldCreateWithoutGameStatesInput, WorldUncheckedCreateWithoutGameStatesInput>
  }

  export type LocationCreateWithoutGameStatesInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    world: WorldCreateNestedOneWithoutLocationsInput
    events?: EventCreateNestedManyWithoutLocationInput
  }

  export type LocationUncheckedCreateWithoutGameStatesInput = {
    id?: string
    worldId: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
    events?: EventUncheckedCreateNestedManyWithoutLocationInput
  }

  export type LocationCreateOrConnectWithoutGameStatesInput = {
    where: LocationWhereUniqueInput
    create: XOR<LocationCreateWithoutGameStatesInput, LocationUncheckedCreateWithoutGameStatesInput>
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

  export type NarrativeHistoryCreateWithoutGameStateInput = {
    id?: string
    type: string
    content: string
    timestamp?: Date | string
  }

  export type NarrativeHistoryUncheckedCreateWithoutGameStateInput = {
    id?: string
    type: string
    content: string
    timestamp?: Date | string
  }

  export type NarrativeHistoryCreateOrConnectWithoutGameStateInput = {
    where: NarrativeHistoryWhereUniqueInput
    create: XOR<NarrativeHistoryCreateWithoutGameStateInput, NarrativeHistoryUncheckedCreateWithoutGameStateInput>
  }

  export type NarrativeHistoryCreateManyGameStateInputEnvelope = {
    data: NarrativeHistoryCreateManyGameStateInput | NarrativeHistoryCreateManyGameStateInput[]
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
    characterWorldStates?: CharacterWorldStateUpdateManyWithoutCharacterNestedInput
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
    characterWorldStates?: CharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
  }

  export type WorldUpsertWithoutGameStatesInput = {
    update: XOR<WorldUpdateWithoutGameStatesInput, WorldUncheckedUpdateWithoutGameStatesInput>
    create: XOR<WorldCreateWithoutGameStatesInput, WorldUncheckedCreateWithoutGameStatesInput>
    where?: WorldWhereInput
  }

  export type WorldUpdateToOneWithWhereWithoutGameStatesInput = {
    where?: WorldWhereInput
    data: XOR<WorldUpdateWithoutGameStatesInput, WorldUncheckedUpdateWithoutGameStatesInput>
  }

  export type WorldUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUpdateManyWithoutWorldNestedInput
    locations?: LocationUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUpdateManyWithoutWorldNestedInput
    events?: EventUpdateManyWithoutWorldNestedInput
  }

  export type WorldUncheckedUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    characterStates?: CharacterWorldStateUncheckedUpdateManyWithoutWorldNestedInput
    locations?: LocationUncheckedUpdateManyWithoutWorldNestedInput
    loreFragments?: LoreFragmentUncheckedUpdateManyWithoutWorldNestedInput
    events?: EventUncheckedUpdateManyWithoutWorldNestedInput
  }

  export type LocationUpsertWithoutGameStatesInput = {
    update: XOR<LocationUpdateWithoutGameStatesInput, LocationUncheckedUpdateWithoutGameStatesInput>
    create: XOR<LocationCreateWithoutGameStatesInput, LocationUncheckedCreateWithoutGameStatesInput>
    where?: LocationWhereInput
  }

  export type LocationUpdateToOneWithWhereWithoutGameStatesInput = {
    where?: LocationWhereInput
    data: XOR<LocationUpdateWithoutGameStatesInput, LocationUncheckedUpdateWithoutGameStatesInput>
  }

  export type LocationUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    world?: WorldUpdateOneRequiredWithoutLocationsNestedInput
    events?: EventUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutGameStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
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

  export type NarrativeHistoryUpsertWithWhereUniqueWithoutGameStateInput = {
    where: NarrativeHistoryWhereUniqueInput
    update: XOR<NarrativeHistoryUpdateWithoutGameStateInput, NarrativeHistoryUncheckedUpdateWithoutGameStateInput>
    create: XOR<NarrativeHistoryCreateWithoutGameStateInput, NarrativeHistoryUncheckedCreateWithoutGameStateInput>
  }

  export type NarrativeHistoryUpdateWithWhereUniqueWithoutGameStateInput = {
    where: NarrativeHistoryWhereUniqueInput
    data: XOR<NarrativeHistoryUpdateWithoutGameStateInput, NarrativeHistoryUncheckedUpdateWithoutGameStateInput>
  }

  export type NarrativeHistoryUpdateManyWithWhereWithoutGameStateInput = {
    where: NarrativeHistoryScalarWhereInput
    data: XOR<NarrativeHistoryUpdateManyMutationInput, NarrativeHistoryUncheckedUpdateManyWithoutGameStateInput>
  }

  export type NarrativeHistoryScalarWhereInput = {
    AND?: NarrativeHistoryScalarWhereInput | NarrativeHistoryScalarWhereInput[]
    OR?: NarrativeHistoryScalarWhereInput[]
    NOT?: NarrativeHistoryScalarWhereInput | NarrativeHistoryScalarWhereInput[]
    id?: StringFilter<"NarrativeHistory"> | string
    gameStateId?: StringFilter<"NarrativeHistory"> | string
    type?: StringFilter<"NarrativeHistory"> | string
    content?: StringFilter<"NarrativeHistory"> | string
    timestamp?: DateTimeFilter<"NarrativeHistory"> | Date | string
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutNpcStatesInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutNpcStatesInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutDecisionsInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutDecisionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    narrativeHistory?: NarrativeHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutAiContextHistoryInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedCreateNestedManyWithoutGameStateInput
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutAiContextHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateCreateWithoutNarrativeHistoryInput = {
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
    world?: WorldCreateNestedOneWithoutGameStatesInput
    location?: LocationCreateNestedOneWithoutGameStatesInput
    npcStates?: NPCStateCreateNestedManyWithoutGameStateInput
    decisions?: DecisionCreateNestedManyWithoutGameStateInput
    aiContextHistory?: AIContextHistoryCreateNestedManyWithoutGameStateInput
  }

  export type GameStateUncheckedCreateWithoutNarrativeHistoryInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
    locationId?: string | null
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

  export type GameStateCreateOrConnectWithoutNarrativeHistoryInput = {
    where: GameStateWhereUniqueInput
    create: XOR<GameStateCreateWithoutNarrativeHistoryInput, GameStateUncheckedCreateWithoutNarrativeHistoryInput>
  }

  export type GameStateUpsertWithoutNarrativeHistoryInput = {
    update: XOR<GameStateUpdateWithoutNarrativeHistoryInput, GameStateUncheckedUpdateWithoutNarrativeHistoryInput>
    create: XOR<GameStateCreateWithoutNarrativeHistoryInput, GameStateUncheckedCreateWithoutNarrativeHistoryInput>
    where?: GameStateWhereInput
  }

  export type GameStateUpdateToOneWithWhereWithoutNarrativeHistoryInput = {
    where?: GameStateWhereInput
    data: XOR<GameStateUpdateWithoutNarrativeHistoryInput, GameStateUncheckedUpdateWithoutNarrativeHistoryInput>
  }

  export type GameStateUpdateWithoutNarrativeHistoryInput = {
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutNarrativeHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    characterWorldStates?: CharacterWorldStateUpdateManyWithoutCharacterNestedInput
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
    characterWorldStates?: CharacterWorldStateUncheckedUpdateManyWithoutCharacterNestedInput
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
    worldId?: string | null
    locationId?: string | null
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

  export type CharacterWorldStateCreateManyCharacterInput = {
    id?: string
    worldId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type CharacterWorldStateUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    world?: WorldUpdateOneRequiredWithoutCharacterStatesNestedInput
  }

  export type CharacterWorldStateUncheckedUpdateWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CharacterWorldStateUncheckedUpdateManyWithoutCharacterInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CharacterWorldStateCreateManyWorldInput = {
    id?: string
    characterId: string
    currentLocation?: string | null
    lastPlayedAt?: Date | string | null
  }

  export type GameStateCreateManyWorldInput = {
    id?: string
    sessionId: string
    characterId: string
    locationId?: string | null
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

  export type LocationCreateManyWorldInput = {
    id?: string
    name: string
    description?: string | null
    isStartingLocation?: boolean
    connectedLocationIds?: LocationCreateconnectedLocationIdsInput | string[]
    thumbnailUrl?: string | null
  }

  export type LoreFragmentCreateManyWorldInput = {
    id?: string
    title: string
    content: string
    type: string
    contextId?: string | null
    isRevealed?: boolean
    keywords?: LoreFragmentCreatekeywordsInput | string[]
  }

  export type EventCreateManyWorldInput = {
    id?: string
    locationId?: string | null
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type CharacterWorldStateUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    character?: CharacterUpdateOneRequiredWithoutCharacterWorldStatesNestedInput
  }

  export type CharacterWorldStateUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CharacterWorldStateUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    currentLocation?: NullableStringFieldUpdateOperationsInput | string | null
    lastPlayedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type GameStateUpdateWithoutWorldInput = {
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
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type LocationUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutLocationNestedInput
    gameStates?: GameStateUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutLocationNestedInput
    gameStates?: GameStateUncheckedUpdateManyWithoutLocationNestedInput
  }

  export type LocationUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isStartingLocation?: BoolFieldUpdateOperationsInput | boolean
    connectedLocationIds?: LocationUpdateconnectedLocationIdsInput | string[]
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LoreFragmentUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
  }

  export type LoreFragmentUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
  }

  export type LoreFragmentUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    contextId?: NullableStringFieldUpdateOperationsInput | string | null
    isRevealed?: BoolFieldUpdateOperationsInput | boolean
    keywords?: LoreFragmentUpdatekeywordsInput | string[]
  }

  export type EventUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
    location?: LocationUpdateOneWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUncheckedUpdateManyWithoutWorldInput = {
    id?: StringFieldUpdateOperationsInput | string
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventCreateManyLocationInput = {
    id?: string
    worldId: string
    title: string
    description: string
    eventType: string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: boolean
  }

  export type GameStateCreateManyLocationInput = {
    id?: string
    sessionId: string
    characterId: string
    worldId?: string | null
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

  export type EventUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
    world?: WorldUpdateOneRequiredWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EventUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    worldId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    triggerConditions?: JsonNullValueInput | InputJsonValue
    outcomes?: JsonNullValueInput | InputJsonValue
    isRepeatable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GameStateUpdateWithoutLocationInput = {
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateManyWithoutLocationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
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
    worldId?: string | null
    locationId?: string | null
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
    world?: WorldUpdateOneWithoutGameStatesNestedInput
    location?: LocationUpdateOneWithoutGameStatesNestedInput
    npcStates?: NPCStateUpdateManyWithoutGameStateNestedInput
    decisions?: DecisionUpdateManyWithoutGameStateNestedInput
    aiContextHistory?: AIContextHistoryUpdateManyWithoutGameStateNestedInput
    narrativeHistory?: NarrativeHistoryUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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
    narrativeHistory?: NarrativeHistoryUncheckedUpdateManyWithoutGameStateNestedInput
  }

  export type GameStateUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    characterId?: StringFieldUpdateOperationsInput | string
    worldId?: NullableStringFieldUpdateOperationsInput | string | null
    locationId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type NarrativeHistoryCreateManyGameStateInput = {
    id?: string
    type: string
    content: string
    timestamp?: Date | string
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

  export type NarrativeHistoryUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrativeHistoryUncheckedUpdateWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NarrativeHistoryUncheckedUpdateManyWithoutGameStateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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