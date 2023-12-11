import type { RuleConfig } from '../rule-config'

type TimeMinMillisecondsIgnore = 'delay'
export type TimeMinMillisecondsOptions = RuleConfig<
  number,
  {
    /**
     * Ignore time values for an animation or transition delay.
     */
    ignore?: TimeMinMillisecondsIgnore[]
    message?: string | ((time: number) => string)
  }
>
