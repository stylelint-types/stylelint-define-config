import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FunctionUrlQuotesOptions = RuleConfig<
  'always' | 'never',
  [functionName: string],
  {
    except?: LiteralUnion<'empty'>[]
  }
>
