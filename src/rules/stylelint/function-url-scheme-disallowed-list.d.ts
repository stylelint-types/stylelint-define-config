import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FunctionUrlSchemeDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [scheme: string]
>
