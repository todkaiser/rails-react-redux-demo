import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Panel from './Panel'
import NumbersContainer from '../containers/NumbersContainer'

const Demo = ({
  description,
  isEarthFlat,
  url,
  isPanelVisible,
  isLoading,
  showPanel,
  hidePanel,
  fetchAsyncData,
  clearData
}) => {
  return (
    <Fragment>

      <section>
        <h2>DemoApp React Component:</h2>
        <h3>Data passed via haml helper for initial render:</h3>
        <ul>
          <li>Some text: {description}</li>
          <li>Q: Is Earth flat? A: {isEarthFlat.toString()}</li>
          <li>Some url: {url}</li>
        </ul>
      </section>

      <section>
      <span>Q: Is panel visible? A: {isPanelVisible.toString()}</span>
      </section>

      <br />

      {isPanelVisible ? <Panel /> : null}

      <br/>
      <br/>

      <section>
        <button onClick={() => showPanel() }>Show panel</button>
        <button onClick={() => hidePanel() }>Hide panel</button>
        <button onClick={() => fetchAsyncData() } disabled={!isPanelVisible}>
          {isLoading ? 'Loading...' : 'Fetch data'}
        </button>
        <button onClick={() => clearData() } disabled={!isPanelVisible}>
          Clear data
        </button>
      </section>

      <NumbersContainer />

    </Fragment>
  )
}

Demo.prototype = {
  description: PropTypes.string,
  isEarthFlat: PropTypes.bool,
  url: PropTypes.strig,
  isLoading: PropTypes.bool.isRequired,
  isPanelVisible: PropTypes.bool.isRequired,
  showPanel: PropTypes.func.isRequired,
  hidePanel: PropTypes.func.isRequired,
  fetchAsyncData: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired
}

export default Demo
