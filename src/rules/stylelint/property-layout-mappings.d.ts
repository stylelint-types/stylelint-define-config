import type { CSSPropertiesMap } from '../../types/index.js'
import type { LiteralUnion } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type PropertyLayoutMappingsOptions = RuleConfig<
  'flow-relative' | 'physical',
  [prop: string, expectedProp: string],
  {
    ignoreProperties?: (LiteralUnion<CSSPropertiesMap> | RegExp)[]
  }
>
