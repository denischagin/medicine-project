import { useEffect, useRef, useState } from 'react'

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDebounceValue] = useState(value)

  let timer = useRef<NodeJS.Timeout>()

  useEffect(() => {
    clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
  }, [value])

  return debounceValue
}
