import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxSpecificityOptions = RuleConfig<
  `${string},${string},${string}`,
  [selector: string, max: number | string]
>
