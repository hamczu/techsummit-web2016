import React from 'react'
import CountersContainer from './containers/Counters'
import ResultContainer from './containers/Result'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <CountersContainer />
        <ResultContainer />
      </div>
    )
  }
}
