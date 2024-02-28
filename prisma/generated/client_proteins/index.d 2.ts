
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
 * Model CharacterizationData
 * 
 */
export type CharacterizationData = $Result.DefaultSelection<Prisma.$CharacterizationDataPayload>
/**
 * Model KineticRawData
 * 
 */
export type KineticRawData = $Result.DefaultSelection<Prisma.$KineticRawDataPayload>
/**
 * Model Oligos
 * 
 */
export type Oligos = $Result.DefaultSelection<Prisma.$OligosPayload>
/**
 * Model Sequence
 * 
 */
export type Sequence = $Result.DefaultSelection<Prisma.$SequencePayload>
/**
 * Model TempRawData
 * 
 */
export type TempRawData = $Result.DefaultSelection<Prisma.$TempRawDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const KineticRawData_slope_units: {
  min_1min_Kin: 'min_1min_Kin',
  s_1s_Kin: 's_1s_Kin',
  min_3min_Kin: 'min_3min_Kin',
  s_10s_Kin: 's_10s_Kin'
};

export type KineticRawData_slope_units = (typeof KineticRawData_slope_units)[keyof typeof KineticRawData_slope_units]


export const KineticRawData_yield_units: {
  A280_: 'A280_',
  mg_mL_: 'mg_mL_',
  mM_: 'mM_',
  M_: 'M_'
};

export type KineticRawData_yield_units = (typeof KineticRawData_yield_units)[keyof typeof KineticRawData_yield_units]


export const TempRawData_slope_units: {
  min_3min_Temp: 'min_3min_Temp',
  s_3s_Temp: 's_3s_Temp',
  min_1min_Temp: 'min_1min_Temp',
  s_1s_Temp: 's_1s_Temp'
};

export type TempRawData_slope_units = (typeof TempRawData_slope_units)[keyof typeof TempRawData_slope_units]

}

export type KineticRawData_slope_units = $Enums.KineticRawData_slope_units

export const KineticRawData_slope_units: typeof $Enums.KineticRawData_slope_units

export type KineticRawData_yield_units = $Enums.KineticRawData_yield_units

export const KineticRawData_yield_units: typeof $Enums.KineticRawData_yield_units

export type TempRawData_slope_units = $Enums.TempRawData_slope_units

export const TempRawData_slope_units: typeof $Enums.TempRawData_slope_units

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CharacterizationData
 * const characterizationData = await prisma.characterizationData.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more CharacterizationData
   * const characterizationData = await prisma.characterizationData.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.characterizationData`: Exposes CRUD operations for the **CharacterizationData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterizationData
    * const characterizationData = await prisma.characterizationData.findMany()
    * ```
    */
  get characterizationData(): Prisma.CharacterizationDataDelegate<ExtArgs>;

  /**
   * `prisma.kineticRawData`: Exposes CRUD operations for the **KineticRawData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KineticRawData
    * const kineticRawData = await prisma.kineticRawData.findMany()
    * ```
    */
  get kineticRawData(): Prisma.KineticRawDataDelegate<ExtArgs>;

  /**
   * `prisma.oligos`: Exposes CRUD operations for the **Oligos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Oligos
    * const oligos = await prisma.oligos.findMany()
    * ```
    */
  get oligos(): Prisma.OligosDelegate<ExtArgs>;

  /**
   * `prisma.sequence`: Exposes CRUD operations for the **Sequence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sequences
    * const sequences = await prisma.sequence.findMany()
    * ```
    */
  get sequence(): Prisma.SequenceDelegate<ExtArgs>;

  /**
   * `prisma.tempRawData`: Exposes CRUD operations for the **TempRawData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TempRawData
    * const tempRawData = await prisma.tempRawData.findMany()
    * ```
    */
  get tempRawData(): Prisma.TempRawDataDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    CharacterizationData: 'CharacterizationData',
    KineticRawData: 'KineticRawData',
    Oligos: 'Oligos',
    Sequence: 'Sequence',
    TempRawData: 'TempRawData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'characterizationData' | 'kineticRawData' | 'oligos' | 'sequence' | 'tempRawData'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      CharacterizationData: {
        payload: Prisma.$CharacterizationDataPayload<ExtArgs>
        fields: Prisma.CharacterizationDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterizationDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterizationDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>
          }
          findFirst: {
            args: Prisma.CharacterizationDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterizationDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>
          }
          findMany: {
            args: Prisma.CharacterizationDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>[]
          }
          create: {
            args: Prisma.CharacterizationDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>
          }
          createMany: {
            args: Prisma.CharacterizationDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharacterizationDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>
          }
          update: {
            args: Prisma.CharacterizationDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>
          }
          deleteMany: {
            args: Prisma.CharacterizationDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterizationDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharacterizationDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterizationDataPayload>
          }
          aggregate: {
            args: Prisma.CharacterizationDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacterizationData>
          }
          groupBy: {
            args: Prisma.CharacterizationDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharacterizationDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterizationDataCountArgs<ExtArgs>,
            result: $Utils.Optional<CharacterizationDataCountAggregateOutputType> | number
          }
        }
      }
      KineticRawData: {
        payload: Prisma.$KineticRawDataPayload<ExtArgs>
        fields: Prisma.KineticRawDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KineticRawDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KineticRawDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>
          }
          findFirst: {
            args: Prisma.KineticRawDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KineticRawDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>
          }
          findMany: {
            args: Prisma.KineticRawDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>[]
          }
          create: {
            args: Prisma.KineticRawDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>
          }
          createMany: {
            args: Prisma.KineticRawDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KineticRawDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>
          }
          update: {
            args: Prisma.KineticRawDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>
          }
          deleteMany: {
            args: Prisma.KineticRawDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KineticRawDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KineticRawDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KineticRawDataPayload>
          }
          aggregate: {
            args: Prisma.KineticRawDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKineticRawData>
          }
          groupBy: {
            args: Prisma.KineticRawDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KineticRawDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.KineticRawDataCountArgs<ExtArgs>,
            result: $Utils.Optional<KineticRawDataCountAggregateOutputType> | number
          }
        }
      }
      Oligos: {
        payload: Prisma.$OligosPayload<ExtArgs>
        fields: Prisma.OligosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OligosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OligosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>
          }
          findFirst: {
            args: Prisma.OligosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OligosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>
          }
          findMany: {
            args: Prisma.OligosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>[]
          }
          create: {
            args: Prisma.OligosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>
          }
          createMany: {
            args: Prisma.OligosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OligosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>
          }
          update: {
            args: Prisma.OligosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>
          }
          deleteMany: {
            args: Prisma.OligosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OligosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OligosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OligosPayload>
          }
          aggregate: {
            args: Prisma.OligosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOligos>
          }
          groupBy: {
            args: Prisma.OligosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OligosGroupByOutputType>[]
          }
          count: {
            args: Prisma.OligosCountArgs<ExtArgs>,
            result: $Utils.Optional<OligosCountAggregateOutputType> | number
          }
        }
      }
      Sequence: {
        payload: Prisma.$SequencePayload<ExtArgs>
        fields: Prisma.SequenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SequenceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SequenceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          findFirst: {
            args: Prisma.SequenceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SequenceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          findMany: {
            args: Prisma.SequenceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>[]
          }
          create: {
            args: Prisma.SequenceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          createMany: {
            args: Prisma.SequenceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SequenceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          update: {
            args: Prisma.SequenceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          deleteMany: {
            args: Prisma.SequenceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SequenceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SequenceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SequencePayload>
          }
          aggregate: {
            args: Prisma.SequenceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSequence>
          }
          groupBy: {
            args: Prisma.SequenceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SequenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SequenceCountArgs<ExtArgs>,
            result: $Utils.Optional<SequenceCountAggregateOutputType> | number
          }
        }
      }
      TempRawData: {
        payload: Prisma.$TempRawDataPayload<ExtArgs>
        fields: Prisma.TempRawDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TempRawDataFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TempRawDataFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>
          }
          findFirst: {
            args: Prisma.TempRawDataFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TempRawDataFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>
          }
          findMany: {
            args: Prisma.TempRawDataFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>[]
          }
          create: {
            args: Prisma.TempRawDataCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>
          }
          createMany: {
            args: Prisma.TempRawDataCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TempRawDataDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>
          }
          update: {
            args: Prisma.TempRawDataUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>
          }
          deleteMany: {
            args: Prisma.TempRawDataDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TempRawDataUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TempRawDataUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TempRawDataPayload>
          }
          aggregate: {
            args: Prisma.TempRawDataAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTempRawData>
          }
          groupBy: {
            args: Prisma.TempRawDataGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TempRawDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.TempRawDataCountArgs<ExtArgs>,
            result: $Utils.Optional<TempRawDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model CharacterizationData
   */

  export type AggregateCharacterizationData = {
    _count: CharacterizationDataCountAggregateOutputType | null
    _avg: CharacterizationDataAvgAggregateOutputType | null
    _sum: CharacterizationDataSumAggregateOutputType | null
    _min: CharacterizationDataMinAggregateOutputType | null
    _max: CharacterizationDataMaxAggregateOutputType | null
  }

  export type CharacterizationDataAvgAggregateOutputType = {
    id: number | null
    resnum: number | null
    yield_avg: number | null
    KM_avg: number | null
    KM_SD: number | null
    kcat_avg: number | null
    kcat_SD: number | null
    kcat_over_KM: number | null
    kcat_over_KM_SD: number | null
    T50: number | null
    T50_SD: number | null
    T50_k: number | null
    T50_k_SD: number | null
    Tm: number | null
    Tm_SD: number | null
    Rosetta_score: number | null
    raw_data_id: number | null
    temp_raw_data_id: number | null
    WT_raw_data_id: number | null
    WT_temp_raw_data_id: number | null
    reference1: number | null
    reference2: number | null
    reference3: number | null
  }

  export type CharacterizationDataSumAggregateOutputType = {
    id: number | null
    resnum: number | null
    yield_avg: number | null
    KM_avg: number | null
    KM_SD: number | null
    kcat_avg: number | null
    kcat_SD: number | null
    kcat_over_KM: number | null
    kcat_over_KM_SD: number | null
    T50: number | null
    T50_SD: number | null
    T50_k: number | null
    T50_k_SD: number | null
    Tm: number | null
    Tm_SD: number | null
    Rosetta_score: number | null
    raw_data_id: number | null
    temp_raw_data_id: number | null
    WT_raw_data_id: number | null
    WT_temp_raw_data_id: number | null
    reference1: number | null
    reference2: number | null
    reference3: number | null
  }

  export type CharacterizationDataMinAggregateOutputType = {
    id: number | null
    resid: string | null
    resnum: number | null
    resmut: string | null
    oligo_ordered: boolean | null
    plasmid_verified: boolean | null
    expressed: boolean | null
    yield_avg: number | null
    KM_avg: number | null
    KM_SD: number | null
    kcat_avg: number | null
    kcat_SD: number | null
    kcat_over_KM: number | null
    kcat_over_KM_SD: number | null
    T50: number | null
    T50_SD: number | null
    T50_k: number | null
    T50_k_SD: number | null
    Tm: number | null
    Tm_SD: number | null
    Rosetta_score: number | null
    raw_data_id: number | null
    temp_raw_data_id: number | null
    WT_raw_data_id: number | null
    WT_temp_raw_data_id: number | null
    ab1_filename: string | null
    gel_filename: string | null
    creator: string | null
    teammate: string | null
    teammate2: string | null
    teammate3: string | null
    pi: string | null
    institution: string | null
    submitted_for_curation: boolean | null
    approved_by_pi: boolean | null
    curated: boolean | null
    reference1: number | null
    reference2: number | null
    reference3: number | null
    comments: string | null
  }

  export type CharacterizationDataMaxAggregateOutputType = {
    id: number | null
    resid: string | null
    resnum: number | null
    resmut: string | null
    oligo_ordered: boolean | null
    plasmid_verified: boolean | null
    expressed: boolean | null
    yield_avg: number | null
    KM_avg: number | null
    KM_SD: number | null
    kcat_avg: number | null
    kcat_SD: number | null
    kcat_over_KM: number | null
    kcat_over_KM_SD: number | null
    T50: number | null
    T50_SD: number | null
    T50_k: number | null
    T50_k_SD: number | null
    Tm: number | null
    Tm_SD: number | null
    Rosetta_score: number | null
    raw_data_id: number | null
    temp_raw_data_id: number | null
    WT_raw_data_id: number | null
    WT_temp_raw_data_id: number | null
    ab1_filename: string | null
    gel_filename: string | null
    creator: string | null
    teammate: string | null
    teammate2: string | null
    teammate3: string | null
    pi: string | null
    institution: string | null
    submitted_for_curation: boolean | null
    approved_by_pi: boolean | null
    curated: boolean | null
    reference1: number | null
    reference2: number | null
    reference3: number | null
    comments: string | null
  }

  export type CharacterizationDataCountAggregateOutputType = {
    id: number
    resid: number
    resnum: number
    resmut: number
    oligo_ordered: number
    plasmid_verified: number
    expressed: number
    yield_avg: number
    KM_avg: number
    KM_SD: number
    kcat_avg: number
    kcat_SD: number
    kcat_over_KM: number
    kcat_over_KM_SD: number
    T50: number
    T50_SD: number
    T50_k: number
    T50_k_SD: number
    Tm: number
    Tm_SD: number
    Rosetta_score: number
    raw_data_id: number
    temp_raw_data_id: number
    WT_raw_data_id: number
    WT_temp_raw_data_id: number
    ab1_filename: number
    gel_filename: number
    creator: number
    teammate: number
    teammate2: number
    teammate3: number
    pi: number
    institution: number
    submitted_for_curation: number
    approved_by_pi: number
    curated: number
    reference1: number
    reference2: number
    reference3: number
    comments: number
    _all: number
  }


  export type CharacterizationDataAvgAggregateInputType = {
    id?: true
    resnum?: true
    yield_avg?: true
    KM_avg?: true
    KM_SD?: true
    kcat_avg?: true
    kcat_SD?: true
    kcat_over_KM?: true
    kcat_over_KM_SD?: true
    T50?: true
    T50_SD?: true
    T50_k?: true
    T50_k_SD?: true
    Tm?: true
    Tm_SD?: true
    Rosetta_score?: true
    raw_data_id?: true
    temp_raw_data_id?: true
    WT_raw_data_id?: true
    WT_temp_raw_data_id?: true
    reference1?: true
    reference2?: true
    reference3?: true
  }

  export type CharacterizationDataSumAggregateInputType = {
    id?: true
    resnum?: true
    yield_avg?: true
    KM_avg?: true
    KM_SD?: true
    kcat_avg?: true
    kcat_SD?: true
    kcat_over_KM?: true
    kcat_over_KM_SD?: true
    T50?: true
    T50_SD?: true
    T50_k?: true
    T50_k_SD?: true
    Tm?: true
    Tm_SD?: true
    Rosetta_score?: true
    raw_data_id?: true
    temp_raw_data_id?: true
    WT_raw_data_id?: true
    WT_temp_raw_data_id?: true
    reference1?: true
    reference2?: true
    reference3?: true
  }

  export type CharacterizationDataMinAggregateInputType = {
    id?: true
    resid?: true
    resnum?: true
    resmut?: true
    oligo_ordered?: true
    plasmid_verified?: true
    expressed?: true
    yield_avg?: true
    KM_avg?: true
    KM_SD?: true
    kcat_avg?: true
    kcat_SD?: true
    kcat_over_KM?: true
    kcat_over_KM_SD?: true
    T50?: true
    T50_SD?: true
    T50_k?: true
    T50_k_SD?: true
    Tm?: true
    Tm_SD?: true
    Rosetta_score?: true
    raw_data_id?: true
    temp_raw_data_id?: true
    WT_raw_data_id?: true
    WT_temp_raw_data_id?: true
    ab1_filename?: true
    gel_filename?: true
    creator?: true
    teammate?: true
    teammate2?: true
    teammate3?: true
    pi?: true
    institution?: true
    submitted_for_curation?: true
    approved_by_pi?: true
    curated?: true
    reference1?: true
    reference2?: true
    reference3?: true
    comments?: true
  }

  export type CharacterizationDataMaxAggregateInputType = {
    id?: true
    resid?: true
    resnum?: true
    resmut?: true
    oligo_ordered?: true
    plasmid_verified?: true
    expressed?: true
    yield_avg?: true
    KM_avg?: true
    KM_SD?: true
    kcat_avg?: true
    kcat_SD?: true
    kcat_over_KM?: true
    kcat_over_KM_SD?: true
    T50?: true
    T50_SD?: true
    T50_k?: true
    T50_k_SD?: true
    Tm?: true
    Tm_SD?: true
    Rosetta_score?: true
    raw_data_id?: true
    temp_raw_data_id?: true
    WT_raw_data_id?: true
    WT_temp_raw_data_id?: true
    ab1_filename?: true
    gel_filename?: true
    creator?: true
    teammate?: true
    teammate2?: true
    teammate3?: true
    pi?: true
    institution?: true
    submitted_for_curation?: true
    approved_by_pi?: true
    curated?: true
    reference1?: true
    reference2?: true
    reference3?: true
    comments?: true
  }

  export type CharacterizationDataCountAggregateInputType = {
    id?: true
    resid?: true
    resnum?: true
    resmut?: true
    oligo_ordered?: true
    plasmid_verified?: true
    expressed?: true
    yield_avg?: true
    KM_avg?: true
    KM_SD?: true
    kcat_avg?: true
    kcat_SD?: true
    kcat_over_KM?: true
    kcat_over_KM_SD?: true
    T50?: true
    T50_SD?: true
    T50_k?: true
    T50_k_SD?: true
    Tm?: true
    Tm_SD?: true
    Rosetta_score?: true
    raw_data_id?: true
    temp_raw_data_id?: true
    WT_raw_data_id?: true
    WT_temp_raw_data_id?: true
    ab1_filename?: true
    gel_filename?: true
    creator?: true
    teammate?: true
    teammate2?: true
    teammate3?: true
    pi?: true
    institution?: true
    submitted_for_curation?: true
    approved_by_pi?: true
    curated?: true
    reference1?: true
    reference2?: true
    reference3?: true
    comments?: true
    _all?: true
  }

  export type CharacterizationDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterizationData to aggregate.
     */
    where?: CharacterizationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterizationData to fetch.
     */
    orderBy?: CharacterizationDataOrderByWithRelationInput | CharacterizationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterizationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterizationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterizationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterizationData
    **/
    _count?: true | CharacterizationDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterizationDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterizationDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterizationDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterizationDataMaxAggregateInputType
  }

  export type GetCharacterizationDataAggregateType<T extends CharacterizationDataAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterizationData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterizationData[P]>
      : GetScalarType<T[P], AggregateCharacterizationData[P]>
  }




  export type CharacterizationDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterizationDataWhereInput
    orderBy?: CharacterizationDataOrderByWithAggregationInput | CharacterizationDataOrderByWithAggregationInput[]
    by: CharacterizationDataScalarFieldEnum[] | CharacterizationDataScalarFieldEnum
    having?: CharacterizationDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterizationDataCountAggregateInputType | true
    _avg?: CharacterizationDataAvgAggregateInputType
    _sum?: CharacterizationDataSumAggregateInputType
    _min?: CharacterizationDataMinAggregateInputType
    _max?: CharacterizationDataMaxAggregateInputType
  }

  export type CharacterizationDataGroupByOutputType = {
    id: number
    resid: string
    resnum: number
    resmut: string
    oligo_ordered: boolean
    plasmid_verified: boolean
    expressed: boolean | null
    yield_avg: number | null
    KM_avg: number | null
    KM_SD: number | null
    kcat_avg: number | null
    kcat_SD: number | null
    kcat_over_KM: number | null
    kcat_over_KM_SD: number | null
    T50: number | null
    T50_SD: number | null
    T50_k: number | null
    T50_k_SD: number | null
    Tm: number | null
    Tm_SD: number | null
    Rosetta_score: number | null
    raw_data_id: number
    temp_raw_data_id: number
    WT_raw_data_id: number
    WT_temp_raw_data_id: number
    ab1_filename: string | null
    gel_filename: string | null
    creator: string
    teammate: string | null
    teammate2: string | null
    teammate3: string | null
    pi: string
    institution: string
    submitted_for_curation: boolean
    approved_by_pi: boolean
    curated: boolean
    reference1: number
    reference2: number
    reference3: number
    comments: string | null
    _count: CharacterizationDataCountAggregateOutputType | null
    _avg: CharacterizationDataAvgAggregateOutputType | null
    _sum: CharacterizationDataSumAggregateOutputType | null
    _min: CharacterizationDataMinAggregateOutputType | null
    _max: CharacterizationDataMaxAggregateOutputType | null
  }

  type GetCharacterizationDataGroupByPayload<T extends CharacterizationDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterizationDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterizationDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterizationDataGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterizationDataGroupByOutputType[P]>
        }
      >
    >


  export type CharacterizationDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resid?: boolean
    resnum?: boolean
    resmut?: boolean
    oligo_ordered?: boolean
    plasmid_verified?: boolean
    expressed?: boolean
    yield_avg?: boolean
    KM_avg?: boolean
    KM_SD?: boolean
    kcat_avg?: boolean
    kcat_SD?: boolean
    kcat_over_KM?: boolean
    kcat_over_KM_SD?: boolean
    T50?: boolean
    T50_SD?: boolean
    T50_k?: boolean
    T50_k_SD?: boolean
    Tm?: boolean
    Tm_SD?: boolean
    Rosetta_score?: boolean
    raw_data_id?: boolean
    temp_raw_data_id?: boolean
    WT_raw_data_id?: boolean
    WT_temp_raw_data_id?: boolean
    ab1_filename?: boolean
    gel_filename?: boolean
    creator?: boolean
    teammate?: boolean
    teammate2?: boolean
    teammate3?: boolean
    pi?: boolean
    institution?: boolean
    submitted_for_curation?: boolean
    approved_by_pi?: boolean
    curated?: boolean
    reference1?: boolean
    reference2?: boolean
    reference3?: boolean
    comments?: boolean
  }, ExtArgs["result"]["characterizationData"]>

  export type CharacterizationDataSelectScalar = {
    id?: boolean
    resid?: boolean
    resnum?: boolean
    resmut?: boolean
    oligo_ordered?: boolean
    plasmid_verified?: boolean
    expressed?: boolean
    yield_avg?: boolean
    KM_avg?: boolean
    KM_SD?: boolean
    kcat_avg?: boolean
    kcat_SD?: boolean
    kcat_over_KM?: boolean
    kcat_over_KM_SD?: boolean
    T50?: boolean
    T50_SD?: boolean
    T50_k?: boolean
    T50_k_SD?: boolean
    Tm?: boolean
    Tm_SD?: boolean
    Rosetta_score?: boolean
    raw_data_id?: boolean
    temp_raw_data_id?: boolean
    WT_raw_data_id?: boolean
    WT_temp_raw_data_id?: boolean
    ab1_filename?: boolean
    gel_filename?: boolean
    creator?: boolean
    teammate?: boolean
    teammate2?: boolean
    teammate3?: boolean
    pi?: boolean
    institution?: boolean
    submitted_for_curation?: boolean
    approved_by_pi?: boolean
    curated?: boolean
    reference1?: boolean
    reference2?: boolean
    reference3?: boolean
    comments?: boolean
  }


  export type $CharacterizationDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterizationData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resid: string
      resnum: number
      resmut: string
      oligo_ordered: boolean
      plasmid_verified: boolean
      expressed: boolean | null
      yield_avg: number | null
      KM_avg: number | null
      KM_SD: number | null
      kcat_avg: number | null
      kcat_SD: number | null
      kcat_over_KM: number | null
      kcat_over_KM_SD: number | null
      T50: number | null
      T50_SD: number | null
      T50_k: number | null
      T50_k_SD: number | null
      Tm: number | null
      Tm_SD: number | null
      Rosetta_score: number | null
      raw_data_id: number
      temp_raw_data_id: number
      WT_raw_data_id: number
      WT_temp_raw_data_id: number
      ab1_filename: string | null
      gel_filename: string | null
      creator: string
      teammate: string | null
      teammate2: string | null
      teammate3: string | null
      pi: string
      institution: string
      submitted_for_curation: boolean
      approved_by_pi: boolean
      curated: boolean
      reference1: number
      reference2: number
      reference3: number
      comments: string | null
    }, ExtArgs["result"]["characterizationData"]>
    composites: {}
  }


  type CharacterizationDataGetPayload<S extends boolean | null | undefined | CharacterizationDataDefaultArgs> = $Result.GetResult<Prisma.$CharacterizationDataPayload, S>

  type CharacterizationDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterizationDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterizationDataCountAggregateInputType | true
    }

  export interface CharacterizationDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterizationData'], meta: { name: 'CharacterizationData' } }
    /**
     * Find zero or one CharacterizationData that matches the filter.
     * @param {CharacterizationDataFindUniqueArgs} args - Arguments to find a CharacterizationData
     * @example
     * // Get one CharacterizationData
     * const characterizationData = await prisma.characterizationData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterizationDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterizationDataFindUniqueArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharacterizationData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CharacterizationDataFindUniqueOrThrowArgs} args - Arguments to find a CharacterizationData
     * @example
     * // Get one CharacterizationData
     * const characterizationData = await prisma.characterizationData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharacterizationDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterizationDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharacterizationData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataFindFirstArgs} args - Arguments to find a CharacterizationData
     * @example
     * // Get one CharacterizationData
     * const characterizationData = await prisma.characterizationData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterizationDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterizationDataFindFirstArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharacterizationData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataFindFirstOrThrowArgs} args - Arguments to find a CharacterizationData
     * @example
     * // Get one CharacterizationData
     * const characterizationData = await prisma.characterizationData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharacterizationDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterizationDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharacterizationData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterizationData
     * const characterizationData = await prisma.characterizationData.findMany()
     * 
     * // Get first 10 CharacterizationData
     * const characterizationData = await prisma.characterizationData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterizationDataWithIdOnly = await prisma.characterizationData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CharacterizationDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterizationDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharacterizationData.
     * @param {CharacterizationDataCreateArgs} args - Arguments to create a CharacterizationData.
     * @example
     * // Create one CharacterizationData
     * const CharacterizationData = await prisma.characterizationData.create({
     *   data: {
     *     // ... data to create a CharacterizationData
     *   }
     * })
     * 
    **/
    create<T extends CharacterizationDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterizationDataCreateArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharacterizationData.
     *     @param {CharacterizationDataCreateManyArgs} args - Arguments to create many CharacterizationData.
     *     @example
     *     // Create many CharacterizationData
     *     const characterizationData = await prisma.characterizationData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CharacterizationDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterizationDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterizationData.
     * @param {CharacterizationDataDeleteArgs} args - Arguments to delete one CharacterizationData.
     * @example
     * // Delete one CharacterizationData
     * const CharacterizationData = await prisma.characterizationData.delete({
     *   where: {
     *     // ... filter to delete one CharacterizationData
     *   }
     * })
     * 
    **/
    delete<T extends CharacterizationDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterizationDataDeleteArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharacterizationData.
     * @param {CharacterizationDataUpdateArgs} args - Arguments to update one CharacterizationData.
     * @example
     * // Update one CharacterizationData
     * const characterizationData = await prisma.characterizationData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterizationDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterizationDataUpdateArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharacterizationData.
     * @param {CharacterizationDataDeleteManyArgs} args - Arguments to filter CharacterizationData to delete.
     * @example
     * // Delete a few CharacterizationData
     * const { count } = await prisma.characterizationData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterizationDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterizationDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterizationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterizationData
     * const characterizationData = await prisma.characterizationData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterizationDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterizationDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterizationData.
     * @param {CharacterizationDataUpsertArgs} args - Arguments to update or create a CharacterizationData.
     * @example
     * // Update or create a CharacterizationData
     * const characterizationData = await prisma.characterizationData.upsert({
     *   create: {
     *     // ... data to create a CharacterizationData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterizationData we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterizationDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterizationDataUpsertArgs<ExtArgs>>
    ): Prisma__CharacterizationDataClient<$Result.GetResult<Prisma.$CharacterizationDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharacterizationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataCountArgs} args - Arguments to filter CharacterizationData to count.
     * @example
     * // Count the number of CharacterizationData
     * const count = await prisma.characterizationData.count({
     *   where: {
     *     // ... the filter for the CharacterizationData we want to count
     *   }
     * })
    **/
    count<T extends CharacterizationDataCountArgs>(
      args?: Subset<T, CharacterizationDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterizationDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterizationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CharacterizationDataAggregateArgs>(args: Subset<T, CharacterizationDataAggregateArgs>): Prisma.PrismaPromise<GetCharacterizationDataAggregateType<T>>

    /**
     * Group by CharacterizationData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterizationDataGroupByArgs} args - Group by arguments.
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
      T extends CharacterizationDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterizationDataGroupByArgs['orderBy'] }
        : { orderBy?: CharacterizationDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CharacterizationDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterizationDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterizationData model
   */
  readonly fields: CharacterizationDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterizationData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterizationDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharacterizationData model
   */ 
  interface CharacterizationDataFieldRefs {
    readonly id: FieldRef<"CharacterizationData", 'Int'>
    readonly resid: FieldRef<"CharacterizationData", 'String'>
    readonly resnum: FieldRef<"CharacterizationData", 'Int'>
    readonly resmut: FieldRef<"CharacterizationData", 'String'>
    readonly oligo_ordered: FieldRef<"CharacterizationData", 'Boolean'>
    readonly plasmid_verified: FieldRef<"CharacterizationData", 'Boolean'>
    readonly expressed: FieldRef<"CharacterizationData", 'Boolean'>
    readonly yield_avg: FieldRef<"CharacterizationData", 'Float'>
    readonly KM_avg: FieldRef<"CharacterizationData", 'Float'>
    readonly KM_SD: FieldRef<"CharacterizationData", 'Float'>
    readonly kcat_avg: FieldRef<"CharacterizationData", 'Float'>
    readonly kcat_SD: FieldRef<"CharacterizationData", 'Float'>
    readonly kcat_over_KM: FieldRef<"CharacterizationData", 'Float'>
    readonly kcat_over_KM_SD: FieldRef<"CharacterizationData", 'Float'>
    readonly T50: FieldRef<"CharacterizationData", 'Float'>
    readonly T50_SD: FieldRef<"CharacterizationData", 'Float'>
    readonly T50_k: FieldRef<"CharacterizationData", 'Float'>
    readonly T50_k_SD: FieldRef<"CharacterizationData", 'Float'>
    readonly Tm: FieldRef<"CharacterizationData", 'Float'>
    readonly Tm_SD: FieldRef<"CharacterizationData", 'Float'>
    readonly Rosetta_score: FieldRef<"CharacterizationData", 'Float'>
    readonly raw_data_id: FieldRef<"CharacterizationData", 'Int'>
    readonly temp_raw_data_id: FieldRef<"CharacterizationData", 'Int'>
    readonly WT_raw_data_id: FieldRef<"CharacterizationData", 'Int'>
    readonly WT_temp_raw_data_id: FieldRef<"CharacterizationData", 'Int'>
    readonly ab1_filename: FieldRef<"CharacterizationData", 'String'>
    readonly gel_filename: FieldRef<"CharacterizationData", 'String'>
    readonly creator: FieldRef<"CharacterizationData", 'String'>
    readonly teammate: FieldRef<"CharacterizationData", 'String'>
    readonly teammate2: FieldRef<"CharacterizationData", 'String'>
    readonly teammate3: FieldRef<"CharacterizationData", 'String'>
    readonly pi: FieldRef<"CharacterizationData", 'String'>
    readonly institution: FieldRef<"CharacterizationData", 'String'>
    readonly submitted_for_curation: FieldRef<"CharacterizationData", 'Boolean'>
    readonly approved_by_pi: FieldRef<"CharacterizationData", 'Boolean'>
    readonly curated: FieldRef<"CharacterizationData", 'Boolean'>
    readonly reference1: FieldRef<"CharacterizationData", 'Int'>
    readonly reference2: FieldRef<"CharacterizationData", 'Int'>
    readonly reference3: FieldRef<"CharacterizationData", 'Int'>
    readonly comments: FieldRef<"CharacterizationData", 'String'>
  }
    

  // Custom InputTypes

  /**
   * CharacterizationData findUnique
   */
  export type CharacterizationDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterizationData to fetch.
     */
    where: CharacterizationDataWhereUniqueInput
  }


  /**
   * CharacterizationData findUniqueOrThrow
   */
  export type CharacterizationDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterizationData to fetch.
     */
    where: CharacterizationDataWhereUniqueInput
  }


  /**
   * CharacterizationData findFirst
   */
  export type CharacterizationDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterizationData to fetch.
     */
    where?: CharacterizationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterizationData to fetch.
     */
    orderBy?: CharacterizationDataOrderByWithRelationInput | CharacterizationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterizationData.
     */
    cursor?: CharacterizationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterizationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterizationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterizationData.
     */
    distinct?: CharacterizationDataScalarFieldEnum | CharacterizationDataScalarFieldEnum[]
  }


  /**
   * CharacterizationData findFirstOrThrow
   */
  export type CharacterizationDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterizationData to fetch.
     */
    where?: CharacterizationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterizationData to fetch.
     */
    orderBy?: CharacterizationDataOrderByWithRelationInput | CharacterizationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterizationData.
     */
    cursor?: CharacterizationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterizationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterizationData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterizationData.
     */
    distinct?: CharacterizationDataScalarFieldEnum | CharacterizationDataScalarFieldEnum[]
  }


  /**
   * CharacterizationData findMany
   */
  export type CharacterizationDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * Filter, which CharacterizationData to fetch.
     */
    where?: CharacterizationDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterizationData to fetch.
     */
    orderBy?: CharacterizationDataOrderByWithRelationInput | CharacterizationDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterizationData.
     */
    cursor?: CharacterizationDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterizationData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterizationData.
     */
    skip?: number
    distinct?: CharacterizationDataScalarFieldEnum | CharacterizationDataScalarFieldEnum[]
  }


  /**
   * CharacterizationData create
   */
  export type CharacterizationDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * The data needed to create a CharacterizationData.
     */
    data: XOR<CharacterizationDataCreateInput, CharacterizationDataUncheckedCreateInput>
  }


  /**
   * CharacterizationData createMany
   */
  export type CharacterizationDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterizationData.
     */
    data: CharacterizationDataCreateManyInput | CharacterizationDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * CharacterizationData update
   */
  export type CharacterizationDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * The data needed to update a CharacterizationData.
     */
    data: XOR<CharacterizationDataUpdateInput, CharacterizationDataUncheckedUpdateInput>
    /**
     * Choose, which CharacterizationData to update.
     */
    where: CharacterizationDataWhereUniqueInput
  }


  /**
   * CharacterizationData updateMany
   */
  export type CharacterizationDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterizationData.
     */
    data: XOR<CharacterizationDataUpdateManyMutationInput, CharacterizationDataUncheckedUpdateManyInput>
    /**
     * Filter which CharacterizationData to update
     */
    where?: CharacterizationDataWhereInput
  }


  /**
   * CharacterizationData upsert
   */
  export type CharacterizationDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * The filter to search for the CharacterizationData to update in case it exists.
     */
    where: CharacterizationDataWhereUniqueInput
    /**
     * In case the CharacterizationData found by the `where` argument doesn't exist, create a new CharacterizationData with this data.
     */
    create: XOR<CharacterizationDataCreateInput, CharacterizationDataUncheckedCreateInput>
    /**
     * In case the CharacterizationData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterizationDataUpdateInput, CharacterizationDataUncheckedUpdateInput>
  }


  /**
   * CharacterizationData delete
   */
  export type CharacterizationDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
    /**
     * Filter which CharacterizationData to delete.
     */
    where: CharacterizationDataWhereUniqueInput
  }


  /**
   * CharacterizationData deleteMany
   */
  export type CharacterizationDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterizationData to delete
     */
    where?: CharacterizationDataWhereInput
  }


  /**
   * CharacterizationData without action
   */
  export type CharacterizationDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterizationData
     */
    select?: CharacterizationDataSelect<ExtArgs> | null
  }



  /**
   * Model KineticRawData
   */

  export type AggregateKineticRawData = {
    _count: KineticRawDataCountAggregateOutputType | null
    _avg: KineticRawDataAvgAggregateOutputType | null
    _sum: KineticRawDataSumAggregateOutputType | null
    _min: KineticRawDataMinAggregateOutputType | null
    _max: KineticRawDataMaxAggregateOutputType | null
  }

  export type KineticRawDataAvgAggregateOutputType = {
    id: number | null
    yield: number | null
    dilution: number | null
    substrate_dilution: number | null
    parent_id: number | null
  }

  export type KineticRawDataSumAggregateOutputType = {
    id: number | null
    yield: number | null
    dilution: number | null
    substrate_dilution: number | null
    parent_id: number | null
  }

  export type KineticRawDataMinAggregateOutputType = {
    id: number | null
    user_name: string | null
    plate_num: string | null
    variant: string | null
    cell_data: Buffer | null
    slope_units: $Enums.KineticRawData_slope_units | null
    yield: number | null
    yield_units: $Enums.KineticRawData_yield_units | null
    dilution: number | null
    substrate_dilution: number | null
    purification_date: string | null
    assay_date: string | null
    csv_filename: string | null
    plot_filename: string | null
    updated: Date | null
    parent_id: number | null
    approved_by_student: boolean | null
  }

  export type KineticRawDataMaxAggregateOutputType = {
    id: number | null
    user_name: string | null
    plate_num: string | null
    variant: string | null
    cell_data: Buffer | null
    slope_units: $Enums.KineticRawData_slope_units | null
    yield: number | null
    yield_units: $Enums.KineticRawData_yield_units | null
    dilution: number | null
    substrate_dilution: number | null
    purification_date: string | null
    assay_date: string | null
    csv_filename: string | null
    plot_filename: string | null
    updated: Date | null
    parent_id: number | null
    approved_by_student: boolean | null
  }

  export type KineticRawDataCountAggregateOutputType = {
    id: number
    user_name: number
    plate_num: number
    variant: number
    cell_data: number
    slope_units: number
    yield: number
    yield_units: number
    dilution: number
    substrate_dilution: number
    purification_date: number
    assay_date: number
    csv_filename: number
    plot_filename: number
    updated: number
    parent_id: number
    approved_by_student: number
    _all: number
  }


  export type KineticRawDataAvgAggregateInputType = {
    id?: true
    yield?: true
    dilution?: true
    substrate_dilution?: true
    parent_id?: true
  }

  export type KineticRawDataSumAggregateInputType = {
    id?: true
    yield?: true
    dilution?: true
    substrate_dilution?: true
    parent_id?: true
  }

  export type KineticRawDataMinAggregateInputType = {
    id?: true
    user_name?: true
    plate_num?: true
    variant?: true
    cell_data?: true
    slope_units?: true
    yield?: true
    yield_units?: true
    dilution?: true
    substrate_dilution?: true
    purification_date?: true
    assay_date?: true
    csv_filename?: true
    plot_filename?: true
    updated?: true
    parent_id?: true
    approved_by_student?: true
  }

  export type KineticRawDataMaxAggregateInputType = {
    id?: true
    user_name?: true
    plate_num?: true
    variant?: true
    cell_data?: true
    slope_units?: true
    yield?: true
    yield_units?: true
    dilution?: true
    substrate_dilution?: true
    purification_date?: true
    assay_date?: true
    csv_filename?: true
    plot_filename?: true
    updated?: true
    parent_id?: true
    approved_by_student?: true
  }

  export type KineticRawDataCountAggregateInputType = {
    id?: true
    user_name?: true
    plate_num?: true
    variant?: true
    cell_data?: true
    slope_units?: true
    yield?: true
    yield_units?: true
    dilution?: true
    substrate_dilution?: true
    purification_date?: true
    assay_date?: true
    csv_filename?: true
    plot_filename?: true
    updated?: true
    parent_id?: true
    approved_by_student?: true
    _all?: true
  }

  export type KineticRawDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KineticRawData to aggregate.
     */
    where?: KineticRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KineticRawData to fetch.
     */
    orderBy?: KineticRawDataOrderByWithRelationInput | KineticRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KineticRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KineticRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KineticRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KineticRawData
    **/
    _count?: true | KineticRawDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KineticRawDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KineticRawDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KineticRawDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KineticRawDataMaxAggregateInputType
  }

  export type GetKineticRawDataAggregateType<T extends KineticRawDataAggregateArgs> = {
        [P in keyof T & keyof AggregateKineticRawData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKineticRawData[P]>
      : GetScalarType<T[P], AggregateKineticRawData[P]>
  }




  export type KineticRawDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KineticRawDataWhereInput
    orderBy?: KineticRawDataOrderByWithAggregationInput | KineticRawDataOrderByWithAggregationInput[]
    by: KineticRawDataScalarFieldEnum[] | KineticRawDataScalarFieldEnum
    having?: KineticRawDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KineticRawDataCountAggregateInputType | true
    _avg?: KineticRawDataAvgAggregateInputType
    _sum?: KineticRawDataSumAggregateInputType
    _min?: KineticRawDataMinAggregateInputType
    _max?: KineticRawDataMaxAggregateInputType
  }

  export type KineticRawDataGroupByOutputType = {
    id: number
    user_name: string | null
    plate_num: string | null
    variant: string | null
    cell_data: Buffer | null
    slope_units: $Enums.KineticRawData_slope_units
    yield: number | null
    yield_units: $Enums.KineticRawData_yield_units
    dilution: number | null
    substrate_dilution: number
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated: Date
    parent_id: number
    approved_by_student: boolean
    _count: KineticRawDataCountAggregateOutputType | null
    _avg: KineticRawDataAvgAggregateOutputType | null
    _sum: KineticRawDataSumAggregateOutputType | null
    _min: KineticRawDataMinAggregateOutputType | null
    _max: KineticRawDataMaxAggregateOutputType | null
  }

  type GetKineticRawDataGroupByPayload<T extends KineticRawDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KineticRawDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KineticRawDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KineticRawDataGroupByOutputType[P]>
            : GetScalarType<T[P], KineticRawDataGroupByOutputType[P]>
        }
      >
    >


  export type KineticRawDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    plate_num?: boolean
    variant?: boolean
    cell_data?: boolean
    slope_units?: boolean
    yield?: boolean
    yield_units?: boolean
    dilution?: boolean
    substrate_dilution?: boolean
    purification_date?: boolean
    assay_date?: boolean
    csv_filename?: boolean
    plot_filename?: boolean
    updated?: boolean
    parent_id?: boolean
    approved_by_student?: boolean
  }, ExtArgs["result"]["kineticRawData"]>

  export type KineticRawDataSelectScalar = {
    id?: boolean
    user_name?: boolean
    plate_num?: boolean
    variant?: boolean
    cell_data?: boolean
    slope_units?: boolean
    yield?: boolean
    yield_units?: boolean
    dilution?: boolean
    substrate_dilution?: boolean
    purification_date?: boolean
    assay_date?: boolean
    csv_filename?: boolean
    plot_filename?: boolean
    updated?: boolean
    parent_id?: boolean
    approved_by_student?: boolean
  }


  export type $KineticRawDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KineticRawData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_name: string | null
      plate_num: string | null
      variant: string | null
      cell_data: Buffer | null
      slope_units: $Enums.KineticRawData_slope_units
      yield: number | null
      yield_units: $Enums.KineticRawData_yield_units
      dilution: number | null
      substrate_dilution: number
      purification_date: string
      assay_date: string
      csv_filename: string
      plot_filename: string
      updated: Date
      parent_id: number
      approved_by_student: boolean
    }, ExtArgs["result"]["kineticRawData"]>
    composites: {}
  }


  type KineticRawDataGetPayload<S extends boolean | null | undefined | KineticRawDataDefaultArgs> = $Result.GetResult<Prisma.$KineticRawDataPayload, S>

  type KineticRawDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<KineticRawDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: KineticRawDataCountAggregateInputType | true
    }

  export interface KineticRawDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KineticRawData'], meta: { name: 'KineticRawData' } }
    /**
     * Find zero or one KineticRawData that matches the filter.
     * @param {KineticRawDataFindUniqueArgs} args - Arguments to find a KineticRawData
     * @example
     * // Get one KineticRawData
     * const kineticRawData = await prisma.kineticRawData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KineticRawDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KineticRawDataFindUniqueArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one KineticRawData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KineticRawDataFindUniqueOrThrowArgs} args - Arguments to find a KineticRawData
     * @example
     * // Get one KineticRawData
     * const kineticRawData = await prisma.kineticRawData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KineticRawDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KineticRawDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first KineticRawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataFindFirstArgs} args - Arguments to find a KineticRawData
     * @example
     * // Get one KineticRawData
     * const kineticRawData = await prisma.kineticRawData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KineticRawDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KineticRawDataFindFirstArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first KineticRawData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataFindFirstOrThrowArgs} args - Arguments to find a KineticRawData
     * @example
     * // Get one KineticRawData
     * const kineticRawData = await prisma.kineticRawData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KineticRawDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KineticRawDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more KineticRawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KineticRawData
     * const kineticRawData = await prisma.kineticRawData.findMany()
     * 
     * // Get first 10 KineticRawData
     * const kineticRawData = await prisma.kineticRawData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kineticRawDataWithIdOnly = await prisma.kineticRawData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KineticRawDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KineticRawDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a KineticRawData.
     * @param {KineticRawDataCreateArgs} args - Arguments to create a KineticRawData.
     * @example
     * // Create one KineticRawData
     * const KineticRawData = await prisma.kineticRawData.create({
     *   data: {
     *     // ... data to create a KineticRawData
     *   }
     * })
     * 
    **/
    create<T extends KineticRawDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KineticRawDataCreateArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many KineticRawData.
     *     @param {KineticRawDataCreateManyArgs} args - Arguments to create many KineticRawData.
     *     @example
     *     // Create many KineticRawData
     *     const kineticRawData = await prisma.kineticRawData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KineticRawDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KineticRawDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a KineticRawData.
     * @param {KineticRawDataDeleteArgs} args - Arguments to delete one KineticRawData.
     * @example
     * // Delete one KineticRawData
     * const KineticRawData = await prisma.kineticRawData.delete({
     *   where: {
     *     // ... filter to delete one KineticRawData
     *   }
     * })
     * 
    **/
    delete<T extends KineticRawDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KineticRawDataDeleteArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one KineticRawData.
     * @param {KineticRawDataUpdateArgs} args - Arguments to update one KineticRawData.
     * @example
     * // Update one KineticRawData
     * const kineticRawData = await prisma.kineticRawData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KineticRawDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KineticRawDataUpdateArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more KineticRawData.
     * @param {KineticRawDataDeleteManyArgs} args - Arguments to filter KineticRawData to delete.
     * @example
     * // Delete a few KineticRawData
     * const { count } = await prisma.kineticRawData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KineticRawDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KineticRawDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KineticRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KineticRawData
     * const kineticRawData = await prisma.kineticRawData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KineticRawDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KineticRawDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one KineticRawData.
     * @param {KineticRawDataUpsertArgs} args - Arguments to update or create a KineticRawData.
     * @example
     * // Update or create a KineticRawData
     * const kineticRawData = await prisma.kineticRawData.upsert({
     *   create: {
     *     // ... data to create a KineticRawData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KineticRawData we want to update
     *   }
     * })
    **/
    upsert<T extends KineticRawDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KineticRawDataUpsertArgs<ExtArgs>>
    ): Prisma__KineticRawDataClient<$Result.GetResult<Prisma.$KineticRawDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of KineticRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataCountArgs} args - Arguments to filter KineticRawData to count.
     * @example
     * // Count the number of KineticRawData
     * const count = await prisma.kineticRawData.count({
     *   where: {
     *     // ... the filter for the KineticRawData we want to count
     *   }
     * })
    **/
    count<T extends KineticRawDataCountArgs>(
      args?: Subset<T, KineticRawDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KineticRawDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KineticRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KineticRawDataAggregateArgs>(args: Subset<T, KineticRawDataAggregateArgs>): Prisma.PrismaPromise<GetKineticRawDataAggregateType<T>>

    /**
     * Group by KineticRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KineticRawDataGroupByArgs} args - Group by arguments.
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
      T extends KineticRawDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KineticRawDataGroupByArgs['orderBy'] }
        : { orderBy?: KineticRawDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KineticRawDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKineticRawDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KineticRawData model
   */
  readonly fields: KineticRawDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KineticRawData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KineticRawDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the KineticRawData model
   */ 
  interface KineticRawDataFieldRefs {
    readonly id: FieldRef<"KineticRawData", 'Int'>
    readonly user_name: FieldRef<"KineticRawData", 'String'>
    readonly plate_num: FieldRef<"KineticRawData", 'String'>
    readonly variant: FieldRef<"KineticRawData", 'String'>
    readonly cell_data: FieldRef<"KineticRawData", 'Bytes'>
    readonly slope_units: FieldRef<"KineticRawData", 'KineticRawData_slope_units'>
    readonly yield: FieldRef<"KineticRawData", 'Float'>
    readonly yield_units: FieldRef<"KineticRawData", 'KineticRawData_yield_units'>
    readonly dilution: FieldRef<"KineticRawData", 'Float'>
    readonly substrate_dilution: FieldRef<"KineticRawData", 'Int'>
    readonly purification_date: FieldRef<"KineticRawData", 'String'>
    readonly assay_date: FieldRef<"KineticRawData", 'String'>
    readonly csv_filename: FieldRef<"KineticRawData", 'String'>
    readonly plot_filename: FieldRef<"KineticRawData", 'String'>
    readonly updated: FieldRef<"KineticRawData", 'DateTime'>
    readonly parent_id: FieldRef<"KineticRawData", 'Int'>
    readonly approved_by_student: FieldRef<"KineticRawData", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * KineticRawData findUnique
   */
  export type KineticRawDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * Filter, which KineticRawData to fetch.
     */
    where: KineticRawDataWhereUniqueInput
  }


  /**
   * KineticRawData findUniqueOrThrow
   */
  export type KineticRawDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * Filter, which KineticRawData to fetch.
     */
    where: KineticRawDataWhereUniqueInput
  }


  /**
   * KineticRawData findFirst
   */
  export type KineticRawDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * Filter, which KineticRawData to fetch.
     */
    where?: KineticRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KineticRawData to fetch.
     */
    orderBy?: KineticRawDataOrderByWithRelationInput | KineticRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KineticRawData.
     */
    cursor?: KineticRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KineticRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KineticRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KineticRawData.
     */
    distinct?: KineticRawDataScalarFieldEnum | KineticRawDataScalarFieldEnum[]
  }


  /**
   * KineticRawData findFirstOrThrow
   */
  export type KineticRawDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * Filter, which KineticRawData to fetch.
     */
    where?: KineticRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KineticRawData to fetch.
     */
    orderBy?: KineticRawDataOrderByWithRelationInput | KineticRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KineticRawData.
     */
    cursor?: KineticRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KineticRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KineticRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KineticRawData.
     */
    distinct?: KineticRawDataScalarFieldEnum | KineticRawDataScalarFieldEnum[]
  }


  /**
   * KineticRawData findMany
   */
  export type KineticRawDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * Filter, which KineticRawData to fetch.
     */
    where?: KineticRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KineticRawData to fetch.
     */
    orderBy?: KineticRawDataOrderByWithRelationInput | KineticRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KineticRawData.
     */
    cursor?: KineticRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KineticRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KineticRawData.
     */
    skip?: number
    distinct?: KineticRawDataScalarFieldEnum | KineticRawDataScalarFieldEnum[]
  }


  /**
   * KineticRawData create
   */
  export type KineticRawDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * The data needed to create a KineticRawData.
     */
    data: XOR<KineticRawDataCreateInput, KineticRawDataUncheckedCreateInput>
  }


  /**
   * KineticRawData createMany
   */
  export type KineticRawDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KineticRawData.
     */
    data: KineticRawDataCreateManyInput | KineticRawDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * KineticRawData update
   */
  export type KineticRawDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * The data needed to update a KineticRawData.
     */
    data: XOR<KineticRawDataUpdateInput, KineticRawDataUncheckedUpdateInput>
    /**
     * Choose, which KineticRawData to update.
     */
    where: KineticRawDataWhereUniqueInput
  }


  /**
   * KineticRawData updateMany
   */
  export type KineticRawDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KineticRawData.
     */
    data: XOR<KineticRawDataUpdateManyMutationInput, KineticRawDataUncheckedUpdateManyInput>
    /**
     * Filter which KineticRawData to update
     */
    where?: KineticRawDataWhereInput
  }


  /**
   * KineticRawData upsert
   */
  export type KineticRawDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * The filter to search for the KineticRawData to update in case it exists.
     */
    where: KineticRawDataWhereUniqueInput
    /**
     * In case the KineticRawData found by the `where` argument doesn't exist, create a new KineticRawData with this data.
     */
    create: XOR<KineticRawDataCreateInput, KineticRawDataUncheckedCreateInput>
    /**
     * In case the KineticRawData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KineticRawDataUpdateInput, KineticRawDataUncheckedUpdateInput>
  }


  /**
   * KineticRawData delete
   */
  export type KineticRawDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
    /**
     * Filter which KineticRawData to delete.
     */
    where: KineticRawDataWhereUniqueInput
  }


  /**
   * KineticRawData deleteMany
   */
  export type KineticRawDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KineticRawData to delete
     */
    where?: KineticRawDataWhereInput
  }


  /**
   * KineticRawData without action
   */
  export type KineticRawDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KineticRawData
     */
    select?: KineticRawDataSelect<ExtArgs> | null
  }



  /**
   * Model Oligos
   */

  export type AggregateOligos = {
    _count: OligosCountAggregateOutputType | null
    _avg: OligosAvgAggregateOutputType | null
    _sum: OligosSumAggregateOutputType | null
    _min: OligosMinAggregateOutputType | null
    _max: OligosMaxAggregateOutputType | null
  }

  export type OligosAvgAggregateOutputType = {
    id: number | null
  }

  export type OligosSumAggregateOutputType = {
    id: number | null
  }

  export type OligosMinAggregateOutputType = {
    id: number | null
    variant: string | null
    oligo: string | null
  }

  export type OligosMaxAggregateOutputType = {
    id: number | null
    variant: string | null
    oligo: string | null
  }

  export type OligosCountAggregateOutputType = {
    id: number
    variant: number
    oligo: number
    _all: number
  }


  export type OligosAvgAggregateInputType = {
    id?: true
  }

  export type OligosSumAggregateInputType = {
    id?: true
  }

  export type OligosMinAggregateInputType = {
    id?: true
    variant?: true
    oligo?: true
  }

  export type OligosMaxAggregateInputType = {
    id?: true
    variant?: true
    oligo?: true
  }

  export type OligosCountAggregateInputType = {
    id?: true
    variant?: true
    oligo?: true
    _all?: true
  }

  export type OligosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oligos to aggregate.
     */
    where?: OligosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oligos to fetch.
     */
    orderBy?: OligosOrderByWithRelationInput | OligosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OligosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oligos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oligos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Oligos
    **/
    _count?: true | OligosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OligosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OligosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OligosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OligosMaxAggregateInputType
  }

  export type GetOligosAggregateType<T extends OligosAggregateArgs> = {
        [P in keyof T & keyof AggregateOligos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOligos[P]>
      : GetScalarType<T[P], AggregateOligos[P]>
  }




  export type OligosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OligosWhereInput
    orderBy?: OligosOrderByWithAggregationInput | OligosOrderByWithAggregationInput[]
    by: OligosScalarFieldEnum[] | OligosScalarFieldEnum
    having?: OligosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OligosCountAggregateInputType | true
    _avg?: OligosAvgAggregateInputType
    _sum?: OligosSumAggregateInputType
    _min?: OligosMinAggregateInputType
    _max?: OligosMaxAggregateInputType
  }

  export type OligosGroupByOutputType = {
    id: number
    variant: string
    oligo: string
    _count: OligosCountAggregateOutputType | null
    _avg: OligosAvgAggregateOutputType | null
    _sum: OligosSumAggregateOutputType | null
    _min: OligosMinAggregateOutputType | null
    _max: OligosMaxAggregateOutputType | null
  }

  type GetOligosGroupByPayload<T extends OligosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OligosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OligosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OligosGroupByOutputType[P]>
            : GetScalarType<T[P], OligosGroupByOutputType[P]>
        }
      >
    >


  export type OligosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    variant?: boolean
    oligo?: boolean
  }, ExtArgs["result"]["oligos"]>

  export type OligosSelectScalar = {
    id?: boolean
    variant?: boolean
    oligo?: boolean
  }


  export type $OligosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Oligos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      variant: string
      oligo: string
    }, ExtArgs["result"]["oligos"]>
    composites: {}
  }


  type OligosGetPayload<S extends boolean | null | undefined | OligosDefaultArgs> = $Result.GetResult<Prisma.$OligosPayload, S>

  type OligosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OligosFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OligosCountAggregateInputType | true
    }

  export interface OligosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Oligos'], meta: { name: 'Oligos' } }
    /**
     * Find zero or one Oligos that matches the filter.
     * @param {OligosFindUniqueArgs} args - Arguments to find a Oligos
     * @example
     * // Get one Oligos
     * const oligos = await prisma.oligos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OligosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OligosFindUniqueArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Oligos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OligosFindUniqueOrThrowArgs} args - Arguments to find a Oligos
     * @example
     * // Get one Oligos
     * const oligos = await prisma.oligos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OligosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OligosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Oligos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosFindFirstArgs} args - Arguments to find a Oligos
     * @example
     * // Get one Oligos
     * const oligos = await prisma.oligos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OligosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OligosFindFirstArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Oligos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosFindFirstOrThrowArgs} args - Arguments to find a Oligos
     * @example
     * // Get one Oligos
     * const oligos = await prisma.oligos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OligosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OligosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Oligos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Oligos
     * const oligos = await prisma.oligos.findMany()
     * 
     * // Get first 10 Oligos
     * const oligos = await prisma.oligos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oligosWithIdOnly = await prisma.oligos.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OligosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OligosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Oligos.
     * @param {OligosCreateArgs} args - Arguments to create a Oligos.
     * @example
     * // Create one Oligos
     * const Oligos = await prisma.oligos.create({
     *   data: {
     *     // ... data to create a Oligos
     *   }
     * })
     * 
    **/
    create<T extends OligosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OligosCreateArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Oligos.
     *     @param {OligosCreateManyArgs} args - Arguments to create many Oligos.
     *     @example
     *     // Create many Oligos
     *     const oligos = await prisma.oligos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OligosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OligosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Oligos.
     * @param {OligosDeleteArgs} args - Arguments to delete one Oligos.
     * @example
     * // Delete one Oligos
     * const Oligos = await prisma.oligos.delete({
     *   where: {
     *     // ... filter to delete one Oligos
     *   }
     * })
     * 
    **/
    delete<T extends OligosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OligosDeleteArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Oligos.
     * @param {OligosUpdateArgs} args - Arguments to update one Oligos.
     * @example
     * // Update one Oligos
     * const oligos = await prisma.oligos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OligosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OligosUpdateArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Oligos.
     * @param {OligosDeleteManyArgs} args - Arguments to filter Oligos to delete.
     * @example
     * // Delete a few Oligos
     * const { count } = await prisma.oligos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OligosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OligosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Oligos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Oligos
     * const oligos = await prisma.oligos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OligosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OligosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Oligos.
     * @param {OligosUpsertArgs} args - Arguments to update or create a Oligos.
     * @example
     * // Update or create a Oligos
     * const oligos = await prisma.oligos.upsert({
     *   create: {
     *     // ... data to create a Oligos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Oligos we want to update
     *   }
     * })
    **/
    upsert<T extends OligosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OligosUpsertArgs<ExtArgs>>
    ): Prisma__OligosClient<$Result.GetResult<Prisma.$OligosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Oligos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosCountArgs} args - Arguments to filter Oligos to count.
     * @example
     * // Count the number of Oligos
     * const count = await prisma.oligos.count({
     *   where: {
     *     // ... the filter for the Oligos we want to count
     *   }
     * })
    **/
    count<T extends OligosCountArgs>(
      args?: Subset<T, OligosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OligosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Oligos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OligosAggregateArgs>(args: Subset<T, OligosAggregateArgs>): Prisma.PrismaPromise<GetOligosAggregateType<T>>

    /**
     * Group by Oligos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OligosGroupByArgs} args - Group by arguments.
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
      T extends OligosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OligosGroupByArgs['orderBy'] }
        : { orderBy?: OligosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OligosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOligosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Oligos model
   */
  readonly fields: OligosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Oligos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OligosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Oligos model
   */ 
  interface OligosFieldRefs {
    readonly id: FieldRef<"Oligos", 'Int'>
    readonly variant: FieldRef<"Oligos", 'String'>
    readonly oligo: FieldRef<"Oligos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Oligos findUnique
   */
  export type OligosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * Filter, which Oligos to fetch.
     */
    where: OligosWhereUniqueInput
  }


  /**
   * Oligos findUniqueOrThrow
   */
  export type OligosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * Filter, which Oligos to fetch.
     */
    where: OligosWhereUniqueInput
  }


  /**
   * Oligos findFirst
   */
  export type OligosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * Filter, which Oligos to fetch.
     */
    where?: OligosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oligos to fetch.
     */
    orderBy?: OligosOrderByWithRelationInput | OligosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oligos.
     */
    cursor?: OligosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oligos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oligos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oligos.
     */
    distinct?: OligosScalarFieldEnum | OligosScalarFieldEnum[]
  }


  /**
   * Oligos findFirstOrThrow
   */
  export type OligosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * Filter, which Oligos to fetch.
     */
    where?: OligosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oligos to fetch.
     */
    orderBy?: OligosOrderByWithRelationInput | OligosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Oligos.
     */
    cursor?: OligosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oligos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oligos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Oligos.
     */
    distinct?: OligosScalarFieldEnum | OligosScalarFieldEnum[]
  }


  /**
   * Oligos findMany
   */
  export type OligosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * Filter, which Oligos to fetch.
     */
    where?: OligosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Oligos to fetch.
     */
    orderBy?: OligosOrderByWithRelationInput | OligosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Oligos.
     */
    cursor?: OligosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Oligos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Oligos.
     */
    skip?: number
    distinct?: OligosScalarFieldEnum | OligosScalarFieldEnum[]
  }


  /**
   * Oligos create
   */
  export type OligosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * The data needed to create a Oligos.
     */
    data: XOR<OligosCreateInput, OligosUncheckedCreateInput>
  }


  /**
   * Oligos createMany
   */
  export type OligosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Oligos.
     */
    data: OligosCreateManyInput | OligosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Oligos update
   */
  export type OligosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * The data needed to update a Oligos.
     */
    data: XOR<OligosUpdateInput, OligosUncheckedUpdateInput>
    /**
     * Choose, which Oligos to update.
     */
    where: OligosWhereUniqueInput
  }


  /**
   * Oligos updateMany
   */
  export type OligosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Oligos.
     */
    data: XOR<OligosUpdateManyMutationInput, OligosUncheckedUpdateManyInput>
    /**
     * Filter which Oligos to update
     */
    where?: OligosWhereInput
  }


  /**
   * Oligos upsert
   */
  export type OligosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * The filter to search for the Oligos to update in case it exists.
     */
    where: OligosWhereUniqueInput
    /**
     * In case the Oligos found by the `where` argument doesn't exist, create a new Oligos with this data.
     */
    create: XOR<OligosCreateInput, OligosUncheckedCreateInput>
    /**
     * In case the Oligos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OligosUpdateInput, OligosUncheckedUpdateInput>
  }


  /**
   * Oligos delete
   */
  export type OligosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
    /**
     * Filter which Oligos to delete.
     */
    where: OligosWhereUniqueInput
  }


  /**
   * Oligos deleteMany
   */
  export type OligosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Oligos to delete
     */
    where?: OligosWhereInput
  }


  /**
   * Oligos without action
   */
  export type OligosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Oligos
     */
    select?: OligosSelect<ExtArgs> | null
  }



  /**
   * Model Sequence
   */

  export type AggregateSequence = {
    _count: SequenceCountAggregateOutputType | null
    _avg: SequenceAvgAggregateOutputType | null
    _sum: SequenceSumAggregateOutputType | null
    _min: SequenceMinAggregateOutputType | null
    _max: SequenceMaxAggregateOutputType | null
  }

  export type SequenceAvgAggregateOutputType = {
    id: number | null
    Rosetta_resnum: number | null
  }

  export type SequenceSumAggregateOutputType = {
    id: number | null
    Rosetta_resnum: number | null
  }

  export type SequenceMinAggregateOutputType = {
    id: number | null
    resnum: string | null
    Rosetta_resnum: number | null
    PDBresnum: string | null
    resid: string | null
  }

  export type SequenceMaxAggregateOutputType = {
    id: number | null
    resnum: string | null
    Rosetta_resnum: number | null
    PDBresnum: string | null
    resid: string | null
  }

  export type SequenceCountAggregateOutputType = {
    id: number
    resnum: number
    Rosetta_resnum: number
    PDBresnum: number
    resid: number
    _all: number
  }


  export type SequenceAvgAggregateInputType = {
    id?: true
    Rosetta_resnum?: true
  }

  export type SequenceSumAggregateInputType = {
    id?: true
    Rosetta_resnum?: true
  }

  export type SequenceMinAggregateInputType = {
    id?: true
    resnum?: true
    Rosetta_resnum?: true
    PDBresnum?: true
    resid?: true
  }

  export type SequenceMaxAggregateInputType = {
    id?: true
    resnum?: true
    Rosetta_resnum?: true
    PDBresnum?: true
    resid?: true
  }

  export type SequenceCountAggregateInputType = {
    id?: true
    resnum?: true
    Rosetta_resnum?: true
    PDBresnum?: true
    resid?: true
    _all?: true
  }

  export type SequenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sequence to aggregate.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sequences
    **/
    _count?: true | SequenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SequenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SequenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequenceMaxAggregateInputType
  }

  export type GetSequenceAggregateType<T extends SequenceAggregateArgs> = {
        [P in keyof T & keyof AggregateSequence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequence[P]>
      : GetScalarType<T[P], AggregateSequence[P]>
  }




  export type SequenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SequenceWhereInput
    orderBy?: SequenceOrderByWithAggregationInput | SequenceOrderByWithAggregationInput[]
    by: SequenceScalarFieldEnum[] | SequenceScalarFieldEnum
    having?: SequenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequenceCountAggregateInputType | true
    _avg?: SequenceAvgAggregateInputType
    _sum?: SequenceSumAggregateInputType
    _min?: SequenceMinAggregateInputType
    _max?: SequenceMaxAggregateInputType
  }

  export type SequenceGroupByOutputType = {
    id: number
    resnum: string
    Rosetta_resnum: number | null
    PDBresnum: string | null
    resid: string
    _count: SequenceCountAggregateOutputType | null
    _avg: SequenceAvgAggregateOutputType | null
    _sum: SequenceSumAggregateOutputType | null
    _min: SequenceMinAggregateOutputType | null
    _max: SequenceMaxAggregateOutputType | null
  }

  type GetSequenceGroupByPayload<T extends SequenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SequenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SequenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SequenceGroupByOutputType[P]>
            : GetScalarType<T[P], SequenceGroupByOutputType[P]>
        }
      >
    >


  export type SequenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resnum?: boolean
    Rosetta_resnum?: boolean
    PDBresnum?: boolean
    resid?: boolean
  }, ExtArgs["result"]["sequence"]>

  export type SequenceSelectScalar = {
    id?: boolean
    resnum?: boolean
    Rosetta_resnum?: boolean
    PDBresnum?: boolean
    resid?: boolean
  }


  export type $SequencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sequence"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      resnum: string
      Rosetta_resnum: number | null
      PDBresnum: string | null
      resid: string
    }, ExtArgs["result"]["sequence"]>
    composites: {}
  }


  type SequenceGetPayload<S extends boolean | null | undefined | SequenceDefaultArgs> = $Result.GetResult<Prisma.$SequencePayload, S>

  type SequenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SequenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SequenceCountAggregateInputType | true
    }

  export interface SequenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sequence'], meta: { name: 'Sequence' } }
    /**
     * Find zero or one Sequence that matches the filter.
     * @param {SequenceFindUniqueArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SequenceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SequenceFindUniqueArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sequence that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SequenceFindUniqueOrThrowArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SequenceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SequenceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sequence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceFindFirstArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SequenceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SequenceFindFirstArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sequence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceFindFirstOrThrowArgs} args - Arguments to find a Sequence
     * @example
     * // Get one Sequence
     * const sequence = await prisma.sequence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SequenceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SequenceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sequences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sequences
     * const sequences = await prisma.sequence.findMany()
     * 
     * // Get first 10 Sequences
     * const sequences = await prisma.sequence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sequenceWithIdOnly = await prisma.sequence.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SequenceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SequenceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sequence.
     * @param {SequenceCreateArgs} args - Arguments to create a Sequence.
     * @example
     * // Create one Sequence
     * const Sequence = await prisma.sequence.create({
     *   data: {
     *     // ... data to create a Sequence
     *   }
     * })
     * 
    **/
    create<T extends SequenceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SequenceCreateArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sequences.
     *     @param {SequenceCreateManyArgs} args - Arguments to create many Sequences.
     *     @example
     *     // Create many Sequences
     *     const sequence = await prisma.sequence.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SequenceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SequenceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sequence.
     * @param {SequenceDeleteArgs} args - Arguments to delete one Sequence.
     * @example
     * // Delete one Sequence
     * const Sequence = await prisma.sequence.delete({
     *   where: {
     *     // ... filter to delete one Sequence
     *   }
     * })
     * 
    **/
    delete<T extends SequenceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SequenceDeleteArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sequence.
     * @param {SequenceUpdateArgs} args - Arguments to update one Sequence.
     * @example
     * // Update one Sequence
     * const sequence = await prisma.sequence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SequenceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SequenceUpdateArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sequences.
     * @param {SequenceDeleteManyArgs} args - Arguments to filter Sequences to delete.
     * @example
     * // Delete a few Sequences
     * const { count } = await prisma.sequence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SequenceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SequenceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sequences
     * const sequence = await prisma.sequence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SequenceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SequenceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sequence.
     * @param {SequenceUpsertArgs} args - Arguments to update or create a Sequence.
     * @example
     * // Update or create a Sequence
     * const sequence = await prisma.sequence.upsert({
     *   create: {
     *     // ... data to create a Sequence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sequence we want to update
     *   }
     * })
    **/
    upsert<T extends SequenceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SequenceUpsertArgs<ExtArgs>>
    ): Prisma__SequenceClient<$Result.GetResult<Prisma.$SequencePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sequences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceCountArgs} args - Arguments to filter Sequences to count.
     * @example
     * // Count the number of Sequences
     * const count = await prisma.sequence.count({
     *   where: {
     *     // ... the filter for the Sequences we want to count
     *   }
     * })
    **/
    count<T extends SequenceCountArgs>(
      args?: Subset<T, SequenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequenceAggregateArgs>(args: Subset<T, SequenceAggregateArgs>): Prisma.PrismaPromise<GetSequenceAggregateType<T>>

    /**
     * Group by Sequence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequenceGroupByArgs} args - Group by arguments.
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
      T extends SequenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequenceGroupByArgs['orderBy'] }
        : { orderBy?: SequenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SequenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sequence model
   */
  readonly fields: SequenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sequence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SequenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Sequence model
   */ 
  interface SequenceFieldRefs {
    readonly id: FieldRef<"Sequence", 'Int'>
    readonly resnum: FieldRef<"Sequence", 'String'>
    readonly Rosetta_resnum: FieldRef<"Sequence", 'Int'>
    readonly PDBresnum: FieldRef<"Sequence", 'String'>
    readonly resid: FieldRef<"Sequence", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Sequence findUnique
   */
  export type SequenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where: SequenceWhereUniqueInput
  }


  /**
   * Sequence findUniqueOrThrow
   */
  export type SequenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where: SequenceWhereUniqueInput
  }


  /**
   * Sequence findFirst
   */
  export type SequenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sequences.
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sequences.
     */
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }


  /**
   * Sequence findFirstOrThrow
   */
  export type SequenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Filter, which Sequence to fetch.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sequences.
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sequences.
     */
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }


  /**
   * Sequence findMany
   */
  export type SequenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Filter, which Sequences to fetch.
     */
    where?: SequenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sequences to fetch.
     */
    orderBy?: SequenceOrderByWithRelationInput | SequenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sequences.
     */
    cursor?: SequenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sequences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sequences.
     */
    skip?: number
    distinct?: SequenceScalarFieldEnum | SequenceScalarFieldEnum[]
  }


  /**
   * Sequence create
   */
  export type SequenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * The data needed to create a Sequence.
     */
    data: XOR<SequenceCreateInput, SequenceUncheckedCreateInput>
  }


  /**
   * Sequence createMany
   */
  export type SequenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sequences.
     */
    data: SequenceCreateManyInput | SequenceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Sequence update
   */
  export type SequenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * The data needed to update a Sequence.
     */
    data: XOR<SequenceUpdateInput, SequenceUncheckedUpdateInput>
    /**
     * Choose, which Sequence to update.
     */
    where: SequenceWhereUniqueInput
  }


  /**
   * Sequence updateMany
   */
  export type SequenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sequences.
     */
    data: XOR<SequenceUpdateManyMutationInput, SequenceUncheckedUpdateManyInput>
    /**
     * Filter which Sequences to update
     */
    where?: SequenceWhereInput
  }


  /**
   * Sequence upsert
   */
  export type SequenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * The filter to search for the Sequence to update in case it exists.
     */
    where: SequenceWhereUniqueInput
    /**
     * In case the Sequence found by the `where` argument doesn't exist, create a new Sequence with this data.
     */
    create: XOR<SequenceCreateInput, SequenceUncheckedCreateInput>
    /**
     * In case the Sequence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SequenceUpdateInput, SequenceUncheckedUpdateInput>
  }


  /**
   * Sequence delete
   */
  export type SequenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
    /**
     * Filter which Sequence to delete.
     */
    where: SequenceWhereUniqueInput
  }


  /**
   * Sequence deleteMany
   */
  export type SequenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sequences to delete
     */
    where?: SequenceWhereInput
  }


  /**
   * Sequence without action
   */
  export type SequenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sequence
     */
    select?: SequenceSelect<ExtArgs> | null
  }



  /**
   * Model TempRawData
   */

  export type AggregateTempRawData = {
    _count: TempRawDataCountAggregateOutputType | null
    _avg: TempRawDataAvgAggregateOutputType | null
    _sum: TempRawDataSumAggregateOutputType | null
    _min: TempRawDataMinAggregateOutputType | null
    _max: TempRawDataMaxAggregateOutputType | null
  }

  export type TempRawDataAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type TempRawDataSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type TempRawDataMinAggregateOutputType = {
    id: number | null
    user_name: string | null
    plate_num: string | null
    variant: string | null
    temp_values: Buffer | null
    cell_data: Buffer | null
    slope_units: $Enums.TempRawData_slope_units | null
    purification_date: string | null
    assay_date: string | null
    csv_filename: string | null
    plot_filename: string | null
    updated: Date | null
    parent_id: number | null
    approved_by_student: boolean | null
  }

  export type TempRawDataMaxAggregateOutputType = {
    id: number | null
    user_name: string | null
    plate_num: string | null
    variant: string | null
    temp_values: Buffer | null
    cell_data: Buffer | null
    slope_units: $Enums.TempRawData_slope_units | null
    purification_date: string | null
    assay_date: string | null
    csv_filename: string | null
    plot_filename: string | null
    updated: Date | null
    parent_id: number | null
    approved_by_student: boolean | null
  }

  export type TempRawDataCountAggregateOutputType = {
    id: number
    user_name: number
    plate_num: number
    variant: number
    temp_values: number
    cell_data: number
    slope_units: number
    purification_date: number
    assay_date: number
    csv_filename: number
    plot_filename: number
    updated: number
    parent_id: number
    approved_by_student: number
    _all: number
  }


  export type TempRawDataAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type TempRawDataSumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type TempRawDataMinAggregateInputType = {
    id?: true
    user_name?: true
    plate_num?: true
    variant?: true
    temp_values?: true
    cell_data?: true
    slope_units?: true
    purification_date?: true
    assay_date?: true
    csv_filename?: true
    plot_filename?: true
    updated?: true
    parent_id?: true
    approved_by_student?: true
  }

  export type TempRawDataMaxAggregateInputType = {
    id?: true
    user_name?: true
    plate_num?: true
    variant?: true
    temp_values?: true
    cell_data?: true
    slope_units?: true
    purification_date?: true
    assay_date?: true
    csv_filename?: true
    plot_filename?: true
    updated?: true
    parent_id?: true
    approved_by_student?: true
  }

  export type TempRawDataCountAggregateInputType = {
    id?: true
    user_name?: true
    plate_num?: true
    variant?: true
    temp_values?: true
    cell_data?: true
    slope_units?: true
    purification_date?: true
    assay_date?: true
    csv_filename?: true
    plot_filename?: true
    updated?: true
    parent_id?: true
    approved_by_student?: true
    _all?: true
  }

  export type TempRawDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempRawData to aggregate.
     */
    where?: TempRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempRawData to fetch.
     */
    orderBy?: TempRawDataOrderByWithRelationInput | TempRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TempRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TempRawData
    **/
    _count?: true | TempRawDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TempRawDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TempRawDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TempRawDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TempRawDataMaxAggregateInputType
  }

  export type GetTempRawDataAggregateType<T extends TempRawDataAggregateArgs> = {
        [P in keyof T & keyof AggregateTempRawData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTempRawData[P]>
      : GetScalarType<T[P], AggregateTempRawData[P]>
  }




  export type TempRawDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TempRawDataWhereInput
    orderBy?: TempRawDataOrderByWithAggregationInput | TempRawDataOrderByWithAggregationInput[]
    by: TempRawDataScalarFieldEnum[] | TempRawDataScalarFieldEnum
    having?: TempRawDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TempRawDataCountAggregateInputType | true
    _avg?: TempRawDataAvgAggregateInputType
    _sum?: TempRawDataSumAggregateInputType
    _min?: TempRawDataMinAggregateInputType
    _max?: TempRawDataMaxAggregateInputType
  }

  export type TempRawDataGroupByOutputType = {
    id: number
    user_name: string | null
    plate_num: string | null
    variant: string | null
    temp_values: Buffer | null
    cell_data: Buffer | null
    slope_units: $Enums.TempRawData_slope_units
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated: Date
    parent_id: number
    approved_by_student: boolean
    _count: TempRawDataCountAggregateOutputType | null
    _avg: TempRawDataAvgAggregateOutputType | null
    _sum: TempRawDataSumAggregateOutputType | null
    _min: TempRawDataMinAggregateOutputType | null
    _max: TempRawDataMaxAggregateOutputType | null
  }

  type GetTempRawDataGroupByPayload<T extends TempRawDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TempRawDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TempRawDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TempRawDataGroupByOutputType[P]>
            : GetScalarType<T[P], TempRawDataGroupByOutputType[P]>
        }
      >
    >


  export type TempRawDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_name?: boolean
    plate_num?: boolean
    variant?: boolean
    temp_values?: boolean
    cell_data?: boolean
    slope_units?: boolean
    purification_date?: boolean
    assay_date?: boolean
    csv_filename?: boolean
    plot_filename?: boolean
    updated?: boolean
    parent_id?: boolean
    approved_by_student?: boolean
  }, ExtArgs["result"]["tempRawData"]>

  export type TempRawDataSelectScalar = {
    id?: boolean
    user_name?: boolean
    plate_num?: boolean
    variant?: boolean
    temp_values?: boolean
    cell_data?: boolean
    slope_units?: boolean
    purification_date?: boolean
    assay_date?: boolean
    csv_filename?: boolean
    plot_filename?: boolean
    updated?: boolean
    parent_id?: boolean
    approved_by_student?: boolean
  }


  export type $TempRawDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TempRawData"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_name: string | null
      plate_num: string | null
      variant: string | null
      temp_values: Buffer | null
      cell_data: Buffer | null
      slope_units: $Enums.TempRawData_slope_units
      purification_date: string
      assay_date: string
      csv_filename: string
      plot_filename: string
      updated: Date
      parent_id: number
      approved_by_student: boolean
    }, ExtArgs["result"]["tempRawData"]>
    composites: {}
  }


  type TempRawDataGetPayload<S extends boolean | null | undefined | TempRawDataDefaultArgs> = $Result.GetResult<Prisma.$TempRawDataPayload, S>

  type TempRawDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TempRawDataFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TempRawDataCountAggregateInputType | true
    }

  export interface TempRawDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TempRawData'], meta: { name: 'TempRawData' } }
    /**
     * Find zero or one TempRawData that matches the filter.
     * @param {TempRawDataFindUniqueArgs} args - Arguments to find a TempRawData
     * @example
     * // Get one TempRawData
     * const tempRawData = await prisma.tempRawData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TempRawDataFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TempRawDataFindUniqueArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TempRawData that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TempRawDataFindUniqueOrThrowArgs} args - Arguments to find a TempRawData
     * @example
     * // Get one TempRawData
     * const tempRawData = await prisma.tempRawData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TempRawDataFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TempRawDataFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TempRawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataFindFirstArgs} args - Arguments to find a TempRawData
     * @example
     * // Get one TempRawData
     * const tempRawData = await prisma.tempRawData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TempRawDataFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TempRawDataFindFirstArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TempRawData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataFindFirstOrThrowArgs} args - Arguments to find a TempRawData
     * @example
     * // Get one TempRawData
     * const tempRawData = await prisma.tempRawData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TempRawDataFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TempRawDataFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TempRawData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TempRawData
     * const tempRawData = await prisma.tempRawData.findMany()
     * 
     * // Get first 10 TempRawData
     * const tempRawData = await prisma.tempRawData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tempRawDataWithIdOnly = await prisma.tempRawData.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TempRawDataFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TempRawDataFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TempRawData.
     * @param {TempRawDataCreateArgs} args - Arguments to create a TempRawData.
     * @example
     * // Create one TempRawData
     * const TempRawData = await prisma.tempRawData.create({
     *   data: {
     *     // ... data to create a TempRawData
     *   }
     * })
     * 
    **/
    create<T extends TempRawDataCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TempRawDataCreateArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TempRawData.
     *     @param {TempRawDataCreateManyArgs} args - Arguments to create many TempRawData.
     *     @example
     *     // Create many TempRawData
     *     const tempRawData = await prisma.tempRawData.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TempRawDataCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TempRawDataCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TempRawData.
     * @param {TempRawDataDeleteArgs} args - Arguments to delete one TempRawData.
     * @example
     * // Delete one TempRawData
     * const TempRawData = await prisma.tempRawData.delete({
     *   where: {
     *     // ... filter to delete one TempRawData
     *   }
     * })
     * 
    **/
    delete<T extends TempRawDataDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TempRawDataDeleteArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TempRawData.
     * @param {TempRawDataUpdateArgs} args - Arguments to update one TempRawData.
     * @example
     * // Update one TempRawData
     * const tempRawData = await prisma.tempRawData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TempRawDataUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TempRawDataUpdateArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TempRawData.
     * @param {TempRawDataDeleteManyArgs} args - Arguments to filter TempRawData to delete.
     * @example
     * // Delete a few TempRawData
     * const { count } = await prisma.tempRawData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TempRawDataDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TempRawDataDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TempRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TempRawData
     * const tempRawData = await prisma.tempRawData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TempRawDataUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TempRawDataUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TempRawData.
     * @param {TempRawDataUpsertArgs} args - Arguments to update or create a TempRawData.
     * @example
     * // Update or create a TempRawData
     * const tempRawData = await prisma.tempRawData.upsert({
     *   create: {
     *     // ... data to create a TempRawData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TempRawData we want to update
     *   }
     * })
    **/
    upsert<T extends TempRawDataUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TempRawDataUpsertArgs<ExtArgs>>
    ): Prisma__TempRawDataClient<$Result.GetResult<Prisma.$TempRawDataPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TempRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataCountArgs} args - Arguments to filter TempRawData to count.
     * @example
     * // Count the number of TempRawData
     * const count = await prisma.tempRawData.count({
     *   where: {
     *     // ... the filter for the TempRawData we want to count
     *   }
     * })
    **/
    count<T extends TempRawDataCountArgs>(
      args?: Subset<T, TempRawDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TempRawDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TempRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TempRawDataAggregateArgs>(args: Subset<T, TempRawDataAggregateArgs>): Prisma.PrismaPromise<GetTempRawDataAggregateType<T>>

    /**
     * Group by TempRawData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TempRawDataGroupByArgs} args - Group by arguments.
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
      T extends TempRawDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TempRawDataGroupByArgs['orderBy'] }
        : { orderBy?: TempRawDataGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TempRawDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTempRawDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TempRawData model
   */
  readonly fields: TempRawDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TempRawData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TempRawDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TempRawData model
   */ 
  interface TempRawDataFieldRefs {
    readonly id: FieldRef<"TempRawData", 'Int'>
    readonly user_name: FieldRef<"TempRawData", 'String'>
    readonly plate_num: FieldRef<"TempRawData", 'String'>
    readonly variant: FieldRef<"TempRawData", 'String'>
    readonly temp_values: FieldRef<"TempRawData", 'Bytes'>
    readonly cell_data: FieldRef<"TempRawData", 'Bytes'>
    readonly slope_units: FieldRef<"TempRawData", 'TempRawData_slope_units'>
    readonly purification_date: FieldRef<"TempRawData", 'String'>
    readonly assay_date: FieldRef<"TempRawData", 'String'>
    readonly csv_filename: FieldRef<"TempRawData", 'String'>
    readonly plot_filename: FieldRef<"TempRawData", 'String'>
    readonly updated: FieldRef<"TempRawData", 'DateTime'>
    readonly parent_id: FieldRef<"TempRawData", 'Int'>
    readonly approved_by_student: FieldRef<"TempRawData", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * TempRawData findUnique
   */
  export type TempRawDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * Filter, which TempRawData to fetch.
     */
    where: TempRawDataWhereUniqueInput
  }


  /**
   * TempRawData findUniqueOrThrow
   */
  export type TempRawDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * Filter, which TempRawData to fetch.
     */
    where: TempRawDataWhereUniqueInput
  }


  /**
   * TempRawData findFirst
   */
  export type TempRawDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * Filter, which TempRawData to fetch.
     */
    where?: TempRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempRawData to fetch.
     */
    orderBy?: TempRawDataOrderByWithRelationInput | TempRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempRawData.
     */
    cursor?: TempRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempRawData.
     */
    distinct?: TempRawDataScalarFieldEnum | TempRawDataScalarFieldEnum[]
  }


  /**
   * TempRawData findFirstOrThrow
   */
  export type TempRawDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * Filter, which TempRawData to fetch.
     */
    where?: TempRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempRawData to fetch.
     */
    orderBy?: TempRawDataOrderByWithRelationInput | TempRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TempRawData.
     */
    cursor?: TempRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempRawData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TempRawData.
     */
    distinct?: TempRawDataScalarFieldEnum | TempRawDataScalarFieldEnum[]
  }


  /**
   * TempRawData findMany
   */
  export type TempRawDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * Filter, which TempRawData to fetch.
     */
    where?: TempRawDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TempRawData to fetch.
     */
    orderBy?: TempRawDataOrderByWithRelationInput | TempRawDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TempRawData.
     */
    cursor?: TempRawDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TempRawData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TempRawData.
     */
    skip?: number
    distinct?: TempRawDataScalarFieldEnum | TempRawDataScalarFieldEnum[]
  }


  /**
   * TempRawData create
   */
  export type TempRawDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * The data needed to create a TempRawData.
     */
    data: XOR<TempRawDataCreateInput, TempRawDataUncheckedCreateInput>
  }


  /**
   * TempRawData createMany
   */
  export type TempRawDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TempRawData.
     */
    data: TempRawDataCreateManyInput | TempRawDataCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TempRawData update
   */
  export type TempRawDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * The data needed to update a TempRawData.
     */
    data: XOR<TempRawDataUpdateInput, TempRawDataUncheckedUpdateInput>
    /**
     * Choose, which TempRawData to update.
     */
    where: TempRawDataWhereUniqueInput
  }


  /**
   * TempRawData updateMany
   */
  export type TempRawDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TempRawData.
     */
    data: XOR<TempRawDataUpdateManyMutationInput, TempRawDataUncheckedUpdateManyInput>
    /**
     * Filter which TempRawData to update
     */
    where?: TempRawDataWhereInput
  }


  /**
   * TempRawData upsert
   */
  export type TempRawDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * The filter to search for the TempRawData to update in case it exists.
     */
    where: TempRawDataWhereUniqueInput
    /**
     * In case the TempRawData found by the `where` argument doesn't exist, create a new TempRawData with this data.
     */
    create: XOR<TempRawDataCreateInput, TempRawDataUncheckedCreateInput>
    /**
     * In case the TempRawData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TempRawDataUpdateInput, TempRawDataUncheckedUpdateInput>
  }


  /**
   * TempRawData delete
   */
  export type TempRawDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
    /**
     * Filter which TempRawData to delete.
     */
    where: TempRawDataWhereUniqueInput
  }


  /**
   * TempRawData deleteMany
   */
  export type TempRawDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TempRawData to delete
     */
    where?: TempRawDataWhereInput
  }


  /**
   * TempRawData without action
   */
  export type TempRawDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TempRawData
     */
    select?: TempRawDataSelect<ExtArgs> | null
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


  export const CharacterizationDataScalarFieldEnum: {
    id: 'id',
    resid: 'resid',
    resnum: 'resnum',
    resmut: 'resmut',
    oligo_ordered: 'oligo_ordered',
    plasmid_verified: 'plasmid_verified',
    expressed: 'expressed',
    yield_avg: 'yield_avg',
    KM_avg: 'KM_avg',
    KM_SD: 'KM_SD',
    kcat_avg: 'kcat_avg',
    kcat_SD: 'kcat_SD',
    kcat_over_KM: 'kcat_over_KM',
    kcat_over_KM_SD: 'kcat_over_KM_SD',
    T50: 'T50',
    T50_SD: 'T50_SD',
    T50_k: 'T50_k',
    T50_k_SD: 'T50_k_SD',
    Tm: 'Tm',
    Tm_SD: 'Tm_SD',
    Rosetta_score: 'Rosetta_score',
    raw_data_id: 'raw_data_id',
    temp_raw_data_id: 'temp_raw_data_id',
    WT_raw_data_id: 'WT_raw_data_id',
    WT_temp_raw_data_id: 'WT_temp_raw_data_id',
    ab1_filename: 'ab1_filename',
    gel_filename: 'gel_filename',
    creator: 'creator',
    teammate: 'teammate',
    teammate2: 'teammate2',
    teammate3: 'teammate3',
    pi: 'pi',
    institution: 'institution',
    submitted_for_curation: 'submitted_for_curation',
    approved_by_pi: 'approved_by_pi',
    curated: 'curated',
    reference1: 'reference1',
    reference2: 'reference2',
    reference3: 'reference3',
    comments: 'comments'
  };

  export type CharacterizationDataScalarFieldEnum = (typeof CharacterizationDataScalarFieldEnum)[keyof typeof CharacterizationDataScalarFieldEnum]


  export const KineticRawDataScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    plate_num: 'plate_num',
    variant: 'variant',
    cell_data: 'cell_data',
    slope_units: 'slope_units',
    yield: 'yield',
    yield_units: 'yield_units',
    dilution: 'dilution',
    substrate_dilution: 'substrate_dilution',
    purification_date: 'purification_date',
    assay_date: 'assay_date',
    csv_filename: 'csv_filename',
    plot_filename: 'plot_filename',
    updated: 'updated',
    parent_id: 'parent_id',
    approved_by_student: 'approved_by_student'
  };

  export type KineticRawDataScalarFieldEnum = (typeof KineticRawDataScalarFieldEnum)[keyof typeof KineticRawDataScalarFieldEnum]


  export const OligosScalarFieldEnum: {
    id: 'id',
    variant: 'variant',
    oligo: 'oligo'
  };

  export type OligosScalarFieldEnum = (typeof OligosScalarFieldEnum)[keyof typeof OligosScalarFieldEnum]


  export const SequenceScalarFieldEnum: {
    id: 'id',
    resnum: 'resnum',
    Rosetta_resnum: 'Rosetta_resnum',
    PDBresnum: 'PDBresnum',
    resid: 'resid'
  };

  export type SequenceScalarFieldEnum = (typeof SequenceScalarFieldEnum)[keyof typeof SequenceScalarFieldEnum]


  export const TempRawDataScalarFieldEnum: {
    id: 'id',
    user_name: 'user_name',
    plate_num: 'plate_num',
    variant: 'variant',
    temp_values: 'temp_values',
    cell_data: 'cell_data',
    slope_units: 'slope_units',
    purification_date: 'purification_date',
    assay_date: 'assay_date',
    csv_filename: 'csv_filename',
    plot_filename: 'plot_filename',
    updated: 'updated',
    parent_id: 'parent_id',
    approved_by_student: 'approved_by_student'
  };

  export type TempRawDataScalarFieldEnum = (typeof TempRawDataScalarFieldEnum)[keyof typeof TempRawDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'KineticRawData_slope_units'
   */
  export type EnumKineticRawData_slope_unitsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KineticRawData_slope_units'>
    


  /**
   * Reference to a field of type 'KineticRawData_yield_units'
   */
  export type EnumKineticRawData_yield_unitsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KineticRawData_yield_units'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'TempRawData_slope_units'
   */
  export type EnumTempRawData_slope_unitsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TempRawData_slope_units'>
    
  /**
   * Deep Input Types
   */


  export type CharacterizationDataWhereInput = {
    AND?: CharacterizationDataWhereInput | CharacterizationDataWhereInput[]
    OR?: CharacterizationDataWhereInput[]
    NOT?: CharacterizationDataWhereInput | CharacterizationDataWhereInput[]
    id?: IntFilter<"CharacterizationData"> | number
    resid?: StringFilter<"CharacterizationData"> | string
    resnum?: IntFilter<"CharacterizationData"> | number
    resmut?: StringFilter<"CharacterizationData"> | string
    oligo_ordered?: BoolFilter<"CharacterizationData"> | boolean
    plasmid_verified?: BoolFilter<"CharacterizationData"> | boolean
    expressed?: BoolNullableFilter<"CharacterizationData"> | boolean | null
    yield_avg?: FloatNullableFilter<"CharacterizationData"> | number | null
    KM_avg?: FloatNullableFilter<"CharacterizationData"> | number | null
    KM_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_avg?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_over_KM?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_over_KM_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50_k?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50_k_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    Tm?: FloatNullableFilter<"CharacterizationData"> | number | null
    Tm_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    Rosetta_score?: FloatNullableFilter<"CharacterizationData"> | number | null
    raw_data_id?: IntFilter<"CharacterizationData"> | number
    temp_raw_data_id?: IntFilter<"CharacterizationData"> | number
    WT_raw_data_id?: IntFilter<"CharacterizationData"> | number
    WT_temp_raw_data_id?: IntFilter<"CharacterizationData"> | number
    ab1_filename?: StringNullableFilter<"CharacterizationData"> | string | null
    gel_filename?: StringNullableFilter<"CharacterizationData"> | string | null
    creator?: StringFilter<"CharacterizationData"> | string
    teammate?: StringNullableFilter<"CharacterizationData"> | string | null
    teammate2?: StringNullableFilter<"CharacterizationData"> | string | null
    teammate3?: StringNullableFilter<"CharacterizationData"> | string | null
    pi?: StringFilter<"CharacterizationData"> | string
    institution?: StringFilter<"CharacterizationData"> | string
    submitted_for_curation?: BoolFilter<"CharacterizationData"> | boolean
    approved_by_pi?: BoolFilter<"CharacterizationData"> | boolean
    curated?: BoolFilter<"CharacterizationData"> | boolean
    reference1?: IntFilter<"CharacterizationData"> | number
    reference2?: IntFilter<"CharacterizationData"> | number
    reference3?: IntFilter<"CharacterizationData"> | number
    comments?: StringNullableFilter<"CharacterizationData"> | string | null
  }

  export type CharacterizationDataOrderByWithRelationInput = {
    id?: SortOrder
    resid?: SortOrder
    resnum?: SortOrder
    resmut?: SortOrder
    oligo_ordered?: SortOrder
    plasmid_verified?: SortOrder
    expressed?: SortOrderInput | SortOrder
    yield_avg?: SortOrderInput | SortOrder
    KM_avg?: SortOrderInput | SortOrder
    KM_SD?: SortOrderInput | SortOrder
    kcat_avg?: SortOrderInput | SortOrder
    kcat_SD?: SortOrderInput | SortOrder
    kcat_over_KM?: SortOrderInput | SortOrder
    kcat_over_KM_SD?: SortOrderInput | SortOrder
    T50?: SortOrderInput | SortOrder
    T50_SD?: SortOrderInput | SortOrder
    T50_k?: SortOrderInput | SortOrder
    T50_k_SD?: SortOrderInput | SortOrder
    Tm?: SortOrderInput | SortOrder
    Tm_SD?: SortOrderInput | SortOrder
    Rosetta_score?: SortOrderInput | SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    ab1_filename?: SortOrderInput | SortOrder
    gel_filename?: SortOrderInput | SortOrder
    creator?: SortOrder
    teammate?: SortOrderInput | SortOrder
    teammate2?: SortOrderInput | SortOrder
    teammate3?: SortOrderInput | SortOrder
    pi?: SortOrder
    institution?: SortOrder
    submitted_for_curation?: SortOrder
    approved_by_pi?: SortOrder
    curated?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
    comments?: SortOrderInput | SortOrder
  }

  export type CharacterizationDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterizationDataWhereInput | CharacterizationDataWhereInput[]
    OR?: CharacterizationDataWhereInput[]
    NOT?: CharacterizationDataWhereInput | CharacterizationDataWhereInput[]
    resid?: StringFilter<"CharacterizationData"> | string
    resnum?: IntFilter<"CharacterizationData"> | number
    resmut?: StringFilter<"CharacterizationData"> | string
    oligo_ordered?: BoolFilter<"CharacterizationData"> | boolean
    plasmid_verified?: BoolFilter<"CharacterizationData"> | boolean
    expressed?: BoolNullableFilter<"CharacterizationData"> | boolean | null
    yield_avg?: FloatNullableFilter<"CharacterizationData"> | number | null
    KM_avg?: FloatNullableFilter<"CharacterizationData"> | number | null
    KM_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_avg?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_over_KM?: FloatNullableFilter<"CharacterizationData"> | number | null
    kcat_over_KM_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50_k?: FloatNullableFilter<"CharacterizationData"> | number | null
    T50_k_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    Tm?: FloatNullableFilter<"CharacterizationData"> | number | null
    Tm_SD?: FloatNullableFilter<"CharacterizationData"> | number | null
    Rosetta_score?: FloatNullableFilter<"CharacterizationData"> | number | null
    raw_data_id?: IntFilter<"CharacterizationData"> | number
    temp_raw_data_id?: IntFilter<"CharacterizationData"> | number
    WT_raw_data_id?: IntFilter<"CharacterizationData"> | number
    WT_temp_raw_data_id?: IntFilter<"CharacterizationData"> | number
    ab1_filename?: StringNullableFilter<"CharacterizationData"> | string | null
    gel_filename?: StringNullableFilter<"CharacterizationData"> | string | null
    creator?: StringFilter<"CharacterizationData"> | string
    teammate?: StringNullableFilter<"CharacterizationData"> | string | null
    teammate2?: StringNullableFilter<"CharacterizationData"> | string | null
    teammate3?: StringNullableFilter<"CharacterizationData"> | string | null
    pi?: StringFilter<"CharacterizationData"> | string
    institution?: StringFilter<"CharacterizationData"> | string
    submitted_for_curation?: BoolFilter<"CharacterizationData"> | boolean
    approved_by_pi?: BoolFilter<"CharacterizationData"> | boolean
    curated?: BoolFilter<"CharacterizationData"> | boolean
    reference1?: IntFilter<"CharacterizationData"> | number
    reference2?: IntFilter<"CharacterizationData"> | number
    reference3?: IntFilter<"CharacterizationData"> | number
    comments?: StringNullableFilter<"CharacterizationData"> | string | null
  }, "id">

  export type CharacterizationDataOrderByWithAggregationInput = {
    id?: SortOrder
    resid?: SortOrder
    resnum?: SortOrder
    resmut?: SortOrder
    oligo_ordered?: SortOrder
    plasmid_verified?: SortOrder
    expressed?: SortOrderInput | SortOrder
    yield_avg?: SortOrderInput | SortOrder
    KM_avg?: SortOrderInput | SortOrder
    KM_SD?: SortOrderInput | SortOrder
    kcat_avg?: SortOrderInput | SortOrder
    kcat_SD?: SortOrderInput | SortOrder
    kcat_over_KM?: SortOrderInput | SortOrder
    kcat_over_KM_SD?: SortOrderInput | SortOrder
    T50?: SortOrderInput | SortOrder
    T50_SD?: SortOrderInput | SortOrder
    T50_k?: SortOrderInput | SortOrder
    T50_k_SD?: SortOrderInput | SortOrder
    Tm?: SortOrderInput | SortOrder
    Tm_SD?: SortOrderInput | SortOrder
    Rosetta_score?: SortOrderInput | SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    ab1_filename?: SortOrderInput | SortOrder
    gel_filename?: SortOrderInput | SortOrder
    creator?: SortOrder
    teammate?: SortOrderInput | SortOrder
    teammate2?: SortOrderInput | SortOrder
    teammate3?: SortOrderInput | SortOrder
    pi?: SortOrder
    institution?: SortOrder
    submitted_for_curation?: SortOrder
    approved_by_pi?: SortOrder
    curated?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
    comments?: SortOrderInput | SortOrder
    _count?: CharacterizationDataCountOrderByAggregateInput
    _avg?: CharacterizationDataAvgOrderByAggregateInput
    _max?: CharacterizationDataMaxOrderByAggregateInput
    _min?: CharacterizationDataMinOrderByAggregateInput
    _sum?: CharacterizationDataSumOrderByAggregateInput
  }

  export type CharacterizationDataScalarWhereWithAggregatesInput = {
    AND?: CharacterizationDataScalarWhereWithAggregatesInput | CharacterizationDataScalarWhereWithAggregatesInput[]
    OR?: CharacterizationDataScalarWhereWithAggregatesInput[]
    NOT?: CharacterizationDataScalarWhereWithAggregatesInput | CharacterizationDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterizationData"> | number
    resid?: StringWithAggregatesFilter<"CharacterizationData"> | string
    resnum?: IntWithAggregatesFilter<"CharacterizationData"> | number
    resmut?: StringWithAggregatesFilter<"CharacterizationData"> | string
    oligo_ordered?: BoolWithAggregatesFilter<"CharacterizationData"> | boolean
    plasmid_verified?: BoolWithAggregatesFilter<"CharacterizationData"> | boolean
    expressed?: BoolNullableWithAggregatesFilter<"CharacterizationData"> | boolean | null
    yield_avg?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    KM_avg?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    KM_SD?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    kcat_avg?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    kcat_SD?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    kcat_over_KM?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    kcat_over_KM_SD?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    T50?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    T50_SD?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    T50_k?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    T50_k_SD?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    Tm?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    Tm_SD?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    Rosetta_score?: FloatNullableWithAggregatesFilter<"CharacterizationData"> | number | null
    raw_data_id?: IntWithAggregatesFilter<"CharacterizationData"> | number
    temp_raw_data_id?: IntWithAggregatesFilter<"CharacterizationData"> | number
    WT_raw_data_id?: IntWithAggregatesFilter<"CharacterizationData"> | number
    WT_temp_raw_data_id?: IntWithAggregatesFilter<"CharacterizationData"> | number
    ab1_filename?: StringNullableWithAggregatesFilter<"CharacterizationData"> | string | null
    gel_filename?: StringNullableWithAggregatesFilter<"CharacterizationData"> | string | null
    creator?: StringWithAggregatesFilter<"CharacterizationData"> | string
    teammate?: StringNullableWithAggregatesFilter<"CharacterizationData"> | string | null
    teammate2?: StringNullableWithAggregatesFilter<"CharacterizationData"> | string | null
    teammate3?: StringNullableWithAggregatesFilter<"CharacterizationData"> | string | null
    pi?: StringWithAggregatesFilter<"CharacterizationData"> | string
    institution?: StringWithAggregatesFilter<"CharacterizationData"> | string
    submitted_for_curation?: BoolWithAggregatesFilter<"CharacterizationData"> | boolean
    approved_by_pi?: BoolWithAggregatesFilter<"CharacterizationData"> | boolean
    curated?: BoolWithAggregatesFilter<"CharacterizationData"> | boolean
    reference1?: IntWithAggregatesFilter<"CharacterizationData"> | number
    reference2?: IntWithAggregatesFilter<"CharacterizationData"> | number
    reference3?: IntWithAggregatesFilter<"CharacterizationData"> | number
    comments?: StringNullableWithAggregatesFilter<"CharacterizationData"> | string | null
  }

  export type KineticRawDataWhereInput = {
    AND?: KineticRawDataWhereInput | KineticRawDataWhereInput[]
    OR?: KineticRawDataWhereInput[]
    NOT?: KineticRawDataWhereInput | KineticRawDataWhereInput[]
    id?: IntFilter<"KineticRawData"> | number
    user_name?: StringNullableFilter<"KineticRawData"> | string | null
    plate_num?: StringNullableFilter<"KineticRawData"> | string | null
    variant?: StringNullableFilter<"KineticRawData"> | string | null
    cell_data?: BytesNullableFilter<"KineticRawData"> | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsFilter<"KineticRawData"> | $Enums.KineticRawData_slope_units
    yield?: FloatNullableFilter<"KineticRawData"> | number | null
    yield_units?: EnumKineticRawData_yield_unitsFilter<"KineticRawData"> | $Enums.KineticRawData_yield_units
    dilution?: FloatNullableFilter<"KineticRawData"> | number | null
    substrate_dilution?: IntFilter<"KineticRawData"> | number
    purification_date?: StringFilter<"KineticRawData"> | string
    assay_date?: StringFilter<"KineticRawData"> | string
    csv_filename?: StringFilter<"KineticRawData"> | string
    plot_filename?: StringFilter<"KineticRawData"> | string
    updated?: DateTimeFilter<"KineticRawData"> | Date | string
    parent_id?: IntFilter<"KineticRawData"> | number
    approved_by_student?: BoolFilter<"KineticRawData"> | boolean
  }

  export type KineticRawDataOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    plate_num?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    cell_data?: SortOrderInput | SortOrder
    slope_units?: SortOrder
    yield?: SortOrderInput | SortOrder
    yield_units?: SortOrder
    dilution?: SortOrderInput | SortOrder
    substrate_dilution?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type KineticRawDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KineticRawDataWhereInput | KineticRawDataWhereInput[]
    OR?: KineticRawDataWhereInput[]
    NOT?: KineticRawDataWhereInput | KineticRawDataWhereInput[]
    user_name?: StringNullableFilter<"KineticRawData"> | string | null
    plate_num?: StringNullableFilter<"KineticRawData"> | string | null
    variant?: StringNullableFilter<"KineticRawData"> | string | null
    cell_data?: BytesNullableFilter<"KineticRawData"> | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsFilter<"KineticRawData"> | $Enums.KineticRawData_slope_units
    yield?: FloatNullableFilter<"KineticRawData"> | number | null
    yield_units?: EnumKineticRawData_yield_unitsFilter<"KineticRawData"> | $Enums.KineticRawData_yield_units
    dilution?: FloatNullableFilter<"KineticRawData"> | number | null
    substrate_dilution?: IntFilter<"KineticRawData"> | number
    purification_date?: StringFilter<"KineticRawData"> | string
    assay_date?: StringFilter<"KineticRawData"> | string
    csv_filename?: StringFilter<"KineticRawData"> | string
    plot_filename?: StringFilter<"KineticRawData"> | string
    updated?: DateTimeFilter<"KineticRawData"> | Date | string
    parent_id?: IntFilter<"KineticRawData"> | number
    approved_by_student?: BoolFilter<"KineticRawData"> | boolean
  }, "id">

  export type KineticRawDataOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    plate_num?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    cell_data?: SortOrderInput | SortOrder
    slope_units?: SortOrder
    yield?: SortOrderInput | SortOrder
    yield_units?: SortOrder
    dilution?: SortOrderInput | SortOrder
    substrate_dilution?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
    _count?: KineticRawDataCountOrderByAggregateInput
    _avg?: KineticRawDataAvgOrderByAggregateInput
    _max?: KineticRawDataMaxOrderByAggregateInput
    _min?: KineticRawDataMinOrderByAggregateInput
    _sum?: KineticRawDataSumOrderByAggregateInput
  }

  export type KineticRawDataScalarWhereWithAggregatesInput = {
    AND?: KineticRawDataScalarWhereWithAggregatesInput | KineticRawDataScalarWhereWithAggregatesInput[]
    OR?: KineticRawDataScalarWhereWithAggregatesInput[]
    NOT?: KineticRawDataScalarWhereWithAggregatesInput | KineticRawDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KineticRawData"> | number
    user_name?: StringNullableWithAggregatesFilter<"KineticRawData"> | string | null
    plate_num?: StringNullableWithAggregatesFilter<"KineticRawData"> | string | null
    variant?: StringNullableWithAggregatesFilter<"KineticRawData"> | string | null
    cell_data?: BytesNullableWithAggregatesFilter<"KineticRawData"> | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsWithAggregatesFilter<"KineticRawData"> | $Enums.KineticRawData_slope_units
    yield?: FloatNullableWithAggregatesFilter<"KineticRawData"> | number | null
    yield_units?: EnumKineticRawData_yield_unitsWithAggregatesFilter<"KineticRawData"> | $Enums.KineticRawData_yield_units
    dilution?: FloatNullableWithAggregatesFilter<"KineticRawData"> | number | null
    substrate_dilution?: IntWithAggregatesFilter<"KineticRawData"> | number
    purification_date?: StringWithAggregatesFilter<"KineticRawData"> | string
    assay_date?: StringWithAggregatesFilter<"KineticRawData"> | string
    csv_filename?: StringWithAggregatesFilter<"KineticRawData"> | string
    plot_filename?: StringWithAggregatesFilter<"KineticRawData"> | string
    updated?: DateTimeWithAggregatesFilter<"KineticRawData"> | Date | string
    parent_id?: IntWithAggregatesFilter<"KineticRawData"> | number
    approved_by_student?: BoolWithAggregatesFilter<"KineticRawData"> | boolean
  }

  export type OligosWhereInput = {
    AND?: OligosWhereInput | OligosWhereInput[]
    OR?: OligosWhereInput[]
    NOT?: OligosWhereInput | OligosWhereInput[]
    id?: IntFilter<"Oligos"> | number
    variant?: StringFilter<"Oligos"> | string
    oligo?: StringFilter<"Oligos"> | string
  }

  export type OligosOrderByWithRelationInput = {
    id?: SortOrder
    variant?: SortOrder
    oligo?: SortOrder
  }

  export type OligosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OligosWhereInput | OligosWhereInput[]
    OR?: OligosWhereInput[]
    NOT?: OligosWhereInput | OligosWhereInput[]
    variant?: StringFilter<"Oligos"> | string
    oligo?: StringFilter<"Oligos"> | string
  }, "id">

  export type OligosOrderByWithAggregationInput = {
    id?: SortOrder
    variant?: SortOrder
    oligo?: SortOrder
    _count?: OligosCountOrderByAggregateInput
    _avg?: OligosAvgOrderByAggregateInput
    _max?: OligosMaxOrderByAggregateInput
    _min?: OligosMinOrderByAggregateInput
    _sum?: OligosSumOrderByAggregateInput
  }

  export type OligosScalarWhereWithAggregatesInput = {
    AND?: OligosScalarWhereWithAggregatesInput | OligosScalarWhereWithAggregatesInput[]
    OR?: OligosScalarWhereWithAggregatesInput[]
    NOT?: OligosScalarWhereWithAggregatesInput | OligosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Oligos"> | number
    variant?: StringWithAggregatesFilter<"Oligos"> | string
    oligo?: StringWithAggregatesFilter<"Oligos"> | string
  }

  export type SequenceWhereInput = {
    AND?: SequenceWhereInput | SequenceWhereInput[]
    OR?: SequenceWhereInput[]
    NOT?: SequenceWhereInput | SequenceWhereInput[]
    id?: IntFilter<"Sequence"> | number
    resnum?: StringFilter<"Sequence"> | string
    Rosetta_resnum?: IntNullableFilter<"Sequence"> | number | null
    PDBresnum?: StringNullableFilter<"Sequence"> | string | null
    resid?: StringFilter<"Sequence"> | string
  }

  export type SequenceOrderByWithRelationInput = {
    id?: SortOrder
    resnum?: SortOrder
    Rosetta_resnum?: SortOrderInput | SortOrder
    PDBresnum?: SortOrderInput | SortOrder
    resid?: SortOrder
  }

  export type SequenceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SequenceWhereInput | SequenceWhereInput[]
    OR?: SequenceWhereInput[]
    NOT?: SequenceWhereInput | SequenceWhereInput[]
    resnum?: StringFilter<"Sequence"> | string
    Rosetta_resnum?: IntNullableFilter<"Sequence"> | number | null
    PDBresnum?: StringNullableFilter<"Sequence"> | string | null
    resid?: StringFilter<"Sequence"> | string
  }, "id">

  export type SequenceOrderByWithAggregationInput = {
    id?: SortOrder
    resnum?: SortOrder
    Rosetta_resnum?: SortOrderInput | SortOrder
    PDBresnum?: SortOrderInput | SortOrder
    resid?: SortOrder
    _count?: SequenceCountOrderByAggregateInput
    _avg?: SequenceAvgOrderByAggregateInput
    _max?: SequenceMaxOrderByAggregateInput
    _min?: SequenceMinOrderByAggregateInput
    _sum?: SequenceSumOrderByAggregateInput
  }

  export type SequenceScalarWhereWithAggregatesInput = {
    AND?: SequenceScalarWhereWithAggregatesInput | SequenceScalarWhereWithAggregatesInput[]
    OR?: SequenceScalarWhereWithAggregatesInput[]
    NOT?: SequenceScalarWhereWithAggregatesInput | SequenceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sequence"> | number
    resnum?: StringWithAggregatesFilter<"Sequence"> | string
    Rosetta_resnum?: IntNullableWithAggregatesFilter<"Sequence"> | number | null
    PDBresnum?: StringNullableWithAggregatesFilter<"Sequence"> | string | null
    resid?: StringWithAggregatesFilter<"Sequence"> | string
  }

  export type TempRawDataWhereInput = {
    AND?: TempRawDataWhereInput | TempRawDataWhereInput[]
    OR?: TempRawDataWhereInput[]
    NOT?: TempRawDataWhereInput | TempRawDataWhereInput[]
    id?: IntFilter<"TempRawData"> | number
    user_name?: StringNullableFilter<"TempRawData"> | string | null
    plate_num?: StringNullableFilter<"TempRawData"> | string | null
    variant?: StringNullableFilter<"TempRawData"> | string | null
    temp_values?: BytesNullableFilter<"TempRawData"> | Buffer | null
    cell_data?: BytesNullableFilter<"TempRawData"> | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsFilter<"TempRawData"> | $Enums.TempRawData_slope_units
    purification_date?: StringFilter<"TempRawData"> | string
    assay_date?: StringFilter<"TempRawData"> | string
    csv_filename?: StringFilter<"TempRawData"> | string
    plot_filename?: StringFilter<"TempRawData"> | string
    updated?: DateTimeFilter<"TempRawData"> | Date | string
    parent_id?: IntFilter<"TempRawData"> | number
    approved_by_student?: BoolFilter<"TempRawData"> | boolean
  }

  export type TempRawDataOrderByWithRelationInput = {
    id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    plate_num?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    temp_values?: SortOrderInput | SortOrder
    cell_data?: SortOrderInput | SortOrder
    slope_units?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type TempRawDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TempRawDataWhereInput | TempRawDataWhereInput[]
    OR?: TempRawDataWhereInput[]
    NOT?: TempRawDataWhereInput | TempRawDataWhereInput[]
    user_name?: StringNullableFilter<"TempRawData"> | string | null
    plate_num?: StringNullableFilter<"TempRawData"> | string | null
    variant?: StringNullableFilter<"TempRawData"> | string | null
    temp_values?: BytesNullableFilter<"TempRawData"> | Buffer | null
    cell_data?: BytesNullableFilter<"TempRawData"> | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsFilter<"TempRawData"> | $Enums.TempRawData_slope_units
    purification_date?: StringFilter<"TempRawData"> | string
    assay_date?: StringFilter<"TempRawData"> | string
    csv_filename?: StringFilter<"TempRawData"> | string
    plot_filename?: StringFilter<"TempRawData"> | string
    updated?: DateTimeFilter<"TempRawData"> | Date | string
    parent_id?: IntFilter<"TempRawData"> | number
    approved_by_student?: BoolFilter<"TempRawData"> | boolean
  }, "id">

  export type TempRawDataOrderByWithAggregationInput = {
    id?: SortOrder
    user_name?: SortOrderInput | SortOrder
    plate_num?: SortOrderInput | SortOrder
    variant?: SortOrderInput | SortOrder
    temp_values?: SortOrderInput | SortOrder
    cell_data?: SortOrderInput | SortOrder
    slope_units?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
    _count?: TempRawDataCountOrderByAggregateInput
    _avg?: TempRawDataAvgOrderByAggregateInput
    _max?: TempRawDataMaxOrderByAggregateInput
    _min?: TempRawDataMinOrderByAggregateInput
    _sum?: TempRawDataSumOrderByAggregateInput
  }

  export type TempRawDataScalarWhereWithAggregatesInput = {
    AND?: TempRawDataScalarWhereWithAggregatesInput | TempRawDataScalarWhereWithAggregatesInput[]
    OR?: TempRawDataScalarWhereWithAggregatesInput[]
    NOT?: TempRawDataScalarWhereWithAggregatesInput | TempRawDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TempRawData"> | number
    user_name?: StringNullableWithAggregatesFilter<"TempRawData"> | string | null
    plate_num?: StringNullableWithAggregatesFilter<"TempRawData"> | string | null
    variant?: StringNullableWithAggregatesFilter<"TempRawData"> | string | null
    temp_values?: BytesNullableWithAggregatesFilter<"TempRawData"> | Buffer | null
    cell_data?: BytesNullableWithAggregatesFilter<"TempRawData"> | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsWithAggregatesFilter<"TempRawData"> | $Enums.TempRawData_slope_units
    purification_date?: StringWithAggregatesFilter<"TempRawData"> | string
    assay_date?: StringWithAggregatesFilter<"TempRawData"> | string
    csv_filename?: StringWithAggregatesFilter<"TempRawData"> | string
    plot_filename?: StringWithAggregatesFilter<"TempRawData"> | string
    updated?: DateTimeWithAggregatesFilter<"TempRawData"> | Date | string
    parent_id?: IntWithAggregatesFilter<"TempRawData"> | number
    approved_by_student?: BoolWithAggregatesFilter<"TempRawData"> | boolean
  }

  export type CharacterizationDataCreateInput = {
    resid: string
    resnum: number
    resmut: string
    oligo_ordered?: boolean
    plasmid_verified?: boolean
    expressed?: boolean | null
    yield_avg?: number | null
    KM_avg?: number | null
    KM_SD?: number | null
    kcat_avg?: number | null
    kcat_SD?: number | null
    kcat_over_KM?: number | null
    kcat_over_KM_SD?: number | null
    T50?: number | null
    T50_SD?: number | null
    T50_k?: number | null
    T50_k_SD?: number | null
    Tm?: number | null
    Tm_SD?: number | null
    Rosetta_score?: number | null
    raw_data_id?: number
    temp_raw_data_id?: number
    WT_raw_data_id?: number
    WT_temp_raw_data_id?: number
    ab1_filename?: string | null
    gel_filename?: string | null
    creator?: string
    teammate?: string | null
    teammate2?: string | null
    teammate3?: string | null
    pi: string
    institution: string
    submitted_for_curation?: boolean
    approved_by_pi?: boolean
    curated?: boolean
    reference1?: number
    reference2?: number
    reference3?: number
    comments?: string | null
  }

  export type CharacterizationDataUncheckedCreateInput = {
    id?: number
    resid: string
    resnum: number
    resmut: string
    oligo_ordered?: boolean
    plasmid_verified?: boolean
    expressed?: boolean | null
    yield_avg?: number | null
    KM_avg?: number | null
    KM_SD?: number | null
    kcat_avg?: number | null
    kcat_SD?: number | null
    kcat_over_KM?: number | null
    kcat_over_KM_SD?: number | null
    T50?: number | null
    T50_SD?: number | null
    T50_k?: number | null
    T50_k_SD?: number | null
    Tm?: number | null
    Tm_SD?: number | null
    Rosetta_score?: number | null
    raw_data_id?: number
    temp_raw_data_id?: number
    WT_raw_data_id?: number
    WT_temp_raw_data_id?: number
    ab1_filename?: string | null
    gel_filename?: string | null
    creator?: string
    teammate?: string | null
    teammate2?: string | null
    teammate3?: string | null
    pi: string
    institution: string
    submitted_for_curation?: boolean
    approved_by_pi?: boolean
    curated?: boolean
    reference1?: number
    reference2?: number
    reference3?: number
    comments?: string | null
  }

  export type CharacterizationDataUpdateInput = {
    resid?: StringFieldUpdateOperationsInput | string
    resnum?: IntFieldUpdateOperationsInput | number
    resmut?: StringFieldUpdateOperationsInput | string
    oligo_ordered?: BoolFieldUpdateOperationsInput | boolean
    plasmid_verified?: BoolFieldUpdateOperationsInput | boolean
    expressed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yield_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Rosetta_score?: NullableFloatFieldUpdateOperationsInput | number | null
    raw_data_id?: IntFieldUpdateOperationsInput | number
    temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    ab1_filename?: NullableStringFieldUpdateOperationsInput | string | null
    gel_filename?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: StringFieldUpdateOperationsInput | string
    teammate?: NullableStringFieldUpdateOperationsInput | string | null
    teammate2?: NullableStringFieldUpdateOperationsInput | string | null
    teammate3?: NullableStringFieldUpdateOperationsInput | string | null
    pi?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    submitted_for_curation?: BoolFieldUpdateOperationsInput | boolean
    approved_by_pi?: BoolFieldUpdateOperationsInput | boolean
    curated?: BoolFieldUpdateOperationsInput | boolean
    reference1?: IntFieldUpdateOperationsInput | number
    reference2?: IntFieldUpdateOperationsInput | number
    reference3?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterizationDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resid?: StringFieldUpdateOperationsInput | string
    resnum?: IntFieldUpdateOperationsInput | number
    resmut?: StringFieldUpdateOperationsInput | string
    oligo_ordered?: BoolFieldUpdateOperationsInput | boolean
    plasmid_verified?: BoolFieldUpdateOperationsInput | boolean
    expressed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yield_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Rosetta_score?: NullableFloatFieldUpdateOperationsInput | number | null
    raw_data_id?: IntFieldUpdateOperationsInput | number
    temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    ab1_filename?: NullableStringFieldUpdateOperationsInput | string | null
    gel_filename?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: StringFieldUpdateOperationsInput | string
    teammate?: NullableStringFieldUpdateOperationsInput | string | null
    teammate2?: NullableStringFieldUpdateOperationsInput | string | null
    teammate3?: NullableStringFieldUpdateOperationsInput | string | null
    pi?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    submitted_for_curation?: BoolFieldUpdateOperationsInput | boolean
    approved_by_pi?: BoolFieldUpdateOperationsInput | boolean
    curated?: BoolFieldUpdateOperationsInput | boolean
    reference1?: IntFieldUpdateOperationsInput | number
    reference2?: IntFieldUpdateOperationsInput | number
    reference3?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterizationDataCreateManyInput = {
    id?: number
    resid: string
    resnum: number
    resmut: string
    oligo_ordered?: boolean
    plasmid_verified?: boolean
    expressed?: boolean | null
    yield_avg?: number | null
    KM_avg?: number | null
    KM_SD?: number | null
    kcat_avg?: number | null
    kcat_SD?: number | null
    kcat_over_KM?: number | null
    kcat_over_KM_SD?: number | null
    T50?: number | null
    T50_SD?: number | null
    T50_k?: number | null
    T50_k_SD?: number | null
    Tm?: number | null
    Tm_SD?: number | null
    Rosetta_score?: number | null
    raw_data_id?: number
    temp_raw_data_id?: number
    WT_raw_data_id?: number
    WT_temp_raw_data_id?: number
    ab1_filename?: string | null
    gel_filename?: string | null
    creator?: string
    teammate?: string | null
    teammate2?: string | null
    teammate3?: string | null
    pi: string
    institution: string
    submitted_for_curation?: boolean
    approved_by_pi?: boolean
    curated?: boolean
    reference1?: number
    reference2?: number
    reference3?: number
    comments?: string | null
  }

  export type CharacterizationDataUpdateManyMutationInput = {
    resid?: StringFieldUpdateOperationsInput | string
    resnum?: IntFieldUpdateOperationsInput | number
    resmut?: StringFieldUpdateOperationsInput | string
    oligo_ordered?: BoolFieldUpdateOperationsInput | boolean
    plasmid_verified?: BoolFieldUpdateOperationsInput | boolean
    expressed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yield_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Rosetta_score?: NullableFloatFieldUpdateOperationsInput | number | null
    raw_data_id?: IntFieldUpdateOperationsInput | number
    temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    ab1_filename?: NullableStringFieldUpdateOperationsInput | string | null
    gel_filename?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: StringFieldUpdateOperationsInput | string
    teammate?: NullableStringFieldUpdateOperationsInput | string | null
    teammate2?: NullableStringFieldUpdateOperationsInput | string | null
    teammate3?: NullableStringFieldUpdateOperationsInput | string | null
    pi?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    submitted_for_curation?: BoolFieldUpdateOperationsInput | boolean
    approved_by_pi?: BoolFieldUpdateOperationsInput | boolean
    curated?: BoolFieldUpdateOperationsInput | boolean
    reference1?: IntFieldUpdateOperationsInput | number
    reference2?: IntFieldUpdateOperationsInput | number
    reference3?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CharacterizationDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resid?: StringFieldUpdateOperationsInput | string
    resnum?: IntFieldUpdateOperationsInput | number
    resmut?: StringFieldUpdateOperationsInput | string
    oligo_ordered?: BoolFieldUpdateOperationsInput | boolean
    plasmid_verified?: BoolFieldUpdateOperationsInput | boolean
    expressed?: NullableBoolFieldUpdateOperationsInput | boolean | null
    yield_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_avg?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM?: NullableFloatFieldUpdateOperationsInput | number | null
    kcat_over_KM_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k?: NullableFloatFieldUpdateOperationsInput | number | null
    T50_k_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm?: NullableFloatFieldUpdateOperationsInput | number | null
    Tm_SD?: NullableFloatFieldUpdateOperationsInput | number | null
    Rosetta_score?: NullableFloatFieldUpdateOperationsInput | number | null
    raw_data_id?: IntFieldUpdateOperationsInput | number
    temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_raw_data_id?: IntFieldUpdateOperationsInput | number
    WT_temp_raw_data_id?: IntFieldUpdateOperationsInput | number
    ab1_filename?: NullableStringFieldUpdateOperationsInput | string | null
    gel_filename?: NullableStringFieldUpdateOperationsInput | string | null
    creator?: StringFieldUpdateOperationsInput | string
    teammate?: NullableStringFieldUpdateOperationsInput | string | null
    teammate2?: NullableStringFieldUpdateOperationsInput | string | null
    teammate3?: NullableStringFieldUpdateOperationsInput | string | null
    pi?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    submitted_for_curation?: BoolFieldUpdateOperationsInput | boolean
    approved_by_pi?: BoolFieldUpdateOperationsInput | boolean
    curated?: BoolFieldUpdateOperationsInput | boolean
    reference1?: IntFieldUpdateOperationsInput | number
    reference2?: IntFieldUpdateOperationsInput | number
    reference3?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KineticRawDataCreateInput = {
    user_name?: string | null
    plate_num?: string | null
    variant?: string | null
    cell_data?: Buffer | null
    slope_units: $Enums.KineticRawData_slope_units
    yield?: number | null
    yield_units: $Enums.KineticRawData_yield_units
    dilution?: number | null
    substrate_dilution?: number
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated?: Date | string
    parent_id: number
    approved_by_student?: boolean
  }

  export type KineticRawDataUncheckedCreateInput = {
    id?: number
    user_name?: string | null
    plate_num?: string | null
    variant?: string | null
    cell_data?: Buffer | null
    slope_units: $Enums.KineticRawData_slope_units
    yield?: number | null
    yield_units: $Enums.KineticRawData_yield_units
    dilution?: number | null
    substrate_dilution?: number
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated?: Date | string
    parent_id: number
    approved_by_student?: boolean
  }

  export type KineticRawDataUpdateInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_slope_units
    yield?: NullableFloatFieldUpdateOperationsInput | number | null
    yield_units?: EnumKineticRawData_yield_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_yield_units
    dilution?: NullableFloatFieldUpdateOperationsInput | number | null
    substrate_dilution?: IntFieldUpdateOperationsInput | number
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KineticRawDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_slope_units
    yield?: NullableFloatFieldUpdateOperationsInput | number | null
    yield_units?: EnumKineticRawData_yield_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_yield_units
    dilution?: NullableFloatFieldUpdateOperationsInput | number | null
    substrate_dilution?: IntFieldUpdateOperationsInput | number
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KineticRawDataCreateManyInput = {
    id?: number
    user_name?: string | null
    plate_num?: string | null
    variant?: string | null
    cell_data?: Buffer | null
    slope_units: $Enums.KineticRawData_slope_units
    yield?: number | null
    yield_units: $Enums.KineticRawData_yield_units
    dilution?: number | null
    substrate_dilution?: number
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated?: Date | string
    parent_id: number
    approved_by_student?: boolean
  }

  export type KineticRawDataUpdateManyMutationInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_slope_units
    yield?: NullableFloatFieldUpdateOperationsInput | number | null
    yield_units?: EnumKineticRawData_yield_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_yield_units
    dilution?: NullableFloatFieldUpdateOperationsInput | number | null
    substrate_dilution?: IntFieldUpdateOperationsInput | number
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type KineticRawDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumKineticRawData_slope_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_slope_units
    yield?: NullableFloatFieldUpdateOperationsInput | number | null
    yield_units?: EnumKineticRawData_yield_unitsFieldUpdateOperationsInput | $Enums.KineticRawData_yield_units
    dilution?: NullableFloatFieldUpdateOperationsInput | number | null
    substrate_dilution?: IntFieldUpdateOperationsInput | number
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OligosCreateInput = {
    variant: string
    oligo: string
  }

  export type OligosUncheckedCreateInput = {
    id?: number
    variant: string
    oligo: string
  }

  export type OligosUpdateInput = {
    variant?: StringFieldUpdateOperationsInput | string
    oligo?: StringFieldUpdateOperationsInput | string
  }

  export type OligosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant?: StringFieldUpdateOperationsInput | string
    oligo?: StringFieldUpdateOperationsInput | string
  }

  export type OligosCreateManyInput = {
    id?: number
    variant: string
    oligo: string
  }

  export type OligosUpdateManyMutationInput = {
    variant?: StringFieldUpdateOperationsInput | string
    oligo?: StringFieldUpdateOperationsInput | string
  }

  export type OligosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    variant?: StringFieldUpdateOperationsInput | string
    oligo?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceCreateInput = {
    id: number
    resnum: string
    Rosetta_resnum?: number | null
    PDBresnum?: string | null
    resid: string
  }

  export type SequenceUncheckedCreateInput = {
    id: number
    resnum: string
    Rosetta_resnum?: number | null
    PDBresnum?: string | null
    resid: string
  }

  export type SequenceUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resnum?: StringFieldUpdateOperationsInput | string
    Rosetta_resnum?: NullableIntFieldUpdateOperationsInput | number | null
    PDBresnum?: NullableStringFieldUpdateOperationsInput | string | null
    resid?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    resnum?: StringFieldUpdateOperationsInput | string
    Rosetta_resnum?: NullableIntFieldUpdateOperationsInput | number | null
    PDBresnum?: NullableStringFieldUpdateOperationsInput | string | null
    resid?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceCreateManyInput = {
    id: number
    resnum: string
    Rosetta_resnum?: number | null
    PDBresnum?: string | null
    resid: string
  }

  export type SequenceUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    resnum?: StringFieldUpdateOperationsInput | string
    Rosetta_resnum?: NullableIntFieldUpdateOperationsInput | number | null
    PDBresnum?: NullableStringFieldUpdateOperationsInput | string | null
    resid?: StringFieldUpdateOperationsInput | string
  }

  export type SequenceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    resnum?: StringFieldUpdateOperationsInput | string
    Rosetta_resnum?: NullableIntFieldUpdateOperationsInput | number | null
    PDBresnum?: NullableStringFieldUpdateOperationsInput | string | null
    resid?: StringFieldUpdateOperationsInput | string
  }

  export type TempRawDataCreateInput = {
    user_name?: string | null
    plate_num?: string | null
    variant?: string | null
    temp_values?: Buffer | null
    cell_data?: Buffer | null
    slope_units: $Enums.TempRawData_slope_units
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated?: Date | string
    parent_id: number
    approved_by_student?: boolean
  }

  export type TempRawDataUncheckedCreateInput = {
    id?: number
    user_name?: string | null
    plate_num?: string | null
    variant?: string | null
    temp_values?: Buffer | null
    cell_data?: Buffer | null
    slope_units: $Enums.TempRawData_slope_units
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated?: Date | string
    parent_id: number
    approved_by_student?: boolean
  }

  export type TempRawDataUpdateInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    temp_values?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsFieldUpdateOperationsInput | $Enums.TempRawData_slope_units
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TempRawDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    temp_values?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsFieldUpdateOperationsInput | $Enums.TempRawData_slope_units
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TempRawDataCreateManyInput = {
    id?: number
    user_name?: string | null
    plate_num?: string | null
    variant?: string | null
    temp_values?: Buffer | null
    cell_data?: Buffer | null
    slope_units: $Enums.TempRawData_slope_units
    purification_date: string
    assay_date: string
    csv_filename: string
    plot_filename: string
    updated?: Date | string
    parent_id: number
    approved_by_student?: boolean
  }

  export type TempRawDataUpdateManyMutationInput = {
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    temp_values?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsFieldUpdateOperationsInput | $Enums.TempRawData_slope_units
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TempRawDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_name?: NullableStringFieldUpdateOperationsInput | string | null
    plate_num?: NullableStringFieldUpdateOperationsInput | string | null
    variant?: NullableStringFieldUpdateOperationsInput | string | null
    temp_values?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    cell_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    slope_units?: EnumTempRawData_slope_unitsFieldUpdateOperationsInput | $Enums.TempRawData_slope_units
    purification_date?: StringFieldUpdateOperationsInput | string
    assay_date?: StringFieldUpdateOperationsInput | string
    csv_filename?: StringFieldUpdateOperationsInput | string
    plot_filename?: StringFieldUpdateOperationsInput | string
    updated?: DateTimeFieldUpdateOperationsInput | Date | string
    parent_id?: IntFieldUpdateOperationsInput | number
    approved_by_student?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CharacterizationDataCountOrderByAggregateInput = {
    id?: SortOrder
    resid?: SortOrder
    resnum?: SortOrder
    resmut?: SortOrder
    oligo_ordered?: SortOrder
    plasmid_verified?: SortOrder
    expressed?: SortOrder
    yield_avg?: SortOrder
    KM_avg?: SortOrder
    KM_SD?: SortOrder
    kcat_avg?: SortOrder
    kcat_SD?: SortOrder
    kcat_over_KM?: SortOrder
    kcat_over_KM_SD?: SortOrder
    T50?: SortOrder
    T50_SD?: SortOrder
    T50_k?: SortOrder
    T50_k_SD?: SortOrder
    Tm?: SortOrder
    Tm_SD?: SortOrder
    Rosetta_score?: SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    ab1_filename?: SortOrder
    gel_filename?: SortOrder
    creator?: SortOrder
    teammate?: SortOrder
    teammate2?: SortOrder
    teammate3?: SortOrder
    pi?: SortOrder
    institution?: SortOrder
    submitted_for_curation?: SortOrder
    approved_by_pi?: SortOrder
    curated?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
    comments?: SortOrder
  }

  export type CharacterizationDataAvgOrderByAggregateInput = {
    id?: SortOrder
    resnum?: SortOrder
    yield_avg?: SortOrder
    KM_avg?: SortOrder
    KM_SD?: SortOrder
    kcat_avg?: SortOrder
    kcat_SD?: SortOrder
    kcat_over_KM?: SortOrder
    kcat_over_KM_SD?: SortOrder
    T50?: SortOrder
    T50_SD?: SortOrder
    T50_k?: SortOrder
    T50_k_SD?: SortOrder
    Tm?: SortOrder
    Tm_SD?: SortOrder
    Rosetta_score?: SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
  }

  export type CharacterizationDataMaxOrderByAggregateInput = {
    id?: SortOrder
    resid?: SortOrder
    resnum?: SortOrder
    resmut?: SortOrder
    oligo_ordered?: SortOrder
    plasmid_verified?: SortOrder
    expressed?: SortOrder
    yield_avg?: SortOrder
    KM_avg?: SortOrder
    KM_SD?: SortOrder
    kcat_avg?: SortOrder
    kcat_SD?: SortOrder
    kcat_over_KM?: SortOrder
    kcat_over_KM_SD?: SortOrder
    T50?: SortOrder
    T50_SD?: SortOrder
    T50_k?: SortOrder
    T50_k_SD?: SortOrder
    Tm?: SortOrder
    Tm_SD?: SortOrder
    Rosetta_score?: SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    ab1_filename?: SortOrder
    gel_filename?: SortOrder
    creator?: SortOrder
    teammate?: SortOrder
    teammate2?: SortOrder
    teammate3?: SortOrder
    pi?: SortOrder
    institution?: SortOrder
    submitted_for_curation?: SortOrder
    approved_by_pi?: SortOrder
    curated?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
    comments?: SortOrder
  }

  export type CharacterizationDataMinOrderByAggregateInput = {
    id?: SortOrder
    resid?: SortOrder
    resnum?: SortOrder
    resmut?: SortOrder
    oligo_ordered?: SortOrder
    plasmid_verified?: SortOrder
    expressed?: SortOrder
    yield_avg?: SortOrder
    KM_avg?: SortOrder
    KM_SD?: SortOrder
    kcat_avg?: SortOrder
    kcat_SD?: SortOrder
    kcat_over_KM?: SortOrder
    kcat_over_KM_SD?: SortOrder
    T50?: SortOrder
    T50_SD?: SortOrder
    T50_k?: SortOrder
    T50_k_SD?: SortOrder
    Tm?: SortOrder
    Tm_SD?: SortOrder
    Rosetta_score?: SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    ab1_filename?: SortOrder
    gel_filename?: SortOrder
    creator?: SortOrder
    teammate?: SortOrder
    teammate2?: SortOrder
    teammate3?: SortOrder
    pi?: SortOrder
    institution?: SortOrder
    submitted_for_curation?: SortOrder
    approved_by_pi?: SortOrder
    curated?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
    comments?: SortOrder
  }

  export type CharacterizationDataSumOrderByAggregateInput = {
    id?: SortOrder
    resnum?: SortOrder
    yield_avg?: SortOrder
    KM_avg?: SortOrder
    KM_SD?: SortOrder
    kcat_avg?: SortOrder
    kcat_SD?: SortOrder
    kcat_over_KM?: SortOrder
    kcat_over_KM_SD?: SortOrder
    T50?: SortOrder
    T50_SD?: SortOrder
    T50_k?: SortOrder
    T50_k_SD?: SortOrder
    Tm?: SortOrder
    Tm_SD?: SortOrder
    Rosetta_score?: SortOrder
    raw_data_id?: SortOrder
    temp_raw_data_id?: SortOrder
    WT_raw_data_id?: SortOrder
    WT_temp_raw_data_id?: SortOrder
    reference1?: SortOrder
    reference2?: SortOrder
    reference3?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type EnumKineticRawData_slope_unitsFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_slope_units | EnumKineticRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_slope_units[]
    notIn?: $Enums.KineticRawData_slope_units[]
    not?: NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel> | $Enums.KineticRawData_slope_units
  }

  export type EnumKineticRawData_yield_unitsFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_yield_units | EnumKineticRawData_yield_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_yield_units[]
    notIn?: $Enums.KineticRawData_yield_units[]
    not?: NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel> | $Enums.KineticRawData_yield_units
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type KineticRawDataCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    plate_num?: SortOrder
    variant?: SortOrder
    cell_data?: SortOrder
    slope_units?: SortOrder
    yield?: SortOrder
    yield_units?: SortOrder
    dilution?: SortOrder
    substrate_dilution?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type KineticRawDataAvgOrderByAggregateInput = {
    id?: SortOrder
    yield?: SortOrder
    dilution?: SortOrder
    substrate_dilution?: SortOrder
    parent_id?: SortOrder
  }

  export type KineticRawDataMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    plate_num?: SortOrder
    variant?: SortOrder
    cell_data?: SortOrder
    slope_units?: SortOrder
    yield?: SortOrder
    yield_units?: SortOrder
    dilution?: SortOrder
    substrate_dilution?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type KineticRawDataMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    plate_num?: SortOrder
    variant?: SortOrder
    cell_data?: SortOrder
    slope_units?: SortOrder
    yield?: SortOrder
    yield_units?: SortOrder
    dilution?: SortOrder
    substrate_dilution?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type KineticRawDataSumOrderByAggregateInput = {
    id?: SortOrder
    yield?: SortOrder
    dilution?: SortOrder
    substrate_dilution?: SortOrder
    parent_id?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type EnumKineticRawData_slope_unitsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_slope_units | EnumKineticRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_slope_units[]
    notIn?: $Enums.KineticRawData_slope_units[]
    not?: NestedEnumKineticRawData_slope_unitsWithAggregatesFilter<$PrismaModel> | $Enums.KineticRawData_slope_units
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel>
    _max?: NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel>
  }

  export type EnumKineticRawData_yield_unitsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_yield_units | EnumKineticRawData_yield_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_yield_units[]
    notIn?: $Enums.KineticRawData_yield_units[]
    not?: NestedEnumKineticRawData_yield_unitsWithAggregatesFilter<$PrismaModel> | $Enums.KineticRawData_yield_units
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel>
    _max?: NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OligosCountOrderByAggregateInput = {
    id?: SortOrder
    variant?: SortOrder
    oligo?: SortOrder
  }

  export type OligosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OligosMaxOrderByAggregateInput = {
    id?: SortOrder
    variant?: SortOrder
    oligo?: SortOrder
  }

  export type OligosMinOrderByAggregateInput = {
    id?: SortOrder
    variant?: SortOrder
    oligo?: SortOrder
  }

  export type OligosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SequenceCountOrderByAggregateInput = {
    id?: SortOrder
    resnum?: SortOrder
    Rosetta_resnum?: SortOrder
    PDBresnum?: SortOrder
    resid?: SortOrder
  }

  export type SequenceAvgOrderByAggregateInput = {
    id?: SortOrder
    Rosetta_resnum?: SortOrder
  }

  export type SequenceMaxOrderByAggregateInput = {
    id?: SortOrder
    resnum?: SortOrder
    Rosetta_resnum?: SortOrder
    PDBresnum?: SortOrder
    resid?: SortOrder
  }

  export type SequenceMinOrderByAggregateInput = {
    id?: SortOrder
    resnum?: SortOrder
    Rosetta_resnum?: SortOrder
    PDBresnum?: SortOrder
    resid?: SortOrder
  }

  export type SequenceSumOrderByAggregateInput = {
    id?: SortOrder
    Rosetta_resnum?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type EnumTempRawData_slope_unitsFilter<$PrismaModel = never> = {
    equals?: $Enums.TempRawData_slope_units | EnumTempRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.TempRawData_slope_units[]
    notIn?: $Enums.TempRawData_slope_units[]
    not?: NestedEnumTempRawData_slope_unitsFilter<$PrismaModel> | $Enums.TempRawData_slope_units
  }

  export type TempRawDataCountOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    plate_num?: SortOrder
    variant?: SortOrder
    temp_values?: SortOrder
    cell_data?: SortOrder
    slope_units?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type TempRawDataAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type TempRawDataMaxOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    plate_num?: SortOrder
    variant?: SortOrder
    temp_values?: SortOrder
    cell_data?: SortOrder
    slope_units?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type TempRawDataMinOrderByAggregateInput = {
    id?: SortOrder
    user_name?: SortOrder
    plate_num?: SortOrder
    variant?: SortOrder
    temp_values?: SortOrder
    cell_data?: SortOrder
    slope_units?: SortOrder
    purification_date?: SortOrder
    assay_date?: SortOrder
    csv_filename?: SortOrder
    plot_filename?: SortOrder
    updated?: SortOrder
    parent_id?: SortOrder
    approved_by_student?: SortOrder
  }

  export type TempRawDataSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type EnumTempRawData_slope_unitsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TempRawData_slope_units | EnumTempRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.TempRawData_slope_units[]
    notIn?: $Enums.TempRawData_slope_units[]
    not?: NestedEnumTempRawData_slope_unitsWithAggregatesFilter<$PrismaModel> | $Enums.TempRawData_slope_units
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTempRawData_slope_unitsFilter<$PrismaModel>
    _max?: NestedEnumTempRawData_slope_unitsFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type EnumKineticRawData_slope_unitsFieldUpdateOperationsInput = {
    set?: $Enums.KineticRawData_slope_units
  }

  export type EnumKineticRawData_yield_unitsFieldUpdateOperationsInput = {
    set?: $Enums.KineticRawData_yield_units
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTempRawData_slope_unitsFieldUpdateOperationsInput = {
    set?: $Enums.TempRawData_slope_units
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_slope_units | EnumKineticRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_slope_units[]
    notIn?: $Enums.KineticRawData_slope_units[]
    not?: NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel> | $Enums.KineticRawData_slope_units
  }

  export type NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_yield_units | EnumKineticRawData_yield_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_yield_units[]
    notIn?: $Enums.KineticRawData_yield_units[]
    not?: NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel> | $Enums.KineticRawData_yield_units
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | null
    notIn?: Buffer[] | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type NestedEnumKineticRawData_slope_unitsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_slope_units | EnumKineticRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_slope_units[]
    notIn?: $Enums.KineticRawData_slope_units[]
    not?: NestedEnumKineticRawData_slope_unitsWithAggregatesFilter<$PrismaModel> | $Enums.KineticRawData_slope_units
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel>
    _max?: NestedEnumKineticRawData_slope_unitsFilter<$PrismaModel>
  }

  export type NestedEnumKineticRawData_yield_unitsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KineticRawData_yield_units | EnumKineticRawData_yield_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.KineticRawData_yield_units[]
    notIn?: $Enums.KineticRawData_yield_units[]
    not?: NestedEnumKineticRawData_yield_unitsWithAggregatesFilter<$PrismaModel> | $Enums.KineticRawData_yield_units
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel>
    _max?: NestedEnumKineticRawData_yield_unitsFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedEnumTempRawData_slope_unitsFilter<$PrismaModel = never> = {
    equals?: $Enums.TempRawData_slope_units | EnumTempRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.TempRawData_slope_units[]
    notIn?: $Enums.TempRawData_slope_units[]
    not?: NestedEnumTempRawData_slope_unitsFilter<$PrismaModel> | $Enums.TempRawData_slope_units
  }

  export type NestedEnumTempRawData_slope_unitsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TempRawData_slope_units | EnumTempRawData_slope_unitsFieldRefInput<$PrismaModel>
    in?: $Enums.TempRawData_slope_units[]
    notIn?: $Enums.TempRawData_slope_units[]
    not?: NestedEnumTempRawData_slope_unitsWithAggregatesFilter<$PrismaModel> | $Enums.TempRawData_slope_units
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTempRawData_slope_unitsFilter<$PrismaModel>
    _max?: NestedEnumTempRawData_slope_unitsFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CharacterizationDataDefaultArgs instead
     */
    export type CharacterizationDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterizationDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KineticRawDataDefaultArgs instead
     */
    export type KineticRawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = KineticRawDataDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OligosDefaultArgs instead
     */
    export type OligosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OligosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SequenceDefaultArgs instead
     */
    export type SequenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SequenceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TempRawDataDefaultArgs instead
     */
    export type TempRawDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TempRawDataDefaultArgs<ExtArgs>

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