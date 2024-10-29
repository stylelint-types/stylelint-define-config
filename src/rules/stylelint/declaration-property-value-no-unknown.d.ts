import type { StandardPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type DeclarationPropertyValueNoUnknownValues = RegExpLike | RegExpLike[]

type DeclarationPropertyValueNoUnknownSyntax = string

export interface DeclarationPropertyValueNoUnknownSecondaryOptions {
  ignoreProperties?: Record<StandardPropertiesMap, DeclarationPropertyValueNoUnknownValues> | Record<string, DeclarationPropertyValueNoUnknownValues>
  /**
   * Extend or alter the properties syntax dictionary.
   * {@link https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md CSS Value Definition Syntax} is used to define a value's syntax.
   * If a definition starts with `|` it is added to the {@link https://csstree.github.io/docs/syntax/ existing definition value} if any.
   */
  propertiesSyntax?: Record<StandardPropertiesMap, DeclarationPropertyValueNoUnknownSyntax> | Record<string, DeclarationPropertyValueNoUnknownSyntax>
  /**
   * Extend or alter the types syntax dictionary.
   * {@link https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md CSS Value Definition Syntax} is used to define a value's syntax.
   * If a definition starts with `|` it is added to the {@link https://csstree.github.io/docs/syntax/ existing definition value} if any.
   */
  typesSyntax?: Record<string, DeclarationPropertyValueNoUnknownSyntax>

  message?: string | ((property: string, value: string) => string)
}

export type DeclarationPropertyValueNoUnknownOptions = RuleConfig<
  true
>
