import React, { Component } from 'react';
import '../scss/review-star-rating.scss';


class ReviewStars extends Component {

    render() {
        const { starsCount, className } = this.props;
        const starsCountNumber = Number(starsCount);
        return (
            <div className={`${className} star-rating-container`}>
                {[ 1, 2, 3, 4, 5 ].map((x, i) => {
                    return (<div key={`review-star-${x}`} className={(x <= starsCountNumber) ? "target-red-font-color review-star" : "review-star"} />);
                })}
            </div>
        );
    }

}

export default ReviewStars;