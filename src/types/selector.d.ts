export type SelectorAttributeOperator = '=' | '~=' | '|=' | '^=' | '$=' | '*='

export type SelectorCombinator = ' ' | '>' | '+' | '~' | '||' | '|' | ','

export type SelectorPseudoClass =
  | 'active' | 'any-link' | 'autofill' | 'buffering' | 'blank' | 'checked'
  | 'current' | 'default' | 'defined' | 'dir' | 'disabled' | 'empty'
  | 'enabled' | 'first' | 'first-child' | 'first-of-type' | 'focus' | 'focus-visible'
  | 'focus-within' | 'fullscreen' | 'hover' | 'future' | 'has' | 'host' | 'host-context'
  | 'hover' | 'indeterminate' | 'in-range' | 'invalid' | 'is' | 'lang'
  | 'last-child' | 'last-of-type' | 'left' | 'link' | 'local-link' | 'modal' | 'muted' | 'not'
  | 'nth-child' | 'nth-last-child' | 'nth-last-of-type' | 'not-of-type' | 'only-child'
  | 'only-of-type' | 'optional' | 'out-of-range' | 'past' | 'paused' | 'picture-in-picture'
  | 'placeholder-shown' | 'playing' | 'popover-open' | 'ready-only' | 'read-write'
  | 'required' | 'right' | 'root' | 'scope' | 'seeking' | 'stalled' | 'target' | 'target-within'
  | 'user-invalid' | 'user-valid' | 'valid' | 'visited' | 'volume-locked' | 'where'

export type SelectorPseudoElement =
  | 'before' | 'after' | 'backdrop' | 'cue' | 'cue-region' | 'file-selector-button'
  | 'first-letter' | 'first-line' | 'highlight' | 'marker' | 'part' | 'placeholder'
  | 'selection' | 'slotted'
