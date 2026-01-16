import type { Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type NumberMaxPrecisionOptions = RuleConfig<
  number,
  [actual: string, expected: string],
  {
    /**
     * Ignore the precision of numbers for values with the specified units.
     */
    ignoreUnits?: (Unit | RegExp)[]
    /**
     * Change a primary option value for specified functions.
     */
    insideFunctions?: Record<string, number>
  }
>
