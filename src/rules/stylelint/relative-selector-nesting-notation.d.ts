import type { RuleConfig } from '../rule-config'

export type RelativeSelectorNestingNotationOptions = RuleConfig<
  'explicit' | 'implicit',
  [primary: string]
>
