import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CommentEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  {
    except?: ('first-nested')[]
    ignore?: ('stylelint-commands' | 'after-comment')[]
    ignoreComments?: RegExpLike[]
  }
>
