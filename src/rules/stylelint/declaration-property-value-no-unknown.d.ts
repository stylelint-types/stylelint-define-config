import type { KebabCaseStandardPropertiesMap } from '../../types'
import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyValueNoUnknownOptions = RuleConfig<
  true,
  [property: string, value: string],
  {
    ignoreProperties?: Record<KebabCaseStandardPropertiesMap, Arrayable<RegExpLike>>
    /**
     * Extend or alter the properties syntax dictionary.
     * {@link https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md CSS Value Definition Syntax} is used to define a value's syntax.
     * If a definition starts with `|` it is added to the {@link https://csstree.github.io/docs/syntax/ existing definition value} if any.
     */
    propertiesSyntax?: Record<KebabCaseStandardPropertiesMap, string>
    /**
     * Extend or alter the types syntax dictionary.
     * {@link https://github.com/csstree/csstree/blob/master/docs/definition-syntax.md CSS Value Definition Syntax} is used to define a value's syntax.
     * If a definition starts with `|` it is added to the {@link https://csstree.github.io/docs/syntax/ existing definition value} if any.
     */
    typesSyntax?: Record<string, string>
  }
>
