import type { RuleConfig } from '../rule-config'
import type { CSSPropertiesMap } from '../../types'

export type AlphaValueNotationPrimaryOptions = 'number' | 'percentage'

export interface AlphaValueNotationSecondaryOptions {
  /**
   * Reverse the primary option for matching properties.
   * @see [optional secondary options](https://stylelint.io/user-guide/rules/alpha-value-notation#optional-secondary-options)
   */
  exceptProperties?: (CSSPropertiesMap | RegExp | `/${string}/`)[]

  message?: string | ((unfixed: string, fixed: string) => string)
}

export type AlphaValueNotationOptions = RuleConfig<
  AlphaValueNotationPrimaryOptions,
  AlphaValueNotationSecondaryOptions
>
