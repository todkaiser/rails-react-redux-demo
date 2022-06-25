export const INPUT_FIELD_APP_UPDATE_INPUT = 'INPUT_FIELD_APP_UPDATE_INPUT'

export function handleInputUpdate(value) {
  return { type: INPUT_FIELD_APP_UPDATE_INPUT, payload: value }
}
