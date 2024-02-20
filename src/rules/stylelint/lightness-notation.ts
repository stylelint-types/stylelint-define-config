import type { RuleConfig } from '../rule-config'

export type LightnessNotationOptions = RuleConfig<
  'percentage' | 'number',
  {
    message?: string | ((unfixed: string, fixed: string) => string)
  }
>
