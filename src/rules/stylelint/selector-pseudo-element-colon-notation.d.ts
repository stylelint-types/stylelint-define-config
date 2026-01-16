import type { RuleConfig } from '../rule-config'

export type SelectorPseudoElementColonNotationOptions = RuleConfig<
  'single' | 'double',
  [selector: string]
>
