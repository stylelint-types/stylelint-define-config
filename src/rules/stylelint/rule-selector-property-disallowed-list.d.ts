import type { CSSPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type RuleSelectorPropertyDisallowed = CSSPropertiesMap | RegExpLike
export type RuleSelectorPropertyDisallowedListPrimaryOptions =
  Record<string, RuleSelectorPropertyDisallowed | RuleSelectorPropertyDisallowed[]>

export type RuleSelectorPropertyDisallowedListOptions = RuleConfig<
  RuleSelectorPropertyDisallowedListPrimaryOptions,
  {
    message?: string | ((selector: string, property: string) => string)
    ignore?: ['keyframe-selectors']
  }
>
