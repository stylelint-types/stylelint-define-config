import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxPseudoClassOptions = RuleConfig<
  number,
  [selector: string, max: number | string]
>
