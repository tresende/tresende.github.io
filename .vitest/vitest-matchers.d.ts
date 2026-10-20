import type { TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

declare module 'vitest' {
  // Bridge until @testing-library/jest-dom ships Vitest 5 Assertion<R, T> support.
  // See https://github.com/testing-library/jest-dom/issues/738
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type, @typescript-eslint/no-unused-vars -- module augmentation
  interface Matchers<R = void, _T = unknown> extends TestingLibraryMatchers<unknown, R> {}
}
