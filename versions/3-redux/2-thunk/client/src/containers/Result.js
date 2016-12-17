import { connect } from 'react-redux'
import Result from '../components/Result'

function mapStateToProps(state) {
  return { 
    result: state.reduce((a, b) => a + b, 0)
  }
}

export default connect(mapStateToProps)(Result)
