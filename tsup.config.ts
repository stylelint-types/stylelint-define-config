import { type Options, defineConfig } from 'tsup'

const baseOptions: Options = {
  entry: ['src/index.ts'],
  outDir: 'dist',
  clean: true,
  target: ['es2022', 'node18'],
  minify: true,
  sourcemap: false,
  splitting: true,
}

export default defineConfig([
  { ...baseOptions, format: 'cjs', dts: false },
  { ...baseOptions, format: 'esm', dts: true },
])
