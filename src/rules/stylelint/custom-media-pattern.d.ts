import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type CustomMediaPatternOptions = RuleConfig<RegExpLike, [mediaName: string, pattern: string]>
