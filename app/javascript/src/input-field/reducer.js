import { Map } from 'immutable'
import { INPUT_FIELD_APP_UPDATE_INPUT } from './actions'

function ui(action) {
  return function(state = Map()) {
    switch (action.type) {
      case INPUT_FIELD_APP_UPDATE_INPUT:
        return state.set('inputValue', action.payload)

      default:
        return state
    }
  }
}

export default function(state = Map(), action) {
  return state
    .update(ui(action))
}
