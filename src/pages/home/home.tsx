import React, { useRef } from 'react';
import { BackgroundBeams } from '../../components/beams/beams';
import ContactForm from '../../components/contactForm/form';
import Navbar from '../../components/navbar/navbar'; // fix this component

import AboutSection from '../../components/about/about';
import Footer from '../../components/Footer/footer';

import SkillsSection from '../../components/skills/skills';

// testing hero paralax
import { HeroParallax } from '../../components/hero-paralax/hero-paralax';

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
  title: "Moonbeam",
  link: "https://gomoonbeam.com",
  thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
},
{
  title: "Cursor",
  link: "https://cursor.so",
  thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/cursor.png",
},
{
  title: "Rogue",
  link: "https://userogue.com",
  thumbnail:
    "https://aceternity.com/images/products/thumbnails/new/rogue.png",
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
        <section ref={aboutRef} className="">
          <AboutSection />
        </section>
        {/* Skills */}
        <section className="">
          <SkillsSection />
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



