import React from 'react'
import { HashLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div className='max-container relative flex items-center justify-center'>
        <HashLoader color="#36d7b7" />
    </div>
  )
}

export default Loader