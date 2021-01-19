import React, { Component } from 'react';
import ReviewStars from "../../ReviewStars/components/ReviewStars";
import moment from "moment";
import '../scss/review-summary.scss'


class ReviewSummary extends Component {

    render() {
        const { itemReview, className } = this.props;
        const { overallRating, title, review, screenName, datePosted } = itemReview;
        const momentDate = moment(datePosted);
        const formattedDate = momentDate.format('MMMM DD, YYYY');
        return (
            <div className={`${className} review-summary`}>
                <ReviewStars starsCount={overallRating} />
                <div className="review-summary__title">{title}</div>
                <div className="review-summary__content">{review}</div>
                <div className="review-summary__metadata">{screenName} {formattedDate}</div>
            </div>
        );
    }
}

export default ReviewSummary;