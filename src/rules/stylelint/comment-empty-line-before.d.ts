import type { LiteralUnion, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type CommentEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<'first-nested'>[]
    ignore?: LiteralUnion<'stylelint-commands' | 'after-comment'>[]
    ignoreComments?: RegExpLike[]
  }
>
