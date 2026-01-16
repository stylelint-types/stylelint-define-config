import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionNoUnknownOptions = RuleConfig<
  true,
  [name: string],
  {
    ignoreFunctions?: RegExpLike[]
  }
>
