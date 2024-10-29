import type { RuleConfig } from '../rule-config'

export type DeclarationBlockNoRedundantLonghandPropertiesOptions = RuleConfig<
  true,
  {
    ignoreLonghands?: string | string[]
    ignoreShorthands?: (string | RegExp)[]
    message?: string | ((props: string) => string)
  }
>
