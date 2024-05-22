import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
// for testing
import ProjectImg from '../../components/ProjectImg/ProjectImg'

// grid grid-cols-1 grid-rows-10
const PortfolioPage: React.FC = () => {
  return (
    <div className='max-w-6xl h-full flex flex-row gap-12 items-center md:p-16'>
      <ProfileCard/>
      <div className='border border-electric-violet-500 md:w-2/3 h-full'>
        <ProjectImg imgFile='src\assets\mikedesign.jpg' />
      </div>
    </div>
  )
}

export default PortfolioPage

