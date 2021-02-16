import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/youtube";
import VideoDetails from "./VideoDetails";
class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    const { items } = response.data;
    this.setState({ videos: items, selectedVideo: items[0] });
  };

  onVideoSelect = (video) => {
    console.log("From the App!", video);
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
