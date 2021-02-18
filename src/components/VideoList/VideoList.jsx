import React, { Component } from 'react'
import VideoItem from './VideoItem/VideoItem';
import './VideoList.css'
import { Button } from '@material-ui/core';

export default class Videolist extends Component {

  render() {
    let { filteredVideos, handleSetVideo, isFiltered, data, handleShowAll, isEmpty } = this.props

    if (filteredVideos.length < data.length) {
      isFiltered = true
    }

    if (filteredVideos.length < 1) {
      isEmpty = true
    }
    return (
      <div className="video-list">
        {isFiltered ? <Button
          className="show-all_btn"
          style={{ color: 'white' }}
          onClick={() => handleShowAll()}>Show All
          </Button> : null}
        {isEmpty ? <p>There are no videos by your search </p> : null}
        {filteredVideos.map((video) => {
          return <VideoItem data={filteredVideos} thumbnail={video.thumbnail} url={video.url} name={video.name} key={video.id} handleSetVideo={handleSetVideo} />
        })}
      </div>
    )
  }
}
