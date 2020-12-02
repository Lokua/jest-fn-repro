import { render } from '@testing-library/react'
import App from './App'
import * as util from './util'

test('renders learn react link', () => {})

describe('App', () => {
  beforeEach(() => {
    util.helper = jest.fn()
  })

  it('should render without error', () => {
    render(<App />)
    expect(util.helper).toHaveBeenCalled()
  })
})
