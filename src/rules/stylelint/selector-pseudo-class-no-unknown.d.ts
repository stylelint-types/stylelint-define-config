import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorPseudoClassNoUnknownOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignorePseudoClasses?: RegExpLike[]
  }
>
