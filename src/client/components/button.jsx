import React, { PropTypes } from 'react'
import s from './button.css'

const Button = ({ action, actionLabel }) => (
  <button className={s.button} onClick={action}>{actionLabel}</button>
)

Button.propTypes = {
  action: PropTypes.func.isRequired,
  actionLabel: PropTypes.string.isRequired,
}

export default Button
