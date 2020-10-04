import React, {Component} from "react"
import './app.css'
import FriendsList from "../friends-list/friends-list"
import FriendsAddForm from "../friends-add-form/friends-add-form"
import FriendsSearchPanel from "../friends-search-panel/friends-search-panel";

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [
        {id: 1, name: 'Aleksey Ivanov', statusOnline: true, avatar: "https://i02.fotocdn.net/s118/afffdc3553dd8921/user_l/2695344014.jpg"},
        {id: 2, name: 'Andrey Petrov', statusOnline: false, avatar: "https://pbs.twimg.com/profile_images/430448527454793728/gih1pMg5.jpeg"},
        {id: 3, name: 'Alena Repina', statusOnline: true, avatar: "https://mtdata.ru/u20/photo1C37/20279419936-0/original.jpg"},
        {id: 4, name: 'Egor Melov', statusOnline: false, avatar: "https://i02.fotocdn.net/s116/1dd9b6cbafee0f32/user_l/2651526817.jpg"},
        {id: 5, name: 'Svetlana Svetikova', statusOnline: true, avatar: "https://yt3.ggpht.com/a/AATXAJwC9cB5-_xf4Au_AJ4uHiFGOfltXhvBZrpEj7OA=s900-c-k-c0xffffffff-no-rj-mo"},
        {id: 6, name: 'Anna Zaytseva', statusOnline: true, avatar: "https://yt3.ggpht.com/a/AATXAJwC9cB5-_xf4Au_AJ4uHiFGOfltXhvBZrpEj7OA=s900-c-k-c0xffffffff-no-rj-mo"},
        {id: 7, name: 'Alisa Popova', statusOnline: false, avatar: "https://yt3.ggpht.com/-RvaUtXKnkFs/AAAAAAAAAAI/AAAAAAAAAAA/14AgbZBYvLU/s900-c-k-no/photo.jpg"}
      ],
      term: ''
    }
    this.deletItem = this.deletItem.bind(this)
    this.addFriends = this.addFriends.bind(this)
    this.onUpdateSearch = this.onUpdateSearch.bind(this)

    this.maxId = 8
  }

  addFriends(name, avatar) {
    const newFriendItem = {
      name: name,
      avatar: avatar,
      statusOnline: true,
      id: this.maxId++
    }
    this.setState( ({data}) => {
      const newArr = [...data, newFriendItem]
      return {
        data: newArr
      }
    })
  }

  deletItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id)
      const before = data.slice(0, index)
      const after = data.slice(index +1)
      const newArr = [...before, ...after]
      return {
        data: newArr
      }
    })
  }

  searchFriends(items, term) {
    if (term.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.name.indexOf(term) > -1  // Все что введено в строке, ищем в индексе, если есть совпадение то значение будет больше -1, так как -1 это ничего не найдено
    })
  }

  onUpdateSearch(term) {
    this.setState({term})
  }



  render() {
    const {data, term} = this.state
    const visibleFriends = this.searchFriends(data, term)

    return (
        <div className='app'>
          <div className='friends-search-panel d-flex'>
              <FriendsSearchPanel
                onUpdateSearch={this.onUpdateSearch}/>
          </div>
          <FriendsList
              friends={visibleFriends}
              onDelete={this.deletItem}/>
          <FriendsAddForm
              onAdd={this.addFriends}/>
        </div>
    )
  }

}


