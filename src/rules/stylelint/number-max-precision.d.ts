import type { Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type NumberMaxPrecisionOptions = RuleConfig<
  number,
  {
    /**
     * Ignore the precision of numbers for values with the specified units.
     */
    ignoreUnits?: (Unit | RegExp)[]
    /**
     * Change a primary option value for specified functions.
     */
    insideFunctions?: Record<string, number>

    message?: string | ((actual: string, expected: string) => string)
  }
>
