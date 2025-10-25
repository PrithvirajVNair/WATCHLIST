import React from 'react'

const PageNotFound = () => {
  return (
    <div className='background' style={{ minHeight: '100vh' }}>
      <div className='background-inner'>
        <div className='container-fluid'>
          <div className='d-flex flex-column justify-content-center align-items-center text-white' style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <img src="C:\Users\pals2\OneDrive\Desktop\MAL\my-anime-list\src\assets\404.png" alt="" />
            <h1 style={{fontSize:'100px'}}>404</h1>
            <p>Page Not Found</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound