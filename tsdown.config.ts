import type { UserConfig } from 'tsdown'
import { defineConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  entry: 'src/index.ts',
  format: 'esm',
  minify: true,
  sourcemap: false,
  dts: true,
  fixedExtension: false,
})

export default config
