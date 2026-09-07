import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MediaFeatureNameDisallowedListOptions = RuleConfig<
  Arrayable<MediaFeatureNormal | MediaFeatureLevel5 | RegExp>,
  [name: string]
>
