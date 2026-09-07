import type { RuleConfig } from '../rule-config.js'

export type DeclarationBlockNoDuplicateCustomPropertiesOptions = RuleConfig<
  true,
  [property: string]
>
