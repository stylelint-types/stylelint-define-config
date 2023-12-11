import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  clean: true,
  target: ['es2022', 'node18'],
  minify: true,
  sourcemap: false,
  splitting: true,
  dts: true,
})
