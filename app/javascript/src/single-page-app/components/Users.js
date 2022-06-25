import React, { PureComponent, Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// This class illustrates the  older form of the React API,
// i.e. a class, which previously was the only way to handle
// side effects, e.g. `componentDidMount` or `componentDidUpdate`.
class Users extends PureComponent {
  static propTypes = {
    pathname: PropTypes.string,
    search: PropTypes.string,
    handleLocationChange: PropTypes.func.isRequired,
    handleQueryChange: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.handleUrlChanges()
  }

  componentDidUpdate() {
    this.handleUrlChanges()
  }

  handleUrlChanges() {
    this.props.handleLocationChange(this.props.pathname)
    this.props.handleQueryChange(this.props.search)
  }

  render() {
    return (
      <Fragment>
        <h2>I'm the Users page</h2>
        <div>
          I'm using the browser history for quick seamless navigation. Navigate
          around and click forward/back and notice no page reload.
        </div>
        <br />
        <div>Reload the page and I'll still render just fine.</div>

        <li>
          <Link to='/users?id=1'>Add query string to URL</Link>
        </li>
      </Fragment>
    )
  }
}

export default Users
