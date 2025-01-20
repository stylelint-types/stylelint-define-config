import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export type AnnotationNoUnknownOptions = RuleConfig<
  true,
  {
    /**
     * Specify which annotations to ignore.
     */
    ignoreAnnotations?: RegExpLike[]

    message?: string | ((annotation: string) => string)
  }
>
