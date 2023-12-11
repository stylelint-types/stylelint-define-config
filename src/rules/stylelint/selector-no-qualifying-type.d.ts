import type { RuleConfig } from '../rule-config'

type SelectorNoQualifyingTypeIgnore = 'attribute' | 'class' | 'id'

export type SelectorNoQualifyingTypeOptions = RuleConfig<
  true,
  {
    ignore?: SelectorNoQualifyingTypeIgnore[]
    message?: string | ((selector: string) => string)
  }
>
