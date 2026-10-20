import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(rootDir, 'src/components'),
      templates: path.resolve(rootDir, 'src/templates'),
      utils: path.resolve(rootDir, 'src/utils')
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: './.vitest/setup.ts',
    include: ['src/**/test.{js,ts,jsx,tsx}'],
    globals: true,
    reporters: ['default'],
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: path.resolve(rootDir, './coverage'),
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [
        'src/pages/**/*.ts(x)?',
        'src/types/**/*.d.ts',
        'src/**/mock.ts',
        'src/components/Head/**/*.tsx',
        'src/components/TagManager/**/*.tsx',
        'src/utils/convetToFirestore.ts'
      ]
    }
  }
})
