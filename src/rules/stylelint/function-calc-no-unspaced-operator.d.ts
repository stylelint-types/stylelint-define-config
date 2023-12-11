import type { RuleConfig } from '../rule-config'

export type FunctionCalcNoUnspacedOperatorOptions = RuleConfig<
  true,
  {
    message?: string | ((operator: string) => string)
  }
>
