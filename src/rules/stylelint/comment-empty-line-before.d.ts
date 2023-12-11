import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CommentEmptyLineBeforeExcept = 'first-nested'
export type CommentEmptyLineBeforeIgnore = 'stylelint-commands' | 'after-comment'

export type CommentEmptyLineBeforePrimaryOptions = 'always' | 'never'

export interface CommentEmptyLineBeforeSecondaryOptions {
  except?: CommentEmptyLineBeforeExcept[]
  ignore?: CommentEmptyLineBeforeIgnore[]
  ignoreComments?: RegExpLike[]
}

export type CommentEmptyLineBeforeOptions = RuleConfig<
  CommentEmptyLineBeforePrimaryOptions,
  CommentEmptyLineBeforeSecondaryOptions
>
