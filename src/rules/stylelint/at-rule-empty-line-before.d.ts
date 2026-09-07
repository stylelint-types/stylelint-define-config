import type { AtRules } from '../../types/index.js'
import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type AtRuleEmptyLineBeforeOptions = RuleConfig<
  'always' | 'never',
  [atRule: string],
  {
    except?: LiteralUnion<
      | 'after-same-name'
      | 'inside-block'
      | 'blockless-after-same-name-blockless'
      | 'blockless-after-blockless'
      | 'first-nested'
    >[]
    ignore?: LiteralUnion<
      | 'after-comment'
      | 'first-nested'
      | 'inside-block'
      | 'blockless-after-same-name-blockless'
      | 'blockless-after-blockless'
    >[]
    ignoreAtRules?: (AtRules | RegExp)[]
  }
>
