import type { RuleConfig } from '../rule-config'

export type ColorFunctionAliasNatationOptions = RuleConfig<
  'without-alpha' | 'with-alpha',
  [unfixed: string, fixed: string]
>
