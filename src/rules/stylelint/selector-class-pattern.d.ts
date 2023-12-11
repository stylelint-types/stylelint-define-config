import type { RuleConfig } from '../rule-config'

export type SelectorClassPatternOptions = RuleConfig<
  string | RegExp,
  {
    /**
     * This option will resolve nested selectors with `&` interpolation.
     * @default false
     */
    resolveNestedSelectors?: boolean
    message?: string | ((selector: string, pattern: string) => string)
  }
>
