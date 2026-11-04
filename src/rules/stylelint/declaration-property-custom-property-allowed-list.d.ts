import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

/** Allowed custom-property patterns for each CSS property. */
export type DeclarationPropertyCustomPropertyAllowedListOptions = RuleConfig<
  Record<string, Arrayable<RegExpLike>>,
  [property: string, customProperty: string]
>
