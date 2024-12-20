import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

type CustomPropertyEmptyLineBeforeExcept = LiteralUnion<'after-comment' | 'after-custom-property' | 'first-nested'>
type CustomPropertyEmptyLineBeforeIgnore = LiteralUnion<'after-comment' | 'first-nested' | 'inside-single-line-block'>

export interface CustomPropertyEmptyLineBeforeSecondaryOptions {
  except?: CustomPropertyEmptyLineBeforeExcept[]
  ignore?: CustomPropertyEmptyLineBeforeIgnore[]
}

export type CustomPropertyEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  CustomPropertyEmptyLineBeforeSecondaryOptions
>
