import React from 'react'
import PropTypes from 'prop-types'
import { XXXX, YYYY } from '../../somepath'

const kinds = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
}

const Alert = ({ children, kind, ...rest }) => (
  <div
    style={{
      padding: 20,
      borderRadius: 3,
      color: 'white',
      background: kinds[kind] || 'white',
    }}
    {...rest}
  >
    {children}<br />
    {XXXX.A}<br />
    {XXXX.B}<br />
    {YYYY.C}<br />
    {YYYY.D}
  </div>
)

Alert.propTypes = {
  /**
   * The kind prop is used to set the alert's background color
   */
  kind: PropTypes.oneOf(['info', 'positive', 'negative', 'warning']),
}

Alert.defaultProps = {
  kind: 'info',
}

export default Alert
