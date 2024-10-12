import React from 'react'
import Footer from '../../components/Footer/footer'
import ImageSlider from '../../components/imageSlider/imageSlider'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

// images
import travelAppImg1 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img2.png'
import travelAppImg2 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img3.png'
import travelAppImg3 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img5.png'

import weatherAppImg1 from '../../assets/ProjectsAssets/WeatherJournal/weather-app-img.png'
import weatherAppImg2 from '../../assets/ProjectsAssets/WeatherJournal/weather-app-img4.png'

import articleAppImg1 from '../../assets/ProjectsAssets/ArticleApp/article-app-img.png'
import articleAppImg2 from '../../assets/ProjectsAssets/ArticleApp/article-app-img2.png'
import articleAppImg3 from '../../assets/ProjectsAssets/ArticleApp/article-app-img3.png'



const travelImgs = [travelAppImg1, travelAppImg2, travelAppImg3];
const weatherImgs = [weatherAppImg1, weatherAppImg2];
const articleImgs = [articleAppImg1, articleAppImg2, articleAppImg3];



const BabyProjectsPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 bg-my-black text-white relative flex flex-col items-center'>

      <div className='flex items-end w-full p-3'><Link to={'/'} className='p-3 bg-slate-500/5 rounded-2xl w-14 text-center '>{'<'}</Link></div>

      <h1 className='text-4xl'>Baby Projects: Building my foundations.</h1>
      <Fade>
        <div className='h-[500px]  flex justify-center p-6'>

          <ImageSlider imageUrls={travelImgs} />

        </div>
      </Fade>
      

      <div className='flex flex-col px-6'>
      <h2>Overview:</h2>
      <p></p>
<h2>Challenge:</h2>
      <p></p>
<h2>Approach</h2>
      <p></p>
<h2>Results</h2>
      <p></p>
      </div>
      <Fade>
        <div className='h-[500px]  flex justify-center p-6'>

          <ImageSlider imageUrls={weatherImgs} />

        </div>
      </Fade>
    

      <div className='flex flex-col px-6'>
      <h2>Overview:</h2>
      <p></p>
<h2>Challenge:</h2>
      <p></p>
<h2>Approach</h2>
      <p></p>
<h2>Results</h2>
      <p></p>
      </div>
      <Fade>
        <div className='h-[500px]  flex justify-center p-6'>

          <ImageSlider imageUrls={articleImgs} />

        </div>
      </Fade>
     

      <div className='flex flex-col px-6'>
      <h2>Overview:</h2>
      <p></p>
<h2>Challenge:</h2>
      <p></p>
<h2>Approach</h2>
      <p></p>
<h2>Results</h2>
      <p></p>
      </div>
      <Footer />
    </div>
  )
}

export default BabyProjectsPage