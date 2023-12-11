import type { RuleConfig } from '../rule-config'

export type DeclarationBlockSingleLineMaxDeclarationsOptions = RuleConfig<
  number,
  {
    message?: string | ((max: number) => string)
  }
>
