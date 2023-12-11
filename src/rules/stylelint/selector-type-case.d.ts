import type { RuleConfig } from '../rule-config'

export type SelectorTypeCaseOptions = RuleConfig<
  'lower' | 'upper',
  {
    ignoreTypes?: (string | RegExp)[]
    message?: string | ((selector: string) => string)
  }
>
