import type { CSSPropertiesMap } from '../../types/index.js'
import type { Arrayable, LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type PropertyAllowedListOptions = RuleConfig<
  Arrayable<LiteralUnion<CSSPropertiesMap> | RegExp>,
  [property: string]
>
