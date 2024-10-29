import type { CSSPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type PropertyDisallowed = CSSPropertiesMap | RegExpLike

export type PropertyDisallowedListOptions = RuleConfig<
  PropertyDisallowed | PropertyDisallowed[],
  {
    message?: string | ((property: string) => string)
  }
>
