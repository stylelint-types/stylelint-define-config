import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionUrlNoSchemeRelativeOptions = RuleConfig<
  true,
  {
    ignoreFunctions?: RegExpLike[]
  }
>
