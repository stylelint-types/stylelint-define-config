import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type RuleEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never' | 'always-multi-line' | 'never-multi-line',
  [property: string],
  {
    except?: LiteralUnion<
      | 'after-rule'
      | 'after-single-line-comment'
      | 'inside-block-and-after-rule'
      | 'inside-block'
      | 'first-nested'
    >[]
    ignore?: LiteralUnion<'after-comment' | 'first-nested' | 'inside-block'>[]
  }
>
