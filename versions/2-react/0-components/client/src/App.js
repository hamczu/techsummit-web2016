import React from 'react'
import Counter from './Counter'

export default class App extends React.Component {
  render () {
    const $counters = []

    for(let i = 0; i < 10; i++){
      $counters.push(<Counter key={i} />)
    }

    return (
      <div>
        {$counters}
      </div>
    )
  }
}
