import React, { useEffect, useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels, Transition } from '@headlessui/react'
import HtmlIcon from '../../assets/Icons/html';
import CssIcon from '../../assets/Icons/css';
import JsIcon from '../../assets/Icons/js';
import WebpackIcon from '../../assets/Icons/webpack';
import ReactIcon from '../../assets/Icons/react';
import TailwindIcon from '../../assets/Icons/tailwind';
import TsIcon from '../../assets/Icons/ts';
import ProjectPanel from '../ProjectPanel/ProjectPanel';
import AboutMe from '../AboutMe/AboutMe';
// Image Imports go here:

// Platd imgage imports
import PlatdLandning1 from '../../assets/ProjectsAssets/PLatd/platdIMG.png'
import PlatdLandning2 from '../../assets/ProjectsAssets/PLatd/Platd-landing-page2.png'
import PlatdLandning3 from '../../assets/ProjectsAssets/PLatd/Platd-landing-page3.png'
import PlatdLandning4 from '../../assets/ProjectsAssets/PLatd/Platd-landing-page4.png'
import PlatdComIMG1 from '../../assets/ProjectsAssets/PLatd/Platd-component.png'
import PlatdComIMG2 from '../../assets/ProjectsAssets/PLatd/Platd-component2.png'
import PlatdLoginIMG from '../../assets/ProjectsAssets/PLatd/Platd-login.png'
import PlatdSignupIMG from '../../assets/ProjectsAssets/PLatd/Platd-signup.png'
import PlatdSignupIMG2 from '../../assets/ProjectsAssets/PLatd/Platd-signup2.png'
// import platdgif from '../../assets/ProjectsAssets/PLatd/PLatd-Landing-GIF.gif'
// travel buddy image imports
import TravelIMG from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img2.png'
import TravelIMG2 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img3.png'
import TravelIMG3 from '../../assets/ProjectsAssets/TravelApp/travel-buddy-img5.png'
// Article app imgages
import ArticleAppIMG from '../../assets/ProjectsAssets/ArticleApp/article-app-img.png'
import ArticleAppIMG2 from '../../assets/ProjectsAssets/ArticleApp/article-app-img2.png'
import ArticleAppIMG3 from '../../assets/ProjectsAssets/ArticleApp/article-app-img3.png'
// weather app
import weatherIMG from '../../assets/ProjectsAssets/WeatherJournal/weather-app-img.png'
import weatherIMG2 from '../../assets/ProjectsAssets/WeatherJournal/weather-app-img4.png'
const ProjectsCard: React.FC = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  // array of Images for each project
  const platdIMGs = [
    <img src={PlatdLandning1} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning2} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning3} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning4} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdComIMG1} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdComIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLoginIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdSignupIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdSignupIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
    // <img src={platdgif} alt='weather' className='rounded-xl h-full object-cover' />,
  ]
  const travelIMGs = [
    <img src={TravelIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={TravelIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={TravelIMG3} alt='weather' className='rounded-xl h-full object-cover' />,
    
  ]
  const articleIMGs = [
    <img src={ArticleAppIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={ArticleAppIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={ArticleAppIMG3} alt='weather' className='rounded-xl h-full object-cover' />,
  ]
  const weatherIMGs = [
    <img src={weatherIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={weatherIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
  ]
  return (
    <Transition
      show={show}
      enter="transition-transform transition-opacity duration-[1500ms]"
      enterFrom="opacity-0 transform translate-x-full"
      enterTo="opacity-100 transform translate-x-0"
    >
      <div className=" md:w-2/3 h-[700px] overflow-y-scroll overflow-x-hidden border border-my-blue-900 shadow-md shadow-my-blue-700 pt-3 sm:px-6 sm:pt-6 rounded-2xl">

        <TabGroup className='text-white z-10'>
          {/* Tab buttons container */}
          <TabList className='w-full border-b border-my-blue-900 rounded-sm text-gray text-sm font-semibold'>

            <Tab className='focus:outline-none data-[selected]:border-b-2 data-[selected]:border-my-blue-600 data-[selected]:text-white rounded-b-sm mx-4 py-3'>
              About Me
            </Tab>
            <Tab className='focus:outline-none data-[selected]:border-b-2 data-[selected]:border-my-blue-600 data-[selected]:text-white rounded-b-sm mx-4 py-3'>
              Project 1
            </Tab>

            <Tab className='focus:outline-none data-[selected]:border-b-2 data-[selected]:border-my-blue-600 rounded-b-sm data-[selected]:text-white mx-4 py-3'>
              Project 2
            </Tab>

            <Tab className='focus:outline-none data-[selected]:border-b-2 data-[selected]:border-my-blue-600 rounded-b-sm data-[selected]:text-white mx-4 py-3'>
              Project 3
            </Tab>

            <Tab className='focus:outline-none data-[selected]:border-b-2 data-[selected]:border-my-blue-600 rounded-b-sm data-[selected]:text-white mx-4 py-3'>
              Project 4
            </Tab>

          </TabList>
          {/* Tab content container */}
          <TabPanels className='pt-8 '>
            {/* About Me */}
            <TabPanel>
              <AboutMe/>
            </TabPanel>
            {/* Project 1  */}
            <TabPanel>
              <ProjectPanel
                title='Platd: marketplace for digital cookbooks'
                images={platdIMGs}
                tools={<div className='flex gap-1'><ReactIcon size={30} /><TailwindIcon size={30} /><TsIcon size={30} /></div>}
                length='6 months'
                company='Platd'
                role='Front-End Developer'
                link='https://platd.io/'
                linkName='Platd.io'
                overview='I joined Platd, an early-stage startup, as a front-end developer. Platd is a marketplace platform that helps food content creators monetize their recipes by creating and selling digital cookbooks. My main responsibility was transforming Figma designs into functional front-end code using React and TypeScript, developing reusable UI components, login and signup flows, and the marketing landing page.'
                challenge='The biggest challenge was creating components from scratch, as Headless UI didn’t offer a non-styled sidebar component. Making the landing page responsive while adhering to Figma design standards also posed significant hurdles.'
                contribution='To tackle these challenges, I systematically broke down component behavior and conceptualized the implementation. I referred to documentation for technologies and libraries, researched best practices, and sought advice from the senior developer. For responsiveness issues, I used tools like ChatGPT for boilerplate code and debugging, though cautiously.'
                result='I successfully completed my deliverables, and the founders were satisfied with my work. My contributions were integral to a product that will be used by real users. This project significantly improved my front-end development skills and deepened my understanding of modern web development frameworks and libraries, leaving me eager to learn more.'

              />
            </TabPanel>

            {/* Project 2 */}
            <TabPanel className='' >
              <ProjectPanel
                title='Travel planner Web app'
                tools={<div className='flex gap-1'><HtmlIcon size={30} /><CssIcon size={30} /><JsIcon size={30} /><WebpackIcon size={30} /></div>}
                length='4 weeks'
                company='Udacity'
                role='Course assignment'
                images={travelIMGs}
                link='https://github.com/Michalis17/Travel-Buddy-WebApp'
                linkName='Github link'
                overview='Travel Buddy was my capstone project for the Udacity Front-End Web Development Nanodegree. The application displays weather information for a user’s trip destination, along with a countdown timer and an image. It features a suggestive search bar that offers city suggestions as the user types and a date input field. Server responses are saved in local storage, ensuring data persists even when the user exits the app. This project involved dynamic DOM manipulation, creating routes to a backend server, integrating external APIs, and using Webpack for development and production builds.'
                challenge='I faced challenges with creating the suggestive search bar, ensuring asynchronous code execution, and setting up production and development builds with Webpack. Configuring Webpack was particularly tough, especially getting the correct entry point file and ensuring CSS styles appeared in the production build. The suggestive search bar required breaking down complex tasks into manageable steps, which was challenging but more enjoyable than configuring Webpack.'
                contribution="To handle Webpack configuration issues, I created three config files: one for production, one for development, and a common config file for shared elements. This modular approach made it easier to identify and fix issues. Through trial and error and extensive documentation review, I eventually achieved a working configuration. For difficult features, I isolated each into its own function within the main app's logic, ensuring clarity and maintainability."
                result="I successfully completed and passed the Front-End Web Development course with this project. However, in hindsight, I feel there are areas for improvement, particularly in visual design, which I neglected due to my focus on functionality and Webpack configuration. Initially proud, I now see opportunities to enhance the project further."
              />
            </TabPanel>

            {/* project 3*/}
            <TabPanel className=''>
              <ProjectPanel
                title='Article Analyzer Web App'
                tools={<div className='flex gap-1'><HtmlIcon size={30} /><CssIcon size={30} /><JsIcon size={30} /><WebpackIcon size={30} /></div>}
                length='3 weeks'
                company='Udacity'
                role='Course assignment'
                images={articleIMGs}
                link='https://github.com/Michalis17/Article-analyzer-Web-App/tree/master'
                linkName='Github link'
                overview='As part of my Front-End Web Development Nanodegree, I built a web application that uses the Sentiment Analysis API from MeaningCloud to analyze articles or blogs. Users input a URL, and the server determines whether the content is positive, neutral, or negative, highlighting the relevant parts. This project introduced me to Webpack for bundling code and Jest for unit testing.'
                challenge='While integrating the API was straightforward, I faced significant challenges with creating a production build using Webpack and learning to write unit tests with Jest. Bundling CSS styles into the production build required finding the correct packages and configurations, which was particularly difficult. Additionally, learning Jest for unit testing was a new and enjoyable challenge, as it required adopting a new mindset for writing and structuring tests.'
                contribution='I addressed Webpack configuration issues through extensive research and trial and error, ultimately creating a functional production build. For unit testing, I studied the Jest documentation and wrote tests for all possible use cases, improving my code quality and coding habits.'
                result='The result was a functional web application that met the project requirements. This project significantly expanded my web development knowledge and exposed me to essential tools used in real-world development. Completing it fuelled my desire to learn more and deepen my understanding of these tools.'
              />
            </TabPanel>

            {/* Project 4 */}
            <TabPanel className=''>
              <ProjectPanel
                title='Weather-Journal App'
                images={weatherIMGs}
                tools={<div className='flex gap-1'><HtmlIcon size={30} /><CssIcon size={30} /><JsIcon size={30} /></div>}
                length='2 weeks'
                company='Udacity Course'
                role='Course assignment'
                link='https://github.com/Michalis17/Weather-Journal-App/tree/main/website'
                linkName='Github link'
                overview='The Weather Journal App is a simple web application where users enter their city to get the current temperature using the OpenWeatherMap API and journal their feelings for the day. Through this project, I learned how to use Express to set up server-side routes, handle GET and POST requests, and implement asynchronous JavaScript with the Fetch API.'
                challenge='The primary challenge of the Weather Journal App was managing the execution order of asynchronous code to ensure smooth and efficient data retrieval while dynamically updating the UI. Additionally, integrating data from an external API and storing user inputs on the server were crucial for the app’s functionality.'
                contribution='To manage the execution order of the code, I used JavaScript’s asynchronous promises. Initially, this concept was challenging, but with practice, it became more manageable. For fetching data from an external API, I used the Fetch API, taking time to understand the necessary boilerplate code. Once I successfully received a working response, integrating and utilizing the data became relatively straightforward.'
                result='In conclusion, I created a functional web app that met the requirements of my Udacity course. This project sparked a deep interest in building web applications and alleviated my initial intimidation about integrating web APIs. Completing this project fueled my desire to learn more about web development and further honed my skills in working with asynchronous JavaScript and external APIs.'
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </Transition>

  )
}

export default ProjectsCard