import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./pages/home/home"
import PlatdPage from "./pages/projects/platd";
import ProjectsPage from "./pages/projects/babyProjects";

const App: React.FC = () => {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path="/baby-projects" element={<ProjectsPage />} />
        <Route path="/platd" element={<PlatdPage />} />
      </Routes>
    </Router>
  )
}

export default App
