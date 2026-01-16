import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

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
