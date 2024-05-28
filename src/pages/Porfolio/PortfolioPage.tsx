import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard'

const PortfolioPage: React.FC = () => {
  return (
    <div className='p-3 sm:p-6 max-w-7xl '>
      <div className='flex flex-col md:flex-row gap-8'>
        <ProfileCard
        name='Michalis Michaelides' role='Junior Front-End Developer'
          about="Hi 👋, I'm an aspiring TypeScript React developer who loves food and fitness. With a background in marketing, I discovered my passion for front-end development and am excited to build a career in it. Also I think pandas are really cute!"  />
        <ProjectsCard />
      </div>
    </div>
  )
}

export default PortfolioPage

