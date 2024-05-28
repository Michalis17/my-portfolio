import React from 'react'

interface Props{
    imgFile: string
}

const Avatar: React.FC<Props> = ({imgFile}) => {
    return (
        <div className='bg-my-blue-600 w-full flex justify-center rounded-t-2xl mb-20'>
        <img
            src={imgFile}
            alt="Profile Photo"
            className='border-2 border-my-blue-800  rounded-full aspect-square w-40 object-cover relative top-20'
        />
        </div>
    )
}

export default Avatar