import type { RuleConfig } from '../rule-config'
import type { CSSPropertiesMap } from '../../types'

export type PropertyNoVendorPrefixOptions = RuleConfig<
  true,
  {
    ignoreProperties?: (CSSPropertiesMap | RegExp)[] | (string | RegExp)[]
    message?: string | ((property: string) => string)
  }
>
