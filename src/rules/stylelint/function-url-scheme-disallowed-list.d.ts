import type { RuleConfig } from '../rule-config'

export type FunctionUrlSchemeDisallowedListOptions = RuleConfig<
  string | RegExp | (string | RegExp)[],
  {
    message?: string | ((scheme: string) => string)
  }
>
