import type { RuleConfig } from '../rule-config'

export type BlockNoEmptyOptions = RuleConfig<
  true,
  {
    ignore?: ('comments')[]
    message?: string | ((block: string) => string)
  }
>
