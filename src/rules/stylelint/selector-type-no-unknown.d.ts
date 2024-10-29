import type { LiteralUnion } from '../../utils'
import type { RuleConfig } from '../rule-config'

type SelectorTypeNoUnknownIgnore = LiteralUnion<'custom-elements' | 'default-namespace'>

export type SelectorTypeNoUnknownOptions = RuleConfig<
  true,
  {
    ignore?: SelectorTypeNoUnknownIgnore[]
    ignoreNamespaces?: (string | RegExp)[]
    ignoreTypes?: (string | RegExp)[]
    message?: string | ((selector: string) => string)
  }
>
