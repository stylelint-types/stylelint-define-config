import type { RuleConfig } from '../rule-config'

export type DeclarationBlockNoShorthandPropertyOverridesOptions = RuleConfig<
  true,
  {
    message?: string | ((shorthand: string, original: string) => string)
  }
>
