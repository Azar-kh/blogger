import React from 'react'
import { LineWave } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <LineWave
        height="150"
        width="150"
        ariaLabel="line-wave"
        visible={true}
        firstLineColor="#2196f3"
        middleLineColor="#1e88e5"
        lastLineColor="#1976d2"
      />
    </div>
  )
}

export default Loader
