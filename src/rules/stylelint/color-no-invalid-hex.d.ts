import type { RuleConfig } from '../rule-config'

export interface ColorNoInvalidHexSecondaryOptions {
  message?: string | ((hex: string, expected: string) => string)
}

export type ColorNoInvalidHexOptions = RuleConfig<
  true,
  ColorNoInvalidHexSecondaryOptions
>
