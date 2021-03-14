import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {


  render() {
    const filterReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview}/>
        <Reviews reviews={filterReviews} restaurantId={this.props.restaurant.id} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}
const mapDispatchToProps = dispatch => {
  return {
  addReview: (review) => dispatch({type:"ADD_REVIEW", review}),
  deleteReview: (id) => dispatch({type:"DELETE_REVIEW", id})
}
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
