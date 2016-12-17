import React from 'react'
import { connect } from 'react-redux'
import Counter from './Counter'
import { add, increment } from './actions'

const Counters = ({ counters, increment, add }) => (
  <div>
    <button onClick={add}>add counter</button>
    {counters.map((counter, i) => (
      <Counter key={i} count={counter} onClick={increment.bind(this, i)} />
    ))}
  </div>
)

const mapStateToProps = (state) => {
  return { 
    counters: state
  }
}

const mapDispatchToProps = {
  add, 
  increment,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters)
