import type { RuleConfig } from '../rule-config'

export type SelectorMaxCompoundSelectorsOptions = RuleConfig<
  number,
  {
    message?: string | ((selector: string, max: number | string) => string)
  }
>
