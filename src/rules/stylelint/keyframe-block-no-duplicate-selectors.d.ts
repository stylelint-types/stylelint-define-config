import type { RuleConfig } from '../rule-config'

export type KeyframeBlockNoDuplicateSelectorsOptions = RuleConfig<
  true,
  [selector: string]
>
