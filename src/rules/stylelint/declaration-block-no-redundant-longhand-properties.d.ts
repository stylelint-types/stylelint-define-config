import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationBlockNoRedundantLonghandPropertiesOptions = RuleConfig<
  true,
  [props: string],
  {
    ignoreLonghands?: string | string[]
    ignoreShorthands?: RegExpLike[]
  }
>
