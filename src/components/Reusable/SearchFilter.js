import React, { Component } from 'react';

class SearchFilter extends Component {
  constructor(props) {
    super(props);
  }

  filterTable() {
    var input, filter, table, tr, td, i, j, cell, noSearchColums;

    input = this.props.signal
      ? document.getElementById('searchInputField')
      : document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    table = this.props.signal
      ? document.getElementById('filterTable')
      : document.getElementById('table');
    tr = table.tBodies[0].getElementsByTagName('tr');
    noSearchColums = this.props.noSearchColums;

    for (i = 0; i < tr.length; i++) {
      tr[i].style.display = 'none';
      td = tr[i].getElementsByTagName('td');

      for (var j = 0; j < td.length - noSearchColums; j++) {
        cell = tr[i].getElementsByTagName('td')[j];
        if (cell) {
          if (cell.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
            break;
          }
        }
      }
    }
  }

  render() {
    var param = this.props.param;
    let signal = this.props.signal;
    let idName = signal ? 'searchInputField' : 'searchInput';
    return (
      <div className="row text">
        <div className="Filter col-md-12">
          <span className="searchIcon align-self-center p-2">
            <i className="fas fa-search"></i>
          </span>
          <input
            type="text"
            className="searchPlaceholder col-12 p-2"
            id={idName}
            onKeyUp={this.filterTable.bind(this)}
            placeholder="Search..."
            value={param}
          />
        </div>
      </div>
    );
  }
}

export default SearchFilter;
