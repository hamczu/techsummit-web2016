import React from 'react'
import Counter from './Counter'
import Result from './Result'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counters: [],
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
        <button onClick={() => this.setState({
          counters: [...this.state.counters, 0]
        })}>add counter</button>
        {this.state.counters.map((counter, i) => (
          <Counter key={i} count={counter} onClick={this.handleClick.bind(this, i)} />
        ))}
      </div>
    )
  }
}
