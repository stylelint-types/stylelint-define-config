import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type CustomPropertyEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [],
  {
    except?: LiteralUnion<
      'after-comment' | 'after-custom-property' | 'after-block' | 'first-nested'
    >[]
    ignore?: LiteralUnion<
      'after-comment' | 'first-nested' | 'inside-single-line-block' | 'after-custom-property'
    >[]
  }
>
