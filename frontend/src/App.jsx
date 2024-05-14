import React from "react"
import List from "./components/list/List"
import Details from "./components/details/Details"
import Chats from "./components/chat/Chats"
import Login from "./components/login/Login"

function App() {

  const user = true

  return (
   <div className="app container">
    {user? (
      <>
      <List/>
      <Chats/> 
      <Details/> 
      </>
    ): (<Login/>) }

   </div>
  )
}

export default App
