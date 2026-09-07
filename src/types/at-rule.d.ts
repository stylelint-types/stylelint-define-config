import type * as CSS from 'csstype'
import type { LiteralUnion } from '../utils.js'

export type StrictAtRules = CSS.AtRules extends `@${infer T}` ? T : never

export type AtRules = LiteralUnion<StrictAtRules>
