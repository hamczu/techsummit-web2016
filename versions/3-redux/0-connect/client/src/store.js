import { createStore } from 'redux'

const initialState = []

function counter(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      const newState = [...state]
      newState[action.index]++
      return newState

    case 'ADD':
      return [...state, 0]

    default:
      return state
  }
}

export default createStore(counter, initialState)
