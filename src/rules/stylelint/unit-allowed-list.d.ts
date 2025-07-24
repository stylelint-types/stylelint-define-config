import type { CSSFunction, CSSPropertiesMap, Unit } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type UnitAllowedListIgnoreProperties = Partial<
  Record<
    Unit,
    CSSPropertiesMap | RegExp | (CSSPropertiesMap | RegExp)[]
  >
>

type UnitAllowedListIgnoreFunctions
  = | CSSFunction | RegExpLike
    | (CSSFunction | RegExpLike)[]

export type UnitAllowedListOptions = RuleConfig<
  Unit | Unit[],
  {
    ignoreProperties?: UnitAllowedListIgnoreProperties
    ignoreFunctions?: UnitAllowedListIgnoreFunctions
    message?: string | ((unit: number) => string)
  }
>
