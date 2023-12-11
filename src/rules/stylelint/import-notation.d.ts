import type { RuleConfig } from '../rule-config'

export type ImportNotationOptions = RuleConfig<
  'string' | 'url',
  {
    message?: string | ((unfixed: string, fixed: string) => string)
  }
>
