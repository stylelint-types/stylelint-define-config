import type { RuleConfig } from '../rule-config.js'

export type DisplayNotationOptions = RuleConfig<
  'full' | 'short',
  [normalizedValue: string, replacementValue: string]
>
