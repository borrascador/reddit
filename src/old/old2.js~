import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert("A comment was submitted: " + event.target.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Comment:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class CommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    const value = this.props.value;
    return (
      <div>
        <input
          value={value}
          onChange={this.handleChange} />
      </div>
    );
  }
}

class CommentList extends React.Component {
  render() {
    let commentList = this.props.commentList;

    function createComments(comment) {
      return (
        <li key={comment.key}>
          <Thread comment={comment}/>
        </li>
      );
    }

    let listComments = commentList.map(createComments);

    return (
      <ul className="replyList">
        {listComments}
      </ul>
    );
  }
}

class Thread extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      value: '',
    }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }
  
  handleInputChange(value) {
    this.setState({value});
  }

  addComment(e) {
    if (this.state.value !== "") {
      let commentArray = this.state.comments;

      commentArray.push(
        {
          text: this.state.value,
          key: Date.now(),
          score: 0
        }
      );
      
      console.log(commentArray[commentArray.length-1]);

      this.setState({
        comments: commentArray,
        value: ''
      });
    }
    
    e.preventDefault();
  }

  render() {
    let comment;
    if (this.state.comments.length === 0) {
      comment = {
        text: "This should be interesting!",
        key: Date.now(),
        score: 0
      }
      console.log("fire");
    } else {
      comment = this.state.comments[this.state.comments.length-1];
    }

    return (
      <div className="comment">
        <div className="commentHeader">
          {comment.key}
        </div>
        <div className="commentText">
          {comment.text}
        </div>
        <div className="commentFooter">
          {comment.score}
        </div>
        <div className="commentReplyBox">
          <form onSubmit={this.addComment}>
            <CommentInput
              value={this.state.value}
              onChange={this.handleInputChange} />
            <button type="submit">+</button>
          </form>
        </div>
        <CommentList commentList={this.state.comments}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Thread />,
  document.getElementById('root'));
