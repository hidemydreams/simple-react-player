import React, { Component } from 'react'
import "./VideoItem.css";


export default class VideoItem extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { handleSetVideo, name, thumbnail } = this.props
    return (
      <div onClick={() => handleSetVideo(name)} className="video-item">
        <div className="thumbnail">
          <img src={thumbnail} alt="Thumbnail" />
        </div>
        <div>
          <h3 className="video-h3">{name}</h3>
        </div>
      </div>
    )
  }
}
