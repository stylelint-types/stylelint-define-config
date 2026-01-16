import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<'after-comment' | 'after-declaration' | 'after-block' | 'first-nested'>[]
    ignore?: LiteralUnion<'after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block'>[]
    ignoreProperties?: RegExpLike[]
  }
>
