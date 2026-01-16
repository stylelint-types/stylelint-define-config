import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type KeyframesNamePatternOptions = RuleConfig<
  RegExpLike,
  [keyframeName: string, pattern: string]
>
