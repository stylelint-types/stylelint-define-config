import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

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
