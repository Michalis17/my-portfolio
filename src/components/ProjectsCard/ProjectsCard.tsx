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
              <div className='w-full flex flex-col justify-center items-center gap-3'>
                <div className='aspect-video w-4/5 bg-slate-50'>

                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos adipisci repellat sed dolorum, eius qui ullam dolores? Tempora dicta est voluptatem inventore corporis libero, voluptatibus ex repellat labore animi cum?</p>
                <div className='flex flex-row gap-2 items-center justify-center'>
                  <div className='aspect-square w-1/3 bg-slate-50 '></div>
                  <p className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem non iure hic consectetur explicabo delectus tempore, excepturi neque commodi obcaecati sapiente! Veritatis voluptatum, velit deleniti nesciunt at repellendus ad.</p>
                </div>
                <div className='flex flex-row-reverse gap-2 items-center justify-center'>
                  <div className='aspect-square w-1/3 bg-slate-50 '></div>
                  <p className='w-1/2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate exercitationem non iure hic consectetur explicabo delectus tempore, excepturi neque commodi obcaecati sapiente! Veritatis voluptatum, velit deleniti nesciunt at repellendus ad.</p>
                </div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque quas cum fugiat possimus illo minima! Quisquam tempore quam amet saepe veritatis repudiandae ab porro qui delectus nam atque, doloremque iure omnis aperiam sequi doloribus minima quibusdam? Quod, eligendi perferendis ex tempore ut culpa natus repellat saepe neque molestias nemo fugit repellendus exercitationem ipsa illum amet dicta odit. Natus, illum iusto voluptatum ratione quod doloremque ut voluptates magni officia libero possimus excepturi perferendis sapiente. Odio qui inventore possimus obcaecati, quia tempora, praesentium necessitatibus quos natus maiores, quis asperiores dignissimos non sit. Ratione deleniti voluptatibus, tempore magni iste sequi distinctio atque optio a iusto maxime, pariatur debitis. Quas hic nostrum aspernatur aperiam necessitatibus. Alias ipsa ea excepturi ad, explicabo in voluptas ipsam iusto repellendus. Tempora iusto perspiciatis maxime itaque a suscipit, sapiente aliquam consectetur quisquam? A, nam enim fugiat incidunt architecto, quibusdam voluptates numquam adipisci vel quaerat sequi molestias porro ex, rem inventore fuga omnis corrupti consequuntur unde eaque alias voluptatem quis tempora officiis. Aliquid fugit ab ipsum optio necessitatibus, impedit inventore rem fugiat quos repudiandae. Repellat, vitae eius. Est consectetur, nostrum, ad quam debitis dolor dolorem consequuntur possimus tempora officiis quo, illo fuga expedita. Quibusdam iste repudiandae hic iure totam incidunt quod nisi vitae provident corrupti dolorem recusandae, dolorum ab, repellendus dolor ad sequi pariatur. Error adipisci reiciendis similique distinctio deserunt vel consequatur nesciunt laudantium accusantium libero at perferendis minima illum est, porro tenetur. Et eum ad inventore molestiae? Ea, maiores mollitia, ex ut minus sunt laborum dolorem possimus iste quis sed deleniti quae hic cupiditate sint sequi fuga excepturi placeat animi! Quod officia maxime molestiae, perspiciatis quia exercitationem impedit earum numquam, iusto blanditiis omnis molestias vero? Necessitatibus, deserunt nobis. Voluptas at necessitatibus delectus mollitia qui amet velit ullam ad doloribus est distinctio hic, ratione officiis tenetur, nemo dolor. Eligendi facere iusto omnis, atque vel nostrum id ipsum quod quasi numquam laborum modi esse quas illo minus nesciunt ad non nemo accusamus, aliquid mollitia! Nulla vero harum quis fuga, quasi voluptatibus tenetur odio laborum aperiam excepturi eum quas, sed enim laudantium. Incidunt nostrum accusantium ducimus aperiam optio aliquid, animi impedit sunt quibusdam veritatis doloribus cum, culpa beatae rerum nisi quasi facere laborum quae quaerat? Deserunt aspernatur id perferendis suscipit harum laboriosam expedita porro, sit quibusdam, cumque numquam, quo repudiandae nisi sed. Magni dolorem vero, fugiat ipsum dolore iure repellat distinctio soluta, mollitia maxime cumque enim repudiandae modi placeat repellendus saepe! Harum?
              </div>
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