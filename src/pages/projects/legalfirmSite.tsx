import React from 'react'
import Footer from '../../components/Footer/footer'
import ImageSlider from '../../components/imageSlider/imageSlider'
import { Slide, Fade } from 'react-awesome-reveal'


import { Link } from 'react-router-dom'
import pic1 from '../../assets/ProjectsAssets/legalfirm/legalpageUI.png'
const images = [pic1]

const SecondProject: React.FC = () => {
  return (

  
    
        <div className='min-h-screen bg-gray-100 text-gray-800 bg-my-black text-white relative flex flex-col items-center'>

<div className='flex items-end w-full p-3 fixed '><Link to={'/'} className='p-3 bg-slate-500/5 hover:bg-my-blue-300/20  rounded-2xl w-14 text-center text-xl font-extrabold'>{'<'}</Link></div>
<Slide direction='down' triggerOnce>
<h1 className='text-4xl font-semibold text-center underline my-3'>Legal Firm's Landing Page</h1></Slide>
<Slide direction='up' triggerOnce>
  <div className='md:h-[400px] bg-white/10 rounded-md flex justify-center p-6'>

    <ImageSlider imageUrls={images} />

  </div>
</Slide>
<a href="https://platd.io/" className='hover:text-my-blue-400 border border-my-blue-900 p-3 rounded-md hover:bg-my-blue-900/40 mt-2'>View Product</a>

<div className='flex flex-col gap-4 px-6 max-w-2xl'>
  <Fade>
<h2 className='text-3xl'>Overview:</h2>
<p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, eum at eius sint, quaerat ad, repellat cum dolores iusto sit dolore natus saepe? Ab harum doloribus obcaecati animi! Officia, aperiam..</p>

<h2 className='text-3xl'>Challenge:</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum excepturi quod incidunt neque ex nisi animi, debitis, voluptates blanditiis recusandae hic impedit? Accusamus mollitia quaerat provident nisi praesentium, consequatur amet.</p>

<h2 className='text-3xl'>Approach</h2>
<p>To tackle these challenges, I systematically broke down component behavior and conceptualized the implementation. I referred to documentation for technologies and libraries, researched best practices, and sought advice from the senior developer. For responsiveness issues, I used tools like ChatGPT for boilerplate code and debugging, though cautiously.</p>

<h2 className='text-3xl'>Results</h2>
<p>I successfully completed my deliverables, and the founders were satisfied with my work. My contributions were integral to a product that will be used by real users. This project significantly improved my front-end development skills and deepened my understanding of modern web development frameworks and libraries, leaving me eager to learn more.</p></Fade>
</div>
<Footer />
</div>
  )
}

export default SecondProject