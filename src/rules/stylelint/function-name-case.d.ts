import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FunctionNameCaseOptions = RuleConfig<
  'lower' | 'upper',
  [actual: string, expected: string],
  {
    ignoreFunctions?: RegExpLike[]
  }
>
