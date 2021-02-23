import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube'
import Description from '../Description/Description';
import { Button } from '@material-ui/core';

import './Player.css'

class Player extends Component {

  state = {
    text: '',
    comments: []
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleClick = (comment) => {
    if (this.state.text) {
      this.setState({
        comments: [...this.state.comments, comment],
        text: ''
      })
    }

  }

  render() {
    const { video } = this.props
    const { text, comments } = this.state
    return (
      <div className="player-area">
        <ReactPlayer
          className="player"
          controls={true}
          url={video.url} />
        <Description video={video} />
        <div className="comment-section">
          <div className="comment-write">
            <input className="comment-input" onChange={this.handleChange}
              name="text"
              value={text}
              id="outlined-basic"
              label="Send Comment"
              type="text" />
            <Button
              style={{ color: 'white', width: "100%" }}
              onClick={() => this.handleClick(text)}
              className="comment-btn">Send Comment</Button>
          </div>
          <div className="comments-block">
            {comments
              ?.map((comment) => {
                return <Comment key={comment} comment={comment} />
              })}
          </div>
        </div>
      </div >
    );
  }
}

class Comment extends Component {


  render() {
    return (
      <div className="comment">
        <div className="user-img">

        </div>
        <div className="comment-content">
          <p>Username</p>
          <p>{this.props.comment}</p>
        </div>
      </div>
    )
  }
}

export default Player;