import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationPropertyValueKeywordNoDeprecatedOptions = RuleConfig<
  true,
  [property: string, keyword: string],
  {
    ignoreKeywords?: Arrayable<RegExpLike>
  }
>
