import React, { Component } from 'react'

import "./Description.css"

export default class Description extends Component {

  constructor(props) {
    super(props)
  }
  state = {
    likes: 0,
    dislikes: 0,
  }
  onLike = () => {
    this.setState({
      likes: this.state.likes + 1
    })
  }


  onDislike = () => {
    this.setState({
      dislikes: this.state.dislikes - 1
    })
  }

  render() {
    const { likes, dislikes } = this.state
    const { video } = this.props
    return (
      <div className='description'>
        <h1>{video.name}</h1>
        <p>{video.description}</p>
        <div className="likes-counter">
          <span onClick={() => this.onLike()}><i className="fas fa-thumbs-up"></i> {likes} </span>
          <span className="dislike" onClick={() => this.onDislike()}>    <i className="far fa-thumbs-down"></i>{dislikes} </span>
        </div>
      </div >
    )
  }
}
