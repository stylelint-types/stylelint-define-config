import type { StandardPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyMaxValuesPrimaryOptions =
  Record<StandardPropertiesMap | `/${string}/`, number> | Record<string, number>

export type DeclarationPropertyMaxValuesOptions = RuleConfig<
  DeclarationPropertyMaxValuesPrimaryOptions,
  {
    message?: string | ((property: string, max: number) => string)
  }
>
