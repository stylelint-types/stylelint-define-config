import type { RuleConfig } from '../rule-config'

export type ColorFunctionNatationOptions = RuleConfig<
  'modern' | 'legacy',
  {
    ignore?: ('with-var-inside')[]
    message?: string | ((primary: string) => string)
  }
>
