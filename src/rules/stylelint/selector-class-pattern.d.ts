import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
