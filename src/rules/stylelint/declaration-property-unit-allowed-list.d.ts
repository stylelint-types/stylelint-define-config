import type { StandardPropertiesMap, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitAllowedListOptions = RuleConfig<
  Record<StandardPropertiesMap | `/${string}/`, Unit | Unit[]>,
  {
    ignore?: ['inside-function']
    message?: string | ((property: string, unit: string) => string)
  }
>
