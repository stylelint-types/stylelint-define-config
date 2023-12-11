import type { RuleConfig } from '../rule-config'

export type MediaFeatureNameValueNoUnknownOptions = RuleConfig<
  true,
  {
    message?: string | ((name: string, value: string) => string)
  }
>
