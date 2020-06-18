import React from 'react'

export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault();
    const { title } = this.state

    const newPost = { title, id: Date.now().toString }
    this.setState(prev => ({ ...prev, ...{ title: '' } }))
    console.log('newPost: ', newPost);

  }

  changeInputHandler = event => {
    event.persist()
    this.setState(state => ({
      ...state, ...{ [event.target.name]: event.target.value }
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group w-50">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )


  }
}