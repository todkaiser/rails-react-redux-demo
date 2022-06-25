import { connect } from 'react-redux'
import InputField from '../components/InputField'
import { handleInputUpdate } from '../../input-field/actions'

const mapStateToProps = state => {
  const defaultValue = state.getIn(['inputField', 'defaultField'])

  return {
    inputValue: state.getIn(['inputField','inputValue'], defaultValue)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInputUpdate: (value) => {
      dispatch(handleInputUpdate(value))
    }
  }
}

const InputFieldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InputField)

export default InputFieldContainer
