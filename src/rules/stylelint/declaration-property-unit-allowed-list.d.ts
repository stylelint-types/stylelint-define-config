import type { KebabCaseStandardPropertiesMap, Unit } from '../../types/index.js'
import type { Arrayable, LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationPropertyUnitAllowedListOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, Arrayable<Unit>>>,
  [property: string, unit: string],
  {
    ignore?: LiteralUnion<'inside-function'>[]
  }
>
