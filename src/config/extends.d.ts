import type { LiteralUnion } from '../utils'

/**
 * This is a special exported interface for other packages to declare
 * additional types that should bail out for stylelint extends. For example
 * `stylelint-scss` can declare it like so in its `d.ts`:
 *
 * ```ts
 * declare module 'stylelint-define-config' {
 *   export interface CustomExtends {
 *     'stylelint-config-standard-scss': void;
 *
 *     // ... more extends
 *   }
 * }
 * ```
 */
export interface CustomExtends {}

export type KnownExtends = LiteralUnion<
  | 'stylelint-config-standard'
  | 'stylelint-config-standard-scss'
  | 'stylelint-config-prettier'
  | 'stylelint-config-prettier-scss'
  | 'stylelint-config-recommended-vue'
  | keyof CustomExtends
>
