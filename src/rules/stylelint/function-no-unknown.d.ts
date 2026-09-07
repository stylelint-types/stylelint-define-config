import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FunctionNoUnknownOptions = RuleConfig<
  true,
  [name: string],
  {
    ignoreFunctions?: RegExpLike[]
  }
>
