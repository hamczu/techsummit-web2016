import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }

    this.handleClick = () => this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick}>click me!</button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
