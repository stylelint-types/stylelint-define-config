import type { RuleConfig } from '../rule-config'

export type ColorHexAlphaOptions = RuleConfig<
  'always' | 'never',
  [hex: string]
>
