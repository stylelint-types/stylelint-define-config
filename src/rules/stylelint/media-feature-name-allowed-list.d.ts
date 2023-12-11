import type { RuleConfig } from '../rule-config'
import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'
import type { RegExpLike } from '../../utils'

type MediaFeatureNameAllowed = MediaFeatureNormal | MediaFeatureLevel5 | RegExpLike

export type MediaFeatureNameAllowedListOptions = RuleConfig<
  MediaFeatureNameAllowed | (MediaFeatureNameAllowed)[],
  {
    message?: string | ((name: string) => string)
  }
>
