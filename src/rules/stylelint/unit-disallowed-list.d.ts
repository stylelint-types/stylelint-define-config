import type { RuleConfig } from '../rule-config'
import type { CSSFunction, CSSPropertiesMap, MediaFeature, Unit } from '../../types'
import type { RegExpLike } from '../../utils'

type UnitDisallowedListIgnoreProperties = Partial<
  Record<
    Unit,
    CSSPropertiesMap | RegExp | (CSSPropertiesMap | RegExp)[]
  >
>

type UnitDisallowedListIgnoreFunctions =
  | CSSFunction | RegExpLike
  | (CSSFunction | RegExpLike)[]

type UnitDisallowedListIgnoreMediaFeatureNames = Partial<
  Record<
    Unit,
    MediaFeature | RegExpLike | (MediaFeature | RegExpLike)[]
  >
>

export type UnitDisallowedListOptions = RuleConfig<
  Unit | Unit[],
  {
    /**
     * Ignore units in the values of declarations with the specified properties.
     */
    ignoreProperties?: UnitDisallowedListIgnoreProperties
    /**
     * Ignore units for specific feature names.
     */
    ignoreFunctions?: UnitDisallowedListIgnoreFunctions
    /**
     * Ignore units that are inside of the specified functions.
     */
    ignoreMediaFeatureNames?: UnitDisallowedListIgnoreMediaFeatureNames

    message?: string | ((unit: number) => string)
  }
>
