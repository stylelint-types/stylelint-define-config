import type { Unit } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

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
