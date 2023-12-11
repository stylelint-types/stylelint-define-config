import type { RuleConfig } from '../rule-config'

export type FontFamilyNoMissingGenericFamilyKeywordOptions = RuleConfig<
  true,
  {
    ignoreFontFamilies?: (string | RegExp)[]
  }
>
