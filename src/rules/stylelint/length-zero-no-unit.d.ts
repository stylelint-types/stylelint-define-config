import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type LengthZeroNoUnitOptions = RuleConfig<
  true,
  {
    ignore?: ('custom-properties')[]
    ignoreFunctions?: (CSSFunction | RegExpLike)[]
    message?: string | (() => string)
  }
>
