import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

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
