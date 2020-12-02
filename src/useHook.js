import createHook from './createHook'
import { helper } from './util'

const useHook = createHook({
  // ceases being a mock function when passed to createHook and called in component
  fn: helper,

  // this however IS a mock function
  // fn: () => helper(),
})

export default useHook
