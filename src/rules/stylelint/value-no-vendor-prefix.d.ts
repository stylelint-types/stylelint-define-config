import type { RuleConfig } from '../rule-config'

export type ValueNoVendorPrefixOptions = RuleConfig<
  true,
  {
    ignoreValues: string | RegExp | (string | RegExp)[]
    message?: string | ((actual: number, expected: string) => string)
  }
>
