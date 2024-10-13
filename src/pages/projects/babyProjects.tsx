import React from 'react'
import Footer from '../../components/Footer/footer'
import ImageSlider from '../../components/imageSlider/imageSlider'
import { Fade } from 'react-awesome-reveal'
import { Link } from 'react-router-dom'

// images
import travelAppImg1 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img2.png'
import travelAppImg2 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img3.png'
import travelAppImg3 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img5.png'

import articleAppImg1 from '../../assets/ProjectsAssets/ArticleApp/article-app-img.png'
import articleAppImg2 from '../../assets/ProjectsAssets/ArticleApp/article-app-img2.png'
import articleAppImg3 from '../../assets/ProjectsAssets/ArticleApp/article-app-img3.png'



const travelImgs = [travelAppImg1, travelAppImg2, travelAppImg3];
const articleImgs = [articleAppImg1, articleAppImg2, articleAppImg3];


// !must fix text style and layout


const BabyProjectsPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-gray-100 text-gray-800 bg-my-black text-white relative flex flex-col items-center'>

      <div className='flex items-end w-full p-3'><Link to={'/'} className='p-3 bg-slate-500/5 rounded-2xl w-14 text-center '>{'<'}</Link></div>

      <h1 className='text-4xl'>Baby Projects: Building my foundations.</h1>
      <h2>Basic Travel planner app</h2>
      <Fade>
        <div className='h-[500px]  flex justify-center p-6'>

          <ImageSlider imageUrls={travelImgs} />

        </div>
      </Fade>


      <div className='flex flex-col px-6 max-w-2xl'>
        <Fade triggerOnce>
        <h3>Overview:</h3>
        <p>Travel Buddy was my capstone project for the Udacity Front-End Web Development Nanodegree. The application displays weather information for a user’s trip destination, along with a countdown timer and an image. It features a suggestive search bar that offers city suggestions as the user types and a date input field. Server responses are saved in local storage, ensuring data persists even when the user exits the app. This project involved dynamic DOM manipulation, creating routes to a backend server, integrating external APIs, and using Webpack for development and production builds.</p>
        <h3>Challenge:</h3>
        <p>I faced challenges with creating the suggestive search bar, ensuring asynchronous code execution, and setting up production and development builds with Webpack. Configuring Webpack was particularly tough, especially getting the correct entry point file and ensuring CSS styles appeared in the production build. The suggestive search bar required breaking down complex tasks into manageable steps, which was challenging but more enjoyable than configuring Webpack.
          </p>
        <h3>Approach</h3>
        <p>To handle Webpack configuration issues, I created three config files: one for production, one for development, and a common config file for shared elements. This modular approach made it easier to identify and fix issues. Through trial and error and extensive documentation review, I eventually achieved a working configuration. For difficult features, I isolated each into its own function within the main app's logic, ensuring clarity and maintainability.</p>
        <h3>Results</h3>
        <p>I successfully completed and passed the Front-End Web Development course with this project. However, in hindsight, I feel there are areas for improvement, particularly in visual design, which I neglected due to my focus on functionality and Webpack configuration. Initially proud, I now see opportunities to enhance the project further.</p>
        </Fade>
      </div>

      <h2>basic article evaluator</h2>
      <Fade>
        <div className='h-[500px]  flex justify-center p-6'>

          <ImageSlider imageUrls={articleImgs} />

        </div>
      </Fade>


      <div className='flex flex-col px-6 max-w-2xl'>
        <Fade triggerOnce>
        <h3>Overview:</h3>
        <p>As part of my Front-End Web Development Nanodegree, I built a web application that uses the Sentiment Analysis API from MeaningCloud to analyze articles or blogs. Users input a URL, and the server determines whether the content is positive, neutral, or negative, highlighting the relevant parts. This project introduced me to Webpack for bundling code and Jest for unit testing.</p>
        <h3>Challenge:</h3>
        <p>Integrating the API was straightforward, but creating a production build with Webpack and learning Jest for unit tests were challenging. Bundling CSS into the production build required the right packages and configurations. Learning Jest required adopting a new mindset for writing and structuring tests.</p>
        <h3>Approach</h3>
        <p>I addressed Webpack configuration issues through extensive research and trial and error, ultimately creating a functional production build. For unit testing, I studied the Jest documentation and wrote tests for all possible use cases, improving my code quality and coding habits.</p>
        <h3>Results</h3>
        <p>The result was a functional web application that met the project requirements. This project significantly expanded my web development knowledge and exposed me to essential tools used in real-world development. Completing it fuelled my desire to learn more and deepen my understanding of these tools.</p>
        </Fade>
      </div>
      <Footer />
    </div>
  )
}

export default BabyProjectsPage