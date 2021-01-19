import React, { Component } from 'react';
import Parser from 'html-react-parser';
import '../scss/description-and-offers.scss';
import OrderForm from "./OrderForm";


class DescriptionAndOffers extends Component {

    render() {
        const { catalogEntry } = this.props;
        const { ItemDescription, Offers, Promotions, purchasingChannelCode, ReturnPolicy } = catalogEntry;
        const [ description ] = ItemDescription;
        const [ returnInfo ] = ReturnPolicy;
        //extracting price info
        const [ offer ] = Offers;
        const { OfferPrice } = offer;
        const [ itemPrice ] = OfferPrice;

        return (
            <div className="product-details">
                <div className="medium-title-container product-details__price">
                    {itemPrice.formattedPriceValue}
                    <div className="subscript-title">{itemPrice.priceQualifier}</div>
                </div>
                <div className="product-details__promotions-content">
                    <ul>
                        {Promotions.map((promo, index) => {
                                return (
                                    <li className="product-details__promotions-list-item" key={`promo-${index}`}>
                                        {promo[ "Description" ][ 0 ].shortDescription}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
                <OrderForm catalogEntry={catalogEntry} />
                <div>
                    <div className="large-title-container product-details__product-highlights-title">
                        product highlights
                    </div>
                    <ul>
                        {description.features.map(
                            (feature, index) => <li className="product-details__product-highlights-list" key={`description-${index}`}>{Parser(feature)}</li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
}

export default DescriptionAndOffers;