import React from 'react';

class ComboReusable extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <select
        id={this.props.id}
        className="inputField form-control form-control-md"
        value={this.props.updateValue}
        onChange={this.props.onChange}
      >
        <option key="" value="0" selected disabled hidden>
          Izaberite {this.props.deoNaziva}
        </option>
        {this.props.items}
      </select>
    );
  }
}

export default ComboReusable;
