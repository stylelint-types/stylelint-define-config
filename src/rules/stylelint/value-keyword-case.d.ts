import type { CSSFunction, CSSPropertiesMap } from '../../types/index.js'
import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ValueKeywordCaseOptions = RuleConfig<
  'lower' | 'upper',
  [actual: number, expected: string],
  {
    /**
     * Ignore case of keywords values.
     */
    ignoreKeywords?: RegExpLike[]
    /**
     * Ignore case of the values of the listed properties.
     */
    ignoreProperties?: (CSSPropertiesMap | RegExp)[]
    /**
     * Ignore case of the values inside the listed functions.
     */
    ignoreFunctions?: (CSSFunction | RegExp)[]
    /**
     * If `true`, this rule expects SVG keywords to be camel case when the primary option is "lower".
     * @default false
     */
    camelCaseSvgKeywords?: boolean
  }
>
