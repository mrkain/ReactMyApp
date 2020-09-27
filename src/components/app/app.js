import React from "react";
import './app.css'
import FriendsList from "../friends-list/friends-list";

const App = () => {

  const data = [
    {id: 1, name: 'Aleksey', statusOnline: true},
    {id: 2, name: 'Andrey', statusOnline: false},
    {id: 3, name: 'Alena', statusOnline: true},
    {id: 4, name: 'Egor', statusOnline: false},
    {id: 5, name: 'Svetlana', statusOnline: true}
  ]

  return (
    <div className='app'>
      <FriendsList friends={data}/>
    </div>
  )
}

export default App