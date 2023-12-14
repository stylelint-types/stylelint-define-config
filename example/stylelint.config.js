// @ts-check
import defineConfig from 'stylelint-define-config'

export default defineConfig({
  extends: ['stylelint-config-standard'],
  rules: {
    'unit-allowed-list': [['px'], {
      ignoreProperties: {
        px: ['border'],
      },
    }],
  },
})
