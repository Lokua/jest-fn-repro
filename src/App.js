import React, { useEffect } from 'react'
import useHook from './useHook'

export default function App() {
  const hook = useHook()

  useEffect(() => {
    console.info('useEffect hook.fn', hook.fn)
    hook.fn()
  }, [hook])

  return <h1>Hello</h1>
}
