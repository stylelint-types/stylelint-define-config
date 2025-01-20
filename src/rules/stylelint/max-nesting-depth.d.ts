import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

export type MaxNestingDepthOptions = RuleConfig<
  number,
  {
    ignore?: ('blockless-at-rules' | 'pseudo-classes')[]
    ignoreAtRules?: (AtRules | RegExp)[]
    message?: string | ((depth: string) => string)
  }
>
