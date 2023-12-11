import type { RuleConfig } from '../rule-config'
import type { LiteralUnion } from '../../utils'

type DeclarationBlockNoDuplicatePropertiesIgnore = LiteralUnion<
  | 'consecutive-duplicates'
  | 'consecutive-duplicates-with-different-values'
  | 'consecutive-duplicates-with-different-syntaxes'
  | 'consecutive-duplicates-with-same-prefixless-values'
>

export type DeclarationBlockNoDuplicatePropertiesOptions = RuleConfig<
  true,
  {
    ignore?: [DeclarationBlockNoDuplicatePropertiesIgnore]
    ignoreProperties?: (string | RegExp)[]
    message?: string | ((property: string) => string)
  }
>
