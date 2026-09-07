import type { KebabCaseStandardPropertiesMap, Unit } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationPropertyUnitDisallowedListOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, Arrayable<Unit>>>,
  [property: string, unit: string]
>
