import type { RuleConfig } from '../rule-config'

export type HueDegreeNotationOptions = RuleConfig<
  'angle' | 'number',
  {
    message?: string | ((unfixed: string, fixed: string) => string)
  }
>
