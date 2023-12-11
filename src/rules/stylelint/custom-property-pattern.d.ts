import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type CustomPropertyPatternOptions = RuleConfig<
  RegExpLike,
  {
    message?: string | ((propName: string, pattern: string) => string)
  }
>
