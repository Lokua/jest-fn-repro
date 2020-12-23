import * as api from './api'
import repro from './repro'

describe('repro', () => {
  it('should call api', () => {
    api.getData = jest.fn(() => 'hello')
    repro.fn()
    expect(api.getData).toHaveBeenCalled()
  })
})
