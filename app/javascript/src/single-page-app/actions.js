export const SINGLE_PAGE_APP_LOCATION_CHANGE = 'SINGLE_PAGE_APP_UPDATE_PAGE'
export const SINGLE_PAGE_APP_QUERY_CHANGE = 'SINGLE_PAGE_APP_QUERY_CHANGE'

export function handleLocationChange(value) {
  return { type: SINGLE_PAGE_APP_LOCATION_CHANGE, payload: value }
}

export function handleQueryChange(value) {
  return { type: SINGLE_PAGE_APP_QUERY_CHANGE, payload: value }
}
