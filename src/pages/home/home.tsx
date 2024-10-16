import React, { useRef } from 'react';
import { HeroParallax } from '../../components/hero-paralax/hero-paralax';
import { BackgroundBeams } from '../../components/beams/beams';
import ContactForm from '../../components/contactForm/form';
import Navbar from '../../components/navbar/navbar'; 

import AboutSection from '../../components/about/about';
import Footer from '../../components/Footer/footer';

import SkillsSection from '../../components/skills/skills';

// Hero images
import nanoDegree from '../../assets/image.png'
import platdImg from '../../assets/ProjectsAssets/PLatd/HomepagePLATD.png'
import legalFirmImg from '../../assets/ProjectsAssets/legalfirm/legalpageUI.png'

//scroll effects 
import { Fade } from 'react-awesome-reveal';
// testing hero paralax

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

const products:{title:string, link:string, thumbnail:string}[] = [{
  title: "Platd",
  link: "https://platd.io/",
  thumbnail: platdImg,
},
{
  title: "Legal Firm's website",
  link: "#",
  thumbnail: legalFirmImg,
},
{
  title: "Front End Web Development Course",
  link: "https://github.com/Michalis17",
  thumbnail: nanoDegree,
},]


  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 bg-my-black text-white relative">
      {/* navbar //! navbar needs some work */}
      <div className='w-full'>
        <Navbar aboutRef={aboutRef} contactRef={contactRef} scrollToSection={scrollToSection} />
      </div>
      <HeroParallax products={products}/>
      

      <main className="container mx-auto px-6 pt-40 relative flex flex-col gap-40 ">
        <BackgroundBeams />
        {/* about */}
        <section ref={aboutRef} className="flex justify-center">
          <Fade triggerOnce><AboutSection /></Fade>
          
        </section>
        {/* Skills */}
        <section>
          <Fade triggerOnce><SkillsSection /></Fade>
          
        </section>
        {/* Contact */}
        <section ref={contactRef} className='text-black z-50 relative'>
          <Fade triggerOnce ><ContactForm /></Fade>
          
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;



