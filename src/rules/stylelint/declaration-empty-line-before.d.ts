import type { RuleConfig } from '../rule-config'
import type { LiteralUnion, RegExpLike } from '../../utils'

type DeclarationEmptyLineBeforeIgnore = LiteralUnion<'after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block'>

type DeclarationEmptyLineBeforeExcept = LiteralUnion<'after-comment' | 'after-declaration' | 'first-nested'>

export type DeclarationEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  {
    except?: DeclarationEmptyLineBeforeExcept[]
    ignore?: DeclarationEmptyLineBeforeIgnore[]
    ignoreProperties?: RegExpLike[]
  }
>
