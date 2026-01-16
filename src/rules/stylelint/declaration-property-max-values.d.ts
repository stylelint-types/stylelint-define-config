import type { KebabCaseStandardPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyMaxValuesOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, number>>,
  [property: string, max: number]
>
