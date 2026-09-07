import type { CSSPropertiesMap } from '../../types/index.js'
import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type AlphaValueNotationOptions = RuleConfig<
  'number' | 'percentage',
  [unfixed: string, fixed: string],
  {
    /**
     * Reverse the primary option for matching properties.
     * @see [optional secondary options](https://stylelint.io/user-guide/rules/alpha-value-notation#optional-secondary-options)
     */
    exceptProperties?: (LiteralUnion<CSSPropertiesMap> | RegExp)[]
  }
>
