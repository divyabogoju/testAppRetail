import fetchAction from "../../../common/actions/fetchActionFactory";
import { ITEM_DETAILS } from "../../../common/util/actionReducerKeys";

const fetchProductDetailPageAction = (params) => {
    const url = (params && params.itemId) ? `/stub/productDetail/${params.itemId}` : '/productDetail';
    return fetchAction(ITEM_DETAILS, url);
};

export default fetchProductDetailPageAction;