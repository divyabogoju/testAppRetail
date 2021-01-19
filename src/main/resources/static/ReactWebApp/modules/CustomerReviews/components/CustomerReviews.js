import React, { Component } from 'react';
import ReviewStars from "../../ReviewStars/components/ReviewStars";
import ReviewSummary from "./ReviewSummary";
import '../scss/customer-reviews.scss';


class CustomerReviews extends Component {

    render() {
        const { customerReview } = this.props;
        const [ itemReview ] = customerReview;
        const { consolidatedOverallRating, totalReviews, Pro, Con } = itemReview;
        const [ proItemReview ] = Pro;
        const [ conItemReview ] = Con;

        return (
            <section>
                <div className="customer-reviews">
                    <ReviewStars starsCount={consolidatedOverallRating} className="customer-reviews__star-rating-container" />
                    <div className="customer-reviews__rating-label">Overall</div>
                    <div>view all {totalReviews} reviews</div>
                </div>
                <div className="pro-con-reviews">
                    <div className="pro-con-reviews__review-header pro-con-reviews__pro-review-section-header">
                        <div>PRO</div>
                        <div>most helpful 4-5 star review</div>
                    </div>
                    <div className="pro-con-reviews__review-header pro-con-reviews__con-review-section-header">
                        <div>CON</div>
                        <div>most helpful 1-2 star review</div>
                    </div>
                    <ReviewSummary className='pro-con-review__summary' itemReview={proItemReview} />
                    <ReviewSummary className='pro-con-review__summary' itemReview={conItemReview} />
                </div>
            </section>
        );
    }
}

export default CustomerReviews;