import React from 'react'
import './skills-styles.css'
// icons
import JsIcon from '../../assets/Icons/js';
import HtmlIcon from '../../assets/Icons/html';
import ReactIcon from '../../assets/Icons/react';
import CssIcon from '../../assets/Icons/css';
import TailwindIcon from '../../assets/Icons/tailwind';
import TsIcon from '../../assets/Icons/ts';
import GitIcon from '../../assets/Icons/git';
import NextIcon from '../../assets/Icons/next';
import BootstrapIcon from '../../assets/Icons/bootstrap';
import FigmaIcon from '../../assets/Icons/figma';
import MysqlIcon from '../../assets/Icons/mysql';
import PhpIcon from '../../assets/Icons/php';
import WebflowIcon from '../../assets/Icons/webflow';
const SkillsSection: React.FC = () => {
    return (
        <div className='w-full flex flex-col items-center relative overflow-hidden'>
            
            <h2 className="text-3xl font-bold mb-4">My Skillset</h2>

            <div className="scroller w-full" data-animated='true'>
                <ul className="tag-list scroller__inner">
                    <li className="text-lg"><HtmlIcon size={50} /></li>
                    <li className="text-lg"><CssIcon size={50} /></li>
                    <li className="text-lg"><JsIcon size={50} /></li>
                    <li className="text-lg"><TsIcon size={50} /></li>
                    <li className="text-lg"><ReactIcon size={50} /></li>
                    <li className="text-lg"><NextIcon size={50} /></li>
                    <li className="text-lg"><TailwindIcon size={50} /></li>
                    <li className="text-lg"><GitIcon size={50} /> </li>
                    <li className="text-lg"><BootstrapIcon size={50} /></li>
                    <li className="text-lg"><FigmaIcon size={50} /></li>
                    <li className="text-lg"><MysqlIcon size={50} /></li>
                    <li className="text-lg"><PhpIcon size={50} /></li>
                    <li className="text-lg"><WebflowIcon size={50} /></li>

                    {/* Repeated for smooth loop */}
                    <li className="text-lg"><HtmlIcon size={50} /></li>
                    <li className="text-lg"><CssIcon size={50} /></li>
                    <li className="text-lg"><JsIcon size={50} /></li>
                    <li className="text-lg"><TsIcon size={50} /></li>
                    <li className="text-lg"><ReactIcon size={50} /></li>
                    <li className="text-lg"><NextIcon size={50} /></li>
                    <li className="text-lg"><TailwindIcon size={50} /></li>
                    <li className="text-lg"><GitIcon size={50} /> </li>
                    <li className="text-lg"><BootstrapIcon size={50} /></li>
                    <li className="text-lg"><FigmaIcon size={50} /></li>
                    <li className="text-lg"><MysqlIcon size={50} /></li>
                    <li className="text-lg"><PhpIcon size={50} /></li>
                    <li className="text-lg"><WebflowIcon size={50} /></li>
                    
                </ul> 
            </div>



{/* 
            <ul className="list-disc list-inside">
                <li className="text-lg">HTML, CSS, JavaScript</li>
                <li className="text-lg">React, TypeScript</li>
                <li className="text-lg">TailwindCSS, Bootstrap</li>
                <li className="text-lg">Git, GitHub</li>
            </ul> */}
            </div>
    )
}

export default SkillsSection