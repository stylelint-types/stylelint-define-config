import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type TimeMinMillisecondsOptions = RuleConfig<
  number,
  [time: number],
  {
    /**
     * Ignore time values for an animation or transition delay.
     */
    ignore?: LiteralUnion<'delay'>[]
  }
>
