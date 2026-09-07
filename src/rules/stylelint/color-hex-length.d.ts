import type { RuleConfig } from '../rule-config.js'

export type ColorHexLengthOptions = RuleConfig<'short' | 'long', [actual: string, expected: string]>
