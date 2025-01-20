import type { RuleConfig } from '../rule-config'

export type ColorHexAlphaOptions = RuleConfig<
  'always' | 'never',
  {
    message?: string | ((hex: string) => string)
  }
>
