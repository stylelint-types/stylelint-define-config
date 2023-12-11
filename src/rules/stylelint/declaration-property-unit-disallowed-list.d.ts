import type { StandardPropertiesMap, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitDisallowedListPrimaryOptions =
  Record<StandardPropertiesMap | `/${string}/`, Unit | Unit[]>

export interface DeclarationPropertyUnitDisallowedListSecondaryOptions {
  message?: string | ((property: string, unit: string) => string)
}

export type DeclarationPropertyUnitDisallowedListOptions = RuleConfig<
  DeclarationPropertyUnitDisallowedListPrimaryOptions,
  DeclarationPropertyUnitDisallowedListSecondaryOptions
>
