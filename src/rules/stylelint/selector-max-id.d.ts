import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxIdOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    checkContextFunctionalPseudoClasses?: RegExpLike[]
  }
>
