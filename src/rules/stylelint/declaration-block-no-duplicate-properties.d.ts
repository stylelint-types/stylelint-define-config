import type { LiteralUnion, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationBlockNoDuplicatePropertiesOptions = RuleConfig<
  true,
  [property: string],
  {
    ignore?: LiteralUnion<
      | 'consecutive-duplicates'
      | 'consecutive-duplicates-with-different-values'
      | 'consecutive-duplicates-with-different-syntaxes'
      | 'consecutive-duplicates-with-same-prefixless-values'
    >[]
    ignoreProperties?: RegExpLike[]
  }
>
