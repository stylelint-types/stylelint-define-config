import type { KebabCaseStandardPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyMaxValuesOptions = RuleConfig<
  Record<KebabCaseStandardPropertiesMap | `/${string}/`, number> | Record<string, number>,
  {
    message?: string | ((property: string, max: number) => string)
  }
>
