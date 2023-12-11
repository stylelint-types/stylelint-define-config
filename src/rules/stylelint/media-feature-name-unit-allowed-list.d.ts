import type { RuleConfig } from '../rule-config'
import type { MediaFeatureLevel5, MediaFeatureNormal, Unit } from '../../types'

export type MediaFeatureNameUnitAllowedListPrimaryOptions =
  Partial<Record<MediaFeatureNormal | MediaFeatureLevel5 | `/${string}/`, Unit | Unit[]>>

export type MediaFeatureNameUnitAllowedListOptions = RuleConfig<
  MediaFeatureNameUnitAllowedListPrimaryOptions,
  {
    message?: string | ((unit: string, name: string) => string)
  }
>
