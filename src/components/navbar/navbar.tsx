import React from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Link } from "react-router-dom";

interface NavbarProps {
  scrollToSection: (elementRef: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const  Navbar: React.FC<NavbarProps> = ({
  scrollToSection, aboutRef, contactRef
})=> {

  return (
    <div className="flex  w-full justify-center py-6 px-2 z-30">
      <div className="flex gap-3 sm:gap-8">
        <div
        onClick={() => scrollToSection(aboutRef)}
        className="text-sm/6 font-semibold text-white/50 cursor-pointer p-1 hover:text-white">About</div>
        <Popover className='p-1'>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white z-30">
            Projects
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="mx-3 divide-y divide-white/5 rounded-xl bg-my-blue-900/90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-80 z-30 mt-4"
          >
            <div className="p-3">
              <Link className="block rounded-lg py-2 px-3 transition hover:bg-white/20" to={'/platd'}>
                <p className="font-semibold text-white">Platd</p>
                <p className="text-white/50">A marketplace platform for digital cookbooks</p>
              </Link>
              <Link className="block rounded-lg py-2 px-3 transition hover:bg-white/20" to={''}>
                <p className="font-semibold text-white">Corporate Website</p>
                <p className="text-white/50">A website for a legal firm</p>
              </Link>
              <Link className="block rounded-lg py-2 px-3 transition hover:bg-white/20" to={'/baby-projects'}>
                <p className="font-semibold text-white">Baby projects</p>
                <p className="text-white/50">Pet projects part of my learning journey</p>
              </Link>
            </div>
          </PopoverPanel>
        </Popover>
        <div
        onClick={() => scrollToSection(contactRef)} 
        className="text-sm/6 font-semibold text-white/50 cursor-pointer p-1 hover:text-white">Contact Me</div> 
        
        <a className="rounded text-sm/6 font-semibold text-white/50 border border-white/25 p-1 hover:text-my-blue-500/50 hover:border-my-blue-500/50" href="src\assets\ProjectsAssets\My WebDev CV.pdf" download>Download CV</a>
      </div>
     
    </div>
  )
}
 export default Navbar





