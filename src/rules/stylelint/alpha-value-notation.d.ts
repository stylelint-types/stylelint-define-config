import type { CSSPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type AlphaValueNotationOptions = RuleConfig<
  'number' | 'percentage',
  [unfixed: string, fixed: string],
  {
    /**
     * Reverse the primary option for matching properties.
     * @see [optional secondary options](https://stylelint.io/user-guide/rules/alpha-value-notation#optional-secondary-options)
     */
    exceptProperties?: (CSSPropertiesMap | RegExpLike)[]
  }
>
