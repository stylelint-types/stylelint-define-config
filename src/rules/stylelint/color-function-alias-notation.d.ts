import type { RuleConfig } from '../rule-config'

export type ColorFunctionAliasNatationOptions = RuleConfig<
  'without-alpha' | 'with-alpha',
  {
    message?: string | ((unfixed: string, fixed: string) => string)
  }
>
