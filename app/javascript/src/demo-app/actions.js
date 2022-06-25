import { fromJS } from 'immutable'

// Prefix each action by the app's name, e.g. DEMO_APP_
// so as to not conflate with other redux apps that may
// be on the same page.
export const DEMO_APP_SHOW_PANEL = 'DEMO_APP_SHOW_PANEL'
export const DEMO_APP_HIDE_PANEL = 'DEMO_APP_HIDE_PANEL'
export const DEMO_APP_CLEAR_DATA = 'DEMO_APP_CLEAR_DATA'
export const DEMO_APP_FETCH_DATA = 'DEMO_APP_FETCH_DATA'
export const DEMO_APP_SHOW_LOADING = 'DEMO_APP_SHOW_LOADING'
export const DEMO_APP_HIDE_LOADING = 'DEMO_APP_HIDE_LOADING'
export const DEMO_APP_UPDATE_INPUT = 'DEMO_APP_UPDATE_INPUT'

export function showPanel() {
  return { type: DEMO_APP_SHOW_PANEL, payload: true }
}

export function hidePanel() {
  return { type: DEMO_APP_HIDE_PANEL, payload: false }
}

export function clearData() {
  return { type: DEMO_APP_CLEAR_DATA }
}

export function handleInputUpdate(value) {
  return { type: DEMO_APP_UPDATE_INPUT, payload: value }
}

export function fetchAsyncData() {
  return (dispatch, getState) => {
    // as needed, inspect the current store state for whatver reasons
    const appState = getState().get('demoApp')
    const url = appState.get('url')

    dispatch({ type: DEMO_APP_SHOW_LOADING })

    fetch(url)
      .then(response => response.json())
      .then(json => {
        const data = fromJS(json)

        dispatch({
          type: DEMO_APP_FETCH_DATA,
          payload: data.get('numbers')
        })

        dispatch({ type: DEMO_APP_HIDE_LOADING })
      })
  }
}
