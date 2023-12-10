import type * as CSS from 'csstype'

export type AtRules = CSS.AtRules extends `@${infer T}` ? T : never
