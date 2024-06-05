import React, { useEffect, useState } from 'react'
import Avatar from '../Avatar/Avatar'
import Link from '../Link/Link'
import LinkedinIcon from '../../assets/Icons/linkedin'
import GithubIcon from '../../assets/Icons/github'
import CvIcon from '../../assets/Icons/cv'
import { Transition } from '@headlessui/react';

interface Props {
    name: string,
    about: string,
    role: string,
}

const ProfileCard: React.FC<Props> = ({ name, about, role }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <Transition
            show={show}
            enter="transition-transform transition-opacity duration-[1500ms]"
            enterFrom="opacity-0 transform -translate-x-full"
            enterTo="opacity-100 transform translate-x-0"
        >
            <div className='rounded-2xl shadow-lg shadow-my-blue-700 flex flex-col gap-4 justify-stretch text-white  md:w-1/3 max-h-[700px] pb-3'>
                <Avatar/>
                <div className='w-full px-3 lg:px-6 flex flex-col justify-normal content-center gap-6  h-full '>
                    <div className='flex flex-col gap-4 items-center justify-center'>
                        <div className='flex flex-col gap-1 items-center'>
                            <h2 className='text-2xl font-semibold'>{name}</h2>
                            <p className='text-base font-medium'>{role}</p>
                        </div>
                        <p className='text-sm font-medium text-center'>{about}</p>
                    </div>

                    {/* links //TODO PUT DOWNLOADBLE CV */}
                    <div className=' flex flex-col gap-4 py-3'>
                        <Link icon={<GithubIcon size={25} />} label='Github' url='https://github.com/Michalis17' />
                        <Link icon={<LinkedinIcon size={25} />} label='LinkedIn' url='https://www.linkedin.com/in/michaelides17/' />
                        <Link icon={<CvIcon size={25}/>} label='CV' url='https://www.linkedin.com/in/michaelides17/' />
                         
                    </div>
                </div>
            </div>
        </Transition>
    )
}

export default ProfileCard