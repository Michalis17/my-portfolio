import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard'

const PortfolioPage: React.FC = () => {
  return (
    <div className='p-3 sm:p-6 max-w-5xl '>
      <div className='flex flex-col md:flex-row gap-8'>
        <ProfileCard
        name='Michalis Michaelides' role='Junior Front-End Developer'
          about="Hi 👋, I'm a passionate TypeScript React developer based in London, UK. With a background in marketing, I discovered my passion for front-end development and am excited to build a career in it."  />
        <ProjectsCard />
      </div>
    </div>
  )
}

export default PortfolioPage

