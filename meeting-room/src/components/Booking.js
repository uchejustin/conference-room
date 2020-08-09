import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Booking extends Component {
  componentDidMount() {
    //this.props.fetchPosts();
  }

  renderList() {
    return this.props.features.map(item => {
      return (
          <div className="description">Booking</div>
      );
    });
  }

  render() {
    return (
        <div>
          Booking Component
        </div>
         );
    }
}

export default connect()(Booking);
