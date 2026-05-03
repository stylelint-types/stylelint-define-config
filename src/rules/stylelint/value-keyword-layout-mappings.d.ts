import type { StandardPropertiesMap } from '../../types'
import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ValueKeywordLayoutMappingsOptions = RuleConfig<
  'flow-relative' | 'physical',
  [actual: string, expected: string],
  {
    /**
     * Ignore the specified properties.
     */
    ignoreProperties?: (LiteralUnion<StandardPropertiesMap> | RegExp)[]

    /**
     * Ignore the specified keywords.
     */
    ignoreKeywords?: RegExpLike[]
  }
>
