import React, {Component} from "react";
import './friends-list-item.css'
import FriendsList from "../friends-list/friends-list";

export default class FriendsListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      statusOnline: this.props.statusOnline
    }
    this.OnStatusOnline = this.OnStatusOnline.bind(this)
  }

  OnStatusOnline() {
    this.setState(({statusOnline}) => ({
      statusOnline: !statusOnline
    }))
  }

  render() {
    let classNames = ''
    const {name, onDelete} = this.props
    const {avatar} = this.props
    const {statusOnline} = this.state
    if(statusOnline) {
      classNames += 'friends-list-item-online'
    } else {
      classNames += 'friends-list-item-offline'
    }
    return (
      <div className='friends-list-items'>
        <i className={classNames} onClick={this.OnStatusOnline}></i>
        <span className='friends-list-item'>
          {name}
        </span>
        <img className='friends-list-item-avatar' src={avatar}/>
        <button
            type='button'
            className='friends-list-item-btn'
            onClick={onDelete}>
          <i className='fa fa-trash-o'></i>
        </button>
      </div>
    )
  }
}



