import React from 'react'
const Footer = () => {
  return (
   <>
      <footer className='py-4 fixed-bottom'>
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="flex mb-0 text-white" style={{display:"flex",justifyContent:"end"}} >CopyRight &copy;{new Date().getFullYear()} Developer's | All Right Reserved</p>
            </div>
          </div>
        </div>
      </footer>
   </>
  )
}

export default Footer
