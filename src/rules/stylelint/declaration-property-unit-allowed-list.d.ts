import type { StandardPropertiesMap, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyUnitAllowedListPrimaryOptions =
  Record<StandardPropertiesMap | `/${string}/`, Unit | Unit[]>

export interface DeclarationPropertyUnitAllowedListSecondaryOptions {
  ignore?: ['inside-function']
  message?: string | ((property: string, unit: string) => string)
}

export type DeclarationPropertyUnitAllowedListOptions = RuleConfig<
  DeclarationPropertyUnitAllowedListPrimaryOptions,
  DeclarationPropertyUnitAllowedListSecondaryOptions
>
