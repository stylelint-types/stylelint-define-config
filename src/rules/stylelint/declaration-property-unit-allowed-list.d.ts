import type { KebabCaseStandardPropertiesMap, Unit } from '../../types'
import type { Arrayable, LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitAllowedListOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, Arrayable<Unit>>>,
  [property: string, unit: string],
  {
    ignore?: LiteralUnion<'inside-function'>[]
  }
>
