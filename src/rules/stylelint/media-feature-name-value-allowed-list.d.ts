import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types/index.js'
import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MediaFeatureNameValueAllowedListOptions = RuleConfig<
  Partial<Record<MediaFeatureNormal | MediaFeatureLevel5, Arrayable<RegExpLike>>>,
  [name: string, value: string]
>
