import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionDisallowedListOptions = RuleConfig<
  CSSFunction | RegExpLike | (CSSFunction | RegExpLike)[],
  {
    message?: string | ((name: string) => string)
  }
>
