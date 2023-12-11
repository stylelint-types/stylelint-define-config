import type { RuleConfig } from '../rule-config'

export type SelectorPseudoClassNoUnknownOptions = RuleConfig<
  true,
  {
    ignorePseudoClasses?: (string | RegExp)[]
    message?: string | ((selector: string) => string)
  }
>
