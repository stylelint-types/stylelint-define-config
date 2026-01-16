import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type BlockNoEmptyOptions = RuleConfig<
  true,
  [block: string],
  {
    ignore?: LiteralUnion<'comments'>[]
  }
>
