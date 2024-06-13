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
import weatherIMG from '../../assets/weatherOldV.png'

const ProjectsCard: React.FC = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Transition
      show={show}
      enter="transition-transform transition-opacity duration-[1500ms]"
      enterFrom="opacity-0 transform translate-x-full"
      enterTo="opacity-100 transform translate-x-0"
    >
      <div className=" md:w-2/3 h-[700px] overflow-y-scroll border border-my-blue-900 shadow-2xl shadow-my-blue-700 pt-3 sm:px-6 sm:pt-6 rounded-2xl">

        <TabGroup className='text-white'>

          {/* Tab buttons container */}
          <TabList className=' w-full border-b border-my-blue-900 rounded-sm text-gray text-sm font-semibold'>

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
          <TabPanels className='pt-8'>
            {/* About Me */}
            <TabPanel>
              <AboutMe/>
            </TabPanel>
            {/* Project 1  */}
            <TabPanel className=''>
              <ProjectPanel
                title='Platd: a marketplace for digital cookbooks'
                tools={<div className='flex gap-1'><ReactIcon size={30} /><TailwindIcon size={30} /><TsIcon size={30} /></div>}
                length='6 mounths'
                company='Platd'
                role='Front-End Developer'
                github='https://platd.io/'
                challenge='Responsible for developing the login and sign-up flows. Reusable components for the product. Responsible for developing the Landing page. '
                result='Platd is a tool that help food content creators monetise their recipes by easily creating and selling digital cookbooks.'
                contribution='Communicating with the designer and the backend developer for coordinating tasks and going back and forth with our deliverables.'
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
                github='https://github.com/Michalis17/Travel-Buddy-WebApp'
                challenge='One of the significant challenges in this project was integrating multiple APIs and managing the data retrieved from these sources. This required careful handling of asynchronous operations and ensuring that the data was accurately displayed to the user. Another challenge was creating relatively complex features to make the project stand out. This involved developing a suggestive search bar, generating a custom PDF for each trip, and a countdown display for each trip.'
                contribution="As the main developer, I tackled these challenges by isolating each feature into its own function that could be used within the main app's logic. Through trial and error and extensive documentation review, I integrated various APIs to fetch travel information accurately. I also configured Webpack for efficient code bundling and management. The suggestive search bar and countdown timer were developed from scratch using pure JavaScript, allowing me to apply and expand my newly acquired skills."
                result='The Travel Buddy Web App provides comprehensive travel information, including weather forecasts and local attractions. It dynamically updates the UI based on user input and API responses. The application features advanced functionalities such as a suggestive search bar, a countdown timer, and PDF generation for each trip, enhancing the overall user experience. This project demonstrates my proficiency in JavaScript, Node.js, Express, and Webpack, highlighting my ability to create a full-stack application with real-world utility. The successful implementation of these features from scratch showcases my problem-solving skills and my capacity to learn and apply complex technologies, making this project a valuable addition to my portfolio.'
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
                github='https://github.com/Michalis17/Article-analyzer-Web-App/tree/master'
                challenge='The main challenge was understanding how to configure Webpack for bundling code in both development and production environments. Additionally, integrating unit testing with Jest required a significant learning curve.'
                contribution='I tackled these challenges through trial and error, extensively reading documentation, and experimenting with different configurations until achieving the ideal setup. I used Webpack to efficiently bundle the code, ensuring smooth development and deployment processes. I also implemented the MeaningCloud API to evaluate articles and added input validation to ensure users provided correctly formatted URLs. Learning Jest allowed me to create unit tests, enhancing the reliability of the code.'
                result='The Article Analyzer Web App effectively showcases my ability to handle advanced JavaScript, manage backend operations with Node.js and Express, and utilize modern build tools like Webpack. The application dynamically updates the UI with real-time analysis results, validates user input, and includes unit tests to ensure functionality. This project is a testament to my ability to learn and apply complex technologies, making it a valuable addition to my portfolio.'
              />
            </TabPanel>

            {/* Project 4 */}
            <TabPanel className=''>
              <ProjectPanel
                title='Weather-Journal App'
                projectImg={<img src={weatherIMG} alt='weather' className='rounded-xl' />}
                tools={<div className='flex gap-1'><HtmlIcon size={30} /><CssIcon size={30} /><JsIcon size={30} /></div>}
                length='2 weeks'
                company='Udacity Course'
                role='Course assignment'
                github='https://github.com/Michalis17/Weather-Journal-App/tree/main/website'
                challenge='The primary challenge of the Weather-Journal App was managing the execution order of asynchronous code to ensure smooth and efficient data retrieval and UI updates. Additionally, integrating data from an external API and storing user inputs locally added further complexity to the project.'
                contribution='As part of a front-end developer course, I developed this project to apply my newly learned skills. As the sole developer, I was responsible for both the frontend and backend development. To tackle the challenges, I utilized vanilla JavaScript to handle asynchronous operations with Promises, ensuring tasks such as API calls and UI updates executed in the correct sequence. I implemented Node.js and Express to set up a server, manage routing, and handle API endpoints. By integrating an external weather API, I was able to fetch real-time weather data and dynamically update the user interface based on this information. Additionally, I employed local storage to save user inputs and weather data, ensuring that this data persisted across sessions. This included developing features that allowed users to delete specific journal entries, with immediate updates to the UI reflecting these changes.'
                result='The Weather-Journal App effectively showcases my proficiency in JavaScript, particularly in handling asynchronous operations and integrating external APIs. The project features a real-time temperature display that dynamically updates the UI with current weather data, and it includes functionality to save user inputs and weather data in local storage. This ensures that data persists across sessions and provides users with the ability to delete specific entries. The seamless user experience demonstrates strong skills in frontend development and asynchronous programming, highlighting essential capabilities in dynamic UI manipulation, API integration, and data persistence. This project is a valuable addition to any portfolio, showcasing critical front-end development skills acquired through formal coursework.'


              />
            </TabPanel>
          </TabPanels>

        </TabGroup>
      </div>
    </Transition>

  )
}

export default ProjectsCard