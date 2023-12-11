import type { RuleConfig } from '../rule-config'
import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'

export type FunctionAllowedListOptions = RuleConfig<
  CSSFunction | RegExpLike | (CSSFunction | RegExpLike)[],
  {
    message?: string | ((name: string) => string)
  }
>
