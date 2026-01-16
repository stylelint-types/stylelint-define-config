import type { LiteralUnion, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type SelectorTypeNoUnknownIgnore = LiteralUnion<'custom-elements' | 'default-namespace'>

export type SelectorTypeNoUnknownOptions = RuleConfig<
  true,
  [selector: string],
  {
    ignore?: SelectorTypeNoUnknownIgnore[]
    ignoreNamespaces?: RegExpLike[]
    ignoreTypes?: RegExpLike[]
  }
>
