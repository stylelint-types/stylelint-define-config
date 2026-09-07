import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type SelectorMaxAttributeOptions = RuleConfig<
  number,
  [selector: string, max: number | string],
  {
    ignoreAttributes?: RegExpLike[]
  }
>
