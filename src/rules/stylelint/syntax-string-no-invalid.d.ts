import type { RuleConfig } from '../rule-config'

export type SyntaxStringNoInvalidOptions = RuleConfig<true, {
  message?: string | ((syntaxString: string) => string)
}>
