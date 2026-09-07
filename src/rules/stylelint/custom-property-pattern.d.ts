import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type CustomPropertyPatternOptions = RuleConfig<
  RegExpLike,
  [propName: string, pattern: string]
>
