import type { RuleConfig } from '../rule-config'

export type SelectorMaxClassOptions = RuleConfig<
  number,
  [selector: string, max: number | string]
>
