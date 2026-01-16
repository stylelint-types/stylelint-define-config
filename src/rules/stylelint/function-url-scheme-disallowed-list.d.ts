import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionUrlSchemeDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [scheme: string]
>
