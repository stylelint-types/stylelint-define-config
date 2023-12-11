import type { RuleConfig } from '../rule-config'

export type MediaFeatureRangeNotationOptions = RuleConfig<
  'context' | 'prefix',
  {
    message?: string | ((primary: string) => string)
  }
>
