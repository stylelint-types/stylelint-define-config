import type { RuleConfig } from '../rule-config.js'

export type ImportNotationOptions = RuleConfig<'string' | 'url', [unfixed: string, fixed: string]>
