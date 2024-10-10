# write all you content here for save keeping




## platd

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

### images for carousel

```javascript
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

```


## baby travel app

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

       ```javascript 
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
  ``` 



  ## component that i think is cool
  ```javascript
  import React, { useState, useEffect } from 'react';
const CursorFollower: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX-10 , y: e.clientY+25 });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div
      style={{
        zIndex: 10,
        position: 'fixed',
        left: position.x,
        top: position.y,
        transition: 'left 0.1s ease, top 0.1s ease' // Apply CSS transitions
      }}
    >

<svg className='animate-bounce hidden sm:block' xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" clipRule="evenodd" viewBox="0 0 64 64" width={32} height={32} id="cute-panda-happy"><path d="M50.656 19.094A7.655 7.655 0 0 0 43 26.747a7.655 7.655 0 0 0 7.656 7.654 7.655 7.655 0 0 0 7.657-7.654 7.655 7.655 0 0 0-7.657-7.653Z"></path><path d="M50.656 20.187a6.561 6.561 0 0 0-6.562 6.56 6.561 6.561 0 0 0 6.562 6.56 6.561 6.561 0 0 0 6.563-6.56 6.561 6.561 0 0 0-6.563-6.56ZM13.063 19.094a7.655 7.655 0 0 1 7.656 7.653 7.655 7.655 0 0 1-7.656 7.654 7.655 7.655 0 0 1-7.657-7.654 7.655 7.655 0 0 1 7.657-7.653Z"></path><path fill="#555" d="M10.51 42.795a16.6 16.6 0 0 1-.532-4.173c0-10.49 9.794-18.993 21.876-18.993S53.73 28.133 53.73 38.622c0 1.434-.183 2.83-.531 4.173.348.861.53 1.757.53 2.677 0 6.73-9.793 12.184-21.875 12.184S9.978 52.201 9.978 45.472c0-.92.183-1.816.531-2.677Z"></path><path fill="#fff" d="M11.739 42.945a15.647 15.647 0 0 1-.598-4.292c0-9.912 9.279-17.948 20.724-17.948 11.446 0 20.725 8.036 20.725 17.948 0 1.49-.21 2.939-.607 4.324a6.2 6.2 0 0 1 .595 2.624c0 6.072-9.269 10.996-20.705 11H31.854c-11.446 0-20.724-4.924-20.724-11 0-.916.21-1.805.609-2.656Z"></path><path d="M31.854 44.82c.906 0 1.64.49 1.64 1.094 0 .603-.734 1.093-1.64 1.093-.906 0-1.64-.49-1.64-1.093 0-.604.734-1.094 1.64-1.094ZM23.901 35.983c3.441.621 5.056 3.613 4.107 6.67-.935 3.012-5.673 5.66-10.087 4.305-3.014-.925-4.298-3.911-2.918-6.746 1.754-3.601 5.73-4.8 8.898-4.229Zm15.813-.004c-3.437.621-5.05 3.611-4.102 6.668.934 3.01 5.667 5.656 10.076 4.302 3.01-.924 4.294-3.91 2.915-6.743-1.752-3.6-5.724-4.799-8.889-4.227Z"></path><g fill="#ff97b9"><path d="M15.261 47.455c1.208 0 2.188.49 2.188 1.094 0 .604-.98 1.093-2.188 1.093-1.208 0-2.187-.49-2.187-1.093 0-.604.979-1.094 2.187-1.094ZM48.447 47.455c1.208 0 2.187.49 2.187 1.094 0 .604-.979 1.093-2.187 1.093-1.209 0-2.188-.49-2.188-1.093 0-.604.98-1.094 2.188-1.094Z"></path></g><path d="M31.823 49.968c-1.978-.038-2.316-1.05-2.373-1.389a.427.427 0 0 1-.012-.09v-.02a.5.5 0 0 1 1 0l.005.024c.07.248.574.468.87.476.19 0 .625.002.625 0h.625c.304-.009.832-.243.875-.5l.002-.052a.5.5 0 0 1 .998.052v.017l-.001.003a.5.5 0 0 1-.012.09c-.057.34-.396 1.351-2.372 1.389h-.23Z"></path><path fill="#fff" d="M25.686 42.45c-.068-1.669-2.248-1.669-2.248-1.669l-.097.004c-.423.023-2.093.208-2.152 1.666l-.002.08a.75.75 0 0 1-1.5 0l.001-.036c.014-.358.234-3.214 3.75-3.214l.173.003c3.348.092 3.562 2.857 3.576 3.21v.037a.75.75 0 0 1-1.5 0l-.001-.08ZM42.56 42.45c-.067-1.669-2.248-1.669-2.248-1.669l-.096.004c-.423.023-2.093.208-2.152 1.666l-.002.08a.75.75 0 0 1-1.5 0l.001-.036c.014-.358.234-3.214 3.75-3.214l.173.003c3.348.092 3.562 2.857 3.576 3.21v.037a.75.75 0 0 1-1.5 0l-.001-.08Z"></path></svg>

      
     
    </div>
  );
};

export default CursorFollower;
```