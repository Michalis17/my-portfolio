import React from 'react'

interface Props{
    imgFile: string
}

const Avatar: React.FC<Props> = ({imgFile}) => {
    return (
        <div className='bg-electric-violet-400 w-full flex justify-center rounded-t-2xl mb-20'>
        <img
            src={imgFile}
            alt="Profile Photo"
            className='border rounded-full aspect-square w-40 object-cover relative top-1/2'
        />
        </div>
    )
}

export default Avatar