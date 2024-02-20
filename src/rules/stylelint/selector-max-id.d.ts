import type { RuleConfig } from '../rule-config'

export type SelectorMaxIdOptions = RuleConfig<
  number,
  {
    checkContextFunctionalPseudoClasses?: (string | RegExp)[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
