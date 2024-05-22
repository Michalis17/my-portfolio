import React from 'react'
interface Props {
    imgFile: string,
    name?: string
}

const ProjectImg: React.FC<Props> = ({ imgFile, name }) => {
    return (
        <div className='rounded-xl bg-electric-violet-950 p-6 aspect-square w-full'>
            <img src={imgFile} alt={name} className='rounded-xl' />
        </div>
    )
}

export default ProjectImg