import { combineReducers } from 'redux';
import { ITEM_DETAILS } from "../../../common/util/actionReducerKeys";
import fetchReducerFactory from "../../../common/reducers/fetchReducerFactory";

const productDetailReducer = combineReducers({
    itemDetails: fetchReducerFactory(ITEM_DETAILS)
});

export default productDetailReducer;
