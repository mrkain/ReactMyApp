import React, {Component} from "react"
import './friends-add-form.css'

export default class FriendsAddForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      avatar: ''
    }
    this.onValueChangeName = this.onValueChangeName.bind(this)
    this.onValueChangeAvatar = this.onValueChangeAvatar.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onValueChangeName(event) {
    this.setState({
      name:event.target.value
    })
  }

  onValueChangeAvatar(event) {
    this.setState({
      avatar:event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault()
    this.props.onAdd(this.state.name, this.state.avatar)
    this.setState({
      name: '',
      avatar: ''
    })
  }




  render() {
    return (
      <form
          className='friends-add-form d-flex'
          onSubmit={this.onSubmit}>
        <input
          type='text name'
          placeholder='Добавь имя нового друга'
          className='form-control new-friend-label'
          onChange={this.onValueChangeName}
          value={this.state.name}
        />
        <input
          type='text avatar'
          placeholder='Ссылка на аватар'
          className='form-control new-friend-label'
          onChange={this.onValueChangeAvatar}
          value={this.state.avatar}
        />
        <button
          type='submit'
          className='btn btn-danger new-friend-btn'>
          Добавить
        </button>

      </form>

    )

  }




}


