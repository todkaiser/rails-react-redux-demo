import { connect } from 'react-redux'
import Demo from '../components/Demo'
import {
  showPanel,
  hidePanel,
  clearData,
  fetchAsyncData
} from '../actions'

const mapStateToProps = state => {
  return {
    isPanelVisible: state.getIn(['demoApp', 'ui', 'isPanelVisible'], false),
    isLoading: state.getIn(['demoApp', 'ui', 'isLoading'], false),
    description: state.getIn(['demoApp', 'description']),
    isEarthFlat: state.getIn(['demoApp', 'isEarthFlat']),
    url: state.getIn(['demoApp','url'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showPanel: () => {
      dispatch(showPanel())
    },
    hidePanel: () => {
      dispatch(hidePanel())
    },
    fetchAsyncData: () => {
      dispatch(fetchAsyncData())
    },
    clearData: () => {
      dispatch(clearData())
    }
  }
}

const DemoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo)

export default DemoContainer
