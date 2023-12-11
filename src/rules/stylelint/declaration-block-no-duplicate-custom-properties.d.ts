import type { RuleConfig } from '../rule-config'

export type DeclarationBlockNoDuplicateCustomPropertiesOptions = RuleConfig<
  true,
  {
    ignoreProperties?: (string | RegExp)[]
    message?: string | ((property: string) => string)
  }
>
