import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type FontFamilyNoDuplicateNamesOptions = RuleConfig<
  true,
  [name: string],
  {
    ignoreFontFamilyNames?: RegExpLike[]
  }
>
