import type { RuleConfig } from '../rule-config'

export type ColorNoHexOptions = RuleConfig<
  true,
  {
    message?: string | ((hex: string, expected: string) => string)
  }
>
