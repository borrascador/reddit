import React, { Component } from 'react';
import Comment from '../components/Comment.js';

class CommentList extends Component {
  render() {
    let comments = this.props.comments.filter(comment => comment.parentId === this.props.parentId);
    console.log(comments);

    let passedComments = this.props.comments;
    
    function createComments(comment) {
      return (
        <Comment
          key={comment.key}
          id={comment.id}
          parentId={comment.parentId}
          text={comment.text}
          comments={passedComments} />
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
