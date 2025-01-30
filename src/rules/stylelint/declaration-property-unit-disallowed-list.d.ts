import type { KebabCaseStandardPropertiesMap, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitDisallowedListOptions = RuleConfig<
  Record<KebabCaseStandardPropertiesMap | `/${string}/`, Unit | Unit[]>,
  {
    message?: string | ((property: string, unit: string) => string)
  }
>
