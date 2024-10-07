import React from "react"
// import PortfolioPage from "./pages/Porfolio/PortfolioPage"
// import CursorFollower from "./components/cursorFollower/CursorFollower"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/home"
import About from "./pages/about/about";
import ProjectsPage from "./pages/projects/projects";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>





    // <div className="bg-my-black h-full 2xl:h-screen flex flex-col items-center justify-center">
    //   <div className=" overflow-x-hidden ">
    // 
    //   </div>


    // </div>
  )
}

export default App
