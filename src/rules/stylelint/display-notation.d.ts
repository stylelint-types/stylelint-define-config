import type { RuleConfig } from '../rule-config'

export type DisplayNotationOptions = RuleConfig<
  'full' | 'short',
  [normalizedValue: string, replacementValue: string]
>
