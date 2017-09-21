import React, { Component } from 'react';

class InputReply extends Component {
  render() {
    return (
      <form>
        <label>
          Username:
          <input
            name="username"
            type="text"
            value={this.props.username}
            onChange={this.props.handleInputChange} />
        </label>
        <br />
        <label>
          Comment:
          <input
            name="text"
            type="text"
            value={this.props.text}
            onChange={this.props.handleInputChange} />
        </label>
        <button onClick={this.props.handleSubmitComment}>Submit</button>
      </form>
    );
  }
}

export default InputReply;        
