import type { KebabCaseStandardPropertiesMap } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationPropertyMaxValuesOptions = RuleConfig<
  Partial<Record<KebabCaseStandardPropertiesMap, number>>,
  [property: string, max: number]
>
