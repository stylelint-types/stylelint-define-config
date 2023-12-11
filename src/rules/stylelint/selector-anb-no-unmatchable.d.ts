import type { RuleConfig } from '../rule-config'

export type SectorAnbNoUnmatchableOptions = RuleConfig<
  true,
  {
    message?: string | ((pseudoClass: string) => string)
  }
>
