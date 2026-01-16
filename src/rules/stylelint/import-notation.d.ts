import type { RuleConfig } from '../rule-config'

export type ImportNotationOptions = RuleConfig<
  'string' | 'url',
  [unfixed: string, fixed: string]
>
