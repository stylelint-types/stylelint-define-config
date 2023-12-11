import type { RuleConfig } from '../rule-config'
import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'

type LengthZeroNoUnitIgnore = 'custom-properties'

export interface LengthZeroNoUnitSecondaryOptions {
  ignore?: [LengthZeroNoUnitIgnore]
  ignoreFunctions?: (CSSFunction | RegExpLike)[]
}

export type LengthZeroNoUnitOptions = RuleConfig<
  true,
  LengthZeroNoUnitSecondaryOptions
>
