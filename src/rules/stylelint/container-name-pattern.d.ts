import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type ContainerNamePatternOptions = RuleConfig<
  RegExpLike,
  [containerName: string, pattern: string]
>
