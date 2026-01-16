import type { CSSFunction, CSSPropertiesMap, Unit } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

type UnitAllowedListIgnoreProperties = Partial<Record<Unit, Arrayable<CSSPropertiesMap | RegExp>>>

export type UnitAllowedListOptions = RuleConfig<
  Arrayable<Unit>,
  [unit: number],
  {
    ignoreProperties?: Partial<Record<Unit, Arrayable<CSSPropertiesMap | RegExp>>>
    ignoreFunctions?: Arrayable<CSSFunction | RegExp>
  }
>
