import type { MediaFeatureLevel5, MediaFeatureNormal, Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameUnitAllowedListOptions = RuleConfig<
  Partial<Record<MediaFeatureNormal | MediaFeatureLevel5 | `/${string}/`, Unit | Unit[]>>,
  {
    message?: string | ((unit: string, name: string) => string)
  }
>
