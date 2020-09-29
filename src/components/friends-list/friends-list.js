import React from "react"
import FriendsListItem from "../friends-list-item/friends-list-item"
import './friends-list.css'


const FriendsList = ({friends, onDelete}) => {
  const elements = friends.map((item) => {
    const {id, ...itemProps} = item
    return (
      <li key={id} className='friends-list'>
        {<FriendsListItem
            {...itemProps}
            onDelete={() => onDelete(id)}/>}
      </li>
    )
  })

  return (
      <ul className='friends-list'>
        {elements}
      </ul>
  )

}

export default FriendsList