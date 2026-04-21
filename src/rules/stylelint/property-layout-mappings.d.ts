import type { CSSPropertiesMap } from '../../types'
import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type PropertyLayoutMappingsOptions = RuleConfig<
  'flow-relative' | 'physical',
  [prop: string, expectedProp: string],
  {
    ignoreProperties?: (LiteralUnion<CSSPropertiesMap> | RegExp)[]
  }
>
