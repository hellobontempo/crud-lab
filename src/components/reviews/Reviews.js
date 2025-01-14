import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        Reviews
        {this.props.reviews.map(review => {
          return (
            <Review review={review} deleteReview={this.props.deleteReview}/>
          )
        })}
      </ul>
    );
  }
};

export default Reviews;