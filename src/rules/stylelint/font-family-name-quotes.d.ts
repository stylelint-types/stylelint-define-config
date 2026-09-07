import type { RuleConfig } from '../rule-config.js'

export type FontFamilyNameQuotesOptions = RuleConfig<
  'always-where-required' | 'always-where-recommended' | 'always-unless-keyword',
  [familyName: string]
>
