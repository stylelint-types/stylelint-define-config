import type { RuleConfig } from '../rule-config'

export type KeyframeSelectorNotationOptions = RuleConfig<
  'keyword' | 'percentage' | 'percentage-unless-within-keyword-only-block',
  {
    message?: string | ((selector: string, fixedSelector: string) => string)
  }
>
