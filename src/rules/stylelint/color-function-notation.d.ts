import type { RuleConfig } from '../rule-config'

export type ColorFunctionNatationPrimaryOptions = 'modern' | 'legacy'

type ColorFunctionNatationIgnore = 'with-var-inside'

export interface ColorFunctionNatationSecondaryOptions {
  ignore?: ColorFunctionNatationIgnore[]
  message?: string | ((primary: string) => string)
}

export type ColorFunctionNatationOptions = RuleConfig<
  ColorFunctionNatationPrimaryOptions,
  ColorFunctionNatationSecondaryOptions
>
