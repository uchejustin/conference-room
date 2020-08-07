import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Booking extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="description">{post.title}</div>
        </div>
      );
    });
  }

  render() {
    return (
        <div>
          Booking Component
          <div className="ui celled list">{this.renderList()}</div>
        </div>
         );
    }
}

const mapStateToProps = state => {
  console.log("state is the following: ");
  console.log(state);
  return {
    posts: Object.values(state.posts)
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Booking);
