import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameNoUnknownOptions = RuleConfig<
  true,
  [mediaFeatureName: string],
  {
    ignoreMediaFeatureNames?: (string | RegExp)[]
  }
>
