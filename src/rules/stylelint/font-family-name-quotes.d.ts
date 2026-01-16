import type { RuleConfig } from '../rule-config'

export type FontFamilyNameQuotesOptions = RuleConfig<
  'always-where-required' | 'always-where-recommended' | 'always-unless-keyword',
  [familyName: string]
>
