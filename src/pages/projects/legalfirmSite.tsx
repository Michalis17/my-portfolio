import React from 'react'
import Footer from '../../components/Footer/footer'
import ImageSlider from '../../components/imageSlider/imageSlider'
import { Slide, Fade } from 'react-awesome-reveal'


import { Link } from 'react-router-dom'
import pic1 from '../../assets/ProjectsAssets/legalfirm/legalpageUI.png'
const images = [pic1]

const SecondProject: React.FC = () => {
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
          <h1 className='text-4xl font-semibold text-center underline my-3'>Legal firms landing page.</h1>
        </Slide>
        {/* Image slider with slide animation */}
        <Slide direction='up' triggerOnce>
          <div className='md:h-[400px] bg-white/10 rounded-md flex justify-center p-6'>
            <ImageSlider imageUrls={images} />
          </div>
        </Slide>

        {/* Link to product or project view or demo */}
        <a href="https://platd.io/" className='hidden w-fit hover:text-my-blue-400 border border-my-blue-900 p-3 rounded-md hover:bg-my-blue-900/40 '>View Product</a>



      <div className='flex flex-col gap-4 p-6 max-w-2xl'>
        <Fade>
          <h2 className='text-3xl'>Overview:</h2>
          <p className='text-lg'>I was hired as a freelance front-end developer to implement Figma designs into React components for a law firm’s newly redesigned landing page. The project required transforming the static designs into a fully functional, responsive front-end using React and Tailwind CSS, while managing client expectations and ensuring a seamless handoff to their in-house development team.</p>

          <h2 className='text-3xl'>Challenge:</h2>
          <p>The client needed a quick turnaround for their landing page redesign, with a focus on reducing development costs. In addition, non-technical team members required the ability to update content on the site without needing to modify the code. This necessitated the integration of a headless CMS to streamline content management, while maintaining high code quality that met the firm’s development standards.</p>

          <h2 className='text-3xl'>Approach</h2>
          <p>I closely collaborated with the client’s in-house developers and stakeholders, managing communications to ensure that their vision was fully realized. I implemented the designs using React and Tailwind CSS, ensuring pixel-perfect accuracy from the Figma mockups. To address the content management challenge, I integrated Contentful as a headless CMS, allowing non-technical users to easily update the site’s content without needing coding skills. Throughout the project, I ensured timely delivery while maintaining the client’s cost-efficiency goals.</p>

          <h2 className='text-3xl'>Results</h2>
          <p>I successfully delivered the front-end components on time, meeting both the visual and technical standards required by the client. The law firm was able to seamlessly manage their landing page through Contentful, and their in-house developers were satisfied with the handoff and quality of the code. The client expressed high satisfaction with both the final product and my professionalism throughout the project.</p>
        </Fade>
      </div>
      <Footer />
      </div>
    </div>
  )
}

export default SecondProject