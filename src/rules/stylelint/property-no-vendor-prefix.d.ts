import type { CSSPropertiesMap } from '../../types/index.js'
import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type PropertyNoVendorPrefixOptions = RuleConfig<
  true,
  [property: string],
  {
    ignoreProperties?: (LiteralUnion<CSSPropertiesMap> | RegExp)[]
  }
>
