import type { RuleConfig } from '../rule-config'

export type SelectorMaxIdOptions = RuleConfig<
  number,
  {
    message?: string | ((selector: string, max: number | string) => string)
  }
>
