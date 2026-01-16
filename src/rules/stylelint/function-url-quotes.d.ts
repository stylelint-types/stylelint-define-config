import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FunctionUrlQuotesOptions = RuleConfig<
  'always' | 'never',
  [functionName: string],
  {
    except?: LiteralUnion<'empty'>[]
  }
>
