import { connect } from 'react-redux'
import Numbers from '../components/Numbers'
import { List } from 'immutable'

const mapStateToProps = state => {
  return {
    numbers: state.getIn(['demoApp', 'data'], List())
  }
}

const NumbersContainer = connect(
  mapStateToProps
)(Numbers)

export default NumbersContainer
