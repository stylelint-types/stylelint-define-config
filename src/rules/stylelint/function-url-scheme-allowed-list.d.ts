import type { RuleConfig } from '../rule-config'

export type FunctionUrlSchemeAllowedListOptions = RuleConfig<
  RegExp | string | (RegExp | string)[],
  {
    message?: string | ((scheme: string) => string)
  }
>
