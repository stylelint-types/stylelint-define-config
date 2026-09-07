import type { CSSPropertiesMap } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type PropertyNoDeprecatedOptions = RuleConfig<
  true,
  [],
  {
    ignoreProperties?: (CSSPropertiesMap | RegExp)[]
  }
>
