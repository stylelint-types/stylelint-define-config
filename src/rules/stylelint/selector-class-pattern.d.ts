import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorClassPatternOptions = RuleConfig<
  RegExpLike,
  [selector: string, pattern: string],
  {
    /**
     * This option will resolve nested selectors with `&` interpolation.
     * @default false
     */
    resolveNestedSelectors?: boolean
  }
>
