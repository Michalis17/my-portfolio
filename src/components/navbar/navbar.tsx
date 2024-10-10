import React from "react";
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

interface NavbarProps {
  scrollToSection: (elementRef: React.RefObject<HTMLDivElement>) => void;
  aboutRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const  Navbar: React.FC<NavbarProps> = ({
  scrollToSection, aboutRef, contactRef
})=> {

  return (
    <div className="flex  w-full justify-center pt-20 z-30">
      <div className="flex gap-8">
        <div
        onClick={() => scrollToSection(aboutRef)}
        className="text-sm/6 font-semibold text-white/50">About</div>
        <Popover>
          <PopoverButton className="block text-sm/6 font-semibold text-white/50 focus:outline-none data-[active]:text-white data-[hover]:text-white data-[focus]:outline-1 data-[focus]:outline-white z-30">
            Projects
          </PopoverButton>
          <PopoverPanel
            transition
            anchor="bottom"
            className="divide-y divide-white/5 rounded-xl bg-blue-600/90 text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-80 z-30 mt-4"
          >
            <div className="p-3">
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/20" href="#">
                <p className="font-semibold text-white">Platd</p>
                <p className="text-white/50">A marketplace platform for digital cookbooks</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/20" href="#">
                <p className="font-semibold text-white">Corporate Website</p>
                <p className="text-white/50">A website for a legal firm</p>
              </a>
              <a className="block rounded-lg py-2 px-3 transition hover:bg-white/20" href="#">
                <p className="font-semibold text-white">Baby projects</p>
                <p className="text-white/50">Pet projects part of my learning journey</p>
              </a>
            </div>
          </PopoverPanel>
        </Popover>
        <div
        onClick={() => scrollToSection(contactRef)} 
        className="text-sm/6 font-semibold text-white/50">Contact Me</div>
      </div>
    </div>
  )
}
 export default Navbar





