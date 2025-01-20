import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyValueKeywordNoDeprecatedOptions = RuleConfig<true, {
  ignoreKeywords?: (RegExp | string)[]
  message?: string | ((property: string, keyword: string) => string)
}>
