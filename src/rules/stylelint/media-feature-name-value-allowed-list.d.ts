import type { RuleConfig } from '../rule-config'
import type { MediaFeatureLevel5, MediaFeatureNormal } from '../../types'

export type MediaFeatureNameValueAllowedListPrimaryOptions = Partial<
  Record<
    MediaFeatureNormal | MediaFeatureLevel5 | `/${string}/`,
    string | RegExp | (string | RegExp)[]
  >
>

export type MediaFeatureNameValueAllowedListOptions = RuleConfig<
  MediaFeatureNameValueAllowedListPrimaryOptions,
  {
    message?: string | ((name: string, value: string) => string)
  }
>
