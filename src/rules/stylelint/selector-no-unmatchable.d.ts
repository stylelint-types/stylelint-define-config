import type { RuleConfig } from '../rule-config'

export type SelectorNoUnmatchableOptions = RuleConfig<
  true,
  [selector: string, resolvedSelector: string, reason: string]
>
