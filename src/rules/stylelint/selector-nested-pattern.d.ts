import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorNestedPatternOptions = RuleConfig<
  RegExpLike,
  [selector: string],
  {
    /**
     * Split selector lists into individual selectors.
     * @default false
     */
    splitList?: boolean
  }
>
