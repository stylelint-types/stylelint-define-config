import type { RuleConfig } from '../rule-config'

export type HueDegreeNotationOptions = RuleConfig<
  'angle' | 'number',
  [unfixed: string, fixed: string]
>
