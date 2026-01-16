import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyValueKeywordNoDeprecatedOptions = RuleConfig<
  true,
  [property: string, keyword: string],
  {
    ignoreKeywords?: Arrayable<RegExpLike>
  }
>
