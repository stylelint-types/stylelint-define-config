import type { RuleConfig } from '../rule-config'
import type { LiteralUnion } from '../../utils'

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
