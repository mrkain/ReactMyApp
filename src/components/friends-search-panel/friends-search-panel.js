import React, {Component} from "react"
import './friends-search-panel.css'

export default class FriendsSearchPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    this.onUpdateSearch = this.onUpdateSearch.bind(this)
  }

  onUpdateSearch(event) {
    const term = event.target.value
    this.setState({term})
    this.props.onUpdateSearch(term)
  }

  render() {
    return (
      <input
        className='form-control '
        type='text'
        placeholder='Поиск друзей'
        onChange={this.onUpdateSearch}/>
    )
  }
}