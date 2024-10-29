import { defineConfig } from './define-config'

export type * from './config'
export type { CustomSyntax } from './config/customSyntax'
export type { CustomExtends } from './config/extends'
export type { CustomPlugins } from './config/plugins'
export * from './define-config'
export type { CustomRuleOptions, Rules } from './rules'
export type * from './rules/rule-config'
export type * from './rules/stylelint'
export type * from './types'
export type * from './utils'

export default defineConfig
