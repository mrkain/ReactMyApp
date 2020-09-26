import React from "react";
import './friends-list.css'
import '../friends-list-item/friends-list-item'

const FriendsList = () => {
  return (
    <ul className='friends-list'>
      <li>Андрей</li>
      <li>Егор</li>
      <li>Алексей</li>
      <li>Василий</li>
      <li>Алена</li>
    </ul>
  )
}

export default FriendsList