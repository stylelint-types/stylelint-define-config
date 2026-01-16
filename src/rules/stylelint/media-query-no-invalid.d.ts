import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type MediaQueryNoInvalidOptions = RuleConfig<
  true,
  [query: string, reason: string],
  {
    ignoreFunctions?: Arrayable<RegExpLike>
  }
>
