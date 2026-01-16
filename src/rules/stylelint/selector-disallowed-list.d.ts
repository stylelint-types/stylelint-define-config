import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type SelectorDisallowedListIgnore = 'inside-block' | 'keyframe-selectors'

export type SelectorDisallowedListOptions = RuleConfig<
  Arrayable<RegExpLike>,
  [selector: string],
  {
    /**
     * Split selector lists into individual selectors.
     * @default false
     */
    splitList?: boolean
    /**
     * Ignore selectors that are inside a block.
     */
    ignore?: [SelectorDisallowedListIgnore]
  }
>
