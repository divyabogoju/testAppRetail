import { beginFetchType, clearFetchType, failFetchType, finishFetchType } from '../actions/fetchActionFactory';

export const LOADING_STATE = 'loading';
export const DONE_STATE = 'done';
// named 'THROWN_STATE' to avoid confusion with 500 responses, which are actually 'DONE_STATE'
export const THROWN_STATE = 'thrown';

/**
 * This reducer works in concert with fetchAction.  In the majority of use cases, you can make use
 * of it directly.  In more interesting scenarios, you may need to transform the response.
 * In that case, make use of reducer composition.
 *
 * Below we use a function that returns a function, so that we can "bake in" the action type
 * that our reducer will recognize as its "type of fetch."  For more information about this
 * type of pattern, see https://redux.js.org/docs/recipes/reducers/ReusingReducerLogic.html
 *
 * The state produced by this reducer is basically a reflection of the actions in fetchAction.
 * Restating how fetchAction and the code below will interplay:
 * - The only attribute that is guaranteed to be present is "state".
 * - If the state is "loading", neither status, payload, nor error will be present.
 * - If the state is "done", there will be a status, but the payload is optional. Error is undefined.
 * - If the state is "thrown", there will be an error, but status and payload will be undefined.
 * - In all states, if the original fetchAction was provided a requestMetadata object, it will
 *   be returned in the requestMetadata attribute of the state.
 *
 * Those attributes again ...
 *  - state: can be "loading", "done", or "thrown", (corresponding to "begin", "finish", and "fail" actions)
 *  - status: the HTTP status code of the fetch response
 *  - payload: the JSON (or text) response from the fetch response
 *  - error: if the state is "thrown", you can find the error thrown here
 *  - requestMetadata: if you provided something here when making the fetch, you'll get it back
 *
 * @param actionType, the unique action identifier associated with the redux action that this reducer will handle
 * @param initialState, the redux state this reducer should start with (optional)
 */
const fetchReducerFactory = (actionType, initialState = null) => {
    const BEGIN_FETCH_ACTION = beginFetchType(actionType);
    const FINISH_FETCH_ACTION = finishFetchType(actionType);
    const FAIL_FETCH_ACTION = failFetchType(actionType);
    const CLEAR_FETCH_ACTION = clearFetchType(actionType);

    return (state = initialState, { type, ...action }) => {
        switch (type) {
            case BEGIN_FETCH_ACTION:
                return { state: LOADING_STATE, ...action };
            case FINISH_FETCH_ACTION:
                return { state: DONE_STATE, ...action };
            case FAIL_FETCH_ACTION:
                return { state: THROWN_STATE, ...action };
            case CLEAR_FETCH_ACTION:
                return initialState;
        }
        return state
    }
};

export default fetchReducerFactory;
