import React, { Component } from 'react';
import { connect } from "react-redux";
import fetchProductDetailPageAction from "../actions/fetchProductDetailPageAction";
import Spinner from "../../../common/components/spinnerComponent";
import { DONE_STATE, LOADING_STATE, THROWN_STATE } from "../../../common/reducers/fetchReducerFactory";
import ProductDetailContent from "../components/ProductDetailContent";
import '../scss/product-detail-page.scss';

class ProductDetailPage extends Component {

    componentDidMount() {
        const { pathParams } = this.props;
        this.props.fetchProductDetailPageAction(pathParams);
    }

    render() {
        if (this.props.productDetailPayload) {
            const { state: fetchedState, payload: fetchedPayload } = this.props.productDetailPayload;
            switch (fetchedState) {
                case LOADING_STATE:
                    return <Spinner />;
                case DONE_STATE:
                    return <ProductDetailContent fetchedPayload={fetchedPayload} />;
                case THROWN_STATE:
                    return <div> Something went wrong when fetching the data</div>
            }
        }
        return <div />
    }
}

const mapStateToProps = (state) => {
    return {
        productDetailPayload: state.itemDetails
    }
};

export default connect(mapStateToProps, { fetchProductDetailPageAction })(ProductDetailPage);