import type { RuleConfig } from '../rule-config.js'

export type MediaFeatureNameNoUnknownOptions = RuleConfig<
  true,
  [mediaFeatureName: string],
  {
    ignoreMediaFeatureNames?: (string | RegExp)[]
  }
>
