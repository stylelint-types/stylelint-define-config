import type { RuleConfig } from '../rule-config'

export type SelectorMaxPseudoClassOptions = RuleConfig<
  number,
  [selector: string, max: number | string]
>
