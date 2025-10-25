import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className='background'>
            <div className='d-flex flex-column justify-content-center align-items-center text-white background-inner' style={{ height: '100vh' }}>
                <h1>🎬 Your Personal Watch List</h1>
                <div className='m-5'>
                    <div className='w-100 text-center'>
                        <Link to={'/add'}><Button variant="contained" sx={{ backgroundColor: "#6a6a6aff", marginRight: '10px' }}>Add to List</Button></Link>
                        <Link to={'/list'}><Button variant="contained" sx={{ backgroundColor: "#6a6a6aff" }}>My List</Button></Link>
                    </div>
                    <p className='text-center m-5 fs-3'>Welcome to Your WatchList!
                        Track, manage, and organize all your shows in one place.
                        Never lose track of what to watch next.</p>
                </div>
                <h2 className='text-decoration-underline'>You can easily</h2>
                <ul className='d-flex flex-column justify-content-center align-items-start fs-4'>
                    <li>Track all your shows in one place</li>
                    <li>Add new shows to your watchlist</li>
                    <li>Update show status (Planning, Watching, Completed, On-Hold, Dropped)</li>
                    <li>Rate shows you’ve completed</li>
                    <li>Keep a record of shows you’ve dropped</li>
                    <li>Resume paused shows anytime</li>
                </ul>
            </div>
        </div>
    )
}

export default Home