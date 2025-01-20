import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'
import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameValueAllowedListOptions = RuleConfig<
  Partial<Record<
    MediaFeatureNormal | MediaFeatureLevel5 | `/${string}/`,
    string | RegExp | (string | RegExp)[]
  >>,
  {
    message?: string | ((name: string, value: string) => string)
  }
>
