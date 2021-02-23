import "./App.css";
import React from "react";
import Player from "./components/MainContent/Player/Player";
import MainLayout from "./components/MainLayout/MainLayout";
import Videolist from "./components/VideoList/VideoList";

import { data } from "./data";
import SearchBar from "./components/common/SearchBar/SearchBar";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedVideo: data[0],
      searchInputValue: "",
      comments: [],
      isSearchOpened: false,
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
      searchInputValue: "",
    });
  };

  handleInput = (e) => {
    this.setState({
      searchInputValue: e.target.value,
    });
  };

  handleShowAll = () => {
    this.setState({
      searchInputValue: "",
    });
  };

  handleSearchBtn = () => {
    this.setState({ isSearchOpened: !this.state.isSearchOpened });
  };

  render() {
    const { pickedVideo } = this.state;
    let filteredVideos = data.filter((vid) => {
      return vid.name
        .toLowerCase()
        .includes(this.state.searchInputValue.toLowerCase());
    });
    return (
      <div className="App">
        <MainLayout>
          <SearchBar
            isSearchOpened={this.state.isSearchOpened}
            handleSearchBtn={this.handleSearchBtn}
            searchInputValue={this.state.searchInputValue}
            handleInput={this.handleInput}
          />
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
