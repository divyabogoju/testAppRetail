import React, { Component } from 'react';
import Carousel from "../../Carousel/components/Carousel";
import '../scss/title-and-carousel.scss';


class TitleAndCarousel extends Component {

    render() {
        const { catalogEntry } = this.props;
        const { Images, title } = catalogEntry;
        const [ itemImages ] = Images;
        const { AlternateImages, PrimaryImage } = itemImages;
        const ProductImages = [ ...PrimaryImage, ...AlternateImages ];
        return (
            <div className="product-title-and-carousel-outer">
                <div className="medium-title-container product-title-and-carousel-outer__product-title product-title-and-carousel__content">
                    {title}
                </div>
                <Carousel productImages={ProductImages} className="product-title-and-carousel__content" />
            </div>
        );
    }
}

export default TitleAndCarousel;