import React, { Component } from 'react';

class InputReply extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmitComment}>
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
        <input type="submit" value="submit form"/>
      </form>
    );
  }
}

export default InputReply;        
