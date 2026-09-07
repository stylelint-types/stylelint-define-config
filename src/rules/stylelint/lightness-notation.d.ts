import type { RuleConfig } from '../rule-config.js'

export type LightnessNotationOptions = RuleConfig<
  'percentage' | 'number',
  [unfixed: string, fixed: string]
>
