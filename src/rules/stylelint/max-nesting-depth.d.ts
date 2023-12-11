import type { AtRules } from '../../types'
import type { RuleConfig } from '../rule-config'

type MaxNestingDepthIgnore = 'blockless-at-rules' | 'pseudo-classes'

export interface MaxNestingDepthSecondaryOptions {
  ignore?: [MaxNestingDepthIgnore]
  ignoreAtRules?: (AtRules | RegExp)[]
  message?: string | ((depth: string) => string)
}

export type MaxNestingDepthOptions = RuleConfig<
  number,
  MaxNestingDepthSecondaryOptions
>
