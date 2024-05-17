import React from 'react'
import LinkedinIcon from '../../assets/Icons/linkedin'
import GithubIcon from '../../assets/Icons/github'
const WorkLinks: React.FC = () => {
  return (
    <div className='w-full flex flex-row  justify-between px-6 py-2'><LinkedinIcon size={24}/> <GithubIcon size={24}/></div>
  )
}

export default WorkLinks