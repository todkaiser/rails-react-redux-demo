import React from 'react'
import { List } from 'immutable'
import { PropTypes } from 'prop-types'

function Numbers({ numbers }) {
  return (
    <section>
      <h3>Here is some fetched data</h3>
      <span>Note: click the "Fetch data" button above to populate me: </span>

      {numbers.map((num, index) => <span key={index}>{num}</span>)}

    </section>
  )
}

Numbers.prototype = {
  numbers: PropTypes.instanceOf(List)
}

export default Numbers
