module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/pages/**/*.ts(x)?',
    '!src/types/**/*.d.ts',
    '!src/**/mock.ts',
    '!src/components/Head/**/*.tsx',
    '!src/components/TagManager/**/*.tsx',
    '!src/utils/convetToFirestore.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '^styled-components': '<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js'
  }
}
