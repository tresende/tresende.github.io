// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components')
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
      reportsDirectory: path.resolve(__dirname, './coverage'),
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
