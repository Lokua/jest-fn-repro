export default function createHook({ fn }) {
  console.info('createHook fn', fn)

  return () => ({
    fn,
  })
}
