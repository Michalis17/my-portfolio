import React, { useRef } from 'react';
import { BackgroundBeams } from '../../components/beams/beams';
import ContactForm from '../../components/contactForm/form';
import Navbar from '../../components/navbar/navbar'; // fix this component

import CardDemo from '../../components/cards/projectCard';// fix this component
import Footer from '../../components/Footer/footer';

// icons
import JsIcon from '../../assets/Icons/js';
import HtmlIcon from '../../assets/Icons/html';
import ReactIcon from '../../assets/Icons/react';
import CssIcon from '../../assets/Icons/css';
import TailwindIcon from '../../assets/Icons/tailwind';
import TsIcon from '../../assets/Icons/ts';
import GitIcon from '../../assets/Icons/git';
import NextIcon from '../../assets/Icons/next';
import BootstrapIcon from '../../assets/Icons/bootstrap';

const HomePage: React.FC = () => {
  // Creating refs for sections
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);
  // Function to handle smooth scrolling
  const scrollToSection = (elementRef: React.RefObject<HTMLDivElement>) => {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 bg-my-black text-white">
      {/* navbar //! navbar needs some work */}
      <div className='w-full flex justify-center'>
        <Navbar aboutRef={aboutRef} contactRef={contactRef} scrollToSection={scrollToSection} />
      </div>
      {/* hero section with hero text and img */}
      <header className=" text-white flex flex-col justify-center items-center pt-10 container mx-auto px-6 ">
        <img src="src\assets\Mike-removebg-preview.png" alt="" className='aspect-square w-96 z-10 rounded-full' />
        <div className="flex flex-col items-center justify-center p-6 relative z-20 bottom-24 sm:w-3/4 ">
          <h1 className="text-4xl font-bold">Michalis Michaelides</h1>
          <p className="mt-2 text-xl">Frontend Developer</p>
          <p className='mt-2 text-xl text-center'>Hi 👋, I'm a passionate developer currently learning NextJS. Striving to be the best web developer I can be.</p>
        </div>
      </header>

<main className="container mx-auto px-6 py-5 relative">
<BackgroundBeams />



      {/* projects cards section */}
      <section className='flex flex-col justify-center items-center gap-8'>
        <h2>Projects</h2>
        <div className='flex flex-row justify-evenly gap-5'>
        <CardDemo />
        <CardDemo />
        </div>
      </section>

{/* //! sections here and below need a lot of work */}

        {/* about */}
        <section ref={aboutRef} className="mb-10">
          <div className='flex flex-col justify-between items-start h-[30rem]'>
            <h1 className='font-bold text-2xl p-3'>From Profesional Chef 👨🏼‍🍳<br />to Front-End Web Developer👨🏼‍💻</h1>
            <p className=' text-lg p-3'>
              I'm a 25-year-old graduate with a BSc in Marketing and Management, transitioning to a career in web development. My career journey spans the culinary and marketing worlds, where I developed my communication, teamwork, and organisation skills. Throughout my journey as a student and chef, I would spend my free time learning how to write code since I enjoyed the problem-solving aspect of it. Soon enough, this passion for technology has made me commit to becoming a Front-End Web Developer, building websites and learning new technologies.
            </p>
            <p className=' text-lg p-3 '>Beyond work, I enjoy pottery, dancing, and fitness. My journey is marked by continuous growth mindset, with a clear goal of mastering front-end development.</p>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">My Skillset</h2>
          <HtmlIcon size={50}/><CssIcon size={50}/><JsIcon size={50}/><ReactIcon size={50}/> <TailwindIcon size={50}/><GitIcon size={50} /> <TsIcon size={50}/><BootstrapIcon size={50}/> <NextIcon size={50}/>
          <ul className="list-disc list-inside">
            <li className="text-lg">HTML, CSS, JavaScript</li>
            <li className="text-lg">React, TypeScript</li>
            <li className="text-lg">TailwindCSS, Bootstrap</li>
            <li className="text-lg">Git, GitHub</li>
          </ul>
        </section>

        {/* Contact */}
        <section ref={contactRef} className='text-black z-50 relative'>
          <ContactForm />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default HomePage;



