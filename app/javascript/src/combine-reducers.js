import { combineReducers } from 'redux-immutable'

import demoAppReducer from 'src/demo-app/reducer'
import inputFieldReducer from 'src/input-field/reducer'
import singlePageAppReducer from 'src/single-page-app/reducer'

/*
The combineReducers function is an implementation detail used
by redux to literally combine multiple reducers (just pure functions)
into one. Because redux has a principlpe of a single store housing all
application state, and as an application grows in complexity, the
best practice is to deconstruct reducers to handle separate slices
of the store. combineReducers then recombines all these reducers
together into one giant reducer.

In our case, each deconstructed subreducer below handles the application
state for each of our apps. The reality is that all these separate
react-redux apps are really just a part of a single large app, but
we abstract it as separate apps according to business logic and ease
of code organiation and maintainability.

https://www.saltycrane.com/blog/2018/04/what-does-redux-combinereducers-do/
*/
export default combineReducers({
  demoApp: demoAppReducer,
  inputField: inputFieldReducer,
  singlePageApp: singlePageAppReducer,
})
