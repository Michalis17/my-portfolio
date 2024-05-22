import React from "react"
import PortfolioPage from "./pages/Porfolio/PortfolioPage"

const App: React.FC = ()=> {

  // !: REDESIGN THE WHOLE PORTFOLIO 
  // 1 hour on refactoring and file structure commit then start major changes
    // TODO: profile card component
    // commit changes
    // TODO: reusable work link components on profile card component
    // commit changes 
    // TODO: project img component
    // commit changes

  // !transitions should maybe be in hero section component instead in the component itsself 

  return (
    <div className="bg-my-black h-screen flex justify-center">
      <PortfolioPage/>
    </div>
  )
}

export default App
