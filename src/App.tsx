import React from "react"
import CursorFollower from "./components/cursorFollower/CursorFollower"
import PortfolioPage from "./pages/Porfolio/PortfolioPage"

const App: React.FC = ()=> {
  // TODO: refactor some code make it look more neat
  // !transitions should maybe be in hero section instead in the component itsself 
  // TODO: fix on load animations
  // TODO: animation when tab is clicked 


  return (
    <div className="overflow-x-hidden sm:overflow-y-hidden">
      <PortfolioPage/>

      <CursorFollower/>

    </div>
  )
}

export default App
