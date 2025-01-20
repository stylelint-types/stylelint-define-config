import type { CSSPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type RuleSelectorPropertyDisallowed = CSSPropertiesMap | RegExpLike

export type RuleSelectorPropertyDisallowedListOptions = RuleConfig<
  Record<string, RuleSelectorPropertyDisallowed | RuleSelectorPropertyDisallowed[]>,
  {
    message?: string | ((selector: string, property: string) => string)
    ignore?: ['keyframe-selectors']
  }
>
