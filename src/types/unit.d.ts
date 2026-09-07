import type { LiteralUnion } from '../utils.js'

export type FontRelativeUnit =
  // local font
  | 'cap'
  | 'ch'
  | 'em'
  | 'ex'
  | 'ic'
  | 'lh'
  // root font
  | 'rcap'
  | 'rch'
  | 'rem'
  | 'rex'
  | 'ric'
  | 'rlh'

export type ViewportUnit =
  | 'dvh'
  | 'dvw'
  | 'lvh'
  | 'lvw'
  | 'svh'
  | 'svw'
  | 'vb'
  | 'vh'
  | 'vw'
  | 'vi'
  | 'vmax'
  | 'vmin'

export type AbsoluteUnit = 'px' | 'pt' | 'cm' | 'mm' | 'Q' | 'in' | 'pc'

export type ContainerUnit = 'cqb' | 'cqh' | 'cqi' | 'cqmax' | 'cqmin' | 'cqw'

export type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn'

export type PercentUnit = '%'

export type TimeUnit = 'ms' | 's'

export type FrequencyUnit = 'Hz' | 'kHz'

export type FlexUnit = 'fr'

export type ResolutionUnit = 'dpi' | 'dpcm' | 'dppx' | 'x'

export type CustomUnit = 'rpx' /* 小程序 */

export type StrictUnit =
  | FontRelativeUnit
  | AbsoluteUnit
  | ViewportUnit
  | ContainerUnit
  | AngleUnit
  | PercentUnit
  | TimeUnit
  | FlexUnit
  | FrequencyUnit
  | ResolutionUnit
  | CustomUnit

export type Unit = LiteralUnion<StrictUnit>
