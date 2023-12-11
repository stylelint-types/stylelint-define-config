import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

export interface AnnotationNoUnknownSecondaryOptions {
  /**
   * Specify which annotations to ignore.
   */
  ignoreAnnotations?: RegExpLike[]

  message?: string | ((annotation: string) => string)
}
export type AnnotationNoUnknownOptions = RuleConfig<
  true,
  AnnotationNoUnknownSecondaryOptions
>
