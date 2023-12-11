import type { RuleConfig } from '../rule-config'

export type SelectorNestedPatternOptions = RuleConfig<
  string | RegExp,
  {
    /**
     * Split selector lists into individual selectors.
     * @default false
     */
    splitList?: boolean
    message?: string | ((selector: string) => string)
  }
>
