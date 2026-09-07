import type { UserConfig } from 'tsdown'
import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'tsdown'

const config: UserConfig = defineConfig({
  entry: 'src/index.ts',
  format: 'esm',
  minify: true,
  sourcemap: false,
  dts: true,
  fixedExtension: false,
  onSuccess: (resolvedConfig) => {
    for (const name of Object.keys(resolvedConfig.entry)) {
      const file = path.join(resolvedConfig.outDir, `${name}.d.ts`)
      const content = fs
        .readFileSync(file, 'utf-8')
        .split('\n')
        .filter((line) => !line.startsWith('//#region') && !line.startsWith('//#endregion'))
        .join('\n')

      fs.writeFileSync(file, content)
    }
  },
})

export default config
