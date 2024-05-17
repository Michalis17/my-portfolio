import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Footer from '../../components/Footer/Footer'
import WorkLinks from '../../components/Links/WorkLinks'
const PortfolioPage: React.FC = () => {
  return (
    <div className='grid grid-cols-1 grid-rows-10 h-screen'>
      {/* //! START WORKING ON STRUCTURE */}
      <div className='col-span-1 row-span-1'><WorkLinks/></div>
      <div className='col-span-1 row-span-5'><HeroSection/></div>
      <div className='col-span-1 row-start-10 row-end-11'><Footer/></div>
      
    </div>
  )
}

export default PortfolioPage