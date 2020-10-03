// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

function Box({ className = '', style, ...otherProps }) {
  console.log(className)
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box className="box--small" style={{ backgroundColor: 'lightblue' }}>
    small lightblue box
  </Box>
)
const mediumBox = (
  <Box className="box--medium" style={{ backgroundColor: 'pink' }}>
    medium lightblue box
  </Box>
)
const largeBox = (
  <Box className="box--large" style={{ backgroundColor: 'orange' }}>
    large lightblue box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
