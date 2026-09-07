import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type BlockNoEmptyOptions = RuleConfig<
  true,
  [block: string],
  {
    ignore?: LiteralUnion<'comments'>[]
  }
>
