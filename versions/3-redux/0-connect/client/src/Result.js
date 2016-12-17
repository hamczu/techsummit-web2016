import React, { Component } from 'react'
import { connect } from 'react-redux'

const Result = ({ result }) => <h1>Result: {result}</h1>

export default connect((state) => {
  return { 
    result: state.reduce((a, b) => a + b, 0)
  }
})(Result)
