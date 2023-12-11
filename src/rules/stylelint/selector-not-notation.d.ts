import type { RuleConfig } from '../rule-config'

export type SelectorNotNotationOptions = RuleConfig<
  'simple' | 'complex',
  {
    message?: string | ((selector: string) => string)
  }
>
