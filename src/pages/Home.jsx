import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
  return (
        <div className='background'>
            <div className='d-flex flex-column justify-content-center align-items-center text-white background-inner' style={{height:'100vh'}}>
                <h1>🎬 Your Personal Watch List</h1>
                <div className='m-5'>
                    <div className='w-100 text-center'>
                        <Link to={'/add'}><Button variant="contained" sx={{ backgroundColor: "#6a6a6aff", marginRight:'10px' }}>Add to List</Button></Link>
                        <Link to={'/list'}><Button variant="contained" sx={{ backgroundColor: "#6a6a6aff" }}>My List</Button></Link>
                    </div>
                    <p className='text-center m-5 fs-3'>The Watch List helps you keep track of all the anime or shows you’re watching, have completed, or plan to watch in the future</p>
                </div>
                <h2 className='text-decoration-underline'>You can easily</h2>
                <ul>
                    <li>⭐ Add anime or shows directly from the main catalog.</li>
                    <li>🕓 Plan ahead by adding upcoming or trending shows you want to watch later.</li>
                </ul>
            </div>
        </div>
  )
}

export default Home