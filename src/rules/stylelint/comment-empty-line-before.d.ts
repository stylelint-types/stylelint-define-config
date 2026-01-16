import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CommentEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<'first-nested'>[]
    ignore?: LiteralUnion<'stylelint-commands' | 'after-comment'>[]
    ignoreComments?: RegExpLike[]
  }
>
