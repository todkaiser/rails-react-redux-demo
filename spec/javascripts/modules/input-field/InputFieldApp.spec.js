// Note: this tests aren't very common as the combination of
// JS unit and Rails integration tests should be sufficient,
// but writing one anyway to showcase functionality.
import React from 'react'
import test from 'ava'
import { mount } from 'enzyme'
import { fromJS } from 'immutable'
import InputFieldApp from '../../../../app/javascript/src/input-field/InputFieldApp.js'
import {
  INPUT_FIELD_APP_UPDATE_INPUT,
  handleInputUpdate,
} from '../../../../app/javascript/src/input-field/actions.js'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'

const initialState = fromJS({
  inputField: { defaultField: 'Test' },
  handleInputUpdate: handleInputUpdate(),
})

test('<InputFieldApp /> updates redux store', (t) => {
  const store = configureStore()(initialState)
  const value = 'Rick Steves'

  store.dispatch(handleInputUpdate(value))

  const actions = store.getActions()
  const expectedPayload = { type: INPUT_FIELD_APP_UPDATE_INPUT, payload: value }

  t.deepEqual(actions, [expectedPayload])
})

test('<InputFieldApp /> dispatches handleInputUpdate', (t) => {
  const store = configureStore()(initialState)
  const value = 'Rick Steves'
  const wrapper = mount(
    <Provider store={store}>
      <InputFieldApp />
    </Provider>
  )

  wrapper.find('#field').simulate('change', { target: { value: value } })

  const actions = store.getActions()
  t.deepEqual(actions, [handleInputUpdate(value)])
})
