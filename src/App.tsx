import React from "react"
import PortfolioPage from "./pages/Porfolio/PortfolioPage"
import CursorFollower from "./components/cursorFollower/CursorFollower"

const App: React.FC = () => {
  return (
    <div className="bg-my-black h-full 2xl:h-screen flex flex-col items-center justify-center">
      <div className=" overflow-x-hidden ">
        <CursorFollower />
        <PortfolioPage />
      </div>


    </div>
  )
}

export default App
