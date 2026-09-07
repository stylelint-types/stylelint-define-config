import type { RuleConfig } from '../rule-config.js'

export type ColorFunctionAliasNatationOptions = RuleConfig<
  'without-alpha' | 'with-alpha',
  [unfixed: string, fixed: string]
>
