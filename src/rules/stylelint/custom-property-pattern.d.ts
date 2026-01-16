import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CustomPropertyPatternOptions = RuleConfig<
  RegExpLike,
  [propName: string, pattern: string]
>
