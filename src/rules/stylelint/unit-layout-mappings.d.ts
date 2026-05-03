import type { Unit } from '../../types'
import type { RuleConfig } from '../rule-config'

export type UnitLayoutMappingsOptions = RuleConfig<
  'flow-relative' | 'physical',
  [type: string, unit: string],
  {
    ignoreUnits?: (Unit | RegExp)[]
  }
>
