import type { MediaFeatureLevel5, MediaFeatureNormal, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameUnitAllowedListPrimaryOptions =
  Partial<Record<MediaFeatureNormal | MediaFeatureLevel5 | `/${string}/`, Unit | Unit[]>>

export type MediaFeatureNameUnitAllowedListOptions = RuleConfig<
  MediaFeatureNameUnitAllowedListPrimaryOptions,
  {
    message?: string | ((unit: string, name: string) => string)
  }
>
