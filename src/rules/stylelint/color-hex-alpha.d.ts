import type { RuleConfig } from '../rule-config.js'

export type ColorHexAlphaOptions = RuleConfig<'always' | 'never', [hex: string]>
