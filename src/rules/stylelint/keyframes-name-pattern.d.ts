import type { RuleConfig } from '../rule-config'

export type KeyframesNamePatternOptions = RuleConfig<
  string | RegExp,
  {
    message?: string | ((keyframeName: string, pattern: string) => string)
  }
>
