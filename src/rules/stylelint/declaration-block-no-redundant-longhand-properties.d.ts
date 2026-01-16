import type { RuleConfig } from '../rule-config'

export type DeclarationBlockNoRedundantLonghandPropertiesOptions = RuleConfig<
  true,
  [props: string],
  {
    ignoreLonghands?: string | string[]
    ignoreShorthands?: (string | RegExp)[]
  }
>
