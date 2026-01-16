export interface LanguageOptions {
  syntax?: {
    /**
     * Define custom at-rules with specific `prelude` and `descriptors` syntax
     */
    atRules?: Record<
      string,
      {
        comment?: string
        prelude?: string
        descriptors?: Record<string, string>
      }
    >
    /**
     *  Extend the list of CSS-wide keywords with custom values
     */
    cssWideKeywords?: string[]
    /**
     * Customize the syntax of specific properties
     */
    properties?: Record<string, string>
    /**
     * Extend or modify type definitions used in property values
     */
    types?: Record<string, string>
  }
}
