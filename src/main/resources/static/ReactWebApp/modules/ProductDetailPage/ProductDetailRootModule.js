import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import ProductDetailPage from './containers/ProductDetailPage';
import productDetailReducer from "./reducers/ProductDetailAppReducer";

const store = applyMiddleware(ThunkMiddleware)(createStore)(productDetailReducer);

const ProductDetailModule = (props) => {
    return (
        <Provider store={store}>
            <ProductDetailPage  pathParams={props.match.params}/>
        </Provider>
    )
};

export default ProductDetailModule;
