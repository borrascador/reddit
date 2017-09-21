import React, { Component } from 'react';
import Comment from '../components/Comment.js';

class CommentList extends Component {
  render() {
    let comments = this.props.comments.filter(comment => comment.parentId === this.props.parentId);
    let passedComments = this.props.comments;
    let handleInputChange = this.props.handleInputChange;
    
    function createComments(comment) {
      return (
        <Comment
          key={comment.key}
          id={comment.id}
          parentId={comment.parentId}
          text={comment.text}
          comments={passedComments}
          handleInputChange={handleInputChange} />
      )
    }

    let commentItems = comments.map(createComments);

    return (
      <ul>
        {commentItems}
      </ul>
    );
  }
}

export default CommentList;
