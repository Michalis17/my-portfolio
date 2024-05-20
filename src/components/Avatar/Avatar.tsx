import React from 'react'

interface Props{
    imgFile: string
}

const Avatar: React.FC<Props> = ({imgFile}) => {
    return (
        <img
            src={imgFile}
            alt="Profile Photo"
            className='border rounded-full aspect-square w-40 object-cover'
        />
    )
}

export default Avatar