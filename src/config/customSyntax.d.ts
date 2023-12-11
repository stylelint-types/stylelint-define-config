import type { LiteralUnion } from '../utils'

export interface CustomSyntax {}

export type KnownCustomSyntax = LiteralUnion<
  | 'postcss-angular'
  | 'postcss-html'
  | 'postcss-less'
  | 'postcss-linaria'
  | 'postcss-lit'
  | 'postcss-markdown'
  | 'postcss-sass'
  | 'postcss-scss'
  | 'postcss-styled-components'
  | 'postcss-styled-syntax'
  | keyof CustomSyntax
>
