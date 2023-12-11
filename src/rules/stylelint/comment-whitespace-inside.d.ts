import type { RuleConfig } from '../rule-config'

export type CommentWhitespaceInsidePrimaryOptions = 'always' | 'never'
export type CommentWhitespaceInsideOptions = RuleConfig<
  CommentWhitespaceInsidePrimaryOptions
>
