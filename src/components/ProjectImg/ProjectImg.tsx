import React, { ReactNode } from 'react'

interface Props {
    img: ReactNode
}

const ProjectImg: React.FC<Props> = ({ img }) => {
    return (
        <div className='rounded-xl bg-my-blue-600 border-2 border-my-blue-900 p-6 aspect-square w-full'>
            {img}
        </div>
    )
}

export default ProjectImg