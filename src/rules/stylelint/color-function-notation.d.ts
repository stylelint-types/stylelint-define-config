import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ColorFunctionNatationOptions = RuleConfig<
  'modern' | 'legacy',
  [primary: string],
  {
    ignore?: LiteralUnion<'with-var-inside'>[]
  }
>
