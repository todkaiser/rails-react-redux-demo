import React from 'react'
import { PropTypes } from 'prop-types'

// This demonstrates another way to write functional components vs the function InputField() style.
// Of particular note is the lack of an explicit return statement when using this syntax.
const InputField = ({ inputValue, handleInputUpdate }) => (
  <section>
  <h2>InputFieldApp React Component:</h2>
    <h3>Change the default value of this input:</h3>
    <div>
      Hello! I'm another separate react-redux app. I easily can coexist with other
      React apps on the same page load.
    </div>

    <br />

    <label htmlFor='field'>An input field:</label>
    <input
      id='field'
      name='field'
      type='text'
      value={inputValue}
      onChange={e => handleInputUpdate(e.target.value)}
    />
    <div>
      Value of input: {inputValue}
    </div>
  </section>
)

InputField.prototype = {
  inputValue: PropTypes.string.isRequired,
  handleInputUpdate: PropTypes.func.isRequired
}

export default InputField
