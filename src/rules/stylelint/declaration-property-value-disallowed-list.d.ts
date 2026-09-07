import type { KebabCaseStandardPropertiesMap } from '../../types/index.js'
import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationPropertyValueDisallowedListOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, Arrayable<RegExpLike>>>,
  [property: string, value: string]
>
