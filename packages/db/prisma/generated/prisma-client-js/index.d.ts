
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
 * Model P2PTransferHistory
 * 
 */
export type P2PTransferHistory = $Result.DefaultSelection<Prisma.$P2PTransferHistoryPayload>
/**
 * Model Balance
 * 
 */
export type Balance = $Result.DefaultSelection<Prisma.$BalancePayload>
/**
 * Model onRampTransactions
 * 
 */
export type onRampTransactions = $Result.DefaultSelection<Prisma.$onRampTransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AuthType: {
  Email: 'Email',
  Google: 'Google',
  Github: 'Github'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]


export const onRampStatus: {
  Pending: 'Pending',
  Failure: 'Failure',
  Success: 'Success'
};

export type onRampStatus = (typeof onRampStatus)[keyof typeof onRampStatus]

}

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

export type onRampStatus = $Enums.onRampStatus

export const onRampStatus: typeof $Enums.onRampStatus

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
   * `prisma.p2PTransferHistory`: Exposes CRUD operations for the **P2PTransferHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more P2PTransferHistories
    * const p2PTransferHistories = await prisma.p2PTransferHistory.findMany()
    * ```
    */
  get p2PTransferHistory(): Prisma.P2PTransferHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.balance`: Exposes CRUD operations for the **Balance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Balances
    * const balances = await prisma.balance.findMany()
    * ```
    */
  get balance(): Prisma.BalanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onRampTransactions`: Exposes CRUD operations for the **onRampTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnRampTransactions
    * const onRampTransactions = await prisma.onRampTransactions.findMany()
    * ```
    */
  get onRampTransactions(): Prisma.onRampTransactionsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    P2PTransferHistory: 'P2PTransferHistory',
    Balance: 'Balance',
    onRampTransactions: 'onRampTransactions'
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
      modelProps: "user" | "p2PTransferHistory" | "balance" | "onRampTransactions"
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
      P2PTransferHistory: {
        payload: Prisma.$P2PTransferHistoryPayload<ExtArgs>
        fields: Prisma.P2PTransferHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.P2PTransferHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.P2PTransferHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>
          }
          findFirst: {
            args: Prisma.P2PTransferHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.P2PTransferHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>
          }
          findMany: {
            args: Prisma.P2PTransferHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>[]
          }
          create: {
            args: Prisma.P2PTransferHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>
          }
          createMany: {
            args: Prisma.P2PTransferHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.P2PTransferHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>[]
          }
          delete: {
            args: Prisma.P2PTransferHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>
          }
          update: {
            args: Prisma.P2PTransferHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>
          }
          deleteMany: {
            args: Prisma.P2PTransferHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.P2PTransferHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.P2PTransferHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>[]
          }
          upsert: {
            args: Prisma.P2PTransferHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$P2PTransferHistoryPayload>
          }
          aggregate: {
            args: Prisma.P2PTransferHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateP2PTransferHistory>
          }
          groupBy: {
            args: Prisma.P2PTransferHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<P2PTransferHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.P2PTransferHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<P2PTransferHistoryCountAggregateOutputType> | number
          }
        }
      }
      Balance: {
        payload: Prisma.$BalancePayload<ExtArgs>
        fields: Prisma.BalanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BalanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BalanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findFirst: {
            args: Prisma.BalanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BalanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          findMany: {
            args: Prisma.BalanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          create: {
            args: Prisma.BalanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          createMany: {
            args: Prisma.BalanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BalanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          delete: {
            args: Prisma.BalanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          update: {
            args: Prisma.BalanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          deleteMany: {
            args: Prisma.BalanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BalanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BalanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>[]
          }
          upsert: {
            args: Prisma.BalanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BalancePayload>
          }
          aggregate: {
            args: Prisma.BalanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBalance>
          }
          groupBy: {
            args: Prisma.BalanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BalanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BalanceCountArgs<ExtArgs>
            result: $Utils.Optional<BalanceCountAggregateOutputType> | number
          }
        }
      }
      onRampTransactions: {
        payload: Prisma.$onRampTransactionsPayload<ExtArgs>
        fields: Prisma.onRampTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.onRampTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.onRampTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>
          }
          findFirst: {
            args: Prisma.onRampTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.onRampTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>
          }
          findMany: {
            args: Prisma.onRampTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>[]
          }
          create: {
            args: Prisma.onRampTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>
          }
          createMany: {
            args: Prisma.onRampTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.onRampTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>[]
          }
          delete: {
            args: Prisma.onRampTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>
          }
          update: {
            args: Prisma.onRampTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.onRampTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.onRampTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.onRampTransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>[]
          }
          upsert: {
            args: Prisma.onRampTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$onRampTransactionsPayload>
          }
          aggregate: {
            args: Prisma.OnRampTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnRampTransactions>
          }
          groupBy: {
            args: Prisma.onRampTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.onRampTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<OnRampTransactionsCountAggregateOutputType> | number
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
    p2PTransferHistory?: P2PTransferHistoryOmit
    balance?: BalanceOmit
    onRampTransactions?: onRampTransactionsOmit
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
    onramptransactions: number
    balance: number
    sender: number
    receiver: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    onramptransactions?: boolean | UserCountOutputTypeCountOnramptransactionsArgs
    balance?: boolean | UserCountOutputTypeCountBalanceArgs
    sender?: boolean | UserCountOutputTypeCountSenderArgs
    receiver?: boolean | UserCountOutputTypeCountReceiverArgs
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
  export type UserCountOutputTypeCountOnramptransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: onRampTransactionsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBalanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSenderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2PTransferHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2PTransferHistoryWhereInput
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
    name: string | null
    authtype: $Enums.AuthType | null
    password: string | null
    phoneno: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    authtype: $Enums.AuthType | null
    password: string | null
    phoneno: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    authtype: number
    password: number
    phoneno: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    authtype?: true
    password?: true
    phoneno?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    authtype?: true
    password?: true
    phoneno?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    authtype?: true
    password?: true
    phoneno?: true
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
    name: string | null
    authtype: $Enums.AuthType
    password: string | null
    phoneno: string | null
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
    name?: boolean
    authtype?: boolean
    password?: boolean
    phoneno?: boolean
    onramptransactions?: boolean | User$onramptransactionsArgs<ExtArgs>
    balance?: boolean | User$balanceArgs<ExtArgs>
    sender?: boolean | User$senderArgs<ExtArgs>
    receiver?: boolean | User$receiverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    authtype?: boolean
    password?: boolean
    phoneno?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    authtype?: boolean
    password?: boolean
    phoneno?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    authtype?: boolean
    password?: boolean
    phoneno?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "authtype" | "password" | "phoneno", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    onramptransactions?: boolean | User$onramptransactionsArgs<ExtArgs>
    balance?: boolean | User$balanceArgs<ExtArgs>
    sender?: boolean | User$senderArgs<ExtArgs>
    receiver?: boolean | User$receiverArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      onramptransactions: Prisma.$onRampTransactionsPayload<ExtArgs>[]
      balance: Prisma.$BalancePayload<ExtArgs>[]
      sender: Prisma.$P2PTransferHistoryPayload<ExtArgs>[]
      receiver: Prisma.$P2PTransferHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      authtype: $Enums.AuthType
      password: string | null
      phoneno: string | null
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
    onramptransactions<T extends User$onramptransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$onramptransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    balance<T extends User$balanceArgs<ExtArgs> = {}>(args?: Subset<T, User$balanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sender<T extends User$senderArgs<ExtArgs> = {}>(args?: Subset<T, User$senderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receiver<T extends User$receiverArgs<ExtArgs> = {}>(args?: Subset<T, User$receiverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly authtype: FieldRef<"User", 'AuthType'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneno: FieldRef<"User", 'String'>
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
   * User.onramptransactions
   */
  export type User$onramptransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    where?: onRampTransactionsWhereInput
    orderBy?: onRampTransactionsOrderByWithRelationInput | onRampTransactionsOrderByWithRelationInput[]
    cursor?: onRampTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OnRampTransactionsScalarFieldEnum | OnRampTransactionsScalarFieldEnum[]
  }

  /**
   * User.balance
   */
  export type User$balanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    cursor?: BalanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * User.sender
   */
  export type User$senderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    where?: P2PTransferHistoryWhereInput
    orderBy?: P2PTransferHistoryOrderByWithRelationInput | P2PTransferHistoryOrderByWithRelationInput[]
    cursor?: P2PTransferHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2PTransferHistoryScalarFieldEnum | P2PTransferHistoryScalarFieldEnum[]
  }

  /**
   * User.receiver
   */
  export type User$receiverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    where?: P2PTransferHistoryWhereInput
    orderBy?: P2PTransferHistoryOrderByWithRelationInput | P2PTransferHistoryOrderByWithRelationInput[]
    cursor?: P2PTransferHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: P2PTransferHistoryScalarFieldEnum | P2PTransferHistoryScalarFieldEnum[]
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
   * Model P2PTransferHistory
   */

  export type AggregateP2PTransferHistory = {
    _count: P2PTransferHistoryCountAggregateOutputType | null
    _min: P2PTransferHistoryMinAggregateOutputType | null
    _max: P2PTransferHistoryMaxAggregateOutputType | null
  }

  export type P2PTransferHistoryMinAggregateOutputType = {
    id: string | null
    receiverID: string | null
    receiverName: string | null
    senderID: string | null
    senderName: string | null
  }

  export type P2PTransferHistoryMaxAggregateOutputType = {
    id: string | null
    receiverID: string | null
    receiverName: string | null
    senderID: string | null
    senderName: string | null
  }

  export type P2PTransferHistoryCountAggregateOutputType = {
    id: number
    receiverID: number
    receiverName: number
    senderID: number
    senderName: number
    _all: number
  }


  export type P2PTransferHistoryMinAggregateInputType = {
    id?: true
    receiverID?: true
    receiverName?: true
    senderID?: true
    senderName?: true
  }

  export type P2PTransferHistoryMaxAggregateInputType = {
    id?: true
    receiverID?: true
    receiverName?: true
    senderID?: true
    senderName?: true
  }

  export type P2PTransferHistoryCountAggregateInputType = {
    id?: true
    receiverID?: true
    receiverName?: true
    senderID?: true
    senderName?: true
    _all?: true
  }

  export type P2PTransferHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2PTransferHistory to aggregate.
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransferHistories to fetch.
     */
    orderBy?: P2PTransferHistoryOrderByWithRelationInput | P2PTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: P2PTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned P2PTransferHistories
    **/
    _count?: true | P2PTransferHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: P2PTransferHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: P2PTransferHistoryMaxAggregateInputType
  }

  export type GetP2PTransferHistoryAggregateType<T extends P2PTransferHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateP2PTransferHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateP2PTransferHistory[P]>
      : GetScalarType<T[P], AggregateP2PTransferHistory[P]>
  }




  export type P2PTransferHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: P2PTransferHistoryWhereInput
    orderBy?: P2PTransferHistoryOrderByWithAggregationInput | P2PTransferHistoryOrderByWithAggregationInput[]
    by: P2PTransferHistoryScalarFieldEnum[] | P2PTransferHistoryScalarFieldEnum
    having?: P2PTransferHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: P2PTransferHistoryCountAggregateInputType | true
    _min?: P2PTransferHistoryMinAggregateInputType
    _max?: P2PTransferHistoryMaxAggregateInputType
  }

  export type P2PTransferHistoryGroupByOutputType = {
    id: string
    receiverID: string
    receiverName: string
    senderID: string
    senderName: string
    _count: P2PTransferHistoryCountAggregateOutputType | null
    _min: P2PTransferHistoryMinAggregateOutputType | null
    _max: P2PTransferHistoryMaxAggregateOutputType | null
  }

  type GetP2PTransferHistoryGroupByPayload<T extends P2PTransferHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<P2PTransferHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof P2PTransferHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], P2PTransferHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], P2PTransferHistoryGroupByOutputType[P]>
        }
      >
    >


  export type P2PTransferHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverID?: boolean
    receiverName?: boolean
    senderID?: boolean
    senderName?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2PTransferHistory"]>

  export type P2PTransferHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverID?: boolean
    receiverName?: boolean
    senderID?: boolean
    senderName?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2PTransferHistory"]>

  export type P2PTransferHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    receiverID?: boolean
    receiverName?: boolean
    senderID?: boolean
    senderName?: boolean
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["p2PTransferHistory"]>

  export type P2PTransferHistorySelectScalar = {
    id?: boolean
    receiverID?: boolean
    receiverName?: boolean
    senderID?: boolean
    senderName?: boolean
  }

  export type P2PTransferHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "receiverID" | "receiverName" | "senderID" | "senderName", ExtArgs["result"]["p2PTransferHistory"]>
  export type P2PTransferHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type P2PTransferHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type P2PTransferHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $P2PTransferHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "P2PTransferHistory"
    objects: {
      receiver: Prisma.$UserPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      receiverID: string
      receiverName: string
      senderID: string
      senderName: string
    }, ExtArgs["result"]["p2PTransferHistory"]>
    composites: {}
  }

  type P2PTransferHistoryGetPayload<S extends boolean | null | undefined | P2PTransferHistoryDefaultArgs> = $Result.GetResult<Prisma.$P2PTransferHistoryPayload, S>

  type P2PTransferHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<P2PTransferHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: P2PTransferHistoryCountAggregateInputType | true
    }

  export interface P2PTransferHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['P2PTransferHistory'], meta: { name: 'P2PTransferHistory' } }
    /**
     * Find zero or one P2PTransferHistory that matches the filter.
     * @param {P2PTransferHistoryFindUniqueArgs} args - Arguments to find a P2PTransferHistory
     * @example
     * // Get one P2PTransferHistory
     * const p2PTransferHistory = await prisma.p2PTransferHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends P2PTransferHistoryFindUniqueArgs>(args: SelectSubset<T, P2PTransferHistoryFindUniqueArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one P2PTransferHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {P2PTransferHistoryFindUniqueOrThrowArgs} args - Arguments to find a P2PTransferHistory
     * @example
     * // Get one P2PTransferHistory
     * const p2PTransferHistory = await prisma.p2PTransferHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends P2PTransferHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, P2PTransferHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2PTransferHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryFindFirstArgs} args - Arguments to find a P2PTransferHistory
     * @example
     * // Get one P2PTransferHistory
     * const p2PTransferHistory = await prisma.p2PTransferHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends P2PTransferHistoryFindFirstArgs>(args?: SelectSubset<T, P2PTransferHistoryFindFirstArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first P2PTransferHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryFindFirstOrThrowArgs} args - Arguments to find a P2PTransferHistory
     * @example
     * // Get one P2PTransferHistory
     * const p2PTransferHistory = await prisma.p2PTransferHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends P2PTransferHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, P2PTransferHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more P2PTransferHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all P2PTransferHistories
     * const p2PTransferHistories = await prisma.p2PTransferHistory.findMany()
     * 
     * // Get first 10 P2PTransferHistories
     * const p2PTransferHistories = await prisma.p2PTransferHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const p2PTransferHistoryWithIdOnly = await prisma.p2PTransferHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends P2PTransferHistoryFindManyArgs>(args?: SelectSubset<T, P2PTransferHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a P2PTransferHistory.
     * @param {P2PTransferHistoryCreateArgs} args - Arguments to create a P2PTransferHistory.
     * @example
     * // Create one P2PTransferHistory
     * const P2PTransferHistory = await prisma.p2PTransferHistory.create({
     *   data: {
     *     // ... data to create a P2PTransferHistory
     *   }
     * })
     * 
     */
    create<T extends P2PTransferHistoryCreateArgs>(args: SelectSubset<T, P2PTransferHistoryCreateArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many P2PTransferHistories.
     * @param {P2PTransferHistoryCreateManyArgs} args - Arguments to create many P2PTransferHistories.
     * @example
     * // Create many P2PTransferHistories
     * const p2PTransferHistory = await prisma.p2PTransferHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends P2PTransferHistoryCreateManyArgs>(args?: SelectSubset<T, P2PTransferHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many P2PTransferHistories and returns the data saved in the database.
     * @param {P2PTransferHistoryCreateManyAndReturnArgs} args - Arguments to create many P2PTransferHistories.
     * @example
     * // Create many P2PTransferHistories
     * const p2PTransferHistory = await prisma.p2PTransferHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many P2PTransferHistories and only return the `id`
     * const p2PTransferHistoryWithIdOnly = await prisma.p2PTransferHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends P2PTransferHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, P2PTransferHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a P2PTransferHistory.
     * @param {P2PTransferHistoryDeleteArgs} args - Arguments to delete one P2PTransferHistory.
     * @example
     * // Delete one P2PTransferHistory
     * const P2PTransferHistory = await prisma.p2PTransferHistory.delete({
     *   where: {
     *     // ... filter to delete one P2PTransferHistory
     *   }
     * })
     * 
     */
    delete<T extends P2PTransferHistoryDeleteArgs>(args: SelectSubset<T, P2PTransferHistoryDeleteArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one P2PTransferHistory.
     * @param {P2PTransferHistoryUpdateArgs} args - Arguments to update one P2PTransferHistory.
     * @example
     * // Update one P2PTransferHistory
     * const p2PTransferHistory = await prisma.p2PTransferHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends P2PTransferHistoryUpdateArgs>(args: SelectSubset<T, P2PTransferHistoryUpdateArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more P2PTransferHistories.
     * @param {P2PTransferHistoryDeleteManyArgs} args - Arguments to filter P2PTransferHistories to delete.
     * @example
     * // Delete a few P2PTransferHistories
     * const { count } = await prisma.p2PTransferHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends P2PTransferHistoryDeleteManyArgs>(args?: SelectSubset<T, P2PTransferHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2PTransferHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many P2PTransferHistories
     * const p2PTransferHistory = await prisma.p2PTransferHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends P2PTransferHistoryUpdateManyArgs>(args: SelectSubset<T, P2PTransferHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more P2PTransferHistories and returns the data updated in the database.
     * @param {P2PTransferHistoryUpdateManyAndReturnArgs} args - Arguments to update many P2PTransferHistories.
     * @example
     * // Update many P2PTransferHistories
     * const p2PTransferHistory = await prisma.p2PTransferHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more P2PTransferHistories and only return the `id`
     * const p2PTransferHistoryWithIdOnly = await prisma.p2PTransferHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends P2PTransferHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, P2PTransferHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one P2PTransferHistory.
     * @param {P2PTransferHistoryUpsertArgs} args - Arguments to update or create a P2PTransferHistory.
     * @example
     * // Update or create a P2PTransferHistory
     * const p2PTransferHistory = await prisma.p2PTransferHistory.upsert({
     *   create: {
     *     // ... data to create a P2PTransferHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the P2PTransferHistory we want to update
     *   }
     * })
     */
    upsert<T extends P2PTransferHistoryUpsertArgs>(args: SelectSubset<T, P2PTransferHistoryUpsertArgs<ExtArgs>>): Prisma__P2PTransferHistoryClient<$Result.GetResult<Prisma.$P2PTransferHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of P2PTransferHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryCountArgs} args - Arguments to filter P2PTransferHistories to count.
     * @example
     * // Count the number of P2PTransferHistories
     * const count = await prisma.p2PTransferHistory.count({
     *   where: {
     *     // ... the filter for the P2PTransferHistories we want to count
     *   }
     * })
    **/
    count<T extends P2PTransferHistoryCountArgs>(
      args?: Subset<T, P2PTransferHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], P2PTransferHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a P2PTransferHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends P2PTransferHistoryAggregateArgs>(args: Subset<T, P2PTransferHistoryAggregateArgs>): Prisma.PrismaPromise<GetP2PTransferHistoryAggregateType<T>>

    /**
     * Group by P2PTransferHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {P2PTransferHistoryGroupByArgs} args - Group by arguments.
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
      T extends P2PTransferHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: P2PTransferHistoryGroupByArgs['orderBy'] }
        : { orderBy?: P2PTransferHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, P2PTransferHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetP2PTransferHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the P2PTransferHistory model
   */
  readonly fields: P2PTransferHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for P2PTransferHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__P2PTransferHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the P2PTransferHistory model
   */
  interface P2PTransferHistoryFieldRefs {
    readonly id: FieldRef<"P2PTransferHistory", 'String'>
    readonly receiverID: FieldRef<"P2PTransferHistory", 'String'>
    readonly receiverName: FieldRef<"P2PTransferHistory", 'String'>
    readonly senderID: FieldRef<"P2PTransferHistory", 'String'>
    readonly senderName: FieldRef<"P2PTransferHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * P2PTransferHistory findUnique
   */
  export type P2PTransferHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransferHistory to fetch.
     */
    where: P2PTransferHistoryWhereUniqueInput
  }

  /**
   * P2PTransferHistory findUniqueOrThrow
   */
  export type P2PTransferHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransferHistory to fetch.
     */
    where: P2PTransferHistoryWhereUniqueInput
  }

  /**
   * P2PTransferHistory findFirst
   */
  export type P2PTransferHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransferHistory to fetch.
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransferHistories to fetch.
     */
    orderBy?: P2PTransferHistoryOrderByWithRelationInput | P2PTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2PTransferHistories.
     */
    cursor?: P2PTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2PTransferHistories.
     */
    distinct?: P2PTransferHistoryScalarFieldEnum | P2PTransferHistoryScalarFieldEnum[]
  }

  /**
   * P2PTransferHistory findFirstOrThrow
   */
  export type P2PTransferHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransferHistory to fetch.
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransferHistories to fetch.
     */
    orderBy?: P2PTransferHistoryOrderByWithRelationInput | P2PTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for P2PTransferHistories.
     */
    cursor?: P2PTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransferHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of P2PTransferHistories.
     */
    distinct?: P2PTransferHistoryScalarFieldEnum | P2PTransferHistoryScalarFieldEnum[]
  }

  /**
   * P2PTransferHistory findMany
   */
  export type P2PTransferHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter, which P2PTransferHistories to fetch.
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of P2PTransferHistories to fetch.
     */
    orderBy?: P2PTransferHistoryOrderByWithRelationInput | P2PTransferHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing P2PTransferHistories.
     */
    cursor?: P2PTransferHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` P2PTransferHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` P2PTransferHistories.
     */
    skip?: number
    distinct?: P2PTransferHistoryScalarFieldEnum | P2PTransferHistoryScalarFieldEnum[]
  }

  /**
   * P2PTransferHistory create
   */
  export type P2PTransferHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a P2PTransferHistory.
     */
    data: XOR<P2PTransferHistoryCreateInput, P2PTransferHistoryUncheckedCreateInput>
  }

  /**
   * P2PTransferHistory createMany
   */
  export type P2PTransferHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many P2PTransferHistories.
     */
    data: P2PTransferHistoryCreateManyInput | P2PTransferHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * P2PTransferHistory createManyAndReturn
   */
  export type P2PTransferHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many P2PTransferHistories.
     */
    data: P2PTransferHistoryCreateManyInput | P2PTransferHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * P2PTransferHistory update
   */
  export type P2PTransferHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a P2PTransferHistory.
     */
    data: XOR<P2PTransferHistoryUpdateInput, P2PTransferHistoryUncheckedUpdateInput>
    /**
     * Choose, which P2PTransferHistory to update.
     */
    where: P2PTransferHistoryWhereUniqueInput
  }

  /**
   * P2PTransferHistory updateMany
   */
  export type P2PTransferHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update P2PTransferHistories.
     */
    data: XOR<P2PTransferHistoryUpdateManyMutationInput, P2PTransferHistoryUncheckedUpdateManyInput>
    /**
     * Filter which P2PTransferHistories to update
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * Limit how many P2PTransferHistories to update.
     */
    limit?: number
  }

  /**
   * P2PTransferHistory updateManyAndReturn
   */
  export type P2PTransferHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * The data used to update P2PTransferHistories.
     */
    data: XOR<P2PTransferHistoryUpdateManyMutationInput, P2PTransferHistoryUncheckedUpdateManyInput>
    /**
     * Filter which P2PTransferHistories to update
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * Limit how many P2PTransferHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * P2PTransferHistory upsert
   */
  export type P2PTransferHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the P2PTransferHistory to update in case it exists.
     */
    where: P2PTransferHistoryWhereUniqueInput
    /**
     * In case the P2PTransferHistory found by the `where` argument doesn't exist, create a new P2PTransferHistory with this data.
     */
    create: XOR<P2PTransferHistoryCreateInput, P2PTransferHistoryUncheckedCreateInput>
    /**
     * In case the P2PTransferHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<P2PTransferHistoryUpdateInput, P2PTransferHistoryUncheckedUpdateInput>
  }

  /**
   * P2PTransferHistory delete
   */
  export type P2PTransferHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
    /**
     * Filter which P2PTransferHistory to delete.
     */
    where: P2PTransferHistoryWhereUniqueInput
  }

  /**
   * P2PTransferHistory deleteMany
   */
  export type P2PTransferHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which P2PTransferHistories to delete
     */
    where?: P2PTransferHistoryWhereInput
    /**
     * Limit how many P2PTransferHistories to delete.
     */
    limit?: number
  }

  /**
   * P2PTransferHistory without action
   */
  export type P2PTransferHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the P2PTransferHistory
     */
    select?: P2PTransferHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the P2PTransferHistory
     */
    omit?: P2PTransferHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: P2PTransferHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Balance
   */

  export type AggregateBalance = {
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  export type BalanceAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceSumAggregateOutputType = {
    id: number | null
    amount: number | null
    locked: number | null
  }

  export type BalanceMinAggregateOutputType = {
    id: number | null
    amount: number | null
    locked: number | null
    userId: string | null
  }

  export type BalanceMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    locked: number | null
    userId: string | null
  }

  export type BalanceCountAggregateOutputType = {
    id: number
    amount: number
    locked: number
    userId: number
    _all: number
  }


  export type BalanceAvgAggregateInputType = {
    id?: true
    amount?: true
    locked?: true
  }

  export type BalanceSumAggregateInputType = {
    id?: true
    amount?: true
    locked?: true
  }

  export type BalanceMinAggregateInputType = {
    id?: true
    amount?: true
    locked?: true
    userId?: true
  }

  export type BalanceMaxAggregateInputType = {
    id?: true
    amount?: true
    locked?: true
    userId?: true
  }

  export type BalanceCountAggregateInputType = {
    id?: true
    amount?: true
    locked?: true
    userId?: true
    _all?: true
  }

  export type BalanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balance to aggregate.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Balances
    **/
    _count?: true | BalanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BalanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BalanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BalanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BalanceMaxAggregateInputType
  }

  export type GetBalanceAggregateType<T extends BalanceAggregateArgs> = {
        [P in keyof T & keyof AggregateBalance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBalance[P]>
      : GetScalarType<T[P], AggregateBalance[P]>
  }




  export type BalanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BalanceWhereInput
    orderBy?: BalanceOrderByWithAggregationInput | BalanceOrderByWithAggregationInput[]
    by: BalanceScalarFieldEnum[] | BalanceScalarFieldEnum
    having?: BalanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BalanceCountAggregateInputType | true
    _avg?: BalanceAvgAggregateInputType
    _sum?: BalanceSumAggregateInputType
    _min?: BalanceMinAggregateInputType
    _max?: BalanceMaxAggregateInputType
  }

  export type BalanceGroupByOutputType = {
    id: number
    amount: number
    locked: number
    userId: string
    _count: BalanceCountAggregateOutputType | null
    _avg: BalanceAvgAggregateOutputType | null
    _sum: BalanceSumAggregateOutputType | null
    _min: BalanceMinAggregateOutputType | null
    _max: BalanceMaxAggregateOutputType | null
  }

  type GetBalanceGroupByPayload<T extends BalanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BalanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BalanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BalanceGroupByOutputType[P]>
            : GetScalarType<T[P], BalanceGroupByOutputType[P]>
        }
      >
    >


  export type BalanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    locked?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    locked?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    locked?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["balance"]>

  export type BalanceSelectScalar = {
    id?: boolean
    amount?: boolean
    locked?: boolean
    userId?: boolean
  }

  export type BalanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "locked" | "userId", ExtArgs["result"]["balance"]>
  export type BalanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BalanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BalancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Balance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      locked: number
      userId: string
    }, ExtArgs["result"]["balance"]>
    composites: {}
  }

  type BalanceGetPayload<S extends boolean | null | undefined | BalanceDefaultArgs> = $Result.GetResult<Prisma.$BalancePayload, S>

  type BalanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BalanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BalanceCountAggregateInputType | true
    }

  export interface BalanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Balance'], meta: { name: 'Balance' } }
    /**
     * Find zero or one Balance that matches the filter.
     * @param {BalanceFindUniqueArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BalanceFindUniqueArgs>(args: SelectSubset<T, BalanceFindUniqueArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Balance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BalanceFindUniqueOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BalanceFindUniqueOrThrowArgs>(args: SelectSubset<T, BalanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BalanceFindFirstArgs>(args?: SelectSubset<T, BalanceFindFirstArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Balance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindFirstOrThrowArgs} args - Arguments to find a Balance
     * @example
     * // Get one Balance
     * const balance = await prisma.balance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BalanceFindFirstOrThrowArgs>(args?: SelectSubset<T, BalanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Balances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Balances
     * const balances = await prisma.balance.findMany()
     * 
     * // Get first 10 Balances
     * const balances = await prisma.balance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const balanceWithIdOnly = await prisma.balance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BalanceFindManyArgs>(args?: SelectSubset<T, BalanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Balance.
     * @param {BalanceCreateArgs} args - Arguments to create a Balance.
     * @example
     * // Create one Balance
     * const Balance = await prisma.balance.create({
     *   data: {
     *     // ... data to create a Balance
     *   }
     * })
     * 
     */
    create<T extends BalanceCreateArgs>(args: SelectSubset<T, BalanceCreateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Balances.
     * @param {BalanceCreateManyArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BalanceCreateManyArgs>(args?: SelectSubset<T, BalanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Balances and returns the data saved in the database.
     * @param {BalanceCreateManyAndReturnArgs} args - Arguments to create many Balances.
     * @example
     * // Create many Balances
     * const balance = await prisma.balance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BalanceCreateManyAndReturnArgs>(args?: SelectSubset<T, BalanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Balance.
     * @param {BalanceDeleteArgs} args - Arguments to delete one Balance.
     * @example
     * // Delete one Balance
     * const Balance = await prisma.balance.delete({
     *   where: {
     *     // ... filter to delete one Balance
     *   }
     * })
     * 
     */
    delete<T extends BalanceDeleteArgs>(args: SelectSubset<T, BalanceDeleteArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Balance.
     * @param {BalanceUpdateArgs} args - Arguments to update one Balance.
     * @example
     * // Update one Balance
     * const balance = await prisma.balance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BalanceUpdateArgs>(args: SelectSubset<T, BalanceUpdateArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Balances.
     * @param {BalanceDeleteManyArgs} args - Arguments to filter Balances to delete.
     * @example
     * // Delete a few Balances
     * const { count } = await prisma.balance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BalanceDeleteManyArgs>(args?: SelectSubset<T, BalanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BalanceUpdateManyArgs>(args: SelectSubset<T, BalanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Balances and returns the data updated in the database.
     * @param {BalanceUpdateManyAndReturnArgs} args - Arguments to update many Balances.
     * @example
     * // Update many Balances
     * const balance = await prisma.balance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Balances and only return the `id`
     * const balanceWithIdOnly = await prisma.balance.updateManyAndReturn({
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
    updateManyAndReturn<T extends BalanceUpdateManyAndReturnArgs>(args: SelectSubset<T, BalanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Balance.
     * @param {BalanceUpsertArgs} args - Arguments to update or create a Balance.
     * @example
     * // Update or create a Balance
     * const balance = await prisma.balance.upsert({
     *   create: {
     *     // ... data to create a Balance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Balance we want to update
     *   }
     * })
     */
    upsert<T extends BalanceUpsertArgs>(args: SelectSubset<T, BalanceUpsertArgs<ExtArgs>>): Prisma__BalanceClient<$Result.GetResult<Prisma.$BalancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Balances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceCountArgs} args - Arguments to filter Balances to count.
     * @example
     * // Count the number of Balances
     * const count = await prisma.balance.count({
     *   where: {
     *     // ... the filter for the Balances we want to count
     *   }
     * })
    **/
    count<T extends BalanceCountArgs>(
      args?: Subset<T, BalanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BalanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BalanceAggregateArgs>(args: Subset<T, BalanceAggregateArgs>): Prisma.PrismaPromise<GetBalanceAggregateType<T>>

    /**
     * Group by Balance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BalanceGroupByArgs} args - Group by arguments.
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
      T extends BalanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BalanceGroupByArgs['orderBy'] }
        : { orderBy?: BalanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BalanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBalanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Balance model
   */
  readonly fields: BalanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Balance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BalanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Balance model
   */
  interface BalanceFieldRefs {
    readonly id: FieldRef<"Balance", 'Int'>
    readonly amount: FieldRef<"Balance", 'Int'>
    readonly locked: FieldRef<"Balance", 'Int'>
    readonly userId: FieldRef<"Balance", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Balance findUnique
   */
  export type BalanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findUniqueOrThrow
   */
  export type BalanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance findFirst
   */
  export type BalanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findFirstOrThrow
   */
  export type BalanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balance to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Balances.
     */
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance findMany
   */
  export type BalanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter, which Balances to fetch.
     */
    where?: BalanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Balances to fetch.
     */
    orderBy?: BalanceOrderByWithRelationInput | BalanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Balances.
     */
    cursor?: BalanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Balances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Balances.
     */
    skip?: number
    distinct?: BalanceScalarFieldEnum | BalanceScalarFieldEnum[]
  }

  /**
   * Balance create
   */
  export type BalanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Balance.
     */
    data: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
  }

  /**
   * Balance createMany
   */
  export type BalanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Balance createManyAndReturn
   */
  export type BalanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to create many Balances.
     */
    data: BalanceCreateManyInput | BalanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance update
   */
  export type BalanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Balance.
     */
    data: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
    /**
     * Choose, which Balance to update.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance updateMany
   */
  export type BalanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
  }

  /**
   * Balance updateManyAndReturn
   */
  export type BalanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * The data used to update Balances.
     */
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyInput>
    /**
     * Filter which Balances to update
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Balance upsert
   */
  export type BalanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Balance to update in case it exists.
     */
    where: BalanceWhereUniqueInput
    /**
     * In case the Balance found by the `where` argument doesn't exist, create a new Balance with this data.
     */
    create: XOR<BalanceCreateInput, BalanceUncheckedCreateInput>
    /**
     * In case the Balance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BalanceUpdateInput, BalanceUncheckedUpdateInput>
  }

  /**
   * Balance delete
   */
  export type BalanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
    /**
     * Filter which Balance to delete.
     */
    where: BalanceWhereUniqueInput
  }

  /**
   * Balance deleteMany
   */
  export type BalanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Balances to delete
     */
    where?: BalanceWhereInput
    /**
     * Limit how many Balances to delete.
     */
    limit?: number
  }

  /**
   * Balance without action
   */
  export type BalanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Balance
     */
    select?: BalanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Balance
     */
    omit?: BalanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BalanceInclude<ExtArgs> | null
  }


  /**
   * Model onRampTransactions
   */

  export type AggregateOnRampTransactions = {
    _count: OnRampTransactionsCountAggregateOutputType | null
    _avg: OnRampTransactionsAvgAggregateOutputType | null
    _sum: OnRampTransactionsSumAggregateOutputType | null
    _min: OnRampTransactionsMinAggregateOutputType | null
    _max: OnRampTransactionsMaxAggregateOutputType | null
  }

  export type OnRampTransactionsAvgAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type OnRampTransactionsSumAggregateOutputType = {
    id: number | null
    amount: number | null
  }

  export type OnRampTransactionsMinAggregateOutputType = {
    id: number | null
    status: $Enums.onRampStatus | null
    token: string | null
    provider: string | null
    amount: number | null
    starttime: Date | null
    userId: string | null
  }

  export type OnRampTransactionsMaxAggregateOutputType = {
    id: number | null
    status: $Enums.onRampStatus | null
    token: string | null
    provider: string | null
    amount: number | null
    starttime: Date | null
    userId: string | null
  }

  export type OnRampTransactionsCountAggregateOutputType = {
    id: number
    status: number
    token: number
    provider: number
    amount: number
    starttime: number
    userId: number
    _all: number
  }


  export type OnRampTransactionsAvgAggregateInputType = {
    id?: true
    amount?: true
  }

  export type OnRampTransactionsSumAggregateInputType = {
    id?: true
    amount?: true
  }

  export type OnRampTransactionsMinAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    starttime?: true
    userId?: true
  }

  export type OnRampTransactionsMaxAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    starttime?: true
    userId?: true
  }

  export type OnRampTransactionsCountAggregateInputType = {
    id?: true
    status?: true
    token?: true
    provider?: true
    amount?: true
    starttime?: true
    userId?: true
    _all?: true
  }

  export type OnRampTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which onRampTransactions to aggregate.
     */
    where?: onRampTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of onRampTransactions to fetch.
     */
    orderBy?: onRampTransactionsOrderByWithRelationInput | onRampTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: onRampTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` onRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` onRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned onRampTransactions
    **/
    _count?: true | OnRampTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnRampTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnRampTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnRampTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnRampTransactionsMaxAggregateInputType
  }

  export type GetOnRampTransactionsAggregateType<T extends OnRampTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateOnRampTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnRampTransactions[P]>
      : GetScalarType<T[P], AggregateOnRampTransactions[P]>
  }




  export type onRampTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: onRampTransactionsWhereInput
    orderBy?: onRampTransactionsOrderByWithAggregationInput | onRampTransactionsOrderByWithAggregationInput[]
    by: OnRampTransactionsScalarFieldEnum[] | OnRampTransactionsScalarFieldEnum
    having?: onRampTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnRampTransactionsCountAggregateInputType | true
    _avg?: OnRampTransactionsAvgAggregateInputType
    _sum?: OnRampTransactionsSumAggregateInputType
    _min?: OnRampTransactionsMinAggregateInputType
    _max?: OnRampTransactionsMaxAggregateInputType
  }

  export type OnRampTransactionsGroupByOutputType = {
    id: number
    status: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date
    userId: string
    _count: OnRampTransactionsCountAggregateOutputType | null
    _avg: OnRampTransactionsAvgAggregateOutputType | null
    _sum: OnRampTransactionsSumAggregateOutputType | null
    _min: OnRampTransactionsMinAggregateOutputType | null
    _max: OnRampTransactionsMaxAggregateOutputType | null
  }

  type GetOnRampTransactionsGroupByPayload<T extends onRampTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnRampTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnRampTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnRampTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], OnRampTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type onRampTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    starttime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransactions"]>

  export type onRampTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    starttime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransactions"]>

  export type onRampTransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    starttime?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["onRampTransactions"]>

  export type onRampTransactionsSelectScalar = {
    id?: boolean
    status?: boolean
    token?: boolean
    provider?: boolean
    amount?: boolean
    starttime?: boolean
    userId?: boolean
  }

  export type onRampTransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "token" | "provider" | "amount" | "starttime" | "userId", ExtArgs["result"]["onRampTransactions"]>
  export type onRampTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type onRampTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type onRampTransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $onRampTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "onRampTransactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.onRampStatus
      token: string
      provider: string
      amount: number
      starttime: Date
      userId: string
    }, ExtArgs["result"]["onRampTransactions"]>
    composites: {}
  }

  type onRampTransactionsGetPayload<S extends boolean | null | undefined | onRampTransactionsDefaultArgs> = $Result.GetResult<Prisma.$onRampTransactionsPayload, S>

  type onRampTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<onRampTransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnRampTransactionsCountAggregateInputType | true
    }

  export interface onRampTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['onRampTransactions'], meta: { name: 'onRampTransactions' } }
    /**
     * Find zero or one OnRampTransactions that matches the filter.
     * @param {onRampTransactionsFindUniqueArgs} args - Arguments to find a OnRampTransactions
     * @example
     * // Get one OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends onRampTransactionsFindUniqueArgs>(args: SelectSubset<T, onRampTransactionsFindUniqueArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OnRampTransactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {onRampTransactionsFindUniqueOrThrowArgs} args - Arguments to find a OnRampTransactions
     * @example
     * // Get one OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends onRampTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, onRampTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {onRampTransactionsFindFirstArgs} args - Arguments to find a OnRampTransactions
     * @example
     * // Get one OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends onRampTransactionsFindFirstArgs>(args?: SelectSubset<T, onRampTransactionsFindFirstArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnRampTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {onRampTransactionsFindFirstOrThrowArgs} args - Arguments to find a OnRampTransactions
     * @example
     * // Get one OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends onRampTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, onRampTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OnRampTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {onRampTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.findMany()
     * 
     * // Get first 10 OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onRampTransactionsWithIdOnly = await prisma.onRampTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends onRampTransactionsFindManyArgs>(args?: SelectSubset<T, onRampTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OnRampTransactions.
     * @param {onRampTransactionsCreateArgs} args - Arguments to create a OnRampTransactions.
     * @example
     * // Create one OnRampTransactions
     * const OnRampTransactions = await prisma.onRampTransactions.create({
     *   data: {
     *     // ... data to create a OnRampTransactions
     *   }
     * })
     * 
     */
    create<T extends onRampTransactionsCreateArgs>(args: SelectSubset<T, onRampTransactionsCreateArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OnRampTransactions.
     * @param {onRampTransactionsCreateManyArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends onRampTransactionsCreateManyArgs>(args?: SelectSubset<T, onRampTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnRampTransactions and returns the data saved in the database.
     * @param {onRampTransactionsCreateManyAndReturnArgs} args - Arguments to create many OnRampTransactions.
     * @example
     * // Create many OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnRampTransactions and only return the `id`
     * const onRampTransactionsWithIdOnly = await prisma.onRampTransactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends onRampTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, onRampTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OnRampTransactions.
     * @param {onRampTransactionsDeleteArgs} args - Arguments to delete one OnRampTransactions.
     * @example
     * // Delete one OnRampTransactions
     * const OnRampTransactions = await prisma.onRampTransactions.delete({
     *   where: {
     *     // ... filter to delete one OnRampTransactions
     *   }
     * })
     * 
     */
    delete<T extends onRampTransactionsDeleteArgs>(args: SelectSubset<T, onRampTransactionsDeleteArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OnRampTransactions.
     * @param {onRampTransactionsUpdateArgs} args - Arguments to update one OnRampTransactions.
     * @example
     * // Update one OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends onRampTransactionsUpdateArgs>(args: SelectSubset<T, onRampTransactionsUpdateArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OnRampTransactions.
     * @param {onRampTransactionsDeleteManyArgs} args - Arguments to filter OnRampTransactions to delete.
     * @example
     * // Delete a few OnRampTransactions
     * const { count } = await prisma.onRampTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends onRampTransactionsDeleteManyArgs>(args?: SelectSubset<T, onRampTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {onRampTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends onRampTransactionsUpdateManyArgs>(args: SelectSubset<T, onRampTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnRampTransactions and returns the data updated in the database.
     * @param {onRampTransactionsUpdateManyAndReturnArgs} args - Arguments to update many OnRampTransactions.
     * @example
     * // Update many OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OnRampTransactions and only return the `id`
     * const onRampTransactionsWithIdOnly = await prisma.onRampTransactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends onRampTransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, onRampTransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OnRampTransactions.
     * @param {onRampTransactionsUpsertArgs} args - Arguments to update or create a OnRampTransactions.
     * @example
     * // Update or create a OnRampTransactions
     * const onRampTransactions = await prisma.onRampTransactions.upsert({
     *   create: {
     *     // ... data to create a OnRampTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnRampTransactions we want to update
     *   }
     * })
     */
    upsert<T extends onRampTransactionsUpsertArgs>(args: SelectSubset<T, onRampTransactionsUpsertArgs<ExtArgs>>): Prisma__onRampTransactionsClient<$Result.GetResult<Prisma.$onRampTransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {onRampTransactionsCountArgs} args - Arguments to filter OnRampTransactions to count.
     * @example
     * // Count the number of OnRampTransactions
     * const count = await prisma.onRampTransactions.count({
     *   where: {
     *     // ... the filter for the OnRampTransactions we want to count
     *   }
     * })
    **/
    count<T extends onRampTransactionsCountArgs>(
      args?: Subset<T, onRampTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnRampTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnRampTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OnRampTransactionsAggregateArgs>(args: Subset<T, OnRampTransactionsAggregateArgs>): Prisma.PrismaPromise<GetOnRampTransactionsAggregateType<T>>

    /**
     * Group by OnRampTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {onRampTransactionsGroupByArgs} args - Group by arguments.
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
      T extends onRampTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: onRampTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: onRampTransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, onRampTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnRampTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the onRampTransactions model
   */
  readonly fields: onRampTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for onRampTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__onRampTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the onRampTransactions model
   */
  interface onRampTransactionsFieldRefs {
    readonly id: FieldRef<"onRampTransactions", 'Int'>
    readonly status: FieldRef<"onRampTransactions", 'onRampStatus'>
    readonly token: FieldRef<"onRampTransactions", 'String'>
    readonly provider: FieldRef<"onRampTransactions", 'String'>
    readonly amount: FieldRef<"onRampTransactions", 'Int'>
    readonly starttime: FieldRef<"onRampTransactions", 'DateTime'>
    readonly userId: FieldRef<"onRampTransactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * onRampTransactions findUnique
   */
  export type onRampTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which onRampTransactions to fetch.
     */
    where: onRampTransactionsWhereUniqueInput
  }

  /**
   * onRampTransactions findUniqueOrThrow
   */
  export type onRampTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which onRampTransactions to fetch.
     */
    where: onRampTransactionsWhereUniqueInput
  }

  /**
   * onRampTransactions findFirst
   */
  export type onRampTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which onRampTransactions to fetch.
     */
    where?: onRampTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of onRampTransactions to fetch.
     */
    orderBy?: onRampTransactionsOrderByWithRelationInput | onRampTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for onRampTransactions.
     */
    cursor?: onRampTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` onRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` onRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of onRampTransactions.
     */
    distinct?: OnRampTransactionsScalarFieldEnum | OnRampTransactionsScalarFieldEnum[]
  }

  /**
   * onRampTransactions findFirstOrThrow
   */
  export type onRampTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which onRampTransactions to fetch.
     */
    where?: onRampTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of onRampTransactions to fetch.
     */
    orderBy?: onRampTransactionsOrderByWithRelationInput | onRampTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for onRampTransactions.
     */
    cursor?: onRampTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` onRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` onRampTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of onRampTransactions.
     */
    distinct?: OnRampTransactionsScalarFieldEnum | OnRampTransactionsScalarFieldEnum[]
  }

  /**
   * onRampTransactions findMany
   */
  export type onRampTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which onRampTransactions to fetch.
     */
    where?: onRampTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of onRampTransactions to fetch.
     */
    orderBy?: onRampTransactionsOrderByWithRelationInput | onRampTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing onRampTransactions.
     */
    cursor?: onRampTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` onRampTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` onRampTransactions.
     */
    skip?: number
    distinct?: OnRampTransactionsScalarFieldEnum | OnRampTransactionsScalarFieldEnum[]
  }

  /**
   * onRampTransactions create
   */
  export type onRampTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a onRampTransactions.
     */
    data: XOR<onRampTransactionsCreateInput, onRampTransactionsUncheckedCreateInput>
  }

  /**
   * onRampTransactions createMany
   */
  export type onRampTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many onRampTransactions.
     */
    data: onRampTransactionsCreateManyInput | onRampTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * onRampTransactions createManyAndReturn
   */
  export type onRampTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many onRampTransactions.
     */
    data: onRampTransactionsCreateManyInput | onRampTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * onRampTransactions update
   */
  export type onRampTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a onRampTransactions.
     */
    data: XOR<onRampTransactionsUpdateInput, onRampTransactionsUncheckedUpdateInput>
    /**
     * Choose, which onRampTransactions to update.
     */
    where: onRampTransactionsWhereUniqueInput
  }

  /**
   * onRampTransactions updateMany
   */
  export type onRampTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update onRampTransactions.
     */
    data: XOR<onRampTransactionsUpdateManyMutationInput, onRampTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which onRampTransactions to update
     */
    where?: onRampTransactionsWhereInput
    /**
     * Limit how many onRampTransactions to update.
     */
    limit?: number
  }

  /**
   * onRampTransactions updateManyAndReturn
   */
  export type onRampTransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * The data used to update onRampTransactions.
     */
    data: XOR<onRampTransactionsUpdateManyMutationInput, onRampTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which onRampTransactions to update
     */
    where?: onRampTransactionsWhereInput
    /**
     * Limit how many onRampTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * onRampTransactions upsert
   */
  export type onRampTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the onRampTransactions to update in case it exists.
     */
    where: onRampTransactionsWhereUniqueInput
    /**
     * In case the onRampTransactions found by the `where` argument doesn't exist, create a new onRampTransactions with this data.
     */
    create: XOR<onRampTransactionsCreateInput, onRampTransactionsUncheckedCreateInput>
    /**
     * In case the onRampTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<onRampTransactionsUpdateInput, onRampTransactionsUncheckedUpdateInput>
  }

  /**
   * onRampTransactions delete
   */
  export type onRampTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
    /**
     * Filter which onRampTransactions to delete.
     */
    where: onRampTransactionsWhereUniqueInput
  }

  /**
   * onRampTransactions deleteMany
   */
  export type onRampTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which onRampTransactions to delete
     */
    where?: onRampTransactionsWhereInput
    /**
     * Limit how many onRampTransactions to delete.
     */
    limit?: number
  }

  /**
   * onRampTransactions without action
   */
  export type onRampTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the onRampTransactions
     */
    select?: onRampTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the onRampTransactions
     */
    omit?: onRampTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: onRampTransactionsInclude<ExtArgs> | null
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
    name: 'name',
    authtype: 'authtype',
    password: 'password',
    phoneno: 'phoneno'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const P2PTransferHistoryScalarFieldEnum: {
    id: 'id',
    receiverID: 'receiverID',
    receiverName: 'receiverName',
    senderID: 'senderID',
    senderName: 'senderName'
  };

  export type P2PTransferHistoryScalarFieldEnum = (typeof P2PTransferHistoryScalarFieldEnum)[keyof typeof P2PTransferHistoryScalarFieldEnum]


  export const BalanceScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    locked: 'locked',
    userId: 'userId'
  };

  export type BalanceScalarFieldEnum = (typeof BalanceScalarFieldEnum)[keyof typeof BalanceScalarFieldEnum]


  export const OnRampTransactionsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    token: 'token',
    provider: 'provider',
    amount: 'amount',
    starttime: 'starttime',
    userId: 'userId'
  };

  export type OnRampTransactionsScalarFieldEnum = (typeof OnRampTransactionsScalarFieldEnum)[keyof typeof OnRampTransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'AuthType'
   */
  export type EnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType'>
    


  /**
   * Reference to a field of type 'AuthType[]'
   */
  export type ListEnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'onRampStatus'
   */
  export type EnumonRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'onRampStatus'>
    


  /**
   * Reference to a field of type 'onRampStatus[]'
   */
  export type ListEnumonRampStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'onRampStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    name?: StringNullableFilter<"User"> | string | null
    authtype?: EnumAuthTypeFilter<"User"> | $Enums.AuthType
    password?: StringNullableFilter<"User"> | string | null
    phoneno?: StringNullableFilter<"User"> | string | null
    onramptransactions?: OnRampTransactionsListRelationFilter
    balance?: BalanceListRelationFilter
    sender?: P2PTransferHistoryListRelationFilter
    receiver?: P2PTransferHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    authtype?: SortOrder
    password?: SortOrderInput | SortOrder
    phoneno?: SortOrderInput | SortOrder
    onramptransactions?: onRampTransactionsOrderByRelationAggregateInput
    balance?: BalanceOrderByRelationAggregateInput
    sender?: P2PTransferHistoryOrderByRelationAggregateInput
    receiver?: P2PTransferHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneno?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    authtype?: EnumAuthTypeFilter<"User"> | $Enums.AuthType
    password?: StringNullableFilter<"User"> | string | null
    onramptransactions?: OnRampTransactionsListRelationFilter
    balance?: BalanceListRelationFilter
    sender?: P2PTransferHistoryListRelationFilter
    receiver?: P2PTransferHistoryListRelationFilter
  }, "id" | "email" | "phoneno">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    authtype?: SortOrder
    password?: SortOrderInput | SortOrder
    phoneno?: SortOrderInput | SortOrder
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
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    authtype?: EnumAuthTypeWithAggregatesFilter<"User"> | $Enums.AuthType
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneno?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type P2PTransferHistoryWhereInput = {
    AND?: P2PTransferHistoryWhereInput | P2PTransferHistoryWhereInput[]
    OR?: P2PTransferHistoryWhereInput[]
    NOT?: P2PTransferHistoryWhereInput | P2PTransferHistoryWhereInput[]
    id?: StringFilter<"P2PTransferHistory"> | string
    receiverID?: StringFilter<"P2PTransferHistory"> | string
    receiverName?: StringFilter<"P2PTransferHistory"> | string
    senderID?: StringFilter<"P2PTransferHistory"> | string
    senderName?: StringFilter<"P2PTransferHistory"> | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type P2PTransferHistoryOrderByWithRelationInput = {
    id?: SortOrder
    receiverID?: SortOrder
    receiverName?: SortOrder
    senderID?: SortOrder
    senderName?: SortOrder
    receiver?: UserOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
  }

  export type P2PTransferHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: P2PTransferHistoryWhereInput | P2PTransferHistoryWhereInput[]
    OR?: P2PTransferHistoryWhereInput[]
    NOT?: P2PTransferHistoryWhereInput | P2PTransferHistoryWhereInput[]
    receiverID?: StringFilter<"P2PTransferHistory"> | string
    receiverName?: StringFilter<"P2PTransferHistory"> | string
    senderID?: StringFilter<"P2PTransferHistory"> | string
    senderName?: StringFilter<"P2PTransferHistory"> | string
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type P2PTransferHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    receiverID?: SortOrder
    receiverName?: SortOrder
    senderID?: SortOrder
    senderName?: SortOrder
    _count?: P2PTransferHistoryCountOrderByAggregateInput
    _max?: P2PTransferHistoryMaxOrderByAggregateInput
    _min?: P2PTransferHistoryMinOrderByAggregateInput
  }

  export type P2PTransferHistoryScalarWhereWithAggregatesInput = {
    AND?: P2PTransferHistoryScalarWhereWithAggregatesInput | P2PTransferHistoryScalarWhereWithAggregatesInput[]
    OR?: P2PTransferHistoryScalarWhereWithAggregatesInput[]
    NOT?: P2PTransferHistoryScalarWhereWithAggregatesInput | P2PTransferHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"P2PTransferHistory"> | string
    receiverID?: StringWithAggregatesFilter<"P2PTransferHistory"> | string
    receiverName?: StringWithAggregatesFilter<"P2PTransferHistory"> | string
    senderID?: StringWithAggregatesFilter<"P2PTransferHistory"> | string
    senderName?: StringWithAggregatesFilter<"P2PTransferHistory"> | string
  }

  export type BalanceWhereInput = {
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    id?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    userId?: StringFilter<"Balance"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BalanceOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type BalanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: BalanceWhereInput | BalanceWhereInput[]
    OR?: BalanceWhereInput[]
    NOT?: BalanceWhereInput | BalanceWhereInput[]
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type BalanceOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    userId?: SortOrder
    _count?: BalanceCountOrderByAggregateInput
    _avg?: BalanceAvgOrderByAggregateInput
    _max?: BalanceMaxOrderByAggregateInput
    _min?: BalanceMinOrderByAggregateInput
    _sum?: BalanceSumOrderByAggregateInput
  }

  export type BalanceScalarWhereWithAggregatesInput = {
    AND?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    OR?: BalanceScalarWhereWithAggregatesInput[]
    NOT?: BalanceScalarWhereWithAggregatesInput | BalanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Balance"> | number
    amount?: IntWithAggregatesFilter<"Balance"> | number
    locked?: IntWithAggregatesFilter<"Balance"> | number
    userId?: StringWithAggregatesFilter<"Balance"> | string
  }

  export type onRampTransactionsWhereInput = {
    AND?: onRampTransactionsWhereInput | onRampTransactionsWhereInput[]
    OR?: onRampTransactionsWhereInput[]
    NOT?: onRampTransactionsWhereInput | onRampTransactionsWhereInput[]
    id?: IntFilter<"onRampTransactions"> | number
    status?: EnumonRampStatusFilter<"onRampTransactions"> | $Enums.onRampStatus
    token?: StringFilter<"onRampTransactions"> | string
    provider?: StringFilter<"onRampTransactions"> | string
    amount?: IntFilter<"onRampTransactions"> | number
    starttime?: DateTimeFilter<"onRampTransactions"> | Date | string
    userId?: StringFilter<"onRampTransactions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type onRampTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    starttime?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type onRampTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: onRampTransactionsWhereInput | onRampTransactionsWhereInput[]
    OR?: onRampTransactionsWhereInput[]
    NOT?: onRampTransactionsWhereInput | onRampTransactionsWhereInput[]
    status?: EnumonRampStatusFilter<"onRampTransactions"> | $Enums.onRampStatus
    provider?: StringFilter<"onRampTransactions"> | string
    amount?: IntFilter<"onRampTransactions"> | number
    starttime?: DateTimeFilter<"onRampTransactions"> | Date | string
    userId?: StringFilter<"onRampTransactions"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type onRampTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    starttime?: SortOrder
    userId?: SortOrder
    _count?: onRampTransactionsCountOrderByAggregateInput
    _avg?: onRampTransactionsAvgOrderByAggregateInput
    _max?: onRampTransactionsMaxOrderByAggregateInput
    _min?: onRampTransactionsMinOrderByAggregateInput
    _sum?: onRampTransactionsSumOrderByAggregateInput
  }

  export type onRampTransactionsScalarWhereWithAggregatesInput = {
    AND?: onRampTransactionsScalarWhereWithAggregatesInput | onRampTransactionsScalarWhereWithAggregatesInput[]
    OR?: onRampTransactionsScalarWhereWithAggregatesInput[]
    NOT?: onRampTransactionsScalarWhereWithAggregatesInput | onRampTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"onRampTransactions"> | number
    status?: EnumonRampStatusWithAggregatesFilter<"onRampTransactions"> | $Enums.onRampStatus
    token?: StringWithAggregatesFilter<"onRampTransactions"> | string
    provider?: StringWithAggregatesFilter<"onRampTransactions"> | string
    amount?: IntWithAggregatesFilter<"onRampTransactions"> | number
    starttime?: DateTimeWithAggregatesFilter<"onRampTransactions"> | Date | string
    userId?: StringWithAggregatesFilter<"onRampTransactions"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryCreateNestedManyWithoutSenderInput
    receiver?: P2PTransferHistoryCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryUncheckedCreateNestedManyWithoutSenderInput
    receiver?: P2PTransferHistoryUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUpdateManyWithoutSenderNestedInput
    receiver?: P2PTransferHistoryUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: P2PTransferHistoryUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type P2PTransferHistoryCreateInput = {
    id?: string
    receiverName: string
    senderName: string
    receiver: UserCreateNestedOneWithoutReceiverInput
    sender: UserCreateNestedOneWithoutSenderInput
  }

  export type P2PTransferHistoryUncheckedCreateInput = {
    id?: string
    receiverID: string
    receiverName: string
    senderID: string
    senderName: string
  }

  export type P2PTransferHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiver?: UserUpdateOneRequiredWithoutReceiverNestedInput
    sender?: UserUpdateOneRequiredWithoutSenderNestedInput
  }

  export type P2PTransferHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverID?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderID?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
  }

  export type P2PTransferHistoryCreateManyInput = {
    id?: string
    receiverID: string
    receiverName: string
    senderID: string
    senderName: string
  }

  export type P2PTransferHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
  }

  export type P2PTransferHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverID?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderID?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceCreateInput = {
    amount: number
    locked: number
    user: UserCreateNestedOneWithoutBalanceInput
  }

  export type BalanceUncheckedCreateInput = {
    id?: number
    amount: number
    locked: number
    userId: string
  }

  export type BalanceUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutBalanceNestedInput
  }

  export type BalanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BalanceCreateManyInput = {
    id?: number
    amount: number
    locked: number
    userId: string
  }

  export type BalanceUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type onRampTransactionsCreateInput = {
    status?: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date | string
    user: UserCreateNestedOneWithoutOnramptransactionsInput
  }

  export type onRampTransactionsUncheckedCreateInput = {
    id?: number
    status?: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date | string
    userId: string
  }

  export type onRampTransactionsUpdateInput = {
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOnramptransactionsNestedInput
  }

  export type onRampTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type onRampTransactionsCreateManyInput = {
    id?: number
    status?: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date | string
    userId: string
  }

  export type onRampTransactionsUpdateManyMutationInput = {
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type onRampTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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

  export type EnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type OnRampTransactionsListRelationFilter = {
    every?: onRampTransactionsWhereInput
    some?: onRampTransactionsWhereInput
    none?: onRampTransactionsWhereInput
  }

  export type BalanceListRelationFilter = {
    every?: BalanceWhereInput
    some?: BalanceWhereInput
    none?: BalanceWhereInput
  }

  export type P2PTransferHistoryListRelationFilter = {
    every?: P2PTransferHistoryWhereInput
    some?: P2PTransferHistoryWhereInput
    none?: P2PTransferHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type onRampTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BalanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type P2PTransferHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    authtype?: SortOrder
    password?: SortOrder
    phoneno?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    authtype?: SortOrder
    password?: SortOrder
    phoneno?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    authtype?: SortOrder
    password?: SortOrder
    phoneno?: SortOrder
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

  export type EnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type P2PTransferHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    receiverID?: SortOrder
    receiverName?: SortOrder
    senderID?: SortOrder
    senderName?: SortOrder
  }

  export type P2PTransferHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    receiverID?: SortOrder
    receiverName?: SortOrder
    senderID?: SortOrder
    senderName?: SortOrder
  }

  export type P2PTransferHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    receiverID?: SortOrder
    receiverName?: SortOrder
    senderID?: SortOrder
    senderName?: SortOrder
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

  export type BalanceCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    userId?: SortOrder
  }

  export type BalanceAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
  }

  export type BalanceMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    userId?: SortOrder
  }

  export type BalanceMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
    userId?: SortOrder
  }

  export type BalanceSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    locked?: SortOrder
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

  export type EnumonRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.onRampStatus | EnumonRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumonRampStatusFilter<$PrismaModel> | $Enums.onRampStatus
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

  export type onRampTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    starttime?: SortOrder
    userId?: SortOrder
  }

  export type onRampTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type onRampTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    starttime?: SortOrder
    userId?: SortOrder
  }

  export type onRampTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    token?: SortOrder
    provider?: SortOrder
    amount?: SortOrder
    starttime?: SortOrder
    userId?: SortOrder
  }

  export type onRampTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
  }

  export type EnumonRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.onRampStatus | EnumonRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumonRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.onRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumonRampStatusFilter<$PrismaModel>
    _max?: NestedEnumonRampStatusFilter<$PrismaModel>
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

  export type onRampTransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<onRampTransactionsCreateWithoutUserInput, onRampTransactionsUncheckedCreateWithoutUserInput> | onRampTransactionsCreateWithoutUserInput[] | onRampTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: onRampTransactionsCreateOrConnectWithoutUserInput | onRampTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: onRampTransactionsCreateManyUserInputEnvelope
    connect?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
  }

  export type BalanceCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type P2PTransferHistoryCreateNestedManyWithoutSenderInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutSenderInput, P2PTransferHistoryUncheckedCreateWithoutSenderInput> | P2PTransferHistoryCreateWithoutSenderInput[] | P2PTransferHistoryUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutSenderInput | P2PTransferHistoryCreateOrConnectWithoutSenderInput[]
    createMany?: P2PTransferHistoryCreateManySenderInputEnvelope
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
  }

  export type P2PTransferHistoryCreateNestedManyWithoutReceiverInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutReceiverInput, P2PTransferHistoryUncheckedCreateWithoutReceiverInput> | P2PTransferHistoryCreateWithoutReceiverInput[] | P2PTransferHistoryUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutReceiverInput | P2PTransferHistoryCreateOrConnectWithoutReceiverInput[]
    createMany?: P2PTransferHistoryCreateManyReceiverInputEnvelope
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
  }

  export type onRampTransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<onRampTransactionsCreateWithoutUserInput, onRampTransactionsUncheckedCreateWithoutUserInput> | onRampTransactionsCreateWithoutUserInput[] | onRampTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: onRampTransactionsCreateOrConnectWithoutUserInput | onRampTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: onRampTransactionsCreateManyUserInputEnvelope
    connect?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
  }

  export type BalanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
  }

  export type P2PTransferHistoryUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutSenderInput, P2PTransferHistoryUncheckedCreateWithoutSenderInput> | P2PTransferHistoryCreateWithoutSenderInput[] | P2PTransferHistoryUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutSenderInput | P2PTransferHistoryCreateOrConnectWithoutSenderInput[]
    createMany?: P2PTransferHistoryCreateManySenderInputEnvelope
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
  }

  export type P2PTransferHistoryUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutReceiverInput, P2PTransferHistoryUncheckedCreateWithoutReceiverInput> | P2PTransferHistoryCreateWithoutReceiverInput[] | P2PTransferHistoryUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutReceiverInput | P2PTransferHistoryCreateOrConnectWithoutReceiverInput[]
    createMany?: P2PTransferHistoryCreateManyReceiverInputEnvelope
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAuthTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuthType
  }

  export type onRampTransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<onRampTransactionsCreateWithoutUserInput, onRampTransactionsUncheckedCreateWithoutUserInput> | onRampTransactionsCreateWithoutUserInput[] | onRampTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: onRampTransactionsCreateOrConnectWithoutUserInput | onRampTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: onRampTransactionsUpsertWithWhereUniqueWithoutUserInput | onRampTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: onRampTransactionsCreateManyUserInputEnvelope
    set?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    disconnect?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    delete?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    connect?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    update?: onRampTransactionsUpdateWithWhereUniqueWithoutUserInput | onRampTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: onRampTransactionsUpdateManyWithWhereWithoutUserInput | onRampTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: onRampTransactionsScalarWhereInput | onRampTransactionsScalarWhereInput[]
  }

  export type BalanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type P2PTransferHistoryUpdateManyWithoutSenderNestedInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutSenderInput, P2PTransferHistoryUncheckedCreateWithoutSenderInput> | P2PTransferHistoryCreateWithoutSenderInput[] | P2PTransferHistoryUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutSenderInput | P2PTransferHistoryCreateOrConnectWithoutSenderInput[]
    upsert?: P2PTransferHistoryUpsertWithWhereUniqueWithoutSenderInput | P2PTransferHistoryUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: P2PTransferHistoryCreateManySenderInputEnvelope
    set?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    disconnect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    delete?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    update?: P2PTransferHistoryUpdateWithWhereUniqueWithoutSenderInput | P2PTransferHistoryUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: P2PTransferHistoryUpdateManyWithWhereWithoutSenderInput | P2PTransferHistoryUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: P2PTransferHistoryScalarWhereInput | P2PTransferHistoryScalarWhereInput[]
  }

  export type P2PTransferHistoryUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutReceiverInput, P2PTransferHistoryUncheckedCreateWithoutReceiverInput> | P2PTransferHistoryCreateWithoutReceiverInput[] | P2PTransferHistoryUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutReceiverInput | P2PTransferHistoryCreateOrConnectWithoutReceiverInput[]
    upsert?: P2PTransferHistoryUpsertWithWhereUniqueWithoutReceiverInput | P2PTransferHistoryUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: P2PTransferHistoryCreateManyReceiverInputEnvelope
    set?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    disconnect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    delete?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    update?: P2PTransferHistoryUpdateWithWhereUniqueWithoutReceiverInput | P2PTransferHistoryUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: P2PTransferHistoryUpdateManyWithWhereWithoutReceiverInput | P2PTransferHistoryUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: P2PTransferHistoryScalarWhereInput | P2PTransferHistoryScalarWhereInput[]
  }

  export type onRampTransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<onRampTransactionsCreateWithoutUserInput, onRampTransactionsUncheckedCreateWithoutUserInput> | onRampTransactionsCreateWithoutUserInput[] | onRampTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: onRampTransactionsCreateOrConnectWithoutUserInput | onRampTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: onRampTransactionsUpsertWithWhereUniqueWithoutUserInput | onRampTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: onRampTransactionsCreateManyUserInputEnvelope
    set?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    disconnect?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    delete?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    connect?: onRampTransactionsWhereUniqueInput | onRampTransactionsWhereUniqueInput[]
    update?: onRampTransactionsUpdateWithWhereUniqueWithoutUserInput | onRampTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: onRampTransactionsUpdateManyWithWhereWithoutUserInput | onRampTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: onRampTransactionsScalarWhereInput | onRampTransactionsScalarWhereInput[]
  }

  export type BalanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput> | BalanceCreateWithoutUserInput[] | BalanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BalanceCreateOrConnectWithoutUserInput | BalanceCreateOrConnectWithoutUserInput[]
    upsert?: BalanceUpsertWithWhereUniqueWithoutUserInput | BalanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BalanceCreateManyUserInputEnvelope
    set?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    disconnect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    delete?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    connect?: BalanceWhereUniqueInput | BalanceWhereUniqueInput[]
    update?: BalanceUpdateWithWhereUniqueWithoutUserInput | BalanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BalanceUpdateManyWithWhereWithoutUserInput | BalanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
  }

  export type P2PTransferHistoryUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutSenderInput, P2PTransferHistoryUncheckedCreateWithoutSenderInput> | P2PTransferHistoryCreateWithoutSenderInput[] | P2PTransferHistoryUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutSenderInput | P2PTransferHistoryCreateOrConnectWithoutSenderInput[]
    upsert?: P2PTransferHistoryUpsertWithWhereUniqueWithoutSenderInput | P2PTransferHistoryUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: P2PTransferHistoryCreateManySenderInputEnvelope
    set?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    disconnect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    delete?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    update?: P2PTransferHistoryUpdateWithWhereUniqueWithoutSenderInput | P2PTransferHistoryUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: P2PTransferHistoryUpdateManyWithWhereWithoutSenderInput | P2PTransferHistoryUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: P2PTransferHistoryScalarWhereInput | P2PTransferHistoryScalarWhereInput[]
  }

  export type P2PTransferHistoryUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<P2PTransferHistoryCreateWithoutReceiverInput, P2PTransferHistoryUncheckedCreateWithoutReceiverInput> | P2PTransferHistoryCreateWithoutReceiverInput[] | P2PTransferHistoryUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: P2PTransferHistoryCreateOrConnectWithoutReceiverInput | P2PTransferHistoryCreateOrConnectWithoutReceiverInput[]
    upsert?: P2PTransferHistoryUpsertWithWhereUniqueWithoutReceiverInput | P2PTransferHistoryUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: P2PTransferHistoryCreateManyReceiverInputEnvelope
    set?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    disconnect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    delete?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    connect?: P2PTransferHistoryWhereUniqueInput | P2PTransferHistoryWhereUniqueInput[]
    update?: P2PTransferHistoryUpdateWithWhereUniqueWithoutReceiverInput | P2PTransferHistoryUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: P2PTransferHistoryUpdateManyWithWhereWithoutReceiverInput | P2PTransferHistoryUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: P2PTransferHistoryScalarWhereInput | P2PTransferHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReceiverInput = {
    create?: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSenderInput = {
    create?: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReceiverNestedInput = {
    create?: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceiverInput
    upsert?: UserUpsertWithoutReceiverInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceiverInput, UserUpdateWithoutReceiverInput>, UserUncheckedUpdateWithoutReceiverInput>
  }

  export type UserUpdateOneRequiredWithoutSenderNestedInput = {
    create?: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
    connectOrCreate?: UserCreateOrConnectWithoutSenderInput
    upsert?: UserUpsertWithoutSenderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSenderInput, UserUpdateWithoutSenderInput>, UserUncheckedUpdateWithoutSenderInput>
  }

  export type UserCreateNestedOneWithoutBalanceInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutBalanceNestedInput = {
    create?: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    connectOrCreate?: UserCreateOrConnectWithoutBalanceInput
    upsert?: UserUpsertWithoutBalanceInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBalanceInput, UserUpdateWithoutBalanceInput>, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserCreateNestedOneWithoutOnramptransactionsInput = {
    create?: XOR<UserCreateWithoutOnramptransactionsInput, UserUncheckedCreateWithoutOnramptransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnramptransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumonRampStatusFieldUpdateOperationsInput = {
    set?: $Enums.onRampStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOnramptransactionsNestedInput = {
    create?: XOR<UserCreateWithoutOnramptransactionsInput, UserUncheckedCreateWithoutOnramptransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOnramptransactionsInput
    upsert?: UserUpsertWithoutOnramptransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOnramptransactionsInput, UserUpdateWithoutOnramptransactionsInput>, UserUncheckedUpdateWithoutOnramptransactionsInput>
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

  export type NestedEnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
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

  export type NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
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

  export type NestedEnumonRampStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.onRampStatus | EnumonRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumonRampStatusFilter<$PrismaModel> | $Enums.onRampStatus
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

  export type NestedEnumonRampStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.onRampStatus | EnumonRampStatusFieldRefInput<$PrismaModel>
    in?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.onRampStatus[] | ListEnumonRampStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumonRampStatusWithAggregatesFilter<$PrismaModel> | $Enums.onRampStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumonRampStatusFilter<$PrismaModel>
    _max?: NestedEnumonRampStatusFilter<$PrismaModel>
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

  export type onRampTransactionsCreateWithoutUserInput = {
    status?: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date | string
  }

  export type onRampTransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date | string
  }

  export type onRampTransactionsCreateOrConnectWithoutUserInput = {
    where: onRampTransactionsWhereUniqueInput
    create: XOR<onRampTransactionsCreateWithoutUserInput, onRampTransactionsUncheckedCreateWithoutUserInput>
  }

  export type onRampTransactionsCreateManyUserInputEnvelope = {
    data: onRampTransactionsCreateManyUserInput | onRampTransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BalanceCreateWithoutUserInput = {
    amount: number
    locked: number
  }

  export type BalanceUncheckedCreateWithoutUserInput = {
    id?: number
    amount: number
    locked: number
  }

  export type BalanceCreateOrConnectWithoutUserInput = {
    where: BalanceWhereUniqueInput
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceCreateManyUserInputEnvelope = {
    data: BalanceCreateManyUserInput | BalanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type P2PTransferHistoryCreateWithoutSenderInput = {
    id?: string
    receiverName: string
    senderName: string
    receiver: UserCreateNestedOneWithoutReceiverInput
  }

  export type P2PTransferHistoryUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverID: string
    receiverName: string
    senderName: string
  }

  export type P2PTransferHistoryCreateOrConnectWithoutSenderInput = {
    where: P2PTransferHistoryWhereUniqueInput
    create: XOR<P2PTransferHistoryCreateWithoutSenderInput, P2PTransferHistoryUncheckedCreateWithoutSenderInput>
  }

  export type P2PTransferHistoryCreateManySenderInputEnvelope = {
    data: P2PTransferHistoryCreateManySenderInput | P2PTransferHistoryCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type P2PTransferHistoryCreateWithoutReceiverInput = {
    id?: string
    receiverName: string
    senderName: string
    sender: UserCreateNestedOneWithoutSenderInput
  }

  export type P2PTransferHistoryUncheckedCreateWithoutReceiverInput = {
    id?: string
    receiverName: string
    senderID: string
    senderName: string
  }

  export type P2PTransferHistoryCreateOrConnectWithoutReceiverInput = {
    where: P2PTransferHistoryWhereUniqueInput
    create: XOR<P2PTransferHistoryCreateWithoutReceiverInput, P2PTransferHistoryUncheckedCreateWithoutReceiverInput>
  }

  export type P2PTransferHistoryCreateManyReceiverInputEnvelope = {
    data: P2PTransferHistoryCreateManyReceiverInput | P2PTransferHistoryCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type onRampTransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: onRampTransactionsWhereUniqueInput
    update: XOR<onRampTransactionsUpdateWithoutUserInput, onRampTransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<onRampTransactionsCreateWithoutUserInput, onRampTransactionsUncheckedCreateWithoutUserInput>
  }

  export type onRampTransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: onRampTransactionsWhereUniqueInput
    data: XOR<onRampTransactionsUpdateWithoutUserInput, onRampTransactionsUncheckedUpdateWithoutUserInput>
  }

  export type onRampTransactionsUpdateManyWithWhereWithoutUserInput = {
    where: onRampTransactionsScalarWhereInput
    data: XOR<onRampTransactionsUpdateManyMutationInput, onRampTransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type onRampTransactionsScalarWhereInput = {
    AND?: onRampTransactionsScalarWhereInput | onRampTransactionsScalarWhereInput[]
    OR?: onRampTransactionsScalarWhereInput[]
    NOT?: onRampTransactionsScalarWhereInput | onRampTransactionsScalarWhereInput[]
    id?: IntFilter<"onRampTransactions"> | number
    status?: EnumonRampStatusFilter<"onRampTransactions"> | $Enums.onRampStatus
    token?: StringFilter<"onRampTransactions"> | string
    provider?: StringFilter<"onRampTransactions"> | string
    amount?: IntFilter<"onRampTransactions"> | number
    starttime?: DateTimeFilter<"onRampTransactions"> | Date | string
    userId?: StringFilter<"onRampTransactions"> | string
  }

  export type BalanceUpsertWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    update: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
    create: XOR<BalanceCreateWithoutUserInput, BalanceUncheckedCreateWithoutUserInput>
  }

  export type BalanceUpdateWithWhereUniqueWithoutUserInput = {
    where: BalanceWhereUniqueInput
    data: XOR<BalanceUpdateWithoutUserInput, BalanceUncheckedUpdateWithoutUserInput>
  }

  export type BalanceUpdateManyWithWhereWithoutUserInput = {
    where: BalanceScalarWhereInput
    data: XOR<BalanceUpdateManyMutationInput, BalanceUncheckedUpdateManyWithoutUserInput>
  }

  export type BalanceScalarWhereInput = {
    AND?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    OR?: BalanceScalarWhereInput[]
    NOT?: BalanceScalarWhereInput | BalanceScalarWhereInput[]
    id?: IntFilter<"Balance"> | number
    amount?: IntFilter<"Balance"> | number
    locked?: IntFilter<"Balance"> | number
    userId?: StringFilter<"Balance"> | string
  }

  export type P2PTransferHistoryUpsertWithWhereUniqueWithoutSenderInput = {
    where: P2PTransferHistoryWhereUniqueInput
    update: XOR<P2PTransferHistoryUpdateWithoutSenderInput, P2PTransferHistoryUncheckedUpdateWithoutSenderInput>
    create: XOR<P2PTransferHistoryCreateWithoutSenderInput, P2PTransferHistoryUncheckedCreateWithoutSenderInput>
  }

  export type P2PTransferHistoryUpdateWithWhereUniqueWithoutSenderInput = {
    where: P2PTransferHistoryWhereUniqueInput
    data: XOR<P2PTransferHistoryUpdateWithoutSenderInput, P2PTransferHistoryUncheckedUpdateWithoutSenderInput>
  }

  export type P2PTransferHistoryUpdateManyWithWhereWithoutSenderInput = {
    where: P2PTransferHistoryScalarWhereInput
    data: XOR<P2PTransferHistoryUpdateManyMutationInput, P2PTransferHistoryUncheckedUpdateManyWithoutSenderInput>
  }

  export type P2PTransferHistoryScalarWhereInput = {
    AND?: P2PTransferHistoryScalarWhereInput | P2PTransferHistoryScalarWhereInput[]
    OR?: P2PTransferHistoryScalarWhereInput[]
    NOT?: P2PTransferHistoryScalarWhereInput | P2PTransferHistoryScalarWhereInput[]
    id?: StringFilter<"P2PTransferHistory"> | string
    receiverID?: StringFilter<"P2PTransferHistory"> | string
    receiverName?: StringFilter<"P2PTransferHistory"> | string
    senderID?: StringFilter<"P2PTransferHistory"> | string
    senderName?: StringFilter<"P2PTransferHistory"> | string
  }

  export type P2PTransferHistoryUpsertWithWhereUniqueWithoutReceiverInput = {
    where: P2PTransferHistoryWhereUniqueInput
    update: XOR<P2PTransferHistoryUpdateWithoutReceiverInput, P2PTransferHistoryUncheckedUpdateWithoutReceiverInput>
    create: XOR<P2PTransferHistoryCreateWithoutReceiverInput, P2PTransferHistoryUncheckedCreateWithoutReceiverInput>
  }

  export type P2PTransferHistoryUpdateWithWhereUniqueWithoutReceiverInput = {
    where: P2PTransferHistoryWhereUniqueInput
    data: XOR<P2PTransferHistoryUpdateWithoutReceiverInput, P2PTransferHistoryUncheckedUpdateWithoutReceiverInput>
  }

  export type P2PTransferHistoryUpdateManyWithWhereWithoutReceiverInput = {
    where: P2PTransferHistoryScalarWhereInput
    data: XOR<P2PTransferHistoryUpdateManyMutationInput, P2PTransferHistoryUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutReceiverInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceiverInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceiverInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
  }

  export type UserCreateWithoutSenderInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsCreateNestedManyWithoutUserInput
    balance?: BalanceCreateNestedManyWithoutUserInput
    receiver?: P2PTransferHistoryCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSenderInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsUncheckedCreateNestedManyWithoutUserInput
    balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    receiver?: P2PTransferHistoryUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSenderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
  }

  export type UserUpsertWithoutReceiverInput = {
    update: XOR<UserUpdateWithoutReceiverInput, UserUncheckedUpdateWithoutReceiverInput>
    create: XOR<UserCreateWithoutReceiverInput, UserUncheckedCreateWithoutReceiverInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceiverInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceiverInput, UserUncheckedUpdateWithoutReceiverInput>
  }

  export type UserUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type UserUpsertWithoutSenderInput = {
    update: XOR<UserUpdateWithoutSenderInput, UserUncheckedUpdateWithoutSenderInput>
    create: XOR<UserCreateWithoutSenderInput, UserUncheckedCreateWithoutSenderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSenderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSenderInput, UserUncheckedUpdateWithoutSenderInput>
  }

  export type UserUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUpdateManyWithoutUserNestedInput
    balance?: BalanceUpdateManyWithoutUserNestedInput
    receiver?: P2PTransferHistoryUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUncheckedUpdateManyWithoutUserNestedInput
    balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    receiver?: P2PTransferHistoryUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutBalanceInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryCreateNestedManyWithoutSenderInput
    receiver?: P2PTransferHistoryCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutBalanceInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    onramptransactions?: onRampTransactionsUncheckedCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryUncheckedCreateNestedManyWithoutSenderInput
    receiver?: P2PTransferHistoryUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutBalanceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
  }

  export type UserUpsertWithoutBalanceInput = {
    update: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
    create: XOR<UserCreateWithoutBalanceInput, UserUncheckedCreateWithoutBalanceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBalanceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBalanceInput, UserUncheckedUpdateWithoutBalanceInput>
  }

  export type UserUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUpdateManyWithoutSenderNestedInput
    receiver?: P2PTransferHistoryUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutBalanceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    onramptransactions?: onRampTransactionsUncheckedUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: P2PTransferHistoryUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutOnramptransactionsInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    balance?: BalanceCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryCreateNestedManyWithoutSenderInput
    receiver?: P2PTransferHistoryCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOnramptransactionsInput = {
    id?: string
    email: string
    name?: string | null
    authtype?: $Enums.AuthType
    password?: string | null
    phoneno?: string | null
    balance?: BalanceUncheckedCreateNestedManyWithoutUserInput
    sender?: P2PTransferHistoryUncheckedCreateNestedManyWithoutSenderInput
    receiver?: P2PTransferHistoryUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOnramptransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOnramptransactionsInput, UserUncheckedCreateWithoutOnramptransactionsInput>
  }

  export type UserUpsertWithoutOnramptransactionsInput = {
    update: XOR<UserUpdateWithoutOnramptransactionsInput, UserUncheckedUpdateWithoutOnramptransactionsInput>
    create: XOR<UserCreateWithoutOnramptransactionsInput, UserUncheckedCreateWithoutOnramptransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOnramptransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOnramptransactionsInput, UserUncheckedUpdateWithoutOnramptransactionsInput>
  }

  export type UserUpdateWithoutOnramptransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUpdateManyWithoutSenderNestedInput
    receiver?: P2PTransferHistoryUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOnramptransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    authtype?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    password?: NullableStringFieldUpdateOperationsInput | string | null
    phoneno?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: BalanceUncheckedUpdateManyWithoutUserNestedInput
    sender?: P2PTransferHistoryUncheckedUpdateManyWithoutSenderNestedInput
    receiver?: P2PTransferHistoryUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type onRampTransactionsCreateManyUserInput = {
    id?: number
    status?: $Enums.onRampStatus
    token: string
    provider: string
    amount: number
    starttime: Date | string
  }

  export type BalanceCreateManyUserInput = {
    id?: number
    amount: number
    locked: number
  }

  export type P2PTransferHistoryCreateManySenderInput = {
    id?: string
    receiverID: string
    receiverName: string
    senderName: string
  }

  export type P2PTransferHistoryCreateManyReceiverInput = {
    id?: string
    receiverName: string
    senderID: string
    senderName: string
  }

  export type onRampTransactionsUpdateWithoutUserInput = {
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type onRampTransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type onRampTransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumonRampStatusFieldUpdateOperationsInput | $Enums.onRampStatus
    token?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    starttime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BalanceUpdateWithoutUserInput = {
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type BalanceUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    locked?: IntFieldUpdateOperationsInput | number
  }

  export type P2PTransferHistoryUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    receiver?: UserUpdateOneRequiredWithoutReceiverNestedInput
  }

  export type P2PTransferHistoryUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverID?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
  }

  export type P2PTransferHistoryUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverID?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
  }

  export type P2PTransferHistoryUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
    sender?: UserUpdateOneRequiredWithoutSenderNestedInput
  }

  export type P2PTransferHistoryUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderID?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
  }

  export type P2PTransferHistoryUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverName?: StringFieldUpdateOperationsInput | string
    senderID?: StringFieldUpdateOperationsInput | string
    senderName?: StringFieldUpdateOperationsInput | string
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