import React from "react"
import { useState } from "react"
import useSharedTick from "../lib/main"

function Countdown() {
  const [time, setTime] = useState(Date.now())
  useSharedTick(setTime, {runOnTabVisible: true})

  return (
    <div>{time}</div>
  )
}

export default React.memo(Countdown)