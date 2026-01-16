import type { RuleConfig } from '../rule-config'

export type SelectorNotNotationOptions = RuleConfig<
  'simple' | 'complex',
  [selector: string]
>
