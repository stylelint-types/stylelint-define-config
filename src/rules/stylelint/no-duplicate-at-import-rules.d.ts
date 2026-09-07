import type { RuleConfig } from '../rule-config.js'

export type NoDuplicateAtImportRulesOptions = RuleConfig<true, [atImport: string]>
