import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FontFamilyNoMissingGenericFamilyKeywordOptions = RuleConfig<
  true,
  [],
  {
    ignoreFontFamilies?: RegExpLike[]
  }
>
