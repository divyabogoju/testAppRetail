import React, { Component, Fragment } from 'react';
import Parser from "html-react-parser";
import '../scss/product-details-order-form.scss'
import { AddToCartButton, OrderQuantityField, PickupInStoreButton } from "../../../common/components/OrderButtons";

class OrderForm extends Component {

    isAddToCartEnabled = (pcc) => {
        const pccNumber = Number(pcc);
        const addToCartPCCValues = [ 0, 1 ];
        return addToCartPCCValues.includes(pccNumber);
    };

    isISPUEnabled = (pcc) => {
        const pccNumber = Number(pcc);
        const ISPUPCCValues = [ 0, 2 ];
        return ISPUPCCValues.includes(pccNumber);
    };

    render() {

        const { catalogEntry } = this.props;
        const { purchasingChannelCode, ReturnPolicy } = catalogEntry;
        const [ returnInfo ] = ReturnPolicy;

        return (
            <Fragment>
                <form className="product-details-order-form">
                    <OrderQuantityField className="product-details-order-form__order-quantity" />
                    {this.isISPUEnabled(purchasingChannelCode) &&
                    <PickupInStoreButton className="product-details-order-form__in-store-pickup" />}
                    {this.isAddToCartEnabled(purchasingChannelCode) &&
                    <AddToCartButton className="product-details-order-form__add-to-cart" />}
                </form>
                {this.isISPUEnabled(purchasingChannelCode) &&
                <div className="product-details-order-form__find-in-store-container">
                    <a className="product-details-order-form__find-in-store-link">find in a store</a>
                </div>}
                <aside className="product-details-order-form__returns-section">
                    <h5 className="product-details-order-form__returns-label">returns</h5>
                    <p className="product-details-order-form__returns-content">{Parser(returnInfo.legalCopy)}</p>
                </aside>
                <form className="product-details-order-form__action-buttons-outer">
                    <button className="product-details-order-form__action-button">ADD TO REGISTRY</button>
                    <button className="product-details-order-form__action-button">ADD TO LIST</button>
                    <button className="product-details-order-form__action-button">SHARE</button>
                </form>
            </Fragment>);

    }
}

export default OrderForm