import React, { Fragment, useEffect } from 'react'
import { PropTypes } from 'prop-types'

const About = ({
  pathname,
  search,
  handleLocationChange,
  handleQueryChange,
}) => {
  // This uses the latest addition to the React API: Hooks.
  // This allows you to perform side effects on pure functions,
  // so that you don't have to write a class. See <Users /> for
  // and example showing how this could be written without useEffects.
  // https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    handleLocationChange(pathname)
    handleQueryChange(search)
  })

  return (
    <Fragment>
      <h2>I'm the About page</h2>
      <div>
        I'm using the browser history for quick seamless navigation. Navigate
        around and click forward/back and notice no page reload.
      </div>
      <br />
      <div>Reload the page and I'll still render just fine.</div>
    </Fragment>
  )
}

About.prototype = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  handleLocationChange: PropTypes.func.isRequired,
  handleQueryChange: PropTypes.func.isRequired
}

export default About
