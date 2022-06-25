import { Map } from 'immutable'
import {
  SINGLE_PAGE_APP_LOCATION_CHANGE,
  SINGLE_PAGE_APP_QUERY_CHANGE
} from './actions'

function changeLocation(action) {
  return function(state = Map()) {
    switch (action.type) {
      case SINGLE_PAGE_APP_LOCATION_CHANGE:
        return state.set('path', action.payload)

      case SINGLE_PAGE_APP_QUERY_CHANGE:
        return state.set('search', action.payload)

      default:
        return state
    }
  }
}

export default function(state = Map(), action) {
  return state.update('url', changeLocation(action))
}
