import type { CSSPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type PropertyAllowed = CSSPropertiesMap | RegExpLike

export type PropertyAllowedListOptions = RuleConfig<
  PropertyAllowed | PropertyAllowed[],
  {
    message?: string | ((property: string) => string)
  }
>
