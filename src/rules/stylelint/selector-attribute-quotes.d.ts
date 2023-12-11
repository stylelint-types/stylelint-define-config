import type { RuleConfig } from '../rule-config'

export type SelectorAttributeQuotesOptions = RuleConfig<
  'always' | 'never',
  {
    message?: string | ((value: string) => string)
  }
>
