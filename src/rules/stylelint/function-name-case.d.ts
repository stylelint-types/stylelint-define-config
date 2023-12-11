import type { RuleConfig } from '../rule-config'

export type FunctionNameCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    ignoreFunctions?: (string | RegExp)[]
    message?: string | ((actual: string, expected: string) => string)
  }
>
