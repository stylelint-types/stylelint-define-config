import type { RuleConfig } from '../rule-config'

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
    ignore?: ['inside-block']
    message?: string | ((selector: string) => string)
  }
>
