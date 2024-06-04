import React from "react"
import PortfolioPage from "./pages/Porfolio/PortfolioPage"
import CursorFollower from "./components/cursorFollower/CursorFollower"

const App: React.FC = ()=> {
  return (
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: center;
    // height: 100%; add break point in md: to be h-screen
    <div className="bg-my-black flex flex-row items-center justify-center h-full md:h-screen">
      <CursorFollower/>
      <PortfolioPage/>
    </div>
  )
}

export default App
