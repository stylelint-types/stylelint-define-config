import type { RuleConfig } from '../rule-config'

export type MediaQueryNoInvalidOptions = RuleConfig<
  true,
  {
    message?: string | ((query: string) => string)
  }
>
