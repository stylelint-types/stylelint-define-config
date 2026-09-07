import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
