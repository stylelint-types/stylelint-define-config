import type { MediaFeatureLevel5, MediaFeatureNormal, Unit } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameUnitAllowedListOptions = RuleConfig<
  Partial<Record<MediaFeatureNormal | MediaFeatureLevel5, Arrayable<Unit>>>,
  [unit: string, name: string]
>
