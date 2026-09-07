import type { RuleConfig } from '../rule-config.js'

export type ColorNoInvalidHexOptions = RuleConfig<true, [hex: string, expected: string]>
