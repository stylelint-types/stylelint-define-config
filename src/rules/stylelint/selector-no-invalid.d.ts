import type { RuleConfig } from '../rule-config'

export type SelectorNoInvalidOptions = RuleConfig<
  true,
  [selector: string, season: string]
>
