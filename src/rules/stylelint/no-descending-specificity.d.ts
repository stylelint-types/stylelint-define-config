import type { RuleConfig } from '../rule-config'

type NoDescendingSpecificityIgnore = 'selectors-within-list'
export type NoDescendingSpecificityOptions = RuleConfig<
  true,
  {
    ignore?: [NoDescendingSpecificityIgnore]
    message?: string | ((selectorA: string, selectorB: string, line: number) => string)
  }
>
