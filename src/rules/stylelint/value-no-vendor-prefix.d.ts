import type { Arrayable, RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ValueNoVendorPrefixOptions = RuleConfig<
  true,
  [actual: number, expected: string],
  {
    ignoreValues: Arrayable<RegExpLike>
  }
>
