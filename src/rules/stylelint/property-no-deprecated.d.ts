import type { CSSPropertiesMap } from '../../types'
import type { RuleConfig } from '../rule-config'

export type PropertyNoDeprecatedOptions = RuleConfig<true, {
  ignoreProperties?: (CSSPropertiesMap | RegExp)[]
}>
