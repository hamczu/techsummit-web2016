import { connect } from 'react-redux'
import Counters from '../components/Counters'
import { add, increment } from '../actions'

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
