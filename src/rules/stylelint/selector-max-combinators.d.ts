import type { RuleConfig } from '../rule-config'

export type SelectorMaxCombinatorsOptions = RuleConfig<
  number,
  {
    message?: string | ((selector: string, max: number | string) => string)
  }
>
