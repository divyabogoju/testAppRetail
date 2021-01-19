import React from 'react';
import ReactDOM from 'react-dom';
import './reactSpringApp.scss';
import ProductDetailModule from "./modules/ProductDetailPage/ProductDetailRootModule";
import { AppRouter } from "./AppRouter";


ReactDOM.render(
    <AppRouter />
    , document.querySelector('#react-content')
);
