
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model subject
 * 
 */
export type subject = $Result.DefaultSelection<Prisma.$subjectPayload>
/**
 * Model attendance
 * 
 */
export type attendance = $Result.DefaultSelection<Prisma.$attendancePayload>
/**
 * Model pdf
 * 
 */
export type pdf = $Result.DefaultSelection<Prisma.$pdfPayload>
/**
 * Model Ebook
 * 
 */
export type Ebook = $Result.DefaultSelection<Prisma.$EbookPayload>
/**
 * Model Thumbnail
 * 
 */
export type Thumbnail = $Result.DefaultSelection<Prisma.$ThumbnailPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  student: 'student',
  faculty: 'faculty',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status: {
  present: 'present',
  absent: 'absent',
  NA: 'NA'
};

export type Status = (typeof Status)[keyof typeof Status]


export const Course: {
  BCA: 'BCA',
  BBA: 'BBA',
  MCA: 'MCA',
  Mtech: 'Mtech',
  BSCIT: 'BSCIT',
  PGDM: 'PGDM'
};

export type Course = (typeof Course)[keyof typeof Course]


export const Category: {
  Pyqs: 'Pyqs',
  Cimage_internal_exams: 'Cimage_internal_exams',
  Montly_Test: 'Montly_Test',
  Notes: 'Notes'
};

export type Category = (typeof Category)[keyof typeof Category]


export const paper_type: {
  Honours: 'Honours',
  Subsidiary: 'Subsidiary',
  Composition: 'Composition'
};

export type paper_type = (typeof paper_type)[keyof typeof paper_type]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

export type Course = $Enums.Course

export const Course: typeof $Enums.Course

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

export type paper_type = $Enums.paper_type

export const paper_type: typeof $Enums.paper_type

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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.subjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.attendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pdf`: Exposes CRUD operations for the **pdf** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pdfs
    * const pdfs = await prisma.pdf.findMany()
    * ```
    */
  get pdf(): Prisma.pdfDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ebook`: Exposes CRUD operations for the **Ebook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ebooks
    * const ebooks = await prisma.ebook.findMany()
    * ```
    */
  get ebook(): Prisma.EbookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.thumbnail`: Exposes CRUD operations for the **Thumbnail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Thumbnails
    * const thumbnails = await prisma.thumbnail.findMany()
    * ```
    */
  get thumbnail(): Prisma.ThumbnailDelegate<ExtArgs, ClientOptions>;
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
    user: 'user',
    subject: 'subject',
    attendance: 'attendance',
    pdf: 'pdf',
    Ebook: 'Ebook',
    Thumbnail: 'Thumbnail'
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
      modelProps: "user" | "subject" | "attendance" | "pdf" | "ebook" | "thumbnail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      subject: {
        payload: Prisma.$subjectPayload<ExtArgs>
        fields: Prisma.subjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findFirst: {
            args: Prisma.subjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          findMany: {
            args: Prisma.subjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          create: {
            args: Prisma.subjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          createMany: {
            args: Prisma.subjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          delete: {
            args: Prisma.subjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          update: {
            args: Prisma.subjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          deleteMany: {
            args: Prisma.subjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>[]
          }
          upsert: {
            args: Prisma.subjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.subjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.subjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      attendance: {
        payload: Prisma.$attendancePayload<ExtArgs>
        fields: Prisma.attendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.attendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.attendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findFirst: {
            args: Prisma.attendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.attendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          findMany: {
            args: Prisma.attendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          create: {
            args: Prisma.attendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          createMany: {
            args: Prisma.attendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.attendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          delete: {
            args: Prisma.attendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          update: {
            args: Prisma.attendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          deleteMany: {
            args: Prisma.attendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.attendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.attendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>[]
          }
          upsert: {
            args: Prisma.attendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$attendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.attendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.attendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      pdf: {
        payload: Prisma.$pdfPayload<ExtArgs>
        fields: Prisma.pdfFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pdfFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pdfFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>
          }
          findFirst: {
            args: Prisma.pdfFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pdfFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>
          }
          findMany: {
            args: Prisma.pdfFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>[]
          }
          create: {
            args: Prisma.pdfCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>
          }
          createMany: {
            args: Prisma.pdfCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.pdfCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>[]
          }
          delete: {
            args: Prisma.pdfDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>
          }
          update: {
            args: Prisma.pdfUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>
          }
          deleteMany: {
            args: Prisma.pdfDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pdfUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.pdfUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>[]
          }
          upsert: {
            args: Prisma.pdfUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pdfPayload>
          }
          aggregate: {
            args: Prisma.PdfAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePdf>
          }
          groupBy: {
            args: Prisma.pdfGroupByArgs<ExtArgs>
            result: $Utils.Optional<PdfGroupByOutputType>[]
          }
          count: {
            args: Prisma.pdfCountArgs<ExtArgs>
            result: $Utils.Optional<PdfCountAggregateOutputType> | number
          }
        }
      }
      Ebook: {
        payload: Prisma.$EbookPayload<ExtArgs>
        fields: Prisma.EbookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EbookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EbookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          findFirst: {
            args: Prisma.EbookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EbookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          findMany: {
            args: Prisma.EbookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>[]
          }
          create: {
            args: Prisma.EbookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          createMany: {
            args: Prisma.EbookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EbookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>[]
          }
          delete: {
            args: Prisma.EbookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          update: {
            args: Prisma.EbookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          deleteMany: {
            args: Prisma.EbookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EbookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EbookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>[]
          }
          upsert: {
            args: Prisma.EbookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EbookPayload>
          }
          aggregate: {
            args: Prisma.EbookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEbook>
          }
          groupBy: {
            args: Prisma.EbookGroupByArgs<ExtArgs>
            result: $Utils.Optional<EbookGroupByOutputType>[]
          }
          count: {
            args: Prisma.EbookCountArgs<ExtArgs>
            result: $Utils.Optional<EbookCountAggregateOutputType> | number
          }
        }
      }
      Thumbnail: {
        payload: Prisma.$ThumbnailPayload<ExtArgs>
        fields: Prisma.ThumbnailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ThumbnailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ThumbnailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>
          }
          findFirst: {
            args: Prisma.ThumbnailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ThumbnailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>
          }
          findMany: {
            args: Prisma.ThumbnailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>[]
          }
          create: {
            args: Prisma.ThumbnailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>
          }
          createMany: {
            args: Prisma.ThumbnailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ThumbnailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>[]
          }
          delete: {
            args: Prisma.ThumbnailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>
          }
          update: {
            args: Prisma.ThumbnailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>
          }
          deleteMany: {
            args: Prisma.ThumbnailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ThumbnailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ThumbnailUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>[]
          }
          upsert: {
            args: Prisma.ThumbnailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ThumbnailPayload>
          }
          aggregate: {
            args: Prisma.ThumbnailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateThumbnail>
          }
          groupBy: {
            args: Prisma.ThumbnailGroupByArgs<ExtArgs>
            result: $Utils.Optional<ThumbnailGroupByOutputType>[]
          }
          count: {
            args: Prisma.ThumbnailCountArgs<ExtArgs>
            result: $Utils.Optional<ThumbnailCountAggregateOutputType> | number
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
    user?: userOmit
    subject?: subjectOmit
    attendance?: attendanceOmit
    pdf?: pdfOmit
    ebook?: EbookOmit
    thumbnail?: ThumbnailOmit
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
    subjects: number
    attendances: number
    attendance: number
    pdfs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | UserCountOutputTypeCountSubjectsArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    attendance?: boolean | UserCountOutputTypeCountAttendanceArgs
    pdfs?: boolean | UserCountOutputTypeCountPdfsArgs
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
  export type UserCountOutputTypeCountSubjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pdfWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    attendances: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | SubjectCountOutputTypeCountAttendancesArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
  }


  /**
   * Count Type ThumbnailCountOutputType
   */

  export type ThumbnailCountOutputType = {
    ebooks: number
  }

  export type ThumbnailCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebooks?: boolean | ThumbnailCountOutputTypeCountEbooksArgs
  }

  // Custom InputTypes
  /**
   * ThumbnailCountOutputType without action
   */
  export type ThumbnailCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ThumbnailCountOutputType
     */
    select?: ThumbnailCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ThumbnailCountOutputType without action
   */
  export type ThumbnailCountOutputTypeCountEbooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    semester: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    semester: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    profile_pic: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    semester: number | null
    department: string | null
    UserMongoId: string | null
    isPremimum: boolean | null
    premimum_expire_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    profile_pic: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    is_active: boolean | null
    semester: number | null
    department: string | null
    UserMongoId: string | null
    isPremimum: boolean | null
    premimum_expire_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    profile_pic: number
    email: number
    password: number
    role: number
    is_active: number
    semester: number
    department: number
    UserMongoId: number
    isPremimum: number
    premimum_expire_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    semester?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    semester?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    profile_pic?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    semester?: true
    department?: true
    UserMongoId?: true
    isPremimum?: true
    premimum_expire_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    profile_pic?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    semester?: true
    department?: true
    UserMongoId?: true
    isPremimum?: true
    premimum_expire_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    profile_pic?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    semester?: true
    department?: true
    UserMongoId?: true
    isPremimum?: true
    premimum_expire_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    profile_pic: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active: boolean
    semester: number | null
    department: string | null
    UserMongoId: string
    isPremimum: boolean
    premimum_expire_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profile_pic?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    semester?: boolean
    department?: boolean
    UserMongoId?: boolean
    isPremimum?: boolean
    premimum_expire_at?: boolean
    subjects?: boolean | user$subjectsArgs<ExtArgs>
    attendances?: boolean | user$attendancesArgs<ExtArgs>
    attendance?: boolean | user$attendanceArgs<ExtArgs>
    pdfs?: boolean | user$pdfsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profile_pic?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    semester?: boolean
    department?: boolean
    UserMongoId?: boolean
    isPremimum?: boolean
    premimum_expire_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profile_pic?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    semester?: boolean
    department?: boolean
    UserMongoId?: boolean
    isPremimum?: boolean
    premimum_expire_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    profile_pic?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    semester?: boolean
    department?: boolean
    UserMongoId?: boolean
    isPremimum?: boolean
    premimum_expire_at?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profile_pic" | "email" | "password" | "role" | "is_active" | "semester" | "department" | "UserMongoId" | "isPremimum" | "premimum_expire_at", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subjects?: boolean | user$subjectsArgs<ExtArgs>
    attendances?: boolean | user$attendancesArgs<ExtArgs>
    attendance?: boolean | user$attendanceArgs<ExtArgs>
    pdfs?: boolean | user$pdfsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      subjects: Prisma.$subjectPayload<ExtArgs>[]
      attendances: Prisma.$attendancePayload<ExtArgs>[]
      attendance: Prisma.$attendancePayload<ExtArgs>[]
      pdfs: Prisma.$pdfPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      profile_pic: string | null
      email: string
      password: string
      role: $Enums.Role
      is_active: boolean
      semester: number | null
      department: string | null
      UserMongoId: string
      isPremimum: boolean
      premimum_expire_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subjects<T extends user$subjectsArgs<ExtArgs> = {}>(args?: Subset<T, user$subjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends user$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, user$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendance<T extends user$attendanceArgs<ExtArgs> = {}>(args?: Subset<T, user$attendanceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pdfs<T extends user$pdfsArgs<ExtArgs> = {}>(args?: Subset<T, user$pdfsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly profile_pic: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
    readonly role: FieldRef<"user", 'Role'>
    readonly is_active: FieldRef<"user", 'Boolean'>
    readonly semester: FieldRef<"user", 'Int'>
    readonly department: FieldRef<"user", 'String'>
    readonly UserMongoId: FieldRef<"user", 'String'>
    readonly isPremimum: FieldRef<"user", 'Boolean'>
    readonly premimum_expire_at: FieldRef<"user", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.subjects
   */
  export type user$subjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    cursor?: subjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * user.attendances
   */
  export type user$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * user.attendance
   */
  export type user$attendanceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * user.pdfs
   */
  export type user$pdfsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    where?: pdfWhereInput
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[]
    cursor?: pdfWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
    semester: number | null
    facultyId: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
    semester: number | null
    facultyId: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    semester: number | null
    department: string | null
    facultyId: number | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    code: string | null
    name: string | null
    semester: number | null
    department: string | null
    facultyId: number | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    code: number
    name: number
    semester: number
    department: number
    facultyId: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
    semester?: true
    facultyId?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
    semester?: true
    facultyId?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    semester?: true
    department?: true
    facultyId?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    semester?: true
    department?: true
    facultyId?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    semester?: true
    department?: true
    facultyId?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subject to aggregate.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type subjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subjectWhereInput
    orderBy?: subjectOrderByWithAggregationInput | subjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: subjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    code: string
    name: string
    semester: number
    department: string
    facultyId: number
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends subjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type subjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    department?: boolean
    facultyId?: boolean
    faculty?: boolean | userDefaultArgs<ExtArgs>
    attendances?: boolean | subject$attendancesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    department?: boolean
    facultyId?: boolean
    faculty?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    department?: boolean
    facultyId?: boolean
    faculty?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type subjectSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    semester?: boolean
    department?: boolean
    facultyId?: boolean
  }

  export type subjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "semester" | "department" | "facultyId", ExtArgs["result"]["subject"]>
  export type subjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | userDefaultArgs<ExtArgs>
    attendances?: boolean | subject$attendancesArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type subjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | userDefaultArgs<ExtArgs>
  }
  export type subjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    faculty?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $subjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subject"
    objects: {
      faculty: Prisma.$userPayload<ExtArgs>
      attendances: Prisma.$attendancePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      name: string
      semester: number
      department: string
      facultyId: number
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type subjectGetPayload<S extends boolean | null | undefined | subjectDefaultArgs> = $Result.GetResult<Prisma.$subjectPayload, S>

  type subjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface subjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subject'], meta: { name: 'subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {subjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subjectFindUniqueArgs>(args: SelectSubset<T, subjectFindUniqueArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subjectFindUniqueOrThrowArgs>(args: SelectSubset<T, subjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subjectFindFirstArgs>(args?: SelectSubset<T, subjectFindFirstArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subjectFindFirstOrThrowArgs>(args?: SelectSubset<T, subjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subjectFindManyArgs>(args?: SelectSubset<T, subjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subject.
     * @param {subjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends subjectCreateArgs>(args: SelectSubset<T, subjectCreateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subjects.
     * @param {subjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subjectCreateManyArgs>(args?: SelectSubset<T, subjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {subjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subjectCreateManyAndReturnArgs>(args?: SelectSubset<T, subjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subject.
     * @param {subjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends subjectDeleteArgs>(args: SelectSubset<T, subjectDeleteArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subject.
     * @param {subjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subjectUpdateArgs>(args: SelectSubset<T, subjectUpdateArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subjects.
     * @param {subjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subjectDeleteManyArgs>(args?: SelectSubset<T, subjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subjectUpdateManyArgs>(args: SelectSubset<T, subjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects and returns the data updated in the database.
     * @param {subjectUpdateManyAndReturnArgs} args - Arguments to update many Subjects.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.updateManyAndReturn({
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
    updateManyAndReturn<T extends subjectUpdateManyAndReturnArgs>(args: SelectSubset<T, subjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subject.
     * @param {subjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends subjectUpsertArgs>(args: SelectSubset<T, subjectUpsertArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends subjectCountArgs>(
      args?: Subset<T, subjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subjectGroupByArgs} args - Group by arguments.
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
      T extends subjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subjectGroupByArgs['orderBy'] }
        : { orderBy?: subjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subject model
   */
  readonly fields: subjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    faculty<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends subject$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, subject$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the subject model
   */
  interface subjectFieldRefs {
    readonly id: FieldRef<"subject", 'Int'>
    readonly code: FieldRef<"subject", 'String'>
    readonly name: FieldRef<"subject", 'String'>
    readonly semester: FieldRef<"subject", 'Int'>
    readonly department: FieldRef<"subject", 'String'>
    readonly facultyId: FieldRef<"subject", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subject findUnique
   */
  export type subjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findUniqueOrThrow
   */
  export type subjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject findFirst
   */
  export type subjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findFirstOrThrow
   */
  export type subjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subject to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject findMany
   */
  export type subjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter, which subjects to fetch.
     */
    where?: subjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subjects to fetch.
     */
    orderBy?: subjectOrderByWithRelationInput | subjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subjects.
     */
    cursor?: subjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * subject create
   */
  export type subjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to create a subject.
     */
    data: XOR<subjectCreateInput, subjectUncheckedCreateInput>
  }

  /**
   * subject createMany
   */
  export type subjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subject createManyAndReturn
   */
  export type subjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * The data used to create many subjects.
     */
    data: subjectCreateManyInput | subjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject update
   */
  export type subjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The data needed to update a subject.
     */
    data: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
    /**
     * Choose, which subject to update.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject updateMany
   */
  export type subjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
  }

  /**
   * subject updateManyAndReturn
   */
  export type subjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * The data used to update subjects.
     */
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyInput>
    /**
     * Filter which subjects to update
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subject upsert
   */
  export type subjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * The filter to search for the subject to update in case it exists.
     */
    where: subjectWhereUniqueInput
    /**
     * In case the subject found by the `where` argument doesn't exist, create a new subject with this data.
     */
    create: XOR<subjectCreateInput, subjectUncheckedCreateInput>
    /**
     * In case the subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subjectUpdateInput, subjectUncheckedUpdateInput>
  }

  /**
   * subject delete
   */
  export type subjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
    /**
     * Filter which subject to delete.
     */
    where: subjectWhereUniqueInput
  }

  /**
   * subject deleteMany
   */
  export type subjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subjects to delete
     */
    where?: subjectWhereInput
    /**
     * Limit how many subjects to delete.
     */
    limit?: number
  }

  /**
   * subject.attendances
   */
  export type subject$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    cursor?: attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * subject without action
   */
  export type subjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subject
     */
    select?: subjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subject
     */
    omit?: subjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subjectInclude<ExtArgs> | null
  }


  /**
   * Model attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
    date: Date | null
    is_present: $Enums.Status | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    studentId: number | null
    subjectId: number | null
    teacherId: number | null
    date: Date | null
    is_present: $Enums.Status | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    studentId: number
    subjectId: number
    teacherId: number
    date: number
    is_present: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    date?: true
    is_present?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    date?: true
    is_present?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    studentId?: true
    subjectId?: true
    teacherId?: true
    date?: true
    is_present?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendance to aggregate.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: attendanceWhereInput
    orderBy?: attendanceOrderByWithAggregationInput | attendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    studentId: number
    subjectId: number
    teacherId: number
    date: Date
    is_present: $Enums.Status
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    is_present?: boolean
    student?: boolean | userDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    is_present?: boolean
    student?: boolean | userDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    is_present?: boolean
    student?: boolean | userDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type attendanceSelectScalar = {
    id?: boolean
    studentId?: boolean
    subjectId?: boolean
    teacherId?: boolean
    date?: boolean
    is_present?: boolean
  }

  export type attendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "subjectId" | "teacherId" | "date" | "is_present", ExtArgs["result"]["attendance"]>
  export type attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | userDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }
  export type attendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | userDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }
  export type attendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | userDefaultArgs<ExtArgs>
    subject?: boolean | subjectDefaultArgs<ExtArgs>
    teacher?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "attendance"
    objects: {
      student: Prisma.$userPayload<ExtArgs>
      subject: Prisma.$subjectPayload<ExtArgs>
      teacher: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentId: number
      subjectId: number
      teacherId: number
      date: Date
      is_present: $Enums.Status
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type attendanceGetPayload<S extends boolean | null | undefined | attendanceDefaultArgs> = $Result.GetResult<Prisma.$attendancePayload, S>

  type attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<attendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['attendance'], meta: { name: 'attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {attendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends attendanceFindUniqueArgs>(args: SelectSubset<T, attendanceFindUniqueArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {attendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends attendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, attendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends attendanceFindFirstArgs>(args?: SelectSubset<T, attendanceFindFirstArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends attendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, attendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends attendanceFindManyArgs>(args?: SelectSubset<T, attendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {attendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends attendanceCreateArgs>(args: SelectSubset<T, attendanceCreateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {attendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends attendanceCreateManyArgs>(args?: SelectSubset<T, attendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {attendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends attendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, attendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {attendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends attendanceDeleteArgs>(args: SelectSubset<T, attendanceDeleteArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {attendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends attendanceUpdateArgs>(args: SelectSubset<T, attendanceUpdateArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {attendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends attendanceDeleteManyArgs>(args?: SelectSubset<T, attendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends attendanceUpdateManyArgs>(args: SelectSubset<T, attendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {attendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends attendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, attendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {attendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends attendanceUpsertArgs>(args: SelectSubset<T, attendanceUpsertArgs<ExtArgs>>): Prisma__attendanceClient<$Result.GetResult<Prisma.$attendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends attendanceCountArgs>(
      args?: Subset<T, attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {attendanceGroupByArgs} args - Group by arguments.
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
      T extends attendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: attendanceGroupByArgs['orderBy'] }
        : { orderBy?: attendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, attendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the attendance model
   */
  readonly fields: attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__attendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subject<T extends subjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, subjectDefaultArgs<ExtArgs>>): Prisma__subjectClient<$Result.GetResult<Prisma.$subjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the attendance model
   */
  interface attendanceFieldRefs {
    readonly id: FieldRef<"attendance", 'Int'>
    readonly studentId: FieldRef<"attendance", 'Int'>
    readonly subjectId: FieldRef<"attendance", 'Int'>
    readonly teacherId: FieldRef<"attendance", 'Int'>
    readonly date: FieldRef<"attendance", 'DateTime'>
    readonly is_present: FieldRef<"attendance", 'Status'>
  }
    

  // Custom InputTypes
  /**
   * attendance findUnique
   */
  export type attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findUniqueOrThrow
   */
  export type attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance findFirst
   */
  export type attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findFirstOrThrow
   */
  export type attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendance to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance findMany
   */
  export type attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter, which attendances to fetch.
     */
    where?: attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of attendances to fetch.
     */
    orderBy?: attendanceOrderByWithRelationInput | attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing attendances.
     */
    cursor?: attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * attendance create
   */
  export type attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a attendance.
     */
    data: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
  }

  /**
   * attendance createMany
   */
  export type attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * attendance createManyAndReturn
   */
  export type attendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * The data used to create many attendances.
     */
    data: attendanceCreateManyInput | attendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance update
   */
  export type attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a attendance.
     */
    data: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
    /**
     * Choose, which attendance to update.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance updateMany
   */
  export type attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
  }

  /**
   * attendance updateManyAndReturn
   */
  export type attendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * The data used to update attendances.
     */
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyInput>
    /**
     * Filter which attendances to update
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * attendance upsert
   */
  export type attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the attendance to update in case it exists.
     */
    where: attendanceWhereUniqueInput
    /**
     * In case the attendance found by the `where` argument doesn't exist, create a new attendance with this data.
     */
    create: XOR<attendanceCreateInput, attendanceUncheckedCreateInput>
    /**
     * In case the attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<attendanceUpdateInput, attendanceUncheckedUpdateInput>
  }

  /**
   * attendance delete
   */
  export type attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
    /**
     * Filter which attendance to delete.
     */
    where: attendanceWhereUniqueInput
  }

  /**
   * attendance deleteMany
   */
  export type attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which attendances to delete
     */
    where?: attendanceWhereInput
    /**
     * Limit how many attendances to delete.
     */
    limit?: number
  }

  /**
   * attendance without action
   */
  export type attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the attendance
     */
    select?: attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the attendance
     */
    omit?: attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: attendanceInclude<ExtArgs> | null
  }


  /**
   * Model pdf
   */

  export type AggregatePdf = {
    _count: PdfCountAggregateOutputType | null
    _avg: PdfAvgAggregateOutputType | null
    _sum: PdfSumAggregateOutputType | null
    _min: PdfMinAggregateOutputType | null
    _max: PdfMaxAggregateOutputType | null
  }

  export type PdfAvgAggregateOutputType = {
    id: number | null
    year: number | null
    posted_by: number | null
  }

  export type PdfSumAggregateOutputType = {
    id: number | null
    year: number | null
    posted_by: number | null
  }

  export type PdfMinAggregateOutputType = {
    id: number | null
    fileName: string | null
    category: $Enums.Category | null
    year: number | null
    Department: $Enums.Course | null
    Pyq_category: $Enums.paper_type | null
    pdf_Url: string | null
    posted_by: number | null
    expireAt: Date | null
    createdAt: Date | null
  }

  export type PdfMaxAggregateOutputType = {
    id: number | null
    fileName: string | null
    category: $Enums.Category | null
    year: number | null
    Department: $Enums.Course | null
    Pyq_category: $Enums.paper_type | null
    pdf_Url: string | null
    posted_by: number | null
    expireAt: Date | null
    createdAt: Date | null
  }

  export type PdfCountAggregateOutputType = {
    id: number
    fileName: number
    category: number
    year: number
    Department: number
    Pyq_category: number
    pdf_Url: number
    posted_by: number
    expireAt: number
    createdAt: number
    _all: number
  }


  export type PdfAvgAggregateInputType = {
    id?: true
    year?: true
    posted_by?: true
  }

  export type PdfSumAggregateInputType = {
    id?: true
    year?: true
    posted_by?: true
  }

  export type PdfMinAggregateInputType = {
    id?: true
    fileName?: true
    category?: true
    year?: true
    Department?: true
    Pyq_category?: true
    pdf_Url?: true
    posted_by?: true
    expireAt?: true
    createdAt?: true
  }

  export type PdfMaxAggregateInputType = {
    id?: true
    fileName?: true
    category?: true
    year?: true
    Department?: true
    Pyq_category?: true
    pdf_Url?: true
    posted_by?: true
    expireAt?: true
    createdAt?: true
  }

  export type PdfCountAggregateInputType = {
    id?: true
    fileName?: true
    category?: true
    year?: true
    Department?: true
    Pyq_category?: true
    pdf_Url?: true
    posted_by?: true
    expireAt?: true
    createdAt?: true
    _all?: true
  }

  export type PdfAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdf to aggregate.
     */
    where?: pdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pdfs
    **/
    _count?: true | PdfCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PdfAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PdfSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PdfMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PdfMaxAggregateInputType
  }

  export type GetPdfAggregateType<T extends PdfAggregateArgs> = {
        [P in keyof T & keyof AggregatePdf]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePdf[P]>
      : GetScalarType<T[P], AggregatePdf[P]>
  }




  export type pdfGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pdfWhereInput
    orderBy?: pdfOrderByWithAggregationInput | pdfOrderByWithAggregationInput[]
    by: PdfScalarFieldEnum[] | PdfScalarFieldEnum
    having?: pdfScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PdfCountAggregateInputType | true
    _avg?: PdfAvgAggregateInputType
    _sum?: PdfSumAggregateInputType
    _min?: PdfMinAggregateInputType
    _max?: PdfMaxAggregateInputType
  }

  export type PdfGroupByOutputType = {
    id: number
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category: $Enums.paper_type | null
    pdf_Url: string | null
    posted_by: number
    expireAt: Date
    createdAt: Date
    _count: PdfCountAggregateOutputType | null
    _avg: PdfAvgAggregateOutputType | null
    _sum: PdfSumAggregateOutputType | null
    _min: PdfMinAggregateOutputType | null
    _max: PdfMaxAggregateOutputType | null
  }

  type GetPdfGroupByPayload<T extends pdfGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PdfGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PdfGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PdfGroupByOutputType[P]>
            : GetScalarType<T[P], PdfGroupByOutputType[P]>
        }
      >
    >


  export type pdfSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    category?: boolean
    year?: boolean
    Department?: boolean
    Pyq_category?: boolean
    pdf_Url?: boolean
    posted_by?: boolean
    expireAt?: boolean
    createdAt?: boolean
    poster?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type pdfSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    category?: boolean
    year?: boolean
    Department?: boolean
    Pyq_category?: boolean
    pdf_Url?: boolean
    posted_by?: boolean
    expireAt?: boolean
    createdAt?: boolean
    poster?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type pdfSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    category?: boolean
    year?: boolean
    Department?: boolean
    Pyq_category?: boolean
    pdf_Url?: boolean
    posted_by?: boolean
    expireAt?: boolean
    createdAt?: boolean
    poster?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pdf"]>

  export type pdfSelectScalar = {
    id?: boolean
    fileName?: boolean
    category?: boolean
    year?: boolean
    Department?: boolean
    Pyq_category?: boolean
    pdf_Url?: boolean
    posted_by?: boolean
    expireAt?: boolean
    createdAt?: boolean
  }

  export type pdfOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "category" | "year" | "Department" | "Pyq_category" | "pdf_Url" | "posted_by" | "expireAt" | "createdAt", ExtArgs["result"]["pdf"]>
  export type pdfInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | userDefaultArgs<ExtArgs>
  }
  export type pdfIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | userDefaultArgs<ExtArgs>
  }
  export type pdfIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $pdfPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pdf"
    objects: {
      poster: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fileName: string
      category: $Enums.Category
      year: number
      Department: $Enums.Course
      Pyq_category: $Enums.paper_type | null
      pdf_Url: string | null
      posted_by: number
      expireAt: Date
      createdAt: Date
    }, ExtArgs["result"]["pdf"]>
    composites: {}
  }

  type pdfGetPayload<S extends boolean | null | undefined | pdfDefaultArgs> = $Result.GetResult<Prisma.$pdfPayload, S>

  type pdfCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pdfFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PdfCountAggregateInputType | true
    }

  export interface pdfDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pdf'], meta: { name: 'pdf' } }
    /**
     * Find zero or one Pdf that matches the filter.
     * @param {pdfFindUniqueArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pdfFindUniqueArgs>(args: SelectSubset<T, pdfFindUniqueArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pdf that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pdfFindUniqueOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pdfFindUniqueOrThrowArgs>(args: SelectSubset<T, pdfFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pdf that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfFindFirstArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pdfFindFirstArgs>(args?: SelectSubset<T, pdfFindFirstArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pdf that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfFindFirstOrThrowArgs} args - Arguments to find a Pdf
     * @example
     * // Get one Pdf
     * const pdf = await prisma.pdf.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pdfFindFirstOrThrowArgs>(args?: SelectSubset<T, pdfFindFirstOrThrowArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pdfs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pdfs
     * const pdfs = await prisma.pdf.findMany()
     * 
     * // Get first 10 Pdfs
     * const pdfs = await prisma.pdf.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pdfWithIdOnly = await prisma.pdf.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pdfFindManyArgs>(args?: SelectSubset<T, pdfFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pdf.
     * @param {pdfCreateArgs} args - Arguments to create a Pdf.
     * @example
     * // Create one Pdf
     * const Pdf = await prisma.pdf.create({
     *   data: {
     *     // ... data to create a Pdf
     *   }
     * })
     * 
     */
    create<T extends pdfCreateArgs>(args: SelectSubset<T, pdfCreateArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pdfs.
     * @param {pdfCreateManyArgs} args - Arguments to create many Pdfs.
     * @example
     * // Create many Pdfs
     * const pdf = await prisma.pdf.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pdfCreateManyArgs>(args?: SelectSubset<T, pdfCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pdfs and returns the data saved in the database.
     * @param {pdfCreateManyAndReturnArgs} args - Arguments to create many Pdfs.
     * @example
     * // Create many Pdfs
     * const pdf = await prisma.pdf.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pdfs and only return the `id`
     * const pdfWithIdOnly = await prisma.pdf.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends pdfCreateManyAndReturnArgs>(args?: SelectSubset<T, pdfCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pdf.
     * @param {pdfDeleteArgs} args - Arguments to delete one Pdf.
     * @example
     * // Delete one Pdf
     * const Pdf = await prisma.pdf.delete({
     *   where: {
     *     // ... filter to delete one Pdf
     *   }
     * })
     * 
     */
    delete<T extends pdfDeleteArgs>(args: SelectSubset<T, pdfDeleteArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pdf.
     * @param {pdfUpdateArgs} args - Arguments to update one Pdf.
     * @example
     * // Update one Pdf
     * const pdf = await prisma.pdf.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pdfUpdateArgs>(args: SelectSubset<T, pdfUpdateArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pdfs.
     * @param {pdfDeleteManyArgs} args - Arguments to filter Pdfs to delete.
     * @example
     * // Delete a few Pdfs
     * const { count } = await prisma.pdf.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pdfDeleteManyArgs>(args?: SelectSubset<T, pdfDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pdfUpdateManyArgs>(args: SelectSubset<T, pdfUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pdfs and returns the data updated in the database.
     * @param {pdfUpdateManyAndReturnArgs} args - Arguments to update many Pdfs.
     * @example
     * // Update many Pdfs
     * const pdf = await prisma.pdf.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pdfs and only return the `id`
     * const pdfWithIdOnly = await prisma.pdf.updateManyAndReturn({
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
    updateManyAndReturn<T extends pdfUpdateManyAndReturnArgs>(args: SelectSubset<T, pdfUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pdf.
     * @param {pdfUpsertArgs} args - Arguments to update or create a Pdf.
     * @example
     * // Update or create a Pdf
     * const pdf = await prisma.pdf.upsert({
     *   create: {
     *     // ... data to create a Pdf
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pdf we want to update
     *   }
     * })
     */
    upsert<T extends pdfUpsertArgs>(args: SelectSubset<T, pdfUpsertArgs<ExtArgs>>): Prisma__pdfClient<$Result.GetResult<Prisma.$pdfPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pdfs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfCountArgs} args - Arguments to filter Pdfs to count.
     * @example
     * // Count the number of Pdfs
     * const count = await prisma.pdf.count({
     *   where: {
     *     // ... the filter for the Pdfs we want to count
     *   }
     * })
    **/
    count<T extends pdfCountArgs>(
      args?: Subset<T, pdfCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PdfCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PdfAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PdfAggregateArgs>(args: Subset<T, PdfAggregateArgs>): Prisma.PrismaPromise<GetPdfAggregateType<T>>

    /**
     * Group by Pdf.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pdfGroupByArgs} args - Group by arguments.
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
      T extends pdfGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pdfGroupByArgs['orderBy'] }
        : { orderBy?: pdfGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, pdfGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPdfGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pdf model
   */
  readonly fields: pdfFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pdf.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pdfClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poster<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the pdf model
   */
  interface pdfFieldRefs {
    readonly id: FieldRef<"pdf", 'Int'>
    readonly fileName: FieldRef<"pdf", 'String'>
    readonly category: FieldRef<"pdf", 'Category'>
    readonly year: FieldRef<"pdf", 'Int'>
    readonly Department: FieldRef<"pdf", 'Course'>
    readonly Pyq_category: FieldRef<"pdf", 'paper_type'>
    readonly pdf_Url: FieldRef<"pdf", 'String'>
    readonly posted_by: FieldRef<"pdf", 'Int'>
    readonly expireAt: FieldRef<"pdf", 'DateTime'>
    readonly createdAt: FieldRef<"pdf", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * pdf findUnique
   */
  export type pdfFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * Filter, which pdf to fetch.
     */
    where: pdfWhereUniqueInput
  }

  /**
   * pdf findUniqueOrThrow
   */
  export type pdfFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * Filter, which pdf to fetch.
     */
    where: pdfWhereUniqueInput
  }

  /**
   * pdf findFirst
   */
  export type pdfFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * Filter, which pdf to fetch.
     */
    where?: pdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pdfs.
     */
    cursor?: pdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * pdf findFirstOrThrow
   */
  export type pdfFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * Filter, which pdf to fetch.
     */
    where?: pdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pdfs.
     */
    cursor?: pdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pdfs.
     */
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * pdf findMany
   */
  export type pdfFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * Filter, which pdfs to fetch.
     */
    where?: pdfWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pdfs to fetch.
     */
    orderBy?: pdfOrderByWithRelationInput | pdfOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pdfs.
     */
    cursor?: pdfWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pdfs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pdfs.
     */
    skip?: number
    distinct?: PdfScalarFieldEnum | PdfScalarFieldEnum[]
  }

  /**
   * pdf create
   */
  export type pdfCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * The data needed to create a pdf.
     */
    data: XOR<pdfCreateInput, pdfUncheckedCreateInput>
  }

  /**
   * pdf createMany
   */
  export type pdfCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pdfs.
     */
    data: pdfCreateManyInput | pdfCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pdf createManyAndReturn
   */
  export type pdfCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * The data used to create many pdfs.
     */
    data: pdfCreateManyInput | pdfCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * pdf update
   */
  export type pdfUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * The data needed to update a pdf.
     */
    data: XOR<pdfUpdateInput, pdfUncheckedUpdateInput>
    /**
     * Choose, which pdf to update.
     */
    where: pdfWhereUniqueInput
  }

  /**
   * pdf updateMany
   */
  export type pdfUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pdfs.
     */
    data: XOR<pdfUpdateManyMutationInput, pdfUncheckedUpdateManyInput>
    /**
     * Filter which pdfs to update
     */
    where?: pdfWhereInput
    /**
     * Limit how many pdfs to update.
     */
    limit?: number
  }

  /**
   * pdf updateManyAndReturn
   */
  export type pdfUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * The data used to update pdfs.
     */
    data: XOR<pdfUpdateManyMutationInput, pdfUncheckedUpdateManyInput>
    /**
     * Filter which pdfs to update
     */
    where?: pdfWhereInput
    /**
     * Limit how many pdfs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * pdf upsert
   */
  export type pdfUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * The filter to search for the pdf to update in case it exists.
     */
    where: pdfWhereUniqueInput
    /**
     * In case the pdf found by the `where` argument doesn't exist, create a new pdf with this data.
     */
    create: XOR<pdfCreateInput, pdfUncheckedCreateInput>
    /**
     * In case the pdf was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pdfUpdateInput, pdfUncheckedUpdateInput>
  }

  /**
   * pdf delete
   */
  export type pdfDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
    /**
     * Filter which pdf to delete.
     */
    where: pdfWhereUniqueInput
  }

  /**
   * pdf deleteMany
   */
  export type pdfDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pdfs to delete
     */
    where?: pdfWhereInput
    /**
     * Limit how many pdfs to delete.
     */
    limit?: number
  }

  /**
   * pdf without action
   */
  export type pdfDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pdf
     */
    select?: pdfSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pdf
     */
    omit?: pdfOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: pdfInclude<ExtArgs> | null
  }


  /**
   * Model Ebook
   */

  export type AggregateEbook = {
    _count: EbookCountAggregateOutputType | null
    _avg: EbookAvgAggregateOutputType | null
    _sum: EbookSumAggregateOutputType | null
    _min: EbookMinAggregateOutputType | null
    _max: EbookMaxAggregateOutputType | null
  }

  export type EbookAvgAggregateOutputType = {
    id: number | null
    ThumbnailId: number | null
  }

  export type EbookSumAggregateOutputType = {
    id: number | null
    ThumbnailId: number | null
  }

  export type EbookMinAggregateOutputType = {
    id: number | null
    book_name: string | null
    writer: string | null
    genre: string | null
    description: string | null
    pdf_name: string | null
    pdf_url: string | null
    pdf_url_createdAt: Date | null
    ThumbnailId: number | null
    createdAt: Date | null
  }

  export type EbookMaxAggregateOutputType = {
    id: number | null
    book_name: string | null
    writer: string | null
    genre: string | null
    description: string | null
    pdf_name: string | null
    pdf_url: string | null
    pdf_url_createdAt: Date | null
    ThumbnailId: number | null
    createdAt: Date | null
  }

  export type EbookCountAggregateOutputType = {
    id: number
    book_name: number
    writer: number
    genre: number
    description: number
    pdf_name: number
    pdf_url: number
    pdf_url_createdAt: number
    ThumbnailId: number
    createdAt: number
    _all: number
  }


  export type EbookAvgAggregateInputType = {
    id?: true
    ThumbnailId?: true
  }

  export type EbookSumAggregateInputType = {
    id?: true
    ThumbnailId?: true
  }

  export type EbookMinAggregateInputType = {
    id?: true
    book_name?: true
    writer?: true
    genre?: true
    description?: true
    pdf_name?: true
    pdf_url?: true
    pdf_url_createdAt?: true
    ThumbnailId?: true
    createdAt?: true
  }

  export type EbookMaxAggregateInputType = {
    id?: true
    book_name?: true
    writer?: true
    genre?: true
    description?: true
    pdf_name?: true
    pdf_url?: true
    pdf_url_createdAt?: true
    ThumbnailId?: true
    createdAt?: true
  }

  export type EbookCountAggregateInputType = {
    id?: true
    book_name?: true
    writer?: true
    genre?: true
    description?: true
    pdf_name?: true
    pdf_url?: true
    pdf_url_createdAt?: true
    ThumbnailId?: true
    createdAt?: true
    _all?: true
  }

  export type EbookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ebook to aggregate.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ebooks
    **/
    _count?: true | EbookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EbookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EbookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EbookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EbookMaxAggregateInputType
  }

  export type GetEbookAggregateType<T extends EbookAggregateArgs> = {
        [P in keyof T & keyof AggregateEbook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEbook[P]>
      : GetScalarType<T[P], AggregateEbook[P]>
  }




  export type EbookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EbookWhereInput
    orderBy?: EbookOrderByWithAggregationInput | EbookOrderByWithAggregationInput[]
    by: EbookScalarFieldEnum[] | EbookScalarFieldEnum
    having?: EbookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EbookCountAggregateInputType | true
    _avg?: EbookAvgAggregateInputType
    _sum?: EbookSumAggregateInputType
    _min?: EbookMinAggregateInputType
    _max?: EbookMaxAggregateInputType
  }

  export type EbookGroupByOutputType = {
    id: number
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url: string | null
    pdf_url_createdAt: Date
    ThumbnailId: number
    createdAt: Date
    _count: EbookCountAggregateOutputType | null
    _avg: EbookAvgAggregateOutputType | null
    _sum: EbookSumAggregateOutputType | null
    _min: EbookMinAggregateOutputType | null
    _max: EbookMaxAggregateOutputType | null
  }

  type GetEbookGroupByPayload<T extends EbookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EbookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EbookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EbookGroupByOutputType[P]>
            : GetScalarType<T[P], EbookGroupByOutputType[P]>
        }
      >
    >


  export type EbookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_name?: boolean
    writer?: boolean
    genre?: boolean
    description?: boolean
    pdf_name?: boolean
    pdf_url?: boolean
    pdf_url_createdAt?: boolean
    ThumbnailId?: boolean
    createdAt?: boolean
    pdf_thumbnail?: boolean | ThumbnailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_name?: boolean
    writer?: boolean
    genre?: boolean
    description?: boolean
    pdf_name?: boolean
    pdf_url?: boolean
    pdf_url_createdAt?: boolean
    ThumbnailId?: boolean
    createdAt?: boolean
    pdf_thumbnail?: boolean | ThumbnailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_name?: boolean
    writer?: boolean
    genre?: boolean
    description?: boolean
    pdf_name?: boolean
    pdf_url?: boolean
    pdf_url_createdAt?: boolean
    ThumbnailId?: boolean
    createdAt?: boolean
    pdf_thumbnail?: boolean | ThumbnailDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ebook"]>

  export type EbookSelectScalar = {
    id?: boolean
    book_name?: boolean
    writer?: boolean
    genre?: boolean
    description?: boolean
    pdf_name?: boolean
    pdf_url?: boolean
    pdf_url_createdAt?: boolean
    ThumbnailId?: boolean
    createdAt?: boolean
  }

  export type EbookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_name" | "writer" | "genre" | "description" | "pdf_name" | "pdf_url" | "pdf_url_createdAt" | "ThumbnailId" | "createdAt", ExtArgs["result"]["ebook"]>
  export type EbookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf_thumbnail?: boolean | ThumbnailDefaultArgs<ExtArgs>
  }
  export type EbookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf_thumbnail?: boolean | ThumbnailDefaultArgs<ExtArgs>
  }
  export type EbookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pdf_thumbnail?: boolean | ThumbnailDefaultArgs<ExtArgs>
  }

  export type $EbookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ebook"
    objects: {
      pdf_thumbnail: Prisma.$ThumbnailPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book_name: string
      writer: string
      genre: string
      description: string
      pdf_name: string
      pdf_url: string | null
      pdf_url_createdAt: Date
      ThumbnailId: number
      createdAt: Date
    }, ExtArgs["result"]["ebook"]>
    composites: {}
  }

  type EbookGetPayload<S extends boolean | null | undefined | EbookDefaultArgs> = $Result.GetResult<Prisma.$EbookPayload, S>

  type EbookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EbookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EbookCountAggregateInputType | true
    }

  export interface EbookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ebook'], meta: { name: 'Ebook' } }
    /**
     * Find zero or one Ebook that matches the filter.
     * @param {EbookFindUniqueArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EbookFindUniqueArgs>(args: SelectSubset<T, EbookFindUniqueArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ebook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EbookFindUniqueOrThrowArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EbookFindUniqueOrThrowArgs>(args: SelectSubset<T, EbookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ebook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookFindFirstArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EbookFindFirstArgs>(args?: SelectSubset<T, EbookFindFirstArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ebook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookFindFirstOrThrowArgs} args - Arguments to find a Ebook
     * @example
     * // Get one Ebook
     * const ebook = await prisma.ebook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EbookFindFirstOrThrowArgs>(args?: SelectSubset<T, EbookFindFirstOrThrowArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ebooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ebooks
     * const ebooks = await prisma.ebook.findMany()
     * 
     * // Get first 10 Ebooks
     * const ebooks = await prisma.ebook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ebookWithIdOnly = await prisma.ebook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EbookFindManyArgs>(args?: SelectSubset<T, EbookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ebook.
     * @param {EbookCreateArgs} args - Arguments to create a Ebook.
     * @example
     * // Create one Ebook
     * const Ebook = await prisma.ebook.create({
     *   data: {
     *     // ... data to create a Ebook
     *   }
     * })
     * 
     */
    create<T extends EbookCreateArgs>(args: SelectSubset<T, EbookCreateArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ebooks.
     * @param {EbookCreateManyArgs} args - Arguments to create many Ebooks.
     * @example
     * // Create many Ebooks
     * const ebook = await prisma.ebook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EbookCreateManyArgs>(args?: SelectSubset<T, EbookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ebooks and returns the data saved in the database.
     * @param {EbookCreateManyAndReturnArgs} args - Arguments to create many Ebooks.
     * @example
     * // Create many Ebooks
     * const ebook = await prisma.ebook.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ebooks and only return the `id`
     * const ebookWithIdOnly = await prisma.ebook.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EbookCreateManyAndReturnArgs>(args?: SelectSubset<T, EbookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ebook.
     * @param {EbookDeleteArgs} args - Arguments to delete one Ebook.
     * @example
     * // Delete one Ebook
     * const Ebook = await prisma.ebook.delete({
     *   where: {
     *     // ... filter to delete one Ebook
     *   }
     * })
     * 
     */
    delete<T extends EbookDeleteArgs>(args: SelectSubset<T, EbookDeleteArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ebook.
     * @param {EbookUpdateArgs} args - Arguments to update one Ebook.
     * @example
     * // Update one Ebook
     * const ebook = await prisma.ebook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EbookUpdateArgs>(args: SelectSubset<T, EbookUpdateArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ebooks.
     * @param {EbookDeleteManyArgs} args - Arguments to filter Ebooks to delete.
     * @example
     * // Delete a few Ebooks
     * const { count } = await prisma.ebook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EbookDeleteManyArgs>(args?: SelectSubset<T, EbookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ebooks
     * const ebook = await prisma.ebook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EbookUpdateManyArgs>(args: SelectSubset<T, EbookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ebooks and returns the data updated in the database.
     * @param {EbookUpdateManyAndReturnArgs} args - Arguments to update many Ebooks.
     * @example
     * // Update many Ebooks
     * const ebook = await prisma.ebook.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ebooks and only return the `id`
     * const ebookWithIdOnly = await prisma.ebook.updateManyAndReturn({
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
    updateManyAndReturn<T extends EbookUpdateManyAndReturnArgs>(args: SelectSubset<T, EbookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ebook.
     * @param {EbookUpsertArgs} args - Arguments to update or create a Ebook.
     * @example
     * // Update or create a Ebook
     * const ebook = await prisma.ebook.upsert({
     *   create: {
     *     // ... data to create a Ebook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ebook we want to update
     *   }
     * })
     */
    upsert<T extends EbookUpsertArgs>(args: SelectSubset<T, EbookUpsertArgs<ExtArgs>>): Prisma__EbookClient<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ebooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookCountArgs} args - Arguments to filter Ebooks to count.
     * @example
     * // Count the number of Ebooks
     * const count = await prisma.ebook.count({
     *   where: {
     *     // ... the filter for the Ebooks we want to count
     *   }
     * })
    **/
    count<T extends EbookCountArgs>(
      args?: Subset<T, EbookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EbookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EbookAggregateArgs>(args: Subset<T, EbookAggregateArgs>): Prisma.PrismaPromise<GetEbookAggregateType<T>>

    /**
     * Group by Ebook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EbookGroupByArgs} args - Group by arguments.
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
      T extends EbookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EbookGroupByArgs['orderBy'] }
        : { orderBy?: EbookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EbookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEbookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ebook model
   */
  readonly fields: EbookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ebook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EbookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pdf_thumbnail<T extends ThumbnailDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ThumbnailDefaultArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ebook model
   */
  interface EbookFieldRefs {
    readonly id: FieldRef<"Ebook", 'Int'>
    readonly book_name: FieldRef<"Ebook", 'String'>
    readonly writer: FieldRef<"Ebook", 'String'>
    readonly genre: FieldRef<"Ebook", 'String'>
    readonly description: FieldRef<"Ebook", 'String'>
    readonly pdf_name: FieldRef<"Ebook", 'String'>
    readonly pdf_url: FieldRef<"Ebook", 'String'>
    readonly pdf_url_createdAt: FieldRef<"Ebook", 'DateTime'>
    readonly ThumbnailId: FieldRef<"Ebook", 'Int'>
    readonly createdAt: FieldRef<"Ebook", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ebook findUnique
   */
  export type EbookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook findUniqueOrThrow
   */
  export type EbookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook findFirst
   */
  export type EbookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ebooks.
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ebooks.
     */
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Ebook findFirstOrThrow
   */
  export type EbookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebook to fetch.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ebooks.
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ebooks.
     */
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Ebook findMany
   */
  export type EbookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter, which Ebooks to fetch.
     */
    where?: EbookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ebooks to fetch.
     */
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ebooks.
     */
    cursor?: EbookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ebooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ebooks.
     */
    skip?: number
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Ebook create
   */
  export type EbookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * The data needed to create a Ebook.
     */
    data: XOR<EbookCreateInput, EbookUncheckedCreateInput>
  }

  /**
   * Ebook createMany
   */
  export type EbookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ebooks.
     */
    data: EbookCreateManyInput | EbookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ebook createManyAndReturn
   */
  export type EbookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * The data used to create many Ebooks.
     */
    data: EbookCreateManyInput | EbookCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ebook update
   */
  export type EbookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * The data needed to update a Ebook.
     */
    data: XOR<EbookUpdateInput, EbookUncheckedUpdateInput>
    /**
     * Choose, which Ebook to update.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook updateMany
   */
  export type EbookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ebooks.
     */
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyInput>
    /**
     * Filter which Ebooks to update
     */
    where?: EbookWhereInput
    /**
     * Limit how many Ebooks to update.
     */
    limit?: number
  }

  /**
   * Ebook updateManyAndReturn
   */
  export type EbookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * The data used to update Ebooks.
     */
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyInput>
    /**
     * Filter which Ebooks to update
     */
    where?: EbookWhereInput
    /**
     * Limit how many Ebooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ebook upsert
   */
  export type EbookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * The filter to search for the Ebook to update in case it exists.
     */
    where: EbookWhereUniqueInput
    /**
     * In case the Ebook found by the `where` argument doesn't exist, create a new Ebook with this data.
     */
    create: XOR<EbookCreateInput, EbookUncheckedCreateInput>
    /**
     * In case the Ebook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EbookUpdateInput, EbookUncheckedUpdateInput>
  }

  /**
   * Ebook delete
   */
  export type EbookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    /**
     * Filter which Ebook to delete.
     */
    where: EbookWhereUniqueInput
  }

  /**
   * Ebook deleteMany
   */
  export type EbookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ebooks to delete
     */
    where?: EbookWhereInput
    /**
     * Limit how many Ebooks to delete.
     */
    limit?: number
  }

  /**
   * Ebook without action
   */
  export type EbookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
  }


  /**
   * Model Thumbnail
   */

  export type AggregateThumbnail = {
    _count: ThumbnailCountAggregateOutputType | null
    _avg: ThumbnailAvgAggregateOutputType | null
    _sum: ThumbnailSumAggregateOutputType | null
    _min: ThumbnailMinAggregateOutputType | null
    _max: ThumbnailMaxAggregateOutputType | null
  }

  export type ThumbnailAvgAggregateOutputType = {
    id: number | null
  }

  export type ThumbnailSumAggregateOutputType = {
    id: number | null
  }

  export type ThumbnailMinAggregateOutputType = {
    id: number | null
    image_url: string | null
    public_id: string | null
    createdAt: Date | null
  }

  export type ThumbnailMaxAggregateOutputType = {
    id: number | null
    image_url: string | null
    public_id: string | null
    createdAt: Date | null
  }

  export type ThumbnailCountAggregateOutputType = {
    id: number
    image_url: number
    public_id: number
    createdAt: number
    _all: number
  }


  export type ThumbnailAvgAggregateInputType = {
    id?: true
  }

  export type ThumbnailSumAggregateInputType = {
    id?: true
  }

  export type ThumbnailMinAggregateInputType = {
    id?: true
    image_url?: true
    public_id?: true
    createdAt?: true
  }

  export type ThumbnailMaxAggregateInputType = {
    id?: true
    image_url?: true
    public_id?: true
    createdAt?: true
  }

  export type ThumbnailCountAggregateInputType = {
    id?: true
    image_url?: true
    public_id?: true
    createdAt?: true
    _all?: true
  }

  export type ThumbnailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thumbnail to aggregate.
     */
    where?: ThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thumbnails to fetch.
     */
    orderBy?: ThumbnailOrderByWithRelationInput | ThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Thumbnails
    **/
    _count?: true | ThumbnailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ThumbnailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ThumbnailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ThumbnailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ThumbnailMaxAggregateInputType
  }

  export type GetThumbnailAggregateType<T extends ThumbnailAggregateArgs> = {
        [P in keyof T & keyof AggregateThumbnail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateThumbnail[P]>
      : GetScalarType<T[P], AggregateThumbnail[P]>
  }




  export type ThumbnailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ThumbnailWhereInput
    orderBy?: ThumbnailOrderByWithAggregationInput | ThumbnailOrderByWithAggregationInput[]
    by: ThumbnailScalarFieldEnum[] | ThumbnailScalarFieldEnum
    having?: ThumbnailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ThumbnailCountAggregateInputType | true
    _avg?: ThumbnailAvgAggregateInputType
    _sum?: ThumbnailSumAggregateInputType
    _min?: ThumbnailMinAggregateInputType
    _max?: ThumbnailMaxAggregateInputType
  }

  export type ThumbnailGroupByOutputType = {
    id: number
    image_url: string
    public_id: string
    createdAt: Date
    _count: ThumbnailCountAggregateOutputType | null
    _avg: ThumbnailAvgAggregateOutputType | null
    _sum: ThumbnailSumAggregateOutputType | null
    _min: ThumbnailMinAggregateOutputType | null
    _max: ThumbnailMaxAggregateOutputType | null
  }

  type GetThumbnailGroupByPayload<T extends ThumbnailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ThumbnailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ThumbnailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ThumbnailGroupByOutputType[P]>
            : GetScalarType<T[P], ThumbnailGroupByOutputType[P]>
        }
      >
    >


  export type ThumbnailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    public_id?: boolean
    createdAt?: boolean
    ebooks?: boolean | Thumbnail$ebooksArgs<ExtArgs>
    _count?: boolean | ThumbnailCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["thumbnail"]>

  export type ThumbnailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    public_id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["thumbnail"]>

  export type ThumbnailSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image_url?: boolean
    public_id?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["thumbnail"]>

  export type ThumbnailSelectScalar = {
    id?: boolean
    image_url?: boolean
    public_id?: boolean
    createdAt?: boolean
  }

  export type ThumbnailOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image_url" | "public_id" | "createdAt", ExtArgs["result"]["thumbnail"]>
  export type ThumbnailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ebooks?: boolean | Thumbnail$ebooksArgs<ExtArgs>
    _count?: boolean | ThumbnailCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ThumbnailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ThumbnailIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ThumbnailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Thumbnail"
    objects: {
      ebooks: Prisma.$EbookPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image_url: string
      public_id: string
      createdAt: Date
    }, ExtArgs["result"]["thumbnail"]>
    composites: {}
  }

  type ThumbnailGetPayload<S extends boolean | null | undefined | ThumbnailDefaultArgs> = $Result.GetResult<Prisma.$ThumbnailPayload, S>

  type ThumbnailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ThumbnailFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ThumbnailCountAggregateInputType | true
    }

  export interface ThumbnailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Thumbnail'], meta: { name: 'Thumbnail' } }
    /**
     * Find zero or one Thumbnail that matches the filter.
     * @param {ThumbnailFindUniqueArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ThumbnailFindUniqueArgs>(args: SelectSubset<T, ThumbnailFindUniqueArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Thumbnail that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ThumbnailFindUniqueOrThrowArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ThumbnailFindUniqueOrThrowArgs>(args: SelectSubset<T, ThumbnailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thumbnail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailFindFirstArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ThumbnailFindFirstArgs>(args?: SelectSubset<T, ThumbnailFindFirstArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Thumbnail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailFindFirstOrThrowArgs} args - Arguments to find a Thumbnail
     * @example
     * // Get one Thumbnail
     * const thumbnail = await prisma.thumbnail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ThumbnailFindFirstOrThrowArgs>(args?: SelectSubset<T, ThumbnailFindFirstOrThrowArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Thumbnails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Thumbnails
     * const thumbnails = await prisma.thumbnail.findMany()
     * 
     * // Get first 10 Thumbnails
     * const thumbnails = await prisma.thumbnail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const thumbnailWithIdOnly = await prisma.thumbnail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ThumbnailFindManyArgs>(args?: SelectSubset<T, ThumbnailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Thumbnail.
     * @param {ThumbnailCreateArgs} args - Arguments to create a Thumbnail.
     * @example
     * // Create one Thumbnail
     * const Thumbnail = await prisma.thumbnail.create({
     *   data: {
     *     // ... data to create a Thumbnail
     *   }
     * })
     * 
     */
    create<T extends ThumbnailCreateArgs>(args: SelectSubset<T, ThumbnailCreateArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Thumbnails.
     * @param {ThumbnailCreateManyArgs} args - Arguments to create many Thumbnails.
     * @example
     * // Create many Thumbnails
     * const thumbnail = await prisma.thumbnail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ThumbnailCreateManyArgs>(args?: SelectSubset<T, ThumbnailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Thumbnails and returns the data saved in the database.
     * @param {ThumbnailCreateManyAndReturnArgs} args - Arguments to create many Thumbnails.
     * @example
     * // Create many Thumbnails
     * const thumbnail = await prisma.thumbnail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Thumbnails and only return the `id`
     * const thumbnailWithIdOnly = await prisma.thumbnail.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ThumbnailCreateManyAndReturnArgs>(args?: SelectSubset<T, ThumbnailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Thumbnail.
     * @param {ThumbnailDeleteArgs} args - Arguments to delete one Thumbnail.
     * @example
     * // Delete one Thumbnail
     * const Thumbnail = await prisma.thumbnail.delete({
     *   where: {
     *     // ... filter to delete one Thumbnail
     *   }
     * })
     * 
     */
    delete<T extends ThumbnailDeleteArgs>(args: SelectSubset<T, ThumbnailDeleteArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Thumbnail.
     * @param {ThumbnailUpdateArgs} args - Arguments to update one Thumbnail.
     * @example
     * // Update one Thumbnail
     * const thumbnail = await prisma.thumbnail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ThumbnailUpdateArgs>(args: SelectSubset<T, ThumbnailUpdateArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Thumbnails.
     * @param {ThumbnailDeleteManyArgs} args - Arguments to filter Thumbnails to delete.
     * @example
     * // Delete a few Thumbnails
     * const { count } = await prisma.thumbnail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ThumbnailDeleteManyArgs>(args?: SelectSubset<T, ThumbnailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Thumbnails
     * const thumbnail = await prisma.thumbnail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ThumbnailUpdateManyArgs>(args: SelectSubset<T, ThumbnailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Thumbnails and returns the data updated in the database.
     * @param {ThumbnailUpdateManyAndReturnArgs} args - Arguments to update many Thumbnails.
     * @example
     * // Update many Thumbnails
     * const thumbnail = await prisma.thumbnail.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Thumbnails and only return the `id`
     * const thumbnailWithIdOnly = await prisma.thumbnail.updateManyAndReturn({
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
    updateManyAndReturn<T extends ThumbnailUpdateManyAndReturnArgs>(args: SelectSubset<T, ThumbnailUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Thumbnail.
     * @param {ThumbnailUpsertArgs} args - Arguments to update or create a Thumbnail.
     * @example
     * // Update or create a Thumbnail
     * const thumbnail = await prisma.thumbnail.upsert({
     *   create: {
     *     // ... data to create a Thumbnail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Thumbnail we want to update
     *   }
     * })
     */
    upsert<T extends ThumbnailUpsertArgs>(args: SelectSubset<T, ThumbnailUpsertArgs<ExtArgs>>): Prisma__ThumbnailClient<$Result.GetResult<Prisma.$ThumbnailPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Thumbnails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailCountArgs} args - Arguments to filter Thumbnails to count.
     * @example
     * // Count the number of Thumbnails
     * const count = await prisma.thumbnail.count({
     *   where: {
     *     // ... the filter for the Thumbnails we want to count
     *   }
     * })
    **/
    count<T extends ThumbnailCountArgs>(
      args?: Subset<T, ThumbnailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ThumbnailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Thumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ThumbnailAggregateArgs>(args: Subset<T, ThumbnailAggregateArgs>): Prisma.PrismaPromise<GetThumbnailAggregateType<T>>

    /**
     * Group by Thumbnail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ThumbnailGroupByArgs} args - Group by arguments.
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
      T extends ThumbnailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ThumbnailGroupByArgs['orderBy'] }
        : { orderBy?: ThumbnailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ThumbnailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetThumbnailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Thumbnail model
   */
  readonly fields: ThumbnailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Thumbnail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ThumbnailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ebooks<T extends Thumbnail$ebooksArgs<ExtArgs> = {}>(args?: Subset<T, Thumbnail$ebooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EbookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Thumbnail model
   */
  interface ThumbnailFieldRefs {
    readonly id: FieldRef<"Thumbnail", 'Int'>
    readonly image_url: FieldRef<"Thumbnail", 'String'>
    readonly public_id: FieldRef<"Thumbnail", 'String'>
    readonly createdAt: FieldRef<"Thumbnail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Thumbnail findUnique
   */
  export type ThumbnailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which Thumbnail to fetch.
     */
    where: ThumbnailWhereUniqueInput
  }

  /**
   * Thumbnail findUniqueOrThrow
   */
  export type ThumbnailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which Thumbnail to fetch.
     */
    where: ThumbnailWhereUniqueInput
  }

  /**
   * Thumbnail findFirst
   */
  export type ThumbnailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which Thumbnail to fetch.
     */
    where?: ThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thumbnails to fetch.
     */
    orderBy?: ThumbnailOrderByWithRelationInput | ThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thumbnails.
     */
    cursor?: ThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thumbnails.
     */
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }

  /**
   * Thumbnail findFirstOrThrow
   */
  export type ThumbnailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which Thumbnail to fetch.
     */
    where?: ThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thumbnails to fetch.
     */
    orderBy?: ThumbnailOrderByWithRelationInput | ThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Thumbnails.
     */
    cursor?: ThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thumbnails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Thumbnails.
     */
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }

  /**
   * Thumbnail findMany
   */
  export type ThumbnailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * Filter, which Thumbnails to fetch.
     */
    where?: ThumbnailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Thumbnails to fetch.
     */
    orderBy?: ThumbnailOrderByWithRelationInput | ThumbnailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Thumbnails.
     */
    cursor?: ThumbnailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Thumbnails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Thumbnails.
     */
    skip?: number
    distinct?: ThumbnailScalarFieldEnum | ThumbnailScalarFieldEnum[]
  }

  /**
   * Thumbnail create
   */
  export type ThumbnailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * The data needed to create a Thumbnail.
     */
    data: XOR<ThumbnailCreateInput, ThumbnailUncheckedCreateInput>
  }

  /**
   * Thumbnail createMany
   */
  export type ThumbnailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Thumbnails.
     */
    data: ThumbnailCreateManyInput | ThumbnailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thumbnail createManyAndReturn
   */
  export type ThumbnailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * The data used to create many Thumbnails.
     */
    data: ThumbnailCreateManyInput | ThumbnailCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Thumbnail update
   */
  export type ThumbnailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * The data needed to update a Thumbnail.
     */
    data: XOR<ThumbnailUpdateInput, ThumbnailUncheckedUpdateInput>
    /**
     * Choose, which Thumbnail to update.
     */
    where: ThumbnailWhereUniqueInput
  }

  /**
   * Thumbnail updateMany
   */
  export type ThumbnailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Thumbnails.
     */
    data: XOR<ThumbnailUpdateManyMutationInput, ThumbnailUncheckedUpdateManyInput>
    /**
     * Filter which Thumbnails to update
     */
    where?: ThumbnailWhereInput
    /**
     * Limit how many Thumbnails to update.
     */
    limit?: number
  }

  /**
   * Thumbnail updateManyAndReturn
   */
  export type ThumbnailUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * The data used to update Thumbnails.
     */
    data: XOR<ThumbnailUpdateManyMutationInput, ThumbnailUncheckedUpdateManyInput>
    /**
     * Filter which Thumbnails to update
     */
    where?: ThumbnailWhereInput
    /**
     * Limit how many Thumbnails to update.
     */
    limit?: number
  }

  /**
   * Thumbnail upsert
   */
  export type ThumbnailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * The filter to search for the Thumbnail to update in case it exists.
     */
    where: ThumbnailWhereUniqueInput
    /**
     * In case the Thumbnail found by the `where` argument doesn't exist, create a new Thumbnail with this data.
     */
    create: XOR<ThumbnailCreateInput, ThumbnailUncheckedCreateInput>
    /**
     * In case the Thumbnail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ThumbnailUpdateInput, ThumbnailUncheckedUpdateInput>
  }

  /**
   * Thumbnail delete
   */
  export type ThumbnailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
    /**
     * Filter which Thumbnail to delete.
     */
    where: ThumbnailWhereUniqueInput
  }

  /**
   * Thumbnail deleteMany
   */
  export type ThumbnailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Thumbnails to delete
     */
    where?: ThumbnailWhereInput
    /**
     * Limit how many Thumbnails to delete.
     */
    limit?: number
  }

  /**
   * Thumbnail.ebooks
   */
  export type Thumbnail$ebooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ebook
     */
    select?: EbookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ebook
     */
    omit?: EbookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EbookInclude<ExtArgs> | null
    where?: EbookWhereInput
    orderBy?: EbookOrderByWithRelationInput | EbookOrderByWithRelationInput[]
    cursor?: EbookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EbookScalarFieldEnum | EbookScalarFieldEnum[]
  }

  /**
   * Thumbnail without action
   */
  export type ThumbnailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Thumbnail
     */
    select?: ThumbnailSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Thumbnail
     */
    omit?: ThumbnailOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ThumbnailInclude<ExtArgs> | null
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
    name: 'name',
    profile_pic: 'profile_pic',
    email: 'email',
    password: 'password',
    role: 'role',
    is_active: 'is_active',
    semester: 'semester',
    department: 'department',
    UserMongoId: 'UserMongoId',
    isPremimum: 'isPremimum',
    premimum_expire_at: 'premimum_expire_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    semester: 'semester',
    department: 'department',
    facultyId: 'facultyId'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    subjectId: 'subjectId',
    teacherId: 'teacherId',
    date: 'date',
    is_present: 'is_present'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const PdfScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    category: 'category',
    year: 'year',
    Department: 'Department',
    Pyq_category: 'Pyq_category',
    pdf_Url: 'pdf_Url',
    posted_by: 'posted_by',
    expireAt: 'expireAt',
    createdAt: 'createdAt'
  };

  export type PdfScalarFieldEnum = (typeof PdfScalarFieldEnum)[keyof typeof PdfScalarFieldEnum]


  export const EbookScalarFieldEnum: {
    id: 'id',
    book_name: 'book_name',
    writer: 'writer',
    genre: 'genre',
    description: 'description',
    pdf_name: 'pdf_name',
    pdf_url: 'pdf_url',
    pdf_url_createdAt: 'pdf_url_createdAt',
    ThumbnailId: 'ThumbnailId',
    createdAt: 'createdAt'
  };

  export type EbookScalarFieldEnum = (typeof EbookScalarFieldEnum)[keyof typeof EbookScalarFieldEnum]


  export const ThumbnailScalarFieldEnum: {
    id: 'id',
    image_url: 'image_url',
    public_id: 'public_id',
    createdAt: 'createdAt'
  };

  export type ThumbnailScalarFieldEnum = (typeof ThumbnailScalarFieldEnum)[keyof typeof ThumbnailScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Course'
   */
  export type EnumCourseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Course'>
    


  /**
   * Reference to a field of type 'Course[]'
   */
  export type ListEnumCourseFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Course[]'>
    


  /**
   * Reference to a field of type 'paper_type'
   */
  export type Enumpaper_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paper_type'>
    


  /**
   * Reference to a field of type 'paper_type[]'
   */
  export type ListEnumpaper_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'paper_type[]'>
    


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


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringFilter<"user"> | string
    profile_pic?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    is_active?: BoolFilter<"user"> | boolean
    semester?: IntNullableFilter<"user"> | number | null
    department?: StringNullableFilter<"user"> | string | null
    UserMongoId?: StringFilter<"user"> | string
    isPremimum?: BoolFilter<"user"> | boolean
    premimum_expire_at?: DateTimeNullableFilter<"user"> | Date | string | null
    subjects?: SubjectListRelationFilter
    attendances?: AttendanceListRelationFilter
    attendance?: AttendanceListRelationFilter
    pdfs?: PdfListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profile_pic?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    semester?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    UserMongoId?: SortOrder
    isPremimum?: SortOrder
    premimum_expire_at?: SortOrderInput | SortOrder
    subjects?: subjectOrderByRelationAggregateInput
    attendances?: attendanceOrderByRelationAggregateInput
    attendance?: attendanceOrderByRelationAggregateInput
    pdfs?: pdfOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringFilter<"user"> | string
    profile_pic?: StringNullableFilter<"user"> | string | null
    password?: StringFilter<"user"> | string
    role?: EnumRoleFilter<"user"> | $Enums.Role
    is_active?: BoolFilter<"user"> | boolean
    semester?: IntNullableFilter<"user"> | number | null
    department?: StringNullableFilter<"user"> | string | null
    UserMongoId?: StringFilter<"user"> | string
    isPremimum?: BoolFilter<"user"> | boolean
    premimum_expire_at?: DateTimeNullableFilter<"user"> | Date | string | null
    subjects?: SubjectListRelationFilter
    attendances?: AttendanceListRelationFilter
    attendance?: AttendanceListRelationFilter
    pdfs?: PdfListRelationFilter
  }, "id" | "email">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profile_pic?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    semester?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    UserMongoId?: SortOrder
    isPremimum?: SortOrder
    premimum_expire_at?: SortOrderInput | SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringWithAggregatesFilter<"user"> | string
    profile_pic?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
    role?: EnumRoleWithAggregatesFilter<"user"> | $Enums.Role
    is_active?: BoolWithAggregatesFilter<"user"> | boolean
    semester?: IntNullableWithAggregatesFilter<"user"> | number | null
    department?: StringNullableWithAggregatesFilter<"user"> | string | null
    UserMongoId?: StringWithAggregatesFilter<"user"> | string
    isPremimum?: BoolWithAggregatesFilter<"user"> | boolean
    premimum_expire_at?: DateTimeNullableWithAggregatesFilter<"user"> | Date | string | null
  }

  export type subjectWhereInput = {
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    id?: IntFilter<"subject"> | number
    code?: StringFilter<"subject"> | string
    name?: StringFilter<"subject"> | string
    semester?: IntFilter<"subject"> | number
    department?: StringFilter<"subject"> | string
    facultyId?: IntFilter<"subject"> | number
    faculty?: XOR<UserScalarRelationFilter, userWhereInput>
    attendances?: AttendanceListRelationFilter
  }

  export type subjectOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    facultyId?: SortOrder
    faculty?: userOrderByWithRelationInput
    attendances?: attendanceOrderByRelationAggregateInput
  }

  export type subjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subjectWhereInput | subjectWhereInput[]
    OR?: subjectWhereInput[]
    NOT?: subjectWhereInput | subjectWhereInput[]
    code?: StringFilter<"subject"> | string
    name?: StringFilter<"subject"> | string
    semester?: IntFilter<"subject"> | number
    department?: StringFilter<"subject"> | string
    facultyId?: IntFilter<"subject"> | number
    faculty?: XOR<UserScalarRelationFilter, userWhereInput>
    attendances?: AttendanceListRelationFilter
  }, "id">

  export type subjectOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    facultyId?: SortOrder
    _count?: subjectCountOrderByAggregateInput
    _avg?: subjectAvgOrderByAggregateInput
    _max?: subjectMaxOrderByAggregateInput
    _min?: subjectMinOrderByAggregateInput
    _sum?: subjectSumOrderByAggregateInput
  }

  export type subjectScalarWhereWithAggregatesInput = {
    AND?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    OR?: subjectScalarWhereWithAggregatesInput[]
    NOT?: subjectScalarWhereWithAggregatesInput | subjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subject"> | number
    code?: StringWithAggregatesFilter<"subject"> | string
    name?: StringWithAggregatesFilter<"subject"> | string
    semester?: IntWithAggregatesFilter<"subject"> | number
    department?: StringWithAggregatesFilter<"subject"> | string
    facultyId?: IntWithAggregatesFilter<"subject"> | number
  }

  export type attendanceWhereInput = {
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    id?: IntFilter<"attendance"> | number
    studentId?: IntFilter<"attendance"> | number
    subjectId?: IntFilter<"attendance"> | number
    teacherId?: IntFilter<"attendance"> | number
    date?: DateTimeFilter<"attendance"> | Date | string
    is_present?: EnumStatusFilter<"attendance"> | $Enums.Status
    student?: XOR<UserScalarRelationFilter, userWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type attendanceOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    is_present?: SortOrder
    student?: userOrderByWithRelationInput
    subject?: subjectOrderByWithRelationInput
    teacher?: userOrderByWithRelationInput
  }

  export type attendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: attendanceWhereInput | attendanceWhereInput[]
    OR?: attendanceWhereInput[]
    NOT?: attendanceWhereInput | attendanceWhereInput[]
    studentId?: IntFilter<"attendance"> | number
    subjectId?: IntFilter<"attendance"> | number
    teacherId?: IntFilter<"attendance"> | number
    date?: DateTimeFilter<"attendance"> | Date | string
    is_present?: EnumStatusFilter<"attendance"> | $Enums.Status
    student?: XOR<UserScalarRelationFilter, userWhereInput>
    subject?: XOR<SubjectScalarRelationFilter, subjectWhereInput>
    teacher?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type attendanceOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    is_present?: SortOrder
    _count?: attendanceCountOrderByAggregateInput
    _avg?: attendanceAvgOrderByAggregateInput
    _max?: attendanceMaxOrderByAggregateInput
    _min?: attendanceMinOrderByAggregateInput
    _sum?: attendanceSumOrderByAggregateInput
  }

  export type attendanceScalarWhereWithAggregatesInput = {
    AND?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    OR?: attendanceScalarWhereWithAggregatesInput[]
    NOT?: attendanceScalarWhereWithAggregatesInput | attendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"attendance"> | number
    studentId?: IntWithAggregatesFilter<"attendance"> | number
    subjectId?: IntWithAggregatesFilter<"attendance"> | number
    teacherId?: IntWithAggregatesFilter<"attendance"> | number
    date?: DateTimeWithAggregatesFilter<"attendance"> | Date | string
    is_present?: EnumStatusWithAggregatesFilter<"attendance"> | $Enums.Status
  }

  export type pdfWhereInput = {
    AND?: pdfWhereInput | pdfWhereInput[]
    OR?: pdfWhereInput[]
    NOT?: pdfWhereInput | pdfWhereInput[]
    id?: IntFilter<"pdf"> | number
    fileName?: StringFilter<"pdf"> | string
    category?: EnumCategoryFilter<"pdf"> | $Enums.Category
    year?: IntFilter<"pdf"> | number
    Department?: EnumCourseFilter<"pdf"> | $Enums.Course
    Pyq_category?: Enumpaper_typeNullableFilter<"pdf"> | $Enums.paper_type | null
    pdf_Url?: StringNullableFilter<"pdf"> | string | null
    posted_by?: IntFilter<"pdf"> | number
    expireAt?: DateTimeFilter<"pdf"> | Date | string
    createdAt?: DateTimeFilter<"pdf"> | Date | string
    poster?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type pdfOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    year?: SortOrder
    Department?: SortOrder
    Pyq_category?: SortOrderInput | SortOrder
    pdf_Url?: SortOrderInput | SortOrder
    posted_by?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    poster?: userOrderByWithRelationInput
  }

  export type pdfWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pdfWhereInput | pdfWhereInput[]
    OR?: pdfWhereInput[]
    NOT?: pdfWhereInput | pdfWhereInput[]
    fileName?: StringFilter<"pdf"> | string
    category?: EnumCategoryFilter<"pdf"> | $Enums.Category
    year?: IntFilter<"pdf"> | number
    Department?: EnumCourseFilter<"pdf"> | $Enums.Course
    Pyq_category?: Enumpaper_typeNullableFilter<"pdf"> | $Enums.paper_type | null
    pdf_Url?: StringNullableFilter<"pdf"> | string | null
    posted_by?: IntFilter<"pdf"> | number
    expireAt?: DateTimeFilter<"pdf"> | Date | string
    createdAt?: DateTimeFilter<"pdf"> | Date | string
    poster?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type pdfOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    year?: SortOrder
    Department?: SortOrder
    Pyq_category?: SortOrderInput | SortOrder
    pdf_Url?: SortOrderInput | SortOrder
    posted_by?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
    _count?: pdfCountOrderByAggregateInput
    _avg?: pdfAvgOrderByAggregateInput
    _max?: pdfMaxOrderByAggregateInput
    _min?: pdfMinOrderByAggregateInput
    _sum?: pdfSumOrderByAggregateInput
  }

  export type pdfScalarWhereWithAggregatesInput = {
    AND?: pdfScalarWhereWithAggregatesInput | pdfScalarWhereWithAggregatesInput[]
    OR?: pdfScalarWhereWithAggregatesInput[]
    NOT?: pdfScalarWhereWithAggregatesInput | pdfScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pdf"> | number
    fileName?: StringWithAggregatesFilter<"pdf"> | string
    category?: EnumCategoryWithAggregatesFilter<"pdf"> | $Enums.Category
    year?: IntWithAggregatesFilter<"pdf"> | number
    Department?: EnumCourseWithAggregatesFilter<"pdf"> | $Enums.Course
    Pyq_category?: Enumpaper_typeNullableWithAggregatesFilter<"pdf"> | $Enums.paper_type | null
    pdf_Url?: StringNullableWithAggregatesFilter<"pdf"> | string | null
    posted_by?: IntWithAggregatesFilter<"pdf"> | number
    expireAt?: DateTimeWithAggregatesFilter<"pdf"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"pdf"> | Date | string
  }

  export type EbookWhereInput = {
    AND?: EbookWhereInput | EbookWhereInput[]
    OR?: EbookWhereInput[]
    NOT?: EbookWhereInput | EbookWhereInput[]
    id?: IntFilter<"Ebook"> | number
    book_name?: StringFilter<"Ebook"> | string
    writer?: StringFilter<"Ebook"> | string
    genre?: StringFilter<"Ebook"> | string
    description?: StringFilter<"Ebook"> | string
    pdf_name?: StringFilter<"Ebook"> | string
    pdf_url?: StringNullableFilter<"Ebook"> | string | null
    pdf_url_createdAt?: DateTimeFilter<"Ebook"> | Date | string
    ThumbnailId?: IntFilter<"Ebook"> | number
    createdAt?: DateTimeFilter<"Ebook"> | Date | string
    pdf_thumbnail?: XOR<ThumbnailScalarRelationFilter, ThumbnailWhereInput>
  }

  export type EbookOrderByWithRelationInput = {
    id?: SortOrder
    book_name?: SortOrder
    writer?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    pdf_name?: SortOrder
    pdf_url?: SortOrderInput | SortOrder
    pdf_url_createdAt?: SortOrder
    ThumbnailId?: SortOrder
    createdAt?: SortOrder
    pdf_thumbnail?: ThumbnailOrderByWithRelationInput
  }

  export type EbookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ThumbnailId?: number
    AND?: EbookWhereInput | EbookWhereInput[]
    OR?: EbookWhereInput[]
    NOT?: EbookWhereInput | EbookWhereInput[]
    book_name?: StringFilter<"Ebook"> | string
    writer?: StringFilter<"Ebook"> | string
    genre?: StringFilter<"Ebook"> | string
    description?: StringFilter<"Ebook"> | string
    pdf_name?: StringFilter<"Ebook"> | string
    pdf_url?: StringNullableFilter<"Ebook"> | string | null
    pdf_url_createdAt?: DateTimeFilter<"Ebook"> | Date | string
    createdAt?: DateTimeFilter<"Ebook"> | Date | string
    pdf_thumbnail?: XOR<ThumbnailScalarRelationFilter, ThumbnailWhereInput>
  }, "id" | "ThumbnailId">

  export type EbookOrderByWithAggregationInput = {
    id?: SortOrder
    book_name?: SortOrder
    writer?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    pdf_name?: SortOrder
    pdf_url?: SortOrderInput | SortOrder
    pdf_url_createdAt?: SortOrder
    ThumbnailId?: SortOrder
    createdAt?: SortOrder
    _count?: EbookCountOrderByAggregateInput
    _avg?: EbookAvgOrderByAggregateInput
    _max?: EbookMaxOrderByAggregateInput
    _min?: EbookMinOrderByAggregateInput
    _sum?: EbookSumOrderByAggregateInput
  }

  export type EbookScalarWhereWithAggregatesInput = {
    AND?: EbookScalarWhereWithAggregatesInput | EbookScalarWhereWithAggregatesInput[]
    OR?: EbookScalarWhereWithAggregatesInput[]
    NOT?: EbookScalarWhereWithAggregatesInput | EbookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ebook"> | number
    book_name?: StringWithAggregatesFilter<"Ebook"> | string
    writer?: StringWithAggregatesFilter<"Ebook"> | string
    genre?: StringWithAggregatesFilter<"Ebook"> | string
    description?: StringWithAggregatesFilter<"Ebook"> | string
    pdf_name?: StringWithAggregatesFilter<"Ebook"> | string
    pdf_url?: StringNullableWithAggregatesFilter<"Ebook"> | string | null
    pdf_url_createdAt?: DateTimeWithAggregatesFilter<"Ebook"> | Date | string
    ThumbnailId?: IntWithAggregatesFilter<"Ebook"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ebook"> | Date | string
  }

  export type ThumbnailWhereInput = {
    AND?: ThumbnailWhereInput | ThumbnailWhereInput[]
    OR?: ThumbnailWhereInput[]
    NOT?: ThumbnailWhereInput | ThumbnailWhereInput[]
    id?: IntFilter<"Thumbnail"> | number
    image_url?: StringFilter<"Thumbnail"> | string
    public_id?: StringFilter<"Thumbnail"> | string
    createdAt?: DateTimeFilter<"Thumbnail"> | Date | string
    ebooks?: EbookListRelationFilter
  }

  export type ThumbnailOrderByWithRelationInput = {
    id?: SortOrder
    image_url?: SortOrder
    public_id?: SortOrder
    createdAt?: SortOrder
    ebooks?: EbookOrderByRelationAggregateInput
  }

  export type ThumbnailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ThumbnailWhereInput | ThumbnailWhereInput[]
    OR?: ThumbnailWhereInput[]
    NOT?: ThumbnailWhereInput | ThumbnailWhereInput[]
    image_url?: StringFilter<"Thumbnail"> | string
    public_id?: StringFilter<"Thumbnail"> | string
    createdAt?: DateTimeFilter<"Thumbnail"> | Date | string
    ebooks?: EbookListRelationFilter
  }, "id">

  export type ThumbnailOrderByWithAggregationInput = {
    id?: SortOrder
    image_url?: SortOrder
    public_id?: SortOrder
    createdAt?: SortOrder
    _count?: ThumbnailCountOrderByAggregateInput
    _avg?: ThumbnailAvgOrderByAggregateInput
    _max?: ThumbnailMaxOrderByAggregateInput
    _min?: ThumbnailMinOrderByAggregateInput
    _sum?: ThumbnailSumOrderByAggregateInput
  }

  export type ThumbnailScalarWhereWithAggregatesInput = {
    AND?: ThumbnailScalarWhereWithAggregatesInput | ThumbnailScalarWhereWithAggregatesInput[]
    OR?: ThumbnailScalarWhereWithAggregatesInput[]
    NOT?: ThumbnailScalarWhereWithAggregatesInput | ThumbnailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Thumbnail"> | number
    image_url?: StringWithAggregatesFilter<"Thumbnail"> | string
    public_id?: StringWithAggregatesFilter<"Thumbnail"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Thumbnail"> | Date | string
  }

  export type userCreateInput = {
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectCreateNestedManyWithoutFacultyInput
    attendances?: attendanceCreateNestedManyWithoutStudentInput
    attendance?: attendanceCreateNestedManyWithoutTeacherInput
    pdfs?: pdfCreateNestedManyWithoutPosterInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectUncheckedCreateNestedManyWithoutFacultyInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    attendance?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
    pdfs?: pdfUncheckedCreateNestedManyWithoutPosterInput
  }

  export type userUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUpdateManyWithoutFacultyNestedInput
    attendances?: attendanceUpdateManyWithoutStudentNestedInput
    attendance?: attendanceUpdateManyWithoutTeacherNestedInput
    pdfs?: pdfUpdateManyWithoutPosterNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUncheckedUpdateManyWithoutFacultyNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
    pdfs?: pdfUncheckedUpdateManyWithoutPosterNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
  }

  export type userUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type subjectCreateInput = {
    code: string
    name: string
    semester: number
    department: string
    faculty: userCreateNestedOneWithoutSubjectsInput
    attendances?: attendanceCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateInput = {
    id?: number
    code: string
    name: string
    semester: number
    department: string
    facultyId: number
    attendances?: attendanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    faculty?: userUpdateOneRequiredWithoutSubjectsNestedInput
    attendances?: attendanceUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
    attendances?: attendanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectCreateManyInput = {
    id?: number
    code: string
    name: string
    semester: number
    department: string
    facultyId: number
  }

  export type subjectUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
  }

  export type subjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
  }

  export type attendanceCreateInput = {
    date: Date | string
    is_present: $Enums.Status
    student: userCreateNestedOneWithoutAttendancesInput
    subject: subjectCreateNestedOneWithoutAttendancesInput
    teacher: userCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateInput = {
    id?: number
    studentId: number
    subjectId: number
    teacherId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    student?: userUpdateOneRequiredWithoutAttendancesNestedInput
    subject?: subjectUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: userUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type attendanceCreateManyInput = {
    id?: number
    studentId: number
    subjectId: number
    teacherId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type attendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type pdfCreateInput = {
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category?: $Enums.paper_type | null
    pdf_Url?: string | null
    expireAt: Date | string
    createdAt?: Date | string
    poster: userCreateNestedOneWithoutPdfsInput
  }

  export type pdfUncheckedCreateInput = {
    id?: number
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category?: $Enums.paper_type | null
    pdf_Url?: string | null
    posted_by: number
    expireAt: Date | string
    createdAt?: Date | string
  }

  export type pdfUpdateInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: userUpdateOneRequiredWithoutPdfsNestedInput
  }

  export type pdfUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    posted_by?: IntFieldUpdateOperationsInput | number
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfCreateManyInput = {
    id?: number
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category?: $Enums.paper_type | null
    pdf_Url?: string | null
    posted_by: number
    expireAt: Date | string
    createdAt?: Date | string
  }

  export type pdfUpdateManyMutationInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    posted_by?: IntFieldUpdateOperationsInput | number
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCreateInput = {
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url?: string | null
    pdf_url_createdAt: Date | string
    createdAt?: Date | string
    pdf_thumbnail: ThumbnailCreateNestedOneWithoutEbooksInput
  }

  export type EbookUncheckedCreateInput = {
    id?: number
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url?: string | null
    pdf_url_createdAt: Date | string
    ThumbnailId: number
    createdAt?: Date | string
  }

  export type EbookUpdateInput = {
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pdf_thumbnail?: ThumbnailUpdateOneRequiredWithoutEbooksNestedInput
  }

  export type EbookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ThumbnailId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCreateManyInput = {
    id?: number
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url?: string | null
    pdf_url_createdAt: Date | string
    ThumbnailId: number
    createdAt?: Date | string
  }

  export type EbookUpdateManyMutationInput = {
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ThumbnailId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThumbnailCreateInput = {
    image_url: string
    public_id: string
    createdAt?: Date | string
    ebooks?: EbookCreateNestedManyWithoutPdf_thumbnailInput
  }

  export type ThumbnailUncheckedCreateInput = {
    id?: number
    image_url: string
    public_id: string
    createdAt?: Date | string
    ebooks?: EbookUncheckedCreateNestedManyWithoutPdf_thumbnailInput
  }

  export type ThumbnailUpdateInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUpdateManyWithoutPdf_thumbnailNestedInput
  }

  export type ThumbnailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ebooks?: EbookUncheckedUpdateManyWithoutPdf_thumbnailNestedInput
  }

  export type ThumbnailCreateManyInput = {
    id?: number
    image_url: string
    public_id: string
    createdAt?: Date | string
  }

  export type ThumbnailUpdateManyMutationInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThumbnailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SubjectListRelationFilter = {
    every?: subjectWhereInput
    some?: subjectWhereInput
    none?: subjectWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: attendanceWhereInput
    some?: attendanceWhereInput
    none?: attendanceWhereInput
  }

  export type PdfListRelationFilter = {
    every?: pdfWhereInput
    some?: pdfWhereInput
    none?: pdfWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type subjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type pdfOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile_pic?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    UserMongoId?: SortOrder
    isPremimum?: SortOrder
    premimum_expire_at?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile_pic?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    UserMongoId?: SortOrder
    isPremimum?: SortOrder
    premimum_expire_at?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profile_pic?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    UserMongoId?: SortOrder
    isPremimum?: SortOrder
    premimum_expire_at?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type subjectCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    facultyId?: SortOrder
  }

  export type subjectAvgOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    facultyId?: SortOrder
  }

  export type subjectMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    facultyId?: SortOrder
  }

  export type subjectMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    semester?: SortOrder
    department?: SortOrder
    facultyId?: SortOrder
  }

  export type subjectSumOrderByAggregateInput = {
    id?: SortOrder
    semester?: SortOrder
    facultyId?: SortOrder
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
  }

  export type SubjectScalarRelationFilter = {
    is?: subjectWhereInput
    isNot?: subjectWhereInput
  }

  export type attendanceCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    is_present?: SortOrder
  }

  export type attendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
  }

  export type attendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    is_present?: SortOrder
  }

  export type attendanceMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
    date?: SortOrder
    is_present?: SortOrder
  }

  export type attendanceSumOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    subjectId?: SortOrder
    teacherId?: SortOrder
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type EnumCourseFilter<$PrismaModel = never> = {
    equals?: $Enums.Course | EnumCourseFieldRefInput<$PrismaModel>
    in?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseFilter<$PrismaModel> | $Enums.Course
  }

  export type Enumpaper_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.paper_type | Enumpaper_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpaper_typeNullableFilter<$PrismaModel> | $Enums.paper_type | null
  }

  export type pdfCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    year?: SortOrder
    Department?: SortOrder
    Pyq_category?: SortOrder
    pdf_Url?: SortOrder
    posted_by?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
  }

  export type pdfAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    posted_by?: SortOrder
  }

  export type pdfMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    year?: SortOrder
    Department?: SortOrder
    Pyq_category?: SortOrder
    pdf_Url?: SortOrder
    posted_by?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
  }

  export type pdfMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    category?: SortOrder
    year?: SortOrder
    Department?: SortOrder
    Pyq_category?: SortOrder
    pdf_Url?: SortOrder
    posted_by?: SortOrder
    expireAt?: SortOrder
    createdAt?: SortOrder
  }

  export type pdfSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    posted_by?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type EnumCourseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Course | EnumCourseFieldRefInput<$PrismaModel>
    in?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseWithAggregatesFilter<$PrismaModel> | $Enums.Course
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseFilter<$PrismaModel>
    _max?: NestedEnumCourseFilter<$PrismaModel>
  }

  export type Enumpaper_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paper_type | Enumpaper_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpaper_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.paper_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpaper_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumpaper_typeNullableFilter<$PrismaModel>
  }

  export type ThumbnailScalarRelationFilter = {
    is?: ThumbnailWhereInput
    isNot?: ThumbnailWhereInput
  }

  export type EbookCountOrderByAggregateInput = {
    id?: SortOrder
    book_name?: SortOrder
    writer?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    pdf_name?: SortOrder
    pdf_url?: SortOrder
    pdf_url_createdAt?: SortOrder
    ThumbnailId?: SortOrder
    createdAt?: SortOrder
  }

  export type EbookAvgOrderByAggregateInput = {
    id?: SortOrder
    ThumbnailId?: SortOrder
  }

  export type EbookMaxOrderByAggregateInput = {
    id?: SortOrder
    book_name?: SortOrder
    writer?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    pdf_name?: SortOrder
    pdf_url?: SortOrder
    pdf_url_createdAt?: SortOrder
    ThumbnailId?: SortOrder
    createdAt?: SortOrder
  }

  export type EbookMinOrderByAggregateInput = {
    id?: SortOrder
    book_name?: SortOrder
    writer?: SortOrder
    genre?: SortOrder
    description?: SortOrder
    pdf_name?: SortOrder
    pdf_url?: SortOrder
    pdf_url_createdAt?: SortOrder
    ThumbnailId?: SortOrder
    createdAt?: SortOrder
  }

  export type EbookSumOrderByAggregateInput = {
    id?: SortOrder
    ThumbnailId?: SortOrder
  }

  export type EbookListRelationFilter = {
    every?: EbookWhereInput
    some?: EbookWhereInput
    none?: EbookWhereInput
  }

  export type EbookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ThumbnailCountOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    public_id?: SortOrder
    createdAt?: SortOrder
  }

  export type ThumbnailAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ThumbnailMaxOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    public_id?: SortOrder
    createdAt?: SortOrder
  }

  export type ThumbnailMinOrderByAggregateInput = {
    id?: SortOrder
    image_url?: SortOrder
    public_id?: SortOrder
    createdAt?: SortOrder
  }

  export type ThumbnailSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type subjectCreateNestedManyWithoutFacultyInput = {
    create?: XOR<subjectCreateWithoutFacultyInput, subjectUncheckedCreateWithoutFacultyInput> | subjectCreateWithoutFacultyInput[] | subjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutFacultyInput | subjectCreateOrConnectWithoutFacultyInput[]
    createMany?: subjectCreateManyFacultyInputEnvelope
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
  }

  export type attendanceCreateNestedManyWithoutStudentInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type attendanceCreateNestedManyWithoutTeacherInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type pdfCreateNestedManyWithoutPosterInput = {
    create?: XOR<pdfCreateWithoutPosterInput, pdfUncheckedCreateWithoutPosterInput> | pdfCreateWithoutPosterInput[] | pdfUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: pdfCreateOrConnectWithoutPosterInput | pdfCreateOrConnectWithoutPosterInput[]
    createMany?: pdfCreateManyPosterInputEnvelope
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
  }

  export type subjectUncheckedCreateNestedManyWithoutFacultyInput = {
    create?: XOR<subjectCreateWithoutFacultyInput, subjectUncheckedCreateWithoutFacultyInput> | subjectCreateWithoutFacultyInput[] | subjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutFacultyInput | subjectCreateOrConnectWithoutFacultyInput[]
    createMany?: subjectCreateManyFacultyInputEnvelope
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type pdfUncheckedCreateNestedManyWithoutPosterInput = {
    create?: XOR<pdfCreateWithoutPosterInput, pdfUncheckedCreateWithoutPosterInput> | pdfCreateWithoutPosterInput[] | pdfUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: pdfCreateOrConnectWithoutPosterInput | pdfCreateOrConnectWithoutPosterInput[]
    createMany?: pdfCreateManyPosterInputEnvelope
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type subjectUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<subjectCreateWithoutFacultyInput, subjectUncheckedCreateWithoutFacultyInput> | subjectCreateWithoutFacultyInput[] | subjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutFacultyInput | subjectCreateOrConnectWithoutFacultyInput[]
    upsert?: subjectUpsertWithWhereUniqueWithoutFacultyInput | subjectUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: subjectCreateManyFacultyInputEnvelope
    set?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    disconnect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    delete?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    update?: subjectUpdateWithWhereUniqueWithoutFacultyInput | subjectUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: subjectUpdateManyWithWhereWithoutFacultyInput | subjectUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: subjectScalarWhereInput | subjectScalarWhereInput[]
  }

  export type attendanceUpdateManyWithoutStudentNestedInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentInput | attendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutStudentInput | attendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentInput | attendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type attendanceUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutTeacherInput | attendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutTeacherInput | attendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutTeacherInput | attendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type pdfUpdateManyWithoutPosterNestedInput = {
    create?: XOR<pdfCreateWithoutPosterInput, pdfUncheckedCreateWithoutPosterInput> | pdfCreateWithoutPosterInput[] | pdfUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: pdfCreateOrConnectWithoutPosterInput | pdfCreateOrConnectWithoutPosterInput[]
    upsert?: pdfUpsertWithWhereUniqueWithoutPosterInput | pdfUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: pdfCreateManyPosterInputEnvelope
    set?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    disconnect?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    delete?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    update?: pdfUpdateWithWhereUniqueWithoutPosterInput | pdfUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: pdfUpdateManyWithWhereWithoutPosterInput | pdfUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: pdfScalarWhereInput | pdfScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type subjectUncheckedUpdateManyWithoutFacultyNestedInput = {
    create?: XOR<subjectCreateWithoutFacultyInput, subjectUncheckedCreateWithoutFacultyInput> | subjectCreateWithoutFacultyInput[] | subjectUncheckedCreateWithoutFacultyInput[]
    connectOrCreate?: subjectCreateOrConnectWithoutFacultyInput | subjectCreateOrConnectWithoutFacultyInput[]
    upsert?: subjectUpsertWithWhereUniqueWithoutFacultyInput | subjectUpsertWithWhereUniqueWithoutFacultyInput[]
    createMany?: subjectCreateManyFacultyInputEnvelope
    set?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    disconnect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    delete?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    connect?: subjectWhereUniqueInput | subjectWhereUniqueInput[]
    update?: subjectUpdateWithWhereUniqueWithoutFacultyInput | subjectUpdateWithWhereUniqueWithoutFacultyInput[]
    updateMany?: subjectUpdateManyWithWhereWithoutFacultyInput | subjectUpdateManyWithWhereWithoutFacultyInput[]
    deleteMany?: subjectScalarWhereInput | subjectScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput> | attendanceCreateWithoutStudentInput[] | attendanceUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutStudentInput | attendanceCreateOrConnectWithoutStudentInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutStudentInput | attendanceUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: attendanceCreateManyStudentInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutStudentInput | attendanceUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutStudentInput | attendanceUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput> | attendanceCreateWithoutTeacherInput[] | attendanceUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutTeacherInput | attendanceCreateOrConnectWithoutTeacherInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutTeacherInput | attendanceUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: attendanceCreateManyTeacherInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutTeacherInput | attendanceUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutTeacherInput | attendanceUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type pdfUncheckedUpdateManyWithoutPosterNestedInput = {
    create?: XOR<pdfCreateWithoutPosterInput, pdfUncheckedCreateWithoutPosterInput> | pdfCreateWithoutPosterInput[] | pdfUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: pdfCreateOrConnectWithoutPosterInput | pdfCreateOrConnectWithoutPosterInput[]
    upsert?: pdfUpsertWithWhereUniqueWithoutPosterInput | pdfUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: pdfCreateManyPosterInputEnvelope
    set?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    disconnect?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    delete?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    connect?: pdfWhereUniqueInput | pdfWhereUniqueInput[]
    update?: pdfUpdateWithWhereUniqueWithoutPosterInput | pdfUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: pdfUpdateManyWithWhereWithoutPosterInput | pdfUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: pdfScalarWhereInput | pdfScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutSubjectsInput = {
    create?: XOR<userCreateWithoutSubjectsInput, userUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: userCreateOrConnectWithoutSubjectsInput
    connect?: userWhereUniqueInput
  }

  export type attendanceCreateNestedManyWithoutSubjectInput = {
    create?: XOR<attendanceCreateWithoutSubjectInput, attendanceUncheckedCreateWithoutSubjectInput> | attendanceCreateWithoutSubjectInput[] | attendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutSubjectInput | attendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: attendanceCreateManySubjectInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type attendanceUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<attendanceCreateWithoutSubjectInput, attendanceUncheckedCreateWithoutSubjectInput> | attendanceCreateWithoutSubjectInput[] | attendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutSubjectInput | attendanceCreateOrConnectWithoutSubjectInput[]
    createMany?: attendanceCreateManySubjectInputEnvelope
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
  }

  export type userUpdateOneRequiredWithoutSubjectsNestedInput = {
    create?: XOR<userCreateWithoutSubjectsInput, userUncheckedCreateWithoutSubjectsInput>
    connectOrCreate?: userCreateOrConnectWithoutSubjectsInput
    upsert?: userUpsertWithoutSubjectsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSubjectsInput, userUpdateWithoutSubjectsInput>, userUncheckedUpdateWithoutSubjectsInput>
  }

  export type attendanceUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<attendanceCreateWithoutSubjectInput, attendanceUncheckedCreateWithoutSubjectInput> | attendanceCreateWithoutSubjectInput[] | attendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutSubjectInput | attendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutSubjectInput | attendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: attendanceCreateManySubjectInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutSubjectInput | attendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutSubjectInput | attendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type attendanceUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<attendanceCreateWithoutSubjectInput, attendanceUncheckedCreateWithoutSubjectInput> | attendanceCreateWithoutSubjectInput[] | attendanceUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: attendanceCreateOrConnectWithoutSubjectInput | attendanceCreateOrConnectWithoutSubjectInput[]
    upsert?: attendanceUpsertWithWhereUniqueWithoutSubjectInput | attendanceUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: attendanceCreateManySubjectInputEnvelope
    set?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    disconnect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    delete?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    connect?: attendanceWhereUniqueInput | attendanceWhereUniqueInput[]
    update?: attendanceUpdateWithWhereUniqueWithoutSubjectInput | attendanceUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: attendanceUpdateManyWithWhereWithoutSubjectInput | attendanceUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<userCreateWithoutAttendancesInput, userUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: userCreateOrConnectWithoutAttendancesInput
    connect?: userWhereUniqueInput
  }

  export type subjectCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<subjectCreateWithoutAttendancesInput, subjectUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: subjectCreateOrConnectWithoutAttendancesInput
    connect?: subjectWhereUniqueInput
  }

  export type userCreateNestedOneWithoutAttendanceInput = {
    create?: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: userCreateOrConnectWithoutAttendanceInput
    connect?: userWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type userUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<userCreateWithoutAttendancesInput, userUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: userCreateOrConnectWithoutAttendancesInput
    upsert?: userUpsertWithoutAttendancesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAttendancesInput, userUpdateWithoutAttendancesInput>, userUncheckedUpdateWithoutAttendancesInput>
  }

  export type subjectUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<subjectCreateWithoutAttendancesInput, subjectUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: subjectCreateOrConnectWithoutAttendancesInput
    upsert?: subjectUpsertWithoutAttendancesInput
    connect?: subjectWhereUniqueInput
    update?: XOR<XOR<subjectUpdateToOneWithWhereWithoutAttendancesInput, subjectUpdateWithoutAttendancesInput>, subjectUncheckedUpdateWithoutAttendancesInput>
  }

  export type userUpdateOneRequiredWithoutAttendanceNestedInput = {
    create?: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>
    connectOrCreate?: userCreateOrConnectWithoutAttendanceInput
    upsert?: userUpsertWithoutAttendanceInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutAttendanceInput, userUpdateWithoutAttendanceInput>, userUncheckedUpdateWithoutAttendanceInput>
  }

  export type userCreateNestedOneWithoutPdfsInput = {
    create?: XOR<userCreateWithoutPdfsInput, userUncheckedCreateWithoutPdfsInput>
    connectOrCreate?: userCreateOrConnectWithoutPdfsInput
    connect?: userWhereUniqueInput
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type EnumCourseFieldUpdateOperationsInput = {
    set?: $Enums.Course
  }

  export type NullableEnumpaper_typeFieldUpdateOperationsInput = {
    set?: $Enums.paper_type | null
  }

  export type userUpdateOneRequiredWithoutPdfsNestedInput = {
    create?: XOR<userCreateWithoutPdfsInput, userUncheckedCreateWithoutPdfsInput>
    connectOrCreate?: userCreateOrConnectWithoutPdfsInput
    upsert?: userUpsertWithoutPdfsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutPdfsInput, userUpdateWithoutPdfsInput>, userUncheckedUpdateWithoutPdfsInput>
  }

  export type ThumbnailCreateNestedOneWithoutEbooksInput = {
    create?: XOR<ThumbnailCreateWithoutEbooksInput, ThumbnailUncheckedCreateWithoutEbooksInput>
    connectOrCreate?: ThumbnailCreateOrConnectWithoutEbooksInput
    connect?: ThumbnailWhereUniqueInput
  }

  export type ThumbnailUpdateOneRequiredWithoutEbooksNestedInput = {
    create?: XOR<ThumbnailCreateWithoutEbooksInput, ThumbnailUncheckedCreateWithoutEbooksInput>
    connectOrCreate?: ThumbnailCreateOrConnectWithoutEbooksInput
    upsert?: ThumbnailUpsertWithoutEbooksInput
    connect?: ThumbnailWhereUniqueInput
    update?: XOR<XOR<ThumbnailUpdateToOneWithWhereWithoutEbooksInput, ThumbnailUpdateWithoutEbooksInput>, ThumbnailUncheckedUpdateWithoutEbooksInput>
  }

  export type EbookCreateNestedManyWithoutPdf_thumbnailInput = {
    create?: XOR<EbookCreateWithoutPdf_thumbnailInput, EbookUncheckedCreateWithoutPdf_thumbnailInput> | EbookCreateWithoutPdf_thumbnailInput[] | EbookUncheckedCreateWithoutPdf_thumbnailInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutPdf_thumbnailInput | EbookCreateOrConnectWithoutPdf_thumbnailInput[]
    createMany?: EbookCreateManyPdf_thumbnailInputEnvelope
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
  }

  export type EbookUncheckedCreateNestedManyWithoutPdf_thumbnailInput = {
    create?: XOR<EbookCreateWithoutPdf_thumbnailInput, EbookUncheckedCreateWithoutPdf_thumbnailInput> | EbookCreateWithoutPdf_thumbnailInput[] | EbookUncheckedCreateWithoutPdf_thumbnailInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutPdf_thumbnailInput | EbookCreateOrConnectWithoutPdf_thumbnailInput[]
    createMany?: EbookCreateManyPdf_thumbnailInputEnvelope
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
  }

  export type EbookUpdateManyWithoutPdf_thumbnailNestedInput = {
    create?: XOR<EbookCreateWithoutPdf_thumbnailInput, EbookUncheckedCreateWithoutPdf_thumbnailInput> | EbookCreateWithoutPdf_thumbnailInput[] | EbookUncheckedCreateWithoutPdf_thumbnailInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutPdf_thumbnailInput | EbookCreateOrConnectWithoutPdf_thumbnailInput[]
    upsert?: EbookUpsertWithWhereUniqueWithoutPdf_thumbnailInput | EbookUpsertWithWhereUniqueWithoutPdf_thumbnailInput[]
    createMany?: EbookCreateManyPdf_thumbnailInputEnvelope
    set?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    disconnect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    delete?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    update?: EbookUpdateWithWhereUniqueWithoutPdf_thumbnailInput | EbookUpdateWithWhereUniqueWithoutPdf_thumbnailInput[]
    updateMany?: EbookUpdateManyWithWhereWithoutPdf_thumbnailInput | EbookUpdateManyWithWhereWithoutPdf_thumbnailInput[]
    deleteMany?: EbookScalarWhereInput | EbookScalarWhereInput[]
  }

  export type EbookUncheckedUpdateManyWithoutPdf_thumbnailNestedInput = {
    create?: XOR<EbookCreateWithoutPdf_thumbnailInput, EbookUncheckedCreateWithoutPdf_thumbnailInput> | EbookCreateWithoutPdf_thumbnailInput[] | EbookUncheckedCreateWithoutPdf_thumbnailInput[]
    connectOrCreate?: EbookCreateOrConnectWithoutPdf_thumbnailInput | EbookCreateOrConnectWithoutPdf_thumbnailInput[]
    upsert?: EbookUpsertWithWhereUniqueWithoutPdf_thumbnailInput | EbookUpsertWithWhereUniqueWithoutPdf_thumbnailInput[]
    createMany?: EbookCreateManyPdf_thumbnailInputEnvelope
    set?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    disconnect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    delete?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    connect?: EbookWhereUniqueInput | EbookWhereUniqueInput[]
    update?: EbookUpdateWithWhereUniqueWithoutPdf_thumbnailInput | EbookUpdateWithWhereUniqueWithoutPdf_thumbnailInput[]
    updateMany?: EbookUpdateManyWithWhereWithoutPdf_thumbnailInput | EbookUpdateManyWithWhereWithoutPdf_thumbnailInput[]
    deleteMany?: EbookScalarWhereInput | EbookScalarWhereInput[]
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCourseFilter<$PrismaModel = never> = {
    equals?: $Enums.Course | EnumCourseFieldRefInput<$PrismaModel>
    in?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseFilter<$PrismaModel> | $Enums.Course
  }

  export type NestedEnumpaper_typeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.paper_type | Enumpaper_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpaper_typeNullableFilter<$PrismaModel> | $Enums.paper_type | null
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedEnumCourseWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Course | EnumCourseFieldRefInput<$PrismaModel>
    in?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    notIn?: $Enums.Course[] | ListEnumCourseFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseWithAggregatesFilter<$PrismaModel> | $Enums.Course
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseFilter<$PrismaModel>
    _max?: NestedEnumCourseFilter<$PrismaModel>
  }

  export type NestedEnumpaper_typeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.paper_type | Enumpaper_typeFieldRefInput<$PrismaModel> | null
    in?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.paper_type[] | ListEnumpaper_typeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumpaper_typeNullableWithAggregatesFilter<$PrismaModel> | $Enums.paper_type | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumpaper_typeNullableFilter<$PrismaModel>
    _max?: NestedEnumpaper_typeNullableFilter<$PrismaModel>
  }

  export type subjectCreateWithoutFacultyInput = {
    code: string
    name: string
    semester: number
    department: string
    attendances?: attendanceCreateNestedManyWithoutSubjectInput
  }

  export type subjectUncheckedCreateWithoutFacultyInput = {
    id?: number
    code: string
    name: string
    semester: number
    department: string
    attendances?: attendanceUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type subjectCreateOrConnectWithoutFacultyInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutFacultyInput, subjectUncheckedCreateWithoutFacultyInput>
  }

  export type subjectCreateManyFacultyInputEnvelope = {
    data: subjectCreateManyFacultyInput | subjectCreateManyFacultyInput[]
    skipDuplicates?: boolean
  }

  export type attendanceCreateWithoutStudentInput = {
    date: Date | string
    is_present: $Enums.Status
    subject: subjectCreateNestedOneWithoutAttendancesInput
    teacher: userCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutStudentInput = {
    id?: number
    subjectId: number
    teacherId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceCreateOrConnectWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
  }

  export type attendanceCreateManyStudentInputEnvelope = {
    data: attendanceCreateManyStudentInput | attendanceCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type attendanceCreateWithoutTeacherInput = {
    date: Date | string
    is_present: $Enums.Status
    student: userCreateNestedOneWithoutAttendancesInput
    subject: subjectCreateNestedOneWithoutAttendancesInput
  }

  export type attendanceUncheckedCreateWithoutTeacherInput = {
    id?: number
    studentId: number
    subjectId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceCreateOrConnectWithoutTeacherInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput>
  }

  export type attendanceCreateManyTeacherInputEnvelope = {
    data: attendanceCreateManyTeacherInput | attendanceCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type pdfCreateWithoutPosterInput = {
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category?: $Enums.paper_type | null
    pdf_Url?: string | null
    expireAt: Date | string
    createdAt?: Date | string
  }

  export type pdfUncheckedCreateWithoutPosterInput = {
    id?: number
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category?: $Enums.paper_type | null
    pdf_Url?: string | null
    expireAt: Date | string
    createdAt?: Date | string
  }

  export type pdfCreateOrConnectWithoutPosterInput = {
    where: pdfWhereUniqueInput
    create: XOR<pdfCreateWithoutPosterInput, pdfUncheckedCreateWithoutPosterInput>
  }

  export type pdfCreateManyPosterInputEnvelope = {
    data: pdfCreateManyPosterInput | pdfCreateManyPosterInput[]
    skipDuplicates?: boolean
  }

  export type subjectUpsertWithWhereUniqueWithoutFacultyInput = {
    where: subjectWhereUniqueInput
    update: XOR<subjectUpdateWithoutFacultyInput, subjectUncheckedUpdateWithoutFacultyInput>
    create: XOR<subjectCreateWithoutFacultyInput, subjectUncheckedCreateWithoutFacultyInput>
  }

  export type subjectUpdateWithWhereUniqueWithoutFacultyInput = {
    where: subjectWhereUniqueInput
    data: XOR<subjectUpdateWithoutFacultyInput, subjectUncheckedUpdateWithoutFacultyInput>
  }

  export type subjectUpdateManyWithWhereWithoutFacultyInput = {
    where: subjectScalarWhereInput
    data: XOR<subjectUpdateManyMutationInput, subjectUncheckedUpdateManyWithoutFacultyInput>
  }

  export type subjectScalarWhereInput = {
    AND?: subjectScalarWhereInput | subjectScalarWhereInput[]
    OR?: subjectScalarWhereInput[]
    NOT?: subjectScalarWhereInput | subjectScalarWhereInput[]
    id?: IntFilter<"subject"> | number
    code?: StringFilter<"subject"> | string
    name?: StringFilter<"subject"> | string
    semester?: IntFilter<"subject"> | number
    department?: StringFilter<"subject"> | string
    facultyId?: IntFilter<"subject"> | number
  }

  export type attendanceUpsertWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>
    create: XOR<attendanceCreateWithoutStudentInput, attendanceUncheckedCreateWithoutStudentInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutStudentInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutStudentInput, attendanceUncheckedUpdateWithoutStudentInput>
  }

  export type attendanceUpdateManyWithWhereWithoutStudentInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutStudentInput>
  }

  export type attendanceScalarWhereInput = {
    AND?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    OR?: attendanceScalarWhereInput[]
    NOT?: attendanceScalarWhereInput | attendanceScalarWhereInput[]
    id?: IntFilter<"attendance"> | number
    studentId?: IntFilter<"attendance"> | number
    subjectId?: IntFilter<"attendance"> | number
    teacherId?: IntFilter<"attendance"> | number
    date?: DateTimeFilter<"attendance"> | Date | string
    is_present?: EnumStatusFilter<"attendance"> | $Enums.Status
  }

  export type attendanceUpsertWithWhereUniqueWithoutTeacherInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutTeacherInput, attendanceUncheckedUpdateWithoutTeacherInput>
    create: XOR<attendanceCreateWithoutTeacherInput, attendanceUncheckedCreateWithoutTeacherInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutTeacherInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutTeacherInput, attendanceUncheckedUpdateWithoutTeacherInput>
  }

  export type attendanceUpdateManyWithWhereWithoutTeacherInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutTeacherInput>
  }

  export type pdfUpsertWithWhereUniqueWithoutPosterInput = {
    where: pdfWhereUniqueInput
    update: XOR<pdfUpdateWithoutPosterInput, pdfUncheckedUpdateWithoutPosterInput>
    create: XOR<pdfCreateWithoutPosterInput, pdfUncheckedCreateWithoutPosterInput>
  }

  export type pdfUpdateWithWhereUniqueWithoutPosterInput = {
    where: pdfWhereUniqueInput
    data: XOR<pdfUpdateWithoutPosterInput, pdfUncheckedUpdateWithoutPosterInput>
  }

  export type pdfUpdateManyWithWhereWithoutPosterInput = {
    where: pdfScalarWhereInput
    data: XOR<pdfUpdateManyMutationInput, pdfUncheckedUpdateManyWithoutPosterInput>
  }

  export type pdfScalarWhereInput = {
    AND?: pdfScalarWhereInput | pdfScalarWhereInput[]
    OR?: pdfScalarWhereInput[]
    NOT?: pdfScalarWhereInput | pdfScalarWhereInput[]
    id?: IntFilter<"pdf"> | number
    fileName?: StringFilter<"pdf"> | string
    category?: EnumCategoryFilter<"pdf"> | $Enums.Category
    year?: IntFilter<"pdf"> | number
    Department?: EnumCourseFilter<"pdf"> | $Enums.Course
    Pyq_category?: Enumpaper_typeNullableFilter<"pdf"> | $Enums.paper_type | null
    pdf_Url?: StringNullableFilter<"pdf"> | string | null
    posted_by?: IntFilter<"pdf"> | number
    expireAt?: DateTimeFilter<"pdf"> | Date | string
    createdAt?: DateTimeFilter<"pdf"> | Date | string
  }

  export type userCreateWithoutSubjectsInput = {
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    attendances?: attendanceCreateNestedManyWithoutStudentInput
    attendance?: attendanceCreateNestedManyWithoutTeacherInput
    pdfs?: pdfCreateNestedManyWithoutPosterInput
  }

  export type userUncheckedCreateWithoutSubjectsInput = {
    id?: number
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    attendances?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    attendance?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
    pdfs?: pdfUncheckedCreateNestedManyWithoutPosterInput
  }

  export type userCreateOrConnectWithoutSubjectsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSubjectsInput, userUncheckedCreateWithoutSubjectsInput>
  }

  export type attendanceCreateWithoutSubjectInput = {
    date: Date | string
    is_present: $Enums.Status
    student: userCreateNestedOneWithoutAttendancesInput
    teacher: userCreateNestedOneWithoutAttendanceInput
  }

  export type attendanceUncheckedCreateWithoutSubjectInput = {
    id?: number
    studentId: number
    teacherId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceCreateOrConnectWithoutSubjectInput = {
    where: attendanceWhereUniqueInput
    create: XOR<attendanceCreateWithoutSubjectInput, attendanceUncheckedCreateWithoutSubjectInput>
  }

  export type attendanceCreateManySubjectInputEnvelope = {
    data: attendanceCreateManySubjectInput | attendanceCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type userUpsertWithoutSubjectsInput = {
    update: XOR<userUpdateWithoutSubjectsInput, userUncheckedUpdateWithoutSubjectsInput>
    create: XOR<userCreateWithoutSubjectsInput, userUncheckedCreateWithoutSubjectsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSubjectsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSubjectsInput, userUncheckedUpdateWithoutSubjectsInput>
  }

  export type userUpdateWithoutSubjectsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: attendanceUpdateManyWithoutStudentNestedInput
    attendance?: attendanceUpdateManyWithoutTeacherNestedInput
    pdfs?: pdfUpdateManyWithoutPosterNestedInput
  }

  export type userUncheckedUpdateWithoutSubjectsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    attendances?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
    pdfs?: pdfUncheckedUpdateManyWithoutPosterNestedInput
  }

  export type attendanceUpsertWithWhereUniqueWithoutSubjectInput = {
    where: attendanceWhereUniqueInput
    update: XOR<attendanceUpdateWithoutSubjectInput, attendanceUncheckedUpdateWithoutSubjectInput>
    create: XOR<attendanceCreateWithoutSubjectInput, attendanceUncheckedCreateWithoutSubjectInput>
  }

  export type attendanceUpdateWithWhereUniqueWithoutSubjectInput = {
    where: attendanceWhereUniqueInput
    data: XOR<attendanceUpdateWithoutSubjectInput, attendanceUncheckedUpdateWithoutSubjectInput>
  }

  export type attendanceUpdateManyWithWhereWithoutSubjectInput = {
    where: attendanceScalarWhereInput
    data: XOR<attendanceUpdateManyMutationInput, attendanceUncheckedUpdateManyWithoutSubjectInput>
  }

  export type userCreateWithoutAttendancesInput = {
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectCreateNestedManyWithoutFacultyInput
    attendance?: attendanceCreateNestedManyWithoutTeacherInput
    pdfs?: pdfCreateNestedManyWithoutPosterInput
  }

  export type userUncheckedCreateWithoutAttendancesInput = {
    id?: number
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectUncheckedCreateNestedManyWithoutFacultyInput
    attendance?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
    pdfs?: pdfUncheckedCreateNestedManyWithoutPosterInput
  }

  export type userCreateOrConnectWithoutAttendancesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAttendancesInput, userUncheckedCreateWithoutAttendancesInput>
  }

  export type subjectCreateWithoutAttendancesInput = {
    code: string
    name: string
    semester: number
    department: string
    faculty: userCreateNestedOneWithoutSubjectsInput
  }

  export type subjectUncheckedCreateWithoutAttendancesInput = {
    id?: number
    code: string
    name: string
    semester: number
    department: string
    facultyId: number
  }

  export type subjectCreateOrConnectWithoutAttendancesInput = {
    where: subjectWhereUniqueInput
    create: XOR<subjectCreateWithoutAttendancesInput, subjectUncheckedCreateWithoutAttendancesInput>
  }

  export type userCreateWithoutAttendanceInput = {
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectCreateNestedManyWithoutFacultyInput
    attendances?: attendanceCreateNestedManyWithoutStudentInput
    pdfs?: pdfCreateNestedManyWithoutPosterInput
  }

  export type userUncheckedCreateWithoutAttendanceInput = {
    id?: number
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectUncheckedCreateNestedManyWithoutFacultyInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    pdfs?: pdfUncheckedCreateNestedManyWithoutPosterInput
  }

  export type userCreateOrConnectWithoutAttendanceInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>
  }

  export type userUpsertWithoutAttendancesInput = {
    update: XOR<userUpdateWithoutAttendancesInput, userUncheckedUpdateWithoutAttendancesInput>
    create: XOR<userCreateWithoutAttendancesInput, userUncheckedCreateWithoutAttendancesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAttendancesInput, userUncheckedUpdateWithoutAttendancesInput>
  }

  export type userUpdateWithoutAttendancesInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUpdateManyWithoutFacultyNestedInput
    attendance?: attendanceUpdateManyWithoutTeacherNestedInput
    pdfs?: pdfUpdateManyWithoutPosterNestedInput
  }

  export type userUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUncheckedUpdateManyWithoutFacultyNestedInput
    attendance?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
    pdfs?: pdfUncheckedUpdateManyWithoutPosterNestedInput
  }

  export type subjectUpsertWithoutAttendancesInput = {
    update: XOR<subjectUpdateWithoutAttendancesInput, subjectUncheckedUpdateWithoutAttendancesInput>
    create: XOR<subjectCreateWithoutAttendancesInput, subjectUncheckedCreateWithoutAttendancesInput>
    where?: subjectWhereInput
  }

  export type subjectUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: subjectWhereInput
    data: XOR<subjectUpdateWithoutAttendancesInput, subjectUncheckedUpdateWithoutAttendancesInput>
  }

  export type subjectUpdateWithoutAttendancesInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    faculty?: userUpdateOneRequiredWithoutSubjectsNestedInput
  }

  export type subjectUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    facultyId?: IntFieldUpdateOperationsInput | number
  }

  export type userUpsertWithoutAttendanceInput = {
    update: XOR<userUpdateWithoutAttendanceInput, userUncheckedUpdateWithoutAttendanceInput>
    create: XOR<userCreateWithoutAttendanceInput, userUncheckedCreateWithoutAttendanceInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutAttendanceInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutAttendanceInput, userUncheckedUpdateWithoutAttendanceInput>
  }

  export type userUpdateWithoutAttendanceInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUpdateManyWithoutFacultyNestedInput
    attendances?: attendanceUpdateManyWithoutStudentNestedInput
    pdfs?: pdfUpdateManyWithoutPosterNestedInput
  }

  export type userUncheckedUpdateWithoutAttendanceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUncheckedUpdateManyWithoutFacultyNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    pdfs?: pdfUncheckedUpdateManyWithoutPosterNestedInput
  }

  export type userCreateWithoutPdfsInput = {
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectCreateNestedManyWithoutFacultyInput
    attendances?: attendanceCreateNestedManyWithoutStudentInput
    attendance?: attendanceCreateNestedManyWithoutTeacherInput
  }

  export type userUncheckedCreateWithoutPdfsInput = {
    id?: number
    name: string
    profile_pic?: string | null
    email: string
    password: string
    role: $Enums.Role
    is_active?: boolean
    semester?: number | null
    department?: string | null
    UserMongoId: string
    isPremimum?: boolean
    premimum_expire_at?: Date | string | null
    subjects?: subjectUncheckedCreateNestedManyWithoutFacultyInput
    attendances?: attendanceUncheckedCreateNestedManyWithoutStudentInput
    attendance?: attendanceUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type userCreateOrConnectWithoutPdfsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutPdfsInput, userUncheckedCreateWithoutPdfsInput>
  }

  export type userUpsertWithoutPdfsInput = {
    update: XOR<userUpdateWithoutPdfsInput, userUncheckedUpdateWithoutPdfsInput>
    create: XOR<userCreateWithoutPdfsInput, userUncheckedCreateWithoutPdfsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutPdfsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutPdfsInput, userUncheckedUpdateWithoutPdfsInput>
  }

  export type userUpdateWithoutPdfsInput = {
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUpdateManyWithoutFacultyNestedInput
    attendances?: attendanceUpdateManyWithoutStudentNestedInput
    attendance?: attendanceUpdateManyWithoutTeacherNestedInput
  }

  export type userUncheckedUpdateWithoutPdfsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    profile_pic?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    is_active?: BoolFieldUpdateOperationsInput | boolean
    semester?: NullableIntFieldUpdateOperationsInput | number | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    UserMongoId?: StringFieldUpdateOperationsInput | string
    isPremimum?: BoolFieldUpdateOperationsInput | boolean
    premimum_expire_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subjects?: subjectUncheckedUpdateManyWithoutFacultyNestedInput
    attendances?: attendanceUncheckedUpdateManyWithoutStudentNestedInput
    attendance?: attendanceUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ThumbnailCreateWithoutEbooksInput = {
    image_url: string
    public_id: string
    createdAt?: Date | string
  }

  export type ThumbnailUncheckedCreateWithoutEbooksInput = {
    id?: number
    image_url: string
    public_id: string
    createdAt?: Date | string
  }

  export type ThumbnailCreateOrConnectWithoutEbooksInput = {
    where: ThumbnailWhereUniqueInput
    create: XOR<ThumbnailCreateWithoutEbooksInput, ThumbnailUncheckedCreateWithoutEbooksInput>
  }

  export type ThumbnailUpsertWithoutEbooksInput = {
    update: XOR<ThumbnailUpdateWithoutEbooksInput, ThumbnailUncheckedUpdateWithoutEbooksInput>
    create: XOR<ThumbnailCreateWithoutEbooksInput, ThumbnailUncheckedCreateWithoutEbooksInput>
    where?: ThumbnailWhereInput
  }

  export type ThumbnailUpdateToOneWithWhereWithoutEbooksInput = {
    where?: ThumbnailWhereInput
    data: XOR<ThumbnailUpdateWithoutEbooksInput, ThumbnailUncheckedUpdateWithoutEbooksInput>
  }

  export type ThumbnailUpdateWithoutEbooksInput = {
    image_url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ThumbnailUncheckedUpdateWithoutEbooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    image_url?: StringFieldUpdateOperationsInput | string
    public_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookCreateWithoutPdf_thumbnailInput = {
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url?: string | null
    pdf_url_createdAt: Date | string
    createdAt?: Date | string
  }

  export type EbookUncheckedCreateWithoutPdf_thumbnailInput = {
    id?: number
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url?: string | null
    pdf_url_createdAt: Date | string
    createdAt?: Date | string
  }

  export type EbookCreateOrConnectWithoutPdf_thumbnailInput = {
    where: EbookWhereUniqueInput
    create: XOR<EbookCreateWithoutPdf_thumbnailInput, EbookUncheckedCreateWithoutPdf_thumbnailInput>
  }

  export type EbookCreateManyPdf_thumbnailInputEnvelope = {
    data: EbookCreateManyPdf_thumbnailInput | EbookCreateManyPdf_thumbnailInput[]
    skipDuplicates?: boolean
  }

  export type EbookUpsertWithWhereUniqueWithoutPdf_thumbnailInput = {
    where: EbookWhereUniqueInput
    update: XOR<EbookUpdateWithoutPdf_thumbnailInput, EbookUncheckedUpdateWithoutPdf_thumbnailInput>
    create: XOR<EbookCreateWithoutPdf_thumbnailInput, EbookUncheckedCreateWithoutPdf_thumbnailInput>
  }

  export type EbookUpdateWithWhereUniqueWithoutPdf_thumbnailInput = {
    where: EbookWhereUniqueInput
    data: XOR<EbookUpdateWithoutPdf_thumbnailInput, EbookUncheckedUpdateWithoutPdf_thumbnailInput>
  }

  export type EbookUpdateManyWithWhereWithoutPdf_thumbnailInput = {
    where: EbookScalarWhereInput
    data: XOR<EbookUpdateManyMutationInput, EbookUncheckedUpdateManyWithoutPdf_thumbnailInput>
  }

  export type EbookScalarWhereInput = {
    AND?: EbookScalarWhereInput | EbookScalarWhereInput[]
    OR?: EbookScalarWhereInput[]
    NOT?: EbookScalarWhereInput | EbookScalarWhereInput[]
    id?: IntFilter<"Ebook"> | number
    book_name?: StringFilter<"Ebook"> | string
    writer?: StringFilter<"Ebook"> | string
    genre?: StringFilter<"Ebook"> | string
    description?: StringFilter<"Ebook"> | string
    pdf_name?: StringFilter<"Ebook"> | string
    pdf_url?: StringNullableFilter<"Ebook"> | string | null
    pdf_url_createdAt?: DateTimeFilter<"Ebook"> | Date | string
    ThumbnailId?: IntFilter<"Ebook"> | number
    createdAt?: DateTimeFilter<"Ebook"> | Date | string
  }

  export type subjectCreateManyFacultyInput = {
    id?: number
    code: string
    name: string
    semester: number
    department: string
  }

  export type attendanceCreateManyStudentInput = {
    id?: number
    subjectId: number
    teacherId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceCreateManyTeacherInput = {
    id?: number
    studentId: number
    subjectId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type pdfCreateManyPosterInput = {
    id?: number
    fileName: string
    category: $Enums.Category
    year: number
    Department: $Enums.Course
    Pyq_category?: $Enums.paper_type | null
    pdf_Url?: string | null
    expireAt: Date | string
    createdAt?: Date | string
  }

  export type subjectUpdateWithoutFacultyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    attendances?: attendanceUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
    attendances?: attendanceUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type subjectUncheckedUpdateManyWithoutFacultyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    department?: StringFieldUpdateOperationsInput | string
  }

  export type attendanceUpdateWithoutStudentInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    subject?: subjectUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: userUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type attendanceUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type attendanceUpdateWithoutTeacherInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    student?: userUpdateOneRequiredWithoutAttendancesNestedInput
    subject?: subjectUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type attendanceUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type attendanceUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    subjectId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type pdfUpdateWithoutPosterInput = {
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfUncheckedUpdateWithoutPosterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type pdfUncheckedUpdateManyWithoutPosterInput = {
    id?: IntFieldUpdateOperationsInput | number
    fileName?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    year?: IntFieldUpdateOperationsInput | number
    Department?: EnumCourseFieldUpdateOperationsInput | $Enums.Course
    Pyq_category?: NullableEnumpaper_typeFieldUpdateOperationsInput | $Enums.paper_type | null
    pdf_Url?: NullableStringFieldUpdateOperationsInput | string | null
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type attendanceCreateManySubjectInput = {
    id?: number
    studentId: number
    teacherId: number
    date: Date | string
    is_present: $Enums.Status
  }

  export type attendanceUpdateWithoutSubjectInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    student?: userUpdateOneRequiredWithoutAttendancesNestedInput
    teacher?: userUpdateOneRequiredWithoutAttendanceNestedInput
  }

  export type attendanceUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type attendanceUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentId?: IntFieldUpdateOperationsInput | number
    teacherId?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    is_present?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
  }

  export type EbookCreateManyPdf_thumbnailInput = {
    id?: number
    book_name: string
    writer: string
    genre: string
    description: string
    pdf_name: string
    pdf_url?: string | null
    pdf_url_createdAt: Date | string
    createdAt?: Date | string
  }

  export type EbookUpdateWithoutPdf_thumbnailInput = {
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookUncheckedUpdateWithoutPdf_thumbnailInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EbookUncheckedUpdateManyWithoutPdf_thumbnailInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_name?: StringFieldUpdateOperationsInput | string
    writer?: StringFieldUpdateOperationsInput | string
    genre?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pdf_name?: StringFieldUpdateOperationsInput | string
    pdf_url?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url_createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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