import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // Provided by ReactRouter
    // 'params' gives us wild card values in our URL; extract 'id' specifically
    const { id } = this.props.match.params;
    this.props.fetchPost();
  }

  render() {
    const { title, categories, content } = this.props.post;

    return (
      <div>
        <Link
          className="btn btn-primary"
          to="/">
          Back to Posts
        </Link>
        <div>{title}</div>
        <div>{categories}</div>
        <div>{content}</div>
      </div>
    )
  }
}

// 'ownProps' === 'this.props';
// this is how you access it in mapStateToProps()
// Used for intermediate calculations
function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);
