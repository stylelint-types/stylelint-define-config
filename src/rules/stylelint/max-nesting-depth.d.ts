import type { AtRules } from '../../types/index.js'
import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MaxNestingDepthOptions = RuleConfig<
  number,
  [depth: string],
  {
    ignore?: LiteralUnion<'blockless-at-rules' | 'pseudo-classes'>[]
    ignoreAtRules?: (AtRules | RegExp)[]
  }
>
