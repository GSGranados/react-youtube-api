import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    term: "",
  };

  onInputChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onFormSubmit(this.state.term);
    //Make sure we call callback from parent component
  };

  render() {
    const { term } = this.state;
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              value={term}
              type="text"
              onChange={(e) => this.onInputChange(e)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
