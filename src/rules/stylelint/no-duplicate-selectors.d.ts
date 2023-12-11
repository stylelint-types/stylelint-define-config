import type { RuleConfig } from '../rule-config'

export type NoDuplicateSelectorsOptions = RuleConfig<
  true,
  {
    /**
     * This option will also disallow duplicate selectors within selector lists.
     * @default false
     */
    disallowInList?: boolean
    message?: string | ((selector: string, firstDuplicateLine: number | string) => string)
  }
>
