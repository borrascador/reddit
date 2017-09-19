import React, { Component } from 'react';
import Comment from '../components/Comment.js';

class ThreadContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
    this.handleSubmitComment = this.handleSubmitComment.bind(this);
  }

  handleSubmitComment(text, parentComment, e) {
    let commentArray = this.state.comments;

    commentArray.push(
      {
        text: text,
        parentComment: parentComment,
        key: Date.now(),
        score: 0
      }
    );

    this.setState({
      comments: commentArray
    });

    console.log(this.state.comments);
    e.preventDefault();
  }

  render () {
    return (
      <div>
        <Comment
          handleSubmitComment={this.handleSubmitComment} />
      </div>
    );
  }
}

export default ThreadContainer;
