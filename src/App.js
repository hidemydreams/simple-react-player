import "./App.css";
import React from "react";
import Player from "./components/MainContent/Player/Player";
import MainLayout from "./components/MainLayout/MainLayout";
import Videolist from "./components/VideoList/VideoList";

import { data } from "./data";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedVideo: data[0],
      allVideos: "",
      comments: [],
    };
  }

  handleSubmit = (text) => {
    this.setState({
      comments: [...this.state.comments, text],
    });
  };

  handleSetVideo = (name) => {
    const findByName = data.find((vid) => vid.name === name);
    this.setState({
      pickedVideo: findByName,
    });
  };

  handleInput = (e) => {
    this.setState({
      allVideos: e.target.value,
    });
  };

  handleShowAll = () => {
    this.setState({
      allVideos: "",
    });
  };

  render() {
    const { pickedVideo } = this.state;
    let filteredVideos = data.filter((vid) => {
      return vid.name
        .toLowerCase()
        .includes(this.state.allVideos.toLowerCase());
    });

    return (
      <div className="App">
        <MainLayout>
          <input
            onChange={this.handleInput}
            placeholder="I want to find..."
            className="input"
          ></input>
          <div className="content-container">
            <Player video={pickedVideo} />
            <Videolist
              filteredVideos={filteredVideos}
              handleSetVideo={this.handleSetVideo}
              isFiltered={false}
              data={data}
              handleShowAll={this.handleShowAll}
              isEmpty={false}
            />
          </div>
        </MainLayout>
      </div>
    );
  }
}

export default App;
