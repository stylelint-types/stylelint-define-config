import type { CSSPropertiesMap } from '../../types/index.js'
import type { Arrayable, LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

type RuleSelectorPropertyDisallowed = LiteralUnion<CSSPropertiesMap> | RegExp

export type RuleSelectorPropertyDisallowedListOptions = RuleConfig<
  Record<string, Arrayable<RuleSelectorPropertyDisallowed>>,
  [selector: string, property: string],
  {
    ignore?: LiteralUnion<'keyframe-selectors'>[]
  }
>
