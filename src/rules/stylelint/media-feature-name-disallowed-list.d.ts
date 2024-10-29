import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type MediaFeatureNameDisallowed = MediaFeatureNormal | MediaFeatureLevel5 | RegExpLike

export type MediaFeatureNameDisallowedListOptions = RuleConfig<
  MediaFeatureNameDisallowed | (MediaFeatureNameDisallowed)[],
  {
    message?: string | ((name: string) => string)
  }
>
