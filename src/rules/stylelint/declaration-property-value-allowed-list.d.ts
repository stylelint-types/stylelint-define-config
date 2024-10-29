import type { StandardPropertiesMap } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type DeclarationPropertyValueAllowedListValues = RegExpLike | RegExpLike[]

export type DeclarationPropertyValueAllowedListPrimaryOptions =
  Record<StandardPropertiesMap | `/${string}/`, DeclarationPropertyValueAllowedListValues> | Record<string, DeclarationPropertyValueAllowedListValues>

export interface DeclarationPropertyValueAllowedListSecondaryOptions {
  message?: string | ((property: string, value: string) => string)
}

export type DeclarationPropertyValueAllowedListOptions = RuleConfig<
  DeclarationPropertyValueAllowedListPrimaryOptions,
  DeclarationPropertyValueAllowedListSecondaryOptions
>
