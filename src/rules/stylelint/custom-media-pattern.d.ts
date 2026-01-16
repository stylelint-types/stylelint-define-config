import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CustomMediaPatternOptions = RuleConfig<
  RegExpLike,
  [mediaName: string, pattern: string]
>
