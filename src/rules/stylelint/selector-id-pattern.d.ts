import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorIdPatternOptions = RuleConfig<RegExpLike, [selector: string, pattern: string]>
