import '@testing-library/jest-dom'

Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
  set: jest.fn()
})
