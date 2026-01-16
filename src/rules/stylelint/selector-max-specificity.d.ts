import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxSpecificityOptions = RuleConfig<
  `${string},${string},${string}`,
  [selector: string, max: number | string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
