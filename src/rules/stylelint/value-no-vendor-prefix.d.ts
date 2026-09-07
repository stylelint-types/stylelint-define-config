import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ValueNoVendorPrefixOptions = RuleConfig<
  true,
  [actual: number, expected: string],
  {
    ignoreValues: Arrayable<RegExpLike>
  }
>
