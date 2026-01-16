import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'
import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameValueAllowedListOptions = RuleConfig<
  Partial<Record<
    MediaFeatureNormal | MediaFeatureLevel5,
    Arrayable<RegExpLike>
  >>,
  [name: string, value: string]
>
