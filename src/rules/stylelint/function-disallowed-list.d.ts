import type { CSSFunction } from '../../types/index.js'
import type { Arrayable, LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FunctionDisallowedListOptions = RuleConfig<
  Arrayable<LiteralUnion<CSSFunction> | RegExp>,
  [name: string]
>
