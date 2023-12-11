import type { RuleConfig } from '../rule-config'

export interface MediaFeatureNameNoUnknownSecondaryOptions {
  ignoreMediaFeatureNames?: (string | RegExp)[]
  message?: string | ((mediaFeatureName: string) => string)
}

export type MediaFeatureNameNoUnknownOptions = RuleConfig<
  true,
  MediaFeatureNameNoUnknownSecondaryOptions
>
