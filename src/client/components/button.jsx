/* eslint-disable no-console */

import React, { PropTypes } from 'react'

const Button = ({ action, actionLabel }) => (
  <button
    onClick={action}
    className="button"
  >
    {actionLabel}
  </button>
)

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
}

Button.defaultProps = {
  action: console.log('button clicked'),
  actionLabel: 'needs label',
}

export default Button
