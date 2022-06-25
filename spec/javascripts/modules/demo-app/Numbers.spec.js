import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { List } from 'immutable'
import Numbers from '../../../../app/javascript/src/demo-app/components/Numbers.js'

const props = {
  numbers: List(['1','2','3'])
}

function renderWrapper(props) {
  return shallow(
    <Numbers {...props} />
  )
}

test('<Numbers /> renders a list of numbers', t => {
  const wrapper = renderWrapper(props)

  t.true(wrapper.containsAllMatchingElements([
    <h3>Here is some fetched data</h3>,
    <span>Note: click the "Fetch data" button above to populate me: </span>,
    <span>1</span>,
    <span>2</span>,
    <span>3</span>
  ]))
})
