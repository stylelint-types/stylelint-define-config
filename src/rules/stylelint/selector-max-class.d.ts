import type { RuleConfig } from '../rule-config'

export type SelectorMaxClassOptions = RuleConfig<
  number,
  {
    message?: string | ((selector: string, max: number | string) => string)
  }
>
