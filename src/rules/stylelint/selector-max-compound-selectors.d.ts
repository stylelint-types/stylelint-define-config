import type { RuleConfig } from '../rule-config'

export type SelectorMaxCompoundSelectorsOptions = RuleConfig<
  number,
  {
    ignoreSelectors?: (string | RegExp)[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
