import React from 'react'

export default function Home() {
    const info = localStorage.getItem('userInfo')
    return (
        <div className='text-center d-flex justify-content-center flex-column'>
            <p className='h2'>
                Welcome to my Application!
            </p>
        </div>
    )
}
