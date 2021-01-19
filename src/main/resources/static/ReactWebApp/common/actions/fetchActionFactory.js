import { baseFetch, handleResponse } from '../util/fetchUtilities';

export const FETCH_BEGIN = 'FETCH_BEGIN';
export const FETCH_FAIL = 'FETCH_FAIL';
export const FETCH_FINISH = 'FETCH_FINISH';
export const FETCH_CLEAR = 'FETCH_CLEAR';

export const beginFetchType = (actionType) => `${actionType}_${FETCH_BEGIN}`;
export const finishFetchType = (actionType) => `${actionType}_${FETCH_FINISH}`;
export const failFetchType = (actionType) => `${actionType}_${FETCH_FAIL}`;
export const clearFetchType = (actionType) => `${actionType}_${FETCH_CLEAR}`;

/**
 * Create an action object that indicates a fetch has begun.
 */
export const beginFetch = (actionType) => {
    return {
        type: beginFetchType(actionType)
    }
};

/**
 * Create an action object that indicates a fetch has finished.
 * It may have ended with a failure status code.  But it did finish.
 */
export const finishFetch = (actionType, status, payload) => {
    return {
        type: finishFetchType(actionType),
        status,
        payload
    }
};

/**
 * Create an action object that indicates a fetch has ended with an error.
 */
export const failFetch = (actionType, error) => {
    return {
        type: failFetchType(actionType),
        error
    }
};

/**
 * A redux action to clear the results of a fetch, and reset the corresponding redux state to its initial state.
 *
 * @param actionType, should correspond to the actionType of the fetch you want to clear the response for.
 */
export const clearFetchAction = (actionType) => {
    return { type: clearFetchType(actionType) };
};

/**
 * A redux action to simplify most cases of working with fetch.  To be used in concert with fetchReducer.
 *
 * Whenever you make a fetch, two actions will be dispatched.  A "begin", and then either a "finish" or a "fail."
 *
 * The first, "begin", will be dispatched to redux before the HTTP request is made.  Its action type is
 * a compound name composed of the actionType you pass in, with "_FETCH_BEGIN" appended.
 *
 * Then, if the HTTP request is able to complete successfully in fetch without throwing an exception --
 * please note that this includes 500 response codes from the host -- a "finish" action will be dispatched.
 * Again, this action will be the actionType you pass in, with "_FETCH_FINISH" appended.
 *
 * Alternately, if an error is thrown, which can be caused by (1) the HTTP request failing,
 * (2) the response payload being unable to be parsed, or (3) some internal Redux error in dispatch(),
 * an action will be dispatched with the actionType you passed in, with "_FETCH_FAIL" appended.
 *
 * @See fetchReducer
 *
 * @param actionType, for each fetchReducer you create, you should create a unique actionType to pass in here.
 * @param url, the address to pass into fetch, including the query parameters (see the fetch API)
 * @param options, the options to pass into fetch, (see the fetch API); this parameter is optional
 * @returns {function(*)} An async function which is dispatched through Redux-thunk
 */
const fetchAction = (actionType, url, options = {}) => {
    return async dispatch => {
        try {
            dispatch(beginFetch(actionType));
            const fetchResult = await baseFetch(url, options).then(handleResponse);
            const { status, payload } = fetchResult;
            dispatch(finishFetch(actionType, status, payload));
        } catch (error) {
            console.log(error);
            dispatch(failFetch(actionType, error));
        }
    }
};

export default fetchAction;