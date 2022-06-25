/*
  All of these reducer functions could have been written as one large
  function containing a massive switch statement. That isn't recommended
  as an application grows in complexity. The best practice is to break apart
  each reducer into its own sub reducer and assign it to handle a slice of
  the state tree based on whatever makes logical sense. This makes it a LOT
  easier to maintain code and figure out where things should go. In the end,
  the result of all the reducers are joined together using the update method
  provided by ImmutableJS to return a single state tree.
*/

import { List, Map } from 'immutable'
import {
  DEMO_APP_SHOW_PANEL,
  DEMO_APP_HIDE_PANEL,
  DEMO_APP_CLEAR_DATA,
  DEMO_APP_FETCH_DATA,
  DEMO_APP_SHOW_LOADING,
  DEMO_APP_HIDE_LOADING,
  DEMO_APP_UPDATE_INPUT
} from './actions'

function ui(action) {
  return function(state = Map()) {
    switch (action.type) {
      case DEMO_APP_SHOW_PANEL:
        return state.set('isPanelVisible', action.payload)

      case DEMO_APP_HIDE_PANEL:
        return state.set('isPanelVisible', action.payload)

      case DEMO_APP_SHOW_LOADING:
        return state.set('isLoading', true)

      case DEMO_APP_HIDE_LOADING:
        return state.set('isLoading', false)

      case DEMO_APP_UPDATE_INPUT:
        return state.set('inputValue', action.payload)

      default:
        return state
    }
  }
}

function someOtherReducer(action) {
  return function(state = Map()) {
    switch (action.type) {
      case DEMO_APP_FETCH_DATA:
        return state.set('data', action.payload)

      case DEMO_APP_CLEAR_DATA:
        return state.set('data', List())

      default:
        return state
    }
  }
}

// Upon initial page load, this adds a "ui" property to the store object.
// Subsequent interactions within the app will eventually have the reducers
// create a store similar to the following:
//
// {
// ..., (properties passed through initialization from redux_app helper)
//   ui: isPanelVisible: true,
//   data: ImmutableList [ 1,2,3,4,5,6,7,8]
// }
export default function(state = Map(), action) {
  return state
    .update('ui', ui(action))
    .update(someOtherReducer(action))
}
