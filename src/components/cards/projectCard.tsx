import { cn } from "../../lib/utils";
import React from "react";
// needs props for routing to project page
 
const CardDemo:React.FC = ()=> {
  return (
    <a href="/" className="max-w-xs w-full group/card">
      <div
        className={cn(
          " cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col justify-end p-4",
          "bg-[url(src/assets/ProjectsAssets/PLatd/Platd-login.png)] bg-cover bg-center"
        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        {/* <div className="flex flex-row items-center space-x-4 z-10"> */}
          {/* <img
            height="100"
            width="100"
            alt="Avatar"
            src="src\assets\ProjectsAssets\PLatd\Platd-login.png"
            className="h-10 w-10 rounded-full border-2 object-cover"
          /> */}
          {/* <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              Manu Arora
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div> */}
        {/* </div> */}
        <div className="text content bg-my-blue-900/50 rounded">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            Platd
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            A marketplace platform for digital cookbooks.
          </p>
        </div>
      </div>
    </a>
  );
}

export default CardDemo;