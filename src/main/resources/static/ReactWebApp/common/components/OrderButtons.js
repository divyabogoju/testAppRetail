import React, {Component} from 'react';
import '../scss/__blocks/product-order-button.scss';
import '../scss/__blocks/product-order-quantity.scss';

export const PickupInStoreButton = (props) => {
    const { className = '' } = props;
    return (
        <button className={`${className} product-order-button in-store-pickup`}>
            PICK UP IN STORE
        </button>
    );
};

export const AddToCartButton = (props) => {
    const { className = '' } = props;
    return (
        <button className={`${className} product-order-button add-to-cart`}>
            ADD TO CART
        </button>
    );
};

export class OrderQuantityField extends Component {

    state = {
        orderQuantity: ''
    };

    processData = (i) => i.replace(/[^\d]/ig, '');

    updateOrderQuantity = (quantity) => {
        const currentQuantity = Number(this.state.orderQuantity);
        let newQuantity = currentQuantity + quantity;
        newQuantity = newQuantity > 0 ? newQuantity : 0;
        this.setState({ orderQuantity: newQuantity });
    };

    orderQuantityChanged = (e) => {
        this.setState({ orderQuantity: this.processData(e.target.value) });
    };

    render() {
        const { className = '' } = this.props;
        return (
            <div className={`${className} product-order-quantity`}>
                <label className="product-order-quantity__input-label">quantity:</label>
                <div className="circle-btn remove-items product-order-quantity__circle-btn" onClick={this.updateOrderQuantity.bind(this, -1)} />
                <input type="text" size="2" maxLength="2" onChange={this.orderQuantityChanged} value={this.state.orderQuantity} />
                <div className="circle-btn add-items product-order-quantity__circle-btn" onClick={this.updateOrderQuantity.bind(this, 1)} />
            </div>
        );
    }
};