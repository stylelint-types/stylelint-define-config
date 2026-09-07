import type { RuleConfig } from '../rule-config.js'

export type SelectorPseudoElementColonNotationOptions = RuleConfig<
  'single' | 'double',
  [selector: string]
>
