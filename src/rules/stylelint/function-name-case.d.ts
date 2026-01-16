import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionNameCaseOptions = RuleConfig<
  'lower' | 'upper',
  [actual: string, expected: string],
  {
    ignoreFunctions?: RegExpLike[]
  }
>
