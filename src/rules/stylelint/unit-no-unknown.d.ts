import type { MediaFeature } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type UnitNoUnknownOptions = RuleConfig<
  true,
  [unit: number],
  {
    ignoreUnits?: RegExpLike[]
    ignoreFunctions?: (MediaFeature | RegExp)[]
  }
>
