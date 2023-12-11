import type { RuleConfig } from '../rule-config'

export type SelectorAttributeNameDisallowedListOptions = RuleConfig<
  string | RegExp | (string | RegExp)[],
  {
    message?: string | ((name: string) => string)
  }
>
