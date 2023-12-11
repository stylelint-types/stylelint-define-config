import type { RuleConfig } from '../rule-config'

export type NoDuplicateAtImportRulesOptions = RuleConfig<
  true,
  {
    message?: string | ((atImport: string) => string)
  }
>
