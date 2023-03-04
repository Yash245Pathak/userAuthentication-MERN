import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='text-center d-flex justify-content-center flex-column'>
            <p className='h2'>
                Welcome to my Application!
            </p>
            <div className='d-flex justify-content-center mt-3'>
                <button className='btn btn-primary p-2 m-2'><Link to="/login" style={{color
                :"white", textDecoration:"none"}}>Login</Link></button>
                <button className='btn btn-primary p-2 m-2'><Link to="/register" style={{color
                    :"white", textDecoration:"none"}}>Register</Link></button>
            </div>
        </div>
    )
}
