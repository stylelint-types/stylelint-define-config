import type { RuleConfig } from './rule-config'
import type { StyleLintRules } from './stylelint'

/**
 * This is a special exported interface for other packages to declare
 * additional types that should bail out for eslint rules. For example
 * `stylelint-scss` can declare it like so in its `d.ts`:
 *
 * ```ts
 * import type { RuleConfig } from 'stylelint-define-config';
 * declare module 'stylelint-define-config' {
 *   export interface CustomRuleOptions {
 *     'scss/at-else-closing-brace-newline-after': RuleConfig<
 *        "always-last-in-chain",
 *        { disableFix?: boolean }
 *      >
 *
 *     // ... more Rules
 *   }
 * }
 * ```
 */
export interface CustomRuleOptions {}

type CustomRules = {
  [TRuleName in keyof CustomRuleOptions]: CustomRuleOptions[TRuleName]
}

/**
 * Rules determine what the linter looks for and complains about.
 * There are {@link https://stylelint.io/user-guide/rules over 100 rules} built into Stylelint. No rules are turned on by default.
 */
export interface Rules extends
  StyleLintRules,
  CustomRules,
  Record<string, RuleConfig<any>> {}
