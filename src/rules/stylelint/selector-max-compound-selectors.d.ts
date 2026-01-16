import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxCompoundSelectorsOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    ignoreSelectors?: RegExpLike[]
  }
>
