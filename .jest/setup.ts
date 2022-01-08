import '@testing-library/jest-dom'
import 'jest-styled-components'

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: jest.fn()
})
