import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'
import type { CSSFunction } from '../../types'

export type FunctionDisallowedListOptions = RuleConfig<
  CSSFunction | RegExpLike | (CSSFunction | RegExpLike)[],
  {
    message?: string | ((name: string) => string)
  }
>
