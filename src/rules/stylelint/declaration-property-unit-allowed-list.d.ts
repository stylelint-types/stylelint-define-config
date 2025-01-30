import type { KebabCaseStandardPropertiesMap, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitAllowedListOptions = RuleConfig<
  Record<KebabCaseStandardPropertiesMap | `/${string}/`, Unit | Unit[]>,
  {
    ignore?: ['inside-function']
    message?: string | ((property: string, unit: string) => string)
  }
>
