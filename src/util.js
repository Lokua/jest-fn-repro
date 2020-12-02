export function helper() {
  if (process.env.NODE_ENV === 'test') {
    throw new Error('gotcha')
  }
}
