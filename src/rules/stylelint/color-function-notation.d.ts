import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ColorFunctionNatationOptions = RuleConfig<
  'modern' | 'legacy',
  [primary: string],
  {
    ignore?: LiteralUnion<'with-var-inside'>[]
  }
>
