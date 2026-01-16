import type { RuleConfig } from '../rule-config'

export type DeclarationBlockNoShorthandPropertyOverridesOptions = RuleConfig<
  true,
  [shorthand: string, original: string]
>
