import React from 'react'
import test from 'ava'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import InputField from '../../../../app/javascript/src/input-field/components/InputField.js'

const onChangeSpy = spy()

const props = {
  inputValue: 'Foo Bar',
  handleInputUpdate: onChangeSpy,
}

function renderWrapper(props) {
  return shallow(<InputField {...props} />)
}

test('<InputField /> renders a default data', (t) => {
  const wrapper = renderWrapper(props)

  t.true(wrapper.contains(<div>Value of input: Foo Bar</div>))
})

test('<InputField /> updates input', (t) => {
  const wrapper = renderWrapper(props)

  wrapper.find('#field').simulate('change', { target: { value: 'Rick' } })

  wrapper.find('#field').simulate('change', { target: { value: 'Steves' } })

  t.true(onChangeSpy.calledTwice)
  t.true(onChangeSpy.calledWithExactly('Rick'))
  t.true(onChangeSpy.calledWithExactly('Steves'))
})
