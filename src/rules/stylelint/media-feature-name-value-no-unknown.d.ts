import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MediaFeatureNameValueNoUnknownOptions = RuleConfig<
  true,
  [name: string, value: string],
  {
    ignoreMediaFeatureNameValues?: RegExpLike[]
  }
>
