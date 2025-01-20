import type { RuleConfig } from '../rule-config'

export type ColorHexLengthOptions = RuleConfig<
  'short' | 'long',
  {
    message?: string | ((actual: string, expected: string) => string)
  }
>
