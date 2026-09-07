import { defineConfig } from './define-config.js'

export type * from './config/index.js'
export type { CustomSyntax } from './config/customSyntax.js'
export type { CustomExtends } from './config/extends.js'
export type { CustomPlugins } from './config/plugins.js'
export * from './define-config.js'
export type { CustomRuleOptions, Rules } from './rules/index.js'
export type * from './rules/rule-config.js'
export type * from './rules/stylelint/index.js'
export type * from './types/index.js'
export type * from './utils.js'

export default defineConfig
