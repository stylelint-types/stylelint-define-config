import type { StandardPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type DeclarationPropertyValueDisallowedListValues = RegExpLike | RegExpLike[]

export type DeclarationPropertyValueDisallowedListPrimaryOptions =
  Record<StandardPropertiesMap | `/${string}/`, DeclarationPropertyValueDisallowedListValues> | Record<string, DeclarationPropertyValueDisallowedListValues>

export interface DeclarationPropertyValueDisallowedListSecondaryOptions {
  message?: string | ((property: string, value: string) => string)
}

export type DeclarationPropertyValueDisallowedListOptions = RuleConfig<
  DeclarationPropertyValueDisallowedListPrimaryOptions,
  DeclarationPropertyValueDisallowedListSecondaryOptions
>
