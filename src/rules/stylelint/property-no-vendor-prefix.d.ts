import type { CSSPropertiesMap } from '../../types'
import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type PropertyNoVendorPrefixOptions = RuleConfig<
  true,
  [property: string],
  {
    ignoreProperties?: (LiteralUnion<CSSPropertiesMap> | RegExp)[]
  }
>
