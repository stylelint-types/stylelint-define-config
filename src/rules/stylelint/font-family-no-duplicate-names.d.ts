import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type FontFamilyNoDuplicateNamesOptions = RuleConfig<
  true,
  [name: string],
  {
    ignoreFontFamilyNames?: RegExpLike[]
  }
>
