import React, { ReactNode } from 'react'
import ProjectImg from '../ProjectImg/ProjectImg'

interface Props {
    title: string,
    length: string,
    company: string,
    role: string,
    link?: string,
    linkName?: string
    tools: ReactNode, //tech stack icons
    overview: string,
    challenge: string,
    contribution: string,
    result: string,
    projectImg: ReactNode
}

const ProjectPanel: React.FC<Props> = (
    {
        title,
        length,
        company,
        role,
        link,
        linkName,
        tools,
        overview,
        challenge,
        contribution,
        result,
        projectImg
    }
) => {

    return (
        <div className='px-2'>
            <div className="flex flex-col sm:flex-row gap-6">
                {/* tittle and other text content  */}
                <div className="sm:w-1/2 flex flex-col gap-6">
                    <h1 className="font-semibold text-3xl w-full">{title}</h1>
                    <div className="flex flex-row flex-wrap gap-6">
                        <div className="flex flex-col gap-1 w-fit">
                            <p className="text-gray font-semibold">TOOLS</p>
                            {tools}
                        </div>
                        <div className="flex flex-col gap-1 w-fit">
                            <p className="text-gray font-semibold">LENGTH</p>
                            <p className="font-medium">{length}</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-6">

                        <div className="flex flex-col gap-1 w-fit">
                            <p className="text-gray font-semibold">COMPANY</p>
                            <p className="font-medium">{company}</p>
                        </div>

                        <div className="flex flex-col gap-1 w-fit">
                            <p className="text-gray font-semibold">ROLE</p>
                            <p className="font-medium">{role}</p>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-6">
                        <div className="flex flex-col gap-1 w-fit">
                            <p className="text-gray font-semibold">View Project</p>
                            <a href={link} target='_blank' className="font-medium hover:underline">{linkName}</a>
                        </div>
                    </div>
                </div>
                {/* img */}
                <div className="sm:w-1/2"><ProjectImg img={projectImg} /></div>
            </div>
            {/* Main text content */}
            <div className='pt-6 pb-2 flex flex-col gap-5'>
                <div>
                    <h2 className="font-semibold text-xl pb-2">Overview</h2>
                    <p className="font-normal text-base">{overview}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-xl pb-2">Challenge</h2>
                    <p className="font-normal text-base">{challenge}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-xl pb-2">My Contribution/Approach</h2>
                    <p className="font-normal text-base">{contribution}</p>
                </div>
                <div>
                    <h2 className="font-semibold text-xl pb-2">Result</h2>
                    <p className="font-normal text-base">{result}</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectPanel