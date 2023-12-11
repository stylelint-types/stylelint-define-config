import type { LiteralUnion } from '../utils'

export type MediaFeature = MediaFeatureNormal | MediaFeaturePrefix

export type MediaFeatureNormal = LiteralUnion<
  // level 3
  | 'width' | 'height' | 'device-width' | 'device-height' | 'orientation'
  | 'aspect-ratio' | 'device-aspect-ratio' | 'color' | 'color-index'
  | 'monochrome' | 'resolution' | 'scan' | 'grid'
  // level 4
  | 'update' | 'overflow-block' | 'overflow-inline' | 'color-gamut'
  | 'pointer' | 'hover' | 'any-pointer' | 'any-hover'
>

export type MediaFeaturePrefix = LiteralUnion<
  | 'max-width' | 'max-height' | 'max-device-width'
  | 'max-device-height' | 'max-aspect-ratio' | 'max-device-aspect-ratio'
  | 'max-color-index' | 'max-monochrome' | 'max-resolution' | 'max-color'
  | 'min-width' | 'min-height' | 'min-device-width' | 'min-device-height'
  | 'min-aspect-ratio' | 'min-device-aspect-ratio' | 'min-color'
  | 'min-color-index' | 'min-monochrome' | 'min-resolution'
>

export type MediaFeatureLevel5 = LiteralUnion<
  | 'horizontal-viewport-segments' | 'vertical-viewport-segments'
  | 'display-mode' | 'environment-blending' | 'dynamic-range'
  | 'inverted-colors' | 'nav-controls'
  | 'video-color-gamut' | 'video-dynamic-range' | 'scripting'
  | 'prefers-reduced-motion' | 'prefers-reduced-transparency'
  | 'prefers-contrast' | 'forced-colors' | 'prefers-color-scheme'
  | 'prefers-reduced-data'
>

export type MediaType = LiteralUnion<'all' | 'screen' | 'print'>
