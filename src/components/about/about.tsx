import React from 'react'
//! WRITE BETTER CONTENT 
const AboutSection: React.FC = () => {
    return (
        <div className='container flex flex-col gap-6 justify-between items-center max-w-2xl'>
            <h2 className='font-bold text-4xl p-3'><strong>My story</strong></h2>
            {/* <h2 className='text-3xl text-center'>From Profesional Chef👨🏼‍🍳 to  Web Developer👨🏼‍💻</h2>   */}
            <p className='text-lg sm:text-xl text-center'>


            <strong>From the kitchen 👨🏼‍🍳 to the keyboard 👨🏼‍💻</strong>, my journey has been a mix of flavors and functions. With a BSc in Marketing and Management and time spent as a chef, I've stirred, chopped, and strategized my way through diverse experiences that all added their own unique zest. In the culinary world, I mastered the art of blending ingredients and techniques to craft the perfect dish—much like now I blend code and creativity to build smooth, captivating websites. While I was sautéing by day, I was coding by night, drawn to the thrill of solving problems and creating something from scratch. Now, as a web developer, I'm all in, cooking up dynamic digital experiences with the same passion and precision. Whether I'm whipping up a new UI component or spicing up a landing page, my goal is to be exceptional, always learning, always evolving, and never settling for bland outcomes.

            </p>
        </div>
    )
}

export default AboutSection