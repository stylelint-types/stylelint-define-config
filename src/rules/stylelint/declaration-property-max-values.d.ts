import type { StandardPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyMaxValuesOptions = RuleConfig<
  Record<StandardPropertiesMap | `/${string}/`, number> | Record<string, number>,
  {
    message?: string | ((property: string, max: number) => string)
  }
>
