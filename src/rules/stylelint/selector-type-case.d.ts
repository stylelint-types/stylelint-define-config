import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorTypeCaseOptions = RuleConfig<
  'lower' | 'upper',
  [selector: string],
  {
    ignoreTypes?: RegExpLike[]
  }
>
