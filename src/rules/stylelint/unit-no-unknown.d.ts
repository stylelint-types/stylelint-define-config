import type { MediaFeature } from '../../types/index.js'
import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type UnitNoUnknownOptions = RuleConfig<
  true,
  [unit: number],
  {
    ignoreUnits?: RegExpLike[]
    ignoreFunctions?: (MediaFeature | RegExp)[]
  }
>
