import type { RuleConfig } from '../rule-config'

export type ValueNoVendorPrefixOptions = RuleConfig<
  true,
  {
    ignoreValues: string[]
    message?: string | ((actual: number, expected: string) => string)
  }
>
