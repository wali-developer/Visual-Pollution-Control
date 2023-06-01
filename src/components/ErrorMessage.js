import React from 'react'

const ErrorMessage = ({ message }) => {
    return (

        <p className='text-[12px] py-1' style={{ color: "red" }}>{message}</p>

    )
}

export default ErrorMessage
