import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorIdPatternOptions = RuleConfig<
  RegExpLike,
  [selector: string, pattern: string]
>
