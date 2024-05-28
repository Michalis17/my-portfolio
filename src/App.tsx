import React from "react"
import PortfolioPage from "./pages/Porfolio/PortfolioPage"
import CursorFollower from "./components/cursorFollower/CursorFollower"

const App: React.FC = ()=> {
  return (
    <div className="bg-my-black flex justify-center ">
      <CursorFollower/>
      <PortfolioPage/>
    </div>
  )
}

export default App
