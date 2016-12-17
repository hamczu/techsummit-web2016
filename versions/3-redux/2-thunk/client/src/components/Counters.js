import React from 'react'
import Counter from './Counter'

export default ({ counters, increment, add }) => (
  <div>
    <button onClick={add}>add counter</button>
    {counters.map((counter, i) => (
      <Counter key={i} count={counter} onClick={increment.bind(this, i)} />
    ))}
  </div>
)
