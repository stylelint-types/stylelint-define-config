import type { RuleConfig } from '../rule-config'

export type FunctionNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreFunctions?: (string | RegExp)[]
    message?: string | ((name: string) => string)
  }
>
