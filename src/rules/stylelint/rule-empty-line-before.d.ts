import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type RuleEmptyLineBeforePrimaryOptions = 'always' | 'never' | 'always-multi-line' | 'never-multi-line'

type RuleEmptyLineBeforeExcept = LiteralUnion<'after-rule' | 'after-single-line-comment' | 'inside-block-and-after-rule' | 'inside-block' | 'first-nested'>

type RuleEmptyLineBeforeIgnore = LiteralUnion<'after-comment' | 'first-nested' | 'inside-block'>

export interface RuleEmptyLineBeforeSecondaryOptions {
  except?: RuleEmptyLineBeforeExcept[]
  ignore?: RuleEmptyLineBeforeIgnore[]
  message?: string | ((property: string) => string)
}

export type RuleEmptyLineBeforeOptions = RuleConfig<
  RuleEmptyLineBeforePrimaryOptions,
  RuleEmptyLineBeforeSecondaryOptions
>
