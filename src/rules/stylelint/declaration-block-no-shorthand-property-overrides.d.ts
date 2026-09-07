import type { RuleConfig } from '../rule-config.js'

export type DeclarationBlockNoShorthandPropertyOverridesOptions = RuleConfig<
  true,
  [shorthand: string, original: string]
>
