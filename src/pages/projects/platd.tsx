// TODO: CODE IMAGE SLIDER COMPONENT 
// TODO: ADD THAT COMPONENT TO ALL PROJECT PAGES 

import React from 'react'
import { Link } from 'react-router-dom'
import ImageSlider from '../../components/imageSlider/imageSlider'
import PlatdImg1 from '../../assets/ProjectsAssets/PLatd/platdIMG.png'
import PlatdImg2 from '../../assets/ProjectsAssets/PLatd/Platd-landing-page2.png'
import PlatdImg3 from '../../assets/ProjectsAssets/PLatd/Platd-landing-page3.png'
import PlatdImg4 from '../../assets/ProjectsAssets/PLatd/Platd-landing-page4.png'
import PlatdImg7 from '../../assets/ProjectsAssets/PLatd/Platd-signup.png'
import PlatdImg8 from '../../assets/ProjectsAssets/PLatd/Platd-signup2.png'
import PlatdImg9 from '../../assets/ProjectsAssets/PLatd/HomepagePLATD.png'
import PlatdImg10 from '../../assets/ProjectsAssets/PLatd/Sign up PLATD.png'
import Footer from '../../components/Footer/footer'
import { Fade, Slide } from 'react-awesome-reveal'


const Images = [
  PlatdImg9,
  PlatdImg10,
  PlatdImg1,
  PlatdImg2,
  PlatdImg3,
  PlatdImg4,
  PlatdImg7,
  PlatdImg8,
]


const PlatdPage: React.FC = () => {



  return (
    <div className=' bg-my-black text-white relative flex flex-col items-center '>
      {/* Back Link */}
      <div className='w-full flex items-end p-3 fixed bg-my-black'>
        <Link to={'/'} className='z-50 p-2 flex items-end justify-center text-white/35 hover:text-white/90   bg-my-blue-900/50 hover:bg-my-blue-900/100  rounded-2xl  text-center text-xl font-extrabold'><p className='aspect-square w-10 text-2xl'>{'<'}</p></Link>
      </div>
      {/* Container of all the content including slider  */}
      <div className='relative  flex flex-col justify-between gap-5 items-center mt-28 lg:mt-0'>
        {/* Heading with slide animation  */}
        <Slide direction='down' triggerOnce>
          <h1 className='text-4xl font-semibold text-center underline my-3'>Platd: cookbook marketplace and creator tool.</h1>
        </Slide>
        {/* Image slider with slide animation */}
        <Slide direction='up' triggerOnce>
          <div className='md:h-[400px] bg-white/10 rounded-md flex justify-center p-6'>
            <ImageSlider imageUrls={Images} />
          </div>
        </Slide>

        {/* Link to product or project view or demo */}
        <a href="https://platd.io/" className='w-fit hover:text-my-blue-400 border border-my-blue-900 p-3 rounded-md hover:bg-my-blue-900/40 '>View Product</a>



        <div className='flex flex-col gap-4 px-6 max-w-2xl'>
          <Fade>
            <h2 className='text-3xl'>Overview:</h2>
            <p className='text-lg'>I joined Platd, an early-stage startup, as a front-end developer. Platd is a marketplace platform that helps food content creators monetize their recipes by creating and selling digital cookbooks. My main responsibility was transforming Figma designs into functional front-end code using React and TypeScript, developing reusable UI components, login and signup flows, and the marketing landing page.</p>

            <h2 className='text-3xl'>Challenge:</h2>
            <p>The biggest challenge was creating components from scratch, as Headless UI didn’t offer a non-styled sidebar component. Making the landing page responsive while adhering to Figma design standards also posed significant hurdles.</p>

            <h2 className='text-3xl'>Approach</h2>
            <p>To tackle these challenges, I systematically broke down component behavior and conceptualized the implementation. I referred to documentation for technologies and libraries, researched best practices, and sought advice from the senior developer. For responsiveness issues, I used tools like ChatGPT for boilerplate code and debugging, though cautiously.</p>

            <h2 className='text-3xl'>Results</h2>
            <p>I successfully completed my deliverables, and the founders were satisfied with my work. My contributions were integral to a product that will be used by real users. This project significantly improved my front-end development skills and deepened my understanding of modern web development frameworks and libraries, leaving me eager to learn more.</p>
          </Fade>
        </div>

        {/* Footer */}
        <Footer />
      </div>

    </div>
  )
}

export default PlatdPage