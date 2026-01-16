import type { CSSFunction } from '../../types'
import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionDisallowedListOptions = RuleConfig<
  Arrayable<CSSFunction | RegExpLike>,
  [name: string]
>
