import React from 'react'
import Counters from './Counters'
import Result from './Result'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Counters />
        <Result />
      </div>
    )
  }
}
