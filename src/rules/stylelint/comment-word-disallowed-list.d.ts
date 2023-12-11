import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CommentWordDisallowedListPrimaryOption = RegExpLike | RegExpLike[]

export interface CommentWordDisallowedListSecondaryOptions {
  message?: string | ((pattern: string) => string)
}

export type CommentWordDisallowedListOptions = RuleConfig<
  CommentWordDisallowedListPrimaryOption,
  CommentWordDisallowedListSecondaryOptions
>
