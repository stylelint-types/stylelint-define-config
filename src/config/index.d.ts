import type { ConfigRuleSettings, CustomSyntax, DisableOptions, Formatter, FormatterType, Severity } from 'stylelint'
import type { Rules } from '../rules'
import type { LiteralUnion } from '../utils'
import type { KnownCustomSyntax } from './customSyntax'
import type { KnownExtends } from './extends'
import type { LanguageOptions } from './LanguageOptions'
import type { PluginFunctions, Plugins } from './plugins'

export type Extends = KnownExtends | StylelintConfig

export type DisableSettings = ConfigRuleSettings<boolean, DisableOptions>

/**
 * specify what subset of files to apply a configuration to.
 */
export interface Override extends Omit<StylelintConfig, 'overrides'> {
  /**
   * Which is an array of glob patterns that specify which files
   * the configuration should be applied to
   */
  files: string | string[]

  name?: string
}

/**
 * Stylelint configuration
 * @see [Stylelint configuration](https://stylelint.io/user-guide/configure)
 */
export interface StylelintConfig {
  /**
   * Specify the formatter to format your results.
   *
   * @see [Configure formatter](https://stylelint.io/user-guide/configure#formatter)
   */
  formatter?: Formatter | LiteralUnion<FormatterType>

  /**
   * Automatically fix, where possible, problems reported by rules.
   *
   * Options are:
   * - "lax" (default) - uses `postcss-safe-parser` to fix as much as possible, even when there are syntax errors
   * - "strict" - uses PostCSS Parser and only fixes problems when there are no syntax errors
   *
   * @see [Configure fix](https://stylelint.io/user-guide/configure#fix)
   */
  fix?: boolean | 'lax' | 'strict'

  /**
   * Store the results of processed files so that Stylelint only operates on the changed ones.
   *
   * @see [Configure cache](https://stylelint.io/user-guide/configure#cache)
   *
   */
  cache?: boolean

  /**
   * If `true`, Only register problems for rules with an "error"-level
   * severity (ignore "warning"-level).
   */
  quiet?: boolean

  /**
   * Stylelint does not throw an error when the glob pattern matches no files.
   *
   * @see [Configure allowEmptyInput](https://stylelint.io/user-guide/configure#allowemptyinput)
   */
  allowEmptyInput?: boolean

  /**
   * You can provide a glob or array of globs to ignore specific files.
   *
   * Stylelint ignores the `node_modules` directory by default.
   * However, this is overridden if ignoreFiles is set.
   *
   * If the globs are absolute paths, they are used as is.
   * If they are relative, they are analyzed relative to
   * - `configBasedir`, if it's provided;
   * - the config's filepath, if the config is a file that Stylelint found and loaded;
   * - or `process.cwd()`.
   *
   * @see [Configure ignoreFiles](https://stylelint.io/user-guide/configure#ignorefiles)
   */
  ignoreFiles?: string | string[]

  /**
   * Pattern of files to ignore (in addition to those in `.stylelintignore` ).
   * @see [Configure ignorePatterns](https://stylelint.io/user-guide/configure#ignorefiles)
   * @example
   * ```json
   * {
   *   "ignorePatterns": ["**\/*.js"]
   * }
   * ```
   */
  ignorePatterns?: string

  /**
   * Ignore stylelint-disable (e.g. `// stylelint-disable block-no-empty`) comments.
   *
   * You can use this option to see what your linting results would be like without those exceptions.
   *
   * @see [Configure ignoreDisables](https://stylelint.io/user-guide/configure#ignoredisables)
   */
  ignoreDisables?: boolean

  /**
   * You can set what configuration comments like `\/* stylelint-disable *\/` start with.
   * This can be useful if you use multiple instances of Stylelint with different configurations.
   *
   * For example, to have an instance of Stylelint disable rules with \/* stylelint-foo-instance-disable *\/ instead of the default \/* stylelint-disable *\/:
   *
   * @see [configuration comment](https://stylelint.io/user-guide/configure#configurationcomment)
   * @example
   * ```json
   * {
   *   "configurationComment": "stylelint-foo-instance"
   * }
   * ```
   */
  configurationComment?: string

  /**
   * Report `stylelint-disable` comments without a description.
   *
   * @see [Report descriptionless disables](https://stylelint.io/user-guide/options#reportdescriptionlessdisables)
   */
  reportDescriptionlessDisables?: DisableSettings

  /**
   * Report `stylelint-disable` comments that don't match rules that are specified in the configuration object.
   *
   * @see [Report invalid scope disables](https://stylelint.io/user-guide/options#reportinvalidscopedisables)
   */
  reportInvalidScopeDisables?: DisableSettings

  /**
   * Report stylelint-disable comments that don't match any lints that need to be disabled.
   *
   * @see [Report needless disables](https://stylelint.io/user-guide/options#reportneedlessdisables)
   */
  reportNeedlessDisables?: DisableSettings

  /**
   * Report configuration comments that are not scoped to at least one rule.
   *
   * @see [Report unscoped disables](https://stylelint.io/user-guide/options#reportunscopeddisables)
   */
  reportUnscopedDisables?: DisableSettings

  /**
   * You can set the default severity level for all rules that do not have a severity specified in their secondary options.
   *
   * @see [Default Severity](https://stylelint.io/user-guide/configure#defaultseverity)
   * @example
   * ```json
   * {
   *   "defaultSeverity": "warning",
   * }
   * ```
   */
  defaultSeverity?: Severity

  /**
   * You can extend an existing configuration (whether your own or a third-party one).
   * Configurations can bundle plugins, custom syntaxes, options, and configure rules.
   * They can also extend other configurations.
   *
   * For example, {@link https://github.com/stylelint/stylelint-config-standard stylelint-config-standard} is one of our official configs that you can extend.
   *
   * When one configuration extends another,
   * it starts with the other's properties and then adds to and overrides what's there.
   *
   * @see [Configure extends](https://stylelint.io/user-guide/configure#extends)
   * @example
   * ```json
   * {
   *   "extends": "stylelint-config-standard",
   * }
   * ```
   */
  extends?: Extends | Extends[]
  /**
   * Plugins are custom rules or sets of custom rules built to support methodologies,
   * toolsets, non-standard CSS features, or very specific use cases.
   *
   * @see [Configure plugins](https://stylelint.io/user-guide/configure#plugins)
   * @example
   * ```json
   * {
   *   "plugins": ["stylelint-scss"],
   * }
   * ```
   */
  plugins?: Plugins

  /**
   * plugin functions
   */
  pluginFunctions?: PluginFunctions
  /**
   * Specify what subset of files to apply a configuration to.
   * - must contain a `files` property, which is an array of glob patterns that specify which files the configuration should be applied to
   * - should contain at least one other regular configuration property, such as `customSyntax`, `rules`, `extends`, etc.
   *
   * @see [Configure overrides](https://stylelint.io/user-guide/configure#overrides)
   */
  overrides?: Override[]

  /**
   * Specify a custom syntax to use on your code.
   *
   * This option allows Stylelint to transform these into something that resembles CSS,
   * which is the language that:
   * - underpins all the other styling languages
   * - is best understood by rules built into Stylelint
   *
   * This option should be a string that resolves to a JS module that exports a
   * {@link https://github.com/postcss/postcss#syntaxes PostCSS-compatible syntax}.
   * The string can be a module name (like `my-module`)
   * or a path to a JS file (like `path/to/my-module.js`).
   *
   * @see [Configure customSyntax](https://stylelint.io/user-guide/options#customsyntax)
   */
  customSyntax?: KnownCustomSyntax | Exclude<CustomSyntax, string>

  /**
   * Rules determine what the linter looks for and complains about.
   *
   * @see [Rules](https://stylelint.io/user-guide/rules)
   */
  rules?: Partial<Rules>

  /**
   * @experimental
   * @see [computeEditInfo](https://stylelint.io/user-guide/configure#computeeditinfo)
   */
  computeEditInfo?: boolean

  /**
   * You can customize the syntax to define or extend the syntax for at-rules, properties, types, and CSS-wide keywords.
   * @see [languageOptions](https://stylelint.io/user-guide/configure#languageoptions)
   */
  languageOptions?: LanguageOptions
}

export { Severity }
