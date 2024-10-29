import type { CSSFunction } from '../../types'
import type { RegExpLike } from '../../utils'
import type { RuleConfig } from '../rule-config'

type LengthZeroNoUnitIgnore = 'custom-properties'

export interface LengthZeroNoUnitSecondaryOptions {
  ignore?: [LengthZeroNoUnitIgnore]
  ignoreFunctions?: (CSSFunction | RegExpLike)[]
}

export type LengthZeroNoUnitOptions = RuleConfig<
  true,
  LengthZeroNoUnitSecondaryOptions
>
