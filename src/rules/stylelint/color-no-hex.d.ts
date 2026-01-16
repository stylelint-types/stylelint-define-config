import type { RuleConfig } from '../rule-config'

export type ColorNoHexOptions = RuleConfig<
  true,
  [hex: string, expected: string]
>
