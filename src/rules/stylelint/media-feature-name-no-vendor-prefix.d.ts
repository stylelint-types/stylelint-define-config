import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type MediaFeatureNameNoVendorPrefixOptions = RuleConfig<
  true,
  [],
  {
    ignoreMediaFeatureNames?: RegExpLike[]
  }
>
