import type { RuleConfig } from '../rule-config'

export type ShorthandPropertyNoRedundantValuesOptions = RuleConfig<
  true,
  {
    message?: string | ((unexpected: string, expected: string) => string)
  }
>
