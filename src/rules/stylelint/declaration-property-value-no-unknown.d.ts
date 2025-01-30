import type { KebabCaseStandardPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyValueNoUnknownOptions = RuleConfig<true, {
  ignoreProperties?: Record<KebabCaseStandardPropertiesMap, RegExpLike | RegExpLike[]> | Record<string, RegExpLike | RegExpLike[]>
  /**
   * Extend or alter the properties syntax dictionary.
   * {@link https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md CSS Value Definition Syntax} is used to define a value's syntax.
   * If a definition starts with `|` it is added to the {@link https://csstree.github.io/docs/syntax/ existing definition value} if any.
   */
  propertiesSyntax?: Record<KebabCaseStandardPropertiesMap, string> | Record<string, string>
  /**
   * Extend or alter the types syntax dictionary.
   * {@link https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md CSS Value Definition Syntax} is used to define a value's syntax.
   * If a definition starts with `|` it is added to the {@link https://csstree.github.io/docs/syntax/ existing definition value} if any.
   */
  typesSyntax?: Record<string, string>

  message?: string | ((property: string, value: string) => string)
}>
