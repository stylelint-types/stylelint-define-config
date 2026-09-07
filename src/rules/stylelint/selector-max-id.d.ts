import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxIdOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    checkContextFunctionalPseudoClasses?: RegExpLike[]
  }
>
