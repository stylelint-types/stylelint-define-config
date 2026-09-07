import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorTypeCaseOptions = RuleConfig<
  'lower' | 'upper',
  [selector: string],
  {
    ignoreTypes?: RegExpLike[]
  }
>
