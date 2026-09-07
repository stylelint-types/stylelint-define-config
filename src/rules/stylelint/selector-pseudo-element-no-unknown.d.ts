import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorPseudoElementNoUnknownOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignorePseudoElements?: RegExpLike[]
  }
>
