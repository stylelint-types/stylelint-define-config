import type { RuleConfig } from '../rule-config'

export type ColorNoInvalidHexOptions = RuleConfig<
  true,
  {
    message?: string | ((hex: string, expected: string) => string)
  }
>
