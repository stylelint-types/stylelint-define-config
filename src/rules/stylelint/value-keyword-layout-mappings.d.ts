import type { StandardPropertiesMap } from '../../types/index.js'
import type { LiteralUnion, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
