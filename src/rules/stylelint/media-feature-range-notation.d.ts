import type { RuleConfig } from '../rule-config'

export type MediaFeatureRangeNotationOptions = RuleConfig<
  'context' | 'prefix',
  {
    /**
     * - `'exact-value'`: Reverse the primary option for media features with exact values.
     */
    except?: ('exact-value')[]
    message?: string | ((primary: string) => string)
  }
>
