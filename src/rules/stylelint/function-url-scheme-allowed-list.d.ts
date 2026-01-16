import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionUrlSchemeAllowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [scheme: string]
>
