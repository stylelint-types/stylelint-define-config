import type { RuleConfig } from '../rule-config'

export type BlockNoEmptyIgnore = 'comments'

export interface BlockNoEmptySecondaryOptions {
  ignore?: BlockNoEmptyIgnore[]
  message?: string | ((block: string) => string)
}

export type BlockNoEmptyOptions = RuleConfig<
  true,
  BlockNoEmptySecondaryOptions
>
