import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CustomPropertyEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  {
    except?: LiteralUnion<'after-comment' | 'after-custom-property' | 'first-nested'>[]
    ignore?: LiteralUnion<'after-comment' | 'first-nested' | 'inside-single-line-block' | 'after-custom-property'>[]
    message?: string | (() => string)
  }
>
