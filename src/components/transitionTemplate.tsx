import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';

const transition: React.FC = () => {
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

        </Transition>)
}


export default transition