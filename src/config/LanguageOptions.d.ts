export interface LanguageOptions {
  syntax?: {
    atRules?: Record<
      string,
      {
        comment?: string
        prelude?: string
        descriptors?: Record<string, string>
      }
    >
    cssWideKeywords?: string[]
    properties?: Record<string, string>
    types?: Record<string, string>
  }
}
