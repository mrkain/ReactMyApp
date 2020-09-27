import React, {Component} from "react";
import './friends-list-item.css'
import FriendsList from "../friends-list/friends-list";

export default class FriendsListItem extends Component {

  render() {
    let classNames = 'friends-list-item'
    const {name} = this.props
    return (

      <div className={classNames}>
        {name}
      </div>
    )
  }
}

