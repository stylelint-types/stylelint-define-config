import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ContainerNamePatternOptions = RuleConfig<
  RegExpLike,
  {
    message?: string | ((containerName: string, pattern: string) => string)
  }
>
