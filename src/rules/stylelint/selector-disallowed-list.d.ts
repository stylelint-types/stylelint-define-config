import type { RuleConfig } from '../rule-config'

type SelectorDisallowedListIgnore = 'inside-block' | 'keyframe-selectors'

export type SelectorDisallowedListOptions = RuleConfig<
  string | RegExp | (string | RegExp)[],
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
    message?: string | ((selector: string) => string)
  }
>
