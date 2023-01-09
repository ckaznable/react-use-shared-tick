[![npm version](https://img.shields.io/npm/v/react-use-shared-tick?color=g)](https://www.npmjs.com/package/react-use-shared-tick)

# React useSharedTick

React hook run function in same `setInterval`

## Installation

use npm
```
npm install react-use-shared-tick --save
```

use yarn
```
yarn add react-use-shared-tick
```

use pnpm
```
pnpm install react-use-shared-tick
```

## Usage

run function per second

```js
import { useStatus } from "react"
import useSharedTick from "react-use-shared-tick"

function App() {
  const [time, setTime] = useState(Date.now())
  useSharedTick(setTime)

  return (
    <div>Current Timestamp: {time}</div>
  )
}
```

run function per 3 second

```jsx
useSharedTick(setTime, {tick: 3000})
```

## API

### useSharedTick

```js
useSharedTick(handler: (t: number)=>void, param)
```

### Handler

| Param | Type | Description |
|---|---|---|
|timestamp|`number`|current timestamp|


### Parameter

| Field | Type | Default | Requirement |Description |
|---|:---:|:---:|:---:|:---:|
| tick | `number` | `1000` | `No` | Running interval time |
| runOnTabVisible | `boolean` | `false` | `No` | when true will pause/start interval if `visibilitychange` event dispatched |

## License
The files included in this repository are licensed under the MIT license.