import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose} from 'redux'
import Immutable, { fromJS } from 'immutable'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

export default function renderReactComponents(Components, combinedReducer) {
  // We use querySelectorAll because there could be multiple react-redux apps
  // within the same page.
  const reactNodeList = document.querySelectorAll('[data-react-class]')

  // Reads any data passed via the redux_app helper, which is a
  // convenient way to initialize data.
  const initialState = Array.from(reactNodeList).reduce((state, domNode) => {
    const props = JSON.parse(domNode.dataset.reactProps || '{}')
    const reducer = domNode.dataset.reducer

    if (typeof reducer !== 'undefined') {
      state[reducer] = props
    }

    return state
  }, {})

  // An "enchancer" enables the app to interact with
  // the redux browser extension (both Chrome and Firefox),
  // which is invaluable as a development tool.
  // Src: https://extension.remotedev.io/#usage
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        serialize: {
          immutable: Immutable
        }
      })
      : compose
  
  const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware)
  )

  // Generate redux store with collected `initialState`
  const store = createStore(
    combinedReducer,
    fromJS(initialState),
    enhancer
  )

  // Render all components on the page using the global store
  for (const domNode of reactNodeList) {
    const Component = Components[domNode.dataset.reactClass]
    const props = JSON.parse(domNode.dataset.reactProps || '{}')

    ReactDOM.render(
      <Provider store={store}>
        <Component {...props} />
      </Provider>,
      domNode
    )
  }
}
