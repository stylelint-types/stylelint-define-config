import type { OxlintConfig } from 'oxlint'
import config from '@pengzhanbo/oxc-config/oxlint'

const oxlintConfig: OxlintConfig = config({
  settings: {
    jsdoc: {
      tagNamePreference: {
        experimental: 'experimental',
      },
    },
  },
})

export default oxlintConfig
