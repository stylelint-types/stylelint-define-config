import type { RuleConfig } from '../rule-config'

export type SelectorMaxCombinatorsOptions = RuleConfig<
  number,
  [selector: string, max: number | string]
>
