/* eslint-disable react/prefer-stateless-function */

import React, { Component, PropTypes } from 'react'
import './button.css'

class Button extends Component {
  render() {
    return (
      <button
        className="button"
        onClick={this.props.action}
      >
        {this.props.actionLabel}
      </button>
    )
  }
}

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
}

export default Button
