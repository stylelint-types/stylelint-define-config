import type { RuleConfig } from '../rule-config'

export type ColorHexLengthOptions = RuleConfig<
  'short' | 'long',
  [actual: string, expected: string]
>
