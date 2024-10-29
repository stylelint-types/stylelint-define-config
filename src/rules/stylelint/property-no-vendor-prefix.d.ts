import type { CSSPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type PropertyNoVendorPrefixOptions = RuleConfig<
  true,
  {
    ignoreProperties?: (CSSPropertiesMap | RegExp)[] | (string | RegExp)[]
    message?: string | ((property: string) => string)
  }
>
