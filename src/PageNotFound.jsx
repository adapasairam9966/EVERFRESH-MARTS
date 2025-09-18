import React from 'react'
function PageNotFound() {
  return (
    <>
    <div className="container-fluid my-3 d-flex flex-column align-items-center">
      <h1 className='text-danger'>Page Not Found</h1>
      <h3 className='text-muted'>Requested page does not exist.....</h3>
      <img src="/public/404.png" alt="404" height={500} width={900} className='rounded-4' />
    </div>
    </>
  )
}

export default PageNotFound
