import type { LiteralUnion, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

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
