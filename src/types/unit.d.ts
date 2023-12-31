import type { LiteralUnion } from '../utils'

export type RelativeUnit = 'em' | 'rem' | 'vw' | 'vh' | 'vmin' | 'vmax' | 'ex' | 'cap' | 'ch' | 'ic' | 'lh' | 'rlh' | 'vi' | 'vb' | 'svw' | 'svh' | 'lvw' | 'lvh' | 'dvw' | 'dvh'

export type AbsoluteUnit = 'px' | 'pt' | 'cm' | 'mm' | 'Q' | 'in' | 'pc'

export type AngleUnit = 'deg' | 'grad' | 'rad' | 'turn'

export type PercentUnit = '%'

export type TimeUnit = 'ms' | 's'

export type FrequencyUnit = 'Hz' | 'kHz'

export type ResolutionUnit = 'dpi' | 'dpcm' | 'dppx'

export type CustomUnit = 'rpx'

export type Unit = LiteralUnion<RelativeUnit | AbsoluteUnit | AngleUnit | PercentUnit | TimeUnit | FrequencyUnit | ResolutionUnit | CustomUnit>
