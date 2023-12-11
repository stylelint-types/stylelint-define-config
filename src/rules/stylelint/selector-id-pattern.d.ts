import type { RuleConfig } from '../rule-config'

export type SelectorIdPatternOptions = RuleConfig<
  string | RegExp,
  {
    message?: string | ((selector: string, pattern: string) => string)
  }
>
