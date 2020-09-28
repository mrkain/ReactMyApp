import React, {Component} from "react";
import './friends-list-item.css'
import FriendsList from "../friends-list/friends-list";

export default class FriendsListItem extends Component {

  render() {
    let classNames = ''
    const {name} = this.props
    const {statusOnline} = this.props
    const {avatar} = this.props
    if(statusOnline) {
      classNames += 'friends-list-item-online'
    } else {
      classNames += 'friends-list-item-offline'
    }
    return (
      <div className='friends-list-items'>
        <i className={classNames}></i>
        <span className='friends-list-item'>
          {name}
        </span>
        {avatar}
      </div>
    )
  }
}

