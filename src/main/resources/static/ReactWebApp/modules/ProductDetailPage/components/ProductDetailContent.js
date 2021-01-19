import React, { Component } from 'react';
import CustomerReviews from "../../CustomerReviews/components/CustomerReviews";
import DescriptionAndOffers from "../../DescriptionAndOffers/components/DescriptionAndOffers";
import TitleAndCarousel from "../../TitleAndCarousel/components/TitleAndCarousel";


class ProductDetailContent extends Component {

    render() {
        const { fetchedPayload: { CatalogEntryView } } = this.props;
        const [ ItemCatalogEntryView ] = CatalogEntryView;
        const { CustomerReview: ItemCustomerReview } = ItemCatalogEntryView;

        return (
            <div className="product-detail-container">
                <TitleAndCarousel catalogEntry={ItemCatalogEntryView} />
                <DescriptionAndOffers catalogEntry={ItemCatalogEntryView} />
                <CustomerReviews customerReview={ItemCustomerReview} />
            </div>
        );
    }
}

export default ProductDetailContent;