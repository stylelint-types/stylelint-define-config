import type { CSSFunction, CSSPropertiesMap, Unit } from '../../types/index.js'
import type { Arrayable } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

type UnitAllowedListIgnoreProperties = Partial<Record<Unit, Arrayable<CSSPropertiesMap | RegExp>>>

export type UnitAllowedListOptions = RuleConfig<
  Arrayable<Unit>,
  [unit: number],
  {
    ignoreProperties?: Partial<Record<Unit, Arrayable<CSSPropertiesMap | RegExp>>>
    ignoreFunctions?: Arrayable<CSSFunction | RegExp>
  }
>
