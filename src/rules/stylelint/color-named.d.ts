import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ColorNamedOptions = RuleConfig<
  'always-where-possible' | 'never',
  {
    ignoreProperties?: RegExpLike[]
    ignore?: ('inside-function')[]
    message?: string | ((named: string) => string)
  }
>
