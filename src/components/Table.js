import React from "react";

import TableItem from "./TableItem";

class Table extends React.Component {
  render() {
    return (
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th
                className="small center"
                onClick={this.props.sortBy.bind(null, "position", "desc")}
              >
                #
              </th>
              <th className="medium center" />
              <th
                className="large"
                onClick={this.props.sortBy.bind(null, "teamName", "asc")}
              >
                Club
              </th>
              <th
                className="medium center"
                onClick={this.props.sortBy.bind(null, "points", "desc")}
              >
                Pts
              </th>
              <th
                className="medium center"
                onClick={this.props.sortBy.bind(null, "goalDifference", "desc")}
              >
                Diff
              </th>
            </tr>
          </thead>
          <tbody name="fade-list" is="transition-group">
            <TableItem
              standing={this.props.standing}
              searchTerm={this.props.searchTerm}
            />
          </tbody>
        </table>
        {this.props.standing.length < 0 && (
          <div className="warning">
            <span>No results found.</span>
          </div>
        )}
      </div>
    );
  }
}

export default Table;
