import type { RuleConfig } from '../rule-config'

export type MediaQueryNoInvalidOptions = RuleConfig<
  true,
  {
    message?: string | ((query: string, reason: string) => string)
    ignoreFunctions?: string | RegExp | (string | RegExp)[]
  }
>
