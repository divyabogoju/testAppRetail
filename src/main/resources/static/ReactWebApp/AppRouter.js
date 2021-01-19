import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductDetailModule from "./modules/ProductDetailPage/ProductDetailRootModule";

export class AppRouter extends Component {
    render() {
        window.scrollTo(0, 0);
        return (
            <BrowserRouter basename='/'>
                <Switch>
                    <Route path="/stub/catalog/item/:itemId" component={ProductDetailModule} />
                    <Route path="/" component={ProductDetailModule} />
                </Switch>
            </BrowserRouter>)
    }
}
