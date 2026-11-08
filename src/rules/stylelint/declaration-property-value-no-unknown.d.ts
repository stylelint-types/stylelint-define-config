import type { KebabCaseStandardPropertiesMap } from '../../types/index.js'
import type { Arrayable, RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type DeclarationPropertyValueNoUnknownOptions = RuleConfig<
  true,
  [property: string, value: string],
  {
    ignoreProperties?: Record<KebabCaseStandardPropertiesMap, Arrayable<RegExpLike>>
  }
>
