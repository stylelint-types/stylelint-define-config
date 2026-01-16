import type { RuleConfig } from '../rule-config'

export type FunctionCalcNoUnspacedOperatorOptions = RuleConfig<
  true,
  [operator: string]
>
