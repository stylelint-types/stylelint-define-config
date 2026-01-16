export type Unprefix<T extends Record<string, any>, Pre extends string> = {
  [K in keyof T as K extends `${Pre}${infer U}` ? U : never]: T[K];
}

export type Prefix<T extends Record<string, any>, Pre extends string> = {
  // @ts-expect-error K in keyof T
  [K in keyof T as `${Pre}${K}`]: T[K];
}

export type RenamePrefix<
  T extends Record<string, any>,
  Old extends string,
  New extends string,
> = Prefix<Unprefix<T, Old>, New>

export type Prettify<T> = { [K in keyof T]: T[K] } & {}

export type Arrayable<T> = T | T[]

/**
 * A literal type that supports custom further strings but preserves autocompletion in IDEs.
 *
 * @see [copied from issue](https://github.com/microsoft/TypeScript/issues/29729#issuecomment-471566609)
 */
export type LiteralUnion<Union extends Base, Base = string>
  = | Union
    | (Base & { zz_IGNORE_ME?: never })

export type RegExpLike = RegExp | string

export type KebabCase<S extends string, B extends boolean = true>
  = S extends `${infer F}${infer O}`
    ? F extends Uncapitalize<F>
      ? `${F}${KebabCase<O, false>}`
      : B extends true
        ? `${Uncapitalize<F>}${KebabCase<O, false>}`
        : `-${Uncapitalize<F>}${KebabCase<O, false>}`
    : S
