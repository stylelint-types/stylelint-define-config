import type { RuleConfig } from '../rule-config'

export type CustomPropertyNoMissingVarFunctionOptions = RuleConfig<
  true,
  {
    message?: string | ((customProperty: string) => string)
  }
>
