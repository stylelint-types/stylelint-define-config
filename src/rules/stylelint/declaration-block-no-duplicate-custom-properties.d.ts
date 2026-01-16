import type { RuleConfig } from '../rule-config'

export type DeclarationBlockNoDuplicateCustomPropertiesOptions = RuleConfig<
  true,
  [property: string]
>
