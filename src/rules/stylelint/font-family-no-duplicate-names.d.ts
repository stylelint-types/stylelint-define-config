import type { RuleConfig } from '../rule-config'

export type FontFamilyNoDuplicateNamesOptions = RuleConfig<
  true,
  {
    ignoreFontFamilyNames?: (string | RegExp)[]
    message?: string | ((name: string) => string)
  }
>
