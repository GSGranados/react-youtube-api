import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
class App extends Component {
  state = {
    videos: [],
  };
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    const { items } = response.data;
    this.setState({ videos: items });
    console.log(this.state.videos);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
