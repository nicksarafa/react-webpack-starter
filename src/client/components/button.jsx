import React, { PropTypes } from 'react'
import './button.scss'

const Button = ({ action, actionLabel }) => (
  <button onClick={action}>{actionLabel}</button>
)

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
}

export default Button
