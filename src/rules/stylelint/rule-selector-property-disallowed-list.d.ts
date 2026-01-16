import type { CSSPropertiesMap } from '../../types'
import type { Arrayable, LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type RuleSelectorPropertyDisallowed = CSSPropertiesMap | RegExpLike

export type RuleSelectorPropertyDisallowedListOptions = RuleConfig<
  Record<string, Arrayable<RuleSelectorPropertyDisallowed>>,
  [selector: string, property: string],
  {
    ignore?: LiteralUnion<'keyframe-selectors'>[]
  }
>
