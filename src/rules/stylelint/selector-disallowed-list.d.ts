import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
