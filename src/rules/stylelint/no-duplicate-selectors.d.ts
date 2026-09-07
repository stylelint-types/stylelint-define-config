import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type NoDuplicateSelectorsOptions = RuleConfig<
  true,
  [selector: string, firstDuplicateLine: number | string],
  {
    /**
     * This option will also disallow duplicate selectors within selector lists.
     * @default false
     */
    disallowInList?: boolean

    ignoreSelectors?: RegExpLike[]
  }
>
