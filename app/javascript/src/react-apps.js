import demoApp from './demo-app/DemoApp'
import inputField from './input-field/InputFieldApp'
import singlePageApp from './single-page-app/SinglePageApp'

// This file is responsible for centralizing all react-redux apps
// and making them available to be rendered within `renderReactComponents`
export default {
  DemoApp: demoApp,
  InputField: inputField,
  SinglePageApp: singlePageApp
}
