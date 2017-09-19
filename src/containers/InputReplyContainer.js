import React, { Component } from 'react';
import InputReply from '../components/InputReply.js';

class InputReplyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      text: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <InputReply 
        username={this.state.username}
        text={this.state.text}
        handleInputChange={this.handleInputChange} 
        handleSubmitComment={this.props.handleSubmitComment} />
    );
  }
}

export default InputReplyContainer;
