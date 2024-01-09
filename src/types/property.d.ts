import type * as CSS from 'csstype'
import type { KebabCase, LiteralUnion } from '../utils'

export type CSSPropertiesMap = keyof CSS.Properties

export type StandardPropertiesMap = keyof CSS.StandardProperties

export type KebabCaseStandardPropertiesMap = LiteralUnion<KebabCase<StandardPropertiesMap>>
