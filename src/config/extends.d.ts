import type { LiteralUnion } from '../utils'

export interface CustomExtends {}

export type KnownExtends = LiteralUnion<
  | 'stylelint-config-standard'
  | 'stylelint-config-standard-scss'
  | 'stylelint-config-recess-order'
  | 'stylelint-config-rational-order'
  | 'stylelint-config-prettier'
  | 'stylelint-config-prettier-scss'
  | 'stylelint-config-recommended-vue'
  | 'stylelint-config-sass-guidelines'
  | 'stylelint-config-primer'
  | 'stylelint-config-wikimedia'
  | 'stylelint-config-wordpress'
  | keyof CustomExtends
>
