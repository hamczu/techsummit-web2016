import React from 'react'

export default ({ onClick, count }) => (
  <div>
    <button onClick={onClick}>click me!</button>
    <span>{count}</span>
  </div>
)
