import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type MediaFeatureNameAllowed = MediaFeatureNormal | MediaFeatureLevel5 | RegExpLike

export type MediaFeatureNameAllowedListOptions = RuleConfig<
  MediaFeatureNameAllowed | (MediaFeatureNameAllowed)[],
  {
    message?: string | ((name: string) => string)
  }
>
