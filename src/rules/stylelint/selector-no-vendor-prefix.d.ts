import type { RuleConfig } from '../rule-config'

export type SelectorNoVendorPrefixOptions = RuleConfig<
  true,
  {
    ignoreSelectors?: (string | RegExp)[]
    message?: string | ((selector: string) => string)
  }
>
