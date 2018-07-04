import React, { Component, Fragment } from "react";
import _ from "lodash";

import Table from "./Table";

class App extends Component {
  state = {
    standing: [],
    searchTerm: "",
    sortBy: "position",
    option: "asc"
  };

  componentDidMount() {
    fetch("//www.json-generator.com/api/json/get/bVBaIjVvZu?indent=2")
      .then(res => res.json())
      .then(json => this.setState({ standing: json.standing }));
  }

  searchHandler = e => {
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    });
  };

  sortBy = (by, option) => {
    const currentStanding = this.state.standing;
    let newStanding = [];
    if (this.state.option === "asc") {
      option = "desc";
      newStanding = _.orderBy(currentStanding, [by], [option]);
    } else if (this.state.option === "desc") {
      option = "asc";
      newStanding = _.orderBy(currentStanding, [by], [option]);
    }

    this.setState({
      standing: newStanding,
      sortBy: by,
      option: option
    });
  };

  render() {
    return (
      <Fragment>
        <div className="search">
          <div className="icon">
            <div className="circle" />
            <div className="bar" />
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.searchTerm}
              onChange={this.searchHandler}
            />
          </div>
        </div>
        <Table
          sortBy={this.sortBy}
          standing={this.state.standing}
          searchTerm={this.state.searchTerm}
        />
      </Fragment>
    );
  }
}

export default App;
