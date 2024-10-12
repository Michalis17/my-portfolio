import React from 'react'
import GithubIcon from '../../assets/Icons/github'
import LinkedinIcon from '../../assets/Icons/linkedin'
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white/20 py-4 pt-36">
      <div className='flex items-center w-full justify-center gap-3 pb-2'><a href="https://github.com/Michalis17"><GithubIcon size={25} /></a>
        <a href="https://www.linkedin.com/in/michaelides17/"><LinkedinIcon size={30} /></a></div>

      <div className="container mx-auto px-6 text-center">
        <p>&copy; 2024 Michalis Michaelides. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer