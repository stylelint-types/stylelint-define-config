import type { RuleConfig } from '../rule-config.js'

export type HueDegreeNotationOptions = RuleConfig<
  'angle' | 'number',
  [unfixed: string, fixed: string]
>
