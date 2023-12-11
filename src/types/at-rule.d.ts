import type * as CSS from 'csstype'
import type { LiteralUnion } from '../utils'

export type AtRules = LiteralUnion<CSS.AtRules extends `@${infer T}` ? T : never>
