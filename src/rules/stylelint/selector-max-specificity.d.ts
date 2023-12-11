import type { RuleConfig } from '../rule-config'

export type SelectorMaxSpecificityOptions = RuleConfig<
  `${string},${string},${string}`,
  {
    ignoreSelectors?: (string | RegExp)[]
    message?: string | ((selector: string, max: number | string) => string)
  }
>
