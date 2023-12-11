import type { RuleConfig } from '../rule-config'
import type { MediaFeature } from '../../types'
import type { RegExpLike } from '../../utils'

export type UnitNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreUnits?: (RegExp | string)[]
    ignoreFunctions?: (MediaFeature | RegExpLike)[]
    message?: string | ((unit: number) => string)
  }
>
