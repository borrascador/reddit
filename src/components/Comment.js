import React, { Component } from 'react';
import CommentList from '../components/CommentList.js';

class Comment extends Component {
  render() {
    return (
      <li key={this.props.key}>
        {this.props.text}
        <CommentList 
          parentId={this.props.id}
          comments={this.props.comments} />       
      </li>
    );
  }
}

export default Comment;
