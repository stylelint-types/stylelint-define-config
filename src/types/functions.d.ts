import type { LiteralUnion } from '../utils'

export type CSSFunction = LiteralUnion<
  | 'abs' | 'acos' | 'asin' | 'atan' | 'atan2' | 'attr' | 'calc' | 'clamp'
  | 'cos' | 'counter' | 'counters' | 'cross-fade' | 'env' | 'exp' | 'fix-content'
  | 'hypot' | 'log' | 'max' | 'min' | 'minmax' | 'pow' | 'rem' | 'repeat'
  | 'round' | 'sign' | 'sin' | 'sqrt' | 'symbols' | 'tan' | 'url' | 'var'
>
