import type { RuleConfig } from '../rule-config'

export type ColorNoInvalidHexOptions = RuleConfig<
  true,
  [hex: string, expected: string]
>
