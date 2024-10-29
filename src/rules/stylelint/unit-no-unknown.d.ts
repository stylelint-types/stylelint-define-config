import type { MediaFeature } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type UnitNoUnknownOptions = RuleConfig<
  true,
  {
    ignoreUnits?: (RegExp | string)[]
    ignoreFunctions?: (MediaFeature | RegExpLike)[]
    message?: string | ((unit: number) => string)
  }
>
