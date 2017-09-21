import React, { Component } from 'react';
import CommentList from '../components/CommentList.js';

class Comment extends Component {
  render() {
    return (
      <li key={this.props.key}>
        <div className="comment-body">
          <span>{this.props.id}, son of {this.props.parentId}</span>
          <p>
            {this.props.text}
          </p>
          <input
            id={this.props.id}
            className="textInput"
            type="text" 
            value={this.props.textInput}
            onChange={this.props.handleInputChange} />
        </div>
        <CommentList 
          parentId={this.props.id}
          comments={this.props.comments}
          handleInputChange={this.props.handleInputChange} />       
      </li>
    );
  }
}

export default Comment;
