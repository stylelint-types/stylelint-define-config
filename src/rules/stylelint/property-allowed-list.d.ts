import type { CSSPropertiesMap } from '../../types'
import type { Arrayable, LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type PropertyAllowedListOptions = RuleConfig<
  Arrayable<LiteralUnion<CSSPropertiesMap> | RegExp>,
  [property: string]
>
