import type { MediaFeatureLevel5, MediaFeatureNormal, Unit } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MediaFeatureNameUnitAllowedListOptions = RuleConfig<
  Partial<Record<MediaFeatureNormal | MediaFeatureLevel5, Arrayable<Unit>>>,
  [unit: string, name: string]
>
