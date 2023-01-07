import { useState } from 'react'
import Timer from './Timer'

function App() {
  const [count, setCount] = useState(100)

  return (
    <>
      <input type="text" onChange={(e) => setCount(+e.target.value)} value={count} />
      <div className="counter-wrap">
        {Array(count).fill("").map((_, i) => {
          return <Timer key={i} />
        })}
      </div>
    </>
  )
}

export default App
