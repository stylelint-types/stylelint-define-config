import type { RuleConfig } from '../rule-config.js'

export type SelectorNoUnmatchableOptions = RuleConfig<
  true,
  [selector: string, resolvedSelector: string, reason: string]
>
