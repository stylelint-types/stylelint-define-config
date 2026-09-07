import type { RuleConfig } from '../rule-config.js'

export type RelativeSelectorNestingNotationOptions = RuleConfig<
  'explicit' | 'implicit',
  [primary: string]
>
