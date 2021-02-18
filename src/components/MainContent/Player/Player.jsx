import React, { Component } from 'react';
import ReactPlayer from 'react-player/youtube'
import Description from '../Description/Description';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

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
    this.setState({
      comments: [...this.state.comments, comment]
    })
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
            <TextField
              style={{ width: "100%" }}
              onChange={this.handleChange}
              name="text"
              value={text}
              id="outlined-basic"
              label="Send Comment"
              variant="outlined" />
            <Button
              style={{ color: 'white', width: "100%" }}
              onClick={() => this.handleClick(text)}
              className="comment-btn">Send Comment</Button>
          </div>
          <div className="comments-block">
            {comments
              ?.map((comment) => {
                return <p className="comment">{comment}</p>
              })}
          </div>
        </div>
      </div >
    );
  }
}

export default Player;