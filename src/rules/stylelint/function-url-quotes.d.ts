import type { RuleConfig } from '../rule-config'

type FunctionUrlQuotesExcept = 'empty'

export type FunctionUrlQuotesOptions = RuleConfig<
  'always' | 'never',
  {
    except?: [FunctionUrlQuotesExcept]
    message?: string | ((functionName: string) => string)
  }
>
