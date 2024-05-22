import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import Link from '../Link/Link'
import LinkedinIcon from '../../assets/Icons/linkedin'
import GithubIcon from '../../assets/Icons/github'
import { Transition } from '@headlessui/react';

const ProfileCard: React.FC = () => {
    const [show, setShow] = useState(false); // State to control the transition

    useEffect(() => {
        // Set show to true after component is mounted
        setShow(true);
    }, []);
    return (
        <Transition
        show={show}
        enter="transition-transform transition-opacity duration-1000"
        enterFrom="opacity-0 transform -translate-x-full"
        enterTo="opacity-100 transform translate-x-0"
        >
        <div className='rounded-2xl shadow-lg shadow-electric-violet-950 flex flex-col gap-4 justify-between text-white max-w-96 sm:min-w-80 md:w-1/3 h-full  '>
            {/* Profile Photo */}
        <Avatar imgFile='src\assets\Mike Web.jpg' />
            
            <div className='w-full px-3 lg:px-6 flex flex-col gap-4 mb-8'>
                {/* text content */}
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <div className='flex flex-col gap-1 items-center'>
                            <h2 className='text-2xl font-semibold'>Michalis Michaelides</h2>
                            <p className='text-base font-medium'>Junior Front-end developer</p>
                        </div>
                        <p className='text-sm font-medium text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A expedita inventore maxime non natus, corrupti est distinctio ipsam, dolore officia soluta culpa molestiae facere quibusdam quaerat, placeat sequi aliquam? Necessitatibus.</p>
                    </div>
                
                {/* links */}
                <Link icon={<LinkedinIcon size={25} />} label='LinkedIn' url='https://www.linkedin.com/in/michaelides17/' />
                <Link icon={<GithubIcon size={25} />} label='LinkedIn' url='https://github.com/Michalis17' />
                <Link icon={<GithubIcon size={25} />} label='LinkedIn' url='https://github.com/Michalis17' />
            </div>
        </div>
        </Transition>
    )
}

export default ProfileCard