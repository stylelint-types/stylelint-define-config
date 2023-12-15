import { defineConfig } from './define-config'

export * from './define-config'
export type * from './types'
export type * from './rules/rule-config'
export type * from './rules/stylelint'
export type * from './config'
export type * from './utils'

export type { CustomSyntax } from './config/customSyntax'
export type { CustomPlugins } from './config/plugins'
export type { CustomRuleOptions, Rules } from './rules'
export type { CustomExtends } from './config/extends'

export default defineConfig
