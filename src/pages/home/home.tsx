import React from 'react';
import { Link } from 'react-router-dom';
import { BackgroundBeams } from '../../components/beams/beams';
import ContactForm from '../../components/contactForm/form';
import ExampleForm from '../../components/contactForm/headlessUIForm';
import Example from '../../components/navbar/navbar'; // fix this component

import { CardDemo } from '../../components/cards/projectCard';


const HomePage: React.FC = () => {
  // const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 bg-my-black text-white">
        <BackgroundBeams />
      <div className='w-full flex justify-center'>
      <Example/>
      </div>


      <header className=" text-white flex flex-col justify-center items-center pt-10">
            <img src="src\assets\Mike-removebg-preview.png" alt="" className='aspect-square w-48 sm:w-96 z-10 rounded-full'  />
        <div className=" w-full flex flex-col items-center justify-center p-6 relative z-20 bottom-36">
          <h1 className="text-4xl font-bold">Michalis Michaelides</h1>
          <p className="mt-2 text-xl">Frontend Developer</p>
          <p className='mt-2 text-xl'>Hi 👋, I'm a passionate developer currently learning NextJS. Striving to be the best web developer I can be.</p>
        </div>


      </header>
{/* projects */}
<section className='flex flex-row justify-evenly'>
<CardDemo/>
<CardDemo/>
</section>














      <main className="container mx-auto px-6 py-10">
        {/* Introduction */}
        <section className="mb-10">
        <div className='flex flex-col justify-between items-start h-[30rem]'>
          <h1 className='font-bold text-2xl p-3'>From Profesional Chef 👨🏼‍🍳<br/>to Front-End Web Developer👨🏼‍💻</h1>
            <p className=' text-lg p-3'>
            I'm a 25-year-old graduate with a BSc in Marketing and Management, transitioning to a career in web development. My career journey spans the culinary and marketing worlds, where I developed my communication, teamwork, and organisation skills. Throughout my journey as a student and chef, I would spend my free time learning how to write code since I enjoyed the problem-solving aspect of it. Soon enough, this passion for technology has made me commit to becoming a Front-End Web Developer, building websites and learning new technologies. 
            </p>
          
            <p className=' text-lg p-3 '>Beyond work, I enjoy pottery, dancing, and fitness. My journey is marked by continuous upskilling, with a clear goal of mastering front-end development.</p>
        </div>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li className="text-lg">HTML, CSS, JavaScript</li>
            <li className="text-lg">React, TypeScript</li>
            <li className="text-lg">TailwindCSS, Bootstrap</li>
            <li className="text-lg">Git, GitHub</li>
          </ul>
        </section>

      
       

        {/* Contact */}
        <section className='text-black'>
         <ContactForm/>
        </section>

<section>
<ExampleForm/>
</section>

      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Michalis Michaelides. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;



