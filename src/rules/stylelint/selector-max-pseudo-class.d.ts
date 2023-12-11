import type { RuleConfig } from '../rule-config'

export type SelectorMaxPseudoClassOptions = RuleConfig<
  number,
  {
    message?: string | ((selector: string, max: number | string) => string)
  }
>
