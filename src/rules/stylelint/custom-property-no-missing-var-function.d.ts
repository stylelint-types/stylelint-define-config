import type { RuleConfig } from '../rule-config'

export type CustomPropertyNoMissingVarFunctionOptions = RuleConfig<
  true,
  [customProperty: string]
>
