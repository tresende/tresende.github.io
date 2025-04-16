import '@testing-library/jest-dom'
import { vi } from 'vitest'

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: vi.fn()
})
