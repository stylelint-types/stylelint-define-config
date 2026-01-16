import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type ContainerNamePatternOptions = RuleConfig<
  RegExpLike,
  [containerName: string, pattern: string]
>
