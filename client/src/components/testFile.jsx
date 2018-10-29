import React, { Component } from 'react'

export default class TestFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mirror: ''
    };
    this.updateMirror = this.updateMirror.bind(this);
  }

  updateMirror(e) {
    let val = e.target.value;
    this.setState((prevState, props) => {
      return {
        mirror: val
      };
    });
  }

  render() {
    return <div>
      <div><input type="text" name="mirror" onChange={this.updateMirror} /></div>
      <div test="mirror">{this.state.mirror}</div>
    </div>
  }
}
