import type { RuleConfig } from '../rule-config'

export type SelectorMaxAttributeOptions = RuleConfig<
  number,
  {
    ignoreAttributes?: (string | RegExp)[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
