import type { RuleConfig } from '../rule-config'

export type KeyframeBlockNoDuplicateSelectorsOptions = RuleConfig<
  true,
  {
    message?: string | ((selector: string) => string)
  }
>
