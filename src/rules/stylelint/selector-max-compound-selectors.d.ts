import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxCompoundSelectorsOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
