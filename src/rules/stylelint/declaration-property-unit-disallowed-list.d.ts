import type { StandardPropertiesMap, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitDisallowedListOptions = RuleConfig<
  Record<StandardPropertiesMap | `/${string}/`, Unit | Unit[]>,
  {
    message?: string | ((property: string, unit: string) => string)
  }
>
