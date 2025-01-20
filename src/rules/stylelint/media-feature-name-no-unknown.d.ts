import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreMediaFeatureNames?: (string | RegExp)[]
    message?: string | ((mediaFeatureName: string) => string)
  }
>
