import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
