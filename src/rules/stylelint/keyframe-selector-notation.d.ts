import type { RuleConfig } from '../rule-config.js'

export type KeyframeSelectorNotationOptions = RuleConfig<
  'keyword' | 'percentage' | 'percentage-unless-within-keyword-only-block',
  [selector: string, fixedSelector: string]
>
