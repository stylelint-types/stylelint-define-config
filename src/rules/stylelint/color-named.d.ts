import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ColorNamedIgnore = 'inside-function'

export type ColorNamedPrimaryOptions = 'always-where-possible' | 'never'

export interface ColorNamedSecondaryOptions {
  ignoreProperties?: RegExpLike[]
  ignore?: ColorNamedIgnore[]
  message?: string | ((named: string) => string)
}

export type ColorNamedOptions = RuleConfig<
  ColorNamedPrimaryOptions,
  ColorNamedSecondaryOptions
>
