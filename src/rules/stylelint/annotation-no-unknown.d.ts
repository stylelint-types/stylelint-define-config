import type { RegExpLike } from '../../utils.js'
import type { RuleConfig } from '../rule-config.js'

export type AnnotationNoUnknownOptions = RuleConfig<
  true,
  [annotation: string],
  {
    /**
     * Specify which annotations to ignore.
     */
    ignoreAnnotations?: RegExpLike[]
  }
>
