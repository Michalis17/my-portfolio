import React from 'react'
//! WRITE BETTER CONTENT 
const AboutSection: React.FC = () => {
    return (
        <div className='container flex flex-col gap-6 justify-between items-center max-w-2xl'>
            <h2 className='font-bold text-4xl p-3'><strong>My story</strong></h2>
            <h2 className='text-3xl text-center'>From Profesional Chef👨🏼‍🍳 to  Web Developer👨🏼‍💻</h2>  
            <p className='text-lg sm:text-xl text-center'>
                {/* I'm a 25-year-old graduate with a BSc in Marketing and Management, transitioning to a career in web development. My career journey spans the culinary and marketing worlds, where I developed my communication, teamwork, and organisation skills. Throughout my journey as a student and chef, I would spend my free time learning how to write code since I enjoyed the problem-solving aspect of it. Soon enough, this passion for technology has made me commit to becoming a Front-End Web Developer, building websites and learning new technologies. */}
            </p>
            <p className='text-lg sm:text-xl text-center'>Beyond work, I enjoy pottery, dancing, and fitness. My journey is marked by a continuous growth mindset, with a clear goal of mastering front-end development.</p>
        </div>
    )
}

export default AboutSection