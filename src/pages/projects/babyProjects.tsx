import React from 'react'
import Footer from '../../components/Footer/footer'
import ImageSlider from '../../components/imageSlider/imageSlider'
import { Fade, Slide} from 'react-awesome-reveal'
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
    <div className=' bg-my-black text-white relative flex flex-col items-center '>
      {/* Back Link */}
      <div className='w-full flex items-end p-3 fixed bg-my-black'>
        <Link to={'/'} className='z-50 p-2 flex items-end justify-center text-white/35 hover:text-white/90   bg-my-blue-900/50 hover:bg-my-blue-900/100  rounded-2xl  text-center text-xl font-extrabold'><p className='aspect-square w-10 text-2xl'>{'<'}</p></Link>
      </div>
      {/* Container of all the content including slider  */}
      <div className='relative  flex flex-col justify-between gap-5 items-center mt-28 lg:mt-0'>
        {/* Heading with slide animation  */}
        <Slide direction='down' triggerOnce>
          <h1 className='text-4xl font-semibold text-center underline my-3'>Basic Travel planner app</h1>
        </Slide>
        {/* Image slider with slide animation */}
        <Slide direction='up' triggerOnce>
          <div className='md:h-[400px] bg-white/10 rounded-md flex justify-center p-6'>
            <ImageSlider imageUrls={travelImgs} />
          </div>
        </Slide>

        {/* Link to product or project view or demo */}
        <a href="https://platd.io/" className='w-fit hover:text-my-blue-400 border border-my-blue-900 p-3 rounded-md hover:bg-my-blue-900/40 '>View Product</a>



        <div className='flex flex-col gap-4 px-6 max-w-2xl'>
        <Fade triggerOnce>
        <h3 className='text-3xl'>Overview:</h3>
        <p>Travel Buddy was my capstone project for the Udacity Front-End Web Development Nanodegree. The application displays weather information for a user’s trip destination, along with a countdown timer and an image. It features a suggestive search bar that offers city suggestions as the user types and a date input field. Server responses are saved in local storage, ensuring data persists even when the user exits the app. This project involved dynamic DOM manipulation, creating routes to a backend server, integrating external APIs, and using Webpack for development and production builds.</p>
        <h3 className='text-3xl'>Challenge:</h3>
        <p>I faced challenges with creating the suggestive search bar, ensuring asynchronous code execution, and setting up production and development builds with Webpack. Configuring Webpack was particularly tough, especially getting the correct entry point file and ensuring CSS styles appeared in the production build. The suggestive search bar required breaking down complex tasks into manageable steps, which was challenging but more enjoyable than configuring Webpack.
          </p>
        <h3 className='text-3xl'>Approach</h3>
        <p>To handle Webpack configuration issues, I created three config files: one for production, one for development, and a common config file for shared elements. This modular approach made it easier to identify and fix issues. Through trial and error and extensive documentation review, I eventually achieved a working configuration. For difficult features, I isolated each into its own function within the main app's logic, ensuring clarity and maintainability.</p>
        <h3 className='text-3xl'>Results</h3>
        <p>I successfully completed and passed the Front-End Web Development course with this project. However, in hindsight, I feel there are areas for improvement, particularly in visual design, which I neglected due to my focus on functionality and Webpack configuration. Initially proud, I now see opportunities to enhance the project further.</p>
        </Fade>
        </div>
        <Slide direction='down' triggerOnce>
          <h1 className='text-4xl font-semibold text-center underline my-3'>basic article evaluator</h1>
        </Slide>
        {/* Image slider with slide animation */}
        <Slide direction='up' triggerOnce>
          <div className='md:h-[400px] bg-white/10 rounded-md flex justify-center p-6'>
            <ImageSlider imageUrls={articleImgs} />
          </div>
        </Slide>

        {/* Link to product or project view or demo */}
        <a href="https://platd.io/" className='w-fit hover:text-my-blue-400 border border-my-blue-900 p-3 rounded-md hover:bg-my-blue-900/40 '>View Product</a>



        <div className='flex flex-col gap-4 px-6 max-w-2xl'>
        <Fade triggerOnce>
        <h3 className='text-3xl'>Overview:</h3>
        <p>As part of my Front-End Web Development Nanodegree, I built a web application that uses the Sentiment Analysis API from MeaningCloud to analyze articles or blogs. Users input a URL, and the server determines whether the content is positive, neutral, or negative, highlighting the relevant parts. This project introduced me to Webpack for bundling code and Jest for unit testing.</p>
        <h3 className='text-3xl'>Challenge:</h3>
        <p>
        Integrating the API was straightforward, but creating a production build with Webpack and learning Jest for unit tests were challenging. Bundling CSS into the production build required the right packages and configurations. Learning Jest required adopting a new mindset for writing and structuring tests.
          </p>
        <h3 className='text-3xl'>Approach</h3>
        <p>
        I addressed Webpack configuration issues through extensive research and trial and error, ultimately creating a functional production build. For unit testing, I studied the Jest documentation and wrote tests for all possible use cases, improving my code quality and coding habits.
        </p>
        <h3 className='text-3xl'>Results</h3>
        <p>
        The result was a functional web application that met the project requirements. This project significantly expanded my web development knowledge and exposed me to essential tools used in real-world development. Completing it fuelled my desire to learn more and deepen my understanding of these tools.
        </p>
        </Fade>
        </div>

        {/* Footer */}
        <Footer />
      </div>
      </div>

  )
}

export default BabyProjectsPage