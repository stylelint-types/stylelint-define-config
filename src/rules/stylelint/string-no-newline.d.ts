import type { RuleConfig } from '../rule-config'

export type StringNoNewlineOptions = RuleConfig<true, {
  ignore?: ('at-rule-preludes' | 'declaration-values')[]
  message?: string | (() => string)
}>
