import type { RuleConfig } from '../rule-config'

type FontWeightNotationIgnore = 'relative'

export type FontWeightNotationOptions = RuleConfig<
  'numeric' | 'named-where-possible',
  {
    ignore?: [FontWeightNotationIgnore]
    message?: string | ((type: string) => string)
  }
>
