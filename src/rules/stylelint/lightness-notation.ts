import type { RuleConfig } from '../rule-config'

export type LightnessNotationOptions = RuleConfig<
  'percentage' | 'number',
  [unfixed: string, fixed: string]
>
