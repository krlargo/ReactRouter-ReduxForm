import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    // Provided by ReactRouter
    // 'params' gives us wild card values in our URL; extract 'id' specifically
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    if(!this.props.post) {
      return <div>Loading...</div>;
    }

    const { title, categories, content } = this.props.post;

    return (
      <div>
        <Link to="/">
          Back to Posts
        </Link>

        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
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
