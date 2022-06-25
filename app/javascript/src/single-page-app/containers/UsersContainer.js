import { connect } from 'react-redux'
import Users from '../components/Users'
import {
  handleLocationChange,
  handleQueryChange,
} from '../../single-page-app/actions'

// Reaect router automatically passes data into its rendered
// components. This data can be accessed via ownProps.
const mapStateToProps = (state, ownProps) => {
  return {
    pathname: ownProps.location.pathname,
    search: ownProps.location.search,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLocationChange: (value) => {
      dispatch(handleLocationChange(value))
    },
    handleQueryChange: (value) => {
      dispatch(handleQueryChange(value))
    },
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer
