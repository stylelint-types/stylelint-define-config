import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MediaQueryNoInvalidOptions = RuleConfig<
  true,
  [query: string, reason: string],
  {
    ignoreFunctions?: Arrayable<RegExpLike>
  }
>
