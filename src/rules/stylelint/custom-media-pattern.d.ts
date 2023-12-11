import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CustomMediaPatternOptions = RuleConfig<
  RegExpLike,
  {
    message?: string | ((mediaName: string, pattern: string) => string)
  }
>
