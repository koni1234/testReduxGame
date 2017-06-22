import React, { PropTypes } from 'react'

const Row = ({ children }) => (
  <div>
    {children}
  </div>
)

Row.propTypes = {
  children: PropTypes.node
}

export default Row