
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Coach
 * 
 */
export type Coach = $Result.DefaultSelection<Prisma.$CoachPayload>
/**
 * Model AgeGroup
 * 
 */
export type AgeGroup = $Result.DefaultSelection<Prisma.$AgeGroupPayload>
/**
 * Model Award
 * 
 */
export type Award = $Result.DefaultSelection<Prisma.$AwardPayload>
/**
 * Model Sponsor
 * 
 */
export type Sponsor = $Result.DefaultSelection<Prisma.$SponsorPayload>
/**
 * Model Fund
 * 
 */
export type Fund = $Result.DefaultSelection<Prisma.$FundPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model SessionStep
 * 
 */
export type SessionStep = $Result.DefaultSelection<Prisma.$SessionStepPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model Faq
 * 
 */
export type Faq = $Result.DefaultSelection<Prisma.$FaqPayload>
/**
 * Model BringItem
 * 
 */
export type BringItem = $Result.DefaultSelection<Prisma.$BringItemPayload>
/**
 * Model GalleryItem
 * 
 */
export type GalleryItem = $Result.DefaultSelection<Prisma.$GalleryItemPayload>
/**
 * Model Heading
 * 
 */
export type Heading = $Result.DefaultSelection<Prisma.$HeadingPayload>
/**
 * Model Enquiry
 * 
 */
export type Enquiry = $Result.DefaultSelection<Prisma.$EnquiryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Coaches
 * const coaches = await prisma.coach.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Coaches
   * const coaches = await prisma.coach.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.coach`: Exposes CRUD operations for the **Coach** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Coaches
    * const coaches = await prisma.coach.findMany()
    * ```
    */
  get coach(): Prisma.CoachDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ageGroup`: Exposes CRUD operations for the **AgeGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgeGroups
    * const ageGroups = await prisma.ageGroup.findMany()
    * ```
    */
  get ageGroup(): Prisma.AgeGroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.award`: Exposes CRUD operations for the **Award** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Awards
    * const awards = await prisma.award.findMany()
    * ```
    */
  get award(): Prisma.AwardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sponsor`: Exposes CRUD operations for the **Sponsor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sponsors
    * const sponsors = await prisma.sponsor.findMany()
    * ```
    */
  get sponsor(): Prisma.SponsorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fund`: Exposes CRUD operations for the **Fund** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Funds
    * const funds = await prisma.fund.findMany()
    * ```
    */
  get fund(): Prisma.FundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionStep`: Exposes CRUD operations for the **SessionStep** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionSteps
    * const sessionSteps = await prisma.sessionStep.findMany()
    * ```
    */
  get sessionStep(): Prisma.SessionStepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.faq`: Exposes CRUD operations for the **Faq** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faqs
    * const faqs = await prisma.faq.findMany()
    * ```
    */
  get faq(): Prisma.FaqDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bringItem`: Exposes CRUD operations for the **BringItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BringItems
    * const bringItems = await prisma.bringItem.findMany()
    * ```
    */
  get bringItem(): Prisma.BringItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.galleryItem`: Exposes CRUD operations for the **GalleryItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GalleryItems
    * const galleryItems = await prisma.galleryItem.findMany()
    * ```
    */
  get galleryItem(): Prisma.GalleryItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.heading`: Exposes CRUD operations for the **Heading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Headings
    * const headings = await prisma.heading.findMany()
    * ```
    */
  get heading(): Prisma.HeadingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enquiry`: Exposes CRUD operations for the **Enquiry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enquiries
    * const enquiries = await prisma.enquiry.findMany()
    * ```
    */
  get enquiry(): Prisma.EnquiryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Coach: 'Coach',
    AgeGroup: 'AgeGroup',
    Award: 'Award',
    Sponsor: 'Sponsor',
    Fund: 'Fund',
    News: 'News',
    SessionStep: 'SessionStep',
    Alert: 'Alert',
    Event: 'Event',
    Faq: 'Faq',
    BringItem: 'BringItem',
    GalleryItem: 'GalleryItem',
    Heading: 'Heading',
    Enquiry: 'Enquiry'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "coach" | "ageGroup" | "award" | "sponsor" | "fund" | "news" | "sessionStep" | "alert" | "event" | "faq" | "bringItem" | "galleryItem" | "heading" | "enquiry"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Coach: {
        payload: Prisma.$CoachPayload<ExtArgs>
        fields: Prisma.CoachFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CoachFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CoachFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          findFirst: {
            args: Prisma.CoachFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CoachFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          findMany: {
            args: Prisma.CoachFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          create: {
            args: Prisma.CoachCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          createMany: {
            args: Prisma.CoachCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CoachCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          delete: {
            args: Prisma.CoachDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          update: {
            args: Prisma.CoachUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          deleteMany: {
            args: Prisma.CoachDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CoachUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CoachUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>[]
          }
          upsert: {
            args: Prisma.CoachUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoachPayload>
          }
          aggregate: {
            args: Prisma.CoachAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCoach>
          }
          groupBy: {
            args: Prisma.CoachGroupByArgs<ExtArgs>
            result: $Utils.Optional<CoachGroupByOutputType>[]
          }
          count: {
            args: Prisma.CoachCountArgs<ExtArgs>
            result: $Utils.Optional<CoachCountAggregateOutputType> | number
          }
        }
      }
      AgeGroup: {
        payload: Prisma.$AgeGroupPayload<ExtArgs>
        fields: Prisma.AgeGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgeGroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgeGroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>
          }
          findFirst: {
            args: Prisma.AgeGroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgeGroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>
          }
          findMany: {
            args: Prisma.AgeGroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>[]
          }
          create: {
            args: Prisma.AgeGroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>
          }
          createMany: {
            args: Prisma.AgeGroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgeGroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>[]
          }
          delete: {
            args: Prisma.AgeGroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>
          }
          update: {
            args: Prisma.AgeGroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>
          }
          deleteMany: {
            args: Prisma.AgeGroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgeGroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgeGroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>[]
          }
          upsert: {
            args: Prisma.AgeGroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgeGroupPayload>
          }
          aggregate: {
            args: Prisma.AgeGroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgeGroup>
          }
          groupBy: {
            args: Prisma.AgeGroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgeGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgeGroupCountArgs<ExtArgs>
            result: $Utils.Optional<AgeGroupCountAggregateOutputType> | number
          }
        }
      }
      Award: {
        payload: Prisma.$AwardPayload<ExtArgs>
        fields: Prisma.AwardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AwardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AwardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findFirst: {
            args: Prisma.AwardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AwardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          findMany: {
            args: Prisma.AwardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          create: {
            args: Prisma.AwardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          createMany: {
            args: Prisma.AwardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AwardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          delete: {
            args: Prisma.AwardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          update: {
            args: Prisma.AwardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          deleteMany: {
            args: Prisma.AwardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AwardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AwardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>[]
          }
          upsert: {
            args: Prisma.AwardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AwardPayload>
          }
          aggregate: {
            args: Prisma.AwardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAward>
          }
          groupBy: {
            args: Prisma.AwardGroupByArgs<ExtArgs>
            result: $Utils.Optional<AwardGroupByOutputType>[]
          }
          count: {
            args: Prisma.AwardCountArgs<ExtArgs>
            result: $Utils.Optional<AwardCountAggregateOutputType> | number
          }
        }
      }
      Sponsor: {
        payload: Prisma.$SponsorPayload<ExtArgs>
        fields: Prisma.SponsorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SponsorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SponsorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          findFirst: {
            args: Prisma.SponsorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SponsorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          findMany: {
            args: Prisma.SponsorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          create: {
            args: Prisma.SponsorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          createMany: {
            args: Prisma.SponsorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SponsorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          delete: {
            args: Prisma.SponsorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          update: {
            args: Prisma.SponsorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          deleteMany: {
            args: Prisma.SponsorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SponsorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SponsorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>[]
          }
          upsert: {
            args: Prisma.SponsorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SponsorPayload>
          }
          aggregate: {
            args: Prisma.SponsorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSponsor>
          }
          groupBy: {
            args: Prisma.SponsorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SponsorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SponsorCountArgs<ExtArgs>
            result: $Utils.Optional<SponsorCountAggregateOutputType> | number
          }
        }
      }
      Fund: {
        payload: Prisma.$FundPayload<ExtArgs>
        fields: Prisma.FundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findFirst: {
            args: Prisma.FundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          findMany: {
            args: Prisma.FundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          create: {
            args: Prisma.FundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          createMany: {
            args: Prisma.FundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          delete: {
            args: Prisma.FundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          update: {
            args: Prisma.FundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          deleteMany: {
            args: Prisma.FundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>[]
          }
          upsert: {
            args: Prisma.FundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FundPayload>
          }
          aggregate: {
            args: Prisma.FundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFund>
          }
          groupBy: {
            args: Prisma.FundGroupByArgs<ExtArgs>
            result: $Utils.Optional<FundGroupByOutputType>[]
          }
          count: {
            args: Prisma.FundCountArgs<ExtArgs>
            result: $Utils.Optional<FundCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      SessionStep: {
        payload: Prisma.$SessionStepPayload<ExtArgs>
        fields: Prisma.SessionStepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionStepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionStepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>
          }
          findFirst: {
            args: Prisma.SessionStepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionStepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>
          }
          findMany: {
            args: Prisma.SessionStepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>[]
          }
          create: {
            args: Prisma.SessionStepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>
          }
          createMany: {
            args: Prisma.SessionStepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionStepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>[]
          }
          delete: {
            args: Prisma.SessionStepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>
          }
          update: {
            args: Prisma.SessionStepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>
          }
          deleteMany: {
            args: Prisma.SessionStepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionStepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionStepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>[]
          }
          upsert: {
            args: Prisma.SessionStepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionStepPayload>
          }
          aggregate: {
            args: Prisma.SessionStepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionStep>
          }
          groupBy: {
            args: Prisma.SessionStepGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionStepGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionStepCountArgs<ExtArgs>
            result: $Utils.Optional<SessionStepCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
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
      Faq: {
        payload: Prisma.$FaqPayload<ExtArgs>
        fields: Prisma.FaqFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaqFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaqFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findFirst: {
            args: Prisma.FaqFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaqFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          findMany: {
            args: Prisma.FaqFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          create: {
            args: Prisma.FaqCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          createMany: {
            args: Prisma.FaqCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FaqCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          delete: {
            args: Prisma.FaqDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          update: {
            args: Prisma.FaqUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          deleteMany: {
            args: Prisma.FaqDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FaqUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FaqUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>[]
          }
          upsert: {
            args: Prisma.FaqUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FaqPayload>
          }
          aggregate: {
            args: Prisma.FaqAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFaq>
          }
          groupBy: {
            args: Prisma.FaqGroupByArgs<ExtArgs>
            result: $Utils.Optional<FaqGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaqCountArgs<ExtArgs>
            result: $Utils.Optional<FaqCountAggregateOutputType> | number
          }
        }
      }
      BringItem: {
        payload: Prisma.$BringItemPayload<ExtArgs>
        fields: Prisma.BringItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BringItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BringItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>
          }
          findFirst: {
            args: Prisma.BringItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BringItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>
          }
          findMany: {
            args: Prisma.BringItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>[]
          }
          create: {
            args: Prisma.BringItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>
          }
          createMany: {
            args: Prisma.BringItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BringItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>[]
          }
          delete: {
            args: Prisma.BringItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>
          }
          update: {
            args: Prisma.BringItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>
          }
          deleteMany: {
            args: Prisma.BringItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BringItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BringItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>[]
          }
          upsert: {
            args: Prisma.BringItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BringItemPayload>
          }
          aggregate: {
            args: Prisma.BringItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBringItem>
          }
          groupBy: {
            args: Prisma.BringItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<BringItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.BringItemCountArgs<ExtArgs>
            result: $Utils.Optional<BringItemCountAggregateOutputType> | number
          }
        }
      }
      GalleryItem: {
        payload: Prisma.$GalleryItemPayload<ExtArgs>
        fields: Prisma.GalleryItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GalleryItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GalleryItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findFirst: {
            args: Prisma.GalleryItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GalleryItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          findMany: {
            args: Prisma.GalleryItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          create: {
            args: Prisma.GalleryItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          createMany: {
            args: Prisma.GalleryItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GalleryItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          delete: {
            args: Prisma.GalleryItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          update: {
            args: Prisma.GalleryItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          deleteMany: {
            args: Prisma.GalleryItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GalleryItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GalleryItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>[]
          }
          upsert: {
            args: Prisma.GalleryItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GalleryItemPayload>
          }
          aggregate: {
            args: Prisma.GalleryItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGalleryItem>
          }
          groupBy: {
            args: Prisma.GalleryItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GalleryItemCountArgs<ExtArgs>
            result: $Utils.Optional<GalleryItemCountAggregateOutputType> | number
          }
        }
      }
      Heading: {
        payload: Prisma.$HeadingPayload<ExtArgs>
        fields: Prisma.HeadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>
          }
          findFirst: {
            args: Prisma.HeadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>
          }
          findMany: {
            args: Prisma.HeadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>[]
          }
          create: {
            args: Prisma.HeadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>
          }
          createMany: {
            args: Prisma.HeadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeadingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>[]
          }
          delete: {
            args: Prisma.HeadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>
          }
          update: {
            args: Prisma.HeadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>
          }
          deleteMany: {
            args: Prisma.HeadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeadingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>[]
          }
          upsert: {
            args: Prisma.HeadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeadingPayload>
          }
          aggregate: {
            args: Prisma.HeadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHeading>
          }
          groupBy: {
            args: Prisma.HeadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeadingCountArgs<ExtArgs>
            result: $Utils.Optional<HeadingCountAggregateOutputType> | number
          }
        }
      }
      Enquiry: {
        payload: Prisma.$EnquiryPayload<ExtArgs>
        fields: Prisma.EnquiryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnquiryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnquiryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findFirst: {
            args: Prisma.EnquiryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnquiryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          findMany: {
            args: Prisma.EnquiryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          create: {
            args: Prisma.EnquiryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          createMany: {
            args: Prisma.EnquiryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnquiryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          delete: {
            args: Prisma.EnquiryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          update: {
            args: Prisma.EnquiryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          deleteMany: {
            args: Prisma.EnquiryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnquiryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnquiryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>[]
          }
          upsert: {
            args: Prisma.EnquiryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnquiryPayload>
          }
          aggregate: {
            args: Prisma.EnquiryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnquiry>
          }
          groupBy: {
            args: Prisma.EnquiryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnquiryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnquiryCountArgs<ExtArgs>
            result: $Utils.Optional<EnquiryCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    coach?: CoachOmit
    ageGroup?: AgeGroupOmit
    award?: AwardOmit
    sponsor?: SponsorOmit
    fund?: FundOmit
    news?: NewsOmit
    sessionStep?: SessionStepOmit
    alert?: AlertOmit
    event?: EventOmit
    faq?: FaqOmit
    bringItem?: BringItemOmit
    galleryItem?: GalleryItemOmit
    heading?: HeadingOmit
    enquiry?: EnquiryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Model Coach
   */

  export type AggregateCoach = {
    _count: CoachCountAggregateOutputType | null
    _avg: CoachAvgAggregateOutputType | null
    _sum: CoachSumAggregateOutputType | null
    _min: CoachMinAggregateOutputType | null
    _max: CoachMaxAggregateOutputType | null
  }

  export type CoachAvgAggregateOutputType = {
    order: number | null
  }

  export type CoachSumAggregateOutputType = {
    order: number | null
  }

  export type CoachMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    name: string | null
    role: string | null
    bio: string | null
    focus: string | null
    photoSrc: string | null
    photoAlt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    name: string | null
    role: string | null
    bio: string | null
    focus: string | null
    photoSrc: string | null
    photoAlt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CoachCountAggregateOutputType = {
    id: number
    order: number
    published: number
    name: number
    role: number
    bio: number
    focus: number
    photoSrc: number
    photoAlt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CoachAvgAggregateInputType = {
    order?: true
  }

  export type CoachSumAggregateInputType = {
    order?: true
  }

  export type CoachMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    role?: true
    bio?: true
    focus?: true
    photoSrc?: true
    photoAlt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    role?: true
    bio?: true
    focus?: true
    photoSrc?: true
    photoAlt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CoachCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    role?: true
    bio?: true
    focus?: true
    photoSrc?: true
    photoAlt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CoachAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coach to aggregate.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Coaches
    **/
    _count?: true | CoachCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CoachAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CoachSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CoachMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CoachMaxAggregateInputType
  }

  export type GetCoachAggregateType<T extends CoachAggregateArgs> = {
        [P in keyof T & keyof AggregateCoach]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCoach[P]>
      : GetScalarType<T[P], AggregateCoach[P]>
  }




  export type CoachGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CoachWhereInput
    orderBy?: CoachOrderByWithAggregationInput | CoachOrderByWithAggregationInput[]
    by: CoachScalarFieldEnum[] | CoachScalarFieldEnum
    having?: CoachScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CoachCountAggregateInputType | true
    _avg?: CoachAvgAggregateInputType
    _sum?: CoachSumAggregateInputType
    _min?: CoachMinAggregateInputType
    _max?: CoachMaxAggregateInputType
  }

  export type CoachGroupByOutputType = {
    id: string
    order: number
    published: boolean
    name: string
    role: string
    bio: string
    focus: string
    photoSrc: string | null
    photoAlt: string | null
    createdAt: Date
    updatedAt: Date
    _count: CoachCountAggregateOutputType | null
    _avg: CoachAvgAggregateOutputType | null
    _sum: CoachSumAggregateOutputType | null
    _min: CoachMinAggregateOutputType | null
    _max: CoachMaxAggregateOutputType | null
  }

  type GetCoachGroupByPayload<T extends CoachGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CoachGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CoachGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CoachGroupByOutputType[P]>
            : GetScalarType<T[P], CoachGroupByOutputType[P]>
        }
      >
    >


  export type CoachSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["coach"]>

  export type CoachSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    role?: boolean
    bio?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CoachOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "name" | "role" | "bio" | "focus" | "photoSrc" | "photoAlt" | "createdAt" | "updatedAt", ExtArgs["result"]["coach"]>

  export type $CoachPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Coach"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      name: string
      role: string
      bio: string
      focus: string
      photoSrc: string | null
      photoAlt: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["coach"]>
    composites: {}
  }

  type CoachGetPayload<S extends boolean | null | undefined | CoachDefaultArgs> = $Result.GetResult<Prisma.$CoachPayload, S>

  type CoachCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CoachFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CoachCountAggregateInputType | true
    }

  export interface CoachDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Coach'], meta: { name: 'Coach' } }
    /**
     * Find zero or one Coach that matches the filter.
     * @param {CoachFindUniqueArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CoachFindUniqueArgs>(args: SelectSubset<T, CoachFindUniqueArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Coach that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CoachFindUniqueOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CoachFindUniqueOrThrowArgs>(args: SelectSubset<T, CoachFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coach that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CoachFindFirstArgs>(args?: SelectSubset<T, CoachFindFirstArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Coach that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindFirstOrThrowArgs} args - Arguments to find a Coach
     * @example
     * // Get one Coach
     * const coach = await prisma.coach.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CoachFindFirstOrThrowArgs>(args?: SelectSubset<T, CoachFindFirstOrThrowArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Coaches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Coaches
     * const coaches = await prisma.coach.findMany()
     * 
     * // Get first 10 Coaches
     * const coaches = await prisma.coach.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const coachWithIdOnly = await prisma.coach.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CoachFindManyArgs>(args?: SelectSubset<T, CoachFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Coach.
     * @param {CoachCreateArgs} args - Arguments to create a Coach.
     * @example
     * // Create one Coach
     * const Coach = await prisma.coach.create({
     *   data: {
     *     // ... data to create a Coach
     *   }
     * })
     * 
     */
    create<T extends CoachCreateArgs>(args: SelectSubset<T, CoachCreateArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Coaches.
     * @param {CoachCreateManyArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CoachCreateManyArgs>(args?: SelectSubset<T, CoachCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Coaches and returns the data saved in the database.
     * @param {CoachCreateManyAndReturnArgs} args - Arguments to create many Coaches.
     * @example
     * // Create many Coaches
     * const coach = await prisma.coach.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Coaches and only return the `id`
     * const coachWithIdOnly = await prisma.coach.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CoachCreateManyAndReturnArgs>(args?: SelectSubset<T, CoachCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Coach.
     * @param {CoachDeleteArgs} args - Arguments to delete one Coach.
     * @example
     * // Delete one Coach
     * const Coach = await prisma.coach.delete({
     *   where: {
     *     // ... filter to delete one Coach
     *   }
     * })
     * 
     */
    delete<T extends CoachDeleteArgs>(args: SelectSubset<T, CoachDeleteArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Coach.
     * @param {CoachUpdateArgs} args - Arguments to update one Coach.
     * @example
     * // Update one Coach
     * const coach = await prisma.coach.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CoachUpdateArgs>(args: SelectSubset<T, CoachUpdateArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Coaches.
     * @param {CoachDeleteManyArgs} args - Arguments to filter Coaches to delete.
     * @example
     * // Delete a few Coaches
     * const { count } = await prisma.coach.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CoachDeleteManyArgs>(args?: SelectSubset<T, CoachDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CoachUpdateManyArgs>(args: SelectSubset<T, CoachUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Coaches and returns the data updated in the database.
     * @param {CoachUpdateManyAndReturnArgs} args - Arguments to update many Coaches.
     * @example
     * // Update many Coaches
     * const coach = await prisma.coach.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Coaches and only return the `id`
     * const coachWithIdOnly = await prisma.coach.updateManyAndReturn({
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
    updateManyAndReturn<T extends CoachUpdateManyAndReturnArgs>(args: SelectSubset<T, CoachUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Coach.
     * @param {CoachUpsertArgs} args - Arguments to update or create a Coach.
     * @example
     * // Update or create a Coach
     * const coach = await prisma.coach.upsert({
     *   create: {
     *     // ... data to create a Coach
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Coach we want to update
     *   }
     * })
     */
    upsert<T extends CoachUpsertArgs>(args: SelectSubset<T, CoachUpsertArgs<ExtArgs>>): Prisma__CoachClient<$Result.GetResult<Prisma.$CoachPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Coaches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachCountArgs} args - Arguments to filter Coaches to count.
     * @example
     * // Count the number of Coaches
     * const count = await prisma.coach.count({
     *   where: {
     *     // ... the filter for the Coaches we want to count
     *   }
     * })
    **/
    count<T extends CoachCountArgs>(
      args?: Subset<T, CoachCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CoachCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CoachAggregateArgs>(args: Subset<T, CoachAggregateArgs>): Prisma.PrismaPromise<GetCoachAggregateType<T>>

    /**
     * Group by Coach.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CoachGroupByArgs} args - Group by arguments.
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
      T extends CoachGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CoachGroupByArgs['orderBy'] }
        : { orderBy?: CoachGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CoachGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCoachGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Coach model
   */
  readonly fields: CoachFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Coach.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CoachClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Coach model
   */
  interface CoachFieldRefs {
    readonly id: FieldRef<"Coach", 'String'>
    readonly order: FieldRef<"Coach", 'Int'>
    readonly published: FieldRef<"Coach", 'Boolean'>
    readonly name: FieldRef<"Coach", 'String'>
    readonly role: FieldRef<"Coach", 'String'>
    readonly bio: FieldRef<"Coach", 'String'>
    readonly focus: FieldRef<"Coach", 'String'>
    readonly photoSrc: FieldRef<"Coach", 'String'>
    readonly photoAlt: FieldRef<"Coach", 'String'>
    readonly createdAt: FieldRef<"Coach", 'DateTime'>
    readonly updatedAt: FieldRef<"Coach", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Coach findUnique
   */
  export type CoachFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach findUniqueOrThrow
   */
  export type CoachFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach findFirst
   */
  export type CoachFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach findFirstOrThrow
   */
  export type CoachFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Filter, which Coach to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach findMany
   */
  export type CoachFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Filter, which Coaches to fetch.
     */
    where?: CoachWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Coaches to fetch.
     */
    orderBy?: CoachOrderByWithRelationInput | CoachOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Coaches.
     */
    cursor?: CoachWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Coaches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Coaches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Coaches.
     */
    distinct?: CoachScalarFieldEnum | CoachScalarFieldEnum[]
  }

  /**
   * Coach create
   */
  export type CoachCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data needed to create a Coach.
     */
    data: XOR<CoachCreateInput, CoachUncheckedCreateInput>
  }

  /**
   * Coach createMany
   */
  export type CoachCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coach createManyAndReturn
   */
  export type CoachCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data used to create many Coaches.
     */
    data: CoachCreateManyInput | CoachCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Coach update
   */
  export type CoachUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data needed to update a Coach.
     */
    data: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>
    /**
     * Choose, which Coach to update.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach updateMany
   */
  export type CoachUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
  }

  /**
   * Coach updateManyAndReturn
   */
  export type CoachUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The data used to update Coaches.
     */
    data: XOR<CoachUpdateManyMutationInput, CoachUncheckedUpdateManyInput>
    /**
     * Filter which Coaches to update
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to update.
     */
    limit?: number
  }

  /**
   * Coach upsert
   */
  export type CoachUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * The filter to search for the Coach to update in case it exists.
     */
    where: CoachWhereUniqueInput
    /**
     * In case the Coach found by the `where` argument doesn't exist, create a new Coach with this data.
     */
    create: XOR<CoachCreateInput, CoachUncheckedCreateInput>
    /**
     * In case the Coach was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CoachUpdateInput, CoachUncheckedUpdateInput>
  }

  /**
   * Coach delete
   */
  export type CoachDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
    /**
     * Filter which Coach to delete.
     */
    where: CoachWhereUniqueInput
  }

  /**
   * Coach deleteMany
   */
  export type CoachDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Coaches to delete
     */
    where?: CoachWhereInput
    /**
     * Limit how many Coaches to delete.
     */
    limit?: number
  }

  /**
   * Coach without action
   */
  export type CoachDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Coach
     */
    select?: CoachSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Coach
     */
    omit?: CoachOmit<ExtArgs> | null
  }


  /**
   * Model AgeGroup
   */

  export type AggregateAgeGroup = {
    _count: AgeGroupCountAggregateOutputType | null
    _avg: AgeGroupAvgAggregateOutputType | null
    _sum: AgeGroupSumAggregateOutputType | null
    _min: AgeGroupMinAggregateOutputType | null
    _max: AgeGroupMaxAggregateOutputType | null
  }

  export type AgeGroupAvgAggregateOutputType = {
    order: number | null
  }

  export type AgeGroupSumAggregateOutputType = {
    order: number | null
  }

  export type AgeGroupMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    ageRange: string | null
    name: string | null
    focus: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgeGroupMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    ageRange: string | null
    name: string | null
    focus: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgeGroupCountAggregateOutputType = {
    id: number
    order: number
    published: number
    ageRange: number
    name: number
    focus: number
    photoSrc: number
    photoAlt: number
    photoConsent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgeGroupAvgAggregateInputType = {
    order?: true
  }

  export type AgeGroupSumAggregateInputType = {
    order?: true
  }

  export type AgeGroupMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    ageRange?: true
    name?: true
    focus?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgeGroupMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    ageRange?: true
    name?: true
    focus?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgeGroupCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    ageRange?: true
    name?: true
    focus?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgeGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgeGroup to aggregate.
     */
    where?: AgeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeGroups to fetch.
     */
    orderBy?: AgeGroupOrderByWithRelationInput | AgeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgeGroups
    **/
    _count?: true | AgeGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AgeGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AgeGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgeGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgeGroupMaxAggregateInputType
  }

  export type GetAgeGroupAggregateType<T extends AgeGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateAgeGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgeGroup[P]>
      : GetScalarType<T[P], AggregateAgeGroup[P]>
  }




  export type AgeGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgeGroupWhereInput
    orderBy?: AgeGroupOrderByWithAggregationInput | AgeGroupOrderByWithAggregationInput[]
    by: AgeGroupScalarFieldEnum[] | AgeGroupScalarFieldEnum
    having?: AgeGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgeGroupCountAggregateInputType | true
    _avg?: AgeGroupAvgAggregateInputType
    _sum?: AgeGroupSumAggregateInputType
    _min?: AgeGroupMinAggregateInputType
    _max?: AgeGroupMaxAggregateInputType
  }

  export type AgeGroupGroupByOutputType = {
    id: string
    order: number
    published: boolean
    ageRange: string
    name: string
    focus: string
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean
    createdAt: Date
    updatedAt: Date
    _count: AgeGroupCountAggregateOutputType | null
    _avg: AgeGroupAvgAggregateOutputType | null
    _sum: AgeGroupSumAggregateOutputType | null
    _min: AgeGroupMinAggregateOutputType | null
    _max: AgeGroupMaxAggregateOutputType | null
  }

  type GetAgeGroupGroupByPayload<T extends AgeGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgeGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgeGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgeGroupGroupByOutputType[P]>
            : GetScalarType<T[P], AgeGroupGroupByOutputType[P]>
        }
      >
    >


  export type AgeGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    ageRange?: boolean
    name?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ageGroup"]>

  export type AgeGroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    ageRange?: boolean
    name?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ageGroup"]>

  export type AgeGroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    ageRange?: boolean
    name?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ageGroup"]>

  export type AgeGroupSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    ageRange?: boolean
    name?: boolean
    focus?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgeGroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "ageRange" | "name" | "focus" | "photoSrc" | "photoAlt" | "photoConsent" | "createdAt" | "updatedAt", ExtArgs["result"]["ageGroup"]>

  export type $AgeGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgeGroup"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      ageRange: string
      name: string
      focus: string
      photoSrc: string | null
      photoAlt: string | null
      photoConsent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ageGroup"]>
    composites: {}
  }

  type AgeGroupGetPayload<S extends boolean | null | undefined | AgeGroupDefaultArgs> = $Result.GetResult<Prisma.$AgeGroupPayload, S>

  type AgeGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgeGroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgeGroupCountAggregateInputType | true
    }

  export interface AgeGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgeGroup'], meta: { name: 'AgeGroup' } }
    /**
     * Find zero or one AgeGroup that matches the filter.
     * @param {AgeGroupFindUniqueArgs} args - Arguments to find a AgeGroup
     * @example
     * // Get one AgeGroup
     * const ageGroup = await prisma.ageGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgeGroupFindUniqueArgs>(args: SelectSubset<T, AgeGroupFindUniqueArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgeGroup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgeGroupFindUniqueOrThrowArgs} args - Arguments to find a AgeGroup
     * @example
     * // Get one AgeGroup
     * const ageGroup = await prisma.ageGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgeGroupFindUniqueOrThrowArgs>(args: SelectSubset<T, AgeGroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgeGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupFindFirstArgs} args - Arguments to find a AgeGroup
     * @example
     * // Get one AgeGroup
     * const ageGroup = await prisma.ageGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgeGroupFindFirstArgs>(args?: SelectSubset<T, AgeGroupFindFirstArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgeGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupFindFirstOrThrowArgs} args - Arguments to find a AgeGroup
     * @example
     * // Get one AgeGroup
     * const ageGroup = await prisma.ageGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgeGroupFindFirstOrThrowArgs>(args?: SelectSubset<T, AgeGroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgeGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgeGroups
     * const ageGroups = await prisma.ageGroup.findMany()
     * 
     * // Get first 10 AgeGroups
     * const ageGroups = await prisma.ageGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ageGroupWithIdOnly = await prisma.ageGroup.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgeGroupFindManyArgs>(args?: SelectSubset<T, AgeGroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgeGroup.
     * @param {AgeGroupCreateArgs} args - Arguments to create a AgeGroup.
     * @example
     * // Create one AgeGroup
     * const AgeGroup = await prisma.ageGroup.create({
     *   data: {
     *     // ... data to create a AgeGroup
     *   }
     * })
     * 
     */
    create<T extends AgeGroupCreateArgs>(args: SelectSubset<T, AgeGroupCreateArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgeGroups.
     * @param {AgeGroupCreateManyArgs} args - Arguments to create many AgeGroups.
     * @example
     * // Create many AgeGroups
     * const ageGroup = await prisma.ageGroup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgeGroupCreateManyArgs>(args?: SelectSubset<T, AgeGroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgeGroups and returns the data saved in the database.
     * @param {AgeGroupCreateManyAndReturnArgs} args - Arguments to create many AgeGroups.
     * @example
     * // Create many AgeGroups
     * const ageGroup = await prisma.ageGroup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgeGroups and only return the `id`
     * const ageGroupWithIdOnly = await prisma.ageGroup.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgeGroupCreateManyAndReturnArgs>(args?: SelectSubset<T, AgeGroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgeGroup.
     * @param {AgeGroupDeleteArgs} args - Arguments to delete one AgeGroup.
     * @example
     * // Delete one AgeGroup
     * const AgeGroup = await prisma.ageGroup.delete({
     *   where: {
     *     // ... filter to delete one AgeGroup
     *   }
     * })
     * 
     */
    delete<T extends AgeGroupDeleteArgs>(args: SelectSubset<T, AgeGroupDeleteArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgeGroup.
     * @param {AgeGroupUpdateArgs} args - Arguments to update one AgeGroup.
     * @example
     * // Update one AgeGroup
     * const ageGroup = await prisma.ageGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgeGroupUpdateArgs>(args: SelectSubset<T, AgeGroupUpdateArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgeGroups.
     * @param {AgeGroupDeleteManyArgs} args - Arguments to filter AgeGroups to delete.
     * @example
     * // Delete a few AgeGroups
     * const { count } = await prisma.ageGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgeGroupDeleteManyArgs>(args?: SelectSubset<T, AgeGroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgeGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgeGroups
     * const ageGroup = await prisma.ageGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgeGroupUpdateManyArgs>(args: SelectSubset<T, AgeGroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgeGroups and returns the data updated in the database.
     * @param {AgeGroupUpdateManyAndReturnArgs} args - Arguments to update many AgeGroups.
     * @example
     * // Update many AgeGroups
     * const ageGroup = await prisma.ageGroup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgeGroups and only return the `id`
     * const ageGroupWithIdOnly = await prisma.ageGroup.updateManyAndReturn({
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
    updateManyAndReturn<T extends AgeGroupUpdateManyAndReturnArgs>(args: SelectSubset<T, AgeGroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgeGroup.
     * @param {AgeGroupUpsertArgs} args - Arguments to update or create a AgeGroup.
     * @example
     * // Update or create a AgeGroup
     * const ageGroup = await prisma.ageGroup.upsert({
     *   create: {
     *     // ... data to create a AgeGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgeGroup we want to update
     *   }
     * })
     */
    upsert<T extends AgeGroupUpsertArgs>(args: SelectSubset<T, AgeGroupUpsertArgs<ExtArgs>>): Prisma__AgeGroupClient<$Result.GetResult<Prisma.$AgeGroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgeGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupCountArgs} args - Arguments to filter AgeGroups to count.
     * @example
     * // Count the number of AgeGroups
     * const count = await prisma.ageGroup.count({
     *   where: {
     *     // ... the filter for the AgeGroups we want to count
     *   }
     * })
    **/
    count<T extends AgeGroupCountArgs>(
      args?: Subset<T, AgeGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgeGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgeGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AgeGroupAggregateArgs>(args: Subset<T, AgeGroupAggregateArgs>): Prisma.PrismaPromise<GetAgeGroupAggregateType<T>>

    /**
     * Group by AgeGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgeGroupGroupByArgs} args - Group by arguments.
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
      T extends AgeGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgeGroupGroupByArgs['orderBy'] }
        : { orderBy?: AgeGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AgeGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgeGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgeGroup model
   */
  readonly fields: AgeGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgeGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgeGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the AgeGroup model
   */
  interface AgeGroupFieldRefs {
    readonly id: FieldRef<"AgeGroup", 'String'>
    readonly order: FieldRef<"AgeGroup", 'Int'>
    readonly published: FieldRef<"AgeGroup", 'Boolean'>
    readonly ageRange: FieldRef<"AgeGroup", 'String'>
    readonly name: FieldRef<"AgeGroup", 'String'>
    readonly focus: FieldRef<"AgeGroup", 'String'>
    readonly photoSrc: FieldRef<"AgeGroup", 'String'>
    readonly photoAlt: FieldRef<"AgeGroup", 'String'>
    readonly photoConsent: FieldRef<"AgeGroup", 'Boolean'>
    readonly createdAt: FieldRef<"AgeGroup", 'DateTime'>
    readonly updatedAt: FieldRef<"AgeGroup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgeGroup findUnique
   */
  export type AgeGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * Filter, which AgeGroup to fetch.
     */
    where: AgeGroupWhereUniqueInput
  }

  /**
   * AgeGroup findUniqueOrThrow
   */
  export type AgeGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * Filter, which AgeGroup to fetch.
     */
    where: AgeGroupWhereUniqueInput
  }

  /**
   * AgeGroup findFirst
   */
  export type AgeGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * Filter, which AgeGroup to fetch.
     */
    where?: AgeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeGroups to fetch.
     */
    orderBy?: AgeGroupOrderByWithRelationInput | AgeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgeGroups.
     */
    cursor?: AgeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgeGroups.
     */
    distinct?: AgeGroupScalarFieldEnum | AgeGroupScalarFieldEnum[]
  }

  /**
   * AgeGroup findFirstOrThrow
   */
  export type AgeGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * Filter, which AgeGroup to fetch.
     */
    where?: AgeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeGroups to fetch.
     */
    orderBy?: AgeGroupOrderByWithRelationInput | AgeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgeGroups.
     */
    cursor?: AgeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgeGroups.
     */
    distinct?: AgeGroupScalarFieldEnum | AgeGroupScalarFieldEnum[]
  }

  /**
   * AgeGroup findMany
   */
  export type AgeGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * Filter, which AgeGroups to fetch.
     */
    where?: AgeGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgeGroups to fetch.
     */
    orderBy?: AgeGroupOrderByWithRelationInput | AgeGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgeGroups.
     */
    cursor?: AgeGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgeGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgeGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgeGroups.
     */
    distinct?: AgeGroupScalarFieldEnum | AgeGroupScalarFieldEnum[]
  }

  /**
   * AgeGroup create
   */
  export type AgeGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * The data needed to create a AgeGroup.
     */
    data: XOR<AgeGroupCreateInput, AgeGroupUncheckedCreateInput>
  }

  /**
   * AgeGroup createMany
   */
  export type AgeGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgeGroups.
     */
    data: AgeGroupCreateManyInput | AgeGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgeGroup createManyAndReturn
   */
  export type AgeGroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * The data used to create many AgeGroups.
     */
    data: AgeGroupCreateManyInput | AgeGroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgeGroup update
   */
  export type AgeGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * The data needed to update a AgeGroup.
     */
    data: XOR<AgeGroupUpdateInput, AgeGroupUncheckedUpdateInput>
    /**
     * Choose, which AgeGroup to update.
     */
    where: AgeGroupWhereUniqueInput
  }

  /**
   * AgeGroup updateMany
   */
  export type AgeGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgeGroups.
     */
    data: XOR<AgeGroupUpdateManyMutationInput, AgeGroupUncheckedUpdateManyInput>
    /**
     * Filter which AgeGroups to update
     */
    where?: AgeGroupWhereInput
    /**
     * Limit how many AgeGroups to update.
     */
    limit?: number
  }

  /**
   * AgeGroup updateManyAndReturn
   */
  export type AgeGroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * The data used to update AgeGroups.
     */
    data: XOR<AgeGroupUpdateManyMutationInput, AgeGroupUncheckedUpdateManyInput>
    /**
     * Filter which AgeGroups to update
     */
    where?: AgeGroupWhereInput
    /**
     * Limit how many AgeGroups to update.
     */
    limit?: number
  }

  /**
   * AgeGroup upsert
   */
  export type AgeGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * The filter to search for the AgeGroup to update in case it exists.
     */
    where: AgeGroupWhereUniqueInput
    /**
     * In case the AgeGroup found by the `where` argument doesn't exist, create a new AgeGroup with this data.
     */
    create: XOR<AgeGroupCreateInput, AgeGroupUncheckedCreateInput>
    /**
     * In case the AgeGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgeGroupUpdateInput, AgeGroupUncheckedUpdateInput>
  }

  /**
   * AgeGroup delete
   */
  export type AgeGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
    /**
     * Filter which AgeGroup to delete.
     */
    where: AgeGroupWhereUniqueInput
  }

  /**
   * AgeGroup deleteMany
   */
  export type AgeGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgeGroups to delete
     */
    where?: AgeGroupWhereInput
    /**
     * Limit how many AgeGroups to delete.
     */
    limit?: number
  }

  /**
   * AgeGroup without action
   */
  export type AgeGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgeGroup
     */
    select?: AgeGroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgeGroup
     */
    omit?: AgeGroupOmit<ExtArgs> | null
  }


  /**
   * Model Award
   */

  export type AggregateAward = {
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  export type AwardAvgAggregateOutputType = {
    order: number | null
  }

  export type AwardSumAggregateOutputType = {
    order: number | null
  }

  export type AwardMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    icon: string | null
    title: string | null
    description: string | null
    recipient: string | null
    season: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwardMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    icon: string | null
    title: string | null
    description: string | null
    recipient: string | null
    season: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AwardCountAggregateOutputType = {
    id: number
    order: number
    published: number
    icon: number
    title: number
    description: number
    recipient: number
    season: number
    photoSrc: number
    photoAlt: number
    photoConsent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AwardAvgAggregateInputType = {
    order?: true
  }

  export type AwardSumAggregateInputType = {
    order?: true
  }

  export type AwardMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    icon?: true
    title?: true
    description?: true
    recipient?: true
    season?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwardMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    icon?: true
    title?: true
    description?: true
    recipient?: true
    season?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AwardCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    icon?: true
    title?: true
    description?: true
    recipient?: true
    season?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AwardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Award to aggregate.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Awards
    **/
    _count?: true | AwardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AwardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AwardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AwardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AwardMaxAggregateInputType
  }

  export type GetAwardAggregateType<T extends AwardAggregateArgs> = {
        [P in keyof T & keyof AggregateAward]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAward[P]>
      : GetScalarType<T[P], AggregateAward[P]>
  }




  export type AwardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AwardWhereInput
    orderBy?: AwardOrderByWithAggregationInput | AwardOrderByWithAggregationInput[]
    by: AwardScalarFieldEnum[] | AwardScalarFieldEnum
    having?: AwardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AwardCountAggregateInputType | true
    _avg?: AwardAvgAggregateInputType
    _sum?: AwardSumAggregateInputType
    _min?: AwardMinAggregateInputType
    _max?: AwardMaxAggregateInputType
  }

  export type AwardGroupByOutputType = {
    id: string
    order: number
    published: boolean
    icon: string
    title: string
    description: string
    recipient: string | null
    season: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean
    createdAt: Date
    updatedAt: Date
    _count: AwardCountAggregateOutputType | null
    _avg: AwardAvgAggregateOutputType | null
    _sum: AwardSumAggregateOutputType | null
    _min: AwardMinAggregateOutputType | null
    _max: AwardMaxAggregateOutputType | null
  }

  type GetAwardGroupByPayload<T extends AwardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AwardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AwardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AwardGroupByOutputType[P]>
            : GetScalarType<T[P], AwardGroupByOutputType[P]>
        }
      >
    >


  export type AwardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    recipient?: boolean
    season?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    recipient?: boolean
    season?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    recipient?: boolean
    season?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["award"]>

  export type AwardSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    recipient?: boolean
    season?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AwardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "icon" | "title" | "description" | "recipient" | "season" | "photoSrc" | "photoAlt" | "photoConsent" | "createdAt" | "updatedAt", ExtArgs["result"]["award"]>

  export type $AwardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Award"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      icon: string
      title: string
      description: string
      recipient: string | null
      season: string | null
      photoSrc: string | null
      photoAlt: string | null
      photoConsent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["award"]>
    composites: {}
  }

  type AwardGetPayload<S extends boolean | null | undefined | AwardDefaultArgs> = $Result.GetResult<Prisma.$AwardPayload, S>

  type AwardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AwardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AwardCountAggregateInputType | true
    }

  export interface AwardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Award'], meta: { name: 'Award' } }
    /**
     * Find zero or one Award that matches the filter.
     * @param {AwardFindUniqueArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AwardFindUniqueArgs>(args: SelectSubset<T, AwardFindUniqueArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Award that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AwardFindUniqueOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AwardFindUniqueOrThrowArgs>(args: SelectSubset<T, AwardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AwardFindFirstArgs>(args?: SelectSubset<T, AwardFindFirstArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Award that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindFirstOrThrowArgs} args - Arguments to find a Award
     * @example
     * // Get one Award
     * const award = await prisma.award.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AwardFindFirstOrThrowArgs>(args?: SelectSubset<T, AwardFindFirstOrThrowArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Awards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Awards
     * const awards = await prisma.award.findMany()
     * 
     * // Get first 10 Awards
     * const awards = await prisma.award.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const awardWithIdOnly = await prisma.award.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AwardFindManyArgs>(args?: SelectSubset<T, AwardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Award.
     * @param {AwardCreateArgs} args - Arguments to create a Award.
     * @example
     * // Create one Award
     * const Award = await prisma.award.create({
     *   data: {
     *     // ... data to create a Award
     *   }
     * })
     * 
     */
    create<T extends AwardCreateArgs>(args: SelectSubset<T, AwardCreateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Awards.
     * @param {AwardCreateManyArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AwardCreateManyArgs>(args?: SelectSubset<T, AwardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Awards and returns the data saved in the database.
     * @param {AwardCreateManyAndReturnArgs} args - Arguments to create many Awards.
     * @example
     * // Create many Awards
     * const award = await prisma.award.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AwardCreateManyAndReturnArgs>(args?: SelectSubset<T, AwardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Award.
     * @param {AwardDeleteArgs} args - Arguments to delete one Award.
     * @example
     * // Delete one Award
     * const Award = await prisma.award.delete({
     *   where: {
     *     // ... filter to delete one Award
     *   }
     * })
     * 
     */
    delete<T extends AwardDeleteArgs>(args: SelectSubset<T, AwardDeleteArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Award.
     * @param {AwardUpdateArgs} args - Arguments to update one Award.
     * @example
     * // Update one Award
     * const award = await prisma.award.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AwardUpdateArgs>(args: SelectSubset<T, AwardUpdateArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Awards.
     * @param {AwardDeleteManyArgs} args - Arguments to filter Awards to delete.
     * @example
     * // Delete a few Awards
     * const { count } = await prisma.award.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AwardDeleteManyArgs>(args?: SelectSubset<T, AwardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AwardUpdateManyArgs>(args: SelectSubset<T, AwardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Awards and returns the data updated in the database.
     * @param {AwardUpdateManyAndReturnArgs} args - Arguments to update many Awards.
     * @example
     * // Update many Awards
     * const award = await prisma.award.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Awards and only return the `id`
     * const awardWithIdOnly = await prisma.award.updateManyAndReturn({
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
    updateManyAndReturn<T extends AwardUpdateManyAndReturnArgs>(args: SelectSubset<T, AwardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Award.
     * @param {AwardUpsertArgs} args - Arguments to update or create a Award.
     * @example
     * // Update or create a Award
     * const award = await prisma.award.upsert({
     *   create: {
     *     // ... data to create a Award
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Award we want to update
     *   }
     * })
     */
    upsert<T extends AwardUpsertArgs>(args: SelectSubset<T, AwardUpsertArgs<ExtArgs>>): Prisma__AwardClient<$Result.GetResult<Prisma.$AwardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Awards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardCountArgs} args - Arguments to filter Awards to count.
     * @example
     * // Count the number of Awards
     * const count = await prisma.award.count({
     *   where: {
     *     // ... the filter for the Awards we want to count
     *   }
     * })
    **/
    count<T extends AwardCountArgs>(
      args?: Subset<T, AwardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AwardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AwardAggregateArgs>(args: Subset<T, AwardAggregateArgs>): Prisma.PrismaPromise<GetAwardAggregateType<T>>

    /**
     * Group by Award.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AwardGroupByArgs} args - Group by arguments.
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
      T extends AwardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AwardGroupByArgs['orderBy'] }
        : { orderBy?: AwardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AwardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAwardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Award model
   */
  readonly fields: AwardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Award.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AwardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Award model
   */
  interface AwardFieldRefs {
    readonly id: FieldRef<"Award", 'String'>
    readonly order: FieldRef<"Award", 'Int'>
    readonly published: FieldRef<"Award", 'Boolean'>
    readonly icon: FieldRef<"Award", 'String'>
    readonly title: FieldRef<"Award", 'String'>
    readonly description: FieldRef<"Award", 'String'>
    readonly recipient: FieldRef<"Award", 'String'>
    readonly season: FieldRef<"Award", 'String'>
    readonly photoSrc: FieldRef<"Award", 'String'>
    readonly photoAlt: FieldRef<"Award", 'String'>
    readonly photoConsent: FieldRef<"Award", 'Boolean'>
    readonly createdAt: FieldRef<"Award", 'DateTime'>
    readonly updatedAt: FieldRef<"Award", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Award findUnique
   */
  export type AwardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findUniqueOrThrow
   */
  export type AwardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award findFirst
   */
  export type AwardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findFirstOrThrow
   */
  export type AwardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Award to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award findMany
   */
  export type AwardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter, which Awards to fetch.
     */
    where?: AwardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Awards to fetch.
     */
    orderBy?: AwardOrderByWithRelationInput | AwardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Awards.
     */
    cursor?: AwardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Awards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Awards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Awards.
     */
    distinct?: AwardScalarFieldEnum | AwardScalarFieldEnum[]
  }

  /**
   * Award create
   */
  export type AwardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data needed to create a Award.
     */
    data: XOR<AwardCreateInput, AwardUncheckedCreateInput>
  }

  /**
   * Award createMany
   */
  export type AwardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award createManyAndReturn
   */
  export type AwardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to create many Awards.
     */
    data: AwardCreateManyInput | AwardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Award update
   */
  export type AwardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data needed to update a Award.
     */
    data: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
    /**
     * Choose, which Award to update.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award updateMany
   */
  export type AwardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award updateManyAndReturn
   */
  export type AwardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The data used to update Awards.
     */
    data: XOR<AwardUpdateManyMutationInput, AwardUncheckedUpdateManyInput>
    /**
     * Filter which Awards to update
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to update.
     */
    limit?: number
  }

  /**
   * Award upsert
   */
  export type AwardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * The filter to search for the Award to update in case it exists.
     */
    where: AwardWhereUniqueInput
    /**
     * In case the Award found by the `where` argument doesn't exist, create a new Award with this data.
     */
    create: XOR<AwardCreateInput, AwardUncheckedCreateInput>
    /**
     * In case the Award was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AwardUpdateInput, AwardUncheckedUpdateInput>
  }

  /**
   * Award delete
   */
  export type AwardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
    /**
     * Filter which Award to delete.
     */
    where: AwardWhereUniqueInput
  }

  /**
   * Award deleteMany
   */
  export type AwardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Awards to delete
     */
    where?: AwardWhereInput
    /**
     * Limit how many Awards to delete.
     */
    limit?: number
  }

  /**
   * Award without action
   */
  export type AwardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Award
     */
    select?: AwardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Award
     */
    omit?: AwardOmit<ExtArgs> | null
  }


  /**
   * Model Sponsor
   */

  export type AggregateSponsor = {
    _count: SponsorCountAggregateOutputType | null
    _avg: SponsorAvgAggregateOutputType | null
    _sum: SponsorSumAggregateOutputType | null
    _min: SponsorMinAggregateOutputType | null
    _max: SponsorMaxAggregateOutputType | null
  }

  export type SponsorAvgAggregateOutputType = {
    order: number | null
    contributed: number | null
  }

  export type SponsorSumAggregateOutputType = {
    order: number | null
    contributed: number | null
  }

  export type SponsorMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    name: string | null
    tier: string | null
    description: string | null
    logoSrc: string | null
    logoAlt: string | null
    website: string | null
    contributed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    name: string | null
    tier: string | null
    description: string | null
    logoSrc: string | null
    logoAlt: string | null
    website: string | null
    contributed: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SponsorCountAggregateOutputType = {
    id: number
    order: number
    published: number
    name: number
    tier: number
    description: number
    logoSrc: number
    logoAlt: number
    website: number
    contributed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SponsorAvgAggregateInputType = {
    order?: true
    contributed?: true
  }

  export type SponsorSumAggregateInputType = {
    order?: true
    contributed?: true
  }

  export type SponsorMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    tier?: true
    description?: true
    logoSrc?: true
    logoAlt?: true
    website?: true
    contributed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SponsorMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    tier?: true
    description?: true
    logoSrc?: true
    logoAlt?: true
    website?: true
    contributed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SponsorCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    tier?: true
    description?: true
    logoSrc?: true
    logoAlt?: true
    website?: true
    contributed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SponsorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsor to aggregate.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sponsors
    **/
    _count?: true | SponsorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SponsorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SponsorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SponsorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SponsorMaxAggregateInputType
  }

  export type GetSponsorAggregateType<T extends SponsorAggregateArgs> = {
        [P in keyof T & keyof AggregateSponsor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSponsor[P]>
      : GetScalarType<T[P], AggregateSponsor[P]>
  }




  export type SponsorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SponsorWhereInput
    orderBy?: SponsorOrderByWithAggregationInput | SponsorOrderByWithAggregationInput[]
    by: SponsorScalarFieldEnum[] | SponsorScalarFieldEnum
    having?: SponsorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SponsorCountAggregateInputType | true
    _avg?: SponsorAvgAggregateInputType
    _sum?: SponsorSumAggregateInputType
    _min?: SponsorMinAggregateInputType
    _max?: SponsorMaxAggregateInputType
  }

  export type SponsorGroupByOutputType = {
    id: string
    order: number
    published: boolean
    name: string
    tier: string
    description: string
    logoSrc: string | null
    logoAlt: string | null
    website: string | null
    contributed: number | null
    createdAt: Date
    updatedAt: Date
    _count: SponsorCountAggregateOutputType | null
    _avg: SponsorAvgAggregateOutputType | null
    _sum: SponsorSumAggregateOutputType | null
    _min: SponsorMinAggregateOutputType | null
    _max: SponsorMaxAggregateOutputType | null
  }

  type GetSponsorGroupByPayload<T extends SponsorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SponsorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SponsorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SponsorGroupByOutputType[P]>
            : GetScalarType<T[P], SponsorGroupByOutputType[P]>
        }
      >
    >


  export type SponsorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    tier?: boolean
    description?: boolean
    logoSrc?: boolean
    logoAlt?: boolean
    website?: boolean
    contributed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sponsor"]>

  export type SponsorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    tier?: boolean
    description?: boolean
    logoSrc?: boolean
    logoAlt?: boolean
    website?: boolean
    contributed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sponsor"]>

  export type SponsorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    tier?: boolean
    description?: boolean
    logoSrc?: boolean
    logoAlt?: boolean
    website?: boolean
    contributed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sponsor"]>

  export type SponsorSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    tier?: boolean
    description?: boolean
    logoSrc?: boolean
    logoAlt?: boolean
    website?: boolean
    contributed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SponsorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "name" | "tier" | "description" | "logoSrc" | "logoAlt" | "website" | "contributed" | "createdAt" | "updatedAt", ExtArgs["result"]["sponsor"]>

  export type $SponsorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sponsor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      name: string
      tier: string
      description: string
      logoSrc: string | null
      logoAlt: string | null
      website: string | null
      contributed: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sponsor"]>
    composites: {}
  }

  type SponsorGetPayload<S extends boolean | null | undefined | SponsorDefaultArgs> = $Result.GetResult<Prisma.$SponsorPayload, S>

  type SponsorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SponsorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SponsorCountAggregateInputType | true
    }

  export interface SponsorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sponsor'], meta: { name: 'Sponsor' } }
    /**
     * Find zero or one Sponsor that matches the filter.
     * @param {SponsorFindUniqueArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SponsorFindUniqueArgs>(args: SelectSubset<T, SponsorFindUniqueArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sponsor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SponsorFindUniqueOrThrowArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SponsorFindUniqueOrThrowArgs>(args: SelectSubset<T, SponsorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindFirstArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SponsorFindFirstArgs>(args?: SelectSubset<T, SponsorFindFirstArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sponsor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindFirstOrThrowArgs} args - Arguments to find a Sponsor
     * @example
     * // Get one Sponsor
     * const sponsor = await prisma.sponsor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SponsorFindFirstOrThrowArgs>(args?: SelectSubset<T, SponsorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sponsors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sponsors
     * const sponsors = await prisma.sponsor.findMany()
     * 
     * // Get first 10 Sponsors
     * const sponsors = await prisma.sponsor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sponsorWithIdOnly = await prisma.sponsor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SponsorFindManyArgs>(args?: SelectSubset<T, SponsorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sponsor.
     * @param {SponsorCreateArgs} args - Arguments to create a Sponsor.
     * @example
     * // Create one Sponsor
     * const Sponsor = await prisma.sponsor.create({
     *   data: {
     *     // ... data to create a Sponsor
     *   }
     * })
     * 
     */
    create<T extends SponsorCreateArgs>(args: SelectSubset<T, SponsorCreateArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sponsors.
     * @param {SponsorCreateManyArgs} args - Arguments to create many Sponsors.
     * @example
     * // Create many Sponsors
     * const sponsor = await prisma.sponsor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SponsorCreateManyArgs>(args?: SelectSubset<T, SponsorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sponsors and returns the data saved in the database.
     * @param {SponsorCreateManyAndReturnArgs} args - Arguments to create many Sponsors.
     * @example
     * // Create many Sponsors
     * const sponsor = await prisma.sponsor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sponsors and only return the `id`
     * const sponsorWithIdOnly = await prisma.sponsor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SponsorCreateManyAndReturnArgs>(args?: SelectSubset<T, SponsorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sponsor.
     * @param {SponsorDeleteArgs} args - Arguments to delete one Sponsor.
     * @example
     * // Delete one Sponsor
     * const Sponsor = await prisma.sponsor.delete({
     *   where: {
     *     // ... filter to delete one Sponsor
     *   }
     * })
     * 
     */
    delete<T extends SponsorDeleteArgs>(args: SelectSubset<T, SponsorDeleteArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sponsor.
     * @param {SponsorUpdateArgs} args - Arguments to update one Sponsor.
     * @example
     * // Update one Sponsor
     * const sponsor = await prisma.sponsor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SponsorUpdateArgs>(args: SelectSubset<T, SponsorUpdateArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sponsors.
     * @param {SponsorDeleteManyArgs} args - Arguments to filter Sponsors to delete.
     * @example
     * // Delete a few Sponsors
     * const { count } = await prisma.sponsor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SponsorDeleteManyArgs>(args?: SelectSubset<T, SponsorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sponsors
     * const sponsor = await prisma.sponsor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SponsorUpdateManyArgs>(args: SelectSubset<T, SponsorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sponsors and returns the data updated in the database.
     * @param {SponsorUpdateManyAndReturnArgs} args - Arguments to update many Sponsors.
     * @example
     * // Update many Sponsors
     * const sponsor = await prisma.sponsor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sponsors and only return the `id`
     * const sponsorWithIdOnly = await prisma.sponsor.updateManyAndReturn({
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
    updateManyAndReturn<T extends SponsorUpdateManyAndReturnArgs>(args: SelectSubset<T, SponsorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sponsor.
     * @param {SponsorUpsertArgs} args - Arguments to update or create a Sponsor.
     * @example
     * // Update or create a Sponsor
     * const sponsor = await prisma.sponsor.upsert({
     *   create: {
     *     // ... data to create a Sponsor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sponsor we want to update
     *   }
     * })
     */
    upsert<T extends SponsorUpsertArgs>(args: SelectSubset<T, SponsorUpsertArgs<ExtArgs>>): Prisma__SponsorClient<$Result.GetResult<Prisma.$SponsorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sponsors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorCountArgs} args - Arguments to filter Sponsors to count.
     * @example
     * // Count the number of Sponsors
     * const count = await prisma.sponsor.count({
     *   where: {
     *     // ... the filter for the Sponsors we want to count
     *   }
     * })
    **/
    count<T extends SponsorCountArgs>(
      args?: Subset<T, SponsorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SponsorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SponsorAggregateArgs>(args: Subset<T, SponsorAggregateArgs>): Prisma.PrismaPromise<GetSponsorAggregateType<T>>

    /**
     * Group by Sponsor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SponsorGroupByArgs} args - Group by arguments.
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
      T extends SponsorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SponsorGroupByArgs['orderBy'] }
        : { orderBy?: SponsorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SponsorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSponsorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sponsor model
   */
  readonly fields: SponsorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sponsor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SponsorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Sponsor model
   */
  interface SponsorFieldRefs {
    readonly id: FieldRef<"Sponsor", 'String'>
    readonly order: FieldRef<"Sponsor", 'Int'>
    readonly published: FieldRef<"Sponsor", 'Boolean'>
    readonly name: FieldRef<"Sponsor", 'String'>
    readonly tier: FieldRef<"Sponsor", 'String'>
    readonly description: FieldRef<"Sponsor", 'String'>
    readonly logoSrc: FieldRef<"Sponsor", 'String'>
    readonly logoAlt: FieldRef<"Sponsor", 'String'>
    readonly website: FieldRef<"Sponsor", 'String'>
    readonly contributed: FieldRef<"Sponsor", 'Float'>
    readonly createdAt: FieldRef<"Sponsor", 'DateTime'>
    readonly updatedAt: FieldRef<"Sponsor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sponsor findUnique
   */
  export type SponsorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor findUniqueOrThrow
   */
  export type SponsorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor findFirst
   */
  export type SponsorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor findFirstOrThrow
   */
  export type SponsorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsor to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor findMany
   */
  export type SponsorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter, which Sponsors to fetch.
     */
    where?: SponsorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sponsors to fetch.
     */
    orderBy?: SponsorOrderByWithRelationInput | SponsorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sponsors.
     */
    cursor?: SponsorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sponsors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sponsors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sponsors.
     */
    distinct?: SponsorScalarFieldEnum | SponsorScalarFieldEnum[]
  }

  /**
   * Sponsor create
   */
  export type SponsorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data needed to create a Sponsor.
     */
    data: XOR<SponsorCreateInput, SponsorUncheckedCreateInput>
  }

  /**
   * Sponsor createMany
   */
  export type SponsorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sponsors.
     */
    data: SponsorCreateManyInput | SponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sponsor createManyAndReturn
   */
  export type SponsorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data used to create many Sponsors.
     */
    data: SponsorCreateManyInput | SponsorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sponsor update
   */
  export type SponsorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data needed to update a Sponsor.
     */
    data: XOR<SponsorUpdateInput, SponsorUncheckedUpdateInput>
    /**
     * Choose, which Sponsor to update.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor updateMany
   */
  export type SponsorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sponsors.
     */
    data: XOR<SponsorUpdateManyMutationInput, SponsorUncheckedUpdateManyInput>
    /**
     * Filter which Sponsors to update
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to update.
     */
    limit?: number
  }

  /**
   * Sponsor updateManyAndReturn
   */
  export type SponsorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The data used to update Sponsors.
     */
    data: XOR<SponsorUpdateManyMutationInput, SponsorUncheckedUpdateManyInput>
    /**
     * Filter which Sponsors to update
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to update.
     */
    limit?: number
  }

  /**
   * Sponsor upsert
   */
  export type SponsorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * The filter to search for the Sponsor to update in case it exists.
     */
    where: SponsorWhereUniqueInput
    /**
     * In case the Sponsor found by the `where` argument doesn't exist, create a new Sponsor with this data.
     */
    create: XOR<SponsorCreateInput, SponsorUncheckedCreateInput>
    /**
     * In case the Sponsor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SponsorUpdateInput, SponsorUncheckedUpdateInput>
  }

  /**
   * Sponsor delete
   */
  export type SponsorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
    /**
     * Filter which Sponsor to delete.
     */
    where: SponsorWhereUniqueInput
  }

  /**
   * Sponsor deleteMany
   */
  export type SponsorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sponsors to delete
     */
    where?: SponsorWhereInput
    /**
     * Limit how many Sponsors to delete.
     */
    limit?: number
  }

  /**
   * Sponsor without action
   */
  export type SponsorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sponsor
     */
    select?: SponsorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sponsor
     */
    omit?: SponsorOmit<ExtArgs> | null
  }


  /**
   * Model Fund
   */

  export type AggregateFund = {
    _count: FundCountAggregateOutputType | null
    _avg: FundAvgAggregateOutputType | null
    _sum: FundSumAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  export type FundAvgAggregateOutputType = {
    order: number | null
    goal: number | null
    raised: number | null
  }

  export type FundSumAggregateOutputType = {
    order: number | null
    goal: number | null
    raised: number | null
  }

  export type FundMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    name: string | null
    icon: string | null
    goal: number | null
    raised: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    name: string | null
    icon: string | null
    goal: number | null
    raised: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FundCountAggregateOutputType = {
    id: number
    order: number
    published: number
    name: number
    icon: number
    goal: number
    raised: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FundAvgAggregateInputType = {
    order?: true
    goal?: true
    raised?: true
  }

  export type FundSumAggregateInputType = {
    order?: true
    goal?: true
    raised?: true
  }

  export type FundMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    icon?: true
    goal?: true
    raised?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    icon?: true
    goal?: true
    raised?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FundCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    name?: true
    icon?: true
    goal?: true
    raised?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fund to aggregate.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Funds
    **/
    _count?: true | FundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FundMaxAggregateInputType
  }

  export type GetFundAggregateType<T extends FundAggregateArgs> = {
        [P in keyof T & keyof AggregateFund]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFund[P]>
      : GetScalarType<T[P], AggregateFund[P]>
  }




  export type FundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FundWhereInput
    orderBy?: FundOrderByWithAggregationInput | FundOrderByWithAggregationInput[]
    by: FundScalarFieldEnum[] | FundScalarFieldEnum
    having?: FundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FundCountAggregateInputType | true
    _avg?: FundAvgAggregateInputType
    _sum?: FundSumAggregateInputType
    _min?: FundMinAggregateInputType
    _max?: FundMaxAggregateInputType
  }

  export type FundGroupByOutputType = {
    id: string
    order: number
    published: boolean
    name: string
    icon: string
    goal: number
    raised: number
    description: string
    createdAt: Date
    updatedAt: Date
    _count: FundCountAggregateOutputType | null
    _avg: FundAvgAggregateOutputType | null
    _sum: FundSumAggregateOutputType | null
    _min: FundMinAggregateOutputType | null
    _max: FundMaxAggregateOutputType | null
  }

  type GetFundGroupByPayload<T extends FundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FundGroupByOutputType[P]>
            : GetScalarType<T[P], FundGroupByOutputType[P]>
        }
      >
    >


  export type FundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    icon?: boolean
    goal?: boolean
    raised?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fund"]>

  export type FundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    icon?: boolean
    goal?: boolean
    raised?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fund"]>

  export type FundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    icon?: boolean
    goal?: boolean
    raised?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fund"]>

  export type FundSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    name?: boolean
    icon?: boolean
    goal?: boolean
    raised?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "name" | "icon" | "goal" | "raised" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["fund"]>

  export type $FundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fund"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      name: string
      icon: string
      goal: number
      raised: number
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fund"]>
    composites: {}
  }

  type FundGetPayload<S extends boolean | null | undefined | FundDefaultArgs> = $Result.GetResult<Prisma.$FundPayload, S>

  type FundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FundCountAggregateInputType | true
    }

  export interface FundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fund'], meta: { name: 'Fund' } }
    /**
     * Find zero or one Fund that matches the filter.
     * @param {FundFindUniqueArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FundFindUniqueArgs>(args: SelectSubset<T, FundFindUniqueArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fund that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FundFindUniqueOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FundFindUniqueOrThrowArgs>(args: SelectSubset<T, FundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fund that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FundFindFirstArgs>(args?: SelectSubset<T, FundFindFirstArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fund that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindFirstOrThrowArgs} args - Arguments to find a Fund
     * @example
     * // Get one Fund
     * const fund = await prisma.fund.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FundFindFirstOrThrowArgs>(args?: SelectSubset<T, FundFindFirstOrThrowArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Funds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Funds
     * const funds = await prisma.fund.findMany()
     * 
     * // Get first 10 Funds
     * const funds = await prisma.fund.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fundWithIdOnly = await prisma.fund.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FundFindManyArgs>(args?: SelectSubset<T, FundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fund.
     * @param {FundCreateArgs} args - Arguments to create a Fund.
     * @example
     * // Create one Fund
     * const Fund = await prisma.fund.create({
     *   data: {
     *     // ... data to create a Fund
     *   }
     * })
     * 
     */
    create<T extends FundCreateArgs>(args: SelectSubset<T, FundCreateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Funds.
     * @param {FundCreateManyArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FundCreateManyArgs>(args?: SelectSubset<T, FundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Funds and returns the data saved in the database.
     * @param {FundCreateManyAndReturnArgs} args - Arguments to create many Funds.
     * @example
     * // Create many Funds
     * const fund = await prisma.fund.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Funds and only return the `id`
     * const fundWithIdOnly = await prisma.fund.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FundCreateManyAndReturnArgs>(args?: SelectSubset<T, FundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fund.
     * @param {FundDeleteArgs} args - Arguments to delete one Fund.
     * @example
     * // Delete one Fund
     * const Fund = await prisma.fund.delete({
     *   where: {
     *     // ... filter to delete one Fund
     *   }
     * })
     * 
     */
    delete<T extends FundDeleteArgs>(args: SelectSubset<T, FundDeleteArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fund.
     * @param {FundUpdateArgs} args - Arguments to update one Fund.
     * @example
     * // Update one Fund
     * const fund = await prisma.fund.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FundUpdateArgs>(args: SelectSubset<T, FundUpdateArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Funds.
     * @param {FundDeleteManyArgs} args - Arguments to filter Funds to delete.
     * @example
     * // Delete a few Funds
     * const { count } = await prisma.fund.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FundDeleteManyArgs>(args?: SelectSubset<T, FundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FundUpdateManyArgs>(args: SelectSubset<T, FundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Funds and returns the data updated in the database.
     * @param {FundUpdateManyAndReturnArgs} args - Arguments to update many Funds.
     * @example
     * // Update many Funds
     * const fund = await prisma.fund.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Funds and only return the `id`
     * const fundWithIdOnly = await prisma.fund.updateManyAndReturn({
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
    updateManyAndReturn<T extends FundUpdateManyAndReturnArgs>(args: SelectSubset<T, FundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fund.
     * @param {FundUpsertArgs} args - Arguments to update or create a Fund.
     * @example
     * // Update or create a Fund
     * const fund = await prisma.fund.upsert({
     *   create: {
     *     // ... data to create a Fund
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fund we want to update
     *   }
     * })
     */
    upsert<T extends FundUpsertArgs>(args: SelectSubset<T, FundUpsertArgs<ExtArgs>>): Prisma__FundClient<$Result.GetResult<Prisma.$FundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Funds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundCountArgs} args - Arguments to filter Funds to count.
     * @example
     * // Count the number of Funds
     * const count = await prisma.fund.count({
     *   where: {
     *     // ... the filter for the Funds we want to count
     *   }
     * })
    **/
    count<T extends FundCountArgs>(
      args?: Subset<T, FundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FundAggregateArgs>(args: Subset<T, FundAggregateArgs>): Prisma.PrismaPromise<GetFundAggregateType<T>>

    /**
     * Group by Fund.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FundGroupByArgs} args - Group by arguments.
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
      T extends FundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FundGroupByArgs['orderBy'] }
        : { orderBy?: FundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fund model
   */
  readonly fields: FundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fund.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Fund model
   */
  interface FundFieldRefs {
    readonly id: FieldRef<"Fund", 'String'>
    readonly order: FieldRef<"Fund", 'Int'>
    readonly published: FieldRef<"Fund", 'Boolean'>
    readonly name: FieldRef<"Fund", 'String'>
    readonly icon: FieldRef<"Fund", 'String'>
    readonly goal: FieldRef<"Fund", 'Float'>
    readonly raised: FieldRef<"Fund", 'Float'>
    readonly description: FieldRef<"Fund", 'String'>
    readonly createdAt: FieldRef<"Fund", 'DateTime'>
    readonly updatedAt: FieldRef<"Fund", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fund findUnique
   */
  export type FundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findUniqueOrThrow
   */
  export type FundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund findFirst
   */
  export type FundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findFirstOrThrow
   */
  export type FundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Filter, which Fund to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund findMany
   */
  export type FundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Filter, which Funds to fetch.
     */
    where?: FundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Funds to fetch.
     */
    orderBy?: FundOrderByWithRelationInput | FundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Funds.
     */
    cursor?: FundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Funds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Funds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Funds.
     */
    distinct?: FundScalarFieldEnum | FundScalarFieldEnum[]
  }

  /**
   * Fund create
   */
  export type FundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data needed to create a Fund.
     */
    data: XOR<FundCreateInput, FundUncheckedCreateInput>
  }

  /**
   * Fund createMany
   */
  export type FundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fund createManyAndReturn
   */
  export type FundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data used to create many Funds.
     */
    data: FundCreateManyInput | FundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fund update
   */
  export type FundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data needed to update a Fund.
     */
    data: XOR<FundUpdateInput, FundUncheckedUpdateInput>
    /**
     * Choose, which Fund to update.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund updateMany
   */
  export type FundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to update.
     */
    limit?: number
  }

  /**
   * Fund updateManyAndReturn
   */
  export type FundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The data used to update Funds.
     */
    data: XOR<FundUpdateManyMutationInput, FundUncheckedUpdateManyInput>
    /**
     * Filter which Funds to update
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to update.
     */
    limit?: number
  }

  /**
   * Fund upsert
   */
  export type FundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * The filter to search for the Fund to update in case it exists.
     */
    where: FundWhereUniqueInput
    /**
     * In case the Fund found by the `where` argument doesn't exist, create a new Fund with this data.
     */
    create: XOR<FundCreateInput, FundUncheckedCreateInput>
    /**
     * In case the Fund was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FundUpdateInput, FundUncheckedUpdateInput>
  }

  /**
   * Fund delete
   */
  export type FundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
    /**
     * Filter which Fund to delete.
     */
    where: FundWhereUniqueInput
  }

  /**
   * Fund deleteMany
   */
  export type FundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Funds to delete
     */
    where?: FundWhereInput
    /**
     * Limit how many Funds to delete.
     */
    limit?: number
  }

  /**
   * Fund without action
   */
  export type FundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fund
     */
    select?: FundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fund
     */
    omit?: FundOmit<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    order: number | null
  }

  export type NewsSumAggregateOutputType = {
    order: number | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    title: string | null
    excerpt: string | null
    date: Date | null
    category: string | null
    photoSrc: string | null
    photoAlt: string | null
    href: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    title: string | null
    excerpt: string | null
    date: Date | null
    category: string | null
    photoSrc: string | null
    photoAlt: string | null
    href: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    order: number
    published: number
    title: number
    excerpt: number
    date: number
    category: number
    photoSrc: number
    photoAlt: number
    href: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    order?: true
  }

  export type NewsSumAggregateInputType = {
    order?: true
  }

  export type NewsMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    title?: true
    excerpt?: true
    date?: true
    category?: true
    photoSrc?: true
    photoAlt?: true
    href?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    title?: true
    excerpt?: true
    date?: true
    category?: true
    photoSrc?: true
    photoAlt?: true
    href?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    title?: true
    excerpt?: true
    date?: true
    category?: true
    photoSrc?: true
    photoAlt?: true
    href?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    order: number
    published: boolean
    title: string
    excerpt: string
    date: Date
    category: string
    photoSrc: string | null
    photoAlt: string | null
    href: string | null
    createdAt: Date
    updatedAt: Date
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    excerpt?: boolean
    date?: boolean
    category?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    excerpt?: boolean
    date?: boolean
    category?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    excerpt?: boolean
    date?: boolean
    category?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    excerpt?: boolean
    date?: boolean
    category?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    href?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "title" | "excerpt" | "date" | "category" | "photoSrc" | "photoAlt" | "href" | "createdAt" | "updatedAt", ExtArgs["result"]["news"]>

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      title: string
      excerpt: string
      date: Date
      category: string
      photoSrc: string | null
      photoAlt: string | null
      href: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly order: FieldRef<"News", 'Int'>
    readonly published: FieldRef<"News", 'Boolean'>
    readonly title: FieldRef<"News", 'String'>
    readonly excerpt: FieldRef<"News", 'String'>
    readonly date: FieldRef<"News", 'DateTime'>
    readonly category: FieldRef<"News", 'String'>
    readonly photoSrc: FieldRef<"News", 'String'>
    readonly photoAlt: FieldRef<"News", 'String'>
    readonly href: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
  }


  /**
   * Model SessionStep
   */

  export type AggregateSessionStep = {
    _count: SessionStepCountAggregateOutputType | null
    _avg: SessionStepAvgAggregateOutputType | null
    _sum: SessionStepSumAggregateOutputType | null
    _min: SessionStepMinAggregateOutputType | null
    _max: SessionStepMaxAggregateOutputType | null
  }

  export type SessionStepAvgAggregateOutputType = {
    order: number | null
  }

  export type SessionStepSumAggregateOutputType = {
    order: number | null
  }

  export type SessionStepMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    time: string | null
    title: string | null
    description: string | null
    photoSrc: string | null
    photoAlt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionStepMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    time: string | null
    title: string | null
    description: string | null
    photoSrc: string | null
    photoAlt: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionStepCountAggregateOutputType = {
    id: number
    order: number
    published: number
    time: number
    title: number
    description: number
    photoSrc: number
    photoAlt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionStepAvgAggregateInputType = {
    order?: true
  }

  export type SessionStepSumAggregateInputType = {
    order?: true
  }

  export type SessionStepMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    time?: true
    title?: true
    description?: true
    photoSrc?: true
    photoAlt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionStepMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    time?: true
    title?: true
    description?: true
    photoSrc?: true
    photoAlt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionStepCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    time?: true
    title?: true
    description?: true
    photoSrc?: true
    photoAlt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionStepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionStep to aggregate.
     */
    where?: SessionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSteps to fetch.
     */
    orderBy?: SessionStepOrderByWithRelationInput | SessionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionSteps
    **/
    _count?: true | SessionStepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionStepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionStepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionStepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionStepMaxAggregateInputType
  }

  export type GetSessionStepAggregateType<T extends SessionStepAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionStep[P]>
      : GetScalarType<T[P], AggregateSessionStep[P]>
  }




  export type SessionStepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionStepWhereInput
    orderBy?: SessionStepOrderByWithAggregationInput | SessionStepOrderByWithAggregationInput[]
    by: SessionStepScalarFieldEnum[] | SessionStepScalarFieldEnum
    having?: SessionStepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionStepCountAggregateInputType | true
    _avg?: SessionStepAvgAggregateInputType
    _sum?: SessionStepSumAggregateInputType
    _min?: SessionStepMinAggregateInputType
    _max?: SessionStepMaxAggregateInputType
  }

  export type SessionStepGroupByOutputType = {
    id: string
    order: number
    published: boolean
    time: string
    title: string
    description: string
    photoSrc: string | null
    photoAlt: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionStepCountAggregateOutputType | null
    _avg: SessionStepAvgAggregateOutputType | null
    _sum: SessionStepSumAggregateOutputType | null
    _min: SessionStepMinAggregateOutputType | null
    _max: SessionStepMaxAggregateOutputType | null
  }

  type GetSessionStepGroupByPayload<T extends SessionStepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionStepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionStepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionStepGroupByOutputType[P]>
            : GetScalarType<T[P], SessionStepGroupByOutputType[P]>
        }
      >
    >


  export type SessionStepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    time?: boolean
    title?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sessionStep"]>

  export type SessionStepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    time?: boolean
    title?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sessionStep"]>

  export type SessionStepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    time?: boolean
    title?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sessionStep"]>

  export type SessionStepSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    time?: boolean
    title?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionStepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "time" | "title" | "description" | "photoSrc" | "photoAlt" | "createdAt" | "updatedAt", ExtArgs["result"]["sessionStep"]>

  export type $SessionStepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionStep"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      time: string
      title: string
      description: string
      photoSrc: string | null
      photoAlt: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sessionStep"]>
    composites: {}
  }

  type SessionStepGetPayload<S extends boolean | null | undefined | SessionStepDefaultArgs> = $Result.GetResult<Prisma.$SessionStepPayload, S>

  type SessionStepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionStepCountAggregateInputType | true
    }

  export interface SessionStepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionStep'], meta: { name: 'SessionStep' } }
    /**
     * Find zero or one SessionStep that matches the filter.
     * @param {SessionStepFindUniqueArgs} args - Arguments to find a SessionStep
     * @example
     * // Get one SessionStep
     * const sessionStep = await prisma.sessionStep.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionStepFindUniqueArgs>(args: SelectSubset<T, SessionStepFindUniqueArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionStep that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionStepFindUniqueOrThrowArgs} args - Arguments to find a SessionStep
     * @example
     * // Get one SessionStep
     * const sessionStep = await prisma.sessionStep.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionStepFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionStep that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepFindFirstArgs} args - Arguments to find a SessionStep
     * @example
     * // Get one SessionStep
     * const sessionStep = await prisma.sessionStep.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionStepFindFirstArgs>(args?: SelectSubset<T, SessionStepFindFirstArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionStep that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepFindFirstOrThrowArgs} args - Arguments to find a SessionStep
     * @example
     * // Get one SessionStep
     * const sessionStep = await prisma.sessionStep.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionStepFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionStepFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionSteps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionSteps
     * const sessionSteps = await prisma.sessionStep.findMany()
     * 
     * // Get first 10 SessionSteps
     * const sessionSteps = await prisma.sessionStep.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionStepWithIdOnly = await prisma.sessionStep.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionStepFindManyArgs>(args?: SelectSubset<T, SessionStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionStep.
     * @param {SessionStepCreateArgs} args - Arguments to create a SessionStep.
     * @example
     * // Create one SessionStep
     * const SessionStep = await prisma.sessionStep.create({
     *   data: {
     *     // ... data to create a SessionStep
     *   }
     * })
     * 
     */
    create<T extends SessionStepCreateArgs>(args: SelectSubset<T, SessionStepCreateArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionSteps.
     * @param {SessionStepCreateManyArgs} args - Arguments to create many SessionSteps.
     * @example
     * // Create many SessionSteps
     * const sessionStep = await prisma.sessionStep.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionStepCreateManyArgs>(args?: SelectSubset<T, SessionStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionSteps and returns the data saved in the database.
     * @param {SessionStepCreateManyAndReturnArgs} args - Arguments to create many SessionSteps.
     * @example
     * // Create many SessionSteps
     * const sessionStep = await prisma.sessionStep.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionSteps and only return the `id`
     * const sessionStepWithIdOnly = await prisma.sessionStep.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionStepCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionStep.
     * @param {SessionStepDeleteArgs} args - Arguments to delete one SessionStep.
     * @example
     * // Delete one SessionStep
     * const SessionStep = await prisma.sessionStep.delete({
     *   where: {
     *     // ... filter to delete one SessionStep
     *   }
     * })
     * 
     */
    delete<T extends SessionStepDeleteArgs>(args: SelectSubset<T, SessionStepDeleteArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionStep.
     * @param {SessionStepUpdateArgs} args - Arguments to update one SessionStep.
     * @example
     * // Update one SessionStep
     * const sessionStep = await prisma.sessionStep.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionStepUpdateArgs>(args: SelectSubset<T, SessionStepUpdateArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionSteps.
     * @param {SessionStepDeleteManyArgs} args - Arguments to filter SessionSteps to delete.
     * @example
     * // Delete a few SessionSteps
     * const { count } = await prisma.sessionStep.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionStepDeleteManyArgs>(args?: SelectSubset<T, SessionStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionSteps
     * const sessionStep = await prisma.sessionStep.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionStepUpdateManyArgs>(args: SelectSubset<T, SessionStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionSteps and returns the data updated in the database.
     * @param {SessionStepUpdateManyAndReturnArgs} args - Arguments to update many SessionSteps.
     * @example
     * // Update many SessionSteps
     * const sessionStep = await prisma.sessionStep.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionSteps and only return the `id`
     * const sessionStepWithIdOnly = await prisma.sessionStep.updateManyAndReturn({
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
    updateManyAndReturn<T extends SessionStepUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionStep.
     * @param {SessionStepUpsertArgs} args - Arguments to update or create a SessionStep.
     * @example
     * // Update or create a SessionStep
     * const sessionStep = await prisma.sessionStep.upsert({
     *   create: {
     *     // ... data to create a SessionStep
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionStep we want to update
     *   }
     * })
     */
    upsert<T extends SessionStepUpsertArgs>(args: SelectSubset<T, SessionStepUpsertArgs<ExtArgs>>): Prisma__SessionStepClient<$Result.GetResult<Prisma.$SessionStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionSteps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepCountArgs} args - Arguments to filter SessionSteps to count.
     * @example
     * // Count the number of SessionSteps
     * const count = await prisma.sessionStep.count({
     *   where: {
     *     // ... the filter for the SessionSteps we want to count
     *   }
     * })
    **/
    count<T extends SessionStepCountArgs>(
      args?: Subset<T, SessionStepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionStepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionStepAggregateArgs>(args: Subset<T, SessionStepAggregateArgs>): Prisma.PrismaPromise<GetSessionStepAggregateType<T>>

    /**
     * Group by SessionStep.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionStepGroupByArgs} args - Group by arguments.
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
      T extends SessionStepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionStepGroupByArgs['orderBy'] }
        : { orderBy?: SessionStepGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionStep model
   */
  readonly fields: SessionStepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionStep.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionStepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the SessionStep model
   */
  interface SessionStepFieldRefs {
    readonly id: FieldRef<"SessionStep", 'String'>
    readonly order: FieldRef<"SessionStep", 'Int'>
    readonly published: FieldRef<"SessionStep", 'Boolean'>
    readonly time: FieldRef<"SessionStep", 'String'>
    readonly title: FieldRef<"SessionStep", 'String'>
    readonly description: FieldRef<"SessionStep", 'String'>
    readonly photoSrc: FieldRef<"SessionStep", 'String'>
    readonly photoAlt: FieldRef<"SessionStep", 'String'>
    readonly createdAt: FieldRef<"SessionStep", 'DateTime'>
    readonly updatedAt: FieldRef<"SessionStep", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionStep findUnique
   */
  export type SessionStepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * Filter, which SessionStep to fetch.
     */
    where: SessionStepWhereUniqueInput
  }

  /**
   * SessionStep findUniqueOrThrow
   */
  export type SessionStepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * Filter, which SessionStep to fetch.
     */
    where: SessionStepWhereUniqueInput
  }

  /**
   * SessionStep findFirst
   */
  export type SessionStepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * Filter, which SessionStep to fetch.
     */
    where?: SessionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSteps to fetch.
     */
    orderBy?: SessionStepOrderByWithRelationInput | SessionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionSteps.
     */
    cursor?: SessionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionSteps.
     */
    distinct?: SessionStepScalarFieldEnum | SessionStepScalarFieldEnum[]
  }

  /**
   * SessionStep findFirstOrThrow
   */
  export type SessionStepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * Filter, which SessionStep to fetch.
     */
    where?: SessionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSteps to fetch.
     */
    orderBy?: SessionStepOrderByWithRelationInput | SessionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionSteps.
     */
    cursor?: SessionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionSteps.
     */
    distinct?: SessionStepScalarFieldEnum | SessionStepScalarFieldEnum[]
  }

  /**
   * SessionStep findMany
   */
  export type SessionStepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * Filter, which SessionSteps to fetch.
     */
    where?: SessionStepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionSteps to fetch.
     */
    orderBy?: SessionStepOrderByWithRelationInput | SessionStepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionSteps.
     */
    cursor?: SessionStepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionSteps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionSteps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionSteps.
     */
    distinct?: SessionStepScalarFieldEnum | SessionStepScalarFieldEnum[]
  }

  /**
   * SessionStep create
   */
  export type SessionStepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * The data needed to create a SessionStep.
     */
    data: XOR<SessionStepCreateInput, SessionStepUncheckedCreateInput>
  }

  /**
   * SessionStep createMany
   */
  export type SessionStepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionSteps.
     */
    data: SessionStepCreateManyInput | SessionStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionStep createManyAndReturn
   */
  export type SessionStepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * The data used to create many SessionSteps.
     */
    data: SessionStepCreateManyInput | SessionStepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionStep update
   */
  export type SessionStepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * The data needed to update a SessionStep.
     */
    data: XOR<SessionStepUpdateInput, SessionStepUncheckedUpdateInput>
    /**
     * Choose, which SessionStep to update.
     */
    where: SessionStepWhereUniqueInput
  }

  /**
   * SessionStep updateMany
   */
  export type SessionStepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionSteps.
     */
    data: XOR<SessionStepUpdateManyMutationInput, SessionStepUncheckedUpdateManyInput>
    /**
     * Filter which SessionSteps to update
     */
    where?: SessionStepWhereInput
    /**
     * Limit how many SessionSteps to update.
     */
    limit?: number
  }

  /**
   * SessionStep updateManyAndReturn
   */
  export type SessionStepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * The data used to update SessionSteps.
     */
    data: XOR<SessionStepUpdateManyMutationInput, SessionStepUncheckedUpdateManyInput>
    /**
     * Filter which SessionSteps to update
     */
    where?: SessionStepWhereInput
    /**
     * Limit how many SessionSteps to update.
     */
    limit?: number
  }

  /**
   * SessionStep upsert
   */
  export type SessionStepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * The filter to search for the SessionStep to update in case it exists.
     */
    where: SessionStepWhereUniqueInput
    /**
     * In case the SessionStep found by the `where` argument doesn't exist, create a new SessionStep with this data.
     */
    create: XOR<SessionStepCreateInput, SessionStepUncheckedCreateInput>
    /**
     * In case the SessionStep was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionStepUpdateInput, SessionStepUncheckedUpdateInput>
  }

  /**
   * SessionStep delete
   */
  export type SessionStepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
    /**
     * Filter which SessionStep to delete.
     */
    where: SessionStepWhereUniqueInput
  }

  /**
   * SessionStep deleteMany
   */
  export type SessionStepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionSteps to delete
     */
    where?: SessionStepWhereInput
    /**
     * Limit how many SessionSteps to delete.
     */
    limit?: number
  }

  /**
   * SessionStep without action
   */
  export type SessionStepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionStep
     */
    select?: SessionStepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionStep
     */
    omit?: SessionStepOmit<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    order: number | null
  }

  export type AlertSumAggregateOutputType = {
    order: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    message: string | null
    severity: string | null
    linkLabel: string | null
    linkHref: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    message: string | null
    severity: string | null
    linkLabel: string | null
    linkHref: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    order: number
    published: number
    message: number
    severity: number
    linkLabel: number
    linkHref: number
    startsAt: number
    endsAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    order?: true
  }

  export type AlertSumAggregateInputType = {
    order?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    message?: true
    severity?: true
    linkLabel?: true
    linkHref?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    message?: true
    severity?: true
    linkLabel?: true
    linkHref?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    message?: true
    severity?: true
    linkLabel?: true
    linkHref?: true
    startsAt?: true
    endsAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    order: number
    published: boolean
    message: string
    severity: string
    linkLabel: string | null
    linkHref: string | null
    startsAt: Date | null
    endsAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    message?: boolean
    severity?: boolean
    linkLabel?: boolean
    linkHref?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    message?: boolean
    severity?: boolean
    linkLabel?: boolean
    linkHref?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    message?: boolean
    severity?: boolean
    linkLabel?: boolean
    linkHref?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    message?: boolean
    severity?: boolean
    linkLabel?: boolean
    linkHref?: boolean
    startsAt?: boolean
    endsAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "message" | "severity" | "linkLabel" | "linkHref" | "startsAt" | "endsAt" | "createdAt" | "updatedAt", ExtArgs["result"]["alert"]>

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      message: string
      severity: string
      linkLabel: string | null
      linkHref: string | null
      startsAt: Date | null
      endsAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly order: FieldRef<"Alert", 'Int'>
    readonly published: FieldRef<"Alert", 'Boolean'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly severity: FieldRef<"Alert", 'String'>
    readonly linkLabel: FieldRef<"Alert", 'String'>
    readonly linkHref: FieldRef<"Alert", 'String'>
    readonly startsAt: FieldRef<"Alert", 'DateTime'>
    readonly endsAt: FieldRef<"Alert", 'DateTime'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly updatedAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    order: number | null
  }

  export type EventSumAggregateOutputType = {
    order: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    title: string | null
    type: string | null
    start: Date | null
    end: Date | null
    venue: string | null
    address: string | null
    description: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean | null
    result: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    title: string | null
    type: string | null
    start: Date | null
    end: Date | null
    venue: string | null
    address: string | null
    description: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean | null
    result: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    order: number
    published: number
    title: number
    type: number
    start: number
    end: number
    venue: number
    address: number
    description: number
    photoSrc: number
    photoAlt: number
    photoConsent: number
    result: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    order?: true
  }

  export type EventSumAggregateInputType = {
    order?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    title?: true
    type?: true
    start?: true
    end?: true
    venue?: true
    address?: true
    description?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    result?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    title?: true
    type?: true
    start?: true
    end?: true
    venue?: true
    address?: true
    description?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    result?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    title?: true
    type?: true
    start?: true
    end?: true
    venue?: true
    address?: true
    description?: true
    photoSrc?: true
    photoAlt?: true
    photoConsent?: true
    result?: true
    createdAt?: true
    updatedAt?: true
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
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
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
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    order: number
    published: boolean
    title: string
    type: string
    start: Date
    end: Date | null
    venue: string | null
    address: string | null
    description: string | null
    photoSrc: string | null
    photoAlt: string | null
    photoConsent: boolean
    result: string | null
    createdAt: Date
    updatedAt: Date
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
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
    order?: boolean
    published?: boolean
    title?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    venue?: boolean
    address?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    venue?: boolean
    address?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    venue?: boolean
    address?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    title?: boolean
    type?: boolean
    start?: boolean
    end?: boolean
    venue?: boolean
    address?: boolean
    description?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    photoConsent?: boolean
    result?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "title" | "type" | "start" | "end" | "venue" | "address" | "description" | "photoSrc" | "photoAlt" | "photoConsent" | "result" | "createdAt" | "updatedAt", ExtArgs["result"]["event"]>

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      title: string
      type: string
      start: Date
      end: Date | null
      venue: string | null
      address: string | null
      description: string | null
      photoSrc: string | null
      photoAlt: string | null
      photoConsent: boolean
      result: string | null
      createdAt: Date
      updatedAt: Date
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
    readonly order: FieldRef<"Event", 'Int'>
    readonly published: FieldRef<"Event", 'Boolean'>
    readonly title: FieldRef<"Event", 'String'>
    readonly type: FieldRef<"Event", 'String'>
    readonly start: FieldRef<"Event", 'DateTime'>
    readonly end: FieldRef<"Event", 'DateTime'>
    readonly venue: FieldRef<"Event", 'String'>
    readonly address: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly photoSrc: FieldRef<"Event", 'String'>
    readonly photoAlt: FieldRef<"Event", 'String'>
    readonly photoConsent: FieldRef<"Event", 'Boolean'>
    readonly result: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
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
  }


  /**
   * Model Faq
   */

  export type AggregateFaq = {
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  export type FaqAvgAggregateOutputType = {
    order: number | null
  }

  export type FaqSumAggregateOutputType = {
    order: number | null
  }

  export type FaqMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    question: string | null
    answer: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FaqCountAggregateOutputType = {
    id: number
    order: number
    published: number
    question: number
    answer: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FaqAvgAggregateInputType = {
    order?: true
  }

  export type FaqSumAggregateInputType = {
    order?: true
  }

  export type FaqMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FaqCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    question?: true
    answer?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FaqAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faq to aggregate.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faqs
    **/
    _count?: true | FaqCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaqAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaqSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaqMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaqMaxAggregateInputType
  }

  export type GetFaqAggregateType<T extends FaqAggregateArgs> = {
        [P in keyof T & keyof AggregateFaq]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFaq[P]>
      : GetScalarType<T[P], AggregateFaq[P]>
  }




  export type FaqGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FaqWhereInput
    orderBy?: FaqOrderByWithAggregationInput | FaqOrderByWithAggregationInput[]
    by: FaqScalarFieldEnum[] | FaqScalarFieldEnum
    having?: FaqScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaqCountAggregateInputType | true
    _avg?: FaqAvgAggregateInputType
    _sum?: FaqSumAggregateInputType
    _min?: FaqMinAggregateInputType
    _max?: FaqMaxAggregateInputType
  }

  export type FaqGroupByOutputType = {
    id: string
    order: number
    published: boolean
    question: string
    answer: string
    createdAt: Date
    updatedAt: Date
    _count: FaqCountAggregateOutputType | null
    _avg: FaqAvgAggregateOutputType | null
    _sum: FaqSumAggregateOutputType | null
    _min: FaqMinAggregateOutputType | null
    _max: FaqMaxAggregateOutputType | null
  }

  type GetFaqGroupByPayload<T extends FaqGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaqGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaqGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaqGroupByOutputType[P]>
            : GetScalarType<T[P], FaqGroupByOutputType[P]>
        }
      >
    >


  export type FaqSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["faq"]>

  export type FaqSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    question?: boolean
    answer?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FaqOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "question" | "answer" | "createdAt" | "updatedAt", ExtArgs["result"]["faq"]>

  export type $FaqPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Faq"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      question: string
      answer: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["faq"]>
    composites: {}
  }

  type FaqGetPayload<S extends boolean | null | undefined | FaqDefaultArgs> = $Result.GetResult<Prisma.$FaqPayload, S>

  type FaqCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FaqFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FaqCountAggregateInputType | true
    }

  export interface FaqDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Faq'], meta: { name: 'Faq' } }
    /**
     * Find zero or one Faq that matches the filter.
     * @param {FaqFindUniqueArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FaqFindUniqueArgs>(args: SelectSubset<T, FaqFindUniqueArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Faq that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FaqFindUniqueOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FaqFindUniqueOrThrowArgs>(args: SelectSubset<T, FaqFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FaqFindFirstArgs>(args?: SelectSubset<T, FaqFindFirstArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Faq that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindFirstOrThrowArgs} args - Arguments to find a Faq
     * @example
     * // Get one Faq
     * const faq = await prisma.faq.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FaqFindFirstOrThrowArgs>(args?: SelectSubset<T, FaqFindFirstOrThrowArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Faqs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faqs
     * const faqs = await prisma.faq.findMany()
     * 
     * // Get first 10 Faqs
     * const faqs = await prisma.faq.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faqWithIdOnly = await prisma.faq.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FaqFindManyArgs>(args?: SelectSubset<T, FaqFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Faq.
     * @param {FaqCreateArgs} args - Arguments to create a Faq.
     * @example
     * // Create one Faq
     * const Faq = await prisma.faq.create({
     *   data: {
     *     // ... data to create a Faq
     *   }
     * })
     * 
     */
    create<T extends FaqCreateArgs>(args: SelectSubset<T, FaqCreateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Faqs.
     * @param {FaqCreateManyArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FaqCreateManyArgs>(args?: SelectSubset<T, FaqCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Faqs and returns the data saved in the database.
     * @param {FaqCreateManyAndReturnArgs} args - Arguments to create many Faqs.
     * @example
     * // Create many Faqs
     * const faq = await prisma.faq.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Faqs and only return the `id`
     * const faqWithIdOnly = await prisma.faq.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FaqCreateManyAndReturnArgs>(args?: SelectSubset<T, FaqCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Faq.
     * @param {FaqDeleteArgs} args - Arguments to delete one Faq.
     * @example
     * // Delete one Faq
     * const Faq = await prisma.faq.delete({
     *   where: {
     *     // ... filter to delete one Faq
     *   }
     * })
     * 
     */
    delete<T extends FaqDeleteArgs>(args: SelectSubset<T, FaqDeleteArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Faq.
     * @param {FaqUpdateArgs} args - Arguments to update one Faq.
     * @example
     * // Update one Faq
     * const faq = await prisma.faq.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FaqUpdateArgs>(args: SelectSubset<T, FaqUpdateArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Faqs.
     * @param {FaqDeleteManyArgs} args - Arguments to filter Faqs to delete.
     * @example
     * // Delete a few Faqs
     * const { count } = await prisma.faq.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FaqDeleteManyArgs>(args?: SelectSubset<T, FaqDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FaqUpdateManyArgs>(args: SelectSubset<T, FaqUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faqs and returns the data updated in the database.
     * @param {FaqUpdateManyAndReturnArgs} args - Arguments to update many Faqs.
     * @example
     * // Update many Faqs
     * const faq = await prisma.faq.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Faqs and only return the `id`
     * const faqWithIdOnly = await prisma.faq.updateManyAndReturn({
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
    updateManyAndReturn<T extends FaqUpdateManyAndReturnArgs>(args: SelectSubset<T, FaqUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Faq.
     * @param {FaqUpsertArgs} args - Arguments to update or create a Faq.
     * @example
     * // Update or create a Faq
     * const faq = await prisma.faq.upsert({
     *   create: {
     *     // ... data to create a Faq
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Faq we want to update
     *   }
     * })
     */
    upsert<T extends FaqUpsertArgs>(args: SelectSubset<T, FaqUpsertArgs<ExtArgs>>): Prisma__FaqClient<$Result.GetResult<Prisma.$FaqPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Faqs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqCountArgs} args - Arguments to filter Faqs to count.
     * @example
     * // Count the number of Faqs
     * const count = await prisma.faq.count({
     *   where: {
     *     // ... the filter for the Faqs we want to count
     *   }
     * })
    **/
    count<T extends FaqCountArgs>(
      args?: Subset<T, FaqCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaqCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FaqAggregateArgs>(args: Subset<T, FaqAggregateArgs>): Prisma.PrismaPromise<GetFaqAggregateType<T>>

    /**
     * Group by Faq.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaqGroupByArgs} args - Group by arguments.
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
      T extends FaqGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaqGroupByArgs['orderBy'] }
        : { orderBy?: FaqGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FaqGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaqGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Faq model
   */
  readonly fields: FaqFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Faq.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaqClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Faq model
   */
  interface FaqFieldRefs {
    readonly id: FieldRef<"Faq", 'String'>
    readonly order: FieldRef<"Faq", 'Int'>
    readonly published: FieldRef<"Faq", 'Boolean'>
    readonly question: FieldRef<"Faq", 'String'>
    readonly answer: FieldRef<"Faq", 'String'>
    readonly createdAt: FieldRef<"Faq", 'DateTime'>
    readonly updatedAt: FieldRef<"Faq", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Faq findUnique
   */
  export type FaqFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findUniqueOrThrow
   */
  export type FaqFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq findFirst
   */
  export type FaqFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findFirstOrThrow
   */
  export type FaqFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faq to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq findMany
   */
  export type FaqFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter, which Faqs to fetch.
     */
    where?: FaqWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faqs to fetch.
     */
    orderBy?: FaqOrderByWithRelationInput | FaqOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faqs.
     */
    cursor?: FaqWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faqs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faqs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faqs.
     */
    distinct?: FaqScalarFieldEnum | FaqScalarFieldEnum[]
  }

  /**
   * Faq create
   */
  export type FaqCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to create a Faq.
     */
    data: XOR<FaqCreateInput, FaqUncheckedCreateInput>
  }

  /**
   * Faq createMany
   */
  export type FaqCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq createManyAndReturn
   */
  export type FaqCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to create many Faqs.
     */
    data: FaqCreateManyInput | FaqCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Faq update
   */
  export type FaqUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data needed to update a Faq.
     */
    data: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
    /**
     * Choose, which Faq to update.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq updateMany
   */
  export type FaqUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq updateManyAndReturn
   */
  export type FaqUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The data used to update Faqs.
     */
    data: XOR<FaqUpdateManyMutationInput, FaqUncheckedUpdateManyInput>
    /**
     * Filter which Faqs to update
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to update.
     */
    limit?: number
  }

  /**
   * Faq upsert
   */
  export type FaqUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * The filter to search for the Faq to update in case it exists.
     */
    where: FaqWhereUniqueInput
    /**
     * In case the Faq found by the `where` argument doesn't exist, create a new Faq with this data.
     */
    create: XOR<FaqCreateInput, FaqUncheckedCreateInput>
    /**
     * In case the Faq was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaqUpdateInput, FaqUncheckedUpdateInput>
  }

  /**
   * Faq delete
   */
  export type FaqDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
    /**
     * Filter which Faq to delete.
     */
    where: FaqWhereUniqueInput
  }

  /**
   * Faq deleteMany
   */
  export type FaqDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faqs to delete
     */
    where?: FaqWhereInput
    /**
     * Limit how many Faqs to delete.
     */
    limit?: number
  }

  /**
   * Faq without action
   */
  export type FaqDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Faq
     */
    select?: FaqSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Faq
     */
    omit?: FaqOmit<ExtArgs> | null
  }


  /**
   * Model BringItem
   */

  export type AggregateBringItem = {
    _count: BringItemCountAggregateOutputType | null
    _avg: BringItemAvgAggregateOutputType | null
    _sum: BringItemSumAggregateOutputType | null
    _min: BringItemMinAggregateOutputType | null
    _max: BringItemMaxAggregateOutputType | null
  }

  export type BringItemAvgAggregateOutputType = {
    order: number | null
  }

  export type BringItemSumAggregateOutputType = {
    order: number | null
  }

  export type BringItemMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    icon: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BringItemMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    icon: string | null
    title: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BringItemCountAggregateOutputType = {
    id: number
    order: number
    published: number
    icon: number
    title: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BringItemAvgAggregateInputType = {
    order?: true
  }

  export type BringItemSumAggregateInputType = {
    order?: true
  }

  export type BringItemMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    icon?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BringItemMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    icon?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BringItemCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    icon?: true
    title?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BringItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BringItem to aggregate.
     */
    where?: BringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BringItems to fetch.
     */
    orderBy?: BringItemOrderByWithRelationInput | BringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BringItems
    **/
    _count?: true | BringItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BringItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BringItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BringItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BringItemMaxAggregateInputType
  }

  export type GetBringItemAggregateType<T extends BringItemAggregateArgs> = {
        [P in keyof T & keyof AggregateBringItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBringItem[P]>
      : GetScalarType<T[P], AggregateBringItem[P]>
  }




  export type BringItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BringItemWhereInput
    orderBy?: BringItemOrderByWithAggregationInput | BringItemOrderByWithAggregationInput[]
    by: BringItemScalarFieldEnum[] | BringItemScalarFieldEnum
    having?: BringItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BringItemCountAggregateInputType | true
    _avg?: BringItemAvgAggregateInputType
    _sum?: BringItemSumAggregateInputType
    _min?: BringItemMinAggregateInputType
    _max?: BringItemMaxAggregateInputType
  }

  export type BringItemGroupByOutputType = {
    id: string
    order: number
    published: boolean
    icon: string
    title: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: BringItemCountAggregateOutputType | null
    _avg: BringItemAvgAggregateOutputType | null
    _sum: BringItemSumAggregateOutputType | null
    _min: BringItemMinAggregateOutputType | null
    _max: BringItemMaxAggregateOutputType | null
  }

  type GetBringItemGroupByPayload<T extends BringItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BringItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BringItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BringItemGroupByOutputType[P]>
            : GetScalarType<T[P], BringItemGroupByOutputType[P]>
        }
      >
    >


  export type BringItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bringItem"]>

  export type BringItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bringItem"]>

  export type BringItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bringItem"]>

  export type BringItemSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    icon?: boolean
    title?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BringItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "icon" | "title" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["bringItem"]>

  export type $BringItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BringItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      icon: string
      title: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bringItem"]>
    composites: {}
  }

  type BringItemGetPayload<S extends boolean | null | undefined | BringItemDefaultArgs> = $Result.GetResult<Prisma.$BringItemPayload, S>

  type BringItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BringItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BringItemCountAggregateInputType | true
    }

  export interface BringItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BringItem'], meta: { name: 'BringItem' } }
    /**
     * Find zero or one BringItem that matches the filter.
     * @param {BringItemFindUniqueArgs} args - Arguments to find a BringItem
     * @example
     * // Get one BringItem
     * const bringItem = await prisma.bringItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BringItemFindUniqueArgs>(args: SelectSubset<T, BringItemFindUniqueArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BringItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BringItemFindUniqueOrThrowArgs} args - Arguments to find a BringItem
     * @example
     * // Get one BringItem
     * const bringItem = await prisma.bringItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BringItemFindUniqueOrThrowArgs>(args: SelectSubset<T, BringItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BringItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemFindFirstArgs} args - Arguments to find a BringItem
     * @example
     * // Get one BringItem
     * const bringItem = await prisma.bringItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BringItemFindFirstArgs>(args?: SelectSubset<T, BringItemFindFirstArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BringItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemFindFirstOrThrowArgs} args - Arguments to find a BringItem
     * @example
     * // Get one BringItem
     * const bringItem = await prisma.bringItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BringItemFindFirstOrThrowArgs>(args?: SelectSubset<T, BringItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BringItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BringItems
     * const bringItems = await prisma.bringItem.findMany()
     * 
     * // Get first 10 BringItems
     * const bringItems = await prisma.bringItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bringItemWithIdOnly = await prisma.bringItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BringItemFindManyArgs>(args?: SelectSubset<T, BringItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BringItem.
     * @param {BringItemCreateArgs} args - Arguments to create a BringItem.
     * @example
     * // Create one BringItem
     * const BringItem = await prisma.bringItem.create({
     *   data: {
     *     // ... data to create a BringItem
     *   }
     * })
     * 
     */
    create<T extends BringItemCreateArgs>(args: SelectSubset<T, BringItemCreateArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BringItems.
     * @param {BringItemCreateManyArgs} args - Arguments to create many BringItems.
     * @example
     * // Create many BringItems
     * const bringItem = await prisma.bringItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BringItemCreateManyArgs>(args?: SelectSubset<T, BringItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BringItems and returns the data saved in the database.
     * @param {BringItemCreateManyAndReturnArgs} args - Arguments to create many BringItems.
     * @example
     * // Create many BringItems
     * const bringItem = await prisma.bringItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BringItems and only return the `id`
     * const bringItemWithIdOnly = await prisma.bringItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BringItemCreateManyAndReturnArgs>(args?: SelectSubset<T, BringItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BringItem.
     * @param {BringItemDeleteArgs} args - Arguments to delete one BringItem.
     * @example
     * // Delete one BringItem
     * const BringItem = await prisma.bringItem.delete({
     *   where: {
     *     // ... filter to delete one BringItem
     *   }
     * })
     * 
     */
    delete<T extends BringItemDeleteArgs>(args: SelectSubset<T, BringItemDeleteArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BringItem.
     * @param {BringItemUpdateArgs} args - Arguments to update one BringItem.
     * @example
     * // Update one BringItem
     * const bringItem = await prisma.bringItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BringItemUpdateArgs>(args: SelectSubset<T, BringItemUpdateArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BringItems.
     * @param {BringItemDeleteManyArgs} args - Arguments to filter BringItems to delete.
     * @example
     * // Delete a few BringItems
     * const { count } = await prisma.bringItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BringItemDeleteManyArgs>(args?: SelectSubset<T, BringItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BringItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BringItems
     * const bringItem = await prisma.bringItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BringItemUpdateManyArgs>(args: SelectSubset<T, BringItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BringItems and returns the data updated in the database.
     * @param {BringItemUpdateManyAndReturnArgs} args - Arguments to update many BringItems.
     * @example
     * // Update many BringItems
     * const bringItem = await prisma.bringItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BringItems and only return the `id`
     * const bringItemWithIdOnly = await prisma.bringItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends BringItemUpdateManyAndReturnArgs>(args: SelectSubset<T, BringItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BringItem.
     * @param {BringItemUpsertArgs} args - Arguments to update or create a BringItem.
     * @example
     * // Update or create a BringItem
     * const bringItem = await prisma.bringItem.upsert({
     *   create: {
     *     // ... data to create a BringItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BringItem we want to update
     *   }
     * })
     */
    upsert<T extends BringItemUpsertArgs>(args: SelectSubset<T, BringItemUpsertArgs<ExtArgs>>): Prisma__BringItemClient<$Result.GetResult<Prisma.$BringItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BringItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemCountArgs} args - Arguments to filter BringItems to count.
     * @example
     * // Count the number of BringItems
     * const count = await prisma.bringItem.count({
     *   where: {
     *     // ... the filter for the BringItems we want to count
     *   }
     * })
    **/
    count<T extends BringItemCountArgs>(
      args?: Subset<T, BringItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BringItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BringItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BringItemAggregateArgs>(args: Subset<T, BringItemAggregateArgs>): Prisma.PrismaPromise<GetBringItemAggregateType<T>>

    /**
     * Group by BringItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BringItemGroupByArgs} args - Group by arguments.
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
      T extends BringItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BringItemGroupByArgs['orderBy'] }
        : { orderBy?: BringItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BringItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBringItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BringItem model
   */
  readonly fields: BringItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BringItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BringItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the BringItem model
   */
  interface BringItemFieldRefs {
    readonly id: FieldRef<"BringItem", 'String'>
    readonly order: FieldRef<"BringItem", 'Int'>
    readonly published: FieldRef<"BringItem", 'Boolean'>
    readonly icon: FieldRef<"BringItem", 'String'>
    readonly title: FieldRef<"BringItem", 'String'>
    readonly description: FieldRef<"BringItem", 'String'>
    readonly createdAt: FieldRef<"BringItem", 'DateTime'>
    readonly updatedAt: FieldRef<"BringItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BringItem findUnique
   */
  export type BringItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * Filter, which BringItem to fetch.
     */
    where: BringItemWhereUniqueInput
  }

  /**
   * BringItem findUniqueOrThrow
   */
  export type BringItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * Filter, which BringItem to fetch.
     */
    where: BringItemWhereUniqueInput
  }

  /**
   * BringItem findFirst
   */
  export type BringItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * Filter, which BringItem to fetch.
     */
    where?: BringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BringItems to fetch.
     */
    orderBy?: BringItemOrderByWithRelationInput | BringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BringItems.
     */
    cursor?: BringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BringItems.
     */
    distinct?: BringItemScalarFieldEnum | BringItemScalarFieldEnum[]
  }

  /**
   * BringItem findFirstOrThrow
   */
  export type BringItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * Filter, which BringItem to fetch.
     */
    where?: BringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BringItems to fetch.
     */
    orderBy?: BringItemOrderByWithRelationInput | BringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BringItems.
     */
    cursor?: BringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BringItems.
     */
    distinct?: BringItemScalarFieldEnum | BringItemScalarFieldEnum[]
  }

  /**
   * BringItem findMany
   */
  export type BringItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * Filter, which BringItems to fetch.
     */
    where?: BringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BringItems to fetch.
     */
    orderBy?: BringItemOrderByWithRelationInput | BringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BringItems.
     */
    cursor?: BringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BringItems.
     */
    distinct?: BringItemScalarFieldEnum | BringItemScalarFieldEnum[]
  }

  /**
   * BringItem create
   */
  export type BringItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * The data needed to create a BringItem.
     */
    data: XOR<BringItemCreateInput, BringItemUncheckedCreateInput>
  }

  /**
   * BringItem createMany
   */
  export type BringItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BringItems.
     */
    data: BringItemCreateManyInput | BringItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BringItem createManyAndReturn
   */
  export type BringItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * The data used to create many BringItems.
     */
    data: BringItemCreateManyInput | BringItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BringItem update
   */
  export type BringItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * The data needed to update a BringItem.
     */
    data: XOR<BringItemUpdateInput, BringItemUncheckedUpdateInput>
    /**
     * Choose, which BringItem to update.
     */
    where: BringItemWhereUniqueInput
  }

  /**
   * BringItem updateMany
   */
  export type BringItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BringItems.
     */
    data: XOR<BringItemUpdateManyMutationInput, BringItemUncheckedUpdateManyInput>
    /**
     * Filter which BringItems to update
     */
    where?: BringItemWhereInput
    /**
     * Limit how many BringItems to update.
     */
    limit?: number
  }

  /**
   * BringItem updateManyAndReturn
   */
  export type BringItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * The data used to update BringItems.
     */
    data: XOR<BringItemUpdateManyMutationInput, BringItemUncheckedUpdateManyInput>
    /**
     * Filter which BringItems to update
     */
    where?: BringItemWhereInput
    /**
     * Limit how many BringItems to update.
     */
    limit?: number
  }

  /**
   * BringItem upsert
   */
  export type BringItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * The filter to search for the BringItem to update in case it exists.
     */
    where: BringItemWhereUniqueInput
    /**
     * In case the BringItem found by the `where` argument doesn't exist, create a new BringItem with this data.
     */
    create: XOR<BringItemCreateInput, BringItemUncheckedCreateInput>
    /**
     * In case the BringItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BringItemUpdateInput, BringItemUncheckedUpdateInput>
  }

  /**
   * BringItem delete
   */
  export type BringItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
    /**
     * Filter which BringItem to delete.
     */
    where: BringItemWhereUniqueInput
  }

  /**
   * BringItem deleteMany
   */
  export type BringItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BringItems to delete
     */
    where?: BringItemWhereInput
    /**
     * Limit how many BringItems to delete.
     */
    limit?: number
  }

  /**
   * BringItem without action
   */
  export type BringItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BringItem
     */
    select?: BringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BringItem
     */
    omit?: BringItemOmit<ExtArgs> | null
  }


  /**
   * Model GalleryItem
   */

  export type AggregateGalleryItem = {
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  export type GalleryItemAvgAggregateOutputType = {
    order: number | null
  }

  export type GalleryItemSumAggregateOutputType = {
    order: number | null
  }

  export type GalleryItemMinAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    photoSrc: string | null
    photoAlt: string | null
    caption: string | null
    photoConsent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryItemMaxAggregateOutputType = {
    id: string | null
    order: number | null
    published: boolean | null
    photoSrc: string | null
    photoAlt: string | null
    caption: string | null
    photoConsent: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GalleryItemCountAggregateOutputType = {
    id: number
    order: number
    published: number
    photoSrc: number
    photoAlt: number
    caption: number
    photoConsent: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GalleryItemAvgAggregateInputType = {
    order?: true
  }

  export type GalleryItemSumAggregateInputType = {
    order?: true
  }

  export type GalleryItemMinAggregateInputType = {
    id?: true
    order?: true
    published?: true
    photoSrc?: true
    photoAlt?: true
    caption?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryItemMaxAggregateInputType = {
    id?: true
    order?: true
    published?: true
    photoSrc?: true
    photoAlt?: true
    caption?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GalleryItemCountAggregateInputType = {
    id?: true
    order?: true
    published?: true
    photoSrc?: true
    photoAlt?: true
    caption?: true
    photoConsent?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GalleryItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItem to aggregate.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GalleryItems
    **/
    _count?: true | GalleryItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GalleryItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GalleryItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GalleryItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GetGalleryItemAggregateType<T extends GalleryItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGalleryItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGalleryItem[P]>
      : GetScalarType<T[P], AggregateGalleryItem[P]>
  }




  export type GalleryItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GalleryItemWhereInput
    orderBy?: GalleryItemOrderByWithAggregationInput | GalleryItemOrderByWithAggregationInput[]
    by: GalleryItemScalarFieldEnum[] | GalleryItemScalarFieldEnum
    having?: GalleryItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GalleryItemCountAggregateInputType | true
    _avg?: GalleryItemAvgAggregateInputType
    _sum?: GalleryItemSumAggregateInputType
    _min?: GalleryItemMinAggregateInputType
    _max?: GalleryItemMaxAggregateInputType
  }

  export type GalleryItemGroupByOutputType = {
    id: string
    order: number
    published: boolean
    photoSrc: string
    photoAlt: string | null
    caption: string | null
    photoConsent: boolean
    createdAt: Date
    updatedAt: Date
    _count: GalleryItemCountAggregateOutputType | null
    _avg: GalleryItemAvgAggregateOutputType | null
    _sum: GalleryItemSumAggregateOutputType | null
    _min: GalleryItemMinAggregateOutputType | null
    _max: GalleryItemMaxAggregateOutputType | null
  }

  type GetGalleryItemGroupByPayload<T extends GalleryItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GalleryItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GalleryItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
            : GetScalarType<T[P], GalleryItemGroupByOutputType[P]>
        }
      >
    >


  export type GalleryItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    caption?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    caption?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    published?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    caption?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["galleryItem"]>

  export type GalleryItemSelectScalar = {
    id?: boolean
    order?: boolean
    published?: boolean
    photoSrc?: boolean
    photoAlt?: boolean
    caption?: boolean
    photoConsent?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GalleryItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "published" | "photoSrc" | "photoAlt" | "caption" | "photoConsent" | "createdAt" | "updatedAt", ExtArgs["result"]["galleryItem"]>

  export type $GalleryItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GalleryItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      published: boolean
      photoSrc: string
      photoAlt: string | null
      caption: string | null
      photoConsent: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["galleryItem"]>
    composites: {}
  }

  type GalleryItemGetPayload<S extends boolean | null | undefined | GalleryItemDefaultArgs> = $Result.GetResult<Prisma.$GalleryItemPayload, S>

  type GalleryItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GalleryItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GalleryItemCountAggregateInputType | true
    }

  export interface GalleryItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GalleryItem'], meta: { name: 'GalleryItem' } }
    /**
     * Find zero or one GalleryItem that matches the filter.
     * @param {GalleryItemFindUniqueArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GalleryItemFindUniqueArgs>(args: SelectSubset<T, GalleryItemFindUniqueArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GalleryItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GalleryItemFindUniqueOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GalleryItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GalleryItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GalleryItemFindFirstArgs>(args?: SelectSubset<T, GalleryItemFindFirstArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GalleryItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindFirstOrThrowArgs} args - Arguments to find a GalleryItem
     * @example
     * // Get one GalleryItem
     * const galleryItem = await prisma.galleryItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GalleryItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GalleryItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GalleryItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany()
     * 
     * // Get first 10 GalleryItems
     * const galleryItems = await prisma.galleryItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GalleryItemFindManyArgs>(args?: SelectSubset<T, GalleryItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GalleryItem.
     * @param {GalleryItemCreateArgs} args - Arguments to create a GalleryItem.
     * @example
     * // Create one GalleryItem
     * const GalleryItem = await prisma.galleryItem.create({
     *   data: {
     *     // ... data to create a GalleryItem
     *   }
     * })
     * 
     */
    create<T extends GalleryItemCreateArgs>(args: SelectSubset<T, GalleryItemCreateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GalleryItems.
     * @param {GalleryItemCreateManyArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GalleryItemCreateManyArgs>(args?: SelectSubset<T, GalleryItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GalleryItems and returns the data saved in the database.
     * @param {GalleryItemCreateManyAndReturnArgs} args - Arguments to create many GalleryItems.
     * @example
     * // Create many GalleryItems
     * const galleryItem = await prisma.galleryItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GalleryItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GalleryItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GalleryItem.
     * @param {GalleryItemDeleteArgs} args - Arguments to delete one GalleryItem.
     * @example
     * // Delete one GalleryItem
     * const GalleryItem = await prisma.galleryItem.delete({
     *   where: {
     *     // ... filter to delete one GalleryItem
     *   }
     * })
     * 
     */
    delete<T extends GalleryItemDeleteArgs>(args: SelectSubset<T, GalleryItemDeleteArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GalleryItem.
     * @param {GalleryItemUpdateArgs} args - Arguments to update one GalleryItem.
     * @example
     * // Update one GalleryItem
     * const galleryItem = await prisma.galleryItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GalleryItemUpdateArgs>(args: SelectSubset<T, GalleryItemUpdateArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GalleryItems.
     * @param {GalleryItemDeleteManyArgs} args - Arguments to filter GalleryItems to delete.
     * @example
     * // Delete a few GalleryItems
     * const { count } = await prisma.galleryItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GalleryItemDeleteManyArgs>(args?: SelectSubset<T, GalleryItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GalleryItemUpdateManyArgs>(args: SelectSubset<T, GalleryItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GalleryItems and returns the data updated in the database.
     * @param {GalleryItemUpdateManyAndReturnArgs} args - Arguments to update many GalleryItems.
     * @example
     * // Update many GalleryItems
     * const galleryItem = await prisma.galleryItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GalleryItems and only return the `id`
     * const galleryItemWithIdOnly = await prisma.galleryItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends GalleryItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GalleryItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GalleryItem.
     * @param {GalleryItemUpsertArgs} args - Arguments to update or create a GalleryItem.
     * @example
     * // Update or create a GalleryItem
     * const galleryItem = await prisma.galleryItem.upsert({
     *   create: {
     *     // ... data to create a GalleryItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GalleryItem we want to update
     *   }
     * })
     */
    upsert<T extends GalleryItemUpsertArgs>(args: SelectSubset<T, GalleryItemUpsertArgs<ExtArgs>>): Prisma__GalleryItemClient<$Result.GetResult<Prisma.$GalleryItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GalleryItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemCountArgs} args - Arguments to filter GalleryItems to count.
     * @example
     * // Count the number of GalleryItems
     * const count = await prisma.galleryItem.count({
     *   where: {
     *     // ... the filter for the GalleryItems we want to count
     *   }
     * })
    **/
    count<T extends GalleryItemCountArgs>(
      args?: Subset<T, GalleryItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GalleryItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GalleryItemAggregateArgs>(args: Subset<T, GalleryItemAggregateArgs>): Prisma.PrismaPromise<GetGalleryItemAggregateType<T>>

    /**
     * Group by GalleryItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GalleryItemGroupByArgs} args - Group by arguments.
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
      T extends GalleryItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GalleryItemGroupByArgs['orderBy'] }
        : { orderBy?: GalleryItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GalleryItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGalleryItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GalleryItem model
   */
  readonly fields: GalleryItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GalleryItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GalleryItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the GalleryItem model
   */
  interface GalleryItemFieldRefs {
    readonly id: FieldRef<"GalleryItem", 'String'>
    readonly order: FieldRef<"GalleryItem", 'Int'>
    readonly published: FieldRef<"GalleryItem", 'Boolean'>
    readonly photoSrc: FieldRef<"GalleryItem", 'String'>
    readonly photoAlt: FieldRef<"GalleryItem", 'String'>
    readonly caption: FieldRef<"GalleryItem", 'String'>
    readonly photoConsent: FieldRef<"GalleryItem", 'Boolean'>
    readonly createdAt: FieldRef<"GalleryItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GalleryItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GalleryItem findUnique
   */
  export type GalleryItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findUniqueOrThrow
   */
  export type GalleryItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem findFirst
   */
  export type GalleryItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findFirstOrThrow
   */
  export type GalleryItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItem to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem findMany
   */
  export type GalleryItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter, which GalleryItems to fetch.
     */
    where?: GalleryItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GalleryItems to fetch.
     */
    orderBy?: GalleryItemOrderByWithRelationInput | GalleryItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GalleryItems.
     */
    cursor?: GalleryItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GalleryItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GalleryItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GalleryItems.
     */
    distinct?: GalleryItemScalarFieldEnum | GalleryItemScalarFieldEnum[]
  }

  /**
   * GalleryItem create
   */
  export type GalleryItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to create a GalleryItem.
     */
    data: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
  }

  /**
   * GalleryItem createMany
   */
  export type GalleryItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem createManyAndReturn
   */
  export type GalleryItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to create many GalleryItems.
     */
    data: GalleryItemCreateManyInput | GalleryItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GalleryItem update
   */
  export type GalleryItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data needed to update a GalleryItem.
     */
    data: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
    /**
     * Choose, which GalleryItem to update.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem updateMany
   */
  export type GalleryItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem updateManyAndReturn
   */
  export type GalleryItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The data used to update GalleryItems.
     */
    data: XOR<GalleryItemUpdateManyMutationInput, GalleryItemUncheckedUpdateManyInput>
    /**
     * Filter which GalleryItems to update
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to update.
     */
    limit?: number
  }

  /**
   * GalleryItem upsert
   */
  export type GalleryItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * The filter to search for the GalleryItem to update in case it exists.
     */
    where: GalleryItemWhereUniqueInput
    /**
     * In case the GalleryItem found by the `where` argument doesn't exist, create a new GalleryItem with this data.
     */
    create: XOR<GalleryItemCreateInput, GalleryItemUncheckedCreateInput>
    /**
     * In case the GalleryItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GalleryItemUpdateInput, GalleryItemUncheckedUpdateInput>
  }

  /**
   * GalleryItem delete
   */
  export type GalleryItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
    /**
     * Filter which GalleryItem to delete.
     */
    where: GalleryItemWhereUniqueInput
  }

  /**
   * GalleryItem deleteMany
   */
  export type GalleryItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GalleryItems to delete
     */
    where?: GalleryItemWhereInput
    /**
     * Limit how many GalleryItems to delete.
     */
    limit?: number
  }

  /**
   * GalleryItem without action
   */
  export type GalleryItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GalleryItem
     */
    select?: GalleryItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GalleryItem
     */
    omit?: GalleryItemOmit<ExtArgs> | null
  }


  /**
   * Model Heading
   */

  export type AggregateHeading = {
    _count: HeadingCountAggregateOutputType | null
    _min: HeadingMinAggregateOutputType | null
    _max: HeadingMaxAggregateOutputType | null
  }

  export type HeadingMinAggregateOutputType = {
    id: string | null
    eyebrow: string | null
    titleBefore: string | null
    highlight: string | null
    titleAfter: string | null
    intro: string | null
    updatedAt: Date | null
  }

  export type HeadingMaxAggregateOutputType = {
    id: string | null
    eyebrow: string | null
    titleBefore: string | null
    highlight: string | null
    titleAfter: string | null
    intro: string | null
    updatedAt: Date | null
  }

  export type HeadingCountAggregateOutputType = {
    id: number
    eyebrow: number
    titleBefore: number
    highlight: number
    titleAfter: number
    intro: number
    updatedAt: number
    _all: number
  }


  export type HeadingMinAggregateInputType = {
    id?: true
    eyebrow?: true
    titleBefore?: true
    highlight?: true
    titleAfter?: true
    intro?: true
    updatedAt?: true
  }

  export type HeadingMaxAggregateInputType = {
    id?: true
    eyebrow?: true
    titleBefore?: true
    highlight?: true
    titleAfter?: true
    intro?: true
    updatedAt?: true
  }

  export type HeadingCountAggregateInputType = {
    id?: true
    eyebrow?: true
    titleBefore?: true
    highlight?: true
    titleAfter?: true
    intro?: true
    updatedAt?: true
    _all?: true
  }

  export type HeadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heading to aggregate.
     */
    where?: HeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headings to fetch.
     */
    orderBy?: HeadingOrderByWithRelationInput | HeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Headings
    **/
    _count?: true | HeadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeadingMaxAggregateInputType
  }

  export type GetHeadingAggregateType<T extends HeadingAggregateArgs> = {
        [P in keyof T & keyof AggregateHeading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeading[P]>
      : GetScalarType<T[P], AggregateHeading[P]>
  }




  export type HeadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeadingWhereInput
    orderBy?: HeadingOrderByWithAggregationInput | HeadingOrderByWithAggregationInput[]
    by: HeadingScalarFieldEnum[] | HeadingScalarFieldEnum
    having?: HeadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeadingCountAggregateInputType | true
    _min?: HeadingMinAggregateInputType
    _max?: HeadingMaxAggregateInputType
  }

  export type HeadingGroupByOutputType = {
    id: string
    eyebrow: string | null
    titleBefore: string | null
    highlight: string | null
    titleAfter: string | null
    intro: string | null
    updatedAt: Date
    _count: HeadingCountAggregateOutputType | null
    _min: HeadingMinAggregateOutputType | null
    _max: HeadingMaxAggregateOutputType | null
  }

  type GetHeadingGroupByPayload<T extends HeadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeadingGroupByOutputType[P]>
            : GetScalarType<T[P], HeadingGroupByOutputType[P]>
        }
      >
    >


  export type HeadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eyebrow?: boolean
    titleBefore?: boolean
    highlight?: boolean
    titleAfter?: boolean
    intro?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heading"]>

  export type HeadingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eyebrow?: boolean
    titleBefore?: boolean
    highlight?: boolean
    titleAfter?: boolean
    intro?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heading"]>

  export type HeadingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eyebrow?: boolean
    titleBefore?: boolean
    highlight?: boolean
    titleAfter?: boolean
    intro?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["heading"]>

  export type HeadingSelectScalar = {
    id?: boolean
    eyebrow?: boolean
    titleBefore?: boolean
    highlight?: boolean
    titleAfter?: boolean
    intro?: boolean
    updatedAt?: boolean
  }

  export type HeadingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eyebrow" | "titleBefore" | "highlight" | "titleAfter" | "intro" | "updatedAt", ExtArgs["result"]["heading"]>

  export type $HeadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Heading"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eyebrow: string | null
      titleBefore: string | null
      highlight: string | null
      titleAfter: string | null
      intro: string | null
      updatedAt: Date
    }, ExtArgs["result"]["heading"]>
    composites: {}
  }

  type HeadingGetPayload<S extends boolean | null | undefined | HeadingDefaultArgs> = $Result.GetResult<Prisma.$HeadingPayload, S>

  type HeadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeadingCountAggregateInputType | true
    }

  export interface HeadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Heading'], meta: { name: 'Heading' } }
    /**
     * Find zero or one Heading that matches the filter.
     * @param {HeadingFindUniqueArgs} args - Arguments to find a Heading
     * @example
     * // Get one Heading
     * const heading = await prisma.heading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeadingFindUniqueArgs>(args: SelectSubset<T, HeadingFindUniqueArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Heading that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeadingFindUniqueOrThrowArgs} args - Arguments to find a Heading
     * @example
     * // Get one Heading
     * const heading = await prisma.heading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeadingFindUniqueOrThrowArgs>(args: SelectSubset<T, HeadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Heading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingFindFirstArgs} args - Arguments to find a Heading
     * @example
     * // Get one Heading
     * const heading = await prisma.heading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeadingFindFirstArgs>(args?: SelectSubset<T, HeadingFindFirstArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Heading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingFindFirstOrThrowArgs} args - Arguments to find a Heading
     * @example
     * // Get one Heading
     * const heading = await prisma.heading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeadingFindFirstOrThrowArgs>(args?: SelectSubset<T, HeadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Headings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Headings
     * const headings = await prisma.heading.findMany()
     * 
     * // Get first 10 Headings
     * const headings = await prisma.heading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const headingWithIdOnly = await prisma.heading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeadingFindManyArgs>(args?: SelectSubset<T, HeadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Heading.
     * @param {HeadingCreateArgs} args - Arguments to create a Heading.
     * @example
     * // Create one Heading
     * const Heading = await prisma.heading.create({
     *   data: {
     *     // ... data to create a Heading
     *   }
     * })
     * 
     */
    create<T extends HeadingCreateArgs>(args: SelectSubset<T, HeadingCreateArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Headings.
     * @param {HeadingCreateManyArgs} args - Arguments to create many Headings.
     * @example
     * // Create many Headings
     * const heading = await prisma.heading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeadingCreateManyArgs>(args?: SelectSubset<T, HeadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Headings and returns the data saved in the database.
     * @param {HeadingCreateManyAndReturnArgs} args - Arguments to create many Headings.
     * @example
     * // Create many Headings
     * const heading = await prisma.heading.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Headings and only return the `id`
     * const headingWithIdOnly = await prisma.heading.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeadingCreateManyAndReturnArgs>(args?: SelectSubset<T, HeadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Heading.
     * @param {HeadingDeleteArgs} args - Arguments to delete one Heading.
     * @example
     * // Delete one Heading
     * const Heading = await prisma.heading.delete({
     *   where: {
     *     // ... filter to delete one Heading
     *   }
     * })
     * 
     */
    delete<T extends HeadingDeleteArgs>(args: SelectSubset<T, HeadingDeleteArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Heading.
     * @param {HeadingUpdateArgs} args - Arguments to update one Heading.
     * @example
     * // Update one Heading
     * const heading = await prisma.heading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeadingUpdateArgs>(args: SelectSubset<T, HeadingUpdateArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Headings.
     * @param {HeadingDeleteManyArgs} args - Arguments to filter Headings to delete.
     * @example
     * // Delete a few Headings
     * const { count } = await prisma.heading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeadingDeleteManyArgs>(args?: SelectSubset<T, HeadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Headings
     * const heading = await prisma.heading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeadingUpdateManyArgs>(args: SelectSubset<T, HeadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Headings and returns the data updated in the database.
     * @param {HeadingUpdateManyAndReturnArgs} args - Arguments to update many Headings.
     * @example
     * // Update many Headings
     * const heading = await prisma.heading.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Headings and only return the `id`
     * const headingWithIdOnly = await prisma.heading.updateManyAndReturn({
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
    updateManyAndReturn<T extends HeadingUpdateManyAndReturnArgs>(args: SelectSubset<T, HeadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Heading.
     * @param {HeadingUpsertArgs} args - Arguments to update or create a Heading.
     * @example
     * // Update or create a Heading
     * const heading = await prisma.heading.upsert({
     *   create: {
     *     // ... data to create a Heading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Heading we want to update
     *   }
     * })
     */
    upsert<T extends HeadingUpsertArgs>(args: SelectSubset<T, HeadingUpsertArgs<ExtArgs>>): Prisma__HeadingClient<$Result.GetResult<Prisma.$HeadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Headings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingCountArgs} args - Arguments to filter Headings to count.
     * @example
     * // Count the number of Headings
     * const count = await prisma.heading.count({
     *   where: {
     *     // ... the filter for the Headings we want to count
     *   }
     * })
    **/
    count<T extends HeadingCountArgs>(
      args?: Subset<T, HeadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Heading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeadingAggregateArgs>(args: Subset<T, HeadingAggregateArgs>): Prisma.PrismaPromise<GetHeadingAggregateType<T>>

    /**
     * Group by Heading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeadingGroupByArgs} args - Group by arguments.
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
      T extends HeadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeadingGroupByArgs['orderBy'] }
        : { orderBy?: HeadingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Heading model
   */
  readonly fields: HeadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Heading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Heading model
   */
  interface HeadingFieldRefs {
    readonly id: FieldRef<"Heading", 'String'>
    readonly eyebrow: FieldRef<"Heading", 'String'>
    readonly titleBefore: FieldRef<"Heading", 'String'>
    readonly highlight: FieldRef<"Heading", 'String'>
    readonly titleAfter: FieldRef<"Heading", 'String'>
    readonly intro: FieldRef<"Heading", 'String'>
    readonly updatedAt: FieldRef<"Heading", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Heading findUnique
   */
  export type HeadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * Filter, which Heading to fetch.
     */
    where: HeadingWhereUniqueInput
  }

  /**
   * Heading findUniqueOrThrow
   */
  export type HeadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * Filter, which Heading to fetch.
     */
    where: HeadingWhereUniqueInput
  }

  /**
   * Heading findFirst
   */
  export type HeadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * Filter, which Heading to fetch.
     */
    where?: HeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headings to fetch.
     */
    orderBy?: HeadingOrderByWithRelationInput | HeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headings.
     */
    cursor?: HeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headings.
     */
    distinct?: HeadingScalarFieldEnum | HeadingScalarFieldEnum[]
  }

  /**
   * Heading findFirstOrThrow
   */
  export type HeadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * Filter, which Heading to fetch.
     */
    where?: HeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headings to fetch.
     */
    orderBy?: HeadingOrderByWithRelationInput | HeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Headings.
     */
    cursor?: HeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headings.
     */
    distinct?: HeadingScalarFieldEnum | HeadingScalarFieldEnum[]
  }

  /**
   * Heading findMany
   */
  export type HeadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * Filter, which Headings to fetch.
     */
    where?: HeadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Headings to fetch.
     */
    orderBy?: HeadingOrderByWithRelationInput | HeadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Headings.
     */
    cursor?: HeadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Headings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Headings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Headings.
     */
    distinct?: HeadingScalarFieldEnum | HeadingScalarFieldEnum[]
  }

  /**
   * Heading create
   */
  export type HeadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * The data needed to create a Heading.
     */
    data: XOR<HeadingCreateInput, HeadingUncheckedCreateInput>
  }

  /**
   * Heading createMany
   */
  export type HeadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Headings.
     */
    data: HeadingCreateManyInput | HeadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Heading createManyAndReturn
   */
  export type HeadingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * The data used to create many Headings.
     */
    data: HeadingCreateManyInput | HeadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Heading update
   */
  export type HeadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * The data needed to update a Heading.
     */
    data: XOR<HeadingUpdateInput, HeadingUncheckedUpdateInput>
    /**
     * Choose, which Heading to update.
     */
    where: HeadingWhereUniqueInput
  }

  /**
   * Heading updateMany
   */
  export type HeadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Headings.
     */
    data: XOR<HeadingUpdateManyMutationInput, HeadingUncheckedUpdateManyInput>
    /**
     * Filter which Headings to update
     */
    where?: HeadingWhereInput
    /**
     * Limit how many Headings to update.
     */
    limit?: number
  }

  /**
   * Heading updateManyAndReturn
   */
  export type HeadingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * The data used to update Headings.
     */
    data: XOR<HeadingUpdateManyMutationInput, HeadingUncheckedUpdateManyInput>
    /**
     * Filter which Headings to update
     */
    where?: HeadingWhereInput
    /**
     * Limit how many Headings to update.
     */
    limit?: number
  }

  /**
   * Heading upsert
   */
  export type HeadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * The filter to search for the Heading to update in case it exists.
     */
    where: HeadingWhereUniqueInput
    /**
     * In case the Heading found by the `where` argument doesn't exist, create a new Heading with this data.
     */
    create: XOR<HeadingCreateInput, HeadingUncheckedCreateInput>
    /**
     * In case the Heading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeadingUpdateInput, HeadingUncheckedUpdateInput>
  }

  /**
   * Heading delete
   */
  export type HeadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
    /**
     * Filter which Heading to delete.
     */
    where: HeadingWhereUniqueInput
  }

  /**
   * Heading deleteMany
   */
  export type HeadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Headings to delete
     */
    where?: HeadingWhereInput
    /**
     * Limit how many Headings to delete.
     */
    limit?: number
  }

  /**
   * Heading without action
   */
  export type HeadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Heading
     */
    select?: HeadingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Heading
     */
    omit?: HeadingOmit<ExtArgs> | null
  }


  /**
   * Model Enquiry
   */

  export type AggregateEnquiry = {
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  export type EnquiryMinAggregateOutputType = {
    id: string | null
    childName: string | null
    ageGroup: string | null
    parentName: string | null
    parentPhone: string | null
    email: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnquiryMaxAggregateOutputType = {
    id: string | null
    childName: string | null
    ageGroup: string | null
    parentName: string | null
    parentPhone: string | null
    email: string | null
    message: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnquiryCountAggregateOutputType = {
    id: number
    childName: number
    ageGroup: number
    parentName: number
    parentPhone: number
    email: number
    message: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnquiryMinAggregateInputType = {
    id?: true
    childName?: true
    ageGroup?: true
    parentName?: true
    parentPhone?: true
    email?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnquiryMaxAggregateInputType = {
    id?: true
    childName?: true
    ageGroup?: true
    parentName?: true
    parentPhone?: true
    email?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnquiryCountAggregateInputType = {
    id?: true
    childName?: true
    ageGroup?: true
    parentName?: true
    parentPhone?: true
    email?: true
    message?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnquiryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiry to aggregate.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enquiries
    **/
    _count?: true | EnquiryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnquiryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnquiryMaxAggregateInputType
  }

  export type GetEnquiryAggregateType<T extends EnquiryAggregateArgs> = {
        [P in keyof T & keyof AggregateEnquiry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnquiry[P]>
      : GetScalarType<T[P], AggregateEnquiry[P]>
  }




  export type EnquiryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnquiryWhereInput
    orderBy?: EnquiryOrderByWithAggregationInput | EnquiryOrderByWithAggregationInput[]
    by: EnquiryScalarFieldEnum[] | EnquiryScalarFieldEnum
    having?: EnquiryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnquiryCountAggregateInputType | true
    _min?: EnquiryMinAggregateInputType
    _max?: EnquiryMaxAggregateInputType
  }

  export type EnquiryGroupByOutputType = {
    id: string
    childName: string
    ageGroup: string | null
    parentName: string
    parentPhone: string | null
    email: string | null
    message: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: EnquiryCountAggregateOutputType | null
    _min: EnquiryMinAggregateOutputType | null
    _max: EnquiryMaxAggregateOutputType | null
  }

  type GetEnquiryGroupByPayload<T extends EnquiryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnquiryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnquiryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
            : GetScalarType<T[P], EnquiryGroupByOutputType[P]>
        }
      >
    >


  export type EnquirySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    childName?: boolean
    ageGroup?: boolean
    parentName?: boolean
    parentPhone?: boolean
    email?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    childName?: boolean
    ageGroup?: boolean
    parentName?: boolean
    parentPhone?: boolean
    email?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    childName?: boolean
    ageGroup?: boolean
    parentName?: boolean
    parentPhone?: boolean
    email?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["enquiry"]>

  export type EnquirySelectScalar = {
    id?: boolean
    childName?: boolean
    ageGroup?: boolean
    parentName?: boolean
    parentPhone?: boolean
    email?: boolean
    message?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnquiryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "childName" | "ageGroup" | "parentName" | "parentPhone" | "email" | "message" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["enquiry"]>

  export type $EnquiryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enquiry"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      childName: string
      ageGroup: string | null
      parentName: string
      parentPhone: string | null
      email: string | null
      message: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enquiry"]>
    composites: {}
  }

  type EnquiryGetPayload<S extends boolean | null | undefined | EnquiryDefaultArgs> = $Result.GetResult<Prisma.$EnquiryPayload, S>

  type EnquiryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnquiryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnquiryCountAggregateInputType | true
    }

  export interface EnquiryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enquiry'], meta: { name: 'Enquiry' } }
    /**
     * Find zero or one Enquiry that matches the filter.
     * @param {EnquiryFindUniqueArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnquiryFindUniqueArgs>(args: SelectSubset<T, EnquiryFindUniqueArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enquiry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnquiryFindUniqueOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnquiryFindUniqueOrThrowArgs>(args: SelectSubset<T, EnquiryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnquiryFindFirstArgs>(args?: SelectSubset<T, EnquiryFindFirstArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enquiry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindFirstOrThrowArgs} args - Arguments to find a Enquiry
     * @example
     * // Get one Enquiry
     * const enquiry = await prisma.enquiry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnquiryFindFirstOrThrowArgs>(args?: SelectSubset<T, EnquiryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enquiries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enquiries
     * const enquiries = await prisma.enquiry.findMany()
     * 
     * // Get first 10 Enquiries
     * const enquiries = await prisma.enquiry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnquiryFindManyArgs>(args?: SelectSubset<T, EnquiryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enquiry.
     * @param {EnquiryCreateArgs} args - Arguments to create a Enquiry.
     * @example
     * // Create one Enquiry
     * const Enquiry = await prisma.enquiry.create({
     *   data: {
     *     // ... data to create a Enquiry
     *   }
     * })
     * 
     */
    create<T extends EnquiryCreateArgs>(args: SelectSubset<T, EnquiryCreateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enquiries.
     * @param {EnquiryCreateManyArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnquiryCreateManyArgs>(args?: SelectSubset<T, EnquiryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enquiries and returns the data saved in the database.
     * @param {EnquiryCreateManyAndReturnArgs} args - Arguments to create many Enquiries.
     * @example
     * // Create many Enquiries
     * const enquiry = await prisma.enquiry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnquiryCreateManyAndReturnArgs>(args?: SelectSubset<T, EnquiryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enquiry.
     * @param {EnquiryDeleteArgs} args - Arguments to delete one Enquiry.
     * @example
     * // Delete one Enquiry
     * const Enquiry = await prisma.enquiry.delete({
     *   where: {
     *     // ... filter to delete one Enquiry
     *   }
     * })
     * 
     */
    delete<T extends EnquiryDeleteArgs>(args: SelectSubset<T, EnquiryDeleteArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enquiry.
     * @param {EnquiryUpdateArgs} args - Arguments to update one Enquiry.
     * @example
     * // Update one Enquiry
     * const enquiry = await prisma.enquiry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnquiryUpdateArgs>(args: SelectSubset<T, EnquiryUpdateArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enquiries.
     * @param {EnquiryDeleteManyArgs} args - Arguments to filter Enquiries to delete.
     * @example
     * // Delete a few Enquiries
     * const { count } = await prisma.enquiry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnquiryDeleteManyArgs>(args?: SelectSubset<T, EnquiryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnquiryUpdateManyArgs>(args: SelectSubset<T, EnquiryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enquiries and returns the data updated in the database.
     * @param {EnquiryUpdateManyAndReturnArgs} args - Arguments to update many Enquiries.
     * @example
     * // Update many Enquiries
     * const enquiry = await prisma.enquiry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enquiries and only return the `id`
     * const enquiryWithIdOnly = await prisma.enquiry.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnquiryUpdateManyAndReturnArgs>(args: SelectSubset<T, EnquiryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enquiry.
     * @param {EnquiryUpsertArgs} args - Arguments to update or create a Enquiry.
     * @example
     * // Update or create a Enquiry
     * const enquiry = await prisma.enquiry.upsert({
     *   create: {
     *     // ... data to create a Enquiry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enquiry we want to update
     *   }
     * })
     */
    upsert<T extends EnquiryUpsertArgs>(args: SelectSubset<T, EnquiryUpsertArgs<ExtArgs>>): Prisma__EnquiryClient<$Result.GetResult<Prisma.$EnquiryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enquiries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryCountArgs} args - Arguments to filter Enquiries to count.
     * @example
     * // Count the number of Enquiries
     * const count = await prisma.enquiry.count({
     *   where: {
     *     // ... the filter for the Enquiries we want to count
     *   }
     * })
    **/
    count<T extends EnquiryCountArgs>(
      args?: Subset<T, EnquiryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnquiryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnquiryAggregateArgs>(args: Subset<T, EnquiryAggregateArgs>): Prisma.PrismaPromise<GetEnquiryAggregateType<T>>

    /**
     * Group by Enquiry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnquiryGroupByArgs} args - Group by arguments.
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
      T extends EnquiryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnquiryGroupByArgs['orderBy'] }
        : { orderBy?: EnquiryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnquiryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnquiryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enquiry model
   */
  readonly fields: EnquiryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enquiry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnquiryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Enquiry model
   */
  interface EnquiryFieldRefs {
    readonly id: FieldRef<"Enquiry", 'String'>
    readonly childName: FieldRef<"Enquiry", 'String'>
    readonly ageGroup: FieldRef<"Enquiry", 'String'>
    readonly parentName: FieldRef<"Enquiry", 'String'>
    readonly parentPhone: FieldRef<"Enquiry", 'String'>
    readonly email: FieldRef<"Enquiry", 'String'>
    readonly message: FieldRef<"Enquiry", 'String'>
    readonly status: FieldRef<"Enquiry", 'String'>
    readonly createdAt: FieldRef<"Enquiry", 'DateTime'>
    readonly updatedAt: FieldRef<"Enquiry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enquiry findUnique
   */
  export type EnquiryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findUniqueOrThrow
   */
  export type EnquiryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry findFirst
   */
  export type EnquiryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findFirstOrThrow
   */
  export type EnquiryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiry to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry findMany
   */
  export type EnquiryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter, which Enquiries to fetch.
     */
    where?: EnquiryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enquiries to fetch.
     */
    orderBy?: EnquiryOrderByWithRelationInput | EnquiryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enquiries.
     */
    cursor?: EnquiryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enquiries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enquiries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enquiries.
     */
    distinct?: EnquiryScalarFieldEnum | EnquiryScalarFieldEnum[]
  }

  /**
   * Enquiry create
   */
  export type EnquiryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data needed to create a Enquiry.
     */
    data: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
  }

  /**
   * Enquiry createMany
   */
  export type EnquiryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry createManyAndReturn
   */
  export type EnquiryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to create many Enquiries.
     */
    data: EnquiryCreateManyInput | EnquiryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enquiry update
   */
  export type EnquiryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data needed to update a Enquiry.
     */
    data: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
    /**
     * Choose, which Enquiry to update.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry updateMany
   */
  export type EnquiryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry updateManyAndReturn
   */
  export type EnquiryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The data used to update Enquiries.
     */
    data: XOR<EnquiryUpdateManyMutationInput, EnquiryUncheckedUpdateManyInput>
    /**
     * Filter which Enquiries to update
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to update.
     */
    limit?: number
  }

  /**
   * Enquiry upsert
   */
  export type EnquiryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * The filter to search for the Enquiry to update in case it exists.
     */
    where: EnquiryWhereUniqueInput
    /**
     * In case the Enquiry found by the `where` argument doesn't exist, create a new Enquiry with this data.
     */
    create: XOR<EnquiryCreateInput, EnquiryUncheckedCreateInput>
    /**
     * In case the Enquiry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnquiryUpdateInput, EnquiryUncheckedUpdateInput>
  }

  /**
   * Enquiry delete
   */
  export type EnquiryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
    /**
     * Filter which Enquiry to delete.
     */
    where: EnquiryWhereUniqueInput
  }

  /**
   * Enquiry deleteMany
   */
  export type EnquiryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enquiries to delete
     */
    where?: EnquiryWhereInput
    /**
     * Limit how many Enquiries to delete.
     */
    limit?: number
  }

  /**
   * Enquiry without action
   */
  export type EnquiryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enquiry
     */
    select?: EnquirySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enquiry
     */
    omit?: EnquiryOmit<ExtArgs> | null
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


  export const CoachScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    name: 'name',
    role: 'role',
    bio: 'bio',
    focus: 'focus',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CoachScalarFieldEnum = (typeof CoachScalarFieldEnum)[keyof typeof CoachScalarFieldEnum]


  export const AgeGroupScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    ageRange: 'ageRange',
    name: 'name',
    focus: 'focus',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    photoConsent: 'photoConsent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgeGroupScalarFieldEnum = (typeof AgeGroupScalarFieldEnum)[keyof typeof AgeGroupScalarFieldEnum]


  export const AwardScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    icon: 'icon',
    title: 'title',
    description: 'description',
    recipient: 'recipient',
    season: 'season',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    photoConsent: 'photoConsent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AwardScalarFieldEnum = (typeof AwardScalarFieldEnum)[keyof typeof AwardScalarFieldEnum]


  export const SponsorScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    name: 'name',
    tier: 'tier',
    description: 'description',
    logoSrc: 'logoSrc',
    logoAlt: 'logoAlt',
    website: 'website',
    contributed: 'contributed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SponsorScalarFieldEnum = (typeof SponsorScalarFieldEnum)[keyof typeof SponsorScalarFieldEnum]


  export const FundScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    name: 'name',
    icon: 'icon',
    goal: 'goal',
    raised: 'raised',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FundScalarFieldEnum = (typeof FundScalarFieldEnum)[keyof typeof FundScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    title: 'title',
    excerpt: 'excerpt',
    date: 'date',
    category: 'category',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    href: 'href',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const SessionStepScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    time: 'time',
    title: 'title',
    description: 'description',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionStepScalarFieldEnum = (typeof SessionStepScalarFieldEnum)[keyof typeof SessionStepScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    message: 'message',
    severity: 'severity',
    linkLabel: 'linkLabel',
    linkHref: 'linkHref',
    startsAt: 'startsAt',
    endsAt: 'endsAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    title: 'title',
    type: 'type',
    start: 'start',
    end: 'end',
    venue: 'venue',
    address: 'address',
    description: 'description',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    photoConsent: 'photoConsent',
    result: 'result',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const FaqScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    question: 'question',
    answer: 'answer',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FaqScalarFieldEnum = (typeof FaqScalarFieldEnum)[keyof typeof FaqScalarFieldEnum]


  export const BringItemScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    icon: 'icon',
    title: 'title',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BringItemScalarFieldEnum = (typeof BringItemScalarFieldEnum)[keyof typeof BringItemScalarFieldEnum]


  export const GalleryItemScalarFieldEnum: {
    id: 'id',
    order: 'order',
    published: 'published',
    photoSrc: 'photoSrc',
    photoAlt: 'photoAlt',
    caption: 'caption',
    photoConsent: 'photoConsent',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GalleryItemScalarFieldEnum = (typeof GalleryItemScalarFieldEnum)[keyof typeof GalleryItemScalarFieldEnum]


  export const HeadingScalarFieldEnum: {
    id: 'id',
    eyebrow: 'eyebrow',
    titleBefore: 'titleBefore',
    highlight: 'highlight',
    titleAfter: 'titleAfter',
    intro: 'intro',
    updatedAt: 'updatedAt'
  };

  export type HeadingScalarFieldEnum = (typeof HeadingScalarFieldEnum)[keyof typeof HeadingScalarFieldEnum]


  export const EnquiryScalarFieldEnum: {
    id: 'id',
    childName: 'childName',
    ageGroup: 'ageGroup',
    parentName: 'parentName',
    parentPhone: 'parentPhone',
    email: 'email',
    message: 'message',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnquiryScalarFieldEnum = (typeof EnquiryScalarFieldEnum)[keyof typeof EnquiryScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type CoachWhereInput = {
    AND?: CoachWhereInput | CoachWhereInput[]
    OR?: CoachWhereInput[]
    NOT?: CoachWhereInput | CoachWhereInput[]
    id?: StringFilter<"Coach"> | string
    order?: IntFilter<"Coach"> | number
    published?: BoolFilter<"Coach"> | boolean
    name?: StringFilter<"Coach"> | string
    role?: StringFilter<"Coach"> | string
    bio?: StringFilter<"Coach"> | string
    focus?: StringFilter<"Coach"> | string
    photoSrc?: StringNullableFilter<"Coach"> | string | null
    photoAlt?: StringNullableFilter<"Coach"> | string | null
    createdAt?: DateTimeFilter<"Coach"> | Date | string
    updatedAt?: DateTimeFilter<"Coach"> | Date | string
  }

  export type CoachOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CoachWhereInput | CoachWhereInput[]
    OR?: CoachWhereInput[]
    NOT?: CoachWhereInput | CoachWhereInput[]
    order?: IntFilter<"Coach"> | number
    published?: BoolFilter<"Coach"> | boolean
    name?: StringFilter<"Coach"> | string
    role?: StringFilter<"Coach"> | string
    bio?: StringFilter<"Coach"> | string
    focus?: StringFilter<"Coach"> | string
    photoSrc?: StringNullableFilter<"Coach"> | string | null
    photoAlt?: StringNullableFilter<"Coach"> | string | null
    createdAt?: DateTimeFilter<"Coach"> | Date | string
    updatedAt?: DateTimeFilter<"Coach"> | Date | string
  }, "id">

  export type CoachOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CoachCountOrderByAggregateInput
    _avg?: CoachAvgOrderByAggregateInput
    _max?: CoachMaxOrderByAggregateInput
    _min?: CoachMinOrderByAggregateInput
    _sum?: CoachSumOrderByAggregateInput
  }

  export type CoachScalarWhereWithAggregatesInput = {
    AND?: CoachScalarWhereWithAggregatesInput | CoachScalarWhereWithAggregatesInput[]
    OR?: CoachScalarWhereWithAggregatesInput[]
    NOT?: CoachScalarWhereWithAggregatesInput | CoachScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Coach"> | string
    order?: IntWithAggregatesFilter<"Coach"> | number
    published?: BoolWithAggregatesFilter<"Coach"> | boolean
    name?: StringWithAggregatesFilter<"Coach"> | string
    role?: StringWithAggregatesFilter<"Coach"> | string
    bio?: StringWithAggregatesFilter<"Coach"> | string
    focus?: StringWithAggregatesFilter<"Coach"> | string
    photoSrc?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    photoAlt?: StringNullableWithAggregatesFilter<"Coach"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Coach"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Coach"> | Date | string
  }

  export type AgeGroupWhereInput = {
    AND?: AgeGroupWhereInput | AgeGroupWhereInput[]
    OR?: AgeGroupWhereInput[]
    NOT?: AgeGroupWhereInput | AgeGroupWhereInput[]
    id?: StringFilter<"AgeGroup"> | string
    order?: IntFilter<"AgeGroup"> | number
    published?: BoolFilter<"AgeGroup"> | boolean
    ageRange?: StringFilter<"AgeGroup"> | string
    name?: StringFilter<"AgeGroup"> | string
    focus?: StringFilter<"AgeGroup"> | string
    photoSrc?: StringNullableFilter<"AgeGroup"> | string | null
    photoAlt?: StringNullableFilter<"AgeGroup"> | string | null
    photoConsent?: BoolFilter<"AgeGroup"> | boolean
    createdAt?: DateTimeFilter<"AgeGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AgeGroup"> | Date | string
  }

  export type AgeGroupOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    ageRange?: SortOrder
    name?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgeGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgeGroupWhereInput | AgeGroupWhereInput[]
    OR?: AgeGroupWhereInput[]
    NOT?: AgeGroupWhereInput | AgeGroupWhereInput[]
    order?: IntFilter<"AgeGroup"> | number
    published?: BoolFilter<"AgeGroup"> | boolean
    ageRange?: StringFilter<"AgeGroup"> | string
    name?: StringFilter<"AgeGroup"> | string
    focus?: StringFilter<"AgeGroup"> | string
    photoSrc?: StringNullableFilter<"AgeGroup"> | string | null
    photoAlt?: StringNullableFilter<"AgeGroup"> | string | null
    photoConsent?: BoolFilter<"AgeGroup"> | boolean
    createdAt?: DateTimeFilter<"AgeGroup"> | Date | string
    updatedAt?: DateTimeFilter<"AgeGroup"> | Date | string
  }, "id">

  export type AgeGroupOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    ageRange?: SortOrder
    name?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgeGroupCountOrderByAggregateInput
    _avg?: AgeGroupAvgOrderByAggregateInput
    _max?: AgeGroupMaxOrderByAggregateInput
    _min?: AgeGroupMinOrderByAggregateInput
    _sum?: AgeGroupSumOrderByAggregateInput
  }

  export type AgeGroupScalarWhereWithAggregatesInput = {
    AND?: AgeGroupScalarWhereWithAggregatesInput | AgeGroupScalarWhereWithAggregatesInput[]
    OR?: AgeGroupScalarWhereWithAggregatesInput[]
    NOT?: AgeGroupScalarWhereWithAggregatesInput | AgeGroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgeGroup"> | string
    order?: IntWithAggregatesFilter<"AgeGroup"> | number
    published?: BoolWithAggregatesFilter<"AgeGroup"> | boolean
    ageRange?: StringWithAggregatesFilter<"AgeGroup"> | string
    name?: StringWithAggregatesFilter<"AgeGroup"> | string
    focus?: StringWithAggregatesFilter<"AgeGroup"> | string
    photoSrc?: StringNullableWithAggregatesFilter<"AgeGroup"> | string | null
    photoAlt?: StringNullableWithAggregatesFilter<"AgeGroup"> | string | null
    photoConsent?: BoolWithAggregatesFilter<"AgeGroup"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AgeGroup"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgeGroup"> | Date | string
  }

  export type AwardWhereInput = {
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    id?: StringFilter<"Award"> | string
    order?: IntFilter<"Award"> | number
    published?: BoolFilter<"Award"> | boolean
    icon?: StringFilter<"Award"> | string
    title?: StringFilter<"Award"> | string
    description?: StringFilter<"Award"> | string
    recipient?: StringNullableFilter<"Award"> | string | null
    season?: StringNullableFilter<"Award"> | string | null
    photoSrc?: StringNullableFilter<"Award"> | string | null
    photoAlt?: StringNullableFilter<"Award"> | string | null
    photoConsent?: BoolFilter<"Award"> | boolean
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
  }

  export type AwardOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipient?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AwardWhereInput | AwardWhereInput[]
    OR?: AwardWhereInput[]
    NOT?: AwardWhereInput | AwardWhereInput[]
    order?: IntFilter<"Award"> | number
    published?: BoolFilter<"Award"> | boolean
    icon?: StringFilter<"Award"> | string
    title?: StringFilter<"Award"> | string
    description?: StringFilter<"Award"> | string
    recipient?: StringNullableFilter<"Award"> | string | null
    season?: StringNullableFilter<"Award"> | string | null
    photoSrc?: StringNullableFilter<"Award"> | string | null
    photoAlt?: StringNullableFilter<"Award"> | string | null
    photoConsent?: BoolFilter<"Award"> | boolean
    createdAt?: DateTimeFilter<"Award"> | Date | string
    updatedAt?: DateTimeFilter<"Award"> | Date | string
  }, "id">

  export type AwardOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipient?: SortOrderInput | SortOrder
    season?: SortOrderInput | SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AwardCountOrderByAggregateInput
    _avg?: AwardAvgOrderByAggregateInput
    _max?: AwardMaxOrderByAggregateInput
    _min?: AwardMinOrderByAggregateInput
    _sum?: AwardSumOrderByAggregateInput
  }

  export type AwardScalarWhereWithAggregatesInput = {
    AND?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    OR?: AwardScalarWhereWithAggregatesInput[]
    NOT?: AwardScalarWhereWithAggregatesInput | AwardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Award"> | string
    order?: IntWithAggregatesFilter<"Award"> | number
    published?: BoolWithAggregatesFilter<"Award"> | boolean
    icon?: StringWithAggregatesFilter<"Award"> | string
    title?: StringWithAggregatesFilter<"Award"> | string
    description?: StringWithAggregatesFilter<"Award"> | string
    recipient?: StringNullableWithAggregatesFilter<"Award"> | string | null
    season?: StringNullableWithAggregatesFilter<"Award"> | string | null
    photoSrc?: StringNullableWithAggregatesFilter<"Award"> | string | null
    photoAlt?: StringNullableWithAggregatesFilter<"Award"> | string | null
    photoConsent?: BoolWithAggregatesFilter<"Award"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Award"> | Date | string
  }

  export type SponsorWhereInput = {
    AND?: SponsorWhereInput | SponsorWhereInput[]
    OR?: SponsorWhereInput[]
    NOT?: SponsorWhereInput | SponsorWhereInput[]
    id?: StringFilter<"Sponsor"> | string
    order?: IntFilter<"Sponsor"> | number
    published?: BoolFilter<"Sponsor"> | boolean
    name?: StringFilter<"Sponsor"> | string
    tier?: StringFilter<"Sponsor"> | string
    description?: StringFilter<"Sponsor"> | string
    logoSrc?: StringNullableFilter<"Sponsor"> | string | null
    logoAlt?: StringNullableFilter<"Sponsor"> | string | null
    website?: StringNullableFilter<"Sponsor"> | string | null
    contributed?: FloatNullableFilter<"Sponsor"> | number | null
    createdAt?: DateTimeFilter<"Sponsor"> | Date | string
    updatedAt?: DateTimeFilter<"Sponsor"> | Date | string
  }

  export type SponsorOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    description?: SortOrder
    logoSrc?: SortOrderInput | SortOrder
    logoAlt?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    contributed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SponsorWhereInput | SponsorWhereInput[]
    OR?: SponsorWhereInput[]
    NOT?: SponsorWhereInput | SponsorWhereInput[]
    order?: IntFilter<"Sponsor"> | number
    published?: BoolFilter<"Sponsor"> | boolean
    name?: StringFilter<"Sponsor"> | string
    tier?: StringFilter<"Sponsor"> | string
    description?: StringFilter<"Sponsor"> | string
    logoSrc?: StringNullableFilter<"Sponsor"> | string | null
    logoAlt?: StringNullableFilter<"Sponsor"> | string | null
    website?: StringNullableFilter<"Sponsor"> | string | null
    contributed?: FloatNullableFilter<"Sponsor"> | number | null
    createdAt?: DateTimeFilter<"Sponsor"> | Date | string
    updatedAt?: DateTimeFilter<"Sponsor"> | Date | string
  }, "id">

  export type SponsorOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    description?: SortOrder
    logoSrc?: SortOrderInput | SortOrder
    logoAlt?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    contributed?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SponsorCountOrderByAggregateInput
    _avg?: SponsorAvgOrderByAggregateInput
    _max?: SponsorMaxOrderByAggregateInput
    _min?: SponsorMinOrderByAggregateInput
    _sum?: SponsorSumOrderByAggregateInput
  }

  export type SponsorScalarWhereWithAggregatesInput = {
    AND?: SponsorScalarWhereWithAggregatesInput | SponsorScalarWhereWithAggregatesInput[]
    OR?: SponsorScalarWhereWithAggregatesInput[]
    NOT?: SponsorScalarWhereWithAggregatesInput | SponsorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sponsor"> | string
    order?: IntWithAggregatesFilter<"Sponsor"> | number
    published?: BoolWithAggregatesFilter<"Sponsor"> | boolean
    name?: StringWithAggregatesFilter<"Sponsor"> | string
    tier?: StringWithAggregatesFilter<"Sponsor"> | string
    description?: StringWithAggregatesFilter<"Sponsor"> | string
    logoSrc?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    logoAlt?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    website?: StringNullableWithAggregatesFilter<"Sponsor"> | string | null
    contributed?: FloatNullableWithAggregatesFilter<"Sponsor"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Sponsor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sponsor"> | Date | string
  }

  export type FundWhereInput = {
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    id?: StringFilter<"Fund"> | string
    order?: IntFilter<"Fund"> | number
    published?: BoolFilter<"Fund"> | boolean
    name?: StringFilter<"Fund"> | string
    icon?: StringFilter<"Fund"> | string
    goal?: FloatFilter<"Fund"> | number
    raised?: FloatFilter<"Fund"> | number
    description?: StringFilter<"Fund"> | string
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    updatedAt?: DateTimeFilter<"Fund"> | Date | string
  }

  export type FundOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FundWhereInput | FundWhereInput[]
    OR?: FundWhereInput[]
    NOT?: FundWhereInput | FundWhereInput[]
    order?: IntFilter<"Fund"> | number
    published?: BoolFilter<"Fund"> | boolean
    name?: StringFilter<"Fund"> | string
    icon?: StringFilter<"Fund"> | string
    goal?: FloatFilter<"Fund"> | number
    raised?: FloatFilter<"Fund"> | number
    description?: StringFilter<"Fund"> | string
    createdAt?: DateTimeFilter<"Fund"> | Date | string
    updatedAt?: DateTimeFilter<"Fund"> | Date | string
  }, "id">

  export type FundOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FundCountOrderByAggregateInput
    _avg?: FundAvgOrderByAggregateInput
    _max?: FundMaxOrderByAggregateInput
    _min?: FundMinOrderByAggregateInput
    _sum?: FundSumOrderByAggregateInput
  }

  export type FundScalarWhereWithAggregatesInput = {
    AND?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    OR?: FundScalarWhereWithAggregatesInput[]
    NOT?: FundScalarWhereWithAggregatesInput | FundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fund"> | string
    order?: IntWithAggregatesFilter<"Fund"> | number
    published?: BoolWithAggregatesFilter<"Fund"> | boolean
    name?: StringWithAggregatesFilter<"Fund"> | string
    icon?: StringWithAggregatesFilter<"Fund"> | string
    goal?: FloatWithAggregatesFilter<"Fund"> | number
    raised?: FloatWithAggregatesFilter<"Fund"> | number
    description?: StringWithAggregatesFilter<"Fund"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fund"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fund"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    order?: IntFilter<"News"> | number
    published?: BoolFilter<"News"> | boolean
    title?: StringFilter<"News"> | string
    excerpt?: StringFilter<"News"> | string
    date?: DateTimeFilter<"News"> | Date | string
    category?: StringFilter<"News"> | string
    photoSrc?: StringNullableFilter<"News"> | string | null
    photoAlt?: StringNullableFilter<"News"> | string | null
    href?: StringNullableFilter<"News"> | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    date?: SortOrder
    category?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    href?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    order?: IntFilter<"News"> | number
    published?: BoolFilter<"News"> | boolean
    title?: StringFilter<"News"> | string
    excerpt?: StringFilter<"News"> | string
    date?: DateTimeFilter<"News"> | Date | string
    category?: StringFilter<"News"> | string
    photoSrc?: StringNullableFilter<"News"> | string | null
    photoAlt?: StringNullableFilter<"News"> | string | null
    href?: StringNullableFilter<"News"> | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    date?: SortOrder
    category?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    href?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    order?: IntWithAggregatesFilter<"News"> | number
    published?: BoolWithAggregatesFilter<"News"> | boolean
    title?: StringWithAggregatesFilter<"News"> | string
    excerpt?: StringWithAggregatesFilter<"News"> | string
    date?: DateTimeWithAggregatesFilter<"News"> | Date | string
    category?: StringWithAggregatesFilter<"News"> | string
    photoSrc?: StringNullableWithAggregatesFilter<"News"> | string | null
    photoAlt?: StringNullableWithAggregatesFilter<"News"> | string | null
    href?: StringNullableWithAggregatesFilter<"News"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
  }

  export type SessionStepWhereInput = {
    AND?: SessionStepWhereInput | SessionStepWhereInput[]
    OR?: SessionStepWhereInput[]
    NOT?: SessionStepWhereInput | SessionStepWhereInput[]
    id?: StringFilter<"SessionStep"> | string
    order?: IntFilter<"SessionStep"> | number
    published?: BoolFilter<"SessionStep"> | boolean
    time?: StringFilter<"SessionStep"> | string
    title?: StringFilter<"SessionStep"> | string
    description?: StringFilter<"SessionStep"> | string
    photoSrc?: StringNullableFilter<"SessionStep"> | string | null
    photoAlt?: StringNullableFilter<"SessionStep"> | string | null
    createdAt?: DateTimeFilter<"SessionStep"> | Date | string
    updatedAt?: DateTimeFilter<"SessionStep"> | Date | string
  }

  export type SessionStepOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    time?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionStepWhereInput | SessionStepWhereInput[]
    OR?: SessionStepWhereInput[]
    NOT?: SessionStepWhereInput | SessionStepWhereInput[]
    order?: IntFilter<"SessionStep"> | number
    published?: BoolFilter<"SessionStep"> | boolean
    time?: StringFilter<"SessionStep"> | string
    title?: StringFilter<"SessionStep"> | string
    description?: StringFilter<"SessionStep"> | string
    photoSrc?: StringNullableFilter<"SessionStep"> | string | null
    photoAlt?: StringNullableFilter<"SessionStep"> | string | null
    createdAt?: DateTimeFilter<"SessionStep"> | Date | string
    updatedAt?: DateTimeFilter<"SessionStep"> | Date | string
  }, "id">

  export type SessionStepOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    time?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionStepCountOrderByAggregateInput
    _avg?: SessionStepAvgOrderByAggregateInput
    _max?: SessionStepMaxOrderByAggregateInput
    _min?: SessionStepMinOrderByAggregateInput
    _sum?: SessionStepSumOrderByAggregateInput
  }

  export type SessionStepScalarWhereWithAggregatesInput = {
    AND?: SessionStepScalarWhereWithAggregatesInput | SessionStepScalarWhereWithAggregatesInput[]
    OR?: SessionStepScalarWhereWithAggregatesInput[]
    NOT?: SessionStepScalarWhereWithAggregatesInput | SessionStepScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionStep"> | string
    order?: IntWithAggregatesFilter<"SessionStep"> | number
    published?: BoolWithAggregatesFilter<"SessionStep"> | boolean
    time?: StringWithAggregatesFilter<"SessionStep"> | string
    title?: StringWithAggregatesFilter<"SessionStep"> | string
    description?: StringWithAggregatesFilter<"SessionStep"> | string
    photoSrc?: StringNullableWithAggregatesFilter<"SessionStep"> | string | null
    photoAlt?: StringNullableWithAggregatesFilter<"SessionStep"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SessionStep"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SessionStep"> | Date | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    order?: IntFilter<"Alert"> | number
    published?: BoolFilter<"Alert"> | boolean
    message?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    linkLabel?: StringNullableFilter<"Alert"> | string | null
    linkHref?: StringNullableFilter<"Alert"> | string | null
    startsAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    linkLabel?: SortOrderInput | SortOrder
    linkHref?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    order?: IntFilter<"Alert"> | number
    published?: BoolFilter<"Alert"> | boolean
    message?: StringFilter<"Alert"> | string
    severity?: StringFilter<"Alert"> | string
    linkLabel?: StringNullableFilter<"Alert"> | string | null
    linkHref?: StringNullableFilter<"Alert"> | string | null
    startsAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    endsAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    updatedAt?: DateTimeFilter<"Alert"> | Date | string
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    linkLabel?: SortOrderInput | SortOrder
    linkHref?: SortOrderInput | SortOrder
    startsAt?: SortOrderInput | SortOrder
    endsAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    order?: IntWithAggregatesFilter<"Alert"> | number
    published?: BoolWithAggregatesFilter<"Alert"> | boolean
    message?: StringWithAggregatesFilter<"Alert"> | string
    severity?: StringWithAggregatesFilter<"Alert"> | string
    linkLabel?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    linkHref?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    startsAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    endsAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    order?: IntFilter<"Event"> | number
    published?: BoolFilter<"Event"> | boolean
    title?: StringFilter<"Event"> | string
    type?: StringFilter<"Event"> | string
    start?: DateTimeFilter<"Event"> | Date | string
    end?: DateTimeNullableFilter<"Event"> | Date | string | null
    venue?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    photoSrc?: StringNullableFilter<"Event"> | string | null
    photoAlt?: StringNullableFilter<"Event"> | string | null
    photoConsent?: BoolFilter<"Event"> | boolean
    result?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    result?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    order?: IntFilter<"Event"> | number
    published?: BoolFilter<"Event"> | boolean
    title?: StringFilter<"Event"> | string
    type?: StringFilter<"Event"> | string
    start?: DateTimeFilter<"Event"> | Date | string
    end?: DateTimeNullableFilter<"Event"> | Date | string | null
    venue?: StringNullableFilter<"Event"> | string | null
    address?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    photoSrc?: StringNullableFilter<"Event"> | string | null
    photoAlt?: StringNullableFilter<"Event"> | string | null
    photoConsent?: BoolFilter<"Event"> | boolean
    result?: StringNullableFilter<"Event"> | string | null
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    venue?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    photoSrc?: SortOrderInput | SortOrder
    photoAlt?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    result?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    order?: IntWithAggregatesFilter<"Event"> | number
    published?: BoolWithAggregatesFilter<"Event"> | boolean
    title?: StringWithAggregatesFilter<"Event"> | string
    type?: StringWithAggregatesFilter<"Event"> | string
    start?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    venue?: StringNullableWithAggregatesFilter<"Event"> | string | null
    address?: StringNullableWithAggregatesFilter<"Event"> | string | null
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    photoSrc?: StringNullableWithAggregatesFilter<"Event"> | string | null
    photoAlt?: StringNullableWithAggregatesFilter<"Event"> | string | null
    photoConsent?: BoolWithAggregatesFilter<"Event"> | boolean
    result?: StringNullableWithAggregatesFilter<"Event"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type FaqWhereInput = {
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    id?: StringFilter<"Faq"> | string
    order?: IntFilter<"Faq"> | number
    published?: BoolFilter<"Faq"> | boolean
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }

  export type FaqOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FaqWhereInput | FaqWhereInput[]
    OR?: FaqWhereInput[]
    NOT?: FaqWhereInput | FaqWhereInput[]
    order?: IntFilter<"Faq"> | number
    published?: BoolFilter<"Faq"> | boolean
    question?: StringFilter<"Faq"> | string
    answer?: StringFilter<"Faq"> | string
    createdAt?: DateTimeFilter<"Faq"> | Date | string
    updatedAt?: DateTimeFilter<"Faq"> | Date | string
  }, "id">

  export type FaqOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FaqCountOrderByAggregateInput
    _avg?: FaqAvgOrderByAggregateInput
    _max?: FaqMaxOrderByAggregateInput
    _min?: FaqMinOrderByAggregateInput
    _sum?: FaqSumOrderByAggregateInput
  }

  export type FaqScalarWhereWithAggregatesInput = {
    AND?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    OR?: FaqScalarWhereWithAggregatesInput[]
    NOT?: FaqScalarWhereWithAggregatesInput | FaqScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Faq"> | string
    order?: IntWithAggregatesFilter<"Faq"> | number
    published?: BoolWithAggregatesFilter<"Faq"> | boolean
    question?: StringWithAggregatesFilter<"Faq"> | string
    answer?: StringWithAggregatesFilter<"Faq"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Faq"> | Date | string
  }

  export type BringItemWhereInput = {
    AND?: BringItemWhereInput | BringItemWhereInput[]
    OR?: BringItemWhereInput[]
    NOT?: BringItemWhereInput | BringItemWhereInput[]
    id?: StringFilter<"BringItem"> | string
    order?: IntFilter<"BringItem"> | number
    published?: BoolFilter<"BringItem"> | boolean
    icon?: StringFilter<"BringItem"> | string
    title?: StringFilter<"BringItem"> | string
    description?: StringFilter<"BringItem"> | string
    createdAt?: DateTimeFilter<"BringItem"> | Date | string
    updatedAt?: DateTimeFilter<"BringItem"> | Date | string
  }

  export type BringItemOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BringItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BringItemWhereInput | BringItemWhereInput[]
    OR?: BringItemWhereInput[]
    NOT?: BringItemWhereInput | BringItemWhereInput[]
    order?: IntFilter<"BringItem"> | number
    published?: BoolFilter<"BringItem"> | boolean
    icon?: StringFilter<"BringItem"> | string
    title?: StringFilter<"BringItem"> | string
    description?: StringFilter<"BringItem"> | string
    createdAt?: DateTimeFilter<"BringItem"> | Date | string
    updatedAt?: DateTimeFilter<"BringItem"> | Date | string
  }, "id">

  export type BringItemOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BringItemCountOrderByAggregateInput
    _avg?: BringItemAvgOrderByAggregateInput
    _max?: BringItemMaxOrderByAggregateInput
    _min?: BringItemMinOrderByAggregateInput
    _sum?: BringItemSumOrderByAggregateInput
  }

  export type BringItemScalarWhereWithAggregatesInput = {
    AND?: BringItemScalarWhereWithAggregatesInput | BringItemScalarWhereWithAggregatesInput[]
    OR?: BringItemScalarWhereWithAggregatesInput[]
    NOT?: BringItemScalarWhereWithAggregatesInput | BringItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BringItem"> | string
    order?: IntWithAggregatesFilter<"BringItem"> | number
    published?: BoolWithAggregatesFilter<"BringItem"> | boolean
    icon?: StringWithAggregatesFilter<"BringItem"> | string
    title?: StringWithAggregatesFilter<"BringItem"> | string
    description?: StringWithAggregatesFilter<"BringItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BringItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BringItem"> | Date | string
  }

  export type GalleryItemWhereInput = {
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    id?: StringFilter<"GalleryItem"> | string
    order?: IntFilter<"GalleryItem"> | number
    published?: BoolFilter<"GalleryItem"> | boolean
    photoSrc?: StringFilter<"GalleryItem"> | string
    photoAlt?: StringNullableFilter<"GalleryItem"> | string | null
    caption?: StringNullableFilter<"GalleryItem"> | string | null
    photoConsent?: BoolFilter<"GalleryItem"> | boolean
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }

  export type GalleryItemOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GalleryItemWhereInput | GalleryItemWhereInput[]
    OR?: GalleryItemWhereInput[]
    NOT?: GalleryItemWhereInput | GalleryItemWhereInput[]
    order?: IntFilter<"GalleryItem"> | number
    published?: BoolFilter<"GalleryItem"> | boolean
    photoSrc?: StringFilter<"GalleryItem"> | string
    photoAlt?: StringNullableFilter<"GalleryItem"> | string | null
    caption?: StringNullableFilter<"GalleryItem"> | string | null
    photoConsent?: BoolFilter<"GalleryItem"> | boolean
    createdAt?: DateTimeFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeFilter<"GalleryItem"> | Date | string
  }, "id">

  export type GalleryItemOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrderInput | SortOrder
    caption?: SortOrderInput | SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GalleryItemCountOrderByAggregateInput
    _avg?: GalleryItemAvgOrderByAggregateInput
    _max?: GalleryItemMaxOrderByAggregateInput
    _min?: GalleryItemMinOrderByAggregateInput
    _sum?: GalleryItemSumOrderByAggregateInput
  }

  export type GalleryItemScalarWhereWithAggregatesInput = {
    AND?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    OR?: GalleryItemScalarWhereWithAggregatesInput[]
    NOT?: GalleryItemScalarWhereWithAggregatesInput | GalleryItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GalleryItem"> | string
    order?: IntWithAggregatesFilter<"GalleryItem"> | number
    published?: BoolWithAggregatesFilter<"GalleryItem"> | boolean
    photoSrc?: StringWithAggregatesFilter<"GalleryItem"> | string
    photoAlt?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    caption?: StringNullableWithAggregatesFilter<"GalleryItem"> | string | null
    photoConsent?: BoolWithAggregatesFilter<"GalleryItem"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GalleryItem"> | Date | string
  }

  export type HeadingWhereInput = {
    AND?: HeadingWhereInput | HeadingWhereInput[]
    OR?: HeadingWhereInput[]
    NOT?: HeadingWhereInput | HeadingWhereInput[]
    id?: StringFilter<"Heading"> | string
    eyebrow?: StringNullableFilter<"Heading"> | string | null
    titleBefore?: StringNullableFilter<"Heading"> | string | null
    highlight?: StringNullableFilter<"Heading"> | string | null
    titleAfter?: StringNullableFilter<"Heading"> | string | null
    intro?: StringNullableFilter<"Heading"> | string | null
    updatedAt?: DateTimeFilter<"Heading"> | Date | string
  }

  export type HeadingOrderByWithRelationInput = {
    id?: SortOrder
    eyebrow?: SortOrderInput | SortOrder
    titleBefore?: SortOrderInput | SortOrder
    highlight?: SortOrderInput | SortOrder
    titleAfter?: SortOrderInput | SortOrder
    intro?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type HeadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeadingWhereInput | HeadingWhereInput[]
    OR?: HeadingWhereInput[]
    NOT?: HeadingWhereInput | HeadingWhereInput[]
    eyebrow?: StringNullableFilter<"Heading"> | string | null
    titleBefore?: StringNullableFilter<"Heading"> | string | null
    highlight?: StringNullableFilter<"Heading"> | string | null
    titleAfter?: StringNullableFilter<"Heading"> | string | null
    intro?: StringNullableFilter<"Heading"> | string | null
    updatedAt?: DateTimeFilter<"Heading"> | Date | string
  }, "id">

  export type HeadingOrderByWithAggregationInput = {
    id?: SortOrder
    eyebrow?: SortOrderInput | SortOrder
    titleBefore?: SortOrderInput | SortOrder
    highlight?: SortOrderInput | SortOrder
    titleAfter?: SortOrderInput | SortOrder
    intro?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: HeadingCountOrderByAggregateInput
    _max?: HeadingMaxOrderByAggregateInput
    _min?: HeadingMinOrderByAggregateInput
  }

  export type HeadingScalarWhereWithAggregatesInput = {
    AND?: HeadingScalarWhereWithAggregatesInput | HeadingScalarWhereWithAggregatesInput[]
    OR?: HeadingScalarWhereWithAggregatesInput[]
    NOT?: HeadingScalarWhereWithAggregatesInput | HeadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Heading"> | string
    eyebrow?: StringNullableWithAggregatesFilter<"Heading"> | string | null
    titleBefore?: StringNullableWithAggregatesFilter<"Heading"> | string | null
    highlight?: StringNullableWithAggregatesFilter<"Heading"> | string | null
    titleAfter?: StringNullableWithAggregatesFilter<"Heading"> | string | null
    intro?: StringNullableWithAggregatesFilter<"Heading"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Heading"> | Date | string
  }

  export type EnquiryWhereInput = {
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    id?: StringFilter<"Enquiry"> | string
    childName?: StringFilter<"Enquiry"> | string
    ageGroup?: StringNullableFilter<"Enquiry"> | string | null
    parentName?: StringFilter<"Enquiry"> | string
    parentPhone?: StringNullableFilter<"Enquiry"> | string | null
    email?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    status?: StringFilter<"Enquiry"> | string
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Enquiry"> | Date | string
  }

  export type EnquiryOrderByWithRelationInput = {
    id?: SortOrder
    childName?: SortOrder
    ageGroup?: SortOrderInput | SortOrder
    parentName?: SortOrder
    parentPhone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EnquiryWhereInput | EnquiryWhereInput[]
    OR?: EnquiryWhereInput[]
    NOT?: EnquiryWhereInput | EnquiryWhereInput[]
    childName?: StringFilter<"Enquiry"> | string
    ageGroup?: StringNullableFilter<"Enquiry"> | string | null
    parentName?: StringFilter<"Enquiry"> | string
    parentPhone?: StringNullableFilter<"Enquiry"> | string | null
    email?: StringNullableFilter<"Enquiry"> | string | null
    message?: StringNullableFilter<"Enquiry"> | string | null
    status?: StringFilter<"Enquiry"> | string
    createdAt?: DateTimeFilter<"Enquiry"> | Date | string
    updatedAt?: DateTimeFilter<"Enquiry"> | Date | string
  }, "id">

  export type EnquiryOrderByWithAggregationInput = {
    id?: SortOrder
    childName?: SortOrder
    ageGroup?: SortOrderInput | SortOrder
    parentName?: SortOrder
    parentPhone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnquiryCountOrderByAggregateInput
    _max?: EnquiryMaxOrderByAggregateInput
    _min?: EnquiryMinOrderByAggregateInput
  }

  export type EnquiryScalarWhereWithAggregatesInput = {
    AND?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    OR?: EnquiryScalarWhereWithAggregatesInput[]
    NOT?: EnquiryScalarWhereWithAggregatesInput | EnquiryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enquiry"> | string
    childName?: StringWithAggregatesFilter<"Enquiry"> | string
    ageGroup?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    parentName?: StringWithAggregatesFilter<"Enquiry"> | string
    parentPhone?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    email?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    message?: StringNullableWithAggregatesFilter<"Enquiry"> | string | null
    status?: StringWithAggregatesFilter<"Enquiry"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enquiry"> | Date | string
  }

  export type CoachCreateInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    role: string
    bio: string
    focus: string
    photoSrc?: string | null
    photoAlt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    role: string
    bio: string
    focus: string
    photoSrc?: string | null
    photoAlt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    role: string
    bio: string
    focus: string
    photoSrc?: string | null
    photoAlt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CoachUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CoachUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    bio?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeGroupCreateInput = {
    id?: string
    order?: number
    published?: boolean
    ageRange: string
    name: string
    focus: string
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgeGroupUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    ageRange: string
    name: string
    focus: string
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgeGroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    ageRange?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeGroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    ageRange?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeGroupCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    ageRange: string
    name: string
    focus: string
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgeGroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    ageRange?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgeGroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    ageRange?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    focus?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateInput = {
    id?: string
    order?: number
    published?: boolean
    icon: string
    title: string
    description: string
    recipient?: string | null
    season?: string | null
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    icon: string
    title: string
    description: string
    recipient?: string | null
    season?: string | null
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    icon: string
    title: string
    description: string
    recipient?: string | null
    season?: string | null
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AwardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AwardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    recipient?: NullableStringFieldUpdateOperationsInput | string | null
    season?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorCreateInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    tier: string
    description: string
    logoSrc?: string | null
    logoAlt?: string | null
    website?: string | null
    contributed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    tier: string
    description: string
    logoSrc?: string | null
    logoAlt?: string | null
    website?: string | null
    contributed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    logoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contributed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    logoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contributed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    tier: string
    description: string
    logoSrc?: string | null
    logoAlt?: string | null
    website?: string | null
    contributed?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SponsorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    logoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contributed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SponsorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    tier?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    logoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    logoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    contributed?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCreateInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    icon: string
    goal: number
    raised?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    icon: string
    goal: number
    raised?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    goal?: FloatFieldUpdateOperationsInput | number
    raised?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    goal?: FloatFieldUpdateOperationsInput | number
    raised?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    name: string
    icon: string
    goal: number
    raised?: number
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    goal?: FloatFieldUpdateOperationsInput | number
    raised?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    goal?: FloatFieldUpdateOperationsInput | number
    raised?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    order?: number
    published?: boolean
    title: string
    excerpt: string
    date: Date | string
    category: string
    photoSrc?: string | null
    photoAlt?: string | null
    href?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    title: string
    excerpt: string
    date: Date | string
    category: string
    photoSrc?: string | null
    photoAlt?: string | null
    href?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    href?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    href?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    title: string
    excerpt: string
    date: Date | string
    category: string
    photoSrc?: string | null
    photoAlt?: string | null
    href?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    href?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    excerpt?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    href?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionStepCreateInput = {
    id?: string
    order?: number
    published?: boolean
    time: string
    title: string
    description: string
    photoSrc?: string | null
    photoAlt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionStepUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    time: string
    title: string
    description: string
    photoSrc?: string | null
    photoAlt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionStepUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    time?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionStepUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    time?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionStepCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    time: string
    title: string
    description: string
    photoSrc?: string | null
    photoAlt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionStepUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    time?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionStepUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    time?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateInput = {
    id?: string
    order?: number
    published?: boolean
    message: string
    severity: string
    linkLabel?: string | null
    linkHref?: string | null
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    message: string
    severity: string
    linkLabel?: string | null
    linkHref?: string | null
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    linkLabel?: NullableStringFieldUpdateOperationsInput | string | null
    linkHref?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    linkLabel?: NullableStringFieldUpdateOperationsInput | string | null
    linkHref?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    message: string
    severity: string
    linkLabel?: string | null
    linkHref?: string | null
    startsAt?: Date | string | null
    endsAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    linkLabel?: NullableStringFieldUpdateOperationsInput | string | null
    linkHref?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    severity?: StringFieldUpdateOperationsInput | string
    linkLabel?: NullableStringFieldUpdateOperationsInput | string | null
    linkHref?: NullableStringFieldUpdateOperationsInput | string | null
    startsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endsAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    order?: number
    published?: boolean
    title: string
    type: string
    start: Date | string
    end?: Date | string | null
    venue?: string | null
    address?: string | null
    description?: string | null
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    result?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    title: string
    type: string
    start: Date | string
    end?: Date | string | null
    venue?: string | null
    address?: string | null
    description?: string | null
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    result?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    title: string
    type: string
    start: Date | string
    end?: Date | string | null
    venue?: string | null
    address?: string | null
    description?: string | null
    photoSrc?: string | null
    photoAlt?: string | null
    photoConsent?: boolean
    result?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    venue?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    photoSrc?: NullableStringFieldUpdateOperationsInput | string | null
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    result?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateInput = {
    id?: string
    order?: number
    published?: boolean
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    question: string
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FaqUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FaqUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BringItemCreateInput = {
    id?: string
    order?: number
    published?: boolean
    icon: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BringItemUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    icon: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BringItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BringItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BringItemCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    icon: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BringItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BringItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateInput = {
    id?: string
    order?: number
    published?: boolean
    photoSrc: string
    photoAlt?: string | null
    caption?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUncheckedCreateInput = {
    id?: string
    order?: number
    published?: boolean
    photoSrc: string
    photoAlt?: string | null
    caption?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    photoSrc?: StringFieldUpdateOperationsInput | string
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    photoSrc?: StringFieldUpdateOperationsInput | string
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemCreateManyInput = {
    id?: string
    order?: number
    published?: boolean
    photoSrc: string
    photoAlt?: string | null
    caption?: string | null
    photoConsent?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GalleryItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    photoSrc?: StringFieldUpdateOperationsInput | string
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GalleryItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    published?: BoolFieldUpdateOperationsInput | boolean
    photoSrc?: StringFieldUpdateOperationsInput | string
    photoAlt?: NullableStringFieldUpdateOperationsInput | string | null
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    photoConsent?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadingCreateInput = {
    id: string
    eyebrow?: string | null
    titleBefore?: string | null
    highlight?: string | null
    titleAfter?: string | null
    intro?: string | null
    updatedAt?: Date | string
  }

  export type HeadingUncheckedCreateInput = {
    id: string
    eyebrow?: string | null
    titleBefore?: string | null
    highlight?: string | null
    titleAfter?: string | null
    intro?: string | null
    updatedAt?: Date | string
  }

  export type HeadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eyebrow?: NullableStringFieldUpdateOperationsInput | string | null
    titleBefore?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    titleAfter?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eyebrow?: NullableStringFieldUpdateOperationsInput | string | null
    titleBefore?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    titleAfter?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadingCreateManyInput = {
    id: string
    eyebrow?: string | null
    titleBefore?: string | null
    highlight?: string | null
    titleAfter?: string | null
    intro?: string | null
    updatedAt?: Date | string
  }

  export type HeadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eyebrow?: NullableStringFieldUpdateOperationsInput | string | null
    titleBefore?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    titleAfter?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eyebrow?: NullableStringFieldUpdateOperationsInput | string | null
    titleBefore?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: NullableStringFieldUpdateOperationsInput | string | null
    titleAfter?: NullableStringFieldUpdateOperationsInput | string | null
    intro?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateInput = {
    id?: string
    childName: string
    ageGroup?: string | null
    parentName: string
    parentPhone?: string | null
    email?: string | null
    message?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryUncheckedCreateInput = {
    id?: string
    childName: string
    ageGroup?: string | null
    parentName: string
    parentPhone?: string | null
    email?: string | null
    message?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    childName?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: StringFieldUpdateOperationsInput | string
    parentPhone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    childName?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: StringFieldUpdateOperationsInput | string
    parentPhone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryCreateManyInput = {
    id?: string
    childName: string
    ageGroup?: string | null
    parentName: string
    parentPhone?: string | null
    email?: string | null
    message?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnquiryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    childName?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: StringFieldUpdateOperationsInput | string
    parentPhone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnquiryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    childName?: StringFieldUpdateOperationsInput | string
    ageGroup?: NullableStringFieldUpdateOperationsInput | string | null
    parentName?: StringFieldUpdateOperationsInput | string
    parentPhone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CoachCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CoachMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CoachSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type AgeGroupCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    ageRange?: SortOrder
    name?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgeGroupAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AgeGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    ageRange?: SortOrder
    name?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgeGroupMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    ageRange?: SortOrder
    name?: SortOrder
    focus?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgeGroupSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AwardCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipient?: SortOrder
    season?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AwardMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipient?: SortOrder
    season?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    recipient?: SortOrder
    season?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AwardSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type SponsorCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    description?: SortOrder
    logoSrc?: SortOrder
    logoAlt?: SortOrder
    website?: SortOrder
    contributed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorAvgOrderByAggregateInput = {
    order?: SortOrder
    contributed?: SortOrder
  }

  export type SponsorMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    description?: SortOrder
    logoSrc?: SortOrder
    logoAlt?: SortOrder
    website?: SortOrder
    contributed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    tier?: SortOrder
    description?: SortOrder
    logoSrc?: SortOrder
    logoAlt?: SortOrder
    website?: SortOrder
    contributed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SponsorSumOrderByAggregateInput = {
    order?: SortOrder
    contributed?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FundCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundAvgOrderByAggregateInput = {
    order?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
  }

  export type FundMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FundSumOrderByAggregateInput = {
    order?: SortOrder
    goal?: SortOrder
    raised?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    date?: SortOrder
    category?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    date?: SortOrder
    category?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    excerpt?: SortOrder
    date?: SortOrder
    category?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    href?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SessionStepCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    time?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionStepAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SessionStepMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    time?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionStepMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    time?: SortOrder
    title?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionStepSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    linkLabel?: SortOrder
    linkHref?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    linkLabel?: SortOrder
    linkHref?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    message?: SortOrder
    severity?: SortOrder
    linkLabel?: SortOrder
    linkHref?: SortOrder
    startsAt?: SortOrder
    endsAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrder
    venue?: SortOrder
    address?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrder
    venue?: SortOrder
    address?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    title?: SortOrder
    type?: SortOrder
    start?: SortOrder
    end?: SortOrder
    venue?: SortOrder
    address?: SortOrder
    description?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    photoConsent?: SortOrder
    result?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FaqCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FaqMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FaqSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BringItemCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BringItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type BringItemMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BringItemMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    icon?: SortOrder
    title?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BringItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GalleryItemCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    caption?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type GalleryItemMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    caption?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    published?: SortOrder
    photoSrc?: SortOrder
    photoAlt?: SortOrder
    caption?: SortOrder
    photoConsent?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GalleryItemSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type HeadingCountOrderByAggregateInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    titleBefore?: SortOrder
    highlight?: SortOrder
    titleAfter?: SortOrder
    intro?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadingMaxOrderByAggregateInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    titleBefore?: SortOrder
    highlight?: SortOrder
    titleAfter?: SortOrder
    intro?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeadingMinOrderByAggregateInput = {
    id?: SortOrder
    eyebrow?: SortOrder
    titleBefore?: SortOrder
    highlight?: SortOrder
    titleAfter?: SortOrder
    intro?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryCountOrderByAggregateInput = {
    id?: SortOrder
    childName?: SortOrder
    ageGroup?: SortOrder
    parentName?: SortOrder
    parentPhone?: SortOrder
    email?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryMaxOrderByAggregateInput = {
    id?: SortOrder
    childName?: SortOrder
    ageGroup?: SortOrder
    parentName?: SortOrder
    parentPhone?: SortOrder
    email?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnquiryMinOrderByAggregateInput = {
    id?: SortOrder
    childName?: SortOrder
    ageGroup?: SortOrder
    parentName?: SortOrder
    parentPhone?: SortOrder
    email?: SortOrder
    message?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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