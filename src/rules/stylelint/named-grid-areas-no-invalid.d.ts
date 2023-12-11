import type { RuleConfig } from '../rule-config'

export type NamedGridAreasNoInvalidOptions = RuleConfig<
  true,
  {
    message?: string | ((name: string) => string)
  }
>
