// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import renderReactComponents from 'src/react-render'
import components from 'src/react-apps'
import rootReducer from 'src/combine-reducers'

Rails.start()
ActiveStorage.start()

// Render react components
document.addEventListener('DOMContentLoaded', () => {
  renderReactComponents(components, rootReducer)
})
