import React, { PropTypes } from 'react'

const Square = ({ children }) => (
  <div>
    {children}
  </div>
)

Square.propTypes = {
  children: PropTypes.node
}

export default Square