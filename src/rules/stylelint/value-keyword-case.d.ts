import type { RuleConfig } from '../rule-config'
import type { CSSFunction, CSSPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'

export type ValueKeywordCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    /**
     * Ignore case of keywords values.
     */
    ignoreKeywords?: (string | RegExp)[]
    /**
     * Ignore case of the values of the listed properties.
     */
    ignoreProperties?: (CSSPropertiesMap | RegExpLike)[]
    /**
     * Ignore case of the values inside the listed functions.
     */
    ignoreFunctions?: (CSSFunction | RegExpLike)[]
    /**
     * If `true`, this rule expects SVG keywords to be camel case when the primary option is "lower".
     * @default false
     */
    camelCaseSvgKeywords?: boolean
    message?: string | ((actual: number, expected: string) => string)
  }
>
