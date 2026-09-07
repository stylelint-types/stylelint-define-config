import type { Unit } from '../../types/index.js'
import type { RuleConfig } from '../rule-config.js'

export type UnitLayoutMappingsOptions = RuleConfig<
  'flow-relative' | 'physical',
  [type: string, unit: string],
  {
    ignoreUnits?: (Unit | RegExp)[]
  }
>
