import type { Severity } from 'stylelint'

export interface SecondaryOptions {
  /**
   * You can set the `disableFix` secondary option to disable autofix on a per-rule basis.
   * @see [configure disable fix](https://stylelint.io/user-guide/configure#disablefix)
   */
  disableFix?: boolean
  /**
   * You can set the reportDisables secondary option to report any stylelint-disable comments
   * for this rule, effectively disallowing authors to opt-out of it.
   * @see [configure report disables](https://stylelint.io/user-guide/configure#reportdisables)
   */
  reportDisables?: boolean
  /**
   * You can use the severity secondary option to adjust any specific rule's severity.
   *
   * The available values for severity are:
   * - "warning"
   * - "error" (default)
   * @see [configure severity](https://stylelint.io/user-guide/configure#severity)
   */
  severity?: Severity
  /**
   * You can use the message secondary option to deliver a custom message when a rule is violated.
   * @see [configure message](https://stylelint.io/user-guide/configure#message)
   */
  message?: string | ((...args: any[]) => string)
}

/**
 * declaration rule config.
 *
 * `RuleConfig<PrimaryOptions, SecondaryOptions>`
 */
export type RuleConfig<T, S extends Record<string, any> = Record<string, any>>
  = null
  | undefined
  | NonNullable<T>
  | readonly [NonNullable<T>]
  | readonly [NonNullable<T>, Omit<SecondaryOptions, keyof S> & S]
