import type { RuleConfig } from '../rule-config'

export type NoDuplicateAtImportRulesOptions = RuleConfig<
  true,
  [atImport: string]
>
