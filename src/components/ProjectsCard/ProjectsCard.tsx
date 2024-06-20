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
import weatherIMG from '../../assets/ProjectsAssets/WeatherJournal/weatherOldV.png'
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
import platdgif from '../../assets/ProjectsAssets/PLatd/PLatd-Landing-GIF.gif'

const ProjectsCard: React.FC = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  // array of Images for each project
  const platdIMGs = [
    <img src={platdgif} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning1} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning2} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning3} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLandning4} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdComIMG1} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdComIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdLoginIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdSignupIMG} alt='weather' className='rounded-xl h-full object-cover' />,
    <img src={PlatdSignupIMG2} alt='weather' className='rounded-xl h-full object-cover' />,
    
  ]
  const travelIMGs = [
    <img src={weatherIMG} alt='weather' className='rounded-xl h-full object-cover' />,
  ]
  const articleIMGs = [
    <img src={weatherIMG} alt='weather' className='rounded-xl h-full object-cover' />,
  ]
  const weatherIMGs = [
    <img src={weatherIMG} alt='weather' className='rounded-xl h-full object-cover' />,
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
                length='6 mounths'
                company='Platd'
                role='Front-End Developer'
                link='https://platd.io/'
                linkName='Platd.io'
                overview='Working with the early-stage startup Platd, a marketplace platform for food content creators to monetize their recipes by creating and selling digital cookbooks, has been an invaluable learning experience. My main responsibility was transforming Figma designs into functional front-end code. I utilized React in conjunction with TypeScript to develop reusable UI components, including the login and signup flows and the marketing landing page. Additionally, I employed Tailwind CSS for styling and Headless UI, a React component library, to assist in developing certain components. This project exposed me to various tools and resources commonly used by developers in the workplace.'

                challenge='The biggest challenge was creating components from scratch, as Headless UI didn’t offer a non-styled sidebar component. I also struggled with making the landing page responsive while adhering to the design standards set in the Figma designs. These tasks required a deep understanding of new technologies like React, which, while exciting, also posed significant hurdles.'
                contribution='To tackle these challenges, I systematically broke down the component behavior and conceptualized how to implement it in code. I frequently referred to documentation for the technologies and libraries I was using and researched best practices relevant to my project. For responsiveness issues, I sought advice from senior developers and used tools like ChatGPT for generating boilerplate code and debugging, though I relied on it cautiously.'
                result='I successfully completed my deliverables, and the founders were satisfied with my work. My contributions were integral to a product that will be used by real users. This project significantly improved my skills as a front-end developer and deepened my understanding of modern web development technologies, leaving me eager to learn even more.'

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
                overview='Travel Buddy was my capstone project for the Udacity Front-End Web Development Nanodegree, designed to push my JavaScript skills to their limits. This project involved dynamically manipulating the DOM, creating routes to a backend server, integrating external APIs, and using build tools like Webpack to create development and production builds. The application displays weather information for a user’s trip destination, along with a countdown timer and an image. It features a suggestive search bar that offers city suggestions as the user types and a date input field. Responses from the server are saved in local storage, ensuring data persists even when the user exits the app.'
                challenge='I faced several significant challenges: creating the suggestive search bar, ensuring asynchronous code execution, and setting up my production and development builds with Webpack. Configuring Webpack was particularly difficult, especially getting the correct entry point file and ensuring CSS styles appeared in the production build. The suggestive search bar required breaking down complex tasks into manageable steps, which, although challenging, was a more enjoyable problem to solve than the Webpack configuration.'
                contribution="To handle the Webpack configuration issues, I created three config files instead of two: one for the production build, one for the development build, and a common config file for shared elements. This modular approach made it easier to identify and fix issues. Through trial and error and extensive documentation review, I eventually achieved a working configuration. For implementing difficult features, I isolated each into its own function to be used within the main app's logic, ensuring clarity and maintainability."
                result="I successfully completed and passed the Front-End Web Development course by submitting this project. However, in hindsight, I'm not entirely satisfied with the outcome as my focus on functionality and Webpack configuration led me to neglect the visual design. While I was initially proud of completing this project, I now see numerous areas for improvement. This realization has driven me to use the new technologies I've learned to enhance the project further. My dissatisfaction fuels my self-motivation to continually improve after every project, striving for excellence in both functionality and design."
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
                overview='As part of my Front-End Web Development Nanodegree, I built a web application that allows users to run Natural Language Processing (NLP) on articles or blogs using the Sentiment Analysis API from MeaningCloud. Users input a URL of a blog or article, and the server responds with whether the content is positive, neutral, or negative, highlighting the most relevant parts. This project introduced me to build tools like Webpack for bundling code into a production build and integrating unit testing with Jest, offering a comprehensive learning experience.'
                challenge='While integrating the API was straightforward, I faced significant challenges with creating a production build using Webpack and learning to write unit tests with Jest. Bundling CSS styles into the production build required finding the correct packages and configurations, which was particularly difficult. Additionally, learning Jest for unit testing was a new and enjoyable challenge, as it required adopting a new mindset for writing and structuring tests.'
                contribution='Solving these challenges was a frustrating yet rewarding experience. When overwhelmed, I would take short breaks to clear my mind and return with a fresh perspective. Through extensive research and trial and error, I eventually configured a working production build, understanding the role of each package and configuration. For unit testing, I meticulously studied the Jest documentation and considered all possible use cases for my code, writing comprehensive tests. This approach not only improved my code quality but also instilled a habit of thoughtful coding and continuous improvement.'
                result='The result was a functional web application with a single feature set. While the project may not be groundbreaking, it significantly expanded my web development knowledge and exposed me to essential tools used in real-world development. Completing this project has fueled my desire to learn more and deepen my understanding of these tools within a development team to create robust web applications.'
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