import type { RuleConfig } from '../rule-config'

export type ColorHexAlphaPrimaryOptions = 'always' | 'never'

export interface ColorHexAlphaSecondaryOptions {
  message?: string | ((hex: string) => string)
}

export type ColorHexAlphaOptions = RuleConfig<
  ColorHexAlphaPrimaryOptions,
  ColorHexAlphaSecondaryOptions
>
