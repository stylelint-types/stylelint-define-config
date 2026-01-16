import type { CSSFunction, CSSPropertiesMap, MediaFeature, Unit } from '../../types'
import type { Arrayable } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type UnitDisallowedListOptions = RuleConfig<
  Unit | Unit[],
  [unit: number],
  {
    /**
     * Ignore units in the values of declarations with the specified properties.
     */
    ignoreProperties?: Partial<Record<Unit, Arrayable<CSSPropertiesMap | RegExp>>>
    /**
     * Ignore units for specific feature names.
     */
    ignoreFunctions?: Arrayable<CSSFunction | RegExp>
    /**
     * Ignore units that are inside of the specified functions.
     */
    ignoreMediaFeatureNames?: Partial<Record<Unit, Arrayable<MediaFeature | RegExp>>
    >
  }
>
