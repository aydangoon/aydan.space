import { useEffect, useRef } from 'react'

import { Nullable } from './types'

export function useInterval(callback: Function, delay: Nullable<number>) {
    const savedCallback = useRef<Function>()

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current!()
        }
        if (delay !== null) {
            let id = setInterval(tick, delay)
            return () => clearInterval(id)
        }
    }, [delay])
}

export function useTimeout(callback: Function, delay: Nullable<number>) {
    const timeoutRef = useRef<number>()
    const savedCallback = useRef<Function>(callback)
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    useEffect(() => {
        const tick = () => savedCallback.current()
        if (typeof delay === 'number') {
            timeoutRef.current = window.setTimeout(tick, delay)
            return () => window.clearTimeout(timeoutRef.current)
        }
    }, [delay])
    return timeoutRef
}
