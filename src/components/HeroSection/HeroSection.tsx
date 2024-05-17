import Basic from '../../components/tabs/basic'
import Avatar from '../../components/Avatar/Avatar'

import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <>
    <Avatar/>
    <div className='relative bottom-[170px] px-3 flex justify-center z-20'>
        <Basic />
        </div>
      </>
  )
}

export default HeroSection