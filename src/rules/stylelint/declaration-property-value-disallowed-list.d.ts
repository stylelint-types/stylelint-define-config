import type { KebabCaseStandardPropertiesMap } from '../../types'
import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyValueDisallowedListOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, Arrayable<RegExpLike>>>,
  [property: string, value: string]
>
