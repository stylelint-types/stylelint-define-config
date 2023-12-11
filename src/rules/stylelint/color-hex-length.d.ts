import type { RuleConfig } from '../rule-config'

export type ColorHexLengthPrimaryOptions = 'short' | 'long'

export interface ColorHexLengthSecondaryOptions {
  message?: string | ((actual: string, expected: string) => string)
}

export type ColorHexLengthOptions = RuleConfig<
  ColorHexLengthPrimaryOptions,
  ColorHexLengthSecondaryOptions
>
