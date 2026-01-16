import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameValueNoUnknownOptions = RuleConfig<
  true,
  [name: string, value: string]
>
