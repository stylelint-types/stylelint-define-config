import type { AtRules } from '../../types'
import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type AtRuleEmptyLineBeforePrimaryOptions = 'always' | 'never'

export type AtRuleEmptyLineBeforeExcept = LiteralUnion<'after-same-name' | 'inside-block' | 'blockless-after-same-name-blockless' | 'blockless-after-blockless' | 'first-nested'>

export type AtRuleEmptyLineBeforeExceptIgnore = LiteralUnion<'after-comment' | 'first-nested' | 'inside-block' | 'blockless-after-same-name-blockless' | 'blockless-after-blockless'>

export interface AtRuleEmptyLineBeforeSecondaryOptions {
  except?: AtRuleEmptyLineBeforeExcept[]
  ignore?: AtRuleEmptyLineBeforeExceptIgnore[]
  ignoreAtRules?: AtRules[]
  message?: string | ((atRule: string) => string)
}

export type AtRuleEmptyLineBeforeOptions = RuleConfig<
  AtRuleEmptyLineBeforePrimaryOptions,
  AtRuleEmptyLineBeforeSecondaryOptions
>
