import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CommentWordDisallowedListOptions = RuleConfig<
  RegExpLike | RegExpLike[],
  {
    message?: string | ((pattern: string) => string)
  }
>
