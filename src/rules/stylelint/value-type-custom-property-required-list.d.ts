import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

/** CSS value types that must be expressed through custom properties. */
export type ValueTypeCustomPropertyRequiredListOptions = RuleConfig<
  Arrayable<string>,
  [value: string, type: string],
  {
    /** Literal values exempt from custom-property requirements. */
    ignoreValues?: Arrayable<RegExpLike>

    /** Functions exempt from requirements, grouped by CSS value type. */
    ignoreFunctions?: Record<string, Arrayable<RegExpLike>>

    /** Properties exempt from requirements, grouped by CSS value type. */
    ignoreProperties?: Record<string, Arrayable<RegExpLike>>
  }
>
