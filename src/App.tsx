import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/home"
import PlatdPage from "./pages/projects/platd";
import ProjectsPage from "./pages/projects/projects";

// TODO: TEST Hero Parallax 
// TODO: FINISH STYLE AND LAYOUT FOR HOME PAGE
// CONTACT FORM AND NAVBAR 
// TODO: IMAGE SLIDER component for projects 
//todo infinite horizontal scroll animation for skillset



const App: React.FC = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/platd" element={<PlatdPage />} />
      </Routes>
    </Router>
  )
}

export default App
