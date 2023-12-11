import type { RuleConfig } from '../rule-config'

export interface ColorNoHexSecondaryOptions {
  message?: string | ((hex: string, expected: string) => string)
}

export type ColorNoHexOptions = RuleConfig<
  true,
  ColorNoHexSecondaryOptions
>
