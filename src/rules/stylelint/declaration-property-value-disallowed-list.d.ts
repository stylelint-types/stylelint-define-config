import type { StandardPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type DeclarationPropertyValueDisallowedListOptions = RuleConfig<
  Record<StandardPropertiesMap | `/${string}/`, RegExpLike | RegExpLike[]>
  | Record<string, RegExpLike | RegExpLike[]>,
  {
    message?: string | ((property: string, value: string) => string)
  }
>
