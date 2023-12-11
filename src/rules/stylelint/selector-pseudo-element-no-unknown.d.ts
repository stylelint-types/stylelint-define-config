import type { RuleConfig } from '../rule-config'

export type SelectorPseudoElementNoUnknownOptions = RuleConfig<
  true,
  {
    ignorePseudoElements?: (string | RegExp)[]
    message?: string | ((selector: string) => string)
  }
>
