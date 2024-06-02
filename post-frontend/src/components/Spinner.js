import React from 'react'
import loading from "../assets/loading.gif"
const Spinner=()=> {
    return (
      <div className='text-center'>
        <img className='my-3' src={loading} style={{borderRadius:"30px"}} alt="loading" />
      </div>
    )
}

export default Spinner
