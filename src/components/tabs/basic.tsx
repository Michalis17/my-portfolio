import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels} from '@headlessui/react'

import MyModal from "../modal/modal";
import AboutMeIcon from "../../assets/Icons/about-me";
import ProjectsIcon from "../../assets/Icons/projects";
import ExperienceIcon from "../../assets/Icons/experience";
import EducationIcon from "../../assets/Icons/education";

const Basic: React.FC = () => {
// !change tabs to be project 1 project 2 and so on
  return (
    <div className="p-3 rounded-b-xl sm:rounded-xl bg-white/5  backdrop-blur-2xl  flex flex-col justify-center items-center w-full sm:max-w-xl ">

      <TabGroup className='flex flex-col w-full sm:flex-row gap-4' vertical>

        {/* Tab buttons container */}
        <TabList className='flex flex-row flex-wrap justify-center sm:flex-col w-full  sm:w-1/4 gap-2'>
          <Tab className='data-[selected]:bg-red-500  p-1  bg-cyan-200 flex flex-col items-center rounded-3xl'>
            <AboutMeIcon size={25} /><div className="whitespace-nowrap">about me</div>
          </Tab>
          <Tab className='data-[selected]:bg-red-500  p-1  bg-cyan-200 flex flex-col items-center rounded-3xl'>
            <ProjectsIcon size={25} />projects
          </Tab>
          <Tab className='data-[selected]:bg-red-500  p-1   bg-cyan-200 flex flex-col items-center rounded-3xl'>
            <ExperienceIcon size={25} />Experience
          </Tab>
          <Tab className='data-[selected]:bg-red-500  p-1   bg-cyan-200 flex flex-col items-center rounded-3xl'>
            <EducationIcon size={25} />Education
          </Tab>
        </TabList>

        {/* Tab content container */}
        <TabPanels className='w-full flex justify-center items-center'>
          {/* About me */}
          <TabPanel className='bg-teal-600 rounded border-double border-4 p-6 border-teal-950 shadow-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, nam ipsum? Veniam aliquid sequi facilis esse, odit voluptas est optio vero eveniet incidunt facere expedita quia beatae, tempore animi reprehenderit.</TabPanel>

          {/* Projects */}
          <TabPanel className='bg-teal-600 rounded border-double border-4 p-6 border-teal-950 shadow-2xl' >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur sunt mollitia quia atque, a aut, amet eos adipisci molestias maiores est porro iste nesciunt, doloribus ipsam ex. Labore, placeat porro!
            <MyModal children={<div>Hello 1</div>} content="modal 0" />
            
            
          </TabPanel>
          {/* experience */}
          <TabPanel className='bg-teal-600 rounded border-double border-4 p-6 border-teal-950 shadow-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur excepturi sapiente omnis ad magnam odio, repellendus nam consectetur laboriosam reiciendis. Id provident totam alias dolore facilis dignissimos voluptas repudiandae?
          <MyModal children={<div>Hello 2</div>} content="modal 1" />
          
          </TabPanel>
          {/* education */}
          <TabPanel className='bg-teal-600 rounded border-double border-4 p-6 border-teal-950 shadow-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis tenetur excepturi sapiente omnis ad magnam odio, repellendus nam consectetur laboriosam reiciendis. Id provident totam alias dolore facilis dignissimos voluptas repudiandae?
          <MyModal children={<div>omg this is awesome</div>} content="modal 2" />

          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>

  )
}

export default Basic
