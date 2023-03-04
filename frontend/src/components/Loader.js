import React from 'react'

export default function Loader() {
    return (
        <div>
            <div className="text-center m-2">
                <div className="spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}
