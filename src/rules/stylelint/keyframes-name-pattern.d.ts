import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type KeyframesNamePatternOptions = RuleConfig<
  RegExpLike,
  [keyframeName: string, pattern: string]
>
