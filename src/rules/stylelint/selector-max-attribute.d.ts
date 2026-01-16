import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type SelectorMaxAttributeOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    ignoreAttributes?: RegExpLike[]
  }
>
