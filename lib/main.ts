import { useEffect, useRef } from "react"
import { runTick, removeTickRunner, startAll, stopAll } from "shared-tick"

type Param = {
  runOnTabVisible?: boolean
  tick?: number
}

export default function useSharedTick(fn: (t: number) => void, { runOnTabVisible, tick = 1000 }: Param = {}) {
  const isVisibility = useRef(true)

  useEffect(() => {
    const id = runTick({
      tick,
      onTick(t) {
        if (isVisibility.current || !runOnTabVisible) {
          fn(t)
        }
      }
    })
    return () => removeTickRunner(id)
  }, [])

  useEffect(() => {
    if (!runOnTabVisible) {
      return
    }

    const handle = () => {
      isVisibility.current = !document.hidden

      if (runOnTabVisible) {
        isVisibility.current ? startAll() : stopAll()
      }
    }

    document.addEventListener("visibilitychange", handle)
    return () => document.removeEventListener("visibilitychange", handle)
  }, [!!runOnTabVisible])
}