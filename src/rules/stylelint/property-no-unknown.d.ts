import type { AtRules } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type PropertyNoUnknownOptions = RuleConfig<
  true,
  [property: string],
  {
    ignoreProperties?: RegExpLike[]
    /**
     * Skips checking properties of the given selectors against this rule.
     */
    ignoreSelectors?: RegExpLike[]
    /**
     * Ignores properties nested within specified at-rules.
     */
    ignoreAtRules?: (AtRules | RegExp)[]
    /**
     * If true, this rule will check vendor-prefixed properties.
     * @default false
     */
    checkPrefixed?: boolean
  }
>
