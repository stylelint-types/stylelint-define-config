import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameAllowedListOptions = RuleConfig<
  Arrayable<MediaFeatureNormal | MediaFeatureLevel5 | RegExp>,
  [name: string]
>
