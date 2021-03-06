import React, { Component } from 'react';
import Comment from '../components/Comment.js';

class ThreadContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [
        /*{
          key: Date.now(),
          parentComment: null,
          username: 'Jan',
          text: 'Hello, world!',
          toggleInput: false,
          usernameInput: '',
          textInput: ''
        }*/
        {
          key: 1,
          id: 1,
          parentId: 0,
          text: "Check out my funny joke!",
          textInput: ''
        }, {
          key: 2,
          id: 2,
          parentId: 1,
          text: "Wow, that's great!",
          textInput: ''
        }, {
          key: 3,
          id: 3,
          parentId: 1,
          text: "LOL'D",
          textInput: ''
        }, {
          key: 4,
          id: 4,
          parentId: 3,
          text: "Hahaha just imagined you laughing, bro. LOL'D indeed.",
          textInput: ''
        }, {
          key: 5,
          id: 5,
          parentId: 1,
          text: "Am I third or fourth to the party?",
          textInput: ''
        }
      ],
    };

    this.handleSubmitComment = this.handleSubmitComment.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleSubmitComment(event) {
    let commentArray = this.state.comments;

    commentArray.push(
      {
        key: Date.now(),
        id: null,
        parentId: null,
        username: null,
        text: null,
        toggleInput: false,
        usernameInput: '',
        textInput: ''
      }
    );

    this.setState({
      comments: commentArray
    });

    console.log(this.state.comments);
    event.preventDefault();
  }

  handleInputChange(event) {
    let target = event.target;
    let value = target.value;
    let name = target.className;
    let id = target.id;

    let commentArray = this.state.comments;
    let index = commentArray.findIndex((obj => obj.id == id));
    commentArray[index][name] = value;
    
    this.setState({
      comments: commentArray
    });
  }

  render () {
    let firstComment = this.state.comments[0];

    return (
      <div>
        <h1>
          REDDITYET?
        </h1>
        <ul>
          <Comment
            key={firstComment.key}
            id={firstComment.id}
            parentId={firstComment.parentId}
            text={firstComment.text}
            textInput={firstComment.textInput}
            comments={this.state.comments}
            handleInputChange={this.handleInputChange} />
        </ul>
      </div>
    );
  }
}

export default ThreadContainer;
