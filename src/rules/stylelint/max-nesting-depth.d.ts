import type { AtRules } from '../../types'
import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type MaxNestingDepthOptions = RuleConfig<
  number,
  [depth: string],
  {
    ignore?: LiteralUnion<'blockless-at-rules' | 'pseudo-classes'>[]
    ignoreAtRules?: (AtRules | RegExp)[]
  }
>
