import React from 'react'
import Counter from './Counter'
import Result from './Result'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counters: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }

    this.handleClick = i => {
      this.setState(prevState => {
        prevState.counters[i]++
        return {
          counters: prevState.counters
        }
      })
    }
  }

  render () {
    return (
      <div>
        <Result result={this.state.counters.reduce((a, b) => a + b, 0)} />
        {this.state.counters.map((counter, i) => (
          <Counter key={i} count={counter} onClick={this.handleClick.bind(this, i)} />
        ))}
      </div>
    )
  }
}
